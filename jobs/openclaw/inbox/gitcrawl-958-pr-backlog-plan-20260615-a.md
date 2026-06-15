---
repo: openclaw/openclaw
cluster_id: gitcrawl-958-pr-backlog-plan-20260615-a
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
  - "#66983"
candidates:
  - "#66983"
  - "#68497"
cluster_refs:
  - "#66983"
  - "#68497"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#66983"
canonical_hint: "gitcrawl representative #66983 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 958 on 2026-06-15. Security-signal refs #66983 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 958

Generated from local gitcrawl run cluster 958 for `openclaw/openclaw`.

Display title:

> [Feature]: web canvas node support — allow browser tabs to register as A2UI canvas surfaces

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- security-signal refs requiring route_security: #66983
- representative: #66983, currently open in local store
- latest member update: 2026-06-14T04:46:07.278109Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #66983 [security-signal] [Feature]: web canvas node support — allow browser tabs to register as A2UI canvas surfaces
- #68497 [Feature]: Expose canvas A2UI action bridge to web browsers (WebSocket fallback for window.openclawSendUserAction)
