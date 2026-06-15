---
repo: openclaw/openclaw
cluster_id: gitcrawl-149-bulk-plan-20260615-a
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
  - "#89637"
candidates:
  - "#89430"
  - "#89637"
  - "#89906"
  - "#92518"
cluster_refs:
  - "#89430"
  - "#89637"
  - "#89906"
  - "#92518"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89637"
canonical_hint: "gitcrawl representative #89637 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 149 on 2026-06-15. Security-signal refs #89637 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 149

Generated from local gitcrawl run cluster 149 for `openclaw/openclaw`.

Display title:

> fix(googlechat): fall back to text link on media upload 403

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- security-signal refs requiring route_security: #89637
- representative: #89637, currently open in local store
- latest member update: 2026-06-14T04:46:05.586446Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89430 Google Chat: agents can't deliver images/files under app authentication (media upload → 403)
- #89637 [security-signal] fix(googlechat): fall back to text link on media upload 403
- #89906 fix(googlechat): fall back to text link when remote media upload fails with 403
- #92518 googlechat: deliver media as a text link when attachment upload is unauthorized (app auth)
