---
repo: openclaw/openclaw
cluster_id: gitcrawl-1348-autonomous-bulk-20260622b
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
  - "#93326"
candidates:
  - "#93326"
cluster_refs:
  - "#93326"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93599"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #93326 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1348 on 2026-06-22. Existing-overlap refs #93599 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1348

Generated from local gitcrawl run cluster 1348 for `openclaw/openclaw`.

Display title:

> [Bug]: DOCX-related operations may rewrite .docx into .docodex before execution

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #93599
- representative: #93326, currently open in local store
- latest member update: 2026-06-19T02:13:00.792693Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93326 [Bug]: DOCX-related operations may rewrite .docx into .docodex before execution

Existing-overlap context refs:

- #93599 fix(tools): auto-correct hallucinated file extensions in tool call params (fixes #93326)
