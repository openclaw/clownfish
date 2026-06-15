---
repo: openclaw/openclaw
cluster_id: gitcrawl-937-plan-wave-20260615-b
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
  - "#83943"
candidates:
  - "#83943"
  - "#90412"
cluster_refs:
  - "#83943"
  - "#90412"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #83943 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 937 on 2026-06-15."
---

# Gitcrawl Cluster 937

Generated from local gitcrawl run cluster 937 for `openclaw/openclaw`.

Display title:

> [Bug]: Session resource loader grows unbounded across warm turns — 5.x regression vs 4.23 baseline (Windows + Feishu + MiniMax OAuth)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #83943, currently open in local store
- latest member update: 2026-06-14T04:46:07.159006Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #83943 [Bug]: Session resource loader grows unbounded across warm turns — 5.x regression vs 4.23 baseline (Windows + Feishu + MiniMax OAuth)
- #90412 fix(sessions): cache warm transcript reads to avoid per-turn re-parse
