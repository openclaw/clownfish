---
repo: openclaw/openclaw
cluster_id: gitcrawl-566-plan-wave-20260615-a
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
  - "#78754"
candidates:
  - "#78754"
  - "#78978"
cluster_refs:
  - "#78754"
  - "#78978"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #78754 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 566 on 2026-06-15."
---

# Gitcrawl Cluster 566

Generated from local gitcrawl run cluster 566 for `openclaw/openclaw`.

Display title:

> [Bug]: isolated session cron job with announce delivery to openclaw-weixin fails with "Unsupported channel: openclaw-weixin"

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #78754, currently open in local store
- latest member update: 2026-06-14T04:46:06.693623Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #78754 [Bug]: isolated session cron job with announce delivery to openclaw-weixin fails with "Unsupported channel: openclaw-weixin"
- #78978 fix: resolve external channel plugins in isolated cron delivery (#78754)
