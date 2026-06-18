---
repo: openclaw/openclaw
cluster_id: gitcrawl-352-fresh-plan-20260618t161946z
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
  - "#45469"
candidates:
  - "#45469"
cluster_refs:
  - "#45469"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#77961"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #45469 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 352 on 2026-06-18. Existing-overlap refs #77961 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 352

Generated from local gitcrawl run cluster 352 for `openclaw/openclaw`.

Display title:

> [Bug P2] scheduleReconnect() has no max retry limit — infinite reconnect loop

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #77961
- representative: #45469, currently open in local store
- latest member update: 2026-06-18T16:17:07.521581Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45469 [Bug P2] scheduleReconnect() has no max retry limit — infinite reconnect loop

Existing-overlap context refs:

- #77961 fix(gateway): add max reconnect limit with opt-in maxReconnectAttempts
