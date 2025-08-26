# Benchmarks

A curated set of evaluation suites for **LLM-based agents**. These focus on goal-directed behavior such as web navigation, tool use, software engineering, and embodied/GUI tasks.

> Tip: when adding a new item, keep the description to one line and link to the **canonical site or GitHub**.

| Name | Description | Link |
|---|---|---|
| SWE-bench | End-to-end **software bug fixing** on real GitHub repos/issues; success is verified by tests. | https://www.swe-bench.com/ |
| WebArena | Sandbox of realistic **websites** for web agents; tasks span CRUD, search, navigation, and multi-step goals. | https://webarena.dev/ |
| Mind2Web | **Open-domain web navigation** across real sites with natural-language instructions; tests generalization. | https://github.com/OSU-NLP-Group/Mind2Web |
| MiniWoB++ | Suite of micro **browser/GUI tasks** (clicking, forms, navigation) for RL/agents. | https://github.com/google/miniwob-plusplus |
| ALFWorld | Text-based **household tasks** (plan–execute loops) built atop ALFRED; evaluates reasoning + action. | https://github.com/alfworld/alfworld |
| WebShop | Goal-directed **online shopping** in a semi-structured e-commerce site; tests planning + tool use. | https://github.com/princeton-nlp/WebShop |
| AgentBench | Multi-skill eval for **agent capabilities** (tool use, web, coding, etc.) with unified scoring. | https://github.com/THUDM/AgentBench |
| BrowserGym | Gymnasium-compatible **web-agent tasks** for reproducible browser automation and evaluation. | https://github.com/ServiceNow/BrowserGym |

---

## How to contribute a benchmark

1. Add a one-line description (what capability it tests).  
2. Link to the official site or GitHub.  
3. If there’s a leaderboard or standard metric, note it briefly (e.g., “pass@k, task success”).  
4. Prefer **public, reproducible** suites (datasets and scripts available).

