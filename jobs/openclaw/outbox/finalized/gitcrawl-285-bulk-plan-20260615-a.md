---
repo: openclaw/openclaw
cluster_id: gitcrawl-285-bulk-plan-20260615-a
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
  - "#78093"
candidates:
  - "#78093"
  - "#78113"
cluster_refs:
  - "#78093"
  - "#78113"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#71889"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#78113"
canonical_hint: "gitcrawl representative #78093 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 285 on 2026-06-15. Security-signal refs #78113 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #71889 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 285

Generated from local gitcrawl run cluster 285 for `openclaw/openclaw`.

Display title:

> [Bug]: agents add default workspace now nests bot inside main workspace, causing TUI routing ambiguity

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #71889
- security-signal refs requiring route_security: #78113
- representative: #78093, currently open in local store
- latest member update: 2026-06-14T04:46:06.300997Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #78093 [Bug]: agents add default workspace now nests bot inside main workspace, causing TUI routing ambiguity
- #78113 [security-signal] fix(agents): restore workspace-<id> sibling layout for non-default agents

Existing-overlap context refs:

- #71889 [security-signal] [Bug]: agents add wizard pre-fills nested workspace path (workspace/<id>) instead of documented peer-level (workspace-<id>)
