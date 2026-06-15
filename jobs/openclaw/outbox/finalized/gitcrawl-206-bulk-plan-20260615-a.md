---
repo: openclaw/openclaw
cluster_id: gitcrawl-206-bulk-plan-20260615-a
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
  - "#66705"
candidates:
  - "#66705"
  - "#87880"
cluster_refs:
  - "#66705"
  - "#87880"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#73349"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #66705 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 206 on 2026-06-15. Existing-overlap refs #73349 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 206

Generated from local gitcrawl run cluster 206 for `openclaw/openclaw`.

Display title:

> Expose OPENCLAW_SESSION_KEY (and OPENCLAW_AGENT_ID) as env vars in exec child processes

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #73349
- representative: #66705, currently open in local store
- latest member update: 2026-06-14T04:46:06.774543Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #66705 Expose OPENCLAW_SESSION_KEY (and OPENCLAW_AGENT_ID) as env vars in exec child processes
- #87880 [Feature]:Automatically inject session context into exec tool subprocess environment

Existing-overlap context refs:

- #73349 [security-signal] feat(exec): inject OPENCLAW_SESSION_KEY and OPENCLAW_AGENT_ID env vars for child processes
