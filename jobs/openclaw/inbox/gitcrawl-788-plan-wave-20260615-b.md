---
repo: openclaw/openclaw
cluster_id: gitcrawl-788-plan-wave-20260615-b
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
  - "#78091"
candidates:
  - "#78091"
  - "#78124"
cluster_refs:
  - "#78091"
  - "#78124"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #78091 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 788 on 2026-06-15."
---

# Gitcrawl Cluster 788

Generated from local gitcrawl run cluster 788 for `openclaw/openclaw`.

Display title:

> [Bug]: Open-WebUI creates new session per message instead of reusing persistent session

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #78091, currently open in local store
- latest member update: 2026-06-14T04:46:06.692541Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #78091 [Bug]: Open-WebUI creates new session per message instead of reusing persistent session
- #78124 fix(openai-compat): derive stable session from X-Chat-Id / X-Thread-Id headers (#78091)
