(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    img.addEventListener('error', function () {
      const media = img.closest('.media');
      if (media) media.classList.add('missing-image');
      img.style.display = 'none';
    });
  });

  const logo = document.querySelector('.brand-logo');
  if (logo) {
    logo.addEventListener('error', function () {
      logo.style.display = 'none';
      const fallback = document.querySelector('.brand-logo-fallback');
      if (fallback) fallback.style.display = 'grid';
    });
  }
})();
