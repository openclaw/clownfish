---
repo: openclaw/openclaw
cluster_id: gitcrawl-247-bulk-plan-20260615-a
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
  - "#90941"
candidates:
  - "#90941"
  - "#90942"
  - "#90951"
cluster_refs:
  - "#90941"
  - "#90942"
  - "#90951"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90942"
canonical_hint: "gitcrawl representative #90941 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 247 on 2026-06-15. Security-signal refs #90942 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 247

Generated from local gitcrawl run cluster 247 for `openclaw/openclaw`.

Display title:

> doctor: sandbox setup script not found when launched via a symlinked bin

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- security-signal refs requiring route_security: #90942
- representative: #90941, currently open in local store
- latest member update: 2026-06-14T04:46:05.202586Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90941 doctor: sandbox setup script not found when launched via a symlinked bin
- #90942 [security-signal] fix(doctor): follow symlinked launcher when locating sandbox setup scripts
- #90951 doctor: sandbox image auto-build unavailable for npm-package installs (setup scripts not shipped)
