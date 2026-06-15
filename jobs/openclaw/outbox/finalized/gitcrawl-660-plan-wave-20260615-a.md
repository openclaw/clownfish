---
repo: openclaw/openclaw
cluster_id: gitcrawl-660-plan-wave-20260615-a
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
  - "#90288"
candidates:
  - "#90288"
  - "#92273"
cluster_refs:
  - "#90288"
  - "#92273"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #90288 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 660 on 2026-06-15."
---

# Gitcrawl Cluster 660

Generated from local gitcrawl run cluster 660 for `openclaw/openclaw`.

Display title:

> [Bug]: Non-Anthropic models output tool calls as plain text '[tool: exec]' instead of tool_use blocks

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #90288, currently open in local store
- latest member update: 2026-06-14T04:46:05.466832Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90288 [Bug]: Non-Anthropic models output tool calls as plain text '[tool: exec]' instead of tool_use blocks
- #92273 Tool Search (mode: "tools") silently breaks the pre-compaction memory flush: model calls tool_call with a guessed name, gets an unrecoverable error, durable memories are lost
