---
repo: openclaw/openclaw
cluster_id: gitcrawl-163-bulk-plan-20260615-a
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
  - "#73925"
  - "#73987"
cluster_refs:
  - "#73925"
  - "#73987"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#41545"
  - "#73923"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#73925"
canonical_hint: "gitcrawl representative #73923 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 163 on 2026-06-15. Security-signal refs #73925 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #41545, #73923 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 163

Generated from local gitcrawl run cluster 163 for `openclaw/openclaw`.

Display title:

> fix(ui): preserve gateway token during safe websocket url edits

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 2
- excluded existing-overlap refs: #41545, #73923
- security-signal refs requiring route_security: #73925
- representative: #73923, currently open in local store
- latest member update: 2026-06-14T04:46:06.560551Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #73925 [security-signal] fix(gateway): bound websocket auth after valid connect
- #73987 fix(control-ui): share gateway token scope across loopback hosts

Existing-overlap context refs:

- #41545 [Bug]: Editing WebSocket URL clears Gateway Token in Overview
- #73923 fix(ui): preserve gateway token during safe websocket url edits
