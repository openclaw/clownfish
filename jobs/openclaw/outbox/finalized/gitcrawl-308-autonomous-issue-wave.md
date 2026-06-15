---
repo: openclaw/openclaw
cluster_id: gitcrawl-308-autonomous-issue-wave
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
  - "#71921"
cluster_refs:
  - "#71921"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#72404"
  - "#92176"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #72404 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 308 on 2026-06-15. Existing-overlap refs #72404, #92176 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 308

Generated from local gitcrawl run cluster 308 for `openclaw/openclaw`.

Display title:

> fix(models): default input=[text,image] for vision-capable explicit-only models

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #72404, #92176
- representative: #72404, currently open in local store
- latest member update: 2026-06-15T11:49:41.349516Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #71921 Bedrock Claude models (Opus 4.7, Sonnet 4.6, Opus 4.6) missing vision capability in registry

Existing-overlap context refs:

- #72404 [security-signal] fix(models): default input=[text,image] for vision-capable explicit-only models
- #92176 fix(media-understanding): resolve image model input from catalog, preserve explicit text-only (#92104)
