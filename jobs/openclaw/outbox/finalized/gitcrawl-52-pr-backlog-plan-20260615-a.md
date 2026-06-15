---
repo: openclaw/openclaw
cluster_id: gitcrawl-52-pr-backlog-plan-20260615-a
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
  - "#11960"
candidates:
  - "#10142"
  - "#11960"
  - "#43454"
  - "#49019"
  - "#51572"
  - "#67433"
  - "#80674"
cluster_refs:
  - "#10142"
  - "#11960"
  - "#43454"
  - "#49019"
  - "#51572"
  - "#67433"
  - "#80674"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#61675"
  - "#71792"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#67433"
canonical_hint: "gitcrawl representative #11960 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 52 on 2026-06-15. Security-signal refs #67433 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #61675, #71792 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 52

Generated from local gitcrawl run cluster 52 for `openclaw/openclaw`.

Display title:

> Feature request: session:reset hook event for memory persistence on auto-resets

Cluster shape from gitcrawl:

- total members: 9
- issues: 6
- pull requests: 3
- open candidates in local store: 7
- excluded existing-overlap refs: #61675, #71792
- security-signal refs requiring route_security: #67433
- representative: #11960, currently open in local store
- latest member update: 2026-06-14T04:46:07.146497Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #10142 Feature: session:end internal hook event
- #11960 Feature request: session:reset hook event for memory persistence on auto-resets
- #43454 Feature Request: Gateway lifecycle hooks (onSubagentComplete, onToolCallThreshold, onTurnComplete)
- #49019 [Feature]: Add an optional result-return mode for /hooks/agent
- #51572 Feature: fire session-memory hook on session reset/prune, not just compaction
- #67433 [security-signal] feat(hooks): add waitForResult mode to POST /hooks/agent endpoint
- #80674 Feature: Expose polling lifecycle + session persistence hook events for plugins

Existing-overlap context refs:

- #61675 [security-signal] feat: fire session reset hooks for daily and idle resets
- #71792 fix(session): persist memory on auto daily/idle rollover
