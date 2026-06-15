---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-198
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
  - "#50454"
  - "#47087"
  - "#52515"
  - "#70056"
  - "#50682"
  - "#67420"
  - "#66081"
  - "#67376"
  - "#55351"
  - "#56706"
cluster_refs:
  - "#50454"
  - "#47087"
  - "#52515"
  - "#70056"
  - "#50682"
  - "#67420"
  - "#66081"
  - "#67376"
  - "#55351"
  - "#56706"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.678Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 198

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #50454 fix: use explicit agent workspace when writing transcript headers

- bucket: needs_proof
- author: eggyrooch-blip
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-07T04:58:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop deriving transcript header `cwd` from `process.cwd()` and resolve the target agent workspace explicitly before appending mirrored transcript entries - add a regression test covering per-agent cwd isolation for transcript header creation - cov

### #47087 Attach provenance to spawned subagent tasks

- bucket: needs_proof
- author: Christoffer91
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:02:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This adds explicit inter-session provenance to child tasks launched via `sessions_spawn`. Changes in this PR: - attach `inputProvenance` when `spawnSubagentDirect()` starts the child `agent` run - preserve requester session/channel lineage on the sp

### #52515 fix(doctor): skip cleanup hints for active gateway and downgrade exec SecretRef errors to warnings

- bucket: needs_proof
- author: daniel-knox
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:03:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Fixes #52510 ### Problem `openclaw doctor` has two false-positive issues: 1. **Cleanup hints suggest removing the active gateway** - When doctor detects ANY extra gateway-like services (e.g., an unrelated `imessage-watcher`), it unconditionally generates cl

### #70056 fix(gateway): clean up store and set running=false on stop timeout

- bucket: needs_proof
- author: garnetlyx
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, stale, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:03:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `stopChannel` timeout path set `running: true` and skipped `store.aborts`/`store.tasks` cleanup, leaving a dead promise that blocked all future starts and fooled the health monitor - Fix: set `running: false`, clean up store entries, and add `last

### #50682 feat(telegram): handle unknown groups with warn or leave

- bucket: needs_proof
- author: monk0bot0
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:03:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add Telegram unknown-group handling with configurable actions: - `unknownGroupAction` - `unknownGroupMessage` - `unknownGroupCooldownMs` This lets OpenClaw ignore, warn, or leave unknown Telegram groups before assistant execution. ## What changed - 

### #67420 feat(memory): per-agent dreaming control

- bucket: needs_proof
- author: aaronwong1989
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:03:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add ability to selectively enable/disable dreaming for specific agents, addressing OOM issues when all agents run dreaming simultaneously. ## Problem Gateway was killed by OOM Killer (exceeding 6GB MemoryMax) because all 13 agents ran dreaming simul

### #66081 feat(codex-cli): prefer output-last-message artifacts

- bucket: needs_proof
- author: Rohan5commit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-07T05:03:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: direct `codex-cli` runs still finalize the user-visible reply from stdout even though Codex can write a dedicated final-message artifact - Why it matters: stdout is useful for transport and telemetry, but it is a weaker source of truth fo

### #67376 fix(gateway): bind loopback MCP scope to per-backend bearer token (#64993)

- bucket: needs_proof
- author: parasol-aser
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:03:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes loopback MCP scope spoofing (issue #64993, CWE-285/639/807/345, OWASP A01:2021). The loopback MCP HTTP server (`/mcp`) authenticated each request with a 32-byte bearer token but then read per-request **scope** (`sessionKey`, `accountId`, `mess

### #55351 Preserve Open WebUI UUID sessions across Control UI

- bucket: needs_proof
- author: SHAREN
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:03:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve Open WebUI UUID chat ids instead of canonicalizing them to `agent:main:<uuid>` in the gateway session store - normalize `agent:main:<uuid>` back to the original bare UUID when the Control UI reads or writes chat URLs - pass agent context 

### #56706 TTS: enforce standalone directive lines parsing

- bucket: needs_proof
- author: yejiming
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:03:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: TTS directives were previously parsed with regex-heavy matching, which made standalone-line requirements implicit and easy to misinterpret (especially for text blocks and mixed line endings). - Why it matters: Ambiguous parsing can cause 

