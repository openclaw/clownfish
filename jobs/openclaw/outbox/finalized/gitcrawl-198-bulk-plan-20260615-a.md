---
repo: openclaw/openclaw
cluster_id: gitcrawl-198-bulk-plan-20260615-a
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
  - "#92287"
candidates:
  - "#85678"
  - "#92267"
  - "#92287"
cluster_refs:
  - "#85678"
  - "#92267"
  - "#92287"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#85678"
canonical_hint: "gitcrawl representative #92287 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 198 on 2026-06-15. Security-signal refs #85678 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 198

Generated from local gitcrawl run cluster 198 for `openclaw/openclaw`.

Display title:

> fix: start typing for queued followup turns and honor configured typingMode for Telegram room events

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #85678
- representative: #92287, currently open in local store
- latest member update: 2026-06-14T04:46:07.091939Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #85678 [security-signal] fix(telegram): send typing cue from isolated ingress worker
- #92267 typingMode 'instant' never fires for queued/steered turns; Telegram room_event unconditionally suppresses typing
- #92287 fix: start typing for queued followup turns and honor configured typingMode for Telegram room events
