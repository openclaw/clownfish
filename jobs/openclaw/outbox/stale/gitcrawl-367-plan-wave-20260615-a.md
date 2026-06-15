---
repo: openclaw/openclaw
cluster_id: gitcrawl-367-plan-wave-20260615-a
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
  - "#92777"
candidates:
  - "#92777"
  - "#92818"
cluster_refs:
  - "#92777"
  - "#92818"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #92777 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 367 on 2026-06-15."
---

# Gitcrawl Cluster 367

Generated from local gitcrawl run cluster 367 for `openclaw/openclaw`.

Display title:

> [Bug]: TUI: Backspace key stops working after agent response renders (WSL2/Ubuntu)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #92777, currently open in local store
- latest member update: 2026-06-14T04:46:03.763396Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92777 [Bug]: TUI: Backspace key stops working after agent response renders (WSL2/Ubuntu)
- #92818 #92777: fix(tui): recognize DEL (0x7f) as backspace for WSL2 terminals
