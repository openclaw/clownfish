---
repo: openclaw/openclaw
cluster_id: gitcrawl-288-bulk-plan-20260615-a
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
  - "#77849"
candidates:
  - "#77849"
  - "#78010"
  - "#86971"
cluster_refs:
  - "#77849"
  - "#78010"
  - "#86971"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#86971"
canonical_hint: "gitcrawl representative #77849 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 288 on 2026-06-15. Security-signal refs #86971 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 288

Generated from local gitcrawl run cluster 288 for `openclaw/openclaw`.

Display title:

> [Bug]: No restore step in openclaw backup docs

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #86971
- representative: #77849, currently open in local store
- latest member update: 2026-06-14T04:46:06.691077Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77849 [Bug]: No restore step in openclaw backup docs
- #78010 docs(backup): document manual restore steps
- #86971 [security-signal] docs(backup): describe manual restore flow
