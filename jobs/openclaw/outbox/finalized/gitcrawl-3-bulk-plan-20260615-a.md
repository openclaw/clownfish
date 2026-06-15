---
repo: openclaw/openclaw
cluster_id: gitcrawl-3-bulk-plan-20260615-a
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
  - "#92328"
candidates:
  - "#41152"
  - "#66685"
  - "#69086"
  - "#74003"
  - "#74073"
  - "#75749"
  - "#76888"
  - "#77445"
  - "#78184"
  - "#78436"
  - "#79172"
  - "#84205"
  - "#84575"
  - "#85404"
  - "#86047"
  - "#86184"
  - "#86580"
  - "#86592"
  - "#86764"
  - "#87299"
  - "#87691"
  - "#87711"
  - "#87744"
  - "#88111"
  - "#88203"
  - "#89202"
  - "#89374"
  - "#89590"
  - "#89688"
  - "#89734"
  - "#90299"
  - "#90492"
  - "#90918"
  - "#90924"
  - "#91141"
  - "#92185"
  - "#92328"
  - "#92376"
cluster_refs:
  - "#41152"
  - "#66685"
  - "#69086"
  - "#74003"
  - "#74073"
  - "#75749"
  - "#76888"
  - "#77445"
  - "#78184"
  - "#78436"
  - "#79172"
  - "#84205"
  - "#84575"
  - "#85404"
  - "#86047"
  - "#86184"
  - "#86580"
  - "#86592"
  - "#86764"
  - "#87299"
  - "#87691"
  - "#87711"
  - "#87744"
  - "#88111"
  - "#88203"
  - "#89202"
  - "#89374"
  - "#89590"
  - "#89688"
  - "#89734"
  - "#90299"
  - "#90492"
  - "#90918"
  - "#90924"
  - "#91141"
  - "#92185"
  - "#92328"
  - "#92376"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#56398"
  - "#67750"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#41152"
  - "#77445"
  - "#79172"
  - "#86764"
  - "#87691"
  - "#89590"
  - "#90299"
  - "#90492"
  - "#90924"
  - "#92185"
canonical_hint: "gitcrawl representative #92328 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3 on 2026-06-15. Security-signal refs #41152, #77445, #79172, #86764, #87691, #89590, #90299, #90492, #90924, #92185 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #56398, #67750 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 3

Generated from local gitcrawl run cluster 3 for `openclaw/openclaw`.

Display title:

> Fix dashboard history projection and approval followups

Cluster shape from gitcrawl:

- total members: 40
- issues: 20
- pull requests: 20
- open candidates in local store: 38
- excluded existing-overlap refs: #56398, #67750
- security-signal refs requiring route_security: #41152, #77445, #79172, #86764, #87691, #89590, #90299, #90492, #90924, #92185
- representative: #92328, currently open in local store
- latest member update: 2026-06-14T04:46:07.489707Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41152 [security-signal] Async exec result delivery truncates output to ~400 chars and strips newlines
- #66685 Suppress expired exec approval followup warnings
- #69086 attempt-execution: scope session-history guard to assistant-after-latest-user and expose retry-prompt hook
- #74003 [Bug]: before_tool_call plugin approval fails with 'no approval route' — turnSourceChannel not passed to plugin.approval.request
- #74073 [Bug] Auto-compaction race: readSubagentOutput returns stale tool JSON instead of post-compaction assistant reply
- #75749 [Bug]: Plugin approval delivers duplicate messages on Telegram — forwarder fallback and native runtime both send when turnSourceChannel is null
- #76888 [Bug]: Queued/orphaned user-message merge can produce stale reply
- #77445 [security-signal] fix(agents): persist delivered assistant text [AI]
- #78184 fix(exec): clean approval-pending chat prompts
- #78436 fix(agents): scope session-history guard to latest-user-answered
- #79172 [security-signal] fix(gateway): hide transcript-only history artifacts
- #84205 fix(agents): forward turn-source for embedded plugin before_tool_call approvals
- #84575 [Bug] /v1/chat/completions: second request with same x-openclaw-session-key during in-flight turn runs in isolated session, loses memory scope
- #85404 fix(agents): serialize new-session resolution per session key
- #86047 [Regression] OpenClaw 2026.5.22: Codex app-server / plugin approval stalls cause interrupted turns and tool-execution timeouts in Nextcloud Talk agent sessions
- #86184 [Bug]: 2026.5.22 Telegram direct gets generic /new fallback after successful tool turn
- #86580 fix(gateway): filter transcript-only history rows
- #86592 Inbound user messages are not persisted to session JSONL when the agent attempt throws
- #86764 [security-signal] fix(agents): persist user turn before attempt failures
- #87299 [Bug]: Spurious "Something went wrong" and Codex app-server failures in large Telegram direct sessions
- #87691 [security-signal] fix(auto-reply): preserve post-compaction failure context in user-facing recovery message (#67750)
- #87711 [Bug]: Empty assistant delivery (footer-only, "— out" usage) on first turn after /new on Telegram-routed topic lane — 2026.5.27
- #87744 [Bug]: Codex-backed Telegram turns repeatedly time out waiting for turn/completed on 2026.5.27
- #88111 Stale plugin approval waits should fail closed instead of failing agent turns
- #88203 fix(approvals): handle stale plugin waits
- #89202 [Bug]: Telegram heavy turns can cause incomplete  codex-app server turn around compaction, including under OpenClaw runtime.
- #89374 Timeout compaction can report success but leave Codex channel session unrecoverable
- #89590 [security-signal] fix(agents): forward turn-source for embedded plugin approvals (supersedes #84205)
- #89688 fix: suppress duplicate Telegram plugin approvals 🤖
- #89734 EmbeddedAttemptSessionTakeoverError can silently terminate a run without user-visible reply
- #90299 [security-signal] [Bug]: Agent Teams subagent completion can report "lost active execution context" while still delivering child output
- #90492 [security-signal] fix(agents): reconcile child output before lost-context sweep failure
- #90918 fix(agents): forward turn-source routing fields to plugin.approval.request
- #90924 [security-signal] fix(gateway): sanitize assistant reasoning before history truncation
- #91141 EmbeddedAttemptSessionTakeoverError at default maxConcurrent=4: concurrent inbound message during model I/O misread as takeover — reply dropped & user message silently deleted
- #92185 [security-signal] fix(exec): preserve approved gateway output
- #92328 Fix dashboard history projection and approval followups
- #92376 fix(approvals): distinguish expired, already-resolved, and unknown approval ids

Existing-overlap context refs:

- #56398 [security-signal] fix(gateway): keep two-phase exec approvals pending when no approval …
- #67750 [Bug]: Successful auto-compaction can still end in a 120s embedded timeout and generic `/new` fallback
