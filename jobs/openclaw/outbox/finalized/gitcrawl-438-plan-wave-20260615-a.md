---
repo: openclaw/openclaw
cluster_id: gitcrawl-438-plan-wave-20260615-a
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
  - "#20756"
candidates:
  - "#20756"
  - "#85671"
cluster_refs:
  - "#20756"
  - "#85671"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #20756 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 438 on 2026-06-15."
---

# Gitcrawl Cluster 438

Generated from local gitcrawl run cluster 438 for `openclaw/openclaw`.

Display title:

> message tool should auto-select the only enabled account

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #20756, currently open in local store
- latest member update: 2026-06-14T04:46:06.821293Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #20756 message tool should auto-select the only enabled account
- #85671 fix(outbound): auto-select single enabled message account
