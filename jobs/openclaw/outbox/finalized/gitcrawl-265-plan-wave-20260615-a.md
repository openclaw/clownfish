---
repo: openclaw/openclaw
cluster_id: gitcrawl-265-plan-wave-20260615-a
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
  - "#89662"
candidates:
  - "#89662"
  - "#89772"
  - "#89885"
cluster_refs:
  - "#89662"
  - "#89772"
  - "#89885"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #89662 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 265 on 2026-06-15."
---

# Gitcrawl Cluster 265

Generated from local gitcrawl run cluster 265 for `openclaw/openclaw`.

Display title:

> [Bug] Context indicator disappears after sending message and count mismatch

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #89662, currently open in local store
- latest member update: 2026-06-14T04:46:05.71849Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89662 [Bug] Context indicator disappears after sending message and count mismatch
- #89772 fix(webchat): keep context indicator visible with stale token data
- #89885 fix(ui): show stale context indicator instead of hiding it
