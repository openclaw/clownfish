---
repo: openclaw/openclaw
cluster_id: gitcrawl-72-bulk-plan-20260615-a
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
  - "#43549"
  - "#68575"
  - "#84653"
  - "#84710"
  - "#91456"
  - "#91564"
cluster_refs:
  - "#43549"
  - "#68575"
  - "#84653"
  - "#84710"
  - "#91456"
  - "#91564"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#68494"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #68494 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 72 on 2026-06-15. Existing-overlap refs #68494 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 72

Generated from local gitcrawl run cluster 72 for `openclaw/openclaw`.

Display title:

> Telegram channel stalls after long-running use: main session context overflow and repeated send/getUpdates network failures

Cluster shape from gitcrawl:

- total members: 7
- issues: 6
- pull requests: 1
- open candidates in local store: 6
- excluded existing-overlap refs: #68494
- representative: #68494, currently open in local store
- latest member update: 2026-06-14T04:46:07.242051Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43549 [Bug]: Telegram channel can be wedged by bad persisted session JSON; status should detect and offer recovery
- #68575 fix(telegram): reset sessions after unrecoverable context overflow
- #84653 [Bug] Telegram channel halts with 'Bot not initialized' on v2026.5.18 — apparent regression of #81973
- #84710 Telegram inbound dispatch hangs after Inbound message log
- #91456 Telegram DM lane can remain guarded after send timeout, delaying or dropping direct messages
- #91564 Telegram: specific forum topic becomes permanent inbound black hole after stuck-session recovery

Existing-overlap context refs:

- #68494 Telegram channel stalls after long-running use: main session context overflow and repeated send/getUpdates network failures
