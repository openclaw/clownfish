---
repo: openclaw/openclaw
cluster_id: gitcrawl-335-bulk-plan-20260615-a
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
  - "#77492"
candidates:
  - "#77492"
  - "#77979"
cluster_refs:
  - "#77492"
  - "#77979"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#77492"
canonical_hint: "gitcrawl representative #77492 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 335 on 2026-06-15. Security-signal refs #77492 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 335

Generated from local gitcrawl run cluster 335 for `openclaw/openclaw`.

Display title:

> security fix(gateway): defend pre-auth device-signature verify against CPU DoS

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- security-signal refs requiring route_security: #77492
- representative: #77492, currently open in local store
- latest member update: 2026-06-14T04:46:06.28069Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77492 [security-signal] security fix(gateway): defend pre-auth device-signature verify against CPU DoS
- #77979 Bug: pre-auth device-signature verify allows CPU-amplification DoS without rate limit
