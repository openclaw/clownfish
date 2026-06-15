---
repo: openclaw/openclaw
cluster_id: gitcrawl-218-bulk-plan-20260615-a
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
  - "#88684"
candidates:
  - "#77736"
  - "#87347"
  - "#88684"
cluster_refs:
  - "#77736"
  - "#87347"
  - "#88684"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#77736"
canonical_hint: "gitcrawl representative #88684 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 218 on 2026-06-15. Security-signal refs #77736 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 218

Generated from local gitcrawl run cluster 218 for `openclaw/openclaw`.

Display title:

> Keep agent web_search on runtime provider resolution

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #77736
- representative: #88684, currently open in local store
- latest member update: 2026-06-14T04:46:06.219175Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77736 [security-signal] [codex] Fix explicit custom web_search provider routing
- #87347 [Bug]: Agent-side web_search resolves to "no provider available" while CLI infer web search and plugins inspect confirm Brave is loaded
- #88684 Keep agent web_search on runtime provider resolution
