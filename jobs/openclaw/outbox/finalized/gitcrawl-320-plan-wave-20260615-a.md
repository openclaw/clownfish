---
repo: openclaw/openclaw
cluster_id: gitcrawl-320-plan-wave-20260615-a
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
  - "#82988"
candidates:
  - "#77537"
  - "#82988"
  - "#83000"
cluster_refs:
  - "#77537"
  - "#82988"
  - "#83000"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #82988 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 320 on 2026-06-15."
---

# Gitcrawl Cluster 320

Generated from local gitcrawl run cluster 320 for `openclaw/openclaw`.

Display title:

> [Bug]: Gateway and embedded TUI ignore delta-only assistant events for live chat projection

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #82988, currently open in local store
- latest member update: 2026-06-14T04:46:07.415924Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77537 [codex] Render TUI commentary progress events
- #82988 [Bug]: Gateway and embedded TUI ignore delta-only assistant events for live chat projection
- #83000 [codex] Fix delta-only assistant chat projection
