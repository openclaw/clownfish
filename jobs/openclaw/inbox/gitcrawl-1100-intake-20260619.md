---
repo: openclaw/openclaw
cluster_id: gitcrawl-1100-intake-20260619
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
  - "#86957"
  - "#92980"
cluster_refs:
  - "#86957"
  - "#92980"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#49944"
  - "#74398"
  - "#76920"
  - "#77928"
  - "#78438"
  - "#80243"
  - "#82121"
  - "#83494"
  - "#83497"
  - "#84158"
  - "#84674"
  - "#84690"
  - "#87613"
  - "#87759"
  - "#87891"
  - "#88916"
  - "#89668"
  - "#89683"
  - "#89781"
  - "#89975"
  - "#90091"
  - "#90095"
  - "#90114"
  - "#90122"
  - "#90837"
  - "#90945"
  - "#90989"
  - "#91456"
  - "#93024"
  - "#93040"
  - "#93086"
  - "#93576"
  - "#93694"
  - "#93812"
  - "#94094"
  - "#94207"
  - "#94301"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #93040 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1100 on 2026-06-19. Existing-overlap refs #49944, #74398, #76920, #77928, #78438, #80243, #82121, #83494, #83497, #84158, #84674, #84690, #87613, #87759, #87891, #88916, #89668, #89683, #89781, #89975, #90091, #90095, #90114, #90122, #90837, #90945, #90989, #91456, #93024, #93040, #93086, #93576, #93694, #93812, #94094, #94207, #94301 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1100

Generated from local gitcrawl run cluster 1100 for `openclaw/openclaw`.

Display title:

> fix(telegram): release timed-out spooled lanes

Cluster shape from gitcrawl:

- total members: 39
- issues: 13
- pull requests: 26
- open candidates in local store: 2
- excluded existing-overlap refs: #49944, #74398, #76920, #77928, #78438, #80243, #82121, #83494, #83497, #84158, #84674, #84690, #87613, #87759, #87891, #88916, #89668, #89683, #89781, #89975, #90091, #90095, #90114, #90122, #90837, #90945, #90989, #91456, #93024, #93040, #93086, #93576, #93694, #93812, #94094, #94207, #94301
- representative: #93040, currently open in local store
- latest member update: 2026-06-18T16:17:08.515023Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #86957 [Bug]: Telegram Ingress Routing Bug
- #92980 Telegram ingress spooled update retry loop freezes gateway on non-retryable errors

Existing-overlap context refs:

- #49944 Control UI: tool cards remain collapsed even with verboseDefault=full
- #74398 fix(control-ui): honor verbose level for tool expansion
- #76920 fix(telegram): preserve forum topic routing
- #77928 [security-signal] Add Telegram reliability and handoff commands
- #78438 fix(telegram): add OPENCLAW_TELEGRAM_FORCE_IPV4 opt-in env var
- #80243 [security-signal] [codex] Further optimize Telegram media and reply context flow
- #82121 Leaked truncation sentinels (`...(truncated)...` / `[..., N more characters truncated]`) can appear in final assistant replies
- #83494 Control UI renders message(action=send) visible replies only as toolCall/toolResult blocks
- #83497 [security-signal] fix(control-ui): project message tool sends as chat bubbles
- #84158 Telegram isolated ingress timeout recovery misses lone active spooled handler without backlog
- #84674 Telegram isolated ingress spool can remain blocked by stale .processing claim after gateway recreate
- #84690 [security-signal] fix(telegram): recover stale ingress claims after restart
- #87613 [security-signal] fix(codex): preserve telegram foreground run release
- #87759 Add Telegram per-group UI overrides
- #87891 fix(telegram): expose spooled handler timeout config
- #88916 [security-signal] [codex] Fix Telegram active-run ingress and legacy file SecretRefs
- #89668 [Bug]: WebChat can leak internal browser tool commentary/debug text into user-visible replies
- #89683 [Bug]: Control UI chat surfaces failed internal tool calls as visible red error banners
- #89781 [Bug]: WebChat keeps a visible 'Tool output' block after the assistant reply is complete
- #89975 fix(reply): suppress direct tool-error progress leaks
- #90091 Telegram message-tool-only turns can still emit empty-response fallback via skipped delivery lane
- #90095 fix: suppress Telegram fallback for message-tool-only skips
- #90114 fix(telegram): suppress failure fallback when source delivery is message-tool-only
- #90122 fix(ui): collapse non-terminal internal tool errors
- #90837 fix(telegram): suppress internal tool warnings in groups
- #90945 channel_ingress_events (SQLite): stale claims never recovered after session crash — Telegram DM deadlocks
- #90989 fix(channels): recover stale ingress queue claims at gateway startup
- #91456 Telegram DM lane can remain guarded after send timeout, delaying or dropping direct messages
- #93024 fix(telegram): dead-letter ERR_MODULE_NOT_FOUND and poison-retry spooled updates (#92980)
- #93040 fix(telegram): release timed-out spooled lanes
- #93086 fix(agents): strip truncation sentinel lines from user-facing text (fixes #82121)
- #93576 fix #86957: [Bug]: Telegram Ingress Routing Bug
- #93694 [security-signal] fix(agents): hydrate truncated session replies
- #93812 fix #89668: [Bug]: WebChat can leak internal browser tool commentary/debug text into user-visible replies
- #94094 fix(agents): strip leaked truncation sentinels from final replies (#82121)
- #94207 fix(telegram): wake drain immediately after worker-spooled update write
- #94301 [security-signal] fix #86957: drain worker-spooled Telegram updates immediately
