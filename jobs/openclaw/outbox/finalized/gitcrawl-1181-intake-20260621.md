---
repo: openclaw/openclaw
cluster_id: gitcrawl-1181-intake-20260621
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
  - "#94360"
candidates:
  - "#94360"
cluster_refs:
  - "#94360"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94374"
  - "#94381"
  - "#94454"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #94360 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1181 on 2026-06-21. Existing-overlap refs #94374, #94381, #94454 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1181

Generated from local gitcrawl run cluster 1181 for `openclaw/openclaw`.

Display title:

> [Bug]: Feishu - exec stderr output sent as user-visible reply, covers actual agent response

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 1
- excluded existing-overlap refs: #94374, #94381, #94454
- representative: #94360, currently open in local store
- latest member update: 2026-06-18T11:25:19.633972Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94360 [Bug]: Feishu - exec stderr output sent as user-visible reply, covers actual agent response

Existing-overlap context refs:

- #94374 [security-signal] fix: suppress exec stderr warnings from covering channel replies (#94360)
- #94381 #94360: Feishu - exec stderr output sent as user-visible reply
- #94454 fix: separate exec stdout from stderr for user-facing output (#94360)
