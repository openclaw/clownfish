---
repo: openclaw/openclaw
cluster_id: gitcrawl-993-plan-wave-20260615-b
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
  - "#82281"
candidates:
  - "#82281"
  - "#82379"
cluster_refs:
  - "#82281"
  - "#82379"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #82281 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 993 on 2026-06-15."
---

# Gitcrawl Cluster 993

Generated from local gitcrawl run cluster 993 for `openclaw/openclaw`.

Display title:

> Docs: enumerate workflow runtime injected env vars + clarify step-output access

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #82281, currently open in local store
- latest member update: 2026-06-14T04:46:07.467449Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #82281 Docs: enumerate workflow runtime injected env vars + clarify step-output access
- #82379 docs(lobster): enumerate injected runtime env vars and clarify step-output access
