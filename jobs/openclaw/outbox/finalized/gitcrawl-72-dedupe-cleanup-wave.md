---
repo: openclaw/openclaw
cluster_id: gitcrawl-72-dedupe-cleanup-wave
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
canonical:
  - "#68494"
candidates:
  - "#43549"
  - "#84653"
  - "#91456"
  - "#91564"
cluster_refs:
  - "#43549"
  - "#68494"
  - "#68575"
  - "#84653"
  - "#84710"
  - "#91456"
  - "#91564"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68494 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 72 on 2026-06-16."
---

# Gitcrawl Cluster 72

Generated from local gitcrawl run cluster 72 for `openclaw/openclaw`.

Display title:

> Telegram channel stalls after long-running use: main session context overflow and repeated send/getUpdates network failures

Cluster shape from gitcrawl:

- total members: 7
- issues: 6
- pull requests: 1
- open candidates in local store: 4
- representative: #68494, currently closed in local store
- latest member update: 2026-06-15T19:04:12.711983Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #68494 Telegram channel stalls after long-running use: main session context overflow and repeated send/getUpdates network failures
- #68575 fix(telegram): reset sessions after unrecoverable context overflow
- #84710 Telegram inbound dispatch hangs after Inbound message log

Open candidates:

- #43549 [Bug]: Telegram channel can be wedged by bad persisted session JSON; status should detect and offer recovery
- #84653 [Bug] Telegram channel halts with 'Bot not initialized' on v2026.5.18 — apparent regression of #81973
- #91456 Telegram DM lane can remain guarded after send timeout, delaying or dropping direct messages
- #91564 Telegram: specific forum topic becomes permanent inbound black hole after stuck-session recovery
