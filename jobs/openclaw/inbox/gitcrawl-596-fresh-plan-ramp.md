---
repo: openclaw/openclaw
cluster_id: gitcrawl-596-fresh-plan-ramp
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
  - "#71452"
candidates:
  - "#71452"
cluster_refs:
  - "#71452"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#79593"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #71452 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 596 on 2026-06-17. Existing-overlap refs #79593 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 596

Generated from local gitcrawl run cluster 596 for `openclaw/openclaw`.

Display title:

> feat(message): list chat / list messages should support pagination instead of hardcoded 25 limit

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #79593
- representative: #71452, currently open in local store
- latest member update: 2026-06-15T19:04:12.423634Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #71452 feat(message): list chat / list messages should support pagination instead of hardcoded 25 limit

Existing-overlap context refs:

- #79593 [security-signal] fix(message-format): honor caller --limit for read, pins and search
