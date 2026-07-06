---
repo: openclaw/openclaw
cluster_id: gitcrawl-21-autonomous-drip-20260706
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical: []
candidates:
  - "#53486"
cluster_refs:
  - "#53486"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#39568"
  - "#40768"
  - "#40782"
  - "#41609"
  - "#48786"
  - "#50490"
  - "#54409"
  - "#55242"
  - "#56818"
  - "#60383"
  - "#64820"
  - "#65398"
  - "#72504"
  - "#72972"
  - "#78927"
  - "#78964"
  - "#83730"
  - "#85450"
  - "#85481"
  - "#87709"
  - "#87774"
  - "#89783"
  - "#90177"
  - "#90192"
  - "#90559"
  - "#90572"
  - "#90636"
  - "#91669"
  - "#92364"
  - "#92595"
  - "#92937"
  - "#92962"
  - "#92975"
  - "#93202"
  - "#93213"
  - "#93266"
  - "#93589"
  - "#93706"
  - "#94262"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#65398"
  - "#78927"
  - "#87709"
  - "#92962"
  - "#93266"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #78964 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 21 on 2026-07-06. Existing-overlap refs #39568, #40768, #40782, #41609, #48786, #50490, #54409, #55242, #56818, #60383, #64820, #65398, #72504, #72972, #78927, #78964, #83730, #85450, #85481, #87709, #87774, #89783, #90177, #90192, #90559, #90572, #90636, #91669, #92364, #92595, #92937, #92962, #92975, #93202, #93213, #93266, #93589, #93706, #94262 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 21

Generated from local gitcrawl run cluster 21 for `openclaw/openclaw`.

Display title:

> fix(feishu): preserve topic reply anchors

Cluster shape from gitcrawl:

- total members: 40
- issues: 17
- pull requests: 23
- open candidates in local store: 1
- excluded existing-overlap refs: #39568, #40768, #40782, #41609, #48786, #50490, #54409, #55242, #56818, #60383, #64820, #65398, #72504, #72972, #78927, #78964, #83730, #85450, #85481, #87709, #87774, #89783, #90177, #90192, #90559, #90572, #90636, #91669, #92364, #92595, #92937, #92962, #92975, #93202, #93213, #93266, #93589, #93706, #94262
- security-signal refs requiring route_security: #65398, #78927, #87709, #92962, #93266
- representative: #78964, currently open in local store
- latest member update: 2026-06-19T02:13:01.187732Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #53486 [Bug] Feishu: message(action=send) renders card JSON as plain text instead of interactive card (regression)

Existing-overlap context refs:

- #39568 Feishu: bot does not respond when @-mentioned in a reply message
- #40768 Feishu: @mention not recognized in group when multiple bots share the same group (open_id app-scoped mismatch)
- #40782 fix(feishu): use union_id as fallback for @mention detection in multi-bot groups
- #41609 [Feishu] Interactive Card message content parsing missing
- #48786 Feishu: replied/quoted message mentions show as raw @_user_N placeholders
- #50490 [Bug]: Feishu 群聊中 activation 模式切换无效，始终响应所有消息
- #54409 [Bug]: Feishu plugin: per-chat serial queue prevents messages.queue.mode = "collect" from batching queued messages
- #55242 [Bug] Feishu card message header leaks identity.emoji field containing non-emoji text
- #56818 [Bug] Feishu card action callback causes streaming reply to fail with Invalid open_message_id
- #60383 fix(feishu): parse interactive card post-format fallback content
- #64820 fix(feishu): break circular module init causing ReferenceError on group mention
- #65398 [security-signal] fix(feishu): preserve top-level groupPolicy and avoid duplicate registration
- #72504 Feishu: bot strips its own <at> mention causing NO_REPLY in multi-bot groups
- #72972 fix(feishu): scope sequential queue by group session
- #78927 [security-signal] fix(feishu): fix topic session splitting for both native topic_group and normal groups with topic message format
- #78964 fix(feishu): preserve topic reply anchors
- #83730 [Bug] Feishu p2p DM replies fail with SUBSCRIPTION_NOT_FOUND after upgrading to 2026.5.12
- #85450 [Bug] Structured card action callback filtered by requireMention in group chats
- #85481 Fix Feishu card action mention gating
- #87709 [security-signal] fix(feishu): honor session activation mode for group admission (#50490)
- #87774 fix(feishu): preserve group route for mirrored oc replies
- #89783 feat(feishu): bot-to-bot conversation support with @mention handling
- #90177 [Bug]: Feishu group reply with only @bot gets dropped before quoted content is fetched
- #90192 fix(feishu): fetch quoted content before empty-message guard
- #90559 [P0] Feishu connector: sequential queue deadlock + self-talk feedback loop under slow LLM
- #90572 fix(feishu): drop self-authored receive echoes
- #90636 fix(feishu): send p2p replies to user target
- #91669 Feishu channel dispatch completes with replies=0 even though assistant final text is written to session transcript
- #92364 [Bug] Feishu DM dispatch complete (replies=0) — still present in v2026.6.5, multiple past reports
- #92595 [Bug]: Feishu bot can receive outgoing push but cannot process incoming replies — no response from OpenClaw
- #92937 fix(feishu): extract emoji-only from identity.emoji for card headers (fixes #55242)
- #92962 [security-signal] [AI-assisted] fix(feishu): let active followups reach queue
- #92975 #92595: fix(feishu): handle uninitialized runtime gracefully on inbound messages
- #93202 fix(feishu): convert presentation to card on message.edit
- #93213 fix(feishu): prefer context open_message_id over temporary card-action callback ID (fixes #56818)
- #93266 [security-signal] fix(feishu): scope topic queue dispatch
- #93589 fix(feishu): extract emoji-only from identity.emoji for card headers (fixes #55242)
- #93706 fix(feishu): detect card JSON in plain message param for proactive sends (fixes #53486)
- #94262 fix(feishu): detect card JSON in plain message param for proactive sends (fixes #53486)
