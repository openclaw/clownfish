---
repo: openclaw/openclaw
cluster_id: gitcrawl-210-plan-wave-20260615-a
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
  - "#90467"
candidates:
  - "#90467"
  - "#90841"
  - "#91448"
cluster_refs:
  - "#90467"
  - "#90841"
  - "#91448"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #90467 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 210 on 2026-06-15."
---

# Gitcrawl Cluster 210

Generated from local gitcrawl run cluster 210 for `openclaw/openclaw`.

Display title:

> [Bug]: Cron dashboard should suggest/validate Telegram announce “To” targets from configured groups

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #90467, currently open in local store
- latest member update: 2026-06-14T04:46:05.279474Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90467 [Bug]: Cron dashboard should suggest/validate Telegram announce “To” targets from configured groups
- #90841 fix(control-ui): validate Telegram chat.id format on cron To field (#90467)
- #91448 fix(cron): validate Telegram delivery target is numeric chat ID
