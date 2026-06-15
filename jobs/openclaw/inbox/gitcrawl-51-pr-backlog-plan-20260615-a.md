---
repo: openclaw/openclaw
cluster_id: gitcrawl-51-pr-backlog-plan-20260615-a
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
  - "#45839"
candidates:
  - "#45839"
  - "#46656"
  - "#48471"
  - "#72704"
  - "#72749"
  - "#88032"
  - "#88638"
  - "#89428"
  - "#90745"
cluster_refs:
  - "#45839"
  - "#46656"
  - "#48471"
  - "#72704"
  - "#72749"
  - "#88032"
  - "#88638"
  - "#89428"
  - "#90745"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#48471"
  - "#72749"
canonical_hint: "gitcrawl representative #45839 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 51 on 2026-06-15. Security-signal refs #48471, #72749 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 51

Generated from local gitcrawl run cluster 51 for `openclaw/openclaw`.

Display title:

> [Feature Request] Telegram inline buttons for pairing approve/deny

Cluster shape from gitcrawl:

- total members: 9
- issues: 6
- pull requests: 3
- open candidates in local store: 9
- security-signal refs requiring route_security: #48471, #72749
- representative: #45839, currently open in local store
- latest member update: 2026-06-14T04:46:06.937555Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45839 [Feature Request] Telegram inline buttons for pairing approve/deny
- #46656 Feature: Webchat / Control UI inline button support (buttons parameter, callback RPC, capabilities config)
- #48471 [security-signal] [Feature Request]: one-line local bootstrap for daemon + dashboard auth + Telegram owner setup
- #72704 [UX] Excessive inline JSON metadata in Telegram user messages degrades model comprehension
- #72749 [security-signal] Fix: Compact inbound metadata
- #88032 [Feature]: Telegram quote/reply context should be a first-class, durable inbound contract instead of a split prompt/runtime patch surface
- #88638 [Feature]: Webchat Control UI — Add quote/reply button to message bubbles
- #89428 fix: keep inbound metadata in runtime context
- #90745 fix: carry reply metadata into runtime context
