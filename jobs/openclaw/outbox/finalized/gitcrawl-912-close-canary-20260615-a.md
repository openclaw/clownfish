---
repo: openclaw/openclaw
cluster_id: gitcrawl-912-close-canary-20260615-a
mode: execute
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
  - "#86546"
candidates:
  - "#86546"
  - "#86550"
cluster_refs:
  - "#86546"
  - "#86550"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #86546 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 912 on 2026-06-15."
---

# Gitcrawl Cluster 912

Generated from local gitcrawl run cluster 912 for `openclaw/openclaw`.

Display title:

> [Bug]: cli、regression

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #86546, currently open in local store
- latest member update: 2026-06-14T04:46:06.979452Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #86546 [Bug]: cli、regression
- #86550 [Bug]:
