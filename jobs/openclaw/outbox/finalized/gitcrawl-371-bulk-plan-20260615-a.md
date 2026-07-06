---
repo: openclaw/openclaw
cluster_id: gitcrawl-371-bulk-plan-20260615-a
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
  - "#73981"
cluster_refs:
  - "#73981"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#42106"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #42106 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 371 on 2026-06-15. Existing-overlap refs #42106 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 371

Generated from local gitcrawl run cluster 371 for `openclaw/openclaw`.

Display title:

> [Bug]: Block streaming can drop paragraph separators across streamed updates

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #42106
- representative: #42106, currently open in local store
- latest member update: 2026-06-14T04:46:06.545027Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #73981 fix(streaming): preserve markdown boundaries across block chunks

Existing-overlap context refs:

- #42106 [Bug]: Block streaming can drop paragraph separators across streamed updates
