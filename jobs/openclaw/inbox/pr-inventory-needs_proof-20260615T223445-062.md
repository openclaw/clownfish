---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-062
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
  - "#92454"
  - "#92515"
  - "#82572"
  - "#92517"
  - "#92528"
  - "#92529"
  - "#93398"
  - "#92530"
  - "#93382"
  - "#92542"
  - "#92543"
  - "#93348"
  - "#93249"
  - "#92571"
  - "#92602"
  - "#92643"
  - "#93385"
  - "#92648"
  - "#93058"
  - "#92665"
  - "#91533"
  - "#92682"
  - "#92686"
  - "#92692"
  - "#92694"
cluster_refs:
  - "#92454"
  - "#92515"
  - "#82572"
  - "#92517"
  - "#92528"
  - "#92529"
  - "#93398"
  - "#92530"
  - "#93382"
  - "#92542"
  - "#92543"
  - "#93348"
  - "#93249"
  - "#92571"
  - "#92602"
  - "#92643"
  - "#93385"
  - "#92648"
  - "#93058"
  - "#92665"
  - "#91533"
  - "#92682"
  - "#92686"
  - "#92692"
  - "#92694"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.799Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 62

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92454 fix(tasks): reconcile stale subagent tasks when backing CLI child is terminal (fixes #92285)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:52:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: When a backing CLI child task becomes `lost`, the parent subagent task (runtime: `subagent`, no `childSessionKey`) remains `running`, and the linked `task_mirrored` TaskFlow also stays `running` — even after gateway restart. Task mai

### #92515 Recover memory search from transient missing metadata

- bucket: needs_proof
- author: EleutheroiEdge
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:54:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Recover `memory_search` from transient missing index metadata by retrying once after a short delay. - Reopen the SQLite handle, reset vector state, ensure schema, and rerun the normal search path only for `index metadata is missing`. - Add metadat

### #82572 feat(queue): persist followup queues across gateway restarts

- bucket: needs_proof
- author: jewseppi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, scripts, commands, size: XL, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T18:54:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the gateway process restarts, followup messages queued during an active agent turn are silently lost. ## Solution Persist followup queues in shared SQLite (`followup_queue_entries`), migrate legacy JSON sidecars via doctor, rehydrate from live

### #92517 Suppress failed tool progress in Discord

- bucket: needs_proof
- author: davefano
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T18:54:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skip failed/error item progress before Discord draft rendering - skip failed command-output progress before Discord draft rendering - preserve existing fallback tool-error warning delivery for unacknowledged failures - add Discord monitor regressi

### #92528 fix(daemon): omit service environment maps from status output

- bucket: needs_proof
- author: jml001
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:55:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Daemon status output included service environment maps, so any status consumer (logs, transcripts, support bundles) could capture secret-bearing values. Status now omits the environment value map and reports `environmentValueSources` instead, preser

### #92529 fix(agents): prevent local exec policy errors from triggering model fallback

- bucket: needs_proof
- author: jml001
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, extensions: codex, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:55:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A Codex app-server local exec policy denial was classified as a model failure, so the agent switched providers/models on what is a local configuration outcome - burning fallback budget and changing models mid-session with no availability reason. Pol

### #93398 fix(cron): emit isolated model usage diagnostics

- bucket: needs_proof
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:55:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - emit `model.usage` diagnostics from isolated cron run finalization when cron model usage is nonzero - keep billed aggregate usage separate from session/context token snapshots, including total-only usage payloads - extend cron diagnostic tests and

### #92530 fix(release): tolerate semver build metadata in changelog packaging

- bucket: needs_proof
- author: jml001
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:56:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `scripts/package-changelog.mjs` rejects valid semver build metadata, so `pnpm pack` of any package with `version: X.Y.Z+suffix` crashes during prepack with `Unsupported OpenClaw package version for changelog packaging`. pnpm 10 preserves build metad

### #93382 Duplicate 💬 commentary notes with openai/gpt-5.4-mini (codex app-server) in verbose mode

- bucket: needs_proof
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:56:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix classification: Root-cause fix. - Maintainer-ready confidence: High. - Root cause: The duplicate `💬` commentary note came from a projector state invariant violation: Codex app-server emits the same assistant commentary text through two upstre

### #92542 feat(sessions): auto-prune orphan store pointers during periodic main…

- bucket: needs_proof
- author: BNGZ18
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:56:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: …tenance When transcript .jsonl files are removed (by archive cleanup, disk-budget enforcement, or external tooling) without clearing the corresponding pointer in sessions.json, those pointers become orphans. Inbound resolution cannot match them and the affect

### #92543 docs: point Windows Hub downloads to companion release

- bucket: needs_proof
- author: kingrubic
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:56:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Update Windows Hub installer links to the openclaw-windows-node companion release assets. - Clarify that canonical OpenClaw release assets may promote these installers, with companion releases as the fallback/source. ## Verification - pnpm docs:ch

### #93348 fix(status): use selected model for usage

- bucket: needs_proof
- author: MonkeyLeeT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:57:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Make `/status` usage probes follow a user-selected session model instead of a stale active runtime snapshot. - Keep active-runtime usage behavior for auto fallback/runtime-alias cases. - Add regression coverage for an OpenAI session override with

### #93249 fix(telegram): rotate in-flight answer preamble at tool boundary

- bucket: needs_proof
- author: sancho-csillag
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: telegram, size: L, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:58:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes a Telegram bug where a streamed answer **preamble** is overwritten instead of preserved when a tool runs mid-stream. The model streams a short preamble (e.g. *"Let me check the current state of that file."*), calls a tool, then resumes with

### #92571 fix: dedupe cleaned assistant transcript entries for session-memory

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:58:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skip assistant transcript entries when they are cleaned text-only children of a raw assistant thinking entry with the same extracted text - preserve legitimate repeated assistant replies that come from different conversation turns - add a regressi

### #92602 fix(android): queue node events until gateway connect

- bucket: needs_proof
- author: ashishpatel26
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:59:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #79552. ## Problem Android notification forwarding could send `node.event` before the gateway websocket `connect` request completed. The gateway rejects any first frame that is not `connect`, and Android did not retry the failed notification

### #92643 #92076: Subagent completion delivery can fail when requester run is inactive and session transcript is locked

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T19:00:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix subagent completion delivery that was silently lost when the active requester wake fails (inactive/locked session) and the requester-agent handoff throws a SessionWriteLockTimeoutError — even though a direct-message delivery route existed. ## Ro

### #93385 fix(matrix): resolve per-room agent bindings in inbound routing

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T19:00:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes Matrix per-room agent bindings being silently ignored. All Matrix messages were routing to the default agent `main` regardless of configured per-room bindings. ## Root Cause Analysis The Matrix inbound route resolver (`extensions/matrix/src/ma

### #92648 #92523: Bug: Orphaned TaskFlows in `waiting` status permanently block agent heartbeats (requests-in-flight deadlock)

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T19:00:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Expire orphaned TaskFlows stuck in `waiting` status during the task-flow registry maintenance sweep. Without this, flows whose callback never returns (display timeout, gateway restart, network failure) stay in `waiting` forever, causing the gateway

### #93058 fix(doctor): suppress false groupAllowFrom warning when per-account allowlists cover all accounts

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, P3, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T19:00:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `openclaw doctor` warns that inbound group messages will be dropped when the top-level `groupAllowFrom` is empty, even when every account has its own populated `groupAllowFrom`. At runtime, per-account allowlists handle routing correc

### #92665 fix(llm): honor cacheRetention for LiteLLM-proxied Anthropic models

- bucket: needs_proof
- author: kagura-agent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T19:00:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #37966 — `cacheRetention` configured for LiteLLM-proxied Anthropic models (e.g. `litellm/claude-opus-4-6`) is silently ignored. ## Root Cause Two code paths block LiteLLM from using Anthropic prompt caching: 1. **`resolveAnthropicCacheRetentio

### #91533 fix(ui): scope avatar storage per agent ID

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T19:01:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted (Claude). All behavior proof below was produced and verified by running the real storage functions through vitest with in-memory localStorage mocks. ## Summary - **Problem:** The avatar storage used a single global localStorage key `openclaw.cont

### #92682 fix(read): use system encoding fallback for non-UTF-8 text files on Windows

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T19:01:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92664. ## Summary The `read` tool hardcodes `buffer.toString("utf-8")` when decoding text files. On Chinese Windows systems where files are commonly encoded in GBK (codepage 936), this produces garbled output (mojibake). The codebase already has `decode

### #92686 feat(agents): add stable A2A session metadata

- bucket: needs_proof
- author: yorkisestevez
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T19:01:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds stable agent id and session-scope metadata to sessions_send A2A prompt context - Keeps high-cardinality session keys, peer IDs, thread IDs, and run IDs redacted behind placeholders - Extends focused helper tests to lock prompt-cache-safe meta

### #92692 fix(doctor): suppress false-positive group allowlist warning for parent-only channel records (#92684)

- bucket: needs_proof
- author: sheyanmin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T19:01:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix false-positive doctor warning: when a channel has per-account configs with populated `groupAllowFrom` lists, the empty top-level `groupAllowFrom` no longer triggers a misleading "all group messages will be silently dropped" warning. ## Root Caus

### #92694 docs(nodes): add openclaw.json example for node exec config

- bucket: needs_proof
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, plugin: file-transfer, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T19:01:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The /nodes page showed CLI config commands but was missing the equivalent openclaw.json example.\n\nAdded a json5 block with tools.exec.host/security/node before the existing CLI commands.\n\nCloses #92662
