---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-036
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
  - "#84036"
  - "#84072"
  - "#84111"
  - "#84122"
  - "#84123"
  - "#84248"
  - "#84280"
  - "#84300"
  - "#84325"
  - "#84334"
  - "#84424"
  - "#83874"
  - "#93101"
  - "#93099"
  - "#76386"
  - "#78071"
  - "#78815"
  - "#78827"
  - "#79185"
  - "#83095"
  - "#83160"
  - "#83274"
  - "#84292"
  - "#84441"
  - "#84501"
cluster_refs:
  - "#84036"
  - "#84072"
  - "#84111"
  - "#84122"
  - "#84123"
  - "#84248"
  - "#84280"
  - "#84300"
  - "#84325"
  - "#84334"
  - "#84424"
  - "#83874"
  - "#93101"
  - "#93099"
  - "#76386"
  - "#78071"
  - "#78815"
  - "#78827"
  - "#79185"
  - "#83095"
  - "#83160"
  - "#83274"
  - "#84292"
  - "#84441"
  - "#84501"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.793Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 36

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #84036 feat(cli): suggest closest command for unknown subcommands (#83999)

- bucket: needs_proof
- author: 0xghost42
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:50:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #83999. ## Summary \`openclaw upate\` and \`openclaw upgrade\` previously failed with a generic \`OpenClaw does not know the command "upate".\` and left the user to inspect \`openclaw --help\` manually. This change appends npm-style \`Did you mean this?

### #84072 [codex] Add model fallback circuit breaker

- bucket: needs_proof
- author: wiatrM
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:51:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an in-memory per provider/model circuit breaker to model fallback - skip an open model circuit with `circuit_open` and HTTP 503 so fallback can move to the next candidate - reset circuit state on candidate success and add focused unit coverage

### #84111 feat (auth): offer interactive repair for undecryptable legacy agent OAuth sidecars

- bucket: needs_proof
- author: bdjben
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: L, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:51:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - detect undecryptable legacy OAuth sidecars for non-main agent auth stores during doctor/update auth health checks - show affected non-main agent ids and auth/sidecar paths, explain that choosing no preserves custom per-agent auth, and prompt with

### #84122 fix(feishu): use middle-dot separator in card note footer

- bucket: needs_proof
- author: bugkill3r
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:52:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Feishu's card markdown renderer parses 'Agent: name' as definition-list syntax and hoists the agent name to the top of the rendered message. Switch the key/value separator from ': ' to ' · ' so the footer stays in the footer. Closes #59360 ## Summary Describe

### #84123 feat(google-vertex): support per-model location override

- bucket: needs_proof
- author: bugkill3r
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:52:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Vertex AI requires different regional endpoints for different models under the same GCP project (preview models need 'global', GA models need regional like 'us-central1'). Add a per-model 'location' field to the model entry config so different google-vertex mo

### #84248 [codex] isolate heartbeat context-engine session keys

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, extensions: codex, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:55:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: isolated heartbeat runs kept a stable `:heartbeat` routing key everywhere, so context-engine lifecycle hooks could still associate later ticks with prior heartbeat state. - Solution: preserve the stable routing `SessionKey`, but forward a

### #84280 fix: handle SIGUSR1 restart on Windows where the signal is unsupported

- bucket: needs_proof
- author: Thatgfsj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:55:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On Windows, `process.kill(pid, "SIGUSR1")` throws `TypeError [ERR_UNKNOWN_SIGNAL]: Unknown signal: SIGUSR1` because SIGUSR1 is a Unix-only signal. This broke `openclaw gateway restart` for unmanaged gateway processes on Windows. ## Changes ### 1. `s

### #84300 fix(discord): stop typing keepalive on message_tool_only delivery (#84276)

- bucket: needs_proof
- author: Rohang2005
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, agents, size: M, extensions: codex, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:56:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: in `message_tool_only` source-reply mode the Discord typing bubble keeps showing for ~10s after the reply has already landed in the channel. - Solution: add an explicit "source reply delivered" signal so the typing keepalive is sealed the

### #84325 fix(signal): mark slash text as command source

- bucket: needs_proof
- author: sebastian-openclaw
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: signal, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:56:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Signal text messages that start with `/` currently carry `CommandBody` and `CommandAuthorized`, but they do not mark the inbound context as a text command source. After the command-turn normalization changes, that leaves Signal slash messages classi

### #84334 fix(gateway): mark SIGUSR1 token consumed on restartIntent path, reset stale tokens on in-process restart

- bucket: needs_proof
- author: 6a6f686e6e79
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:56:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `update.run` from the control UI downloads the new package but the gateway never restarts to pick it up. Every attempt logs `restart coalesced (already in-flight)` and is silently dropped for the lifetime of the process. ### Root cause Two bugs comb

### #84424 fix(doctor): honor per-agent bootstrap profile in size check

- bucket: needs_proof
- author: kasangyong
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🦐 gold shrimp, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:57:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted: drafted with Claude Code. Bug discovery, fix, regression test, and behavior-proof reproducer all verified by the author on Windows 11 + Node 24. ## Summary - Problem: `openclaw doctor` reports bootstrap-file-size warnings against the global `age

### #83874 feat: add agent architecture runtime contracts

- bucket: needs_proof
- author: seanzhao-debug
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, cli, agents, size: XL, extensions: qa-lab, extensions: memory-wiki, proof: supplied, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:00:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add runtime contracts for agent task state, tool results, compact summaries, memory judgment, and context fragments - Add tests covering tool result bridge/model output/next hints, subagent task bridge, heartbeat task progress, and compaction help

### #93101 fix(message-tool): parse inline [[...]] button JSON from model text output

- bucket: needs_proof
- author: crh-code
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:01:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Some models (e.g. Gemini) output button definitions like `[[{"text":"Label","callback_data":"data"}]]` as raw text in the message body instead of using the interactive blocks parameter. - Add `extractInlineButtons()` helper that scans text for dou

### #93099 #93031: [Bug] v2026.6.6 cron migration: jobs migrated from jobs.json have blank agent_id — scheduler silently skips them

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:06:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Default agent_id to 'main' when writing cron jobs to SQLite. Jobs from legacy jobs.json lack agentId, causing NULL that the scheduler skips. ## Root Cause row-codec.ts: agent_id: job.agentId ?? null → NULL for legacy jobs → scheduler filters by agen

### #76386 fix(install): trap SIGINT so Ctrl+C exits cleanly during upgrade doctor

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, commands, size: S, triage: refactor-only, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:21:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90011 Fixes #82304 ## Problem When running `curl -fsSL https://openclaw.ai/install.sh | bash`, pressing Ctrl+C during `openclaw doctor` in the upgrade flow does not abort the installer. The SIGINT kills the doctor subprocess but the installer catches it

### #78071 test(gateway): cover reserved admin method scopes

- bucket: needs_proof
- author: bryce-d-greybeard
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:22:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a focused gateway method-scope regression harness for listed reserved-admin methods. - Verifies config, legacy exec approvals, wizard, and update methods resolve to `operator.admin` and reject `operator.write`. ## Verification - `PATH="/tmp/o

### #78815 fix(compaction): resolve Claude CLI model aliases

- bucket: needs_proof
- author: mobykax949
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:22:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Move default model aliases into a shared model-registry helper and add Claude CLI aliases (`opus`, `sonnet`, `haiku`, plus fast variants) that resolve to canonical Anthropic model IDs. - Resolve compaction targets through that alias source before

### #78827 fix(agents): handle MiniMax prompt_cache_hit_tokens in normalizeUsage

- bucket: needs_proof
- author: lykeion-dev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:22:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: MiniMax reports prompt_tokens (total, including cached tokens) and prompt_cache_hit_tokens (cache portion) as separate fields. Without handling prompt_cache_hit_tokens in normalizeUsage, the cache subtraction is skipped, causing derivePromptTokens to double-co

### #79185 fix(tts/xiaomi): support Token Plan TTS endpoint

- bucket: needs_proof
- author: kidding1412
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, size: S, extensions: xiaomi, extensions: tts-local-cli, plugin: azure-speech, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:23:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix Xiaomi MiMo TTS for Token Plan users by: - sending Xiaomi TTS requests with `Authorization: Bearer <key>` instead of the `api-key` header - reusing `models.providers.xiaomi.baseUrl` for Xiaomi TTS when `messages.tts.providers.xiaomi.baseUrl` is

### #83095 fix(canvas): prefer path-scoped capability tokens

- bucket: needs_proof
- author: LaPhilosophie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:24:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Canvas path-scoped capability URLs could keep a stale `oc_cap` query parameter after Gateway URL normalization. - Solution: make the path-scoped capability token authoritative when both path and query tokens are present. - What changed: G

### #83160 security(skills): add prompt-injection guard block to 10 bundled external-content skills

- bucket: needs_proof
- author: vokaplok
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:25:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Most bundled skills that ingest external user-controllable content (Slack messages, GitHub issues, Notion pages, iMessage threads, summarized URLs, session-logs from past conversations, etc.) ship without any in-prompt guardrail telling t

### #83274 Fix subagent thread spawn safety

- bucket: needs_proof
- author: Svetznaniy33
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:25:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - prevent unsafe raw subagent/tool output from being surfaced in completion/timeout announces - fail closed for persistent thread-bound subagent sessions when hook readiness lacks a routable delivery origin - allow Telegram to opt into automatic thr

### #84292 fix(agents): preserve delivered message send results

- bucket: needs_proof
- author: zerone0x
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:26:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve successful `message.send` results when tool-result middleware throws or returns an invalid candidate after delivery - return the sanitized delivery result with a middleware warning instead of replacing it with a generic middleware error -

### #84441 fix(outbound): sanitize assistant reasoning before delivery

- bucket: needs_proof
- author: spinnakerbuilding-debug
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:27:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an outbound assistant delivery sanitizer that strips private thinking/reasoning tags outside code fences - drop reasoning-only assistant payloads before channel delivery - apply the sanitizer at durable outbound delivery and reply-dispatcher b

### #84501 fix(acp): preserve final_only text across tool-call boundaries

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:28:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Addresses the ACP `final_only` delivery-mode portion of #84486 — text produced before tool calls was lost because `resetTurnState()` cleared `finalOnlyOutputText` between model invocations within the same ACP turn. Changes in `final_only` mode (all
