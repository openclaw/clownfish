---
repo: openclaw/openclaw
cluster_id: gitcrawl-413-plan-wave-20260615-a
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
  - "#66443"
candidates:
  - "#66443"
  - "#85937"
cluster_refs:
  - "#66443"
  - "#85937"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #66443 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 413 on 2026-06-15."
---

# Gitcrawl Cluster 413

Generated from local gitcrawl run cluster 413 for `openclaw/openclaw`.

Display title:

> Overflow recovery duplicates role=user messages in session JSONL, amplifying transcript growth

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #66443, currently open in local store
- latest member update: 2026-06-14T04:46:07.071727Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #66443 Overflow recovery duplicates role=user messages in session JSONL, amplifying transcript growth
- #85937 Duplicate assistant.text persisted twice per turn on Gemini native streaming (v5.22) — masked by outbound dedupe, visible in session JSONL
