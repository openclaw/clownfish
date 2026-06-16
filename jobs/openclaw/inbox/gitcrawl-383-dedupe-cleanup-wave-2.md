---
repo: openclaw/openclaw
cluster_id: gitcrawl-383-dedupe-cleanup-wave-2
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
  - "#41744"
candidates:
  - "#41744"
cluster_refs:
  - "#41744"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#50359"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41744 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 383 on 2026-06-16. Existing-overlap refs #50359 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 383

Generated from local gitcrawl run cluster 383 for `openclaw/openclaw`.

Display title:

> Feishu: read image tool result loses media before final outbound payload

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #50359
- representative: #41744, currently open in local store
- latest member update: 2026-06-15T19:04:12.662932Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41744 Feishu: read image tool result loses media before final outbound payload

Existing-overlap context refs:

- #50359 [security-signal] Fix embedded read-image media fallback
