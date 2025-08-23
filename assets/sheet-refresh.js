(function () {
  function refresh() {
    document.querySelectorAll('iframe[data-google-sheet]').forEach((el) => {
      const base = el.getAttribute('data-src') || el.src;
      const u = new URL(base);
      u.searchParams.set('cachebust', Date.now());
      el.src = u.toString();
    });
  }
  // Support MkDocs Material instant navigation
  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(refresh);
  }
  window.addEventListener('load', refresh);
})();
