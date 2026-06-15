---
repo: openclaw/openclaw
cluster_id: gitcrawl-918-plan-wave-20260615-b
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
  - "#79824"
candidates:
  - "#79824"
  - "#79832"
cluster_refs:
  - "#79824"
  - "#79832"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #79824 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 918 on 2026-06-15."
---

# Gitcrawl Cluster 918

Generated from local gitcrawl run cluster 918 for `openclaw/openclaw`.

Display title:

> feishu: card V2 schema rejects deprecated `action` container — exec/plugin approval cards fail with code 230099

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #79824, currently open in local store
- latest member update: 2026-06-14T04:46:06.985131Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #79824 feishu: card V2 schema rejects deprecated `action` container — exec/plugin approval cards fail with code 230099
- #79832 feishu: replace deprecated card V2 `action` container with `column_set`
