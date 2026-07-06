---
repo: openclaw/openclaw
cluster_id: gitcrawl-459-bulk-plan-20260615-a
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
  - "#83593"
cluster_refs:
  - "#83593"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#29387"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #29387 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 459 on 2026-06-15. Existing-overlap refs #29387 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 459

Generated from local gitcrawl run cluster 459 for `openclaw/openclaw`.

Display title:

> [Bug]: Bootstrap files in agentDir are silently ignored — only workspace directory files are injected into system prompt

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #29387
- representative: #29387, currently open in local store
- latest member update: 2026-06-14T04:46:07.058884Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #83593 [Bug]: Subagent spawn recreates root-level bootstrap markdown files in repository workspace

Existing-overlap context refs:

- #29387 [Bug]: Bootstrap files in agentDir are silently ignored — only workspace directory files are injected into system prompt
