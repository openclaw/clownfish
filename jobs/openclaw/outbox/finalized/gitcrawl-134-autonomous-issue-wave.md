---
repo: openclaw/openclaw
cluster_id: gitcrawl-134-autonomous-issue-wave
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
canonical: []
candidates:
  - "#90340"
cluster_refs:
  - "#90340"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#85155"
  - "#90357"
  - "#90885"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #90885 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 134 on 2026-06-15. Existing-overlap refs #85155, #90357, #90885 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 134

Generated from local gitcrawl run cluster 134 for `openclaw/openclaw`.

Display title:

> fix(agent): resolve compaction model alias to canonical model ref

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 1
- excluded existing-overlap refs: #85155, #90357, #90885
- representative: #90885, currently open in local store
- latest member update: 2026-06-15T11:49:41.510016Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90340 [Bug]: Auto-compaction does not resolve compaction model aliases before dispatch

Existing-overlap context refs:

- #85155 fix(agents): avoid inviting provider swaps in model alias guidance
- #90357 fix(agents): resolve compaction model alias before dispatch
- #90885 [security-signal] fix(agent): resolve compaction model alias to canonical model ref
