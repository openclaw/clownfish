---
repo: openclaw/openclaw
cluster_id: gitcrawl-213-plan-wave-20260615-a
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
  - "#84486"
candidates:
  - "#84486"
  - "#84501"
  - "#92199"
cluster_refs:
  - "#84486"
  - "#84501"
  - "#92199"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #84486 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 213 on 2026-06-15."
---

# Gitcrawl Cluster 213

Generated from local gitcrawl run cluster 213 for `openclaw/openclaw`.

Display title:

> Bug: Text before tool calls is lost in Feishu streaming card reply mode

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #84486, currently open in local store
- latest member update: 2026-06-14T04:46:06.712442Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #84486 Bug: Text before tool calls is lost in Feishu streaming card reply mode
- #84501 fix(acp): preserve final_only text across tool-call boundaries
- #92199 [Bug]: [ACP] Text before tool calls is lost in WeChat (intermediate messages dropped, not merged)
