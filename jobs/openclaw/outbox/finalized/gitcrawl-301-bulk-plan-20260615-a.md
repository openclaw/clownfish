---
repo: openclaw/openclaw
cluster_id: gitcrawl-301-bulk-plan-20260615-a
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
  - "#81305"
candidates:
  - "#79155"
  - "#81305"
  - "#84584"
cluster_refs:
  - "#79155"
  - "#81305"
  - "#84584"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#81305"
  - "#84584"
canonical_hint: "gitcrawl representative #81305 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 301 on 2026-06-15. Security-signal refs #81305, #84584 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 301

Generated from local gitcrawl run cluster 301 for `openclaw/openclaw`.

Display title:

> fix(commands): preserve multiline slash skill args

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #81305, #84584
- representative: #81305, currently open in local store
- latest member update: 2026-06-14T04:46:07.254581Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #79155 Regression: multiline slash skill arguments are truncated after first newline
- #81305 [security-signal] fix(commands): preserve multiline slash skill args
- #84584 [security-signal] fix: enforce slash command boundaries
