---
repo: openclaw/openclaw
cluster_id: gitcrawl-838-plan-wave-20260615-b
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
  - "#75539"
candidates:
  - "#75539"
  - "#75574"
cluster_refs:
  - "#75539"
  - "#75574"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #75539 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 838 on 2026-06-15."
---

# Gitcrawl Cluster 838

Generated from local gitcrawl run cluster 838 for `openclaw/openclaw`.

Display title:

> Telegram/QQBot plugins fail to connect on servers without global IPv6 (undici IPv6-first issue)

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #75539, currently open in local store
- latest member update: 2026-06-14T04:46:06.504376Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #75539 Telegram/QQBot plugins fail to connect on servers without global IPv6 (undici IPv6-first issue)
- #75574 [Bug]: Telegram network config (dnsResultOrder, autoSelectFamily) not applied to grammy/undici — requests timeout on IPv6-only resolve
