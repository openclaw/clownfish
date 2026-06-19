---
repo: openclaw/openclaw
cluster_id: gitcrawl-1150-intake-20260619
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
canonical: []
candidates:
  - "#79252"
cluster_refs:
  - "#79252"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#77318"
  - "#78410"
  - "#93923"
  - "#94606"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #93923 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1150 on 2026-06-19. Existing-overlap refs #77318, #78410, #93923, #94606 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1150

Generated from local gitcrawl run cluster 1150 for `openclaw/openclaw`.

Display title:

> fix: make global tool loop breaker session-wide

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 1
- excluded existing-overlap refs: #77318, #78410, #93923, #94606
- representative: #93923, currently open in local store
- latest member update: 2026-06-18T16:17:08.403171Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #79252 globalCircuitBreakerThreshold is per-tool-type, not session-global — allows cross-tool loop evasion

Existing-overlap context refs:

- #77318 fix(loop-detection): block run-scoped consecutive cross-tool error cascades
- #78410 fix(agents): normalize null tool params for loop detection
- #93923 fix: make global tool loop breaker session-wide
- #94606 [security-signal] fix(agents): make global loop breaker session-wide
