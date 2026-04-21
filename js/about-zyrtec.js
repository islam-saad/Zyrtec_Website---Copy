/* ========================================================
   ZYRTEC Microsite — About ZYRTEC interactions
   ======================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initScrollReveal();
    initFamilyCardFocus();
  });

  /**
   * Simple scroll-in reveal for about-page sections.
   * Uses IntersectionObserver when available; gracefully no-ops otherwise.
   */
  function initScrollReveal() {
    var selectors = [
      ".pack-favorable",
      ".info-box",
      ".fast-onset-row",
      ".family-card",
      ".how-works-top",
      ".how-box",
      ".safety-grid",
      ".safety-highlight",
      ".faq-cta-section",
    ];
    var targets = document.querySelectorAll(selectors.join(","));
    if (!targets.length) return;

    targets.forEach(function (el) {
      el.classList.add("az-reveal");
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("az-reveal--in"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("az-reveal--in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    targets.forEach(function (el) { observer.observe(el); });
  }

  /**
   * Make family cards keyboard-activatable (scrolls user to safety info)
   * — purely progressive enhancement, no behavior change for mouse users.
   */
  function initFamilyCardFocus() {
    var cards = document.querySelectorAll(".family-card");
    cards.forEach(function (card) {
      card.setAttribute("tabindex", "0");
    });
  }
})();
