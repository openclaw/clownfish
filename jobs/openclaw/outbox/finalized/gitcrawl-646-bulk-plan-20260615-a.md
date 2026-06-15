---
repo: openclaw/openclaw
cluster_id: gitcrawl-646-bulk-plan-20260615-a
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
  - "#89709"
candidates:
  - "#89709"
  - "#89745"
cluster_refs:
  - "#89709"
  - "#89745"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89745"
canonical_hint: "gitcrawl representative #89709 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 646 on 2026-06-15. Security-signal refs #89745 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 646

Generated from local gitcrawl run cluster 646 for `openclaw/openclaw`.

Display title:

> [Bug]: Dashboard "今日模型调用" shows historical cumulative data instead of daily usage after v2026.5.28 upgrade

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- security-signal refs requiring route_security: #89745
- representative: #89709, currently open in local store
- latest member update: 2026-06-14T04:46:05.679097Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89709 [Bug]: Dashboard "今日模型调用" shows historical cumulative data instead of daily usage after v2026.5.28 upgrade
- #89745 [security-signal] fix(usage): exclude untimestamped records from daily ranges
