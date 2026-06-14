---
repo: openclaw/openclaw
cluster_id: ghcrawl-156589-autonomous-smoke
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
canonical:
  - "#66252"
candidates:
  - "#56613"
  - "#66252"
cluster_refs:
  - "#56613"
  - "#66252"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "Live refresh on 2026-06-14 found #56613 and #66252 open; original representative #11483 is closed context only. Prefer #66252 as live canonical and treat #56613 as related unless refreshed evidence supports closure."
notes: "Generated from ghcrawl run cluster 156589 on 2026-04-26; live refreshed on 2026-06-14."
---

# GHCrawl Cluster 156589

Generated from local ghcrawl run cluster 156589 for `openclaw/openclaw`.

Display title:

> Feature: Per-agent TTS voice configuration

Cluster shape from ghcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 9
- representative: #11483, currently closed after live refresh
- latest member update: 2026-04-26T00:46:52.005Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #11483 Feature: Per-agent TTS voice configuration
- #38673 [Feature]: Per-Agent TTS Configuration
- #39614 [Feature]: Per-channel TTS voice — different voices for DMs, group chats, and topics
- #44058 Feature Request: Bot/Channel Level TTS Configuration
- #56701 Feature request: per-agent TTS voice configuration
- #61858 [Feature]: Per-agent TTS voice/voiceId configuration
- #70429 Feature request: per-agent TTS voice configuration

Open candidates:

- #56613 [Feature]: Talk/Voice tab — agent/session switching + per-agent TTS voice
- #66252 [Feature]: Per-Agent TTS/STT Configuration Overrides for Multi-Language Support
