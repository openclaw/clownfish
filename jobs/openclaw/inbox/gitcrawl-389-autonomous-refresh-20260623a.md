---
repo: openclaw/openclaw
cluster_id: gitcrawl-389-autonomous-refresh-20260623a
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
  - "#40644"
candidates:
  - "#40644"
cluster_refs:
  - "#40644"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#41892"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #40644 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 389 on 2026-06-23. Existing-overlap refs #41892 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 389

Generated from local gitcrawl run cluster 389 for `openclaw/openclaw`.

Display title:

> Cron Jobs Calendar View for Control UI

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #41892
- representative: #40644, currently open in local store
- latest member update: 2026-06-19T02:13:00.383634Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40644 Cron Jobs Calendar View for Control UI

Existing-overlap context refs:

- #41892 feat(control-ui): add cron calendar timeline view
