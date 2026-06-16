---
repo: openclaw/openclaw
cluster_id: gitcrawl-117-dedupe-cleanup-wave
mode: autonomous
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
  - "#75151"
candidates:
  - "#66360"
  - "#89245"
  - "#89247"
cluster_refs:
  - "#66360"
  - "#75151"
  - "#87610"
  - "#89245"
  - "#89247"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #75151 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 117 on 2026-06-16."
---

# Gitcrawl Cluster 117

Generated from local gitcrawl run cluster 117 for `openclaw/openclaw`.

Display title:

> [Bug]: Context overflow reset can map sessionFile to nonexistent transcript, orphaning real session history

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 3
- representative: #75151, currently closed in local store
- latest member update: 2026-06-15T19:04:12.406128Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #75151 [Bug]: Context overflow reset can map sessionFile to nonexistent transcript, orphaning real session history
- #87610 [Bug]: Telegram shows internal "⚠️ 🛠️ ... failed" for normal grep exit(1) after upgrade to 2026.5.20

Open candidates:

- #66360 session.maintenance has no size cap for transcript .jsonl files — unbounded growth causes gateway CPU 100%
- #89245 [Bug]: Feishu direct session can become unusable after /reset or /new and fall back to generic 'Something went wrong...' while session index points to missing transcript IDs
- #89247 [Bug]: Feishu direct repeatedly leaks internal '... (agent) failed' and generic failure banners to users, including false failures after successful runs
