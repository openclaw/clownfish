---
repo: openclaw/openclaw
cluster_id: gitcrawl-13-bulk-plan-20260615-a
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
  - "#80749"
candidates:
  - "#72896"
  - "#76332"
  - "#78059"
  - "#78061"
  - "#78536"
  - "#79409"
  - "#79556"
  - "#79950"
  - "#80110"
  - "#80498"
  - "#80715"
  - "#80749"
  - "#81184"
  - "#81359"
  - "#81360"
  - "#81621"
  - "#83165"
  - "#84002"
  - "#84267"
  - "#84325"
  - "#85616"
  - "#86034"
  - "#86279"
  - "#86447"
  - "#87561"
  - "#87783"
  - "#87784"
  - "#87906"
  - "#89641"
  - "#90020"
  - "#90041"
  - "#90561"
  - "#90638"
  - "#90639"
  - "#90640"
  - "#91307"
  - "#91378"
  - "#91527"
  - "#91839"
cluster_refs:
  - "#72896"
  - "#76332"
  - "#78059"
  - "#78061"
  - "#78536"
  - "#79409"
  - "#79556"
  - "#79950"
  - "#80110"
  - "#80498"
  - "#80715"
  - "#80749"
  - "#81184"
  - "#81359"
  - "#81360"
  - "#81621"
  - "#83165"
  - "#84002"
  - "#84267"
  - "#84325"
  - "#85616"
  - "#86034"
  - "#86279"
  - "#86447"
  - "#87561"
  - "#87783"
  - "#87784"
  - "#87906"
  - "#89641"
  - "#90020"
  - "#90041"
  - "#90561"
  - "#90638"
  - "#90639"
  - "#90640"
  - "#91307"
  - "#91378"
  - "#91527"
  - "#91839"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#44925"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#78536"
  - "#80749"
  - "#84002"
  - "#85616"
  - "#90041"
  - "#90561"
canonical_hint: "gitcrawl representative #80749 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13 on 2026-06-15. Security-signal refs #78536, #80749, #84002, #85616, #90041, #90561 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #44925 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 13

Generated from local gitcrawl run cluster 13 for `openclaw/openclaw`.

Display title:

> fix(slack): require delivery receipts for replies

Cluster shape from gitcrawl:

- total members: 40
- issues: 23
- pull requests: 17
- open candidates in local store: 39
- excluded existing-overlap refs: #44925
- security-signal refs requiring route_security: #78536, #80749, #84002, #85616, #90041, #90561
- representative: #80749, currently open in local store
- latest member update: 2026-06-14T04:46:07.488443Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #72896 [codex] Harden Slack delivery retries
- #76332 fix: harden subagent completion announce cleanup races
- #78059 Slack thread session reset on idle loses triggering message
- #78061 Slack thread session generates responses but fails to deliver to Slack
- #78536 [security-signal] fix(slack): preserve buffered thread stream replies
- #79409 Bug: Feishu channel does not handle text slash commands (/compact, /new, /stop)
- #79556 fix(feishu): set CommandSource and GroupId for group messages
- #79950 Bug: async sessions_send results are not delivered cleanly to Telegram-bound requester session
- #80110 fix(agents): suppress raw subagent tool output
- #80498 Subagent completion announcements can be premature or duplicated after tool-use turns
- #80715 [Bug] Slack replies silently dropped: composed in transcript, never posted to Slack
- #80749 [security-signal] fix(slack): require delivery receipts for replies
- #81184 fix(agents): dedup subagent completion announces to prevent double Slack post
- #81359 Subagent lost-context completions can surface raw startup/tool context
- #81360 runtime: suppress lost-context subagent raw output
- #81621 fix(agents): prevent premature subagent completion from causing message loss and session-state drift [AI-assisted]
- #83165 Slack long-running runs can appear silent when media delivery partially fails and recovery refuses replay
- #84002 [security-signal] Slack continuation can lose prior plan context and Responses continuation fails with thinking_signature_invalid
- #84267 fix(agents): recover invalid OpenAI Responses reasoning replay
- #84325 fix(signal): mark slash text as command source
- #85616 [security-signal] fix(auto-reply): fast path text control commands
- #86034 Media generation succeeds but completion delivery fails and looks like generation failure
- #86279 fix: keep media generation success on delivery failure
- #86447 Slack channel subagent completion wake fails with source_reply_delivery_mode_mismatch while Slack remains healthy
- #87561 Define durable final fallback delivery semantics across channels
- #87783 Slack explicit mentions need visible fallback on handler timeout
- #87784 fix(slack): add explicit mention timeout fallback
- #87906 Bug: False task failure reported when long-running media generation falls back to textual completion delivery
- #89641 [Bug]: Bash run_in_background task-notification silently drops Telegram reply when session is idle
- #90020 bug(slack): bare "ada stop" inbound silently dropped — no session, no dispatch, no ack
- #90041 [security-signal] fix(subagents): prevent message_tool_only from swallowing subagent completion message (AI-assisted)
- #90561 [security-signal] fix(agents): harden subagent announce retry and error handling
- #90638 bug(slack): slash commands (/compact /new /stop) are silently inert in Slack DMs — no recovery path for wedged sessions
- #90639 bug(compaction): safeguard mode allows sessions to grow to context ceiling — wedge causes "Something went wrong" with no in-channel recovery on Slack;  cost in one session
- #90640 bug/feat(api): sessions.compact RPC is undocumented with no CLI command; openclaw agent --message '/compact' silently no-ops with exit 0
- #91307 Bug: Feishu DM Session Enters Infinite Loop After Subagent Announce Trigger
- #91378 feat(cli): add `openclaw sessions compact` and fail loudly on CLI `/compact` (fixes #90640)
- #91527 [Bug]: Subagent announce 3x duplicate still reproduces on 2026.6.1 release + Telegram — #89812 only fixes outbound/deliver path, not subagent-announce-delivery
- #91839 [Bug]: Terminal provider model_not_available in subagent announce path can trigger chat.history storm and gateway event-loop starvation

Existing-overlap context refs:

- #44925 [Bug]: Subagent completion silently lost — no retry, no notification, no auto-restart on timeout
