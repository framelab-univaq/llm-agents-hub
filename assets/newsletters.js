(function () {
  function sitePath(rel) {
    // Works on GitHub project pages (/repo/...) and custom domains (/)
    const parts = window.location.pathname.split("/").filter(Boolean);
    const root = parts.length ? `/${parts[0]}/` : "/"; // "/llm-agents-hub/" or "/"
    return root + rel.replace(/^\//, "");
  }

  async function loadJSON(relPath) {
    const url = sitePath(relPath) + "?v=" + Date.now();
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load " + url);
    return res.json();
  }

  function fmtDate(iso) {
    try {
      const d = new Date(iso);
      return isNaN(d) ? "" : d.toISOString().slice(0, 10);
    } catch { return ""; }
  }

  function renderGrid(data) {
    const mount = document.getElementById("nl-grid");
    if (!mount) return;
    const cards = (data.feeds || []).map(f => {
      const posts = (f.latest || []).slice(0, 3).map(p =>
        `<li><a href="${p.url}" target="_blank" rel="noopener">${p.title}</a><time>${fmtDate(p.date)}</time></li>`
      ).join("") || "<li><em>No recent items</em></li>";

      return `
        <div class="nl-card">
          <div class="nl-title"><a href="${f.home}" target="_blank" rel="noopener">${f.name}</a></div>
          <p class="nl-desc">${f.desc || ""}</p>
          <div class="nl-links">
            <a href="${f.home}" target="_blank" rel="noopener">Website</a>
            ${f.rss ? `<a href="${f.rss}" target="_blank" rel="noopener">RSS</a>` : ""}
          </div>
          <ul class="nl-posts">${posts}</ul>
        </div>
      `;
    }).join("");
    mount.innerHTML = cards;
  }

  async function init() {
    try {
      const data = await loadJSON("data/newsletters.json");
      renderGrid(data);
    } catch (e) {
      const mount = document.getElementById("nl-grid");
      if (mount) mount.innerHTML = `<p>Couldn’t load newsletters. ${e.message}</p>`;
    }
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  }
  window.addEventListener("DOMContentLoaded", init);
})();
