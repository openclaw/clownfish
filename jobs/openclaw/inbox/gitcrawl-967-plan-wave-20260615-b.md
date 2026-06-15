---
repo: openclaw/openclaw
cluster_id: gitcrawl-967-plan-wave-20260615-b
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
  - "#84034"
candidates:
  - "#84034"
  - "#89443"
cluster_refs:
  - "#84034"
  - "#89443"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #84034 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 967 on 2026-06-15."
---

# Gitcrawl Cluster 967

Generated from local gitcrawl run cluster 967 for `openclaw/openclaw`.

Display title:

> [Bug] active-memory recall injects assistant chitchat into <active_memory_plugin> instead of NONE or valid memory summary

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #84034, currently open in local store
- latest member update: 2026-06-14T04:46:07.34375Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #84034 [Bug] active-memory recall injects assistant chitchat into <active_memory_plugin> instead of NONE or valid memory summary
- #89443 fix(active-memory): drop assistant chitchat boilerplate from recall summaries
