---
repo: openclaw/openclaw
cluster_id: gitcrawl-845-bulk-plan-20260615-a
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
  - "#74419"
candidates:
  - "#74419"
  - "#74444"
cluster_refs:
  - "#74419"
  - "#74444"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#74444"
canonical_hint: "gitcrawl representative #74419 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 845 on 2026-06-15. Security-signal refs #74444 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 845

Generated from local gitcrawl run cluster 845 for `openclaw/openclaw`.

Display title:

> feat: support Jina Embeddings v5 task parameter for task-specific adapters

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- security-signal refs requiring route_security: #74444
- representative: #74419, currently open in local store
- latest member update: 2026-06-14T04:46:06.560988Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74419 feat: support Jina Embeddings v5 task parameter for task-specific adapters
- #74444 [security-signal] feat(openai): add queryTask/documentTask config for Jina v5 task-specific embeddings
