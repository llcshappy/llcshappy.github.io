(function () {
  var STORAGE_KEY = "siteLang";
  var SUPPORTED = ["en", "zh"];

  var STRINGS = {
    en: {
      "aria.langPick": "Choose language",
      "nav.about": "About",
      "nav.education": "Education",
      "nav.experience": "Experience",
      "nav.publications": "Publications",
      "nav.notes": "Notes",
      "nav.crafts": "Crafts",
      "nav.home": "Home",
      "hero.scholar": "Google Scholar",
      "hero.github": "GitHub",
      "hero.email": "Email via Gmail",
      "hero.name": "Luyang Wang",
      "footer.name": "Luyang Wang",
      "title.index": "Luyang Wang",
      "title.crafts": "Crafts · Luyang Wang",
      "title.notes": "Notes · Luyang Wang",
      "meta.index": "Luyang Wang — 3DV, semantic vision, IQ/ISP, modeling, and quantization",
      "meta.crafts": "Luyang Wang — Crafts and handmade work",
      "meta.notes": "Luyang Wang — Notes, sharing, and learning log",
      "portrait.alt": "Portrait of Luyang Wang",
      "role.line": "3DV · Semantic · IQ · Model · Quantization",
      "section.biography": "Biography",
      bio:
        "I am an algorithm expert at <strong>Alpsentek</strong>, leading a strong team of ten-plus engineers. We build <strong>ultra-low-power perception</strong> algorithms and applications on <strong>Alpsentek</strong>&rsquo;s in-house <strong>EVS</strong> cameras—covering sensor algorithms, <strong>structured light</strong>, <strong>high-speed tracking</strong>, <strong>optical flow</strong>, and <strong>depth</strong> R&amp;D for <strong>UAV</strong>, <strong>autonomous driving</strong>, and <strong>security</strong> scenarios. Previously I was perception lead for the <strong>Xiaoyao&nbsp;002</strong> line at <strong>Narwal</strong>, responsible for <strong>semantic segmentation</strong>, <strong>stereo depth</strong>, <strong>data retrieval</strong>, model-architecture optimization and deployment, and coordination with hardware and planning/control teams. At <strong>SenseTime</strong> I focused on <strong>Remosaic</strong> and <strong>mobile IQ / ISP</strong> algorithms. I hold a B.Eng. in automation from <strong>HUST</strong> and an M.Eng. from the <strong>Institute of Pattern Recognition</strong>, Department of Automation, <strong>Tsinghua University</strong>.",
      "section.education": "Education",
      "edu.tsinghua.school": "Tsinghua University",
      "edu.tsinghua.degree": "M.Eng., Automation (Institute of Pattern Recognition)",
      "edu.hust.school": "Huazhong University of Science and Technology",
      "edu.hust.degree": "B.Eng., Automation",
      "section.experience": "Experience",
      "job.present": "Present",
      "job.alps.dates": "Apr 2026 – Present",
      "job.alps.title": "Alpsentek · Algorithm Expert",
      "job.alps.li1":
        "Algorithms and product-side work based on <strong>EVS</strong> (event-based vision sensors) for <strong>ultra-low-power</strong> perception stacks.",
      "job.narwal.dates": "Aug 2023 – Apr 2026",
      "job.narwal.title": "Narwal · Machine Learning Engineer",
      "job.narwal.li1":
        "Perception PL for the <strong>Xiaoyao</strong> line: <strong>semantic segmentation</strong>, <strong>binocular stereo depth</strong>, and coordination across data, models, onboard deployment, and partner teams.",
      "job.stsr.dates": "Apr 2019 – Nov 2022",
      "job.stsr.title": "SenseTime · Senior Algorithm Researcher",
      "job.stsr.li1": "<strong>Remosaic</strong> / RAW demosaic and related pipeline modules for flagship mobile sensors.",
      "job.stsr.li2": "Customer-facing <strong>image quality (IQ)</strong> tuning and artifact control for ISP-style stacks.",
      "job.stin.dates": "Jun 2017 – Sep 2018",
      "job.stin.title": "SenseTime · Research Intern",
      "job.stin.li1":
        "Monocular 3D human pose in the wild (ICCVW); synthetic data, pseudo-3D labels, and open release.",
      "section.pubs": "Publications",
      "pub.alt.pose": "Thumbnail: monocular 3D human pose",
      "pub.alt.edge": "Thumbnail: edge detection",
      "pub.alt.action": "Thumbnail: action recognition",
      "pub.alt.tof": "Thumbnail: neural time-of-flight",
      "pub.scholar": "Full list on Google Scholar",
      "crafts.h1": "Crafts / 手工",
      "crafts.p1":
        "这里会陆续放一些小手工、模型或杂项创作。页面结构已经搭好：之后每个作品可以用一张图 + 一段说明，或按时间线排列。",
      "crafts.p2":
        "This page is reserved for handmade projects, models, and side crafts. Add images under <code class=\"inline-code\">assets/crafts/</code> and duplicate the sample block below for each piece.",
      "crafts.gallery": "Gallery",
      "crafts.sample": "<strong>Sample slot</strong> — replace with title and short caption.",
      "notes.h1": "Notes / 随记",
      "notes.p1":
        "Technical notes, reading summaries, and engineering takeaways. Newest first; copy the <code class=\"inline-code\">&lt;li&gt;</code> template below and prepend each new entry.",
      "notes.p2":
        "Short posts on engineering, papers, and side thoughts. Duplicate a <code class=\"inline-code\">note-entry</code> block for each new post.",
      "notes.recent": "Recent",
      "notes.sample.title": "Site update: layout and paper thumbnails",
      "notes.sample.body":
        "<p>Unified page background and column width; publication thumbnails match <code class=\"inline-code\">assets/pubs/</code> filenames; added this notes page.</p>",
    },
    zh: {
      "aria.langPick": "选择语言",
      "nav.about": "简介",
      "nav.education": "教育",
      "nav.experience": "经历",
      "nav.publications": "论文",
      "nav.notes": "随记",
      "nav.crafts": "手工",
      "nav.home": "首页",
      "hero.scholar": "谷歌学术",
      "hero.github": "GitHub",
      "hero.email": "通过 Gmail 发邮件",
      "hero.name": "王鲁阳",
      "footer.name": "王鲁阳",
      "title.index": "王鲁阳",
      "title.crafts": "手工 · 王鲁阳",
      "title.notes": "随记 · 王鲁阳",
      "meta.index": "王鲁阳 — 三维视觉、语义、画质、模型与量化",
      "meta.crafts": "王鲁阳 — 手工与小创作",
      "meta.notes": "王鲁阳 — 随记、分享与学习记录",
      "portrait.alt": "王鲁阳照片",
      "role.line": "3DV · 语义 · 画质 · 模型 · 量化",
      "section.biography": "个人简介",
      bio:
        "我现任 <strong>Alpsentek</strong> 算法专家，目前带领十余人的<strong>优秀团队</strong>，基于 <strong>Alpsentek</strong> 自研 <strong>EVS</strong> 相机开发<strong>超低功耗感知</strong>算法与应用；工作涵盖传感器算法、<strong>结构光</strong>、<strong>高速追踪</strong>、<strong>光流</strong>、<strong>深度</strong>等方向，落地场景包括<strong>无人机</strong>、<strong>自动驾驶</strong>与<strong>安防</strong>。此前在 <strong>云鲸 Narwal</strong> 担任 <strong>逍遥&nbsp;002</strong> 产品线<strong>感知负责人</strong>，负责<strong>语义分割</strong>、<strong>双目深度</strong>、<strong>数据检索</strong>及模型结构优化与部署，协同硬件与<strong>规控</strong>上下游。在 <strong>商汤 SenseTime</strong> 期间聚焦 <strong>Remosaic</strong> 与移动端 <strong>画质（IQ）</strong> / ISP 相关算法。本科毕业于<strong>华中科技大学</strong>（自动化），硕士毕业于<strong>清华大学</strong>自动化系<strong>模式识别研究所</strong>。",
      "section.education": "教育背景",
      "edu.tsinghua.school": "清华大学",
      "edu.tsinghua.degree": "工学硕士，自动化（模式识别研究所）",
      "edu.hust.school": "华中科技大学",
      "edu.hust.degree": "工学学士，自动化",
      "section.experience": "工作经历",
      "job.present": "至今",
      "job.alps.dates": "2026年4月 — 至今",
      "job.alps.title": "Alpsentek · 算法专家",
      "job.alps.li1":
        "基于 <strong>EVS</strong>（事件视觉传感器）的<strong>超低功耗</strong>感知算法与产品侧落地。",
      "job.narwal.dates": "2023年8月 — 2026年4月",
      "job.narwal.title": "云鲸 Narwal · 机器学习工程师",
      "job.narwal.li1":
        "<strong>逍遥</strong> 产品线感知 PL：<strong>语义分割</strong>、<strong>双目立体深度</strong>，以及数据、模型、端侧部署与跨团队协同。",
      "job.stsr.dates": "2019年4月 — 2022年11月",
      "job.stsr.title": "商汤 SenseTime · 高级算法研究员",
      "job.stsr.li1": "旗舰移动传感器上的 <strong>Remosaic</strong> / RAW 去马赛克及相关管线模块。",
      "job.stsr.li2": "面向客户的 <strong>画质（IQ）</strong> 调参与 ISP 类伪影控制。",
      "job.stin.dates": "2017年6月 — 2018年9月",
      "job.stin.title": "商汤 SenseTime · 研究实习生",
      "job.stin.li1": "野外单目三维人体姿态（ICCVW）；合成数据、伪三维标签与开源发布。",
      "section.pubs": "发表论文",
      "pub.alt.pose": "缩略图：单目三维人体姿态",
      "pub.alt.edge": "缩略图：边缘检测",
      "pub.alt.action": "缩略图：行为识别",
      "pub.alt.tof": "缩略图：神经 ToF",
      "pub.scholar": "谷歌学术完整列表",
      "crafts.h1": "手工 / Crafts",
      "crafts.p1":
        "这里会陆续放一些小手工、模型或杂项创作。页面结构已经搭好：之后每个作品可以用一张图 + 一段说明，或按时间线排列。",
      "crafts.p2":
        "本页用于手工、模型与小创作。可将图片放在 <code class=\"inline-code\">assets/crafts/</code> 目录，并复制下方示例块为每件作品添加条目。",
      "crafts.gallery": "作品集",
      "crafts.sample": "<strong>示例位</strong> — 替换为作品标题与简介。",
      "notes.h1": "随记 / Notes",
      "notes.p1":
        "记录日常技术分享、阅读笔记与工程心得。按时间倒序排列；新条目可复制下方 <code class=\"inline-code\">&lt;li&gt;</code> 模板追加到列表顶部。",
      "notes.p2":
        "关于工程、论文与随笔的短文：每发一篇可复制一个 <code class=\"inline-code\">note-entry</code> 代码块添加。",
      "notes.recent": "最近",
      "notes.sample.title": "站点更新：版式与论文缩略图",
      "notes.sample.body":
        "<p>统一了页面背景与主栏宽度，论文配图改为与 <code class=\"inline-code\">assets/pubs/</code> 下文件名一致；并增加本页作为随记入口。</p>",
    },
  };

  function getLang() {
    var v = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.indexOf(v) !== -1) return v;
    return "en";
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    apply();
    updateButtons(lang);
  }

  function t(lang, key) {
    var d = STRINGS[lang];
    return d && Object.prototype.hasOwnProperty.call(d, key) ? d[key] : null;
  }

  function apply() {
    var lang = getLang();
    var dict = STRINGS[lang];
    var page = document.body.getAttribute("data-page") || "index";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key || !dict[key]) return;
      if (el.getAttribute("data-i18n-html") === "true") el.innerHTML = dict[key];
      else el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (key && dict[key]) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria-label");
      if (key && dict[key]) el.setAttribute("aria-label", dict[key]);
    });

    var titleKey = "title." + page;
    if (dict[titleKey]) document.title = dict[titleKey];

    var metaKey = "meta." + page;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && dict[metaKey]) meta.setAttribute("content", dict[metaKey]);

    var tray = document.querySelector(".lang-inline");
    if (tray && dict["aria.langPick"]) tray.setAttribute("aria-label", dict["aria.langPick"]);
  }

  function updateButtons(lang) {
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var L = btn.getAttribute("data-set-lang");
      btn.classList.toggle("is-active", L === lang);
      btn.setAttribute("aria-pressed", L === lang ? "true" : "false");
    });
  }

  function init() {
    var lang = getLang();
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    apply();
    updateButtons(lang);
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-set-lang"));
      });
    });
    var y = document.getElementById("y");
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
