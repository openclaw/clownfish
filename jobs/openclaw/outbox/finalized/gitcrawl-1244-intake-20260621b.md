---
repo: openclaw/openclaw
cluster_id: gitcrawl-1244-intake-20260621b
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
  - "#41495"
candidates:
  - "#41495"
cluster_refs:
  - "#41495"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93101"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #41495 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1244 on 2026-06-21. Existing-overlap refs #93101 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1244

Generated from local gitcrawl run cluster 1244 for `openclaw/openclaw`.

Display title:

> Gemini models output inline buttons as raw JSON text instead of using tool format

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #93101
- representative: #41495, currently open in local store
- latest member update: 2026-06-19T02:13:00.566858Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41495 Gemini models output inline buttons as raw JSON text instead of using tool format

Existing-overlap context refs:

- #93101 fix(message-tool): parse inline [[...]] button JSON from model text output
