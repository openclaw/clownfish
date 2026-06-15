---
repo: openclaw/openclaw
cluster_id: gitcrawl-87-bulk-plan-20260615-a
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
  - "#83391"
candidates:
  - "#71865"
  - "#82124"
  - "#83391"
  - "#88382"
cluster_refs:
  - "#71865"
  - "#82124"
  - "#83391"
  - "#88382"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#16351"
  - "#50274"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #83391 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 87 on 2026-06-15. Existing-overlap refs #16351, #50274 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 87

Generated from local gitcrawl run cluster 87 for `openclaw/openclaw`.

Display title:

> fix(cli): harden config and command validation

Cluster shape from gitcrawl:

- total members: 6
- issues: 4
- pull requests: 2
- open candidates in local store: 4
- excluded existing-overlap refs: #16351, #50274
- representative: #83391, currently open in local store
- latest member update: 2026-06-14T04:46:07.481071Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #71865 Auth login blocked by size-drop guard when openclaw.json was created by PowerShell (verbose/BOM format)
- #82124 [Feature]: allow explicit config unset to bypass size-drop guard for intentional large deletes
- #83391 fix(cli): harden config and command validation
- #88382 fix(config): compare size-drop guard against canonical config

Existing-overlap context refs:

- #16351 [security-signal] [Feature]: Improve `openclaw config` to avoid secrets and invalid files
- #50274 Follow-up: optimize fallback order + add model-input config guardrail
