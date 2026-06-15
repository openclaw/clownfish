---
repo: openclaw/openclaw
cluster_id: gitcrawl-119-bulk-plan-20260615-a
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
  - "#85714"
candidates:
  - "#76980"
  - "#79472"
  - "#79631"
  - "#85714"
  - "#88992"
cluster_refs:
  - "#76980"
  - "#79472"
  - "#79631"
  - "#85714"
  - "#88992"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#76980"
  - "#88992"
canonical_hint: "gitcrawl representative #85714 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 119 on 2026-06-15. Security-signal refs #76980, #88992 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 119

Generated from local gitcrawl run cluster 119 for `openclaw/openclaw`.

Display title:

> Agent's final agent_message stranded when LLM forgets to call configured delivery tool (no fallback delivery from task_complete)

Cluster shape from gitcrawl:

- total members: 5
- issues: 3
- pull requests: 2
- open candidates in local store: 5
- security-signal refs requiring route_security: #76980, #88992
- representative: #85714, currently open in local store
- latest member update: 2026-06-14T04:46:06.803726Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #76980 [security-signal] [Bug]: Nextcloud Talk channel agent silently skips `message` tool, marks reply 'completed' without posting
- #79472 Bug: Tool-only turns produce no message delivery to Telegram (continuation of #22834)
- #79631 fix: inject completion acknowledgment when tool-only turns produce no text
- #85714 Agent's final agent_message stranded when LLM forgets to call configured delivery tool (no fallback delivery from task_complete)
- #88992 [security-signal] fix: recover stranded replies in message_tool_only mode (#85714)
