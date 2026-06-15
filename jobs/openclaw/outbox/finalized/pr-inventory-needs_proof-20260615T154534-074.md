---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-074
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
  - "#89695"
  - "#89696"
  - "#89702"
  - "#89719"
  - "#93247"
  - "#89754"
  - "#52236"
  - "#89768"
  - "#89772"
  - "#92086"
  - "#89491"
  - "#89645"
  - "#89796"
  - "#93241"
  - "#93244"
  - "#89687"
  - "#90579"
  - "#90770"
  - "#90779"
  - "#90817"
  - "#90827"
  - "#90828"
  - "#90887"
  - "#91315"
  - "#91479"
cluster_refs:
  - "#89695"
  - "#89696"
  - "#89702"
  - "#89719"
  - "#93247"
  - "#89754"
  - "#52236"
  - "#89768"
  - "#89772"
  - "#92086"
  - "#89491"
  - "#89645"
  - "#89796"
  - "#93241"
  - "#93244"
  - "#89687"
  - "#90579"
  - "#90770"
  - "#90779"
  - "#90817"
  - "#90827"
  - "#90828"
  - "#90887"
  - "#91315"
  - "#91479"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.209Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 74

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89695 feat(ui): add chat media download controls

- bucket: needs_proof
- author: lily-oc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:18:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds first-class chat attachment rendering for rich assistant media: - audio attachments render with an inline player and Download/Open actions - video attachments render with an inline player and Download/Open actions - PDF/document attachments get

### #89696 feat(tools): add low-memory tool guard

- bucket: needs_proof
- author: lily-oc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:18:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a low-memory guard around tool calls so OpenClaw can fail early with a clear message before a tool launch makes host memory pressure worse. - introduces a `/proc/meminfo`-based memory snapshot helper - adds configurable minimum available memory

### #89702 fix(gateway): allow macOS app platform version refresh without re-pairing

- bucket: needs_proof
- author: EaveLuo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:18:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - macOS app enters infinite "Approve this Mac app to control OpenClaw" dialog loop after an OS update (e.g. macOS 26.5.0 → 26.5.1) - Root cause: `resolvePinnedClientMetadata` treats any macOS platform version change as a `platformMismatch`, triggeri

### #89719 fix(cron): prune isolated-target cron sessions in session reaper

- bucket: needs_proof
- author: LiLan0125
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:19:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `isCronRunSessionKey` only matches cron session keys containing `:run:` (`cron:jobId:run:runId`). Isolated-target cron jobs (`sessionTarget: isolated`) generate base session keys without `:run:` (`cron:jobId`), so the reaper never matched or prune

### #93247 fix(diagnostics): prune non-idle ghost entries after failed stuck-session recovery

- bucket: needs_proof
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:19:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When stuck-session recovery fails (`status: "failed"`), `recoveryOutcomeMutatesSessionState()` returns `false` → the diagnostic entry stays in `"processing"` / `"waiting"` state permanently. The existing prune path only evicts `idle` entries, so the

### #89754 fix(status): render sub-1000 token counts as integers (#89735)

- bucket: needs_proof
- author: TUARAN
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:20:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix [#89735](https://github.com/openclaw/openclaw/issues/89735). `formatKTokens` in `src/commands/status.format.ts` always divides by 1000 and appends `k`, so sub-1000 values render as misleading fractional thousands. The worst case is `999 → "1.0k"

### #52236 fix(mattermost): persist threadId in delivery context for all session types

- bucket: needs_proof
- author: teconomix
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:21:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a cron job or heartbeat wakes a thread-scoped Mattermost session, the reply lands at the channel root instead of in the thread. ## Root Cause `updateLastRoute` in `monitor.ts` was guarded by `if (kind === "direct")`, so delivery context (includ

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

### #92086 security: add Security Matrix runtime-fact audit model

- bucket: needs_proof
- author: jason-allen-oneal
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:21:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a Security Matrix runtime-fact evaluator. - Models actor, influence source, tool capability, approval state, and operator policy as separate inputs. - Adds default policy data, a deterministic evaluator, tool capability resolution, an audit-e

### #89491 fix(openai): harden Codex OAuth callback cleanup

- bucket: needs_proof
- author: abnershang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: openai, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:21:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #81865. This updates the OpenAI ChatGPT/Codex OAuth flow to cover the failures reproduced locally: - token exchange and refresh use a host-scoped fake-IP SSRF policy for `auth.openai.com`, so proxy stacks that resolve public OpenAI hosts into 

### #89645 fix(update): respect explicit beta channel without fallback to latest

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:22:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixed an issue where `openclaw update --channel beta` would not return the latest beta version when the stable version had a higher semantic version number. When a user explicitly specifies `--channel beta`, the code now returns the beta tag version

### #89796 IDR-msteams-aad-sender-identity: feat(msteams): add AAD sender identi…

- bucket: needs_proof
- author: rrajp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:22:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** When using OpenClaw with Microsoft Teams, the agent has no visibility into the sender's organizational identity (department, job title, email). This makes persona-aware routing and responses impossible without ex

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

### #89687 fix(feishu): scope queues by topic sessions

- bucket: needs_proof
- author: hanhuihanhui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:27:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Why does this matter now? What is the intended outcome? What is intentionally out of scope? What does success look like? What should reviewers focus on? <details> <summary>Summary guidance</summary> This PR descripti

### #90579 fix: allow trusted host-read html after outbound staging

- bucket: needs_proof
- author: wangwllu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T10:32:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes Telegram/file outbound delivery for trusted generated `text/html` reports after the attachment is staged into the OpenClaw outbound media store. PR #87982 allowed generated HTML reports under the OpenClaw temp root, but the live outbound flow 

### #90770 fix(ui): thread agent scope through Skill Workshop proposals

- bucket: needs_proof
- author: joelnishanth
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:32:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Fix:** Skill Workshop GUI shows no proposals when using a non-default agent, while CLI `openclaw skills workshop --agent <id> list` works correctly - **Root cause:** `loadSkillWorkshopProposals` called `skills.proposals.list` with `{}` (no `agen

### #90779 fix(channels): restart gateway when channels.start fails for unloaded plugin

- bucket: needs_proof
- author: joelnishanth
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:32:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90296 After `openclaw channels login --channel <plugin-channel>`, the CLI calls `channels.start` to reconcile the running gateway. If the channel plugin was installed or enabled **after** the gateway started, the plugin is not in the gateway'

### #90817 fix(agents): apply stale-run liveness check to aborted subagent orphan recovery

- bucket: needs_proof
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:33:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix #90766: stale subagent runs (>2h) with `abortedLastRun: true` were exempt from stale-unended pruning, causing very old aborted child sessions to be resurrected after long gateway downtime. Changes: - **`subagent-registry-helpers.ts`**: Remove th

### #90827 fix(memory-core): surface empty narrative generation instead of silent fallback (#90781)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:33:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Bug**: `memory-core` narrative generation logs a bare `WARN` ("produced no text") and silently writes a placeholder fallback diary entry whenever the subagent session returns no assistant text — operators cannot tell whether the model returned a

### #90828 fix(mac-gateway): route launchd plist stderr to log file instead of /dev/null (#90711)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:33:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - bug: post-5.28 generated `~/Library/LaunchAgents/ai.openclaw.gateway.plist` hardcoded `StandardErrorPath` to `/dev/null`, silently discarding all gateway stderr (prompt-cache diagnostics, model fallback warnings, liveness warnings) - fix: drop the

### #90887 fix(cron): route failure alerts to thread ids

- bucket: needs_proof
- author: azhangd
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, agents, size: L, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:33:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #89848 by adding per-job `failureAlert.threadId` through cron schemas, CLI edit, storage, gateway send plumbing, and agent tool exposure. - Route announce failure alerts to the explicit thread id, or inherit the primary delivery thread only 

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

