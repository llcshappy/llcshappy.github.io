#!/usr/bin/env python3
"""Regenerate feed.xml and refresh sitemap.xml lastmod from notes.html.

notes.html stays the single source of truth: each <li class="note-entry"> with an
id and a <time datetime="..."> becomes one RSS item. English titles/bodies are
looked up in assets/i18n.js by their data-i18n key so the feed reads in English
even though the markup carries the Chinese copy.

Usage:  python3 tools/build-feed.py
"""

from __future__ import annotations

import html
import json
import re
import sys
from datetime import datetime, timezone
from email.utils import format_datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://llcshappy.github.io"
AUTHOR = "Luyang Wang (王鲁阳)"
EMAIL = "llcshappy@gmail.com"
MAX_ITEMS = 30

NOTES = ROOT / "notes.html"
I18N = ROOT / "assets" / "i18n.js"
FEED = ROOT / "feed.xml"
SITEMAP = ROOT / "sitemap.xml"

ENTRY_RE = re.compile(
    r'<li class="note-entry"[^>]*\bid="(?P<id>[^"]+)"[^>]*>(?P<inner>.*?)</li>',
    re.S,
)
TIME_RE = re.compile(r'<time datetime="(?P<date>\d{4}-\d{2}-\d{2})"')
TITLE_RE = re.compile(r'<h3 class="note-title">(?P<inner>.*?)</h3>', re.S)
BODY_RE = re.compile(r'<div class="note-body"(?P<attrs>[^>]*)>(?P<inner>.*?)</div>', re.S)
KEY_RE = re.compile(r'data-i18n="(?P<key>[^"]+)"')


def load_en_strings() -> dict[str, str]:
    """Pull the `en:` block out of i18n.js without needing a JS engine."""
    src = I18N.read_text(encoding="utf-8")
    start = src.index("en: {")
    depth, i = 0, src.index("{", start)
    for j in range(i, len(src)):
        if src[j] == "{":
            depth += 1
        elif src[j] == "}":
            depth -= 1
            if depth == 0:
                block = src[i : j + 1]
                break
    else:
        raise SystemExit("could not locate the en: block in i18n.js")

    out: dict[str, str] = {}
    # keys are either bare identifiers or quoted; values are double-quoted strings
    for m in re.finditer(r'(?:"([^"]+)"|(\w+))\s*:\s*\n?\s*"((?:[^"\\]|\\.)*)"', block):
        key = m.group(1) or m.group(2)
        try:
            out[key] = json.loads('"' + m.group(3) + '"')
        except json.JSONDecodeError:
            continue
    return out


def strip_tags(s: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", s)).strip()


def collect_notes() -> list[dict]:
    src = NOTES.read_text(encoding="utf-8")
    en = load_en_strings()
    notes = []

    for m in ENTRY_RE.finditer(src):
        inner, note_id = m.group("inner"), m.group("id")

        tm = TIME_RE.search(inner)
        if not tm:
            print(f"  ! skipping {note_id}: no <time datetime>", file=sys.stderr)
            continue

        title_m = TITLE_RE.search(inner)
        title = ""
        if title_m:
            k = KEY_RE.search(title_m.group("inner"))
            title = en.get(k.group("key"), "") if k else ""
            if not title:
                title = strip_tags(re.sub(r"<a class=\"note-permalink\".*?</a>", "", title_m.group("inner"), flags=re.S))

        body_m = BODY_RE.search(inner)
        body = ""
        if body_m:
            k = KEY_RE.search(body_m.group("attrs"))
            body = en.get(k.group("key"), "") if k else ""
            if not body:
                body = body_m.group("inner").strip()

        notes.append(
            {
                "id": note_id,
                "date": tm.group("date"),
                "title": title or note_id,
                "body": body,
                "url": f"{SITE}/notes.html#{note_id}",
            }
        )

    notes.sort(key=lambda n: n["date"], reverse=True)
    return notes[:MAX_ITEMS]


def rfc822(date: str) -> str:
    dt = datetime.strptime(date, "%Y-%m-%d").replace(tzinfo=timezone.utc)
    return format_datetime(dt)


def write_feed(notes: list[dict]) -> None:
    now = format_datetime(datetime.now(timezone.utc))
    items = []
    for n in notes:
        items.append(
            "    <item>\n"
            f"      <title>{html.escape(n['title'])}</title>\n"
            f"      <link>{n['url']}</link>\n"
            f"      <guid isPermaLink=\"true\">{n['url']}</guid>\n"
            f"      <pubDate>{rfc822(n['date'])}</pubDate>\n"
            f"      <dc:creator>{html.escape(AUTHOR)}</dc:creator>\n"
            f"      <description>{html.escape(n['body'])}</description>\n"
            "    </item>"
        )

    FEED.write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" '
        'xmlns:dc="http://purl.org/dc/elements/1.1/">\n'
        "  <channel>\n"
        "    <title>Luyang Wang (王鲁阳) — Notes</title>\n"
        f"    <link>{SITE}/notes.html</link>\n"
        "    <description>Notes, reading summaries, and engineering takeaways on "
        "machine vision, sensors, and edge AI.</description>\n"
        "    <language>en</language>\n"
        f"    <managingEditor>{EMAIL} ({AUTHOR})</managingEditor>\n"
        f"    <webMaster>{EMAIL} ({AUTHOR})</webMaster>\n"
        f"    <lastBuildDate>{now}</lastBuildDate>\n"
        f'    <atom:link href="{SITE}/feed.xml" rel="self" type="application/rss+xml"/>\n'
        "    <image>\n"
        "      <title>Luyang Wang (王鲁阳) — Notes</title>\n"
        f"      <url>{SITE}/assets/icon/icon-192.png</url>\n"
        f"      <link>{SITE}/notes.html</link>\n"
        "    </image>\n"
        + "\n".join(items)
        + "\n  </channel>\n</rss>\n",
        encoding="utf-8",
    )


def write_sitemap(notes: list[dict]) -> None:
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    newest_note = notes[0]["date"] if notes else today
    urls = [
        (f"{SITE}/", today, "monthly", "1.0"),
        (f"{SITE}/notes.html", newest_note, "weekly", "0.8"),
    ]
    body = "\n".join(
        "  <url>\n"
        f"    <loc>{loc}</loc>\n"
        f"    <lastmod>{mod}</lastmod>\n"
        f"    <changefreq>{freq}</changefreq>\n"
        f"    <priority>{pri}</priority>\n"
        "  </url>"
        for loc, mod, freq, pri in urls
    )
    SITEMAP.write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{body}\n</urlset>\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    notes = collect_notes()
    write_feed(notes)
    write_sitemap(notes)
    print(f"feed.xml + sitemap.xml rebuilt from {len(notes)} note(s)")
    for n in notes:
        print(f"  {n['date']}  {n['title']}")
