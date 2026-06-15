---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-019
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
  - "#72792"
  - "#84472"
  - "#73817"
  - "#76806"
  - "#77432"
  - "#77784"
  - "#85540"
  - "#79855"
  - "#78486"
  - "#80386"
cluster_refs:
  - "#72792"
  - "#84472"
  - "#73817"
  - "#76806"
  - "#77432"
  - "#77784"
  - "#85540"
  - "#79855"
  - "#78486"
  - "#80386"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.602Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 19

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #72792 fix(talk): resolve config from runtime secrets

- bucket: needs_proof
- author: haishmg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T22:06:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `talk.config` could pass raw `talk.providers.*.apiKey` SecretRef wrappers into provider-specific config resolution. - Why it matters: Talk clients use `talk.config` for discovery, so a documented SecretRef-backed provider key could break 

### #84472 Doctor: expose dry-run preview reports

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, commands, agents, maintainer, size: XL, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 👀 ready for maintainer look, extensions: policy
- gitcrawl snapshot updated: 2026-05-22T22:22:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Expose the structured Doctor repair work through top-level dry-run, diff, and JSON preview reporting. This PR adds the user-facing preview surface for converted Doctor repairs: - `openclaw doctor --fix --dry-run` plans converted repairs without muta

### #73817 fix(media): allow private openai compatible audio transcription endpoints

- bucket: ready_for_maintainer
- author: spi3
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-22T22:33:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Audio media-understanding transcription could target self-hosted OpenAI-compatible endpoints, but audio config did not expose the private-network request opt-in used by guarded provider HTTP. - Why it matters: Trusted local, RFC1918, or t

### #76806 fix(agents): detect irreducible context overflow to prevent compaction loop DoS

- bucket: needs_proof
- author: jlapenna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T22:58:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add circuit breaker for irreducible context overflow and exhausted compaction attempts. When an agent's system prompt + user prompt alone exceeds the model's context window, compaction cannot reduce the overflow because it only removes session history messages

### #77432 feat(doctor): warn about hidden provider catalog models

- bucket: ready_for_maintainer
- author: sercada
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-22T22:59:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - mark provider-supplied supplemental model catalog rows with stable catalog provenance - add a warn-only doctor contribution for explicit agents.defaults.models allowlists hiding provider-supplied catalog models - classify the new doctor contributi

### #77784 Add Teams delegated auth for plugin tools

- bucket: ready_for_maintainer
- author: MSNexploder
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, scripts, agents, size: XL, extensions: codex, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look, proof: 📸 screenshot, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-05-22T22:59:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Plugin tools could not safely request a per-user Microsoft Teams delegated token from the current Teams conversation. - Why it matters: Teams/Graph OBO-style integrations need user-delegated context without leaking channel tokens into pro

### #85540 feat(telegram): add botMessagePolicy to filter inbound messages from other bots

- bucket: needs_proof
- author: coyotefreman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T23:26:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds optional `telegram.botMessagePolicy` config (default `"allow"`) that, when set to `"ignore"`, drops inbound messages where `from.is_bot=true`. Self-echoes are already filtered by the existing `from.id === ctx.me?.id` check immediately above the

### #79855 plugin SDK: add inbound_activity hook + discord emit points

- bucket: ready_for_maintainer
- author: AriAriXO
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: discord, size: M, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-22T23:38:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a new plugin hook `inbound_activity` that lets a sibling plugin participate in per-channel inbound debouncing without owning the channel inbound flow. Currently `@openclaw/discord` owns its `createChannelInboundDebouncer` privately; `inbound_cl

### #78486 feat(sessions): auto-revert to primary model after image analysis

- bucket: needs_proof
- author: zhanggttry
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T23:59:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a session has an auto model override (from media generation fallback) and `revertAfterImageModel` is enabled in config, automatically revert the session model back to the default primary model after image or PDF analysis completes. This prevent

### #80386 fix(update): Keep Openclaw alive across brew upgrade and other Node version bumps

- bucket: needs_proof
- author: yaanfpv
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-23T00:00:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: a routine `brew upgrade` (or any version-manager bump to a new Node major) silently wipes the `openclaw` command. The operator opens a fresh shell and gets `openclaw: command not found` with no warning. - Why it matters: nothing they did 

