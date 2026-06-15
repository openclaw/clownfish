---
repo: openclaw/openclaw
cluster_id: gitcrawl-273-plan-wave-20260615-a
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
  - "#80804"
candidates:
  - "#79364"
  - "#80804"
  - "#85006"
cluster_refs:
  - "#79364"
  - "#80804"
  - "#85006"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #80804 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 273 on 2026-06-15."
---

# Gitcrawl Cluster 273

Generated from local gitcrawl run cluster 273 for `openclaw/openclaw`.

Display title:

> [Bug] Telegram sendMessage fails with "chat not found" for supergroup forum topic despite admin permissions and working direct API

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #80804, currently open in local store
- latest member update: 2026-06-14T04:46:07.206881Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #79364 Cron announce delivery silently fails for Telegram DM targets (v2026.5.4 regression)
- #80804 [Bug] Telegram sendMessage fails with "chat not found" for supergroup forum topic despite admin permissions and working direct API
- #85006 [Bug]: Telegram Plugin has hard limit of 20 topics per group - "message thread not found" errors
