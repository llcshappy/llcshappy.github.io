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
      "footer.rights": "All content on this site is copyrighted by the author.",
      "title.index": "Luyang Wang",
      "title.crafts": "Crafts · Luyang Wang",
      "title.notes": "Notes · Luyang Wang",
      "meta.index": "Luyang Wang — 3D perception, spatial intelligence, VLM, edge AI",
      "meta.crafts": "Luyang Wang — Crafts and handmade work",
      "meta.notes": "Luyang Wang — Notes, sharing, and learning log",
      "portrait.alt": "Portrait of Luyang Wang",
      "role.line": "3D Perception · Spatial Intelligence · VLM · Edge AI",
      "section.biography": "Biography",
      bio:
        "<p>Hi, welcome to my blog! 👋</p><p>I'm an <strong>Algorithm Expert and Team Lead</strong> currently at <strong>Alpsentek</strong>, where I focus on building ultra-low-power perception algorithms powered by in-house <strong>EVS</strong> (Event-based Vision Sensor) cameras. My team and I tackle hardcore R&amp;D—spanning structured light, optical flow, and depth estimation—to empower cutting-edge applications in UAVs, autonomous driving, and security systems.</p><p>Prior to <strong>Alpsentek</strong>, I served as the <strong>Perception Lead</strong> at <strong>Narwal</strong>, driving the development and on-device deployment of semantic segmentation and stereo depth algorithms for consumer robotics. Earlier in my career, I honed my computer vision skills at <strong>SenseTime</strong>, diving deep into <strong>Remosaic</strong> and mobile <strong>ISP</strong> algorithms.</p><p>Academically, I hold an <strong>M.Eng.</strong> from the <strong>Institute of Pattern Recognition (Department of Automation)</strong> at <strong>Tsinghua University</strong>, and a <strong>B.Eng.</strong> in Automation from <strong>HUST</strong>.</p><p>Here on my blog, I share my thoughts, research notes, and experiences on machine vision, frontier sensor tech, and the practical engineering challenges of bringing AI to life.</p>",
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
        "<strong>Low Power Vision:</strong> Leading the perception program spanning in-sensor algorithms, UAV, and autonomous driving.",
      "job.alps.li2":
        "<strong>Performance &amp; Efficiency:</strong> Developing EVS-based algorithms that achieve milliwatt-class power consumption, while pushing performance boundaries via EVS–RGB fusion.",
      "job.narwal.dates": "Aug 2023 – Apr 2026",
      "job.narwal.title": "Narwal · Machine Learning Engineer (Perception PL)",
      "job.narwal.li1":
        "<strong>On-Device Deployment:</strong> Led stereo matching development with quantization acceleration for the flagship robot vacuum line.",
      "job.narwal.li2":
        "<strong>Industry-Leading Accuracy:</strong> Achieved a <strong>5 mm</strong> obstacle-avoidance accuracy.",
      "job.narwal.li3":
        "<strong>Infrastructure:</strong> Spearheaded the perception platform bring-up and large-scale data retrieval pipelines.",
      "job.stsr.dates": "Apr 2019 – Nov 2022",
      "job.stsr.title": "SenseTime · Senior Algorithm Researcher",
      "job.stsr.li1":
        "Developed Remosaic / RAW demosaic and related computational photography pipelines for flagship mobile sensors.",
      "job.stsr.li2":
        "Led image quality (IQ) tuning and artifact control for commercial ISP-style stacks.",
      "job.stin.dates": "Jun 2017 – Sep 2018",
      "job.stin.title": "SenseTime · Research Intern",
      "job.stin.li1":
        "<strong>Monocular 3D Human Pose:</strong> Built simulation environments and data-generation pipelines.",
      "job.stin.li2": "Achieved <strong>SOTA-level</strong> results on the <strong>Human3.6M</strong> benchmark.",
      "section.pubs": "Publications",
      "pub.alt.pose": "Thumbnail: monocular 3D human pose",
      "pub.alt.edge": "Thumbnail: edge detection",
      "pub.alt.action": "Thumbnail: action recognition",
      "pub.alt.tof": "Thumbnail: neural time-of-flight",
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
      "footer.rights": "本站内容版权归作者所有",
      "title.index": "王鲁阳",
      "title.crafts": "手工 · 王鲁阳",
      "title.notes": "随记 · 王鲁阳",
      "meta.index": "王鲁阳 — 三维感知、空间智能、VLM、端侧智能",
      "meta.crafts": "王鲁阳 — 手工与小创作",
      "meta.notes": "王鲁阳 — 随记、分享与学习记录",
      "portrait.alt": "王鲁阳照片",
      "role.line": "3D 感知 · 空间智能 · VLM · 端侧 AI",
      "section.biography": "个人简介",
      bio:
        "<p>你好，欢迎来到我的博客！👋</p><p>我现任<strong>算法专家兼团队负责人</strong>，就职于<strong>锐思智芯（Alpsentek）</strong>，专注于基于自研 <strong>EVS</strong>（Event-based Vision Sensor，事件视觉传感器）相机打造超低功耗感知算法。我与团队一起做硬核研发——涵盖结构光、光流与深度估计等——为无人机、自动驾驶与安防等前沿应用提供技术支撑。</p><p>加入 Alpsentek 之前，我在<strong>云鲸（Narwal）</strong>担任<strong>感知负责人（Perception Lead）</strong>，推动语义分割与立体深度等算法在消费级机器人上的开发与端侧部署。更早阶段，我在<strong>商汤科技（SenseTime）</strong>积累计算机视觉经验，深入 <strong>Remosaic</strong> 与移动端 <strong>ISP</strong> 算法。</p><p>学术背景方面，我于<strong>清华大学</strong><strong>自动化系模式识别研究所</strong>取得<strong>工学硕士（M.Eng.）</strong>；本科毕业于<strong>华中科技大学（HUST）</strong>，获<strong>自动化专业工学学士（B.Eng.）</strong>。</p><p>在本博客中，我会分享关于机器视觉、前沿传感器技术，以及将 AI 落地为产品过程中的工程思考与实践经验。</p>",
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
        "<strong>低功耗视觉：</strong>负责感知方向，覆盖 in-sensor 算法、无人机与自动驾驶等场景。",
      "job.alps.li2":
        "<strong>性能与能效：</strong>基于 EVS 的算法达到毫瓦级功耗，并通过 EVS–RGB 融合拓展性能上限。",
      "job.narwal.dates": "2023年8月 — 2026年4月",
      "job.narwal.title": "云鲸 Narwal · 机器学习工程师（感知 PL）",
      "job.narwal.li1":
        "<strong>端侧部署：</strong>面向旗舰扫地机产品线，主导双目立体匹配与量化加速落地。",
      "job.narwal.li2":
        "<strong>精度指标：</strong>避障精度达到 <strong>5 mm</strong>，达到业界领先水平。",
      "job.narwal.li3":
        "<strong>基础设施：</strong>主导感知平台搭建与大规模数据检索管线。",
      "job.stsr.dates": "2019年4月 — 2022年11月",
      "job.stsr.title": "商汤 SenseTime · 高级算法研究员",
      "job.stsr.li1": "为旗舰移动传感器开发 Remosaic / RAW 去马赛克及相关计算摄影管线。",
      "job.stsr.li2": "负责商业级 ISP 方案的画质（IQ）调参与伪影控制。",
      "job.stin.dates": "2017年6月 — 2018年9月",
      "job.stin.title": "商汤 SenseTime · 研究实习生",
      "job.stin.li1":
        "<strong>单目三维人体姿态：</strong>搭建仿真环境并完成数据生成流水线。",
      "job.stin.li2": "在 <strong>Human3.6M</strong> 基准上取得 <strong>SOTA</strong> 水平表现。",
      "section.pubs": "发表论文",
      "pub.alt.pose": "缩略图：单目三维人体姿态",
      "pub.alt.edge": "缩略图：边缘检测",
      "pub.alt.action": "缩略图：行为识别",
      "pub.alt.tof": "缩略图：神经 ToF",
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
