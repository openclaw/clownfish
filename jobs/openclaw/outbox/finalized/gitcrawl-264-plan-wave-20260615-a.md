---
repo: openclaw/openclaw
cluster_id: gitcrawl-264-plan-wave-20260615-a
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
  - "#89899"
candidates:
  - "#89425"
  - "#89899"
  - "#92355"
cluster_refs:
  - "#89425"
  - "#89899"
  - "#92355"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #89899 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 264 on 2026-06-15."
---

# Gitcrawl Cluster 264

Generated from local gitcrawl run cluster 264 for `openclaw/openclaw`.

Display title:

> fix #89425: [Bug]: Missing extensions/speech-core/ in npm tarball (v2026.5.28) — "Unable to resolve bundled plugin public surface speech-core/runtime-api.js"

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #89899, currently open in local store
- latest member update: 2026-06-14T04:46:05.814144Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89425 [Bug]: Missing extensions/speech-core/ in npm tarball (v2026.5.28) — "Unable to resolve bundled plugin public surface speech-core/runtime-api.js"
- #89899 fix #89425: [Bug]: Missing extensions/speech-core/ in npm tarball (v2026.5.28) — "Unable to resolve bundled plugin public surface speech-core/runtime-api.js"
- #92355 #92240: fix(plugins): resolve bundled public surfaces from package dist output
