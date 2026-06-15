---
repo: openclaw/openclaw
cluster_id: gitcrawl-290-bulk-plan-20260615-a
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
  - "#77344"
candidates:
  - "#75754"
  - "#77344"
  - "#77574"
cluster_refs:
  - "#75754"
  - "#77344"
  - "#77574"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#75754"
canonical_hint: "gitcrawl representative #77344 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 290 on 2026-06-15. Security-signal refs #75754 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 290

Generated from local gitcrawl run cluster 290 for `openclaw/openclaw`.

Display title:

> [Bug]: Clawdock dashboard ignores Docker published gateway port

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- security-signal refs requiring route_security: #75754
- representative: #77344, currently open in local store
- latest member update: 2026-06-14T04:46:06.40895Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #75754 [security-signal] fix(clawdock): open dashboard via clawdock-dashboard on published port instead of hardcoded default port
- #77344 [Bug]: Clawdock dashboard ignores Docker published gateway port
- #77574 [Bug]: clawdock-dashboard switches the running gateway image
