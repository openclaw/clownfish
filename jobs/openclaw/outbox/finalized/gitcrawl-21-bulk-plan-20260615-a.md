---
repo: openclaw/openclaw
cluster_id: gitcrawl-21-bulk-plan-20260615-a
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
  - "#78964"
candidates:
  - "#39568"
  - "#50490"
  - "#72504"
  - "#77666"
  - "#78927"
  - "#78964"
  - "#83730"
  - "#84588"
  - "#85450"
  - "#85481"
  - "#85692"
  - "#87468"
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
cluster_refs:
  - "#39568"
  - "#50490"
  - "#72504"
  - "#77666"
  - "#78927"
  - "#78964"
  - "#83730"
  - "#84588"
  - "#85450"
  - "#85481"
  - "#85692"
  - "#87468"
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
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#40768"
  - "#40782"
  - "#48786"
  - "#64820"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#78927"
  - "#87709"
canonical_hint: "gitcrawl representative #78964 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 21 on 2026-06-15. Security-signal refs #78927, #87709 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #40768, #40782, #48786, #64820 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 21

Generated from local gitcrawl run cluster 21 for `openclaw/openclaw`.

Display title:

> fix(feishu): preserve topic reply anchors

Cluster shape from gitcrawl:

- total members: 27
- issues: 15
- pull requests: 12
- open candidates in local store: 23
- excluded existing-overlap refs: #40768, #40782, #48786, #64820
- security-signal refs requiring route_security: #78927, #87709
- representative: #78964, currently open in local store
- latest member update: 2026-06-14T04:46:07.370968Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39568 Feishu: bot does not respond when @-mentioned in a reply message
- #50490 [Bug]: Feishu 群聊中 activation 模式切换无效，始终响应所有消息
- #72504 Feishu: bot strips its own <at> mention causing NO_REPLY in multi-bot groups
- #77666 Feishu group messages receive replies=0 after upgrading to 2026.5.3
- #78927 [security-signal] fix(feishu): fix topic session splitting for both native topic_group and normal groups with topic message format
- #78964 fix(feishu): preserve topic reply anchors
- #83730 [Bug] Feishu p2p DM replies fail with SUBSCRIPTION_NOT_FOUND after upgrading to 2026.5.12
- #84588 fix(feishu): improve quoted message replies and context
- #85450 [Bug] Structured card action callback filtered by requireMention in group chats
- #85481 Fix Feishu card action mention gating
- #85692 Feishu agent intermittently returns replies=0 (silent failure, no error logged)
- #87468 Feishu: Agent-generated replies silently dropped (replies=0, queuedFinal=false) after WebSocket reconnect
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

Existing-overlap context refs:

- #40768 Feishu: @mention not recognized in group when multiple bots share the same group (open_id app-scoped mismatch)
- #40782 fix(feishu): use union_id as fallback for @mention detection in multi-bot groups
- #48786 Feishu: replied/quoted message mentions show as raw @_user_N placeholders
- #64820 fix(feishu): break circular module init causing ReferenceError on group mention
