/* Spacer US host pages prototype.
   Stands in for the live Stimulus controllers (campaign-banner, nav-spus, landing-page).
   Collapse, dropdown and modal behavior comes from Bootstrap 5.3.3. */
(function () {
  'use strict';

  // campaign-banner: show the announcement unless dismissed this session.
  var banner = document.getElementById('header_banner');
  if (banner) {
    var dismissed = false;
    try { dismissed = sessionStorage.getItem('spus-banner-closed') === '1'; } catch (e) {}
    if (!dismissed) banner.hidden = false;
    var close = banner.querySelector('span[role="button"]');
    if (close) {
      close.addEventListener('click', function () {
        banner.hidden = true;
        try { sessionStorage.setItem('spus-banner-closed', '1'); } catch (e) {}
      });
    }
  }

  // nav-spus: mirror the open state as .expanded (shows the mobile Back button).
  var menu = document.getElementById('navbarSupportedContent');
  if (menu) {
    menu.addEventListener('show.bs.collapse', function () { menu.classList.add('expanded'); });
    menu.addEventListener('hidden.bs.collapse', function () { menu.classList.remove('expanded'); });
    var back = menu.querySelector('.btn-back a');
    if (back) {
      back.addEventListener('click', function (e) {
        e.preventDefault();
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      });
    }
  }

  // landing-page: "Show more / Show less" on the Popular Areas columns.
  document.querySelectorAll('.btn-show-srp-link').forEach(function (btn) {
    btn.setAttribute('role', 'button');
    btn.addEventListener('click', function () {
      btn.closest('.list-link').classList.toggle('show-less');
    });
  });

  // landing-page: play a renter testimonial in a modal.
  var tiles = document.querySelectorAll('.feedbacks-tile[data-video]');
  if (tiles.length) {
    var modalEl = document.createElement('div');
    modalEl.className = 'modal fade';
    modalEl.tabIndex = -1;
    modalEl.innerHTML =
      '<div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content bg-dark border-0">' +
      '<div class="ratio ratio-16x9"><iframe title="Renter testimonial" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>' +
      '</div></div>';
    document.body.appendChild(modalEl);
    var frame = modalEl.querySelector('iframe');
    var modal = new bootstrap.Modal(modalEl);
    modalEl.addEventListener('hidden.bs.modal', function () { frame.src = ''; });
    tiles.forEach(function (tile) {
      tile.parentElement.addEventListener('click', function () {
        frame.src = tile.getAttribute('data-video');
        modal.show();
      });
    });
  }
})();
