---
repo: openclaw/openclaw
cluster_id: gitcrawl-197-bulk-plan-20260615-a
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
  - "#92563"
candidates:
  - "#92563"
  - "#92571"
  - "#92577"
cluster_refs:
  - "#92563"
  - "#92571"
  - "#92577"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#92577"
canonical_hint: "gitcrawl representative #92563 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 197 on 2026-06-15. Security-signal refs #92577 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 197

Generated from local gitcrawl run cluster 197 for `openclaw/openclaw`.

Display title:

> session-memory hook duplicates assistant messages when thinking is stripped

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #92577
- representative: #92563, currently open in local store
- latest member update: 2026-06-14T04:46:04.034726Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92563 session-memory hook duplicates assistant messages when thinking is stripped
- #92571 fix: dedupe cleaned assistant transcript entries for session-memory
- #92577 [security-signal] fix: deduplicate consecutive assistant messages in session-memory hook
