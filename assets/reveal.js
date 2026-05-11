(function () {
  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function init() {
    var targets = document.querySelectorAll(
      ".about-block, .block, .edu-row, .job, .pub-row, .note-entry"
    );
    if (!targets.length) return;

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("reveal", "is-visible");
      });
      return;
    }

    targets.forEach(function (el, i) {
      el.classList.add("reveal");
      // gentle stagger inside each container
      el.style.transitionDelay = Math.min(i * 40, 240) + "ms";
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    targets.forEach(function (el) {
      io.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
