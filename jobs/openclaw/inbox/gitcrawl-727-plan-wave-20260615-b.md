---
repo: openclaw/openclaw
cluster_id: gitcrawl-727-plan-wave-20260615-b
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
  - "#81991"
candidates:
  - "#81991"
  - "#82355"
cluster_refs:
  - "#81991"
  - "#82355"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #81991 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 727 on 2026-06-15."
---

# Gitcrawl Cluster 727

Generated from local gitcrawl run cluster 727 for `openclaw/openclaw`.

Display title:

> HTTP SSE (/v1/chat/completions) drops leading '<' from streamed content and closes connection before final chunk

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #81991, currently open in local store
- latest member update: 2026-06-14T04:46:07.11576Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81991 HTTP SSE (/v1/chat/completions) drops leading '<' from streamed content and closes connection before final chunk
- #82355 Fix streamed chat completions dropping leading less-than
