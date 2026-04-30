(function () {
  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  async function start() {
    if (prefersReducedMotion()) return;
    if (typeof loadLinksPreset === "undefined" || typeof tsParticles === "undefined") return;
    var el = document.getElementById("tsparticles");
    if (!el) return;

    try {
      await loadLinksPreset(tsParticles);
      await tsParticles.load({
        id: "tsparticles",
        options: {
          preset: "links",
          fullScreen: { enable: false, zIndex: 0 },
          background: {
            color: { value: "#f0f2f6" },
          },
          particles: {
            number: {
              value: 72,
              density: { enable: true, width: 1100, height: 1100 },
            },
            color: { value: "#6b7c90" },
            opacity: { value: { min: 0.2, max: 0.5 } },
            size: { value: { min: 1, max: 2.2 } },
            move: {
              enable: true,
              speed: 0.55,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            links: {
              enable: true,
              distance: 118,
              color: "#9eb4d4",
              opacity: 0.38,
              width: 0.65,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: false },
              onClick: { enable: false },
            },
          },
          detectRetina: true,
        },
      });
    } catch (e) {
      if (typeof console !== "undefined" && console.error) console.error("[particles-bg]", e);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
