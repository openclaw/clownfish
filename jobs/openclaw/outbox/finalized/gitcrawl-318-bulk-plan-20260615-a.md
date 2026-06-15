---
repo: openclaw/openclaw
cluster_id: gitcrawl-318-bulk-plan-20260615-a
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
  - "#82137"
candidates:
  - "#73437"
  - "#81079"
  - "#82137"
cluster_refs:
  - "#73437"
  - "#81079"
  - "#82137"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#81079"
canonical_hint: "gitcrawl representative #82137 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 318 on 2026-06-15. Security-signal refs #81079 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 318

Generated from local gitcrawl run cluster 318 for `openclaw/openclaw`.

Display title:

> RFC: Expose existing InputProvenance / AgentInternalEvent signals to ContextEngine.assemble()

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- security-signal refs requiring route_security: #81079
- representative: #82137, currently open in local store
- latest member update: 2026-06-14T04:46:07.467223Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #73437 [Feature]: `ContextEngine.assemble` should fire per LLM call, not per user prompt
- #81079 [security-signal] [feat]: thread currentTokenCount into ContextEngine.assemble
- #82137 RFC: Expose existing InputProvenance / AgentInternalEvent signals to ContextEngine.assemble()
