---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-046
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
  - "#89768"
  - "#89772"
  - "#89645"
  - "#93241"
  - "#93244"
  - "#91315"
  - "#91479"
  - "#55018"
  - "#55211"
  - "#55487"
  - "#55644"
  - "#55766"
  - "#55789"
  - "#56258"
  - "#56861"
  - "#57597"
  - "#58051"
  - "#58482"
  - "#59013"
  - "#68590"
  - "#71887"
  - "#72535"
  - "#72749"
  - "#75011"
  - "#75024"
cluster_refs:
  - "#89768"
  - "#89772"
  - "#89645"
  - "#93241"
  - "#93244"
  - "#91315"
  - "#91479"
  - "#55018"
  - "#55211"
  - "#55487"
  - "#55644"
  - "#55766"
  - "#55789"
  - "#56258"
  - "#56861"
  - "#57597"
  - "#58051"
  - "#58482"
  - "#59013"
  - "#68590"
  - "#71887"
  - "#72535"
  - "#72749"
  - "#75011"
  - "#75024"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.796Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 46

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89768 fix(mattermost): merge progress preview lines by identity instead of full overwrite

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:21:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Mattermost progress preview was overwriting the entire draft post on every tool/progress frame instead of merging updates by line identity, unlike every other streaming channel. See #89761. ## Changes 1. `draft-stream.ts`: Added `buildMattermostProg

### #89772 fix(webchat): keep context indicator visible with stale token data

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:21:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the context usage indicator disappearing after sending a message in the webchat Control UI. The indicator was hidden when `totalTokensFresh` was set to false during a run, even though we had valid token count data. ## Changes - Modified `getCo

### #89645 fix(update): respect explicit beta channel without fallback to latest

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:22:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixed an issue where `openclaw update --channel beta` would not return the latest beta version when the stable version had a higher semantic version number. When a user explicitly specifies `--channel beta`, the code now returns the beta tag version

### #93241 fix(agents): classify Zhipu GLM overload as overloaded for failover

- bucket: needs_proof
- author: 0xghost42
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:24:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Model fallback (`agents.defaults.model.fallbacks`) never triggered when Zhipu (GLM) returned its overload error, so the run failed outright instead of failing over. Zhipu returns **HTTP 200** with the error in the body: ``` [1305][该模型当前访问量过大，请您稍后再试]

### #93244 feat(auto-reply,codex): lightweight reply lane and Codex watchdog

- bucket: needs_proof
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, extensions: codex, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:24:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a conservative lightweight reply lane for obvious low-risk text-only chat replies - keep uncertain, tool/action, media/link, high-stakes, code/config, and unresolved reply-target messages on the full path - add a Codex initial-progress watchdo

### #91315 fix(agents): expose sessions_spawn in embedded mode when allowAgents is configured

- bucket: needs_proof
- author: LiLan0125
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:35:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - In embedded mode (TUI, `--local`), the `sessions_spawn` tool was unconditionally excluded unless `allowGatewaySubagentBinding` was explicitly set. - This made `agents.defaults.subagents.allowAgents` silently ineffective for TUI users — the tool wa

### #91479 fix(acp): preserve timeout progress summaries

- bucket: needs_proof
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:36:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve partial streamed progress as the terminal summary when parented managed ACP turns hit the OpenClaw-owned timeout. - Check timeout status before required-completion progress-only inference so text like `I'll inspect the repo now.` is prese

### #55018 fix: avoid O(N²) shallow-copy in mapSensitivePaths schema traversal

- bucket: needs_proof
- author: xdhuangyandi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:42:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `mapSensitivePaths` performed `{ ...hints }` shallow copy on every recursive call while traversing the Zod schema tree, resulting in O(N²) allocation overhead. - **Why it matters:** For the full `OpenClawSchema` tree (hundreds of node

### #55211 fix: prevent re-entrant loop in internal hook trigger

- bucket: needs_proof
- author: ggzeng
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:42:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes re-entrant infinite loop in `triggerInternalHook` when a handler calls `triggerInternalHook` again with the same `type:action:sessionKey` combination. Fixes #55211 ## Problem Before this fix, if a hook handler (e.g., `command:new`) triggered t

### #55487 fix(gateway): survive transient network/TLS errors in uncaughtException handler

- bucket: needs_proof
- author: sfwn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:42:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The `uncaughtException` handler exits unconditionally on any error, but transient network/TLS errors (e.g. `Client network socket disconnected before secure TLS connection was established`) are non-fatal I/O failures that should not crash the gatewa

### #55644 chore: add .history/ to .gitignore

- bucket: needs_proof
- author: Mephistofer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:42:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Description Add `.history/` to `.gitignore` to exclude editor-generated history files. ## Motivation Trae and other code editors automatically create a `.history/` directory for local file versioning. This directory should not be committed to the repository

### #55766 feat(acp): forward image blocks in tool call results

- bucket: needs_proof
- author: David553
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:43:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `extractToolCallContent()` in the ACP event mapper previously only extracted `type: "text"` blocks from tool results, silently dropping image content blocks - ACP clients (Feishu, Discord, etc.) could not display images produced by tools (e.g. the

### #55789 fix(gateway): block internal HTTP session overrides

- bucket: needs_proof
- author: RichardCao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:43:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - reject explicit `x-openclaw-session-key` overrides that target internal namespaces like `subagent:`, `acp:`, or `cron:` - return a 400 `invalid_request_error` from the OpenAI and OpenResponses HTTP endpoints instead of passing those keys into owne

### #56258 fix(gateway): add per-subsystem timeouts to shutdown close handler

- bucket: needs_proof
- author: p3nchan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:43:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - A single hung subsystem `stop()` call (e.g. Telegram polling stuck during network recovery) can consume the entire 25 s `SHUTDOWN_TIMEOUT_MS` budget, preventing remaining subsystems from cleaning up and forcing users to `kill -9` the gateway proce

### #56861 feat(signal): reply-target media, structured mentions, and data URI attachments

- bucket: needs_proof
- author: joe2643
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: signal, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:44:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Signal channel lacks reply-target media support, structured mention detection, and remote signal-cli attachment handling - Why it matters: Users replying to media messages lose context; mention detection is basic; remote signal-cli setups

### #57597 fix(acp): persist spawn labels in target session store

- bucket: needs_proof
- author: guanyu-zhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:44:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: `/acp spawn ... --label <name>` persisted the spawned ACP session metadata into the target agent store, but tried to persist the label into the requester store. - Why it matters: Cross-agent AC

### #58051 fix: primary probe should not consume transient probe slot for same-provider fallbacks

- bucket: needs_proof
- author: Nicholasweng
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:44:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the primary model is in cooldown and gets probed (near expiry), the probe failure marks the provider in `cooldownProbeUsedProviders`. This blocks same-provider fallback candidates from getting their own probe attempt, causing the fallback chain

### #58482 fix(memory-host): add AbortSignal support to batch polling (OpenAI, Voyage, Gemini)

- bucket: needs_proof
- author: ViagraFixesMyBug
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:45:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add AbortSignal support to batch polling loops to enable immediate cancellation when clients disconnect. Problem When HTTP clients disconnect during batch embedding operations, server-side polling continues until timeout, wasting API quota. Solution - Replace

### #59013 fix: tolerate EPERM in session write-lock on Windows

- bucket: needs_proof
- author: He-Pin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:45:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - On Windows, `fs.open(path, "wx")` can throw `EPERM` instead of `EEXIST` when another process holds the lock file open (Windows mandatory file locking). This causes an unhandled promise rejection crash in `acquireSessionWriteLock`. - Treat `EPERM`

### #68590 fix(memory-core): rewrite qmd index on managed collection repair

- bucket: needs_proof
- author: imadal1n
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:46:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - rewrite `index.yml` before ensuring managed QMD collections - reuse `ensureCollections()` during managed collection repair instead of hand-rolling remove/add loops - keep repair behavior aligned with the normal collection bootstrap path ## Why The

### #71887 fix(channels): remove stale --deep guidance

- bucket: needs_proof
- author: yangxiyucs
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:46:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - remove stale `--deep` guidance from `channels status` help and runtime tips - clarify that broader gateway health probes live on top-level `openclaw status --deep` - add a regression test covering the config-only status footer ## Why `openclaw cha

### #72535 fix(config): add actionable hints to version-mismatch warning on downgrade

- bucket: needs_proof
- author: Schlaflied
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:46:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a user downgrades from a newer OpenClaw version (e.g. 2026.4.24 → 2026.3.2), `openclaw.json` may contain keys and value formats written by the newer binary that are invalid in the older schema. The gateway currently emits: > Config was last wri

### #72749 Fix: Compact inbound metadata

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:47:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #75011 pairing.md documents that commands are dropped during the pending st…

- bucket: needs_proof
- author: Angfr95
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:47:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Problem: pairing.md documents that commands are dropped during the pending state but provides no operator guidance for recovery. Solution: add a Troubleshooting section covering commands dropped before pairing approval, pending requests not appearing, and stal

### #75024 fix(feishu): preserve threads without root_id

- bucket: needs_proof
- author: stevenchouai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:47:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve Feishu threaded reply grouping when message events omit `root_id` - Fall back to `reply_target_message_id`, `parent_id`, then `upper_message_id` as the best available root message anchor - Add coverage for the fallback order and include `
