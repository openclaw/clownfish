---
repo: openclaw/openclaw
cluster_id: gitcrawl-1-autonomous-issue-wave
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
  - "#42276"
  - "#79469"
  - "#81339"
  - "#81468"
  - "#86521"
  - "#87321"
  - "#87700"
  - "#88033"
  - "#88079"
  - "#89773"
  - "#90999"
  - "#91012"
  - "#91727"
  - "#91987"
cluster_refs:
  - "#42276"
  - "#79469"
  - "#81339"
  - "#81468"
  - "#86521"
  - "#87321"
  - "#87700"
  - "#88033"
  - "#88079"
  - "#89773"
  - "#90999"
  - "#91012"
  - "#91727"
  - "#91987"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#50483"
  - "#74733"
  - "#79339"
  - "#80670"
  - "#81415"
  - "#81470"
  - "#81907"
  - "#82870"
  - "#84352"
  - "#86551"
  - "#86554"
  - "#86759"
  - "#87111"
  - "#87387"
  - "#87471"
  - "#88240"
  - "#88686"
  - "#89017"
  - "#89800"
  - "#90430"
  - "#91000"
  - "#91013"
  - "#91606"
  - "#91680"
  - "#91810"
  - "#92003"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#88079"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #92003 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1 on 2026-06-15. Security-signal refs #88079 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #50483, #74733, #79339, #80670, #81415, #81470, #81907, #82870, #84352, #86551, #86554, #86759, #87111, #87387, #87471, #88240, #88686, #89017, #89800, #90430, #91000, #91013, #91606, #91680, #91810, #92003 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1

Generated from local gitcrawl run cluster 1 for `openclaw/openclaw`.

Display title:

> fix(webchat): recover session after stop

Cluster shape from gitcrawl:

- total members: 40
- issues: 15
- pull requests: 25
- open candidates in local store: 14
- excluded existing-overlap refs: #50483, #74733, #79339, #80670, #81415, #81470, #81907, #82870, #84352, #86551, #86554, #86759, #87111, #87387, #87471, #88240, #88686, #89017, #89800, #90430, #91000, #91013, #91606, #91680, #91810, #92003
- security-signal refs requiring route_security: #88079
- representative: #92003, currently open in local store
- latest member update: 2026-06-15T11:49:41.482874Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42276 Reasoning stream
- #79469 [UX] 思考过程（reasoning）在回复完成后自动消失，无法回顾 / Reasoning text disappears after response completes
- #81339 [Bug]: Code block leading whitespace trimmed by WebChat UI, breaking ASCII diagram alignment
- #81468 TTS audio generated but not played in WebChat (broadcastChatFinal drops media)
- #86521 fix: preserve reasoning_content for DeepSeek models through proxy providers (opencode-native)
- #87321 WebChat replay drops user-visible sessions_yield messages stored only as tool results
- #87700 [Bug]: Control UI webchat session silently resets after network disconnect / sleep — previous session file renamed to .jsonl.reset.* and lost from sessions tab
- #88033 [Bug]: Webchat composer stays stuck on red Stop button after response completes
- #88079 [security-signal] [Regression] WebChat: reasoning_content not streamed for Kimi Code & DeepSeek Reasoner — only MiniMax works
- #89773 session_status with current sessionKey resolves to wrong session in webchat
- #90999 [Bug]: post-dispatch chat.send rejection can overwrite terminal abort
- #91012 [Bug]: stale chat abort marker can suppress fresh chat events
- #91727 [Regression] WebChat does not render reasoning live for any model after #87671 (only appears after manual refresh)
- #91987 [Bug]: WebChat stop button corrupts session — subsequent messages get no response until /reset

Existing-overlap context refs:

- #50483 [security-signal] fix(ios): stabilize chat streaming layout and session flow
- #74733 fix(ui): stabilize WebChat message ordering
- #79339 fix: preserve final media reply directives
- #80670 fix(gateway): reduce WebChat ingress latency
- #81415 [security-signal] fix(agents): attach read tool images to replies
- #81470 fix(webchat): include TTS audio in broadcastChatFinal when media already appended
- #81907 fix(webchat): preserve code block whitespace
- #82870 fix(agent): keep tool media authoritative in replies
- #84352 Fix WebChat dispatch failure session status
- #86551 fix(agents): add missing DeepSeek V4 proxy models to reasoning_content replay set
- #86554 fix(agents): add missing DeepSeek V4 proxy models to reasoning_content replay set
- #86759 fix(webchat): broadcast agent TTS media final payloads
- #87111 [security-signal] fix(webchat): paginate tool-heavy chat history
- #87387 [Bug]: Control UI webchat can leave false "In progress" / "Stop" state after completed response
- #87471 fix(webchat): mirror visible tool status on replay
- #88240 [security-signal] fix(ui): keep session switching responsive
- #88686 Replay sessions_yield wait text in WebChat history
- #89017 [security-signal] fix #87700: [Bug]: Control UI webchat session silently resets after network disconnect / sleep — previous session file renamed to .jsonl.reset.* and lost from sessions tab
- #89800 fix(agents): resolve webchat current session status
- #90430 fix(agents): show WebChat the restart recovery notice via the session transcript
- #91000 [security-signal] fix(gateway): preserve abort after dispatch rejection
- #91013 [security-signal] fix(gateway): ignore stale abort markers for fresh chat events
- #91606 fix(ui): prevent false busy state in Control UI webchat
- #91680 fix(ui): keep composer on Send when run-status toast expires (#88033)
- #91810 fix(ui): reload WebChat history for deferred thinking
- #92003 fix(webchat): recover session after stop
