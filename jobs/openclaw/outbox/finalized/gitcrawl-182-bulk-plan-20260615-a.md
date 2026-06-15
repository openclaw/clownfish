---
repo: openclaw/openclaw
cluster_id: gitcrawl-182-bulk-plan-20260615-a
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
  - "#89041"
candidates:
  - "#88330"
  - "#88841"
  - "#89041"
cluster_refs:
  - "#88330"
  - "#88841"
  - "#89041"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89041"
canonical_hint: "gitcrawl representative #89041 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 182 on 2026-06-15. Security-signal refs #89041 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 182

Generated from local gitcrawl run cluster 182 for `openclaw/openclaw`.

Display title:

> fix(discord): disable ws 8.21.0 receiver part limits for gateway sockets

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #89041
- representative: #89041, currently open in local store
- latest member update: 2026-06-14T04:46:06.224397Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #88330 ws 8.21.0 breaks Discord gateway WebSocket under Node 22
- #88841 fix(discord): reconnect after abnormal gateway close
- #89041 [security-signal] fix(discord): disable ws 8.21.0 receiver part limits for gateway sockets
