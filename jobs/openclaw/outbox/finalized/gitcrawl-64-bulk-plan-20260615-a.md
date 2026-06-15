---
repo: openclaw/openclaw
cluster_id: gitcrawl-64-bulk-plan-20260615-a
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
  - "#45082"
  - "#73060"
  - "#77378"
  - "#77442"
cluster_refs:
  - "#45082"
  - "#73060"
  - "#77378"
  - "#77442"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#52120"
  - "#52236"
  - "#69010"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#73060"
canonical_hint: "gitcrawl representative #52120 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 64 on 2026-06-15. Security-signal refs #73060 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #52120, #52236, #69010 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 64

Generated from local gitcrawl run cluster 64 for `openclaw/openclaw`.

Display title:

> fix(mattermost): inherit thread context in message tool send action

Cluster shape from gitcrawl:

- total members: 7
- issues: 2
- pull requests: 5
- open candidates in local store: 4
- excluded existing-overlap refs: #52120, #52236, #69010
- security-signal refs requiring route_security: #73060
- representative: #52120, currently open in local store
- latest member update: 2026-06-14T04:46:06.374277Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45082 fix(mattermost): proactive message tool sends ignore thread context
- #73060 [security-signal] fix(mattermost): honor threadId in message tool sends
- #77378 [Bug]: Session rotation creates duplicate sessions with broken delivery context
- #77442 fix(session): persist delivery context for inbound non-direct sessions

Existing-overlap context refs:

- #52120 fix(mattermost): inherit thread context in message tool send action
- #52236 fix(mattermost): persist threadId in delivery context for all session types
- #69010 [security-signal] fix(gateway): prefer current route delivery context
