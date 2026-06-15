---
repo: openclaw/openclaw
cluster_id: gitcrawl-793-plan-wave-20260615-b
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
  - "#78273"
candidates:
  - "#78273"
  - "#85177"
cluster_refs:
  - "#78273"
  - "#85177"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #78273 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 793 on 2026-06-15."
---

# Gitcrawl Cluster 793

Generated from local gitcrawl run cluster 793 for `openclaw/openclaw`.

Display title:

> [Bug]: OpenClaw session transcript stops flushing mid-session on claude-cli runtime (Claude CLI side keeps updating)

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #78273, currently open in local store
- latest member update: 2026-06-14T04:46:07.181887Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #78273 [Bug]: OpenClaw session transcript stops flushing mid-session on claude-cli runtime (Claude CLI side keeps updating)
- #85177 [Bug]: claude-cli sessions lose all conversation history after auth-profile / auth-epoch invalidation (reseed fallback silently drops the transcript)
