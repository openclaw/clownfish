---
repo: openclaw/openclaw
cluster_id: gitcrawl-97-bulk-plan-20260615-a
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
  - "#77973"
candidates:
  - "#77973"
  - "#77976"
  - "#77986"
  - "#77987"
cluster_refs:
  - "#77973"
  - "#77976"
  - "#77986"
  - "#77987"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#68801"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #77973 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 97 on 2026-06-15. Existing-overlap refs #68801 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 97

Generated from local gitcrawl run cluster 97 for `openclaw/openclaw`.

Display title:

> fix(gateway): cap agentRunCache to prevent unbounded growth under run fan-out

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 4
- excluded existing-overlap refs: #68801
- representative: #77973, currently open in local store
- latest member update: 2026-06-14T04:46:06.341018Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77973 fix(gateway): cap agentRunCache to prevent unbounded growth under run fan-out
- #77976 Bug: agent-job agentRunCache grows unbounded under sustained run fan-out
- #77986 Bug: gateway auth rate limiter entries map has no hard cap under unique-IP flood
- #77987 fix(gateway): cap auth-rate-limit entries map under unique-IP flood

Existing-overlap context refs:

- #68801 [security-signal] Gateway: prune orphaned agentRunStarts entries
