---
repo: openclaw/openclaw
cluster_id: gitcrawl-70-bulk-plan-20260615-a
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
  - "#90786"
candidates:
  - "#90786"
  - "#90787"
  - "#90801"
  - "#91183"
  - "#91310"
  - "#91444"
  - "#92808"
cluster_refs:
  - "#90786"
  - "#90787"
  - "#90801"
  - "#91183"
  - "#91310"
  - "#91444"
  - "#92808"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#91183"
canonical_hint: "gitcrawl representative #90786 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 70 on 2026-06-15. Security-signal refs #91183 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 70

Generated from local gitcrawl run cluster 70 for `openclaw/openclaw`.

Display title:

> [Bug]: memory status --index and --deep fail with "Unknown memory embedding provider: google" on 2026.6.1

Cluster shape from gitcrawl:

- total members: 7
- issues: 5
- pull requests: 2
- open candidates in local store: 7
- security-signal refs requiring route_security: #91183
- representative: #90786, currently open in local store
- latest member update: 2026-06-14T04:46:05.287897Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90786 [Bug]: memory status --index and --deep fail with "Unknown memory embedding provider: google" on 2026.6.1
- #90787 [Bug]: memorySearch provider silently resets to "openai" after upgrade to 2026.6.1, causing permanent Dirty index and vector search outage
- #90801 [Bug]: memory status shows inconsistent Dirty state, watcher stops auto-indexing, and --deep required to confirm health on 2026.6.1
- #91183 [security-signal] [Bug]: memorySearch index metadata lost after upgrade to 2026.6.5-beta.2, vector search paused despite 2272 cache entries
- #91310 fix(memory): resolve embedding provider by authProviderId fallback
- #91444 fix(google): register 'google' alias for memory embedding provider
- #92808 [Bug]: Title: Local embedding provider breaks on upgrade (two consecutive releases) — no migration path, misleading error
