---
repo: openclaw/openclaw
cluster_id: ghcrawl-143820-autonomous-smoke
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
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#45045"
candidates:
  - "#17298"
  - "#38439"
  - "#41201"
  - "#43119"
  - "#45703"
  - "#45755"
  - "#46909"
  - "#53380"
  - "#59438"
  - "#60348"
  - "#61025"
  - "#68248"
  - "#70700"
cluster_refs:
  - "#17298"
  - "#38439"
  - "#41201"
  - "#43119"
  - "#45045"
  - "#45703"
  - "#45755"
  - "#46909"
  - "#48121"
  - "#53380"
  - "#53610"
  - "#59438"
  - "#60348"
  - "#61025"
  - "#63690"
  - "#64998"
  - "#68248"
  - "#70700"
  - "#71422"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #45045 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143820 on 2026-04-25."
---

# GHCrawl Cluster 143820

Generated from local ghcrawl run cluster 143820 for `openclaw/openclaw`.

Display title:

> Control UI: Avatar doesn't update when switching between agent sessions

Cluster shape from ghcrawl:

- total members: 19
- issues: 19
- pull requests: 0
- open candidates in local store: 13
- representative: #45045, currently closed in local store
- latest member update: 2026-04-25T17:12:54.199Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45045 Control UI: Avatar doesn't update when switching between agent sessions
- #48121 [Bug]: Switching agents does not update avatar until manual refresh
- #53610 [Bug]: Avatar endpoint /avatar/{agentId} returns 404 — workspace-relative avatar path not served
- #63690 Webchat: avatar not updated when switching between agent sessions
- #64998 Control UI: stale avatar when switching agents on chat tab
- #71422 [Bug]: Control UI ignores assistantAvatar and renders favicon.svg

Open candidates:

- #17298 Control UI should display configured agent avatars instead of default favicon
- #38439 [Bug] Webchat avatar endpoint /avatar/{agentId} returns 404 even with valid IDENTITY.md avatar
- #41201 [Bug]: Control UI Avatar not displaying (broken image)
- #43119 [Feature]: control-ui should read per-agent identity (name + avatar) from agents.list[].identity
- #45703 [Bug]: Agent section is horrible (v2 UI)
- #45755 [Bug]: Agent emoji as AWOL (ui v0.2)
- #46909 [Bug]: Agent avatar disappears after updating to 2026.3.12 - Control UI display issue
- #53380 Support custom avatar/emoji for agents and users in Control UI
- #59438 [Bug]: Agent avatar not refreshing correctly when switching between agents in same browser session
- #60348 [Bug]: Avatar image in Gateway Webinterface outdated
- #61025 UI Bug: Assistant avatar rendered inline instead of as message bubble icon
- #68248 [Feature Request] Add avatar/favicon customization for Control UI agents
- #70700 [Bug]: Control UI inconsistently handles workspace-relative agent avatars even when /avatar/{agentId} resolves correctly
