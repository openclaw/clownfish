---
repo: openclaw/openclaw
cluster_id: gitcrawl-837-plan-wave-20260615-b
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
  - "#75895"
candidates:
  - "#75895"
  - "#76077"
cluster_refs:
  - "#75895"
  - "#76077"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #75895 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 837 on 2026-06-15."
---

# Gitcrawl Cluster 837

Generated from local gitcrawl run cluster 837 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw message send can hang indefinitely with no internal timeout, ignores parent SIGTERM

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #75895, currently open in local store
- latest member update: 2026-06-14T04:46:06.503778Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #75895 [Bug]: openclaw message send can hang indefinitely with no internal timeout, ignores parent SIGTERM
- #76077 fix: add --timeout flag to openclaw message send with SIGTERM support
