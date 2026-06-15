---
repo: openclaw/openclaw
cluster_id: gitcrawl-972-plan-wave-20260615-b
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
  - "#83903"
candidates:
  - "#83903"
  - "#87121"
cluster_refs:
  - "#83903"
  - "#87121"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #83903 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 972 on 2026-06-15."
---

# Gitcrawl Cluster 972

Generated from local gitcrawl run cluster 972 for `openclaw/openclaw`.

Display title:

> Module-level bannerEmitted flag has no test-reset path, unlike channel-options.ts

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #83903, currently open in local store
- latest member update: 2026-06-14T04:46:07.352721Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #83903 Module-level bannerEmitted flag has no test-reset path, unlike channel-options.ts
- #87121 test(cli): add banner emission reset helper
