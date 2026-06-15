---
repo: openclaw/openclaw
cluster_id: gitcrawl-179-bulk-plan-20260615-a
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
  - "#83902"
candidates:
  - "#83902"
  - "#84438"
  - "#85710"
  - "#89897"
cluster_refs:
  - "#83902"
  - "#84438"
  - "#85710"
  - "#89897"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89897"
canonical_hint: "gitcrawl representative #83902 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 179 on 2026-06-15. Security-signal refs #89897 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 179

Generated from local gitcrawl run cluster 179 for `openclaw/openclaw`.

Display title:

> getCommandPathInternal uses hardcoded "--" instead of FLAG_TERMINATOR constant

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- security-signal refs requiring route_security: #89897
- representative: #83902, currently open in local store
- latest member update: 2026-06-14T04:46:07.354953Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #83902 getCommandPathInternal uses hardcoded "--" instead of FLAG_TERMINATOR constant
- #84438 fix(cli): use flag terminator constant
- #85710 fix: use FLAG_TERMINATOR constant in getCommandPathInternal
- #89897 [security-signal] fix(cli): replace hardcoded "--" with FLAG_TERMINATOR constant in getCommandPathInternal
