<script>
(function () {
  function refresh() {
    document.querySelectorAll('iframe[data-google-sheet]').forEach((el) => {
      const src = el.getAttribute('data-src') || el.src;
      const u = new URL(src);
      u.searchParams.set('cachebust', Date.now());
      el.src = u.toString();
    });
  }
  // Works with MkDocs Material's instant navigation if present
  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(refresh);
  }
  window.addEventListener('load', refresh);
})();
</script>
