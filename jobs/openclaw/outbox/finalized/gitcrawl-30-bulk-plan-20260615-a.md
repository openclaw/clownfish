---
repo: openclaw/openclaw
cluster_id: gitcrawl-30-bulk-plan-20260615-a
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
  - "#88980"
candidates:
  - "#49062"
  - "#49063"
  - "#56692"
  - "#56699"
  - "#66041"
  - "#72510"
  - "#74698"
  - "#76717"
  - "#77576"
  - "#79308"
  - "#82002"
  - "#82079"
  - "#84154"
  - "#85654"
  - "#86262"
  - "#88980"
  - "#90644"
  - "#90672"
cluster_refs:
  - "#49062"
  - "#49063"
  - "#56692"
  - "#56699"
  - "#66041"
  - "#72510"
  - "#74698"
  - "#76717"
  - "#77576"
  - "#79308"
  - "#82002"
  - "#82079"
  - "#84154"
  - "#85654"
  - "#86262"
  - "#88980"
  - "#90644"
  - "#90672"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#56741"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#49063"
  - "#66041"
  - "#76717"
  - "#77576"
  - "#88980"
  - "#90644"
  - "#90672"
canonical_hint: "gitcrawl representative #88980 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 30 on 2026-06-15. Security-signal refs #49063, #66041, #76717, #77576, #88980, #90644, #90672 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #56741 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 30

Generated from local gitcrawl run cluster 30 for `openclaw/openclaw`.

Display title:

> fix(telegram): gate bot-authored group messages

Cluster shape from gitcrawl:

- total members: 19
- issues: 10
- pull requests: 9
- open candidates in local store: 18
- excluded existing-overlap refs: #56741
- security-signal refs requiring route_security: #49063, #66041, #76717, #77576, #88980, #90644, #90672
- representative: #88980, currently open in local store
- latest member update: 2026-06-14T04:46:07.250784Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #49062 [Bug]: Clarify Telegram channel_post auth when groups[chatId].allowFrom is configured
- #49063 [security-signal] Telegram: allow native channel commands in explicitly allowed chats
- #56692 Group chat context handling can blur which messages are addressed to the current agent
- #56699 Telegram: /commands in forum topics bypass groupPolicy disabled and trigger all bots
- #66041 [security-signal] fix(telegram): keep ack reactions without mentions
- #72510 fix(group-chat): wire multi-agent bot-targeting signals end-to-end (#56692)
- #74698 [Bug]: Telegram group /status silently no-replies on 2026.4.27 while normal messages work
- #76717 [security-signal] feat(telegram): add acknowledgement sticker support
- #77576 [security-signal] [Regression] Telegram group session responses route to webchat instead of back to Telegram (v2026.5.3-1)
- #79308 [Bug] Telegram group replies sent to wrong chat_id (DM instead of group) in 2026.5.7
- #82002 Telegram group replies to bot messages can lose reply context under group allowlist
- #82079 fix(telegram): preserve bot-self reply target context under allowlist visibility (#82002)
- #84154 Telegram group message recorded into agent session but no run dispatched until next message
- #85654 Group reply pipeline silently drops agent-generated payload between turn completion and Telegram sendMessage
- #86262 Telegram forum topic responses routed to DM instead of group (channel=webchat instead of channel=telegram)
- #88980 [security-signal] fix(telegram): gate bot-authored group messages
- #90644 [security-signal] fix(telegram): trust open group policy for native commands
- #90672 [security-signal] fix(telegram): report blocked group ingress in /status

Existing-overlap context refs:

- #56741 fix(telegram): respect topic-level groupPolicy overrides for /commands in forum topics (fixes #56699)
