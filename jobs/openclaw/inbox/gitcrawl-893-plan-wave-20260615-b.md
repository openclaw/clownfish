---
repo: openclaw/openclaw
cluster_id: gitcrawl-893-plan-wave-20260615-b
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
  - "#80722"
candidates:
  - "#80722"
  - "#80823"
cluster_refs:
  - "#80722"
  - "#80823"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #80722 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 893 on 2026-06-15."
---

# Gitcrawl Cluster 893

Generated from local gitcrawl run cluster 893 for `openclaw/openclaw`.

Display title:

> config set "Restart the gateway to apply" warning is misleading for active agents without agentRuntime override

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #80722, currently open in local store
- latest member update: 2026-06-14T04:46:06.902749Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #80722 config set "Restart the gateway to apply" warning is misleading for active agents without agentRuntime override
- #80823 fix(cli): differentiate gateway-restart hint for hot-loadable agent config sets (#80722)
