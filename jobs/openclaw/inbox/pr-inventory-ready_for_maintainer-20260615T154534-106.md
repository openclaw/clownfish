---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-106
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
  - "#86608"
  - "#86649"
  - "#86670"
  - "#86674"
  - "#86676"
  - "#86776"
  - "#86893"
  - "#86900"
  - "#86913"
  - "#87061"
  - "#88908"
  - "#87121"
  - "#87205"
  - "#87231"
  - "#79568"
  - "#92340"
  - "#87343"
  - "#87414"
  - "#87449"
  - "#88935"
  - "#89154"
  - "#90970"
  - "#90975"
  - "#90986"
  - "#90989"
cluster_refs:
  - "#86608"
  - "#86649"
  - "#86670"
  - "#86674"
  - "#86676"
  - "#86776"
  - "#86893"
  - "#86900"
  - "#86913"
  - "#87061"
  - "#88908"
  - "#87121"
  - "#87205"
  - "#87231"
  - "#79568"
  - "#92340"
  - "#87343"
  - "#87414"
  - "#87449"
  - "#88935"
  - "#89154"
  - "#90970"
  - "#90975"
  - "#90986"
  - "#90989"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.214Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 106

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #86608 docs: add existing-solutions preflight guardrail

- bucket: ready_for_maintainer
- author: cablackmon
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:23:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a repo-root AGENTS.md rule requiring a lightweight existing-solutions check before custom builds - add the same reusable guardrail to default workspace AGENTS templates and the Kubernetes starter AGENTS config - keep wording scoped to open-sou

### #86649 fix: relay Claude CLI assistant partial messages as streaming deltas

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:24:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #86050 ## Summary Relay Claude CLI assistant records as streaming deltas so the WebChat UI shows progressive output instead of waiting for the full response. **Fix 1**: Parse `assistant` records from the Claude CLI JSONL stream and forward their text con

### #86670 Add Eden AI provider plugin

- bucket: ready_for_maintainer
- author: DinaAlSb
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T03:24:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add Eden AI as a bundled provider plugin. - Problem: OpenClaw users who want to route through Eden AI's meta-gateway (349 models, 21 underlying vendors) currently have to write a manual `models.providers.edenai` config and pick a base URL by hand. T

### #86674 feat: render cron job description as Summary in Control UI

- bucket: ready_for_maintainer
- author: mvanhorn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T03:25:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Cron jobs that carry a `description` now render it as a Summary section in the Control UI's job detail. Operators can see what a job is for without opening its source. What problem does this PR solve? Cron jobs have an optional `description` field o

### #86676 feat: configurable diagnostics.laneWaitWarnMs threshold

- bucket: ready_for_maintainer
- author: mvanhorn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:25:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `diagnostics.laneWaitWarnMs` is now configurable. The "lane wait exceeded" warning's 2-second floor was hard-coded, so contended lanes flooded the diagnostic log even when waits were within normal operating range. The default stays at 2_000 ms; user

### #86776 fix(models): apply provider policy defaults to inline models

- bucket: ready_for_maintainer
- author: kierandotai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:26:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - apply provider policy config defaults when building inline provider models - ensure Anthropic inline provider entries inherit the default `anthropic-messages` API - preserve model-level `api`/`baseUrl` precedence over provider-level defaults ## Re

### #86893 Fix isolated cron cold runner setup timeout

- bucket: ready_for_maintainer
- author: dredozubov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:31:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - let long isolated cron jobs wait up to 5 minutes for cold Codex runner setup - keep the existing 60s setup watchdog floor for short jobs - add regression coverage for the long-job watchdog window ## Tests - `node scripts/run-vitest.mjs src/cron/se

### #86900 fix(compaction): add circuit breaker to stop token burn when summarizer unavailable

- bucket: ready_for_maintainer
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:31:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the summarizer model is persistently unavailable (rate-limited, overloaded, misconfigured), `summarizeInStages` calls `summarizeWithFallback` for every split, each burning 3+ retries per call. With N splits, this burns N × 3 × chunkTokens befor

### #86913 fix(gateway): expose restart pending state

- bucket: ready_for_maintainer
- author: Dizesales
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, extensions: admin-http-rpc, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:31:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add read-only `gateway.restart.pending` state for restart/update guards - expose scheduled, preparing, active deferral, unconsumed signal, delay, reason, and deferral timeout state - register the method as `operator.read`, expose it through admin 

### #87061 feat(agents): add top-level subsystem logger

- bucket: ready_for_maintainer
- author: caulslorenzo1-png
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:35:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `src/agents/log.ts` exporting a `SubsystemLogger` for the `"agents"` subsystem - Follows the existing pattern of `src/agents/cli-runner/log.ts` and `src/agents/pi-embedded-runner/logger.ts` - Wires `agent-command.ts` as the first caller via `

### #88908 fix(gateway): force exit on zombie shutdown + 503 healthz during shutdown

- bucket: ready_for_maintainer
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:35:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On rh-bot.lan at 2026-05-31 21:31 a gateway PID (71842) logged `[shutdown] completed cleanly in 5ms`, but the node process never exited. It held port 18789 for 2h13m. Every subsequent launchd-spawned gateway then took the lock-recovery path: probe `

### #87121 test(cli): add banner emission reset helper

- bucket: ready_for_maintainer
- author: lizuju
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:36:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Add a CLI banner testing reset helper for the module-level emission guard. - Cover same-module reset/re-emit behavior in banner tests. Fixes #83903 ## Real behavior proof Behavior addressed: CLI banner module state can now be reset in the same loade

### #87205 fix: avoid gateway daemon repair on protocol mismatch

- bucket: ready_for_maintainer
- author: rifachnia
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, commands, size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:38:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Detect protocol mismatch explicitly during doctor gateway health checks * Avoid treating incompatible running gateways as dead/stale gateways * Skip daemon repair flow for protocol mismatch states * Add regression coverage for protocol mismatch ha

### #87231 feat(feishu): include reply context in comment auto replies

- bucket: ready_for_maintainer
- author: wittam-01
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:39:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu document comment auto replies did not carry source-reply context into the Drive comment write requests, so the receiving side could not distinguish which original comment reply triggered an automatic follow-up. - Why it matters: co

### #79568 docs(vps): move related links into standard Related section

- bucket: ready_for_maintainer
- author: GGzili
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:54:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Move the VPS page's inline `Related pages:` links into the existing `## Related` section - Keep the Gateway remote access and Platforms hub links available from the page - Verify internal docs links still pass the repository docs-link audit ## Rea

### #92340 feat(feishu): handle VC meeting invites

- bucket: ready_for_maintainer
- author: Ren1104
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:56:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Register Feishu `vc.bot.meeting_invited_v1` in the bundled `feishu` monitor dispatcher. - Convert valid VC meeting invite events into synthetic inbound Feishu direct-message turns from the inviter, reusing the existing DM pairing, allowlist, dynam

### #87343 feat(cron): surface fallback progress

- bucket: ready_for_maintainer
- author: riosbotchen-source
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, scripts, commands, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:06:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop already-admitted model fallback chains from losing their embedded cron fallback candidate when Gateway drain begins; new queue enqueues still reject during drain. - Carry the drain-continuation state through `LiveSessionModelSwitchError` redi

### #87414 [codex] Key llama.cpp sessions for local reuse

- bucket: ready_for_maintainer
- author: ezcoder
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:10:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a narrow OpenClaw wrapper for the `llama-cpp-turboquant` provider that injects stable `cache_key` and `session_id` values into OpenAI-compatible request payloads. The key is derived from the OpenClaw session key when available, falling back to 

### #87449 fix(mattermost): preserve text-block boundaries in draft preview (#87322)

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: mattermost, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:12:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #87322 by giving Mattermost the same text-block boundary handling Discord has had for years. Today the draft preview edits a single post across every phase of a tool-heavy turn, so earlier text blocks disappear before the user reads them — Iss

### #88935 fix(agent): load shared tools bootstrap instructions

- bucket: ready_for_maintainer
- author: mantisai-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, cli, scripts, agents, size: M, extensions: memory-wiki, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:13:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Auto-load `TOOLS_SHARED.md` as an optional workspace bootstrap file. - Route `TOOLS_SHARED.md` through Codex inherited developer instructions alongside `TOOLS.md`. - Allow the intended workspace-local symlink shape: `<agent>/TOOLS_SHARED.md -> ../

### #89154 feat(hooks): add ACP turn transcript save hook

- bucket: ready_for_maintainer
- author: mantisai-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, commands, agents, size: XL, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T04:20:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a separate `agent:turn:transcript:save` internal hook event for the ACP turn transcript save phase. This PR is scoped to transcript-save durability outcomes and does not include the sibling `agent:turn:end` lifecycle hook from #89152. ## Curren

### #90970 i18n(fr): expand French glossary with page titles and common terms

- bucket: ready_for_maintainer
- author: notadev99
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T04:21:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Expands `docs/.i18n/glossary.fr.json` from 19 to 52 entries. The French glossary previously held only proper nouns kept in English (OpenClaw, CLI, Gateway, etc.), so the translation pipeline had no guidance for how to render descriptive page titles or 

### #90975 feat(google): add Antigravity CLI backend

- bucket: ready_for_maintainer
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, extensions: google, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:21:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a Google Antigravity CLI runtime backend that delegates OAuth and execution to the local `agy` binary while keeping the user-facing model identity on the existing Google provider. Fixes #84527. ## Scope Plugin surface: - `extensions/google/cli-

### #90986 feat(fs): allow configured workspace aliases

- bucket: ready_for_maintainer
- author: stevenepalmer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:22:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - `tools.fs.workspaceOnly=true` currently rejects workspace symlink parents whose realpath lands outside the agent workspace. That blocks memory flushes for setups where `memory/` is intentionally shared outside the 

### #90989 fix(channels): recover stale ingress queue claims at gateway startup

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:22:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #90945 — after a gateway crash, `channel_ingress_events` rows left in `claimed` state are never recovered. Every new message into the affected session adds another stuck claim, silently deadlocking the channel (observed with Te

