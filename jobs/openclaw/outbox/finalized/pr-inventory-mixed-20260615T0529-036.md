---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-036
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
  - "#84779"
  - "#84705"
  - "#84666"
  - "#84115"
  - "#84111"
  - "#83842"
  - "#83826"
  - "#83718"
  - "#83703"
  - "#83590"
cluster_refs:
  - "#84779"
  - "#84705"
  - "#84666"
  - "#84115"
  - "#84111"
  - "#83842"
  - "#83826"
  - "#83718"
  - "#83703"
  - "#83590"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.603Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 36

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #84779 fix(config): redact config set secrets in audit argv

- bucket: ready_for_maintainer
- author: ariahabibi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-29T06:25:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - redact `openclaw config set <credential-path> <value>` positional values before they land in `config-audit.jsonl` - mask inline `--batch-json` payloads because batch entries can contain credential values - add coverage for API key, bot token, pass

### #84705 Audit config backups for plaintext secrets

- bucket: ready_for_maintainer
- author: lukaIvanic
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T06:25:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary /claim #11829 This closes a concrete remaining gap from the API-key protection roadmap: stale adjacent `openclaw.json` backups and managed snapshots can still contain plaintext credentials after the active config has moved to SecretRefs. `openclaw s

### #84666 fix(diagnostic): avoid aborting queued embedded work

- bucket: needs_proof
- author: vice-magus-faolan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:25:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Diagnostic stuck-session recovery could actively abort an embedded run even when the session was still processing and had queued work remaining behind the active item. - Solution: Gate the acti

### #84115 docs: resolve distorted and oversized avatars for contributors in README

- bucket: needs_proof
- author: alricium
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: docs-discoverability, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:26:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: I noticed that the avatars for CHINMANSINO and M-HAJAZ were displaying significantly larger and distorted compared to the rest of the contributors grid in the README. I fixed the styling/dimensions for these specific avatars to ensure they render cleanly and m

### #84111 feat (auth): offer interactive repair for undecryptable legacy agent OAuth sidecars

- bucket: needs_proof
- author: bdjben
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: L, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:26:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - detect undecryptable legacy OAuth sidecars for non-main agent auth stores during doctor/update auth health checks - show affected non-main agent ids and auth/sidecar paths, explain that choosing no preserves custom per-agent auth, and prompt with 

### #83842 fix(discord): add native reply opt-out

- bucket: ready_for_maintainer
- author: reirei-agent
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T06:27:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2-5 bullets: - Problem: Discord sends platform-native replies whenever a resolved `replyTo` value is present, but there was no Discord-scoped way for callers to explicitly opt out. - Solution: Add a Discord-only `useR

### #83826 test(android): poll for stale TLS probe cleanup in auth test

- bucket: needs_proof
- author: NeatGuyCoding
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:27:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `connect_ignoresStaleTlsProbeAfterDisconnect` used a fixed `Thread.sleep(100)` before asserting async TLS probe cleanup after disconnect. - Why it matters: Under CI load, 100ms may be insufficient, causing flaky unit test failures. - What

### #83718 fix(memory-core): treat dreaming fence marker lines as inside-fence in promotion guard (#80613)

- bucket: ready_for_maintainer
- author: grifjef
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T06:27:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem.** `lineRangeOverlapsDreamingFence` in `extensions/memory-core/src/short-term-promotion.ts` tracked `insideFence` state from the fence marker lines but never flagged ranges that included the marker lines themselves. A relocated promotion

### #83703 Add Claude ignore rules for generated assets

- bucket: needs_proof
- author: sravan27
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:27:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a repo-level `.claudeignore` so Claude Code skips generated output, dependency/build directories, lockfiles, screenshots, and bulky binary media assets during normal code navigation - keep source, docs, tests, scoped `AGENTS.md` / `CLAUDE.md`,

### #83590 plugin-sdk: restore legacy compat helper exports

- bucket: ready_for_maintainer
- author: san-tian
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T06:27:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - extend the deprecated `openclaw/plugin-sdk/compat` surface with additional legacy channel plugin helpers - keep the root `openclaw/plugin-sdk` export small; this only affects the explicit compat subpath - add coverage that imports the restored hel

