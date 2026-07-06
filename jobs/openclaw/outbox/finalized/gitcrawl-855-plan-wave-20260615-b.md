---
repo: openclaw/openclaw
cluster_id: gitcrawl-855-plan-wave-20260615-b
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
  - "#73836"
candidates:
  - "#73836"
  - "#79681"
cluster_refs:
  - "#73836"
  - "#79681"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #73836 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 855 on 2026-06-15."
---

# Gitcrawl Cluster 855

Generated from local gitcrawl run cluster 855 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI/Gateway responsiveness regression during active runs: UI reconnect stalls, Telegram typing gaps, heartbeat poll noise, and media mirror UX issues

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #73836, currently open in local store
- latest member update: 2026-06-14T04:46:06.593607Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #73836 [Bug]: Control UI/Gateway responsiveness regression during active runs: UI reconnect stalls, Telegram typing gaps, heartbeat poll noise, and media mirror UX issues
- #79681 Telegram typing indicator no longer stays visible during active agent work
