---
repo: openclaw/openclaw
cluster_id: gitcrawl-139-fresh-plan-ramp
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
canonical: []
candidates:
  - "#89606"
cluster_refs:
  - "#87730"
  - "#89606"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#87828"
  - "#89882"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #87828 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 139 on 2026-06-17. Existing-overlap refs #87828, #89882 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 139

Generated from local gitcrawl run cluster 139 for `openclaw/openclaw`.

Display title:

> fix(plugins): accept bundled plugins in source overlay root for --refresh compatibility

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #87828, #89882
- representative: #87828, currently closed in local store
- latest member update: 2026-06-15T19:04:12.381655Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- #87730 [Bug]: 2026.5.27 Refresh still says stale

Open candidates:

- #89606 plugins registry --refresh (refreshReason: policy-changed) drops path/npm-origin plugins from plugins[]

Existing-overlap context refs:

- #87828 [security-signal] fix(plugins): accept bundled plugins in source overlay root for --refresh compatibility
- #89882 fix(plugins): rebuild missing installs on policy refresh
