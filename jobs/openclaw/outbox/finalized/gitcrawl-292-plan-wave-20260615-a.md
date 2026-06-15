---
repo: openclaw/openclaw
cluster_id: gitcrawl-292-plan-wave-20260615-a
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
  - "#85537"
candidates:
  - "#85537"
  - "#85711"
  - "#88487"
cluster_refs:
  - "#85537"
  - "#85711"
  - "#88487"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #85537 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 292 on 2026-06-15."
---

# Gitcrawl Cluster 292

Generated from local gitcrawl run cluster 292 for `openclaw/openclaw`.

Display title:

> Build fails resolving protobufjs google/protobuf descriptor on WSL source checkout

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #85537, currently open in local store
- latest member update: 2026-06-14T04:46:06.720192Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #85537 Build fails resolving protobufjs google/protobuf descriptor on WSL source checkout
- #85711 docs: add WSL build troubleshooting to CONTRIBUTING.md
- #88487 fix(build): externalize protobufjs from root bundle
