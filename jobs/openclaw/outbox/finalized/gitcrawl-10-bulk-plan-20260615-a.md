---
repo: openclaw/openclaw
cluster_id: gitcrawl-10-bulk-plan-20260615-a
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
  - "#80139"
candidates:
  - "#49190"
  - "#56078"
  - "#78164"
  - "#79069"
  - "#79753"
  - "#79811"
  - "#80139"
  - "#80438"
  - "#80707"
  - "#81374"
  - "#81691"
  - "#81731"
  - "#85051"
  - "#85249"
  - "#85421"
  - "#85471"
  - "#86733"
  - "#86893"
  - "#86955"
  - "#88396"
  - "#88828"
  - "#89055"
  - "#90378"
  - "#90626"
  - "#90664"
  - "#90836"
  - "#90847"
  - "#91162"
  - "#91399"
  - "#91685"
  - "#91695"
  - "#91713"
  - "#91944"
  - "#92090"
  - "#92305"
  - "#92398"
  - "#92460"
  - "#92817"
cluster_refs:
  - "#49190"
  - "#56078"
  - "#78164"
  - "#79069"
  - "#79753"
  - "#79811"
  - "#80139"
  - "#80438"
  - "#80707"
  - "#81374"
  - "#81691"
  - "#81731"
  - "#85051"
  - "#85249"
  - "#85421"
  - "#85471"
  - "#86733"
  - "#86893"
  - "#86955"
  - "#88396"
  - "#88828"
  - "#89055"
  - "#90378"
  - "#90626"
  - "#90664"
  - "#90836"
  - "#90847"
  - "#91162"
  - "#91399"
  - "#91685"
  - "#91695"
  - "#91713"
  - "#91944"
  - "#92090"
  - "#92305"
  - "#92398"
  - "#92460"
  - "#92817"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#46899"
  - "#50621"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#88828"
  - "#90847"
canonical_hint: "gitcrawl representative #80139 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 10 on 2026-06-15. Security-signal refs #88828, #90847 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #46899, #50621 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 10

Generated from local gitcrawl run cluster 10 for `openclaw/openclaw`.

Display title:

> fix: record cron delivery failures as warnings

Cluster shape from gitcrawl:

- total members: 40
- issues: 14
- pull requests: 26
- open candidates in local store: 38
- excluded existing-overlap refs: #46899, #50621
- security-signal refs requiring route_security: #88828, #90847
- representative: #80139, currently open in local store
- latest member update: 2026-06-14T04:46:07.490107Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #49190 [Feature]: Cron should distinguish execution success from delivery failure and show warning instead of error
- #56078 [Bug]: Cron Job Output Not Saved in OpenClaw 2026.3.24
- #78164 Experiment with agent worker runtime isolation
- #79069 runEmbeddedPiAgent (cron path) does not pass `allowEmptyAssistantReplyAsSilent` for `delivery.mode === "none"` jobs
- #79753 [Bug]: Cron announce fallback delivery reports success but message never arrives (WeChat + Feishu) on 2026.5.7
- #79811 fix(cron): avoid delivered status for empty outbound receipts
- #80139 fix: record cron delivery failures as warnings
- #80438 Guard cron announce delivery against implicit last routing
- #80707 fix(cron): guard task liveness during startup
- #81374 fix: allow silent cron empty replies
- #81691 Cron future-slot repair misclassifies exact second cron slots
- #81731 fix(cron): treat exact-second cron slots as valid in stale-future repair
- #85051 Isolated cron jobs fail: Cannot read properties of undefined (reading 'sourceReplyDeliveryMode')
- #85249 fix(cron): guard against undefined sourceDelivery in isolated executor
- #85421 REPLY_SKIP / control-reply suppression not wired into cron-announce delivery path
- #85471 Suppress cron announce control replies
- #86733 fix(cron): extend main system event timeout
- #86893 Fix isolated cron cold runner setup timeout
- #86955 fix(runtime): isolate workers and bound cron top-off
- #88396 feat(cron): make isolated-agent setup watchdog configurable
- #88828 [security-signal] fix(gateway): gate cron on channel readiness
- #89055 fix: restart gateway after isolated cron setup timeout
- #90378 [Bug] Upgrading from 5.28 → 6.1: cron store migrated to SQLite silently, but new jobs default to delivery.mode=announce causing channel errors
- #90626 fix(cron): default isolated agentTurn delivery to none, don't fail run on delivery error
- #90664 [Bug]: resolveCronChannelOutputPolicy returns preferFinalAssistantVisibleText=false when --no-deliver leaves channel unresolved, blocking hasRecoveredToolWarning rescue
- #90836 fix(cron): block self-narrating auto-announce replies
- #90847 [security-signal] fix: clarify cron task cancellation
- #91162 fix(cron): honor configured delivery.channel instead of misrouting (#46899)
- #91399 fix(cron): keep no-channel implicit cron runs successful instead of failing delivery (#56078)
- #91685 fix(cron): refuse keyless implicit isolated cron delivery inherited from shared agent-main bucket
- #91695 Bug: startup catch-up cron runs never set the active marker, so long command jobs are reconciled as `lost` while still running
- #91713 fix(cron): mark job active during startup catch-up replay
- #91944 v2026.6.5: Cron doctor preflight overwrites API-updated schedules with stale legacy JSON data
- #92090 fix(cron): set active marker for startup catch-up runs (fixes #91695)
- #92305 fix(cron): skip startup catch-up slots that predate schedule updates
- #92398 fix(cron): stop replaying missed slots that predate the last definition write [AI-assisted]
- #92460 [Bug]: Isolated cron completion announcer drops explicit delivery.channel on final controller return
- #92817 fix(cron): trust agent output when channel is unresolved without explicit delivery

Existing-overlap context refs:

- #46899 [Bug]: Cron Job Delivery Channel Mismatch - Telegram Configured but Feishu Used
- #50621 Cron systemEvent job times out after ~960s even though agent runs in main session
