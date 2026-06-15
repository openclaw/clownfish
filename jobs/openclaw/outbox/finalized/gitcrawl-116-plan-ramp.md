---
repo: openclaw/openclaw
cluster_id: gitcrawl-116-plan-ramp
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
  - "#75148"
candidates:
  - "#74564"
  - "#75148"
  - "#75223"
  - "#75388"
  - "#75397"
cluster_refs:
  - "#74564"
  - "#75148"
  - "#75223"
  - "#75388"
  - "#75397"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #75148 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 116 on 2026-06-14."
---

# Gitcrawl Cluster 116

Generated from local gitcrawl run cluster 116 for `openclaw/openclaw`.

Display title:

> fix: fallback path user-visible bug

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #75148, currently open in local store
- latest member update: 2026-06-14T04:46:06.511629Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74564 fix: use agent auth scope in /models provider data
- #75148 fix: fallback path user-visible bug
- #75223 fix: CLI auth status/probe path regression
- #75388 fix: commit removes the runtime warning for the default group/channel private-reply behavior...
- #75397 fix: targeted hook resolution/cache path provider-runtime regressions
