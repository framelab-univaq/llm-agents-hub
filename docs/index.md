# LLM Agents Hub

*A curated, annotated index of research and practice around LLM-based agents.*

[Explore Articles](articles/){ .md-button .md-button--primary }
[Benchmarks](benchmarks/){ .md-button }
[Repos & Frameworks](repos/){ .md-button }
[Case Studies](case-studies/){ .md-button }
[Conferences](conferences/){ .md-button }
[Datasets](datasets/){ .md-button }
[Newsletters](newsletters/){ .md-button }

---

## About

**LLM Agents Hub** is prepared and maintained by the **Framelab Research Group**, part of the **SWEN (Software Engineering) Research Group** at the **University of L’Aquila**.  
Our goal is to track high-signal, peer-reviewed and practitioner resources on agentic LLMs—planning, tool use, multi-agent systems, evaluation, and productionization.

> We prioritize resources that are: reproducible, well-evaluated, and practically useful.

---

## What you’ll find here

- **Articles & Surveys** — seminal and state-of-the-art papers with 1–2 line annotations. → [Browse](articles/)
- **Benchmarks** — evaluation suites and leaderboards for agent capabilities. → [Browse](benchmarks/)
- **Repos & Frameworks** — libraries and reference implementations for building agents. → [Browse](repos/)
- **Industry Case Studies** — deployments, postmortems, and best practices. → [Browse](case-studies/)
- **Conferences & Workshops** — venues and recurring events relevant to agentic AI. → [Browse](conferences/)
- **Videos & Talks** — keynotes, tutorials, and deep dives. → [Browse](videos/)
- **Datasets** — corpora for training and evaluating agents. → [Browse](datasets/)
- **Newsletters** — curated updates from the community. → [Browse](newsletters/)

See our **[Taxonomy](taxonomy/)** for tags and scope (e.g., `planning`, `tool-use`, `multi-agent`, `benchmark`, `production`, `security`).

---

## Contribute a resource

We welcome PRs and suggestions—especially with a short note on *why it matters*.

[➕ Suggest a resource](https://github.com/RafiullahOmar/llm-agents-hub/issues/new?template=resource_suggestion.md){ .md-button .md-button--primary }
[Contribution Guide](https://github.com/RafiullahOmar/llm-agents-hub/blob/main/CONTRIBUTING.md){ .md-button }

*If the repository ownership changes (e.g., to `framelab`), update the links above.*

---

## Live index (auto-updates)

Below is a live view connected to our public spreadsheet. Edits to the sheet appear here automatically.

<!-- Keep this embed. Replace the URL only if you re-publish the sheet. -->
<iframe
  data-google-sheet
  data-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXMjW8HGzbQgIHQMXbgp_n9iaNkdLrUSjpV4X219CEMrmup2Q4t3USqBKsQrVq9LIDovTby5aRpLVQ/pubhtml?widget=true&headers=false&chrome=false"
  width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0"
  loading="lazy" title="LLM Agents Hub — Live Google Sheet" style="border:0;display:block">
</iframe>

<script>
(function () {
  // Force a fresh snapshot each page load to avoid caching
  var el = document.querySelector('iframe[data-google-sheet]');
  if (!el) return;
  var base = el.getAttribute('data-src');
  try {
    var u = new URL(base);
    u.searchParams.set('cachebust', Date.now());
    el.src = u.toString();
  } catch (e) {
    el.src = base + (base.indexOf('?') === -1 ? '?' : '&') + 'cachebust=' + Date.now();
  }
})();
</script>

<p><a class="md-button" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXMjW8HGzbQgIHQMXbgp_n9iaNkdLrUSjpV4X219CEMrmup2Q4t3USqBKsQrVq9LIDovTby5aRpLVQ/pubhtml" target="_blank" rel="noopener">Open in Google Sheets</a></p>

---

## Curation principles

- **Quality over quantity** — avoid duplicates and marketing-only content.  
- **Reproducibility** — code, data, and evaluation details preferred.  
- **Signal** — cite adoption, ablations, or comparative results when possible.  
- **Safety & reliability** — include failure modes, guardrails, and cost/perf trade-offs.

---

## Roadmap

- ✅ Basic taxonomy and section stubs  
- ✅ Live spreadsheet integration  
- ⏳ Seed each section with high-signal entries  
- ⏳ Add link checker CI & contribution lints  
- ⏳ Tag filters and search tips

If you want to help with the roadmap, open an **Issue** or **PR**—thanks!

