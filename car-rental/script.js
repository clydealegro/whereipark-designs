// WhereiPark Car Rental & Fleet prototype interactions.
(function () {
  // FAQ accordion: one item open at a time.
  const faq = document.querySelector('[data-faq]');
  if (faq) {
    faq.addEventListener('click', (event) => {
      const button = event.target.closest('.faq_question');
      if (!button) return;
      const item = button.parentElement;
      const willOpen = !item.classList.contains('is-open');
      faq.querySelectorAll('.faq_item.is-open').forEach((open) => {
        open.classList.remove('is-open');
        open.querySelector('.faq_question').setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // Mobile menu toggle; links close it.
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });
  }

  // Shadow on the sticky nav once the page scrolls.
  const nav = document.querySelector('[data-nav]');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Dismissible announcement bar.
  const announce = document.querySelector('[data-announce]');
  const close = document.querySelector('[data-announce-close]');
  if (announce && close) close.addEventListener('click', () => { announce.hidden = true; });
})();
