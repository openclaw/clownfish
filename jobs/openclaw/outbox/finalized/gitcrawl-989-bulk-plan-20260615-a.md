---
repo: openclaw/openclaw
cluster_id: gitcrawl-989-bulk-plan-20260615-a
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
  - "#82528"
candidates:
  - "#82528"
  - "#92253"
cluster_refs:
  - "#82528"
  - "#92253"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#92253"
canonical_hint: "gitcrawl representative #82528 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 989 on 2026-06-15. Security-signal refs #92253 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 989

Generated from local gitcrawl run cluster 989 for `openclaw/openclaw`.

Display title:

> [Bug]: /active-memory status|on|off always returns "off for this session" when plugin config omits agents[] (single-agent default setup)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- security-signal refs requiring route_security: #92253
- representative: #82528, currently open in local store
- latest member update: 2026-06-14T04:46:07.436007Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #82528 [Bug]: /active-memory status|on|off always returns "off for this session" when plugin config omits agents[] (single-agent default setup)
- #92253 [security-signal] [codex] active-memory default to configured agents
