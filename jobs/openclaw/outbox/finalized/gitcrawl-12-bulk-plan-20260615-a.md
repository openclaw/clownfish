---
repo: openclaw/openclaw
cluster_id: gitcrawl-12-bulk-plan-20260615-a
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
  - "#77211"
candidates:
  - "#39617"
  - "#49889"
  - "#59221"
  - "#73795"
  - "#74077"
  - "#75857"
  - "#76920"
  - "#77211"
  - "#77928"
  - "#78020"
  - "#79804"
  - "#80362"
  - "#80520"
  - "#80529"
  - "#80862"
  - "#80989"
  - "#82089"
  - "#82303"
  - "#83161"
  - "#83670"
  - "#84563"
  - "#85403"
  - "#87613"
  - "#87686"
  - "#87739"
  - "#87759"
  - "#88066"
  - "#88916"
  - "#90091"
  - "#90095"
  - "#90114"
  - "#90169"
  - "#90475"
  - "#90753"
  - "#90837"
  - "#90905"
  - "#90962"
  - "#90997"
  - "#92842"
cluster_refs:
  - "#39617"
  - "#49889"
  - "#59221"
  - "#73795"
  - "#74077"
  - "#75857"
  - "#76920"
  - "#77211"
  - "#77928"
  - "#78020"
  - "#79804"
  - "#80362"
  - "#80520"
  - "#80529"
  - "#80862"
  - "#80989"
  - "#82089"
  - "#82303"
  - "#83161"
  - "#83670"
  - "#84563"
  - "#85403"
  - "#87613"
  - "#87686"
  - "#87739"
  - "#87759"
  - "#88066"
  - "#88916"
  - "#90091"
  - "#90095"
  - "#90114"
  - "#90169"
  - "#90475"
  - "#90753"
  - "#90837"
  - "#90905"
  - "#90962"
  - "#90997"
  - "#92842"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#39605"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#59221"
  - "#77211"
  - "#77928"
  - "#84563"
  - "#87613"
  - "#87686"
  - "#88916"
  - "#90169"
  - "#92842"
canonical_hint: "gitcrawl representative #77211 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 12 on 2026-06-15. Security-signal refs #59221, #77211, #77928, #84563, #87613, #87686, #88916, #90169, #92842 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #39605 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 12

Generated from local gitcrawl run cluster 12 for `openclaw/openclaw`.

Display title:

> fix(telegram): preserve default tool progress when preview streaming is off

Cluster shape from gitcrawl:

- total members: 40
- issues: 13
- pull requests: 27
- open candidates in local store: 39
- excluded existing-overlap refs: #39605
- security-signal refs requiring route_security: #59221, #77211, #77928, #84563, #87613, #87686, #88916, #90169, #92842
- representative: #77211, currently open in local store
- latest member update: 2026-06-14T04:46:07.482943Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39617 fix: reload config in slash command routing so dmScope is respected
- #49889 [Bug]: Telegram partial-stream finalization lacks clear delivery-mode observability (sent vs preview-finalized vs canceled)
- #59221 [security-signal] feat: add built-in command aliases (/c, /ctx, /s, /n, /m, /ms, /h, /f, /u)
- #73795 toolProgress config stripped from channels without streaming.mode
- #74077 Feature: slash command to set preview streaming mode for current chat/session
- #75857 fix(telegram): suppress silent callback fallback
- #76920 fix(telegram): preserve forum topic routing
- #77211 [security-signal] fix(telegram): preserve default tool progress when preview streaming is off
- #77928 [security-signal] Add Telegram reliability and handoff commands
- #78020 Fix Telegram Pinching progress previews
- #79804 [Bug]: Internal tool/status messages leak into Telegram chat even when streaming/tool progress is disabled
- #80362 Telegram retry regex too strict: bare grammy `Network request for 'X' failed!` (no "after") never classified as recoverable for `context: send`, drops outbound messages
- #80520 Telegram messages silently dropped, no sendMessage logged
- #80529 fix(telegram): make pre-connect network failures recoverable in send context
- #80862 Telegram uses multiple sendMessage previews instead of editMessageText, leaving stale reasoning messages
- #80989 [Feature]: /progress command to toggle tool-call progress in streaming preview
- #82089 Feature: Telegram temporary tool-progress previews with final native quote replies
- #82303 feat(telegram): add progress assistant preview lane
- #83161 fix(telegram): move preview-streamed dedup to channel layer (#80520)
- #83670 fix: Preserve Telegram hooks when flushing buffered finals
- #84563 [security-signal] fix(telegram): avoid silent truncation in partial streaming finals
- #85403 fix(telegram): suppress message-tool reply previews
- #87613 [security-signal] fix(codex): preserve telegram foreground run release
- #87686 [security-signal] fix(telegram): skip duplicate final emit when preview already covers chunks (#87624)
- #87739 Telegram: keep long DM turns alive through progress previews
- #87759 Add Telegram per-group UI overrides
- #88066 telegram: fast-ack final button callbacks
- #88916 [security-signal] [codex] Fix Telegram active-run ingress and legacy file SecretRefs
- #90091 Telegram message-tool-only turns can still emit empty-response fallback via skipped delivery lane
- #90095 fix: suppress Telegram fallback for message-tool-only skips
- #90114 fix(telegram): suppress failure fallback when source delivery is message-tool-only
- #90169 [security-signal] fix(telegram): clear generic callback buttons after click
- #90475 fix(telegram): keep bot reply answers anchored to current message
- #90753 [Bug]: Telegram progress bubble remains above subsequent assistant messages in progress streaming mode
- #90837 fix(telegram): suppress internal tool warnings in groups
- #90905 Suppress recovered read-only tool warnings after block replies
- #90962 Telegram: inter-tool commentary clobbers tool progress in non-persist progress mode (diverges from other streaming channels)
- #90997 fix(telegram): keep tool progress after non-final commentary
- #92842 [security-signal] [Bug]: Telegram progress bubble remains above subsequent assistant messages in progress streaming mode

Existing-overlap context refs:

- #39605 Discord/Telegram/Slack slash commands ignore session.dmScope routing
