---
repo: openclaw/openclaw
cluster_id: gitcrawl-193-dedupe-cleanup-wave-2
mode: autonomous
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
canonical: []
candidates:
  - "#90980"
cluster_refs:
  - "#90980"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#66836"
  - "#91015"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #91015 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 193 on 2026-06-16. Existing-overlap refs #66836, #91015 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 193

Generated from local gitcrawl run cluster 193 for `openclaw/openclaw`.

Display title:

> fix(sandbox): bound Docker exec with a deadline so a wedged engine can't hang the gateway

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #66836, #91015
- representative: #91015, currently open in local store
- latest member update: 2026-06-15T19:04:11.228363Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90980 [Bug]: Docker engine wedged/unresponsive → docker exec hangs (no timeout) → gateway blocks at startup, all agents offline (fresh repro of #5135 on 2026.5.28)

Existing-overlap context refs:

- #66836 [security-signal] fix(sandbox): add configurable init timeout with cooperative abort
- #91015 fix(sandbox): bound Docker exec with a deadline so a wedged engine can't hang the gateway
