---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-311
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
  - "#61112"
  - "#60048"
  - "#61051"
  - "#65058"
  - "#67008"
  - "#65382"
  - "#66213"
  - "#67796"
  - "#66400"
  - "#67333"
cluster_refs:
  - "#61112"
  - "#60048"
  - "#61051"
  - "#65058"
  - "#67008"
  - "#65382"
  - "#66213"
  - "#67796"
  - "#66400"
  - "#67333"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.688Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 311

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #61112 UI: localize markdown sidebar labels

- bucket: needs_proof
- author: rubensfox20
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T05:05:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the markdown sidebar still had a few hardcoded English labels even when a non-English locale was selected. - Why it matters: these strings appear in a shared sidebar surface, so they create mixed-language UI despite the surrounding locale

### #60048 docs(memory): add memory system deep dive guide

- bucket: needs_proof
- author: neyric
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-13T05:05:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a comprehensive memory system deep dive guide, addressing #43032. ### Problem `docs/concepts/memory.md` covers basics (~600 words) but lacks depth on memory best practices, search optimization, lifecycle management, and advanced patterns. ### Ne

### #61051 Approvals: add Telegram admin terminal routing flow

- bucket: needs_proof
- author: momo-the-agent
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, gateway, agents, size: XL, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T05:05:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: approval requests could be duplicated or routed inconsistently when using explicit approval targets (especially Telegram DM admin-terminal setups). - Why it matters: operator UX became noisy/confusing, and forwarding behavior could confli

### #65058 fix(googlechat): accept add-on space lifecycle payload variants

- bucket: needs_proof
- author: Yanhu007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, stale, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T05:05:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The Google Chat add-on payload parser only handled `chat.messagePayload`, rejecting valid `addedToSpacePayload` and `removedFromSpacePayload` events as "invalid payload". Expand `parseGoogleChatInboundPayload` to recognise all three payload variants and map to

### #67008 feat(chutes): add zai-org/GLM-5.1-TEE to static model catalog

- bucket: needs_proof
- author: tardigrde
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-13T05:06:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `zai-org/GLM-5.1-TEE` is available on the Chutes unified gateway but was missing from the bundled static catalog. The Chutes discovery endpoint (`GET /v1/models`) always times out from self-hosted VPS environments, so the static catalog is the only 

### #65382 fix(ui): format common cron intervals

- bucket: needs_proof
- author: OwenYWT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T05:06:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - format common cron patterns (every N minutes/hours) so the control tooltip reads "Every ..." instead of raw cron syntax - keep the existing fallback for unusual schedules and preserve timezone annotations ## Testing - pnpm --dir ui test src/ui/pre

### #66213 fix(ci): add post-publish asset verification for macOS stable releases

- bucket: needs_proof
- author: soumikbhatta
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T05:06:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `verify-release-assets.yml` — polls for macOS binaries after a stable GitHub release is published - add CODEOWNERS entry for `appcast.xml` requiring maintainer review ## Why v2026.4.12 stable was published at 2026-04-13T12:35:53Z with 0 assets

### #67796 fix(mattermost): support filePath and path as mediaUrl fallbacks in handleAction

- bucket: needs_proof
- author: nightq
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T05:06:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Mattermost `handleAction` only checked `params.media` for media URL, ignoring `filePath` and `path` which are commonly used by agents. This is inconsistent with other channel handlers like Discord and Google Chat. ## Problem When an agent uses t

### #66400 fix(tui): tool events dropped when arriving before chat delta

- bucket: needs_proof
- author: g199209
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T05:07:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `/verbose full` is set in the TUI, tool execution cards are not rendered for live runs. They only appear after reloading history (e.g. via `/verbose full` which triggers `loadHistory()`). This means the user sees no tool activity during an acti

### #67333 doctor: add sandbox readiness probe and claw-code parity harness

- bucket: needs_proof
- author: zeng269
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, commands, docker, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T05:07:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- add sandbox readiness probe in doctor\n- add claw-code parity harness\n\n## Dependency\n- depends on #67332\n\n## Validation\n- lint:parity:claw-code\n- key test suite: 10 files / 55 tests

