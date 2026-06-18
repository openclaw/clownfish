---
repo: openclaw/openclaw
cluster_id: gitcrawl-811-fresh-plan-20260618t161946z
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
  - "#76275"
candidates:
  - "#76150"
  - "#76275"
cluster_refs:
  - "#76150"
  - "#76275"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#79181"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #76275 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 811 on 2026-06-18. Existing-overlap refs #79181 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 811

Generated from local gitcrawl run cluster 811 for `openclaw/openclaw`.

Display title:

> [Bug]: Gateway restarting loop

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #79181
- representative: #76275, currently open in local store
- latest member update: 2026-06-18T16:17:07.20608Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #76150 [Bug]: Gateway did not become healthy after restart.
- #76275 [Bug]: Gateway restarting loop

Existing-overlap context refs:

- #79181 [security-signal] fix(gateway): throttle rapid process restarts before sidecar startup
