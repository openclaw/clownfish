---
repo: openclaw/openclaw
cluster_id: gitcrawl-345-pr-backlog-plan-20260615-a
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
  - "#75314"
cluster_refs:
  - "#75314"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#45501"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #45501 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 345 on 2026-06-15. Existing-overlap refs #45501 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 345

Generated from local gitcrawl run cluster 345 for `openclaw/openclaw`.

Display title:

> Feature: `session.resetPrompt` — configurable session startup message

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #45501
- representative: #45501, currently open in local store
- latest member update: 2026-06-14T04:46:06.509179Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #75314 WebChat fresh session shows only injected "New session started" bubble and skips actual startup greeting

Existing-overlap context refs:

- #45501 Feature: `session.resetPrompt` — configurable session startup message
