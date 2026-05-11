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
            color: { value: "transparent" },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 58,
              density: { enable: true, width: 1100, height: 1100 },
            },
            color: { value: ["#1c3d5a", "#b08947"] },
            opacity: { value: { min: 0.14, max: 0.34 } },
            size: { value: { min: 1, max: 2 } },
            move: {
              enable: true,
              speed: 0.42,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            links: {
              enable: true,
              distance: 130,
              color: "#9aa6b8",
              opacity: 0.26,
              width: 0.55,
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
