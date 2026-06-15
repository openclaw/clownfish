---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-041
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
  - "#75293"
  - "#75139"
  - "#75138"
  - "#75054"
  - "#75047"
  - "#75024"
  - "#74613"
  - "#74339"
  - "#74266"
  - "#74202"
cluster_refs:
  - "#75293"
  - "#75139"
  - "#75138"
  - "#75054"
  - "#75047"
  - "#75024"
  - "#74613"
  - "#74339"
  - "#74266"
  - "#74202"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.604Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 41

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #75293 fix: macOS-only Parallels smoke harness regression

- bucket: stale_unassigned
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, clawsweeper, clawsweeper:commit-finding
- updated: 2026-05-29T06:33:35Z
- body excerpt: ## Summary Found one macOS-only Parallels smoke harness regression. The new guest script writer creates a root-owned `700` script, then the macOS lane executes it as the desktop user. ## What ClawSweeper Is Fixing - **Low: macOS update script is not readable b

### #75139 fix(memory-core): drop dreaming theme echoes from promotion candidates

- bucket: stale_unassigned
- author: keane-751892
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS
- updated: 2026-05-29T06:33:41Z
- body excerpt: ## Summary Light Sleep / Deep Sleep phases write \`\`\` - Theme: \`X\` kept surfacing across N memories. \`\`\` into daily notes. The next dreaming cycle re-ingests the first line as a fresh candidate before the indented \`status: staged\` and \`recalls: 0\` r

### #75138 fix(daemon): load <stateDir>/gateway.env into runtime env

- bucket: stale_unassigned
- author: keane-751892
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS
- updated: 2026-05-29T06:33:43Z
- body excerpt: ## Summary `loadGlobalRuntimeDotEnvFiles` was reading `<stateDir>/.env` and (as a fallback) `~/.config/openclaw/gateway.env`, but never `<stateDir>/gateway.env`. That left a real-world gap: many users keep API keys and `GATEWAY_AUTH_TOKEN` in `~/.openclaw/gate

### #75054 docs(contextInjection): document always as a valid option and default

- bucket: stale_unassigned
- author: ayesha-aziz123
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs
- updated: 2026-05-29T06:33:47Z
- body excerpt: ## Summary - Problem: `agents.defaults.contextInjection` accepts three values — `"always"`, `"continuation-skip"`, and `"never"` — as defined in `src/config/types.agent-defaults.ts` (line 19) and validated by the Zod schema. The docs stated `"always"` as the d

### #75047 fix(heartbeat): ignore docs related scaffold links

- bucket: stale_unassigned
- author: claudiothebot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S
- updated: 2026-05-29T06:33:49Z
- body excerpt: ## Summary - Fixes a regression where the docs-only `## Related` section copied into default `HEARTBEAT.md` makes scaffold-only heartbeat files look actionable. - Treats a trailing docs `Related` link section as non-actionable for heartbeat empty-file detectio

### #75024 fix(feishu): preserve threads without root_id

- bucket: needs_proof
- author: stevenchouai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- updated: 2026-05-29T06:33:51Z
- body excerpt: ## Summary - Preserve Feishu threaded reply grouping when message events omit `root_id` - Fall back to `reply_target_message_id`, `parent_id`, then `upper_message_id` as the best available root message anchor - Add coverage for the fallback order and include `

### #74613 docs(cli): add agent selector to CLI backend quick start

- bucket: ready_for_maintainer
- author: vyctorbrzezowski
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, proof: supplied, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- updated: 2026-05-29T06:33:57Z
- body excerpt: ## Summary - Fixes #68940. - Updates the CLI Backends quick start to keep the current Claude CLI backend example while adding the required `--agent main` selector. - Explains that `main` is the default agent id when no explicit agent list is configured. - No C

### #74339 fix(acpx): prevent duplicate -c config overrides for Codex ACP command

- bucket: needs_proof
- author: SymbolStar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: acpx, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- updated: 2026-05-29T06:34:05Z
- body excerpt: ## Root Cause When a user configures the ACPX Codex command with `-c model=gpt-5.5 -c model_reasoning_effort=medium`, and the runtime model override scope is active (e.g. via `sessions_spawn` with `model`/`thinking`), `appendCodexAcpConfigOverrides` blindly ap

### #74266 docs(gateway): add external auth-proxy recipe

- bucket: stale_unassigned
- author: coletebou
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS
- updated: 2026-05-29T06:34:08Z
- body excerpt: ## Summary Adds a recipe page documenting how to use existing OpenClaw primitives (custom `baseUrl`, eager SecretRef snapshot) to build an external auth-injection proxy that closes the agent-self-read gap acknowledged in #11829 and #10659. The page does **not*

### #74202 feat(bedrock): Cline-parity config surface + BedrockAuthConfig helper

- bucket: ready_for_maintainer
- author: praxstack
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, proof: sufficient, extensions: amazon-bedrock, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- updated: 2026-05-29T06:34:10Z
- body excerpt: ## Summary Brings the amazon-bedrock plugin's declared config surface to 1:1 parity with Cline's Bedrock UI and pi-ai's refactored Bedrock auth contract (pending upstream in https://github.com/badlogic/pi-mono/pull/3947). The actual Bedrock inference changes l

