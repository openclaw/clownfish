---
repo: openclaw/openclaw
cluster_id: gitcrawl-123-plan-ramp
mode: plan
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
  - "#92821"
cluster_refs:
  - "#75270"
  - "#92776"
  - "#92819"
  - "#92821"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #92819 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 123 on 2026-06-14."
---

# Gitcrawl Cluster 123

Generated from local gitcrawl run cluster 123 for `openclaw/openclaw`.

Display title:

> Fix stale auto-fallback origin model selection

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- representative: #92819, currently open in local store
- latest member update: 2026-06-14T04:46:06.86668Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #75270 fix(agent): prevent sticky model fallback
- #92776 Session model pinning persists indefinitely: snap-back probe (PR #82676) defeated by origin-field pollution upstream — repros on 2026.5.28 through 2026.6.7-beta.1, byte-identical paths
- #92819 Fix stale auto-fallback origin model selection
- #92821 fix(agents): use configured primary as fallback origin to prevent indefinite session pinning (#92776)
