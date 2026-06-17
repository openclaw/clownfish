---
repo: openclaw/openclaw
cluster_id: gitcrawl-164-fresh-plan-ramp
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
cluster_refs:
  - "#87352"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#87504"
  - "#91266"
  - "#91325"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #87352 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 164 on 2026-06-17. Existing-overlap refs #87504, #91266, #91325 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 164

Generated from local gitcrawl run cluster 164 for `openclaw/openclaw`.

Display title:

> [Bug]: Skill Workshop autoCapture agent_end reviews time out and block hooks on routine sessions

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #87504, #91266, #91325
- representative: #87352, currently open in local store
- latest member update: 2026-06-15T19:04:11.856376Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87352 [Bug]: Skill Workshop autoCapture agent_end reviews time out and block hooks on routine sessions

Existing-overlap context refs:

- #87504 [security-signal] fix(skill-workshop): align agent_end hook timeout with max reviewer timeout
- #91266 [Bug]: Skill Workshop agent-tool apply times out because approval wait exceeds tool watchdog
- #91325 fix(codex): extend skill_workshop dynamic-tool timeout above approval ceiling
