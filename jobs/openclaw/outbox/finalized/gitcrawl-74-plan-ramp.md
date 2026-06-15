---
repo: openclaw/openclaw
cluster_id: gitcrawl-74-plan-ramp
mode: plan
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#77800"
candidates:
  - "#74586"
  - "#77800"
  - "#78084"
  - "#80621"
  - "#84070"
  - "#89215"
  - "#89422"
cluster_refs:
  - "#74586"
  - "#77800"
  - "#78084"
  - "#80621"
  - "#84070"
  - "#89215"
  - "#89422"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #77800 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 74 on 2026-06-14."
---

# Gitcrawl Cluster 74

Generated from local gitcrawl run cluster 74 for `openclaw/openclaw`.

Display title:

> [Bug]: Breaking change: api.registerTool() silently fails without contracts.tools since 2026.5.2

Cluster shape from gitcrawl:

- total members: 7
- issues: 5
- pull requests: 2
- open candidates in local store: 7
- representative: #77800, currently open in local store
- latest member update: 2026-06-14T04:46:07.262437Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74586 AM embedded run aborts memory_search tool calls; classifies as timeout despite model completion
- #77800 [Bug]: Breaking change: api.registerTool() silently fails without contracts.tools since 2026.5.2
- #78084 fix: support dynamic plugin tool contracts
- #80621 Plugin loaded but registerTool fails — "plugin must declare contracts.tools"
- #84070 Active Memory embedded runner fails to expose plugin tools when hidden runner is on the DeepSeek provider path
- #89215 Tool silently dropped when manifest omits contracts.tools; plugin logs success before the contract gate rejects it
- #89422 fix(plugins): surface tool contract gate rejections at warn level
