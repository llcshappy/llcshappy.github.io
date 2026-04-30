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
        "<p>Hi, welcome to my blog! I'm an Algorithm Expert and Team Lead currently working at Alpsentek. Leading a talented team of 10+ engineers, my mission is to build ultra-low-power perception algorithms and applications powered by Alpsentek's in-house EVS (Event-based Vision Sensor) cameras. We tackle hardcore R&amp;D spanning low-level sensor algorithms, structured light, high-speed tracking, optical flow, and depth estimation, empowering cutting-edge scenarios across UAVs, autonomous driving, and security systems.</p><p>My journey in computer vision has taken me through various facets of the industry. Before Alpsentek, I was the Perception Lead for the Xiaoyao 002 product line at Narwal. I drove the development of semantic segmentation, stereo depth, and data retrieval, alongside model architecture optimization and on-device deployment. I also bridged the gap for cross-functional, system-level collaboration among the hardware, perception, and planning/control teams. Earlier in my career, I honed my skills at SenseTime, diving deep into Remosaic and mobile IQ/ISP algorithms.</p><p>Academically, I hold a B.Eng. in Automation from HUST and an M.Eng. from the Institute of Pattern Recognition (Department of Automation) at Tsinghua University. Here on my blog, I share my thoughts and experiences on machine vision, frontier sensor tech, and the practical engineering challenges of bringing AI to life.</p>",
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
        "Leading the Low Power Vision program at Alpsentek, spanning in-sensor algorithms, UAV perception, and autonomous driving. EVS-based algorithms reach milliwatt-class power consumption, while EVS–RGB fusion further improves perception performance.",
      "job.narwal.dates": "Aug 2023 – Apr 2026",
      "job.narwal.title": "Narwal · Machine Learning Engineer",
      "job.narwal.li1":
        "Perception / algorithm PL for the Narwal Xiaoyao 002 robot vacuum: led stereo matching with quantization-accelerated deployment, achieving 5 mm obstacle-avoidance accuracy—among the best in the industry. The role also covered perception platform bring-up, data retrieval, and collaboration across upstream and downstream teams.",
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
        "<p>你好，欢迎来到我的博客！我目前在锐思智芯（Alpsentek）担任算法专家及团队负责人，带领着一支十余人的优秀工程师团队。我们致力于基于公司自研的EVS（事件相机）打造超低功耗的感知算法与应用，研发领域涵盖传感器底层算法、结构光、高速追踪、光流以及深度估计，重点赋能无人机、自动驾驶及安防等前沿场景。</p><p>在此之前，我曾在云鲸（Narwal）担任逍遥002产品线的感知负责人，主导了语义分割、双目深度、数据检索及模型架构优化与端侧部署，并负责感知与硬件、规控等团队的跨部门系统级协同。在我的职业生涯早期，我曾在商汤科技深耕 Remosaic 及手机移动端的 IQ/ISP 算法。</p><p>我本科毕业于华中科技大学自动化专业，硕士毕业于清华大学自动化系模式识别研究所。在这个博客里，我会不定期分享关于机器视觉、前沿传感器技术以及 AI 落地工程实践的思考与经验。</p>",
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
        "在 Alpsentek 负责低功耗视觉（Low Power Vision）项目，涵盖 in-sensor 算法、无人机与自动驾驶相关方向。基于 EVS 的算法可实现 mW 量级功耗，并结合 EVS 与 RGB Fusion 增强感知算法性能。",
      "job.narwal.dates": "2023年8月 — 2026年4月",
      "job.narwal.title": "云鲸 Narwal · 机器学习工程师",
      "job.narwal.li1":
        "担任云鲸逍遥002扫地机算法PL，开发 Stereo Matching 并完成量化加速，使扫地机避障精度达到 5 mm，行业领先。工作另涵盖平台搭建、数据检索与上下游协作。",
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
