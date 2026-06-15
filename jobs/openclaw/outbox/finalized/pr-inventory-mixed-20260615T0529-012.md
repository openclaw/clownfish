---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-012
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
  - "#84590"
  - "#84680"
  - "#78742"
  - "#84738"
  - "#84761"
  - "#84763"
  - "#84689"
  - "#81104"
  - "#84868"
  - "#84955"
cluster_refs:
  - "#84590"
  - "#84680"
  - "#78742"
  - "#84738"
  - "#84761"
  - "#84763"
  - "#84689"
  - "#81104"
  - "#84868"
  - "#84955"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.601Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 12

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #84590 Audit secret-bearing backup files

- bucket: needs_proof
- author: mickysakata-max
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, extensions: openrouter, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-20T20:23:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - extend `secrets audit` to scan sibling backup files for `.env`, `auth-profiles.json`, and generated `models.json` - detect plaintext credential residue in `.bak` / `.bak.*` backup naming patterns without resolving historical backup-only SecretRefs

### #84680 fix(codex): read listed skill files directly

- bucket: maintainer_owned
- author: kevinslin
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, extensions: codex, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-20T20:24:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Add Codex app-server guidance to read listed `SKILL.md` paths directly instead of searching parent directories. - Cover the prompt guidance in the Codex app-server thread lifecycle tests. - Update Codex runtime prompt snapshots for the new developer

### #78742 task-139: audit gateway restart attribution

- bucket: needs_proof
- author: daluzai-source
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XL, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-05-20T21:03:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the operator types `/restart` to the gateway via TG / Control-UI / any chat-channel slash command, the gateway is killed via supervisor (`launchctl kickstart -k` on macOS, `systemctl --user restart` on Linux) and relaunched by KeepAlive. This r

### #84738 Stop writing plaintext provider keys to models.json

- bucket: ready_for_maintainer
- author: Finesssee
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-21T00:27:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop preserving stale plaintext provider `apiKey` values from existing `models.json` during merge-mode regeneration. - Strip plaintext provider keys at the final `models.json` serialization boundary while preserving env, SecretRef, OAuth, AWS, and

### #84761 feat(secrets): scan backup files for plaintext provider apiKey values

- bucket: needs_proof
- author: jing11223344
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-21T02:12:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds backup file secret scanning to the `openclaw secrets audit` command. This addresses a security gap identified in issue #11829 where old backup files (e.g., `models.json.20260501.bak`, `openclaw.json.old`) may retain plaintext provider API keys 

### #84763 fix(acpx): scrub provider credential env from ACP harness spawns

- bucket: needs_proof
- author: apoussaint
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: acpx, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-21T02:19:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `sessions_spawn` with `runtime:"acp"` + `agentId:"claude"` fails immediately with `AcpRuntimeError: Internal error: Invalid API key · code=ACP_TURN_FAILED`. - **Solution:** Strip provider-credential env vars from the ACP harness launc

### #84689 Strip resolved provider api keys from models.json

- bucket: ready_for_maintainer
- author: Trojan7210
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, extensions: openrouter, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-21T05:20:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace runtime-resolved provider `apiKey` values with the non-secret SecretRef marker before writing planned `models.json` contents. - Keep merge-mode behavior for user-authored existing provider keys while preventing newly resolved plaintext key

### #81104 Policy: add runtime audit metadata and attestation enforcement

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, scripts, agents, maintainer, size: XL, proof: sufficient, extensions: oc-path, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author, proof: 📸 screenshot, extensions: policy
- gitcrawl snapshot updated: 2026-05-21T05:26:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Policy: add runtime audit metadata and attestation enforcement Branch: `policy-runtime-audit` GitHub base: `main` Logical base: `policy-conformance-examples` Current draft: https://github.com/openclaw/openclaw/pull/81104 Draft status: final policy runtime/au

### #84868 [codex] Preserve request SecretRef markers in models.json

- bucket: ready_for_maintainer
- author: zr9959
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-21T08:54:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve SecretRef markers for nested provider `request` secrets when generating prompt-visible `models.json`, including request headers, auth token/value, TLS material, and proxy TLS material. - Strip request SecretRef marker strings before inlin

### #84955 fix: gate codex migration doctor hint on provider availability

- bucket: ready_for_maintainer
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-21T13:12:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop the Codex native-asset doctor warning from recommending `openclaw migrate codex --dry-run` when the `codex` migration provider cannot actually resolve - switch the warning to tell users to run `openclaw doctor --fix` first in that provider-mi

