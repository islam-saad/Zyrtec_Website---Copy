/* ========================================================
   ZYRTEC Microsite — Dosing page interactions
   ======================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initScrollReveal();
  });

  /**
   * Subtle scroll-in reveal for dosing-page sections.
   * Uses IntersectionObserver when available; gracefully no-ops otherwise.
   */
  function initScrollReveal() {
    var selectors = [
      ".dosage-card",
      ".administer-section",
      ".administer-step",
      ".with-food-grid",
      ".doctor-note",
      ".consult-cta",
      ".faq-cta-section",
    ];
    var targets = document.querySelectorAll(selectors.join(","));
    if (!targets.length) return;

    targets.forEach(function (el) {
      el.classList.add("dz-reveal");
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("dz-reveal--in"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("dz-reveal--in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    targets.forEach(function (el) { observer.observe(el); });
  }
})();
