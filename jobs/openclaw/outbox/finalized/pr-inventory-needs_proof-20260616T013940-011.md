---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260616T013940-011
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
  - maintainer_signal
  - active_author_followup
  - technical_correctness_judgment
canonical: []
candidates:
  - "#41275"
  - "#92704"
  - "#92714"
  - "#43938"
  - "#90512"
  - "#92723"
  - "#92755"
  - "#92774"
  - "#92756"
  - "#92762"
cluster_refs:
  - "#41275"
  - "#92704"
  - "#92714"
  - "#43938"
  - "#90512"
  - "#92723"
  - "#92755"
  - "#92774"
  - "#92756"
  - "#92762"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-16T01:39:40.264Z; bucket=needs_proof; write-mode is enabled for conservative close/comment/label actions only."
---

# PR Inventory needs_proof 11

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #41275 fix(cron): allow timeoutSeconds: 0 for no-timeout mode

- bucket: needs_proof
- author: JonathanJing
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T13:50:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## 🐛 Problem The cron job UI validation logic incorrectly rejects `timeoutSeconds: 0`, which should represent "no timeout" mode. **Current behavior:** ```typescript if (timeout <= 0) { errors.timeoutSeconds = "cron.errors.timeoutInvalid"; } ``` This prevents

### #92704 #92688: fix(qwen): use DashScope native image format for Qwen vision models

- bucket: needs_proof
- author: sheyanmin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T14:30:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix Qwen vision models returning 400 "Unexpected item type in content" on DashScope by converting image content parts from standard OpenAI format (`type: image_url`) to DashScope native format (`type: image`). ## Root Cause DashScope's OpenAI-compat

### #92714 feat(gateway): make the default node.invoke timeout configurable

- bucket: needs_proof
- author: Hidetsugu55
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, plugin: file-transfer, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T14:56:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The gateway→node `node.invoke` path used a hardcoded 30-second default timeout for any call that did not pass its own `timeoutMs`. Nodes that legitimately run longer commands were cut off at 30s with a `TIMEOUT` error. This adds a configurable defau

### #43938 fix(gateway): use account-scoped reload for channel account changes

- bucket: needs_proof
- author: coppynight
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T14:59:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Use account-scoped hot reload for config changes under: - `channels.<channel>.accounts.<accountId>.*` instead of always restarting the entire channel. ## What changed - added account-scoped restart planning to `GatewayReloadPlan` - detect account-sc

### #90512 fix: ignore canonical Windows gateway task names

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T15:14:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Stop the Windows gateway-service detector from flagging the canonical `\OpenClaw Gateway` scheduled task as an extra service just because `schtasks` prefixes the task name with a backslash. ## Changes - strip leading slash and backslash prefixes bef

### #92723 fix(issue): resolve #91873 [Bug]: Slack channel silently drops after upgrade to 2026.6.

- bucket: needs_proof
- author: xuwei-xy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T15:30:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 修复 issue #91873 中报告的问题。 ### Bug type Regression (worked before, now fails) ### Beta release blocker No ### Summary Version: 2026.4.26 → 2026.6.5Platform: Linux (Bluehost VPS), Slack channel via Socket Mode What happene ## Changes - `.agents/skills/r

### #92755 #92715: [Bug]: Discord intermediate status reaction emojis missing during tool/skill execution

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T18:15:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When verbose progress is disabled, the followup runner unconditionally blocked all non-compaction events from reaching `onToolStart`. This prevented Discord status reactions from updating during tool execution — users saw only the initial and final

### #92774 fix: drop retained session fence text after prompt lock reacquire

- bucket: needs_proof
- author: markus-lassfolk
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T19:01:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - compact retained `fenceSnapshot` payloads to `fingerprint + digest` once the session write lock is reacquired - keep full `fenceSnapshot.text` only during the released prompt window where rewrite detection needs it - clear retained fence snapshot

### #92756 fix(read): decode GBK-encoded files on Windows via existing codepage fallback

- bucket: needs_proof
- author: EaveLuo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T19:04:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reuse the existing `decodeWindowsOutputBuffer()` in the read tool's text decode path, replacing hard-coded `buffer.toString("utf-8")` - On Windows with a non-UTF-8 console codepage (e.g. GBK on Chinese Windows), the function tries strict UTF-8 fir

### #92762 fix(dispatch): include message_sending hooks when channel beforeDeliver is configured

- bucket: needs_proof
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-13T19:27:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a channel-specific `beforeDeliver` existed, the composed hook chain only included the channel hook + `reply_payload_sending`, silently bypassing global `message_sending` hooks. This meant `{ cancel: true }` and content rewrite from `message_sen
