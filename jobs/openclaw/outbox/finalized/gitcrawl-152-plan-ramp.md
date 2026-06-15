---
repo: openclaw/openclaw
cluster_id: gitcrawl-152-plan-ramp
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
  - "#89816"
candidates:
  - "#89791"
  - "#89816"
  - "#90711"
  - "#90828"
cluster_refs:
  - "#89791"
  - "#89816"
  - "#90711"
  - "#90828"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #89816 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 152 on 2026-06-14."
---

# Gitcrawl Cluster 152

Generated from local gitcrawl run cluster 152 for `openclaw/openclaw`.

Display title:

> docs(gateway): add launchd supervisor loop troubleshooting

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 4
- representative: #89816, currently open in local store
- latest member update: 2026-06-14T04:46:05.657199Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89791 5.26 supervisor mode + dual-plist install: 30s EADDRINUSE loop + silent-fail unset order
- #89816 docs(gateway): add launchd supervisor loop troubleshooting
- #90711 [Bug] launchd plist StandardErrorPath hardcoded to /dev/null, hides all gateway stderr (5.28 regression)
- #90828 fix(mac-gateway): route launchd plist stderr to log file instead of /dev/null (#90711)
