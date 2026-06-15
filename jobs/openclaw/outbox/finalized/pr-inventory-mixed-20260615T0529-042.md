---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-042
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
  - "#72764"
  - "#72351"
  - "#72254"
  - "#71482"
  - "#70002"
  - "#68725"
  - "#73649"
  - "#79273"
  - "#84860"
  - "#86079"
cluster_refs:
  - "#72764"
  - "#72351"
  - "#72254"
  - "#71482"
  - "#70002"
  - "#68725"
  - "#73649"
  - "#79273"
  - "#84860"
  - "#86079"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.604Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 42

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #72764 fix(agents): close ACP runtime handle on spawn dispatch failure

- bucket: needs_proof
- author: chinadbo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:34:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `acp-spawn.ts` has two catch blocks guarding the spawn flow; the second (dispatch failure, after runtime is already initialized) omits `runtimeCloseHandle` from `cleanupFailedAcpSpawn`, leaking the backend connection on every failed dispatch - The

### #72351 fix(tui): handle zero history limit

- bucket: needs_proof
- author: Stedyclaw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:34:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes `openclaw tui --history-limit 0` so it disables history loading locally instead of sending an invalid `chat.history` request to the gateway. Before this change, the TUI passed `limit: 0` through to the gateway, which rejected it because histor

### #72254 fix(skills): clean up partially-copied skill dirs after sync failure

- bucket: needs_proof
- author: fancymatt
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:34:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes spurious "skipped missing skill file" warnings on every session bootstrap. ## Problem `syncSkillsToWorkspace` copies skills from the agent's source workspace into the sandbox target workspace. When a copy fails (e.g. the source is a stale `.sk

### #71482 fix(memory-core): skip orphan archival when session store is empty

- bucket: needs_proof
- author: lemon890918-png
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:34:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `loadSessionStore()` fails silently and returns an empty object `{}`, the orphan cleanup in `scrubDreamingNarrativeArtifacts()` would archive ALL transcripts belonging to that agent as false orphans. This bug caused 261 active sessions to be mi

### #70002 ci: skip docs sync & translate-trigger workflows in forks

- bucket: ready_for_maintainer
- author: xudaiyanzi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: risky-infra, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-05-29T06:35:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Two upstream-only workflows (`docs-sync-publish.yml`, `docs-translate-trigger-release.yml`) fail with `Authentication failed for 'https://github.com/openclaw/docs.git/'` on every push to `main` in any fork, because they rely on the `O

### #68725 feat(amazon-bedrock-mantle): add known context windows for open-weight Mantle models

- bucket: needs_proof
- author: wirjo
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:35:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Mantle's `/v1/models` endpoint returns only model IDs — no token limit metadata. Discovery hardcodes `contextWindow: 32000` for every model, which is wrong for most: - MiniMax M2/M2.1: **1,000,000** (gets 32K) - Qwen3 Coder: **256,000** (gets 32K) -

### #73649 fix(issue-template): split logs and screenshots into separate fields

- bucket: ready_for_maintainer
- author: d1rshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-05-29T06:43:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Splits the **Logs, screenshots, and evidence** field in the bug report issue template into two separate fields: - **Logs** - retains `render: shell` for syntax highlighting - **Screenshots, recordings, and evidence** - a plain textarea that accepts ima

### #79273 docs(secrets): document POSIX allowInsecurePath behavior

- bucket: ready_for_maintainer
- author: RajvardhanPatil07
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T07:06:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Document that SecretRef file and exec provider paths on POSIX normally must be owned by the gateway user uid. - Clarify that trusted root-owned system-package binaries may need allowInsecurePath: true. - Keep the warning that allowInsecurePath sho

### #84860 fix(skills): require resolved approval before mutating actions

- bucket: ready_for_maintainer
- author: trackoor
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, proof: sufficient, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T07:39:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: several skill docs mention confirmation near mutating commands, but do not always bind approval to the resolved target/content. - Solution: require preview or resolution first, then approval of the exact action before send/reorder/upload-

### #86079 fix(codex): verify plugin elicitation source

- bucket: needs_proof
- author: LaPhilosophie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, proof: supplied, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T08:20:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Prevents Codex plugin app elicitations from being auto-approved solely because the request self-declares `_meta.app_id`. - Requires the request source to be verified before plugin destructive-action policy is appli

