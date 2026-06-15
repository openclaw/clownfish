---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-025
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
  - "#58805"
  - "#92937"
  - "#63380"
  - "#92948"
  - "#66001"
  - "#92959"
  - "#92963"
  - "#92933"
  - "#66720"
  - "#67420"
  - "#67623"
  - "#68257"
  - "#68860"
  - "#68927"
  - "#92978"
  - "#63456"
  - "#55351"
  - "#92986"
  - "#64703"
  - "#64820"
  - "#91712"
  - "#92764"
  - "#92975"
  - "#41265"
  - "#58679"
cluster_refs:
  - "#58805"
  - "#92937"
  - "#63380"
  - "#92948"
  - "#66001"
  - "#92959"
  - "#92963"
  - "#92933"
  - "#66720"
  - "#67420"
  - "#67623"
  - "#68257"
  - "#68860"
  - "#68927"
  - "#92978"
  - "#63456"
  - "#55351"
  - "#92986"
  - "#64703"
  - "#64820"
  - "#91712"
  - "#92764"
  - "#92975"
  - "#41265"
  - "#58679"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.791Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 25

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #58805 Plugins: preserve manifest skills on loaded plugin records

- bucket: needs_proof
- author: novisfff
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T10:35:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: plugin manifests can declare `skills`, and `loadPluginManifestRegistry()` preserves that metadata, but loaded runtime `PluginRecord`s were dropping it. - Why it matters: runtime/status consumers end up seeing an incomplete plugin record e

### #92937 fix(feishu): extract emoji-only from identity.emoji for card headers (fixes #55242)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:17:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## fix(feishu): extract emoji-only from identity.emoji for card headers (fixes #55242) The `identity.emoji` field can contain descriptive text alongside emojis (e.g. `"根据心情/语气自由切换 😊😅😄🤔😎😴🎉"`). Feishu card headers were displaying the raw field value verba

### #63380 fix(telegram): allow agentId in account config for multi-account routing

- bucket: needs_proof
- author: mraleko
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:26:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes regression where Telegram multi-account configs with `agentId` were rejected as 'must NOT have additional properties' after upgrading from 2026.4.5 to 2026.4.8. ## Root cause `agentId` was only defined in `TelegramTopicSchema` (for forum group

### #92948 #92546: fix(whatsapp): backup Baileys session credentials before clearing

- bucket: needs_proof
- author: qingminglong
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:27:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add automatic timestamped backup of Baileys session credentials in `logoutWeb()` before clearing, so plugin updates and unintended logouts no longer permanently destroy WhatsApp Web sessions. ## Root Cause When `openclaw plugins update whatsapp` run

### #66001 fix(process): reconcile orphaned bash exec runs

- bucket: needs_proof
- author: andydoucet
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T12:10:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a real `reconcileOrphans(...)` contract to the process supervisor - reconcile active managed runs against bash session ownership - invoke reconciliation before serving process-tool requests and after registering new exec sessions - add focused

### #92959 fix(model-fallback): coalesce repeated auth-class fallback decision logs to prevent auth expiry spam (fixes #56979)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T12:43:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: When a provider auth token expires, the model fallback loop calls `logModelFallbackDecision` for every failing candidate on every request, producing dozens of identical warn-level `model-fallback/decision` logs per second — flooding

### #92963 doctor: accept KeepAlive dict form in launchd service audit

- bucket: needs_proof
- author: dertbv
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T12:55:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The launchd plist audit (`src/daemon/service-audit.ts`) tests only the bare boolean form: ```ts const hasKeepAlive = /<key>KeepAlive<\/key>\s*<true\s*\/>/i.test(content); ``` So `openclaw doctor` reports **"LaunchAgent is missing KeepAlive=true"** for any plis

### #92933 fix(auto-reply): persist CLI and gap-fill assistant responses to transcript

- bucket: needs_proof
- author: Itsmeakash248
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T13:06:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Ensures that assistant responses from CLI backends (e.g. agy) and embedded gap-fills are persisted to the session transcript in the auto-reply path. Previously, these were returned to the user but not saved to the `.jsonl` file, causing them to disappear on pa

### #66720 fix: strip runtime-specific properties from sessions_spawn tool schema for provider compatibility

- bucket: needs_proof
- author: Gi99lin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:12:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When OpenClaw sends the `sessions_spawn` tool schema to non-native OpenAI-compatible providers (e.g., via proxy gateways like OmniRoute → MiniMax, Codex proxy, or other OpenAI-compatible endpoints), the schema includes **all** runtime-specific param

### #67420 feat(memory): per-agent dreaming control

- bucket: needs_proof
- author: aaronwong1989
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:16:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add ability to selectively enable/disable dreaming for specific agents, addressing OOM issues when all agents run dreaming simultaneously. ## Problem Gateway was killed by OOM Killer (exceeding 6GB MemoryMax) because all 13 agents ran dreaming simul

### #67623 fix: Change the scope of the variable SANDBOX_BACKEND_FACTORIES from …

- bucket: needs_proof
- author: earon-han
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: blank-template, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:18:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: …module-level to process-level global(#67610) ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <su

### #68257 fix(gateway): stop restarting gateway on OAuth token refresh (auth.profiles.*) [AI-assisted]

- bucket: needs_proof
- author: mkoslacz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:24:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Bug `buildGatewayReloadPlan()` in [`src/gateway/config-reload-plan.ts`](src/gateway/config-reload-plan.ts) treats any unmatched config path as a gateway restart trigger (existing test at L250: *"defaults unknown paths to restart"*). The reload rules list ha

### #68860 Agents: emit turn events from embedded sessions

- bucket: needs_proof
- author: 404notfoundhh
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:29:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Emit embedded Pi `turn_start` / `turn_end` events through OpenClaw's agent event pipeline so external observers can detect stable loop boundaries. ## Changes - handle `turn_start` and `turn_end` in `src/agents/pi-embedded-subscribe.handlers.ts` - ad

### #68927 ui(chat): show explicit qualified model refs

- bucket: needs_proof
- author: jckm14
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:29:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - show exact qualified provider/model refs in the model picker - stop collapsing them into friendlier but ambiguous labels - update tests to lock in the explicit behavior ## Why This is better for power users and debugging, but it is also a more opi

### #92978 refactor: consolidate duplicated escapeRegExp helpers

- bucket: needs_proof
- author: ericcurtin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:41:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Ten core modules each defined a byte-identical private regex-literal escape helper under varying names. They all used the same character class as the existing canonical helper in `src/shared/regexp.ts`: ```ts value.replace(/[.*+?^${}()|[\]\\]/g, "\\

### #63456 Scope workspace guidance to coding contexts

- bucket: needs_proof
- author: ImLukeF
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, maintainer, size: XL, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:06:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - scope repo-style workspace guidance to coding contexts only - stop injecting commit reminders for general assistant/product sessions - add tests covering coding vs non-coding prompt behavior ## Testing - pnpm exec vitest run src/agents/system-prom

### #55351 Preserve Open WebUI UUID sessions across Control UI

- bucket: needs_proof
- author: SHAREN
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:06:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve Open WebUI UUID chat ids instead of canonicalizing them to `agent:main:<uuid>` in the gateway session store - normalize `agent:main:<uuid>` back to the original bare UUID when the Control UI reads or writes chat URLs - pass agent context

### #92986 fix(onboard): skip Homebrew prompt on unsupported platforms

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:24:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Gate the Homebrew install recommendation behind a platform check so FreeBSD and other non-darwin/non-linux platforms no longer see a misleading brew prompt during onboarding. Previously, `needsBrewPrompt` used `process.platform !== "win32"` which al

### #64703 fix: parse scientific notation as number in parseConfigValue

- bucket: needs_proof
- author: Rahulkumar070
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:25:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `parseConfigValue` did not recognize scientific notation (e.g. `1e5`, `2.5e10`) as a number. The regex `/^-?\d+(\.\d+)?$/` only matched plain integers and decimals, so scientific notation was silently returned as a string instead of a num

### #64820 fix(feishu): break circular module init causing ReferenceError on group mention

- bucket: needs_proof
- author: Ricardo-M-L
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:26:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #64783 When mentioning (`@`) a bot in a Feishu group chat with multi-agent configuration, the gateway throws: ``` ReferenceError: Cannot access 'utils_1' before initialization ``` **Root cause:** `monitor.account.ts` statically imports `handle

### #91712 fix(logging): prune non-idle stale diagnostic session entries

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:55:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted (Claude). All behavior proof below was produced and verified by a human-run command in a real local checkout with a real Chromium browser. ## Summary - **Problem:** `pruneDiagnosticSessionStates()` in `src/logging/diagnostic-session-state.ts` onl

### #92764 fix(ui): render tool progress text from stream:item events

- bucket: needs_proof
- author: kangjinghang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:58:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem During long-running tool executions (e.g. a 5-minute analysis tool), webchat shows no interim progress — only the final result. Users see the tool card sit idle until completion. Tracing the full pipeline (SDK contract → runtime event wiring → runti

### #92975 #92595: fix(feishu): handle uninitialized runtime gracefully on inbound messages

- bucket: needs_proof
- author: qingminglong
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:59:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix issue #92595 — Feishu bot silently drops inbound user replies when the plugin runtime store was never initialized (config-selected plugin overrides bundled plugin, causing `setFeishuRuntime` to never be called). ## Root Cause When a user-configu

### #41265 fix(discord): preserve content-type and skip optimization for animated/WebP images

- bucket: needs_proof
- author: skidder
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: whatsapp-web, size: M, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:05:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Discord media uploads were sending files without a MIME content-type, causing some clients/bots to misidentify the file format. Additionally, WebP images were being converted to JPEG (losing quality) and animated images (GIF, WebP, AP

### #58679 feat(config): add provenance tracking and explain command

- bucket: needs_proof
- author: tejasghalsasi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:07:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds an initial config provenance surface to OpenClaw and exposes it through a new CLI command: - `openclaw config explain` - `openclaw config explain --json` The goal is to improve operator/debug UX by showing: - the active config path - wh
