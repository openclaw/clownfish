---
repo: openclaw/openclaw
cluster_id: gitcrawl-122-pr-backlog-plan-20260615-a
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
  - "#48785"
candidates:
  - "#48785"
  - "#59149"
cluster_refs:
  - "#48785"
  - "#59149"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#57447"
  - "#59170"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #48785 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 122 on 2026-06-15. Existing-overlap refs #57447, #59170 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 122

Generated from local gitcrawl run cluster 122 for `openclaw/openclaw`.

Display title:

> [Feature]: Granular session visibility — split tools.sessions.visibility into per-capability knobs

Cluster shape from gitcrawl:

- total members: 4
- issues: 3
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #57447, #59170
- representative: #48785, currently open in local store
- latest member update: 2026-06-14T04:46:04.726028Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48785 [Feature]: Granular session visibility — split tools.sessions.visibility into per-capability knobs
- #59149 Feature Request: Per-agent agentToAgent and session visibility scoping

Existing-overlap context refs:

- #57447 [security-signal] sessions_send blocked by visibility guard even when a2a policy allows cross-agent messaging
- #59170 [security-signal] feat: per-agent session visibility and agentToAgent scoping
