---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-011
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
  - "#84441"
  - "#84280"
  - "#84465"
  - "#84554"
  - "#84566"
  - "#84557"
  - "#84573"
  - "#84617"
  - "#84613"
  - "#84665"
cluster_refs:
  - "#84441"
  - "#84280"
  - "#84465"
  - "#84554"
  - "#84566"
  - "#84557"
  - "#84573"
  - "#84617"
  - "#84613"
  - "#84665"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.601Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 11

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #84441 fix(outbound): sanitize assistant reasoning before delivery

- bucket: needs_proof
- author: spinnakerbuilding-debug
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-20T05:04:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an outbound assistant delivery sanitizer that strips private thinking/reasoning tags outside code fences - drop reasoning-only assistant payloads before channel delivery - apply the sanitizer at durable outbound delivery and reply-dispatcher b

### #84280 fix: handle SIGUSR1 restart on Windows where the signal is unsupported

- bucket: needs_proof
- author: Thatgfsj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-20T05:38:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On Windows, `process.kill(pid, "SIGUSR1")` throws `TypeError [ERR_UNKNOWN_SIGNAL]: Unknown signal: SIGUSR1` because SIGUSR1 is a Unix-only signal. This broke `openclaw gateway restart` for unmanaged gateway processes on Windows. ## Changes ### 1. `s

### #84465 Strip apiKey fields from generated models.json

- bucket: ready_for_maintainer
- author: javi-codeworks
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-20T06:52:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: generated `models.json` could persist `apiKey` fields from provider config rows. - Solution: strip `apiKey` recursively from the final `models.json` write payload. - What changed: provider/model metadata still writes, but provider-level a

### #84554 fix(memory-core): guard builtin fallback after qmd failures

- bucket: ready_for_maintainer
- author: jetd1
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-20T12:05:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: QMD fallback could create a full builtin memory manager even when builtin memory search was disabled or unusable, leaving unnecessary long-lived builtin resources after QMD failures. - Solution: probe the builtin fallback with a transient

### #84566 [codex] fix: omit provider api keys from generated models.json

- bucket: needs_proof
- author: piaoguodeafei
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-20T12:24:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes openclaw/openclaw#11829. This prevents generated `models.json` files from persisting provider-level `apiKey` fields. The sanitization happens at the serialization boundary, after provider discovery/normalization/merge, so provider catalog meta

### #84557 fix: strip plaintext model api keys from models json

- bucket: ready_for_maintainer
- author: Kzics
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-20T12:54:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Strip plaintext provider apiKey values from generated models.json before prompt-visible serialization. - Preserve SecretRef/env-managed markers and known non-secret auth markers. - Add regression coverage for configured plaintext keys, existing me

### #84573 Allow trusted plugin session presentations

- bucket: needs_proof
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-20T13:30:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Why Workflow plugins can already own tools, session actions, and control surfaces, but the active-session attachment path is currently bundled-only. That leaves trusted workflow plugins with no safe way to deliver a session-scoped Markdown artifact or a ric

### #84617 fix(gateway): rate-limit device pairing and token management RPCs

- bucket: needs_proof
- author: davidangularme
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-20T15:36:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What bug this fixes `device.pair.approve`, `device.pair.remove`, `device.token.rotate`, and `device.token.revoke` modify live gateway security state — approved pairings, active token revocations, and device removal — but were missing from the control-plane 

### #84613 Prevent plaintext provider keys in generated models config

- bucket: needs_proof
- author: VibhorGautam
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-20T15:41:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace source-managed plaintext provider API keys with the existing non-secret marker before writing generated models config. - Add a regression test for runtime/source snapshot planning so resolved provider keys are not serialized into models.js

### #84665 fix: bump baileys

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, scripts, maintainer, size: S, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-20T18:27:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Routine dependency bump for the WhatsApp extension. Changes: - Bump `baileys` to `7.0.0-rc12` - Refresh the existing pnpm patch metadata for the new version - Keep the postinstall hotfix detector compatible with the updated upstream media code Validation: - `p

