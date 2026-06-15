---
repo: openclaw/openclaw
cluster_id: gitcrawl-422-plan-wave-20260615-a
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
  - "#35406"
candidates:
  - "#35406"
  - "#57600"
cluster_refs:
  - "#35406"
  - "#57600"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #35406 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 422 on 2026-06-15."
---

# Gitcrawl Cluster 422

Generated from local gitcrawl run cluster 422 for `openclaw/openclaw`.

Display title:

> Improve read tool handling for binary document formats (.docx, .pdf, .pptx, .xlsx) & Avoid Token Waste on Binary Read

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #35406, currently open in local store
- latest member update: 2026-06-14T04:46:04.724368Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #35406 Improve read tool handling for binary document formats (.docx, .pdf, .pptx, .xlsx) & Avoid Token Waste on Binary Read
- #57600 read: guard binary office documents from raw text output
