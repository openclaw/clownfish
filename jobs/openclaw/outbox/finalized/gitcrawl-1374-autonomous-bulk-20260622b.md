---
repo: openclaw/openclaw
cluster_id: gitcrawl-1374-autonomous-bulk-20260622b
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
  - "#94162"
candidates:
  - "#94162"
cluster_refs:
  - "#94162"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94230"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #94162 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1374 on 2026-06-22. Existing-overlap refs #94230 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1374

Generated from local gitcrawl run cluster 1374 for `openclaw/openclaw`.

Display title:

> Performance: bundle-tools loading adds 6-7s latency on every agent request

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #94230
- representative: #94162, currently open in local store
- latest member update: 2026-06-19T02:13:00.465772Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94162 Performance: bundle-tools loading adds 6-7s latency on every agent request

Existing-overlap context refs:

- #94230 #94162: Performance: bundle-tools loading adds 6-7s latency on every agent request
