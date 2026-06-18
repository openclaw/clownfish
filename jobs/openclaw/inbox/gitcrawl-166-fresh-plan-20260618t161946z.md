---
repo: openclaw/openclaw
cluster_id: gitcrawl-166-fresh-plan-20260618t161946z
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
  - "#85268"
cluster_refs:
  - "#85268"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#74378"
  - "#74425"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #74378 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 166 on 2026-06-18. Existing-overlap refs #74378, #74425 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 166

Generated from local gitcrawl run cluster 166 for `openclaw/openclaw`.

Display title:

> [Bug]: OpenClaw CLI commands remain alive as node.exe processes after execution on Windows

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #74378, #74425
- representative: #74378, currently open in local store
- latest member update: 2026-06-18T16:17:08.147749Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #85268 [Bug]:  [Windows] exec spawn: all commands hang with no output (stdio pipe deadlock)

Existing-overlap context refs:

- #74378 [Bug]: OpenClaw CLI commands remain alive as node.exe processes after execution on Windows
- #74425 fix: ensure CLI processes exit after command completion on Windows
