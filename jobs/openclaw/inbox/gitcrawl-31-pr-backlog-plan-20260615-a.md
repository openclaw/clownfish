---
repo: openclaw/openclaw
cluster_id: gitcrawl-31-pr-backlog-plan-20260615-a
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
  - "#54397"
candidates:
  - "#51067"
  - "#54397"
  - "#79607"
  - "#80901"
  - "#80942"
  - "#80944"
  - "#81946"
  - "#84827"
  - "#85546"
  - "#87662"
  - "#88479"
  - "#88581"
  - "#89922"
  - "#90184"
  - "#90577"
  - "#90655"
  - "#90833"
  - "#90916"
cluster_refs:
  - "#51067"
  - "#54397"
  - "#79607"
  - "#80901"
  - "#80942"
  - "#80944"
  - "#81946"
  - "#84827"
  - "#85546"
  - "#87662"
  - "#88479"
  - "#88581"
  - "#89922"
  - "#90184"
  - "#90577"
  - "#90655"
  - "#90833"
  - "#90916"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#19929"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#51067"
  - "#85546"
  - "#88479"
  - "#90577"
canonical_hint: "gitcrawl representative #54397 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 31 on 2026-06-15. Security-signal refs #51067, #85546, #88479, #90577 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #19929 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 31

Generated from local gitcrawl run cluster 31 for `openclaw/openclaw`.

Display title:

> [Feature]: Topic/Session Management UI

Cluster shape from gitcrawl:

- total members: 19
- issues: 10
- pull requests: 9
- open candidates in local store: 18
- excluded existing-overlap refs: #19929
- security-signal refs requiring route_security: #51067, #85546, #88479, #90577
- representative: #54397, currently open in local store
- latest member update: 2026-06-14T04:46:07.483803Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51067 [security-signal] feat(gateway): add configurable Control UI title
- #54397 [Feature]: Topic/Session Management UI
- #79607 [Feature]: Identity-based session unification — one session per user regardless of input channel (voice, Telegram, WhatsApp etc.)
- #80901 [Feature]: Sessions view in the Control UI / TUI — tabbed/list overview with peek + inline reply
- #80942 [Feature]: Control UI — auto-set document.title to current agent name for multi-agent workflows
- #80944 feat(control-ui): auto-set document.title to current agent name (#80942)
- #81946 Control UI: add guarded dashboard keyboard shortcuts
- #84827 fix(control-ui): add guarded dashboard shortcuts
- #85546 [security-signal] feat(ui): add session rename slash command
- #87662 [Feature]: Add guarded keyboard shortcuts for session/agent switching in Control UI
- #88479 [security-signal] feat(ui): inline rename in the in-chat session picker
- #88581 feat(commands): add /name to rename the current session from chat
- #89922 Control UI: Editable session titles + sidebar scroll improvements
- #90184 fix(ui): rename chat sessions from the picker
- #90577 [security-signal] fix(ui): show session name in browser title
- #90655 [Feature]: Allow renaming sessions in the Control UI
- #90833 feat(control-ui): allow renaming sessions in sidebar (#90655)
- #90916 [Feature]: Topic-session families for one assistant across multiple named context lanes

Existing-overlap context refs:

- #19929 [Feature]:  Shared sessions across multiple group/channel/thread chats
