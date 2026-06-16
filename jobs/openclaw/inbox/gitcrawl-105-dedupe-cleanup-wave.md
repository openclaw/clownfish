---
repo: openclaw/openclaw
cluster_id: gitcrawl-105-dedupe-cleanup-wave
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
  - "#91697"
candidates:
  - "#91697"
  - "#91712"
  - "#91721"
  - "#92188"
cluster_refs:
  - "#91697"
  - "#91712"
  - "#91721"
  - "#92188"
  - "#92581"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #91697 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 105 on 2026-06-16."
---

# Gitcrawl Cluster 105

Generated from local gitcrawl run cluster 105 for `openclaw/openclaw`.

Display title:

> pruneDiagnosticSessionStates() does not clean up non-idle stale entries — ghost entries accumulate indefinitely after failed recovery

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 4
- representative: #91697, currently open in local store
- latest member update: 2026-06-15T19:04:11.139962Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #92581 fix(logging): prune stale non-idle diagnostic session states after fallback TTL (fixes #91697)

Open candidates:

- #91697 pruneDiagnosticSessionStates() does not clean up non-idle stale entries — ghost entries accumulate indefinitely after failed recovery
- #91712 fix(logging): prune non-idle stale diagnostic session entries
- #91721 fix(logging): prune non-idle stale diagnostic session states
- #92188 fix(logging): prune non-idle stale diagnostic session states (fixes #91697)
