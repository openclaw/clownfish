---
repo: openclaw/openclaw
cluster_id: gitcrawl-98-bulk-plan-20260615-a
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
  - "#92207"
candidates:
  - "#92207"
  - "#92245"
  - "#92378"
  - "#92430"
  - "#92759"
cluster_refs:
  - "#92207"
  - "#92245"
  - "#92378"
  - "#92430"
  - "#92759"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#92430"
canonical_hint: "gitcrawl representative #92207 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 98 on 2026-06-15. Security-signal refs #92430 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 98

Generated from local gitcrawl run cluster 98 for `openclaw/openclaw`.

Display title:

> fix(memory-wiki): guard against missing agentIds

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 5
- security-signal refs requiring route_security: #92430
- representative: #92207, currently open in local store
- latest member update: 2026-06-14T04:46:04.352881Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92207 fix(memory-wiki): guard against missing agentIds
- #92245 fix(memory-wiki): guard against missing agentIds in public artifact clone and sort (fixes #92207)
- #92378 fix(plugins): guard against missing agentIds in memory-wiki public artifacts (#92207)
- #92430 [security-signal] fix(memory-wiki): guard against missing agentIds in cloneMemoryPublicArtifact
- #92759 fix(memory): guard against missing agentIds in wiki artifact clone and sort
