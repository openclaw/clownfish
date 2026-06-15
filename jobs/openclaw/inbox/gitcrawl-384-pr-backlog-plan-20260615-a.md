---
repo: openclaw/openclaw
cluster_id: gitcrawl-384-pr-backlog-plan-20260615-a
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
  - "#62167"
cluster_refs:
  - "#62167"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#41645"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #41645 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 384 on 2026-06-15. Existing-overlap refs #41645 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 384

Generated from local gitcrawl run cluster 384 for `openclaw/openclaw`.

Display title:

> [Feature]: [Feature Request] 按用户维度统计 Token 使用量

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #41645
- representative: #41645, currently open in local store
- latest member update: 2026-06-14T04:46:06.052313Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #62167 [Feature]: token usage widged in chat UI

Existing-overlap context refs:

- #41645 [Feature]: [Feature Request] 按用户维度统计 Token 使用量
