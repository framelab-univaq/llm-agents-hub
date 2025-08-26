(function () {
  function addFramelabLink() {
    const title = document.querySelector('.md-header__title'); // brand area
    if (!title || document.querySelector('.framelab-link')) return;

    // your external link
    const link = document.createElement('a');
    link.href = 'https://YOUR-FRAMELAB-WEBSITE';   // <-- put the real URL here
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Framelab';
    link.className = 'framelab-link';

    // add “ · Framelab” after the existing title
    title.appendChild(document.createTextNode(' · '));
    title.appendChild(link);
  }

  // Support Material’s instant navigation
  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(addFramelabLink);
  }
  window.addEventListener('DOMContentLoaded', addFramelabLink);
})();
