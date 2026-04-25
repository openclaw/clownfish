---
repo: openclaw/openclaw
cluster_id: ghcrawl-143800-autonomous-smoke
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
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#41129"
candidates:
  - "#46899"
  - "#57491"
  - "#57601"
  - "#57867"
  - "#60845"
  - "#60921"
  - "#62777"
  - "#64751"
  - "#64831"
  - "#67196"
  - "#67602"
  - "#69594"
cluster_refs:
  - "#41128"
  - "#41129"
  - "#41667"
  - "#42170"
  - "#42695"
  - "#43177"
  - "#44213"
  - "#44232"
  - "#44413"
  - "#44596"
  - "#46899"
  - "#47524"
  - "#49116"
  - "#53769"
  - "#53824"
  - "#54741"
  - "#55271"
  - "#55275"
  - "#56388"
  - "#57491"
  - "#57601"
  - "#57867"
  - "#60845"
  - "#60921"
  - "#61414"
  - "#61913"
  - "#62777"
  - "#63274"
  - "#64751"
  - "#64831"
  - "#67196"
  - "#67286"
  - "#67602"
  - "#69594"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #41129 is closed; worker must verify whether an open canonical should replace it before any close action."
notes: "Autonomous smoke job derived from ghcrawl run cluster 143800 on 2026-04-25."
---

# GHCrawl Cluster 143800 Autonomous Smoke

Display title:

> Cron announce delivery reports success but messages never arrive

Run one live autonomous smoke pass. Classify the open candidate issues, verify live GitHub state, choose the current canonical issue if the closed representative is obsolete, and emit only high-confidence close/comment/label actions.

Do not create a fix PR, merge a PR, or close anything unless the canonical path is explicit and the item is a direct duplicate of that path. Preserve distinct cron subfamilies such as failureAlert, channel-prefix stripping, unsupported channel IDs, duplicate announces, catch-up delivery, and channel mismatch as related or `needs_human` unless duplicate evidence is direct.

Open candidates:

- #46899 Cron Job Delivery Channel Mismatch
- #57491 delivery fails with Unknown Channel when multiple channels configured
- #57601 CLI-created cron jobs do not send scheduled messages to Telegram
- #57867 isolated cron sessions cannot deliver to Telegram
- #60845 failureAlert never fires
- #60921 delivery fails with Channel is required
- #62777 failureAlert never fires and channel prefix stripped
- #64751 jobs marked error despite successful agent run
- #64831 inconsistent jobs, chat-triggered exec unstable, missing catch-up delivery
- #67196 delivery.announce posts 3 messages instead of 1
- #67602 announce delivery fails with Unsupported channel for Slack channels
- #69594 delivery status shows delivered but message was never sent
