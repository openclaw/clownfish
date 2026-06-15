---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-002
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
  - "#88878"
  - "#88936"
  - "#92837"
  - "#90963"
  - "#66968"
  - "#63123"
  - "#59835"
  - "#61960"
  - "#91952"
  - "#89717"
  - "#89730"
  - "#89737"
  - "#89753"
  - "#89769"
  - "#89775"
  - "#89782"
  - "#89789"
  - "#89794"
  - "#89824"
  - "#89836"
  - "#89860"
  - "#89863"
  - "#88945"
  - "#70762"
  - "#89906"
cluster_refs:
  - "#88878"
  - "#88936"
  - "#92837"
  - "#90963"
  - "#66968"
  - "#63123"
  - "#59835"
  - "#61960"
  - "#91952"
  - "#89717"
  - "#89730"
  - "#89737"
  - "#89753"
  - "#89769"
  - "#89775"
  - "#89782"
  - "#89789"
  - "#89794"
  - "#89824"
  - "#89836"
  - "#89860"
  - "#89863"
  - "#88945"
  - "#70762"
  - "#89906"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.786Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 2

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #88878 fix(agents): project cron tool schemas for providers

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: M, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T07:17:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - project runtime tool schemas into provider-facing OpenAPI-friendly shapes by dropping nullable composition wrappers and converting string literal unions to enums - keep raw TypeBox validation intact so `null` clear sentinels still reach cron runti

### #88936 fix(plugins): skip broken web provider factories

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T07:17:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skips bundled web provider factories that throw during public-artifact discovery - keeps healthy sibling providers active when another selected plugin's factory is broken - preserves the existing `null` fallback path for modules that simply do not

### #92837 fix(android): show live chat context usage

- bucket: maintainer_owned
- author: Tosko4
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: app: android, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T09:54:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes the Android chat context meter so it renders live session context usage from gateway `totalTokens` / `contextTokens` metadata instead of mapping the thinking preset to a fixed percentage. - Keeps the compact thinking control visible by showi

### #90963 fix(codex): strengthen agent soul adherence

- bucket: maintainer_owned
- author: hannesrudolph
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: XS, extensions: codex, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T11:15:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Strengthen the existing Codex app-server `AGENT_SOUL` preamble in one line. - Name the failure mode this is meant to reduce: after longer interactions, persona and collaboration traits from workspace soul files can fade and the model can drift bac

### #66968 style: apply oxfmt formatting to 16 files

- bucket: maintainer_owned
- author: visionik
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, docker, agents, maintainer, size: S, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:13:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Running `pnpm format:check` found 16 files with formatting drift. Applied `pnpm format` (`oxfmt --write`). No logic changes. Files touched: - `.agents/skills/openclaw-secret-scanning-maintainer/scripts/secret-scanning.mjs` - `docs/style.css` - `extensions/acti

### #63123 feat(ios): add background alive beacon support

- bucket: maintainer_owned
- author: ngutman
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: ios, gateway, maintainer, size: L, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T14:06:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: iOS background wakes did not give the gateway a durable, acked way to record that a node was recently alive unless a live websocket reconnect happened. - Why it matters: operators could not distinguish "currently connected" from "recently

### #59835 fix(cron): validate custom session ids

- bucket: maintainer_owned
- author: eleqtrizit
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:07:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reject invalid `session:<id>` cron targets that contain path separator characters or NULs - Reuse the same validation when resolving the isolated cron run `sessionKey` ## Changes - Added a shared cron custom-session validator in `src/cron/normaliz

### #61960 docs: require i18n postprocess before skip

- bucket: maintainer_owned
- author: hxy91819
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: scripts, maintainer, size: M, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:10:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - require docs-i18n postprocess completion before localized outputs become skippable - mark newly written localized docs as `postprocess_version: pending` and finalize them only after locale-link postprocess succeeds - add regression coverage for th

### #91952 feat(status): surface plugin health

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: jalehman
- labels: docs, agents, maintainer, size: XL, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:18:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add compact plugin health to `/status` and detailed `/status plugins` - surface plugin load errors, enabled dependency failures, diagnostic errors, context-engine quarantines, channel setup failures, and runtime tool-schema quarantines - keep comp

### #89717 fix(agents): avoid enumerating wrapped tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:37:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop before-tool-call and abort wrappers from spreading arbitrary active tool descriptors. - Add a shared wrapper descriptor copier that preserves the `AgentTool` contract fields plus wrapper-relevant optional metadata without enumerating hostile

### #89730 fix(agents): guard lean tool name reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:37:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Catch-bound local-model lean tool name normalization so unreadable descriptors cannot crash lean filtering. - Drop malformed or empty-name descriptors only while lean filtering is active; disabled lean mode still returns the original tool array. - Ad

### #89737 fix(auto-reply): guard context report tool entries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:37:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard cached context report tool entries before `/context detail` and `/context map` read tool names and size fields. - Reuse one normalized tool-report view for text diagnostics and the treemap renderer. - Add focused regressions for unreadable t

### #89753 fix(plugins): guard command spec projections

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:38:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot plugin command registrations before building command specs for `commands.list` and provider-native command surfaces. - Skip unreadable or malformed command registrations/fields instead of letting one bad plugin command crash projection or

### #89769 fix(agents): guard tool inventory metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:19:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Guard effective tool inventory projection against unreadable plugin tool metadata rows. - Snapshot readable plugin-owned metadata before projection so malformed rows fall back to plain tool labels/descriptions. - Add focused coverage for an unreadabl

### #89775 fix(plugins): guard codex app extension factories

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:19:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Guard Codex app-server extension factory listing against unreadable active-registry entries. - Skip malformed/non-function factory rows while preserving healthy factories in order. - Add focused coverage for an unreadable factory sibling. Verificatio

### #89782 fix(plugins): guard binding resolved callbacks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:19:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard conversation-binding resolved callback registry reads before dispatch. - Skip malformed/unreadable callback registrations instead of letting one bad sibling prevent healthy callbacks. - Add a regression test where an unreadable callback regi

### #89789 fix(media): guard document extractor metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:19:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard document extractor metadata reads before MIME matching and extraction. - Skip malformed/unreadable extractor rows instead of letting one bad plugin entry prevent later healthy extractors. - Preserve method-style extractor `this` binding when

### #89794 fix(gateway): guard plugin UI descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:19:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard `plugins.uiDescriptors` descriptor projection so one malformed Control UI registration cannot crash the whole gateway response - skip unreadable or malformed UI descriptor rows while preserving healthy plugin descriptors - add a contract reg

### #89824 fix(gateway): guard plugin reload metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:20:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot plugin reload registration metadata before building gateway config reload rules. - Skip malformed reload registrations so one stale plugin row cannot abort reload planning. - Keep healthy plugin reload rules active after unreadable plugin

### #89836 fix(security): guard plugin audit collector metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:55:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plugin security audit collector metadata before invoking collectors. - Keep security audit/doctor collector execution alive when one stale plugin collector row has unreadable owner metadata. - Add a regression covering a failed collector wit

### #89860 fix(media): guard hosted resolver failure logging

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:55:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard hosted plugin media resolver failure logging so an unreadable `pluginId` accessor falls back to `unknown` instead of escaping the resolver catch path. - Add regression coverage for poisoned failed-resolver metadata followed by a healthy fall

### #89863 fix(channels): guard package-state failure logging

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:55:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard channel package-state probe load-failure logging so an unreadable catalog `pluginId` accessor falls back to `unknown`. - Add a regression for a stale package-state catalog entry whose checker cannot load and whose `pluginId` getter throws. #

### #88945 fix(plugins): serialize binding approval saves

- bucket: maintainer_owned
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:02:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Serializes plugin-binding approval persistence so overlapping `allow-always` saves cannot write stale approval state after a newer save updates the in-memory cache. - Keeps the existing in-memory cache behavior imm

### #70762 refactor(agents): share hook history windows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XL, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:10:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## summary - add a shared bounded hook-history helper so cli and embedded runners stop drifting on llm_input/agent_end payload windows - switch cli session-history loading and embedded hook emission to the shared windowing logic - add a deterministic live cli-

### #89906 fix(googlechat): fall back to text link when remote media upload fails with 403

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: googlechat, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:19:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #89430 reports that Google Chat agents using app-auth (service-account, `chat.bot` scope) cannot deliver replies that include image or file attachments. The official Google Chat API contract requires user auth for `media.upload
