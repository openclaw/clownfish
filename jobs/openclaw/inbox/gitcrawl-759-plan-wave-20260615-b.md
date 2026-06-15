---
repo: openclaw/openclaw
cluster_id: gitcrawl-759-plan-wave-20260615-b
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
  - "#88954"
candidates:
  - "#88954"
  - "#89645"
cluster_refs:
  - "#88954"
  - "#89645"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #88954 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 759 on 2026-06-15."
---

# Gitcrawl Cluster 759

Generated from local gitcrawl run cluster 759 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw update --channel beta cmd couldn't get v2026.3.30 beta 4

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #88954, currently open in local store
- latest member update: 2026-06-14T04:46:06.101868Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #88954 [Bug]: openclaw update --channel beta cmd couldn't get v2026.3.30 beta 4
- #89645 fix(update): respect explicit beta channel without fallback to latest
