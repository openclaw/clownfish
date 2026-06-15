---
repo: openclaw/openclaw
cluster_id: gitcrawl-642-plan-wave-20260615-a
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
  - "#69605"
candidates:
  - "#69605"
  - "#73633"
cluster_refs:
  - "#69605"
  - "#73633"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #69605 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 642 on 2026-06-15."
---

# Gitcrawl Cluster 642

Generated from local gitcrawl run cluster 642 for `openclaw/openclaw`.

Display title:

> [Bug]: Web UI copy button copies entire message instead of code block content

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #69605, currently open in local store
- latest member update: 2026-06-14T04:46:06.678171Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #69605 [Bug]: Web UI copy button copies entire message instead of code block content
- #73633 fix(control-ui): copy code blocks from rendered textContent (#69605)
