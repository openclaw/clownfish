---
repo: openclaw/openclaw
cluster_id: gitcrawl-196-autonomous-refresh-20260623a
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
  - "#89594"
cluster_refs:
  - "#89594"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#90738"
  - "#92591"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #90738 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 196 on 2026-06-23. Existing-overlap refs #90738, #92591 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 196

Generated from local gitcrawl run cluster 196 for `openclaw/openclaw`.

Display title:

> fix(msteams): read file attachments on Teams channel messages (team GUID + channel fallback + thread-reply URL)

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #90738, #92591
- representative: #90738, currently open in local store
- latest member update: 2026-06-19T02:13:01.144323Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89594 [Bug]: In msteams channel messages, OpenClaw can't access inbound attachments

Existing-overlap context refs:

- #90738 fix(msteams): read file attachments on Teams channel messages (team GUID + channel fallback + thread-reply URL)
- #92591 feat(msteams): respond to channel messages by keyword without an @mention
