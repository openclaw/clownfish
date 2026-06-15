---
repo: openclaw/openclaw
cluster_id: gitcrawl-221-plan-wave-20260615-a
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
  - "#91947"
candidates:
  - "#91947"
  - "#91958"
  - "#92065"
cluster_refs:
  - "#91947"
  - "#91958"
  - "#92065"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #91947 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 221 on 2026-06-15."
---

# Gitcrawl Cluster 221

Generated from local gitcrawl run cluster 221 for `openclaw/openclaw`.

Display title:

> memory_search 工具硬编码 15s timeout 不够 qmd query 跑完，建议可配置

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #91947, currently open in local store
- latest member update: 2026-06-14T04:46:04.563152Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91947 memory_search 工具硬编码 15s timeout 不够 qmd query 跑完，建议可配置
- #91958 fix(memory): align memory_search tool deadline with configured QMD timeout (fixes #91947)
- #92065 fix(memory): honor configured qmd search timeouts
