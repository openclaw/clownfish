---
repo: openclaw/openclaw
cluster_id: gitcrawl-81-bulk-plan-20260615-a
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
  - "#74848"
candidates:
  - "#74848"
  - "#75228"
  - "#83958"
  - "#83980"
  - "#89702"
  - "#92768"
cluster_refs:
  - "#74848"
  - "#75228"
  - "#83958"
  - "#83980"
  - "#89702"
  - "#92768"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89702"
canonical_hint: "gitcrawl representative #74848 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 81 on 2026-06-15. Security-signal refs #89702 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 81

Generated from local gitcrawl run cluster 81 for `openclaw/openclaw`.

Display title:

> [Bug]: macOS App node repeatedly disconnects with "cancelled" while CLI node works

Cluster shape from gitcrawl:

- total members: 6
- issues: 3
- pull requests: 3
- open candidates in local store: 6
- security-signal refs requiring route_security: #89702
- representative: #74848, currently open in local store
- latest member update: 2026-06-14T04:46:07.009809Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74848 [Bug]: macOS App node repeatedly disconnects with "cancelled" while CLI node works
- #75228 fix(macos): auto-repair stale gateway TLS pins on system-trusted hosts (#74848)
- #83958 macOS app node regresses in 2026.5.18: flaps online/offline and gateway invokes time out
- #83980 fix: stabilize macOS app node connection and eliminate pairing file read/write race
- #89702 [security-signal] fix(gateway): allow macOS app platform version refresh without re-pairing
- #92768 [Bug]: macOS app forces re-pairing after OS version update (platform version refresh not supported)
