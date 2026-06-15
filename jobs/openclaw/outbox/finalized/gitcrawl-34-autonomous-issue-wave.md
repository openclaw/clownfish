---
repo: openclaw/openclaw
cluster_id: gitcrawl-34-autonomous-issue-wave
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
  - "#84022"
  - "#90499"
cluster_refs:
  - "#84022"
  - "#90499"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#64322"
  - "#68843"
  - "#79562"
  - "#79945"
  - "#81341"
  - "#83842"
  - "#84485"
  - "#85173"
  - "#86577"
  - "#86716"
  - "#89279"
  - "#89482"
  - "#89962"
  - "#90511"
  - "#90558"
  - "#91023"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #86716 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 34 on 2026-06-15. Existing-overlap refs #64322, #68843, #79562, #79945, #81341, #83842, #84485, #85173, #86577, #86716, #89279, #89482, #89962, #90511, #90558, #91023 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 34

Generated from local gitcrawl run cluster 34 for `openclaw/openclaw`.

Display title:

> fix(discord): harden reply delivery accounting

Cluster shape from gitcrawl:

- total members: 18
- issues: 2
- pull requests: 16
- open candidates in local store: 2
- excluded existing-overlap refs: #64322, #68843, #79562, #79945, #81341, #83842, #84485, #85173, #86577, #86716, #89279, #89482, #89962, #90511, #90558, #91023
- representative: #86716, currently open in local store
- latest member update: 2026-06-15T11:49:41.503298Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #84022 Discord room events can suppress final assistant replies into transcript-only mode
- #90499 Bug: Discord message.read rejects allowlisted one-to-one DM channel targets

Existing-overlap context refs:

- #64322 [security-signal] fix(acp): assign distinct session keys to Discord threads under the same parent channel
- #68843 [security-signal] fix(acp): treat missing cwd as stale bound session
- #79562 Fix Discord queue backpressure and related read-path bottlenecks
- #79945 [security-signal] fix(discord): log silent reply drops; allow archives in host-read media
- #81341 [security-signal] [AI-assisted] Fix ACP bound thread follow-up delivery
- #83842 [security-signal] fix(discord): add native reply opt-out
- #84485 fix(discord): guard message-tool-only final delivery
- #85173 fix(discord): degrade audioAsVoice to media attachment when voice adapter unavailable
- #86577 fix(discord): persist inbound replay recovery
- #86716 fix(discord): harden reply delivery accounting
- #89279 fix(tasks): deliver ACP completions to bound Discord threads
- #89482 fix(discord): ignore stale ACP bindings when acpx is disabled
- #89962 [security-signal] fix(discord): fall back to text when voice delivery fails
- #90511 [security-signal] fix: allow Discord DM reads for allowlisted peers
- #90558 [security-signal] fix(discord): allow authorized one-to-one DM reads
- #91023 fix(acp): scope Discord thread session keys
