---
repo: openclaw/openclaw
cluster_id: gitcrawl-1188-fresh-plan-20260618t161946z
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
  - "#44905"
candidates:
  - "#44905"
cluster_refs:
  - "#44905"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#87315"
  - "#88341"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #44905 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1188 on 2026-06-18. Existing-overlap refs #87315, #88341 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1188

Generated from local gitcrawl run cluster 1188 for `openclaw/openclaw`.

Display title:

> Discord leaks internal tool-call traces (NO_REPLY, commentary, to=functions) to channel

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #87315, #88341
- representative: #44905, currently open in local store
- latest member update: 2026-06-18T16:17:08.03416Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44905 Discord leaks internal tool-call traces (NO_REPLY, commentary, to=functions) to channel

Existing-overlap context refs:

- #87315 WhatsApp delivery leaks internal tool-trace lines (🛠️/🩹) that Discord strips
- #88341 Discord outbound leaks 🛠️ tool-progress lines when agent is in Barnacling state (stripper bypassed)
