---
repo: openclaw/openclaw
cluster_id: gitcrawl-253-bulk-plan-20260615-a
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
  - "#90603"
candidates:
  - "#51762"
  - "#90573"
  - "#90603"
cluster_refs:
  - "#51762"
  - "#90573"
  - "#90603"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90573"
  - "#90603"
canonical_hint: "gitcrawl representative #90603 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 253 on 2026-06-15. Security-signal refs #90573, #90603 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 253

Generated from local gitcrawl run cluster 253 for `openclaw/openclaw`.

Display title:

> fix(secrets): use configured default agent ID in auth/model path discovery (#90573)

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #90573, #90603
- representative: #90603, currently open in local store
- latest member update: 2026-06-14T04:46:05.366322Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51762 feat: configurable default agent ID (escape the 'main' prison) 🦞
- #90573 [security-signal] Bug: Remaining hardcoded DEFAULT_AGENT_ID="main" assumptions after PR #30654
- #90603 [security-signal] fix(secrets): use configured default agent ID in auth/model path discovery (#90573)
