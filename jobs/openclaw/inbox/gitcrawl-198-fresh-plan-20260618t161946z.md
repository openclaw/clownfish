---
repo: openclaw/openclaw
cluster_id: gitcrawl-198-fresh-plan-20260618t161946z
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
canonical: []
candidates:
  - "#92267"
cluster_refs:
  - "#92267"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#85678"
  - "#92287"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #92287 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 198 on 2026-06-18. Existing-overlap refs #85678, #92287 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 198

Generated from local gitcrawl run cluster 198 for `openclaw/openclaw`.

Display title:

> fix: start typing for queued followup turns and honor configured typingMode for Telegram room events

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #85678, #92287
- representative: #92287, currently open in local store
- latest member update: 2026-06-18T16:17:08.493321Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92267 typingMode 'instant' never fires for queued/steered turns; Telegram room_event unconditionally suppresses typing

Existing-overlap context refs:

- #85678 [security-signal] fix(telegram): send typing cue from isolated ingress worker
- #92287 fix: start typing for queued followup turns and honor configured typingMode for Telegram room events
