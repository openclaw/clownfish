---
repo: openclaw/openclaw
cluster_id: gitcrawl-117-fresh-plan-ramp
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
  - "#66360"
cluster_refs:
  - "#66360"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#75151"
  - "#87610"
  - "#89245"
  - "#89247"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #75151 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 117 on 2026-06-17. Existing-overlap refs #75151, #87610, #89245, #89247 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 117

Generated from local gitcrawl run cluster 117 for `openclaw/openclaw`.

Display title:

> [Bug]: Context overflow reset can map sessionFile to nonexistent transcript, orphaning real session history

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #75151, #87610, #89245, #89247
- representative: #75151, currently closed in local store
- latest member update: 2026-06-15T19:04:12.406128Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #66360 session.maintenance has no size cap for transcript .jsonl files — unbounded growth causes gateway CPU 100%

Existing-overlap context refs:

- #75151 [Bug]: Context overflow reset can map sessionFile to nonexistent transcript, orphaning real session history
- #87610 [Bug]: Telegram shows internal "⚠️ 🛠️ ... failed" for normal grep exit(1) after upgrade to 2026.5.20
- #89245 [Bug]: Feishu direct session can become unusable after /reset or /new and fall back to generic 'Something went wrong...' while session index points to missing transcript IDs
- #89247 [Bug]: Feishu direct repeatedly leaks internal '... (agent) failed' and generic failure banners to users, including false failures after successful runs
