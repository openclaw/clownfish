---
repo: openclaw/openclaw
cluster_id: ghcrawl-156727-autonomous-smoke
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
  - "#54962"
candidates:
  - "#54962"
cluster_refs:
  - "#54962"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "Finalized on 2026-06-14: replacement PR #92825 landed at 34678d8dfa17b36c64e2878d931a16aa048bdb48; source PR #54962 was closed as superseded."
notes: "Generated from ghcrawl run cluster 156727 on 2026-04-26; live refreshed and finalized on 2026-06-14."
---

# GHCrawl Cluster 156727

Generated from local ghcrawl run cluster 156727 for `openclaw/openclaw`.

Display title:

> fix(telegram): skip bot-authored media in reply resolution

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #57298, currently closed after live refresh
- latest member update: 2026-04-24T18:56:29.095Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #50102 fix: prevent ghost media attachments from debounce buffer flatMap
- #57298 fix(telegram): skip bot-authored media in reply resolution
- #66912 fix(telegram): restore self-authored reply-media guard

Open candidates:

- #54962 fix(telegram): add 'callback_data:' prefix to inline button callbacks
