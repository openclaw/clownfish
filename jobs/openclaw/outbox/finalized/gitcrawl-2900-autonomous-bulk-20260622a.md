---
repo: openclaw/openclaw
cluster_id: gitcrawl-2900-autonomous-bulk-20260622a
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
  - "#44970"
candidates:
  - "#65968"
cluster_refs:
  - "#44970"
  - "#56107"
  - "#64817"
  - "#65968"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#70900"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #44970 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2900 on 2026-06-22. Existing-overlap refs #70900 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 2900

Generated from local gitcrawl run cluster 2900 for `openclaw/openclaw`.

Display title:

> fix(agents): always throw FailoverError from embedded run on recoverable failures

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 1
- excluded existing-overlap refs: #70900
- representative: #44970, currently closed in local store
- latest member update: 2026-05-15T00:12:19.847134584Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44970 fix(agents): always throw FailoverError from embedded run on recoverable failures
- #56107 fix(agents): thread external fallback context into embedded runner failover gate
- #64817 fix: surface_error failover now throws FailoverError to prevent UI hang

Open candidates:

- #65968 fix(agents): surface terminal assistant errors via FailoverError

Existing-overlap context refs:

- #70900 fix(runner): gate surface_error throw on failoverFailure
