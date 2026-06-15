---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-052
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
  - "#68685"
  - "#68785"
  - "#68801"
  - "#68833"
  - "#68857"
  - "#88425"
  - "#88529"
  - "#93302"
  - "#88915"
  - "#89086"
  - "#89387"
  - "#89447"
  - "#89467"
  - "#89484"
  - "#89687"
  - "#90966"
  - "#90969"
  - "#90990"
  - "#90997"
  - "#91002"
  - "#91015"
  - "#91050"
  - "#91140"
  - "#91156"
  - "#91157"
cluster_refs:
  - "#68685"
  - "#68785"
  - "#68801"
  - "#68833"
  - "#68857"
  - "#88425"
  - "#88529"
  - "#93302"
  - "#88915"
  - "#89086"
  - "#89387"
  - "#89447"
  - "#89467"
  - "#89484"
  - "#89687"
  - "#90966"
  - "#90969"
  - "#90990"
  - "#90997"
  - "#91002"
  - "#91015"
  - "#91050"
  - "#91140"
  - "#91156"
  - "#91157"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.797Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 52

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #68685 fix(config): strip obsolete memorySearch keys before schema validation (#68664)

- bucket: needs_proof
- author: Tmalone1250
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:05:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: Obsolete `memorySearch` keys (`chunkSize`, `chunkOverlap`, `maxResults`) in `agents.defaults` cause schema validation to fail because the current migration path moves the root key but fails to strip stale sub-keys before `validateConf

### #68785 feat: add circuit breaker for command lane saturation

- bucket: needs_proof
- author: chrisabad
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:06:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add `CommandLaneCircuitBreakerError` and opt-in circuit breaker options (`circuitBreakerDepth`, `circuitBreakerWaitMs`) to `enqueueCommandInLane`. Enable by default for the main run lane: depth >= 9 or oldest queued entry wait >= 600s triggers the b

### #68801 Gateway: prune orphaned agentRunStarts entries

- bucket: needs_proof
- author: CuzG-lab
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:06:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `pruneAgentRunCache()` clears `agentRunCache` entries on TTL but never touches the sibling `agentRunStarts` map, so timestamps for runs that lose their terminal lifecycle event (crash, race, forced disconnect) accumulate forever. - Why it

### #68833 fix(telegram): preserve customCommands priority in menu budget trimming

- bucket: needs_proof
- author: ayeshakhalid192007-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:06:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What & Why Telegram `customCommands` defined by operators were silently dropped on startup whenever the combined native + plugin + custom command list exceeded Telegram's 100-command or 5700-char `setMyCommands` payload cap. `allCommandsFull` was assembled

### #68857 feat: add gateway.nodes.invokeTimeoutMs config option

- bucket: needs_proof
- author: tianhaocui
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:06:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #68090 ## Summary The `node.invoke` timeout was hardcoded to 30 seconds with no way to configure it. Users running long operations through node commands had to accept the fixed timeout. ## Changes 1. **`src/config/types.gateway.ts`** — Added `invokeTimeo

### #88425 fix(acp): assemble prompts with context engine

- bucket: needs_proof
- author: Mijamind719
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:08:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - run ACP dispatch prompts through the active context engine before `acpManager.runTurn` - keep ACP transcript persistence on the original prompt text so injected context is not written into user history - add regression coverage for context-engine

### #88529 fix(update): warn when exact package tag is unpublished

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:09:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes `openclaw update --dry-run --tag <exact-version>` so exact npm version targets are verified against the npm registry before dry-run reports a resolved `targetVersion`. - If the exact version is not published yet, dry-run now leaves `targetVe

### #93302 fix(daemon): avoid stale SUDO_USER redirecting systemctl away from root's user scope (fixes #81410)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:09:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: When running `openclaw gateway stop/start/status` from a root shell that has stale `SUDO_USER`/`SUDO_UID`/`SUDO_GID` from a previous sudo escalation, the CLI targets the sudo user's systemd user scope instead of root's user manager,

### #88915 fix(macos): skip redundant defaults suite

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:09:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Avoid opening a redundant `UserDefaults(suiteName:)` domain when the running macOS app bundle identifier already matches OpenClaw's stable launchd/defaults label. - Keep the existing Nix-mode fallback for app builds whose bundle identifier differs

### #89086 fix(browser): preserve HTTP status in node-proxied browser errors

- bucket: needs_proof
- author: rhclaw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: refactor-only, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:10:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The node browser proxy (`runBrowserProxyCommand` in `extensions/browser/src/node-host/invoke-browser.ts`) collapsed a `>= 400` browser-route response into `new Error(<body.error>)`, **dropping the HTTP status**. - That error crosses the `node.invo

### #89387 fix(agents): dedupe transcript rewrite suffix replay

- bucket: needs_proof
- author: dripsmvcp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:11:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Context-overflow recovery re-runs transcript suffix replay without a replay-identity guard, so byte-identical `role=user` entries are re-appended on every recovery pass and the persisted session JSONL accumulates duplicate messages (issue #66443). -

### #89447 fix(status): show live channel state in fast status

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:12:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #89467 Clean up partial downloads on failure

- bucket: needs_proof
- author: JJH-Hacker
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:12:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When downloadFile() fails during a network error, a partially downloaded archive may be left on disk. This change adds cleanup logic directly inside downloadFile() so that failed downloads automatically remove the incomplete destination file before

### #89484 Fix: gateway restart detects npm package version updates

- bucket: needs_proof
- author: FUSHENG66866
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:13:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n\nFix the `/restart` command so that when the globally-installed npm package has been updated (e.g. `npm update -g openclaw`), the gateway performs a **full process restart** instead of a SIGUSR1 in-process reload. SIGUSR1 only reloads runtime stat

### #89687 fix(feishu): scope queues by topic sessions

- bucket: needs_proof
- author: hanhuihanhui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:14:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Why does this matter now? What is the intended outcome? What is intentionally out of scope? What does success look like? What should reviewers focus on? <details> <summary>Summary guidance</summary> This PR descripti

### #90966 fix(feishu): report transport activity (connected/lastEventAt) for health monitor

- bucket: needs_proof
- author: Acache
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T14:17:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Description fix(feishu): report transport activity (connected/lastEventAt) for health monitor feishu channel never published transport-level status such as connected, lastConnectedAt, lastEventAt, or lastTransportActivityAt. This meant the gateway's channel

### #90969 [codex] fix discord missing voice state handling

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:17:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat Discord Unknown Voice State/404 lookups as an absent voice state instead of a CLI/gateway error. - Add focused regression coverage for active, absent, 404, and unrelated REST failure paths. ## Validation - node scripts/run-vitest.mjs run --c

### #90990 fix(agents): use appropriate log levels in model-resolver fallback paths

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:18:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix severity misclassification of log statements in `model-resolver.ts` fallback paths. This is a follow-up to the log-level cleanup in `tools-manager.ts` and `resource-loader.ts` (PR #89982), completing the same fix pattern across the remaining aff

### #90997 fix(telegram): keep tool progress after non-final commentary

- bucket: needs_proof
- author: wsyjh8
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:18:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary In non-persist `progress` streaming mode with `streaming.progress.commentary` enabled, Telegram drops the tool-progress lines that follow inter-tool commentary: the live progress draft shows the model's "Let me check X…" commentary, but the subseque

### #91002 fix(tui): show last tool-error summary on aborted runs

- bucket: needs_proof
- author: wsyjh8
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T14:18:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a run ends while looping on tool-call validation errors, the TUI previously showed only `run aborted`, making a validation-failure loop indistinguishable from a model crash, a network timeout, or a context-overflow abort. This surfaces the last

### #91015 fix(sandbox): bound Docker exec with a deadline so a wedged engine can't hang the gateway

- bucket: needs_proof
- author: wsyjh8
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, docker, agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:19:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What / why A present-but-unresponsive Docker engine (the socket accepts the connection but never answers — distinct from "daemon not running", which returns a stderr quickly) makes `docker …` emit nothing and never exit. `execDockerRaw` awaited that child w

### #91050 fix(active-memory): keep a runnable iMessage channel so memory thread key builds

- bucket: needs_proof
- author: 7thfloorindustries
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:19:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **Problem** — Active memory stops persisting iMessage conversations. On the iMessage (bluebubbles) path the inbound channel id is a *scoped* conversation id (`imessage:group:<peerId>`, `sms:...`, `chat_guid:...`). The `isRunnableChannelName()` guard (which rej

### #91140 Project channel activity into gateway health snapshots

- bucket: needs_proof
- author: unknown7751
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, commands, size: M, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T14:21:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes openclaw/openclaw#90985. ## Summary Project recorded channel activity timestamps into gateway health snapshots so the health/status surface reflects known inbound and outbound activity. - **Fresh snapshots** fill `lastInboundAt` and `lastOutboundAt` from

### #91156 fix(telegram): route outbound sends through configured default account (#61012)

- bucket: needs_proof
- author: sumitaich1998
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:21:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary With multiple Telegram bot accounts configured, outbound sends via `openclaw message send --channel telegram` (and proactive/subagent sends) ignored the configured default account and always routed through the implicit env/top-level `"default"` bot.

### #91157 fix: stabilize claude-cli extraSystemPromptHash across group turns (#69118)

- bucket: needs_proof
- author: sumitaich1998
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:21:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On the `claude-cli` backend, agent sessions reset on **every turn transition** in group-style channels (Discord channels, Telegram groups, etc.). Turn 2 is generated against a fresh `claude -p` with no memory of turn 1, so the agent appears to have
