---
repo: openclaw/openclaw
cluster_id: gitcrawl-29-bulk-plan-20260615-a
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
  - "#82662"
candidates:
  - "#74681"
  - "#82662"
  - "#82710"
  - "#84110"
  - "#84567"
  - "#84662"
  - "#84871"
  - "#86103"
  - "#86214"
  - "#86233"
  - "#87327"
  - "#88586"
  - "#88681"
  - "#89442"
  - "#89847"
  - "#89848"
  - "#89974"
  - "#89996"
  - "#90887"
  - "#91363"
  - "#92058"
cluster_refs:
  - "#74681"
  - "#82662"
  - "#82710"
  - "#84110"
  - "#84567"
  - "#84662"
  - "#84871"
  - "#86103"
  - "#86214"
  - "#86233"
  - "#87327"
  - "#88586"
  - "#88681"
  - "#89442"
  - "#89847"
  - "#89848"
  - "#89974"
  - "#89996"
  - "#90887"
  - "#91363"
  - "#92058"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#84871"
  - "#89974"
canonical_hint: "gitcrawl representative #82662 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 29 on 2026-06-15. Security-signal refs #84871, #89974 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 29

Generated from local gitcrawl run cluster 29 for `openclaw/openclaw`.

Display title:

> [Bug]: Isolated cron agentTurn fails with 'setup timed out before runner start' — all fallback models exhausted on 2026.5.12

Cluster shape from gitcrawl:

- total members: 21
- issues: 16
- pull requests: 5
- open candidates in local store: 21
- security-signal refs requiring route_security: #84871, #89974
- representative: #82662, currently open in local store
- latest member update: 2026-06-14T04:46:07.387507Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74681 Non-deterministic timeout enforcement in isolated agentTurn runner (timeoutSeconds unreliable)
- #82662 [Bug]: Isolated cron agentTurn fails with 'setup timed out before runner start' — all fallback models exhausted on 2026.5.12
- #82710 [Feature]: Extend `models status --probe` with Codex app-server viability checks
- #84110 [Bug]: Codex app-server rewrites prompt on tool-call continuation turns, busting OpenAI prompt cache mid-turn (cache ratio 93% → 47%)
- #84567 [Bug]: Codex bundled harness initialize still hangs in 2026.5.18 isolated cron — surfaces via #64744 timeout-wrapping as 'isolated agent setup timed out before runner start'
- #84662 [Bug]: Codex app-server stores per-turn OpenClaw runtime context in native user history, causing runaway response.create input growth
- #84871 [security-signal] fix(codex): preserve responses session streams
- #86103 [Bug]: TUI/Web turns remain In progress with Runtime: OpenAI Codex on 2026.5.22 after successful OAuth
- #86214 [Bug]: Codex app-server client closes mid-turn during image/tool requests with large logs_2.sqlite
- #86233 fix(codex): cap managed app-server trace logs
- #87327 [Bug]: Isolated agent runs stall in runtime-plugins phase before execution start — recurring across hourly crons on 2026.5.22, no named-plugin diagnostic
- #88586 Bug: Isolated cron run can stall in `runtime-plugins` phase, never starts agent execution
- #88681 Make runtime plugin startup stalls name in-flight plugins
- #89442 fix #84567: [Bug]: Codex bundled harness initialize still hangs in 2026.5.18 isolated cron — surfaces via #64744 timeout-wrapping as 'isolated agent setup timed out before runner start'
- #89847 [Bug]: failureAlert silently drops when cron stalls in runtime-plugins phase — lastFailureNotificationDeliveryStatus="unknown", operator never sees the failure
- #89848 [Enhancement]: failureAlert lacks threadId — per-cron failure alerts land in the wrong Telegram topic, forcing operators to watch an aggregate-only path
- #89974 [security-signal] Codex app-server turn idle timeout is surfaced as user interruption
- #89996 [Bug]: GPT-5.5 Codex WebChat turn times out after completed tool calls
- #90887 fix(cron): route failure alerts to thread ids
- #91363 Isolated cron consistently fails with "LLM request failed" on model-call-started phase
- #92058 failureAlert (after=1) never fires on 2026.6.5 — every errored run stuck at delivery_status 'not-requested'
