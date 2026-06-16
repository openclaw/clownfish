---
repo: openclaw/openclaw
cluster_id: gitcrawl-993-dedupe-cleanup-wave-3
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
  - "#82281"
candidates:
  - "#82281"
cluster_refs:
  - "#82281"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#82379"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #82281 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 993 on 2026-06-16. Existing-overlap refs #82379 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 993

Generated from local gitcrawl run cluster 993 for `openclaw/openclaw`.

Display title:

> Docs: enumerate workflow runtime injected env vars + clarify step-output access

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #82379
- representative: #82281, currently open in local store
- latest member update: 2026-06-15T19:04:12.134573Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #82281 Docs: enumerate workflow runtime injected env vars + clarify step-output access

Existing-overlap context refs:

- #82379 docs(lobster): enumerate injected runtime env vars and clarify step-output access
