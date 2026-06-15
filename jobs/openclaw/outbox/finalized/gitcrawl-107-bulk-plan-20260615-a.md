---
repo: openclaw/openclaw
cluster_id: gitcrawl-107-bulk-plan-20260615-a
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
  - "#91460"
candidates:
  - "#87651"
  - "#87912"
  - "#91460"
  - "#92315"
  - "#92613"
cluster_refs:
  - "#87651"
  - "#87912"
  - "#91460"
  - "#92315"
  - "#92613"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#87912"
canonical_hint: "gitcrawl representative #91460 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 107 on 2026-06-15. Security-signal refs #87912 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 107

Generated from local gitcrawl run cluster 107 for `openclaw/openclaw`.

Display title:

> Tool-result truncation produces invalid request schemas in long sessions

Cluster shape from gitcrawl:

- total members: 5
- issues: 3
- pull requests: 2
- open candidates in local store: 5
- security-signal refs requiring route_security: #87912
- representative: #91460, currently open in local store
- latest member update: 2026-06-14T04:46:06.802493Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87651 Long-running tool results can poison persisted session context
- #87912 [security-signal] Handle Codex toolResult blocks in tool-result truncation
- #91460 Tool-result truncation produces invalid request schemas in long sessions
- #92315 Tool-result truncation bug: 25+ tool_results in history produces invalid request schema
- #92613 fix(agents): cap tool results at LLM boundary
