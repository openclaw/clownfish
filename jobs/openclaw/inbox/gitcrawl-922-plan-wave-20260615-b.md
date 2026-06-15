---
repo: openclaw/openclaw
cluster_id: gitcrawl-922-plan-wave-20260615-b
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
  - "#86195"
candidates:
  - "#86195"
  - "#86389"
cluster_refs:
  - "#86195"
  - "#86389"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #86195 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 922 on 2026-06-15."
---

# Gitcrawl Cluster 922

Generated from local gitcrawl run cluster 922 for `openclaw/openclaw`.

Display title:

> [Telegram] nativeToolProgress/sendMessageDraft blocks user input on Android; document interactive-control tradeoff

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #86195, currently open in local store
- latest member update: 2026-06-14T04:46:07.009431Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #86195 [Telegram] nativeToolProgress/sendMessageDraft blocks user input on Android; document interactive-control tradeoff
- #86389 docs(telegram): note native progress draft control tradeoff
