---
repo: openclaw/openclaw
cluster_id: gitcrawl-742-plan-wave-20260615-b
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
  - "#80507"
candidates:
  - "#80507"
  - "#80604"
cluster_refs:
  - "#80507"
  - "#80604"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #80507 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 742 on 2026-06-15."
---

# Gitcrawl Cluster 742

Generated from local gitcrawl run cluster 742 for `openclaw/openclaw`.

Display title:

> [Bug]: `openclaw message send --dry-run` prints `✅ Sent via <channel>. Message ID: unknown` — pretty-text formatter never sees `handledBy: "dry-run"` and falls through to the success message

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #80507, currently open in local store
- latest member update: 2026-06-14T04:46:06.909108Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #80507 [Bug]: `openclaw message send --dry-run` prints `✅ Sent via <channel>. Message ID: unknown` — pretty-text formatter never sees `handledBy: "dry-run"` and falls through to the success message
- #80604 fix(message): show dry-run output for send/poll
