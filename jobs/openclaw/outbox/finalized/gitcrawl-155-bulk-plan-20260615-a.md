---
repo: openclaw/openclaw
cluster_id: gitcrawl-155-bulk-plan-20260615-a
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
  - "#81841"
candidates:
  - "#81841"
  - "#90683"
  - "#91953"
  - "#92191"
cluster_refs:
  - "#81841"
  - "#90683"
  - "#91953"
  - "#92191"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90683"
canonical_hint: "gitcrawl representative #81841 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 155 on 2026-06-15. Security-signal refs #90683 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 155

Generated from local gitcrawl run cluster 155 for `openclaw/openclaw`.

Display title:

> fix: retry silent reasoning and empty-error turns with feedback

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- security-signal refs requiring route_security: #90683
- representative: #81841, currently open in local store
- latest member update: 2026-06-14T04:46:05.902229Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81841 fix: retry silent reasoning and empty-error turns with feedback
- #90683 [security-signal] fix: retry safe post-tool continuation turns
- #91953 [Bug]: empty-error-retry skipped when stop_reason="error" turn contains a thinking block or non-zero output, causing silent mid-turn abort on multi-step tasks
- #92191 fix(agents): retry thinking-only errored turns
