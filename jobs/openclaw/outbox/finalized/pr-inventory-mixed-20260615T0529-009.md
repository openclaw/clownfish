---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-009
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
  - "#83754"
  - "#83819"
  - "#83492"
  - "#83504"
  - "#84023"
  - "#84028"
  - "#84087"
  - "#83814"
  - "#84072"
  - "#79999"
cluster_refs:
  - "#83754"
  - "#83819"
  - "#83492"
  - "#83504"
  - "#84023"
  - "#84028"
  - "#84087"
  - "#83814"
  - "#84072"
  - "#79999"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.601Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 9

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #83754 fix: strip apiKey from models.json to prevent secret leakage (Layer 1, #11829)

- bucket: needs_proof
- author: jing11223344
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-18T20:46:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Description Layer 1 quick fix for #11829: strip `apiKey` from each provider before serializing to `models.json` to prevent secret leakage into prompt context. ## Problem The model catalog serializes resolved `apiKey` values into `models.json`, which gets in

### #83819 fix(heartbeat-runner): add wakeGuard pre-flight hook to skip no-op wakes (OME-332)

- bucket: needs_proof
- author: Omerbahari
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-19T00:21:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem (OME-332) The `startHeartbeatRunner` wake dispatch path calls `runOnce` for every targeted agent/session without checking whether that agent actually has actionable work. On installations with an orchestration layer (e.g. Paperclip/Ronen brainOS), a

### #83492 fix: skip TTS for explicit command replies

- bucket: ready_for_maintainer
- author: honor2030
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-19T02:31:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: explicit slash/native command replies such as `/active-memory status` were still passed through final TTS when TTS was configured to synthesize final replies. - Why it matters: command/status output should remain visible text only; speaki

### #83504 Add Telegram provider setup flow

- bucket: maintainer_owned
- author: obviyus
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: telegram, scripts, commands, maintainer, size: XL, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-19T04:42:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Add owner-only Telegram `/providers` setup for private DMs. - Reuse provider auth/profile/config write paths through a private local setup runtime. - Consume pending secret replies before normal Telegram routing and attempt message deletion. - Harden

### #84023 Emit WhatsApp Web health hook events

- bucket: needs_proof
- author: girgizrazvan-lgtm
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: S, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-19T07:05:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - emit internal `whatsapp:*` hook events when WhatsApp Web watchdog/reconnect state changes - include context for watchdog timeouts, scheduled reconnects, and terminal disconnects - cover health hook emission in the existing WhatsApp Web connection 

### #84028 fix(ui): improve Arabic Control UI translations

- bucket: ready_for_maintainer
- author: aim9sour
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-19T08:27:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Improve Arabic Control UI translations for skills, browser/tool profile labels, chat controls, and cron empty states. - Align the Arabic glossary with the locale/TM decision for `Skills -> المهارات` so future i18n syncs preserve the term. - Keep t

### #84087 fix(chat): remove duplicate Off option in thinking level dropdown (#84069)

- bucket: needs_proof
- author: 1027866388
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-19T10:50:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #84069 - Thinking Selection dropdown shows two identical "Off" options. ## Problem When using the thinking level dropdown with an inherited default (value=""), the backend thinking levels list also includes an "off" option. This results in two

### #83814 hotfix(codex): default visible replies to automatic

- bucket: ready_for_maintainer
- author: vice-magus-faolan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, extensions: codex, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-19T11:15:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: AI-assisted: yes (prepared with Codex). ## Summary - Problem: The Codex harness defaulted `sourceVisibleReplies` to `message_tool`. - Why it matters: In direct Telegram chats this did not match the expected visible-reply behavior, which made replies fail to su

### #84072 [codex] Add model fallback circuit breaker

- bucket: needs_proof
- author: wiatrM
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-19T12:33:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an in-memory per provider/model circuit breaker to model fallback - skip an open model circuit with `circuit_open` and HTTP 503 so fallback can move to the next candidate - reset circuit state on candidate success and add focused unit coverage

### #79999 fix(agents): honor path for gateway config.get

- bucket: ready_for_maintainer
- author: Alexander-Green
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-19T13:08:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the agent uses the `gateway` tool action `config.get` with a `path` argument, the current implementation ignores `path` and always returns the full gateway `config.get` snapshot. In real deployments the gateway `config.get` response is a large 

