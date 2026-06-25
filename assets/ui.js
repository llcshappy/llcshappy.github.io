(function () {
  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  // Back-to-top button: show after scrolling, smooth-scroll to top on click.
  function initToTop() {
    var btn = document.getElementById("toTop");
    if (!btn) return;

    var ticking = false;
    function update() {
      ticking = false;
      var show = window.scrollY > 480;
      btn.classList.toggle("is-visible", show);
    }
    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(update);
      },
      { passive: true }
    );
    update();

    btn.addEventListener("click", function () {
      var behavior = prefersReducedMotion() ? "auto" : "smooth";
      window.scrollTo({ top: 0, behavior: behavior });
    });
  }

  // Scroll-spy: highlight the nav link for the section currently in view.
  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('.site-header .nav a[href*="#"]')
    );
    if (!links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    var sections = [];
    links.forEach(function (link) {
      var hash = link.getAttribute("href").split("#")[1];
      if (!hash) return;
      var section = document.getElementById(hash);
      if (!section) return;
      map[hash] = link;
      sections.push(section);
    });
    if (!sections.length) return;

    var visible = {};
    function setCurrent(id) {
      links.forEach(function (link) {
        if (map[id] === link) link.setAttribute("aria-current", "page");
        else if (link.getAttribute("aria-current") === "page")
          link.removeAttribute("aria-current");
      });
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });
        var bestId = null;
        var bestRatio = 0;
        Object.keys(visible).forEach(function (id) {
          if (visible[id] > bestRatio) {
            bestRatio = visible[id];
            bestId = id;
          }
        });
        if (bestId) setCurrent(bestId);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach(function (section) {
      io.observe(section);
    });
  }

  function init() {
    initToTop();
    initScrollSpy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
