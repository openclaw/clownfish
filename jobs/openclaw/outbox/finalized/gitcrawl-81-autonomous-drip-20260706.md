---
repo: openclaw/openclaw
cluster_id: gitcrawl-81-autonomous-drip-20260706
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
  - "#89423"
cluster_refs:
  - "#89423"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#74848"
  - "#75228"
  - "#83958"
  - "#83980"
  - "#88374"
  - "#89702"
  - "#92149"
  - "#92768"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#74848"
  - "#75228"
  - "#88374"
  - "#89702"
  - "#92149"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #74848 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 81 on 2026-07-06. Existing-overlap refs #74848, #75228, #83958, #83980, #88374, #89702, #92149, #92768 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 81

Generated from local gitcrawl run cluster 81 for `openclaw/openclaw`.

Display title:

> [Bug]: macOS App node repeatedly disconnects with "cancelled" while CLI node works

Cluster shape from gitcrawl:

- total members: 9
- issues: 4
- pull requests: 5
- open candidates in local store: 1
- excluded existing-overlap refs: #74848, #75228, #83958, #83980, #88374, #89702, #92149, #92768
- security-signal refs requiring route_security: #74848, #75228, #88374, #89702, #92149
- representative: #74848, currently open in local store
- latest member update: 2026-06-19T02:13:01.181592Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89423 [Mac App] node.invoke system.run causes WebSocket disconnection on macOS

Existing-overlap context refs:

- #74848 [security-signal] [Bug]: macOS App node repeatedly disconnects with "cancelled" while CLI node works
- #75228 [security-signal] fix(macos): auto-repair stale gateway TLS pins on system-trusted hosts (#74848)
- #83958 macOS app node regresses in 2026.5.18: flaps online/offline and gateway invokes time out
- #83980 fix: stabilize macOS app node connection and eliminate pairing file read/write race
- #88374 [security-signal] fix(gateway): honor signed node ids
- #89702 [security-signal] fix(gateway): allow macOS app platform version refresh without re-pairing
- #92149 [security-signal] fix(gateway): sign custom node ids
- #92768 [Bug]: macOS app forces re-pairing after OS version update (platform version refresh not supported)
