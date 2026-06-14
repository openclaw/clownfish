---
repo: openclaw/openclaw
cluster_id: gitcrawl-5644-autonomous-smoke
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
  - "#44166"
candidates:
  - "#59137"
cluster_refs:
  - "#44166"
  - "#44167"
  - "#59137"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #44166 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 5644 on 2026-06-14."
---

# Gitcrawl Cluster 5644

Generated from local gitcrawl run cluster 5644 for `openclaw/openclaw`.

Display title:

> memory reindex aborts on transient embedding transport errors instead of retrying or splitting the batch

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- representative: #44166, currently closed in local store
- latest member update: 2026-06-10T06:45:53.460983744Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44166 memory reindex aborts on transient embedding transport errors instead of retrying or splitting the batch
- #44167 fix(memory): retry transient embedding transport failures

Open candidates:

- #59137 fix(memory): preserve retry state and embedding cache across reindex rollback
