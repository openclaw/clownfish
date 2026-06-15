---
repo: openclaw/openclaw
cluster_id: gitcrawl-851-plan-wave-20260615-b
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
  - "#74354"
candidates:
  - "#74354"
  - "#74369"
cluster_refs:
  - "#74354"
  - "#74369"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #74354 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 851 on 2026-06-15."
---

# Gitcrawl Cluster 851

Generated from local gitcrawl run cluster 851 for `openclaw/openclaw`.

Display title:

> [Bug]: 通过 Control UI 发送纯数字时，数字会被自动添加千位分隔符（如 123456789 → 123-456-789）

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #74354, currently open in local store
- latest member update: 2026-06-14T04:46:06.583857Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74354 [Bug]: 通过 Control UI 发送纯数字时，数字会被自动添加千位分隔符（如 123456789 → 123-456-789）
- #74369 fix(control-ui): preserve numeric chat input in composer
