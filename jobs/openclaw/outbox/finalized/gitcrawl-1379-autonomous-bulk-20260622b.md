---
repo: openclaw/openclaw
cluster_id: gitcrawl-1379-autonomous-bulk-20260622b
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
  - "#94270"
candidates:
  - "#94270"
cluster_refs:
  - "#94270"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94453"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#94453"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #94270 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1379 on 2026-06-22. Existing-overlap refs #94453 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1379

Generated from local gitcrawl run cluster 1379 for `openclaw/openclaw`.

Display title:

> cron: mcp action=run defaults to force mode, bypassing all schedule guards

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #94453
- security-signal refs requiring route_security: #94453
- representative: #94270, currently open in local store
- latest member update: 2026-06-19T02:13:00.569281Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94270 cron: mcp action=run defaults to force mode, bypassing all schedule guards

Existing-overlap context refs:

- #94453 [security-signal] fix: default cron runMode to "due" instead of "force" (#94270)
