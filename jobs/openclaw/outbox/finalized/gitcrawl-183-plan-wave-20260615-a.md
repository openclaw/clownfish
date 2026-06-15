---
repo: openclaw/openclaw
cluster_id: gitcrawl-183-plan-wave-20260615-a
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
  - "#48003"
candidates:
  - "#48003"
  - "#73365"
  - "#88058"
cluster_refs:
  - "#48003"
  - "#73365"
  - "#88058"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #48003 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 183 on 2026-06-15."
---

# Gitcrawl Cluster 183

Generated from local gitcrawl run cluster 183 for `openclaw/openclaw`.

Display title:

> Steer mode does not inject messages mid-turn for main sessions

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #48003, currently open in local store
- latest member update: 2026-06-14T04:46:07.499563Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48003 Steer mode does not inject messages mid-turn for main sessions
- #73365 fix: allow steer messages during active non-streaming runs
- #88058 [Bug]: 2026.5.27 regression — Control UI messages and steer ignored during active long-run sessions
