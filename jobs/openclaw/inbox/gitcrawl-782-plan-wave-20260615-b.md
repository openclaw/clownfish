---
repo: openclaw/openclaw
cluster_id: gitcrawl-782-plan-wave-20260615-b
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
  - "#87753"
candidates:
  - "#87753"
  - "#90822"
cluster_refs:
  - "#87753"
  - "#90822"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #87753 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 782 on 2026-06-15."
---

# Gitcrawl Cluster 782

Generated from local gitcrawl run cluster 782 for `openclaw/openclaw`.

Display title:

> [Bug]: Discord channel messages not working, but DMs work fine

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #87753, currently open in local store
- latest member update: 2026-06-14T04:46:06.226574Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87753 [Bug]: Discord channel messages not working, but DMs work fine
- #90822 [Bug]: Discord bot not delivering responses to channel
