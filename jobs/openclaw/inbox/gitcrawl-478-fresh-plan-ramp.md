---
repo: openclaw/openclaw
cluster_id: gitcrawl-478-fresh-plan-ramp
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
  - "#92224"
candidates:
  - "#92224"
cluster_refs:
  - "#92224"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#92363"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #92224 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 478 on 2026-06-17. Existing-overlap refs #92363 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 478

Generated from local gitcrawl run cluster 478 for `openclaw/openclaw`.

Display title:

> Bug: CLI shows available: false for local Ollama models that are running and working

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #92363
- representative: #92224, currently open in local store
- latest member update: 2026-06-15T19:04:12.765286Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92224 Bug: CLI shows available: false for local Ollama models that are running and working

Existing-overlap context refs:

- #92363 #92224: fix(models): report local models as available in CLI list output
