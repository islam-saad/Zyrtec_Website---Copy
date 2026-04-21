(function () {
  'use strict';

  // ============== ACCORDION TOGGLE ==============
  const items = document.querySelectorAll('.faq-item');

  items.forEach(function (item) {
    const btn = item.querySelector('.faq-question');
    const toggleIcon = item.querySelector('.faq-toggle');
    if (!btn || !toggleIcon) return;

    btn.addEventListener('click', function () {
      const isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggleIcon.textContent = isOpen ? '\u2212' : '+';
    });
  });

  // ============== SCROLL REVEAL ==============
  const reveals = document.querySelectorAll('.fqa-reveal');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) {
      el.classList.add('fqa-reveal--in');
    });
    return;
  }

  const io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fqa-reveal--in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach(function (el) {
    io.observe(el);
  });
})();
