---
repo: openclaw/openclaw
cluster_id: gitcrawl-171-bulk-plan-20260615-a
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
  - "#79481"
candidates:
  - "#26859"
  - "#55612"
  - "#79481"
  - "#81830"
cluster_refs:
  - "#26859"
  - "#55612"
  - "#79481"
  - "#81830"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#55612"
  - "#79481"
  - "#81830"
canonical_hint: "gitcrawl representative #79481 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 171 on 2026-06-15. Security-signal refs #55612, #79481, #81830 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 171

Generated from local gitcrawl run cluster 171 for `openclaw/openclaw`.

Display title:

> Hemant/55612 security audit dm exposure

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 4
- security-signal refs requiring route_security: #55612, #79481, #81830
- representative: #79481, currently open in local store
- latest member update: 2026-06-14T04:46:07.523122Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #26859 security audit: two false positives for single-operator multi-agent setups
- #55612 [security-signal] `security audit` misses CRITICAL tool exposure warnings for `dmPolicy="open"` compared to `groupPolicy="open"`
- #79481 [security-signal] Hemant/55612 security audit dm exposure
- #81830 [security-signal] fix(security/audit): stop firing two false-positive WARNs on single-operator setups (#26859)
