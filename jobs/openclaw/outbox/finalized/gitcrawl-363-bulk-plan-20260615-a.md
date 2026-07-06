---
repo: openclaw/openclaw
cluster_id: gitcrawl-363-bulk-plan-20260615-a
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
  - "#92814"
cluster_refs:
  - "#92814"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#42837"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #42837 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 363 on 2026-06-15. Existing-overlap refs #42837 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 363

Generated from local gitcrawl run cluster 363 for `openclaw/openclaw`.

Display title:

> [Bug]: Feishu dynamicAgentCreation feature not working

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #42837
- representative: #42837, currently open in local store
- latest member update: 2026-06-14T04:46:03.740376Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92814 fix(feishu): re-resolve route when dynamic agent binding already exists in runtime config (fixes #42837)

Existing-overlap context refs:

- #42837 [Bug]: Feishu dynamicAgentCreation feature not working
