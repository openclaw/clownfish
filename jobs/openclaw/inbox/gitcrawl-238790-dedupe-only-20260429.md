---
repo: openclaw/openclaw
cluster_id: gitcrawl-238790-dedupe-only-20260429
mode: autonomous
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
  - "#66597"
candidates:
  - "#66176"
  - "#66274"
  - "#66597"
  - "#66598"
  - "#66762"
  - "#67028"
  - "#67081"
  - "#67412"
  - "#67582"
cluster_refs:
  - "#66176"
  - "#66274"
  - "#66597"
  - "#66598"
  - "#66762"
  - "#67028"
  - "#67081"
  - "#67412"
  - "#67582"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66597 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238790 on 2026-04-29."
---

# Gitcrawl Cluster 238790

Generated from local gitcrawl run cluster 238790 for `openclaw/openclaw`.

Display title:

> [webchat] User message flickers after sending (v2026.4.12)

Cluster shape from gitcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 9
- representative: #66597, currently open in local store
- latest member update: 2026-04-24T18:56:21.232Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #66176 [Bug]: WebChat briefly hides newly sent message before it reappears
- #66274 Webchat flickers when lossless-claw plugin fires session.message events
- #66597 [webchat] User message flickers after sending (v2026.4.12)
- #66598 **Bug: Webchat message flickers after sending (v2026.4.12)**
- #66762 WebChat: full chat.history re-fetch on every message causes UI flicker
- #67028 [Bug] WebChat 消息短暂显示后消失（4.14 回归）
- #67081 Webchat: user message not displayed immediately after sending, only appears after assistant response
- #67412 Control UI: Sent message briefly disappears then reappears (sometimes stays hidden)
- #67582 Webchat: User messages not visible immediately after sending (optimistic rendering missing)
