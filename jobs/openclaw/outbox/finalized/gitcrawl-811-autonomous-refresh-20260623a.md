---
repo: openclaw/openclaw
cluster_id: gitcrawl-811-autonomous-refresh-20260623a
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#76275"
candidates:
  - "#76150"
  - "#76275"
cluster_refs:
  - "#76150"
  - "#76275"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#79181"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#79181"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #76275 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 811 on 2026-06-23. Existing-overlap refs #79181 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 811

Generated from local gitcrawl run cluster 811 for `openclaw/openclaw`.

Display title:

> [Bug]: Gateway restarting loop

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #79181
- security-signal refs requiring route_security: #79181
- representative: #76275, currently open in local store
- latest member update: 2026-06-19T02:13:00.549731Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #76150 [Bug]: Gateway did not become healthy after restart.
- #76275 [Bug]: Gateway restarting loop

Existing-overlap context refs:

- #79181 [security-signal] fix(gateway): throttle rapid process restarts before sidecar startup
