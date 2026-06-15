---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-023
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
  - maintainer_signal
  - active_author_followup
  - technical_correctness_judgment
canonical: []
candidates:
  - "#88754"
  - "#88776"
  - "#40392"
  - "#49750"
  - "#46895"
  - "#88828"
  - "#92090"
  - "#92355"
  - "#92432"
  - "#92466"
  - "#92514"
  - "#92544"
  - "#47589"
  - "#51926"
  - "#92204"
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
  - "#88754"
  - "#88776"
  - "#40392"
  - "#49750"
  - "#46895"
  - "#88828"
  - "#92090"
  - "#92355"
  - "#92432"
  - "#92466"
  - "#92514"
  - "#92544"
  - "#47589"
  - "#51926"
  - "#92204"
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
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.791Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 23

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #88754 fix(text): normalize CJK/fullwidth quotes in reasoning tag delimiters

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T17:44:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Models that emit inline thinking content at stream boundaries may insert CJK fullwidth quotation marks (U+300C-U+300F: 「」❲❳) in place of ASCII angle brackets around reasoning tag names. The pattern matcher uses ASCII brackets, so fullwidth-delimited

### #88776 fix: normalise wiki lint targets

- bucket: needs_proof
- author: ishangodawatta
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: memory-wiki, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-10T17:45:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw wiki lint` can report valid imported wiki links as `broken-wikilink` when they use page titles, slug variants, fragments, or imported source-path suffixes. - Why it matters: imported evidence should not need provenance-damaging

### #40392 config: use datetime suffix for config backup files instead of numeric rotation

- bucket: needs_proof
- author: davidxcli
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T20:20:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #39923 ## Summary Replaces the numeric rotation ring (`openclaw.json.bak.1`–`.bak.4`) with datetime-stamped backup files (`openclaw.json.bak.YYYYMMDD-HHmmssSSS`, UTC). This makes it immediately clear *when* each backup was taken without needing to inspe

### #49750 fix(sessions): preserve slack thread routing for A2A sessions

- bucket: needs_proof
- author: qqchang2nd
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T21:28:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes a related A2A routing regression for Slack thread sessions. Two issues were contributing to the failure mode: 1. `resolveGroupSessionKey()` could normalize agent-prefixed Slack thread keys such as `agent:builder:slack:channel:C123:thre

### #46895 fix(slash): handle /model status locally[AI-assisted]#46894

- bucket: needs_proof
- author: xiaoHEI-312
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T02:51:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: - Why it matters: - What changed: - What did NOT change (scope boundary): ## Change Type (select all) - [ ] Bug fix - [ ] Feature - [ ] Refactor - [ ] Docs - [ ] Security hardening - [ ] Chore/

### #88828 fix(gateway): gate cron on channel readiness

- bucket: needs_proof
- author: samzong
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T04:03:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Prevent gateway cron from starting delivery work before configured channel transports report ready during startup and hot reload. Why does this matter now? - Cron catch-up can immediately deliver notifications afte

### #92090 fix(cron): set active marker for startup catch-up runs (fixes #91695)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T23:47:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Startup catch-up cron runs never call `markCronJobActive`, so `isCronJobActive(jobId)` returns `false` for the duration of the catch-up run. The task-registry reconcile checks this marker and misclassifies long catch-up jobs (>5 min)

### #92355 #92240: fix(plugins): resolve bundled public surfaces from package dist output

- bucket: needs_proof
- author: zhangqueping
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T07:43:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix gateway startup failure: `Unable to resolve bundled plugin public surface speech-core/runtime-api.js` after upgrading to 2026.6.1. ## Root Cause `resolveBundledPluginPublicSurfacePath` in `public-surface-runtime.ts` only searched for bundled plu

### #92432 fix(issue): resolve #92372 [Bug]: read tool drops memory/ prefix in multi-agent setup,

- bucket: needs_proof
- author: xuwei-xy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: qa-lab, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T11:32:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 修复 issue #92372 中报告的问题。 ### Bug type Regression (worked before, now fails) ### Beta release blocker No ### Summary In a multi-agent setup, the secondary agent's read tool call drops the memory/ subdirectory prefix from ## Changes - `extensions/qa-la

### #92466 Add EvoLink provider integration

- bucket: needs_proof
- author: EvoLinkAI
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: M, triage: needs-real-behavior-proof, dependencies-changed, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T14:12:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a bundled `evolink` OpenAI-compatible provider plugin with `EVOLINK_API_KEY` auth, `evolink/auto` static catalog entry, and OpenAI replay/tool compatibility hooks. - Preserves EvoLink's literal provider-prefixed model id so `evolink/auto` rou

### #92514 fix: allow session write lock re-entry for same-process abort race

- bucket: needs_proof
- author: icemaple77
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T18:53:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the user presses the stop button mid-response, the session write lock release is fire-and-forget (non-blocking). If a new message arrives before the async release completes, the same process cannot reclaim its own lock because `allowReentrant`

### #92544 Add TrustedRouter setup docs

- bucket: needs_proof
- author: jperla
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T22:53:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add TrustedRouter provider setup documentation - add the docs page to the provider navigation - include the OpenAI-compatible base URL https://api.trustedrouter.com/v1 and router aliases ## Testing - git diff --check

### #47589 fix(reminder-guard): reduce false positives on memory-related statements

- bucket: needs_proof
- author: moltpill
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T04:52:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The reminder guard's `REMINDER_COMMITMENT_PATTERNS` regex includes bare `remember` which matches memory/knowledge retention statements like "I'll remember that" and "I'll remember your preference" — not just temporal reminder commitments. This cause

### #51926 Agents: default nodes describe to current node

- bucket: needs_proof
- author: Liuhaai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T04:53:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the `nodes` tool accepted `action: "describe"` without `node` in its flat schema, but the `describe` implementation still hard-required `node` and threw `node required`. - Why it matters: agents use `describe` as a discovery-style read ac

### #92204 fix(gateway): notify parent session on sub-agent run timeout

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T12:35:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #89095. When a sub-agent run is force-killed by its `runTimeoutSeconds`, the parent session receives **no completion/timeout event** and waits indefinitely. The root cause is an asymmetric check in the wait-timer fallback of `waitForAgentJob`:

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
