---
repo: openclaw/openclaw
cluster_id: gitcrawl-312-fresh-plan-ramp
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
canonical: []
candidates:
  - "#84850"
cluster_refs:
  - "#84850"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#84821"
  - "#84823"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #84821 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 312 on 2026-06-17. Existing-overlap refs #84821, #84823 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 312

Generated from local gitcrawl run cluster 312 for `openclaw/openclaw`.

Display title:

> [Bug]: tool and agent websocket events amplify during live tool output

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #84821, #84823
- representative: #84821, currently open in local store
- latest member update: 2026-06-15T19:04:11.982569Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #84850 [Bug]: Gateway pegs a CPU core during agent tool run with no read I/O

Existing-overlap context refs:

- #84821 [Bug]: tool and agent websocket events amplify during live tool output
- #84823 [security-signal] fix(gateway): dedupe live tool event mirrors
