---
repo: openclaw/openclaw
cluster_id: gitcrawl-164-bulk-plan-20260615-a
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
  - "#87352"
candidates:
  - "#87352"
  - "#87504"
  - "#91266"
  - "#91325"
cluster_refs:
  - "#87352"
  - "#87504"
  - "#91266"
  - "#91325"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#87504"
canonical_hint: "gitcrawl representative #87352 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 164 on 2026-06-15. Security-signal refs #87504 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 164

Generated from local gitcrawl run cluster 164 for `openclaw/openclaw`.

Display title:

> [Bug]: Skill Workshop autoCapture agent_end reviews time out and block hooks on routine sessions

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 4
- security-signal refs requiring route_security: #87504
- representative: #87352, currently open in local store
- latest member update: 2026-06-14T04:46:06.439412Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87352 [Bug]: Skill Workshop autoCapture agent_end reviews time out and block hooks on routine sessions
- #87504 [security-signal] fix(skill-workshop): align agent_end hook timeout with max reviewer timeout
- #91266 [Bug]: Skill Workshop agent-tool apply times out because approval wait exceeds tool watchdog
- #91325 fix(codex): extend skill_workshop dynamic-tool timeout above approval ceiling
