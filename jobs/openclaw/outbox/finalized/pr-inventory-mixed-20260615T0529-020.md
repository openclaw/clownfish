---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-020
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
  - "#80726"
  - "#81279"
  - "#81333"
  - "#85212"
  - "#81714"
  - "#81743"
  - "#81805"
  - "#82232"
  - "#82585"
  - "#83573"
cluster_refs:
  - "#80726"
  - "#81279"
  - "#81333"
  - "#85212"
  - "#81714"
  - "#81743"
  - "#81805"
  - "#82232"
  - "#82585"
  - "#83573"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.602Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 20

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #80726 fix(telegram): resolve DM topic thread ids

- bucket: ready_for_maintainer
- author: Audiofool934
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-05-23T00:00:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a shared Telegram helper that resolves thread ids from `message_thread_id` or Bot API `direct_messages_topic.topic_id` - use that helper across Telegram inbound message context, native commands, runtime handlers, and sequential keys - add regr

### #81279 ui(i18n): localize skills page grouping labels, status chips and missing prefixes for zh-CN

- bucket: ready_for_maintainer
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-05-23T00:02:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Skills page had hardcoded English strings in grouping labels ("Built-in Skills", "Workspace Skills", etc.), status chips ("eligible", "blocked", "bundled", "disabled"), and missing-requirement prefixes ("bin:", "env:", "config:", "os:") w

### #81333 feat(i18n): translate Nodes page UI strings to Simplified Chinese

- bucket: ready_for_maintainer
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-05-23T00:03:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Nodes page (`/nodes`) had extensive hardcoded English strings in the `nodes` namespace of `zh-CN.ts` (historical omission) and the entire `nodes-exec-approvals.ts` sub-component was not internationalized at all. - Why it matters: Non-Engl

### #85212 fix(build): include Control UI assets in full source runtime builds

- bucket: ready_for_maintainer
- author: hekunwang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, scripts, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-23T00:55:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - Add `ui:build` to the `scripts/build-all.mjs` full and `ciArtifacts` build profiles. - Place `ui:build` after `tsdown` / runtime postbuild cleanup so `dist/control-ui/*` is not deleted by the backend build. - Keep `gatewayWatch` backend-only. - A

### #81714 ui(i18n): localize agents panels (overview and tools/skills) for zh-CN

- bucket: ready_for_maintainer
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, proof: sufficient, P3, rating: 🧂 unranked krab, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-05-23T01:14:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Agents page overview panel and tools/skills panel had hardcoded English strings when using Simplified Chinese locale. - Why it matters: Non-English users see English labels, tabs, buttons, and tool metadata in the agents page. - What chan

### #81743 feat(ui/i18n): add Chinese translations for config page

- bucket: needs_proof
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, P3, rating: 🧂 unranked krab, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-05-23T01:14:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Config page quick settings had missing or incorrect Chinese translations. Theme names, roundness options, and several card labels showed raw i18n keys or English text when using Simplified Chinese locale. - Why it matters: Non-English use

### #81805 perf(channels,secrets): opt-in lazy mode to skip eager bundled channel artifact loading

- bucket: ready_for_maintainer
- author: chphch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-23T01:14:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Cold control-plane paths (CLI startup target-registry build, runtime config collectors iterating bundled channels, doctor scans) currently load every bundled channel's `contract-api.js` / `doctor-contract-api.js` barrel through `loadBundledChannelPu

### #82232 Add CLI tool plan execution

- bucket: ready_for_maintainer
- author: MAdArab872
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-23T01:15:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a deterministic tool-plan execution CLI that replays planned tool calls through the existing Gateway `tools.invoke` boundary instead of creating a parallel dispatcher. - adds `executeToolPlan` with array and `{ steps }` plan support - adds `ope

### #82585 feat(synology-chat): add configurable triggerWord to replace payload-based stripping

- bucket: ready_for_maintainer
- author: iA2HVjA7ghZWWl2q9aoZ53f
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, channel: synology-chat, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-23T02:06:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The channel currently strips `payload.trigger_word` (the field Synology Chat populates on each webhook delivery) from the message text. This field is not user-controlled and its value depends on the Synology Chat configuration in unpredictable ways:

### #83573 feat(mattermost): add /model dialog picker

- bucket: maintainer_owned
- author: mukhtharcm
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: mattermost, size: XL, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-23T03:23:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Mattermost `/oc_model` and `/oc_models` still relied on the older message picker, so they could not use Mattermost's richer dialog flow. - Why it matters: the Discord picker already feels native and multi-step; Mattermost needed a compara

