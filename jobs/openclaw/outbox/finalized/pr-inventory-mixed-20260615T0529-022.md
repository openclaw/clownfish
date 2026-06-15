---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-022
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
  - "#84352"
  - "#85899"
  - "#85758"
  - "#85657"
  - "#85663"
  - "#85003"
  - "#82906"
  - "#82692"
  - "#84060"
  - "#51206"
cluster_refs:
  - "#84352"
  - "#85899"
  - "#85758"
  - "#85657"
  - "#85663"
  - "#85003"
  - "#82906"
  - "#82692"
  - "#84060"
  - "#51206"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.602Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 22

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #84352 Fix WebChat dispatch failure session status

- bucket: maintainer_owned
- author: jesse-merhi
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, maintainer, size: XL, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-24T02:53:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Persist a terminal failed session lifecycle event when WebChat dispatch rejects before an assistant reply. - Preserve terminal lifecycle errors from embedded-agent/provider failures when model fallback is exhausted, so fallback assistant text no l

### #85899 docs(memory): align descriptors and docs with recursive memory/**/*.md

- bucket: ready_for_maintainer
- author: leafbird
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-24T06:05:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The runtime already walks `memory/` recursively via `collectMemoryFilesFromDir` (`packages/memory-host-sdk/src/host/internal.ts`), so nested files like `memory/YYYY-MM/YYYY-MM-DD.md` are indexed and searched. But several agent-facing descriptors a

### #85758 feat: add retries field to HealthCheckRunContext for transient failure handling

- bucket: needs_proof
- author: Arvuno
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-24T06:27:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Added `retries?: number` field to `HealthCheckRunContext` interface - Implemented retry loop in `runRunnableHealthCheck` with exponential backoff (100ms × attempt) - Add `retries` field to `HealthRepairContext` interface - Full test coverage for r

### #85657 Clarify OpenClaw testing evidence wording

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-24T06:52:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Clarifies release evidence and protected-context wording in the OpenClaw testing skill to avoid SafeOps reviewed-risk false positives while preserving release validation instructions.

### #85663 Harden SafeOps final config risk defaults

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-24T06:53:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Hardens the final SafeOps-reviewed config surfaces after the skill-doc risk cleanup pass. Changes: - GitHub CLI config discovery no longer guesses broad operator home paths such as root, sudo user, or login user homes by default. - Alternate GitHub 

### #85003 fix(line): register credential secret targets

- bucket: ready_for_maintainer
- author: DYSfu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: line, commands, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-24T07:44:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Register LINE channel credentials in the channel secret contract so `channels.line.channelAccessToken`, `channels.line.channelSecret`, and their account-scoped equivalents participate in audit/configure/apply surfaces. - Resolve LINE credential Se

### #82906 fix(codex): gate CLI session resume behind plugin approval

- bucket: ready_for_maintainer
- author: LaPhilosophie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-24T08:33:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `codex.cli.session.resume` did not consistently pass through plugin approval before node dispatch. - Solution: require a restricted plugin approval for resume, limited to `allow-once` and `deny`. - What changed: the resume policy now requ

### #82692 chore: refresh core tooling dependencies

- bucket: needs_proof
- author: bryangauvin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: M, proof: supplied, mantis: telegram-visible-proof, extensions: openrouter, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-24T08:36:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - refresh `@typescript/native-preview` to `7.0.0-dev.20260516.1` - refresh `oxfmt` to `0.50.0` - isolate channel catalog tests from machine-global plugin installs - remove stale legacy Discord guild-channel completion expectations while keeping cano

### #84060 refactor(terminal): optimize OSC progress label sanitization

- bucket: ready_for_maintainer
- author: esadomer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-24T08:42:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary Replaced the OSC progress label sanitizer's chained string passes with one module-level precompiled regex. The forbidden label tokens are still the same: OSC ST, BEL, C1 ST, bare ESC, and `]`. ### Benchmark Environment: Node `v22.17.0` on native Wi

### #51206 Plugins: enforce private import boundaries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-24T11:50:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Plugins could couple directly to private OpenClaw internals or escape their package root through imports, even though the intended contract is the plugin SDK seam. - Why it matters: That makes plugin behavior depend on unstable host inter

