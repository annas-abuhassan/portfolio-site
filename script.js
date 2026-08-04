document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('is-open');
      var expanded = links.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  var year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    document.querySelectorAll('.cert-thumb').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        lightboxImg.src = thumb.src;
        lightboxImg.alt = thumb.alt;
        lightbox.classList.add('is-open');
      });
    });
    lightbox.addEventListener('click', function () {
      lightbox.classList.remove('is-open');
      lightboxImg.src = '';
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        lightbox.classList.remove('is-open');
        lightboxImg.src = '';
      }
    });
  }
});
