---
repo: openclaw/openclaw
cluster_id: gitcrawl-879-plan-wave-20260615-b
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
  - "#87609"
candidates:
  - "#87609"
  - "#92186"
cluster_refs:
  - "#87609"
  - "#92186"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #87609 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 879 on 2026-06-15."
---

# Gitcrawl Cluster 879

Generated from local gitcrawl run cluster 879 for `openclaw/openclaw`.

Display title:

> [Bug]: WhatsApp group: subsequent @mentions silently dropped after first (regression 2026.5.26)

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #87609, currently open in local store
- latest member update: 2026-06-14T04:46:06.804648Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87609 [Bug]: WhatsApp group: subsequent @mentions silently dropped after first (regression 2026.5.26)
- #92186 Foreground reply fence (automatic mode) cancels delivery of completed replies to earlier concurrent group messages — reply shown in dashboard, never delivered to WhatsApp
