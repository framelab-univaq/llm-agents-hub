# Taxonomy & Tags

This page defines the controlled vocabulary we use across the hub so entries stay consistent and searchable.  
**Use 3–7 tags per item, all lowercase, hyphen-separated** (e.g., `tool-use`, `multi-agent`). Add a **Tags** column to tables where possible.

---

## Core facets

### 1) Agent type
- `reactive` — single-step or short-horizon policies (no long planning)
- `planner-executor` — explicit planning with an execution loop
- `autonomous-loop` — self-driving loops (e.g., AutoGPT-style)
- `multi-agent` — multiple coordinated agents / roles
- `assistant` — human-in-the-loop assistants, copilots

### 2) Capabilities
- `planning`, `tool-use`, `retrieval`, `web-navigation`, `code-exec`, `apis`, `scheduling`, `vision`, `speech`, `translation`

### 3) Architecture / pattern
- `react` (reasoning + acting)
- `reflexion` (self-reflection loops)
- `tot` (tree-of-thought / search)
- `langgraph`, `autogen`, `crewai`, `langchain`, `llamaindex` (framework patterns)
- `function-calling`, `program-aided` (tool schemas / program induction)

### 4) Memory
- `short-term` (within prompt / context mgmt)
- `long-term` (vector DB / episodic)
- `tool-logs` (execution traces as memory)

### 5) Environment / domain
- `web`, `browser`, `os-shell`, `ide`, `code`, `robotics`, `games`, `data`, `cloud`, `docs`

### 6) Evaluation & benchmarks
- `benchmark`, `task-success`, `cost`, `latency`, `robustness`, `safety-eval`
- Specific suites as tags (when the paper centers on them):  
  `alfworld`, `webarena`, `mind2web`, `swe-bench`, `miniwob`, `webshop`, `hotpotqa`

### 7) Production & safety
- `guardrails`, `monitoring`, `red-teaming`, `prompt-security`, `eval-in-prod`, `cost-control`, `privacy`

---

## Tagging rules

1. **Pick one primary type** (`reactive`, `planner-executor`, `autonomous-loop`, `multi-agent`, or `assistant`).  
2. Add **2–4 capability tags** (e.g., `tool-use`, `planning`, `web-navigation`).  
3. Add **architecture tags** if the work proposes/uses one (e.g., `react`, `reflexion`, `langgraph`).  
4. If the work **evaluates on a known suite**, include the benchmark tag (e.g., `swe-bench`).  
5. If the paper is about **operational concerns**, add production/safety tags (`monitoring`, `guardrails`, …).

> Keep tags short; prefer **hyphenated** single tokens (e.g., `tool-use`, not `Tool Use`).

---

## Examples

### Paper entry (table row)
| Title | Year | Venue | Tags | Notes |
|---|---:|---|---|---|
| ReAct: Synergizing Reasoning and Acting in Language Models | 2022 | — | `react`, `planner-executor`, `tool-use` | Introduces the ReAct pattern combining CoT + tool calls. |
| Voyager: An Open-Ended Embodied Agent with LLMs | 2023 | — | `autonomous-loop`, `memory`, `code-exec` | Skill library; continual learning in Minecraft. |
| SWE-bench | 2023 | — | `benchmark`, `code`, `swe-bench`, `task-success` | End-to-end code-fix benchmark for LLM agents. |

### Repo / framework entry
| Name | Link | Tags | Notes |
|---|---|---|---|
| LangGraph | https://github.com/langchain-ai/langgraph | `langgraph`, `planner-executor`, `tool-logs` | Graph-based control for agents with state & memory. |
| AutoGen | https://github.com/microsoft/autogen | `autogen`, `multi-agent`, `assistant` | Multi-agent chat orchestration patterns. |

---

## Controlled tag list (cheat sheet)

**Types:** `reactive`, `planner-executor`, `autonomous-loop`, `multi-agent`, `assistant`  
**Capabilities:** `planning`, `tool-use`, `retrieval`, `web-navigation`, `code-exec`, `apis`, `vision`, `speech`, `translation`, `scheduling`  
**Architecture:** `react`, `reflexion`, `tot`, `function-calling`, `program-aided`, `langgraph`, `autogen`, `crewai`, `langchain`, `llamaindex`  
**Memory:** `short-term`, `long-term`, `tool-logs`  
**Environment:** `web`, `browser`, `os-shell`, `ide`, `code`, `robotics`, `games`, `data`, `cloud`, `docs`  
**Eval/Benchmarks:** `benchmark`, `task-success`, `robustness`, `cost`, `latency`, `safety-eval`, `alfworld`, `webarena`, `mind2web`, `miniwob`, `webshop`, `swe-bench`, `hotpotqa`  
**Prod & Safety:** `guardrails`, `monitoring`, `red-teaming`, `prompt-security`, `eval-in-prod`, `cost-control`, `privacy`

---

## How to use tags in pages

- Add a **Tags** column to your tables (recommended).  
- Or add inline chips after each item, e.g.:  
  `<span class="tag">planner-executor</span> <span class="tag tag--capability">tool-use</span>`

See styling below.

