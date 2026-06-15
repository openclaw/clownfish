---
repo: openclaw/openclaw
cluster_id: gitcrawl-327-plan-wave-20260615-a
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
  - "#48834"
candidates:
  - "#48834"
  - "#83458"
cluster_refs:
  - "#48834"
  - "#83458"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #48834 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 327 on 2026-06-15."
---

# Gitcrawl Cluster 327

Generated from local gitcrawl run cluster 327 for `openclaw/openclaw`.

Display title:

> feat(feishu): enable /focus and /unfocus commands + fix ACP block delivery

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #48834, currently open in local store
- latest member update: 2026-06-14T04:46:07.388469Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48834 feat(feishu): enable /focus and /unfocus commands + fix ACP block delivery
- #83458 fix(feishu): preserve ACP topic conversation bindings
