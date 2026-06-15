---
repo: openclaw/openclaw
cluster_id: gitcrawl-493-autonomous-issue-wave
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
  - "#59330"
candidates:
  - "#59330"
cluster_refs:
  - "#59330"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#59336"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #59330 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 493 on 2026-06-15. Existing-overlap refs #59336 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 493

Generated from local gitcrawl run cluster 493 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI Raw mode permanently disabled since 2026.3.31 — materializeRuntimeConfig injects undefined keys that break round-trip check

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #59336
- representative: #59330, currently open in local store
- latest member update: 2026-06-15T11:49:41.06558Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59330 [Bug]: Control UI Raw mode permanently disabled since 2026.3.31 — materializeRuntimeConfig injects undefined keys that break round-trip check

Existing-overlap context refs:

- #59336 [security-signal] fix: Config Raw mode permanently disabled due to round-trip check regression
