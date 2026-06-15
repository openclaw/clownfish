---
repo: openclaw/openclaw
cluster_id: gitcrawl-266-plan-wave-20260615-a
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
  - "#89617"
candidates:
  - "#89617"
  - "#89618"
  - "#90401"
cluster_refs:
  - "#89617"
  - "#89618"
  - "#90401"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #89617 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 266 on 2026-06-15."
---

# Gitcrawl Cluster 266

Generated from local gitcrawl run cluster 266 for `openclaw/openclaw`.

Display title:

> Add Atomic Chat as a bundled local provider (OpenAI-compatible, 127.0.0.1:1337)

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #89617, currently open in local store
- latest member update: 2026-06-14T04:46:05.741348Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89617 Add Atomic Chat as a bundled local provider (OpenAI-compatible, 127.0.0.1:1337)
- #89618 feat(atomicchat): add Atomic Chat as a bundled local provider
- #90401 docs(local-models): add Atomic Chat as an OpenAI-compatible local server
