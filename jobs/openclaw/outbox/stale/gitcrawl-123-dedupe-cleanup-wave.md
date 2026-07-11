---
repo: openclaw/openclaw
cluster_id: gitcrawl-123-dedupe-cleanup-wave
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
  - "#92819"
candidates:
  - "#75270"
  - "#92776"
  - "#92819"
cluster_refs:
  - "#75270"
  - "#92776"
  - "#92819"
  - "#92821"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #92819 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 123 on 2026-06-16."
---

# Gitcrawl Cluster 123

Generated from local gitcrawl run cluster 123 for `openclaw/openclaw`.

Display title:

> Fix stale auto-fallback origin model selection

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 3
- representative: #92819, currently open in local store
- latest member update: 2026-06-15T19:04:12.642556Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #92821 fix(agents): use configured primary as fallback origin to prevent indefinite session pinning (#92776)

Open candidates:

- #75270 fix(agent): prevent sticky model fallback
- #92776 Session model pinning persists indefinitely: snap-back probe (PR #82676) defeated by origin-field pollution upstream — repros on 2026.5.28 through 2026.6.7-beta.1, byte-identical paths
- #92819 Fix stale auto-fallback origin model selection
