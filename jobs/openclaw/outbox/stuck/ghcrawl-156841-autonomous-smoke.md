---
repo: openclaw/openclaw
cluster_id: ghcrawl-156841-autonomous-smoke
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
  - "#67782"
candidates:
  - "#67782"
cluster_refs:
  - "#67782"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "Parked on 2026-06-14 after run 27485129133: #67782 remains canonical and useful, but merge/repair needs human judgment because real behavior proof is failing and ClawSweeper requested a maintainer decision."
notes: "Generated from ghcrawl run cluster 156841 on 2026-04-26; live refreshed on 2026-06-14; parked as needs-human."
---

# GHCrawl Cluster 156841

Generated from local ghcrawl run cluster 156841 for `openclaw/openclaw`.

Display title:

> fix(telegram): retry setMyCommands on 429 rate-limit with retry_after backoff

Cluster shape from ghcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #49569, currently closed after live refresh
- latest member update: 2026-04-24T18:56:22.371Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #49569 fix(telegram): retry setMyCommands on 429 rate-limit with retry_after backoff
- #69165 [Feature]: Outbound Telegram send queue with per-chat rate limiting and retry_after-aware backoff

Open candidates:

- #67782 fix(telegram): skip delete before non-empty command sync
