---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-043
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
  - "#83095"
  - "#78253"
  - "#81778"
  - "#84453"
  - "#82552"
  - "#86088"
  - "#84146"
  - "#86064"
  - "#84581"
  - "#75121"
cluster_refs:
  - "#83095"
  - "#78253"
  - "#81778"
  - "#84453"
  - "#82552"
  - "#86088"
  - "#84146"
  - "#86064"
  - "#84581"
  - "#75121"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.604Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 43

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #83095 fix(canvas): prefer path-scoped capability tokens

- bucket: needs_proof
- author: LaPhilosophie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T08:22:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Canvas path-scoped capability URLs could keep a stale `oc_cap` query parameter after Gateway URL normalization. - Solution: make the path-scoped capability token authoritative when both path and query tokens are present. - What changed: G

### #78253 fix(qqbot): support QQBOT_DATA_DIR environment variable

- bucket: needs_proof
- author: Phymath
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, channel: qqbot, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T09:42:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Allow users to customize QQBot data directory by setting QQBOT_DATA_DIR environment variable. Falls back to ~/.openclaw/qqbot when not set. ## Change Type (select all) - [x] Bug fix - [ ] Feature - [ ] Refactor required for the fix - [ ] Docs - [ ] 

### #81778 fix(status): detect shell-wrapped gateway services

- bucket: ready_for_maintainer
- author: liaoandi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T10:05:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #81751. - Teaches gateway service audit to inspect shell-wrapped LaunchAgent command strings such as `/bin/zsh -lc "... index.js gateway --port 18890"`. - Reuses the expanded command tokens for gateway port detection so shell-wrapped service

### #84453 fix(scripts): detect destructured/re-export/dynamic imports in dist scanner

- bucket: ready_for_maintainer
- author: iFwu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T10:35:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `scripts/lib/package-dist-imports.mjs` is used by `postinstall-bundled-plugins`, `check-package-dist-imports`, `release-check`, and `check-openclaw-package-tarball` to make sure every relative `import` / `export ... from` / `import()` in `dist/**` r

### #82552 fix(doctor): migrate legacy dreaming.storage string config (#70407)

- bucket: ready_for_maintainer
- author: ObliviateRickLin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-29T10:40:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary v2026.4.21 changed `plugins.entries.memory-core.config.dreaming.storage` from a string (`"both" | "inline" | "separate"`) to an object (`{ mode, separateReports }`). Configs persisted before the upgrade fail schema validation on the next `openclaw s

### #86088 fix(tasks): recover terminal lost cron rows

- bucket: ready_for_maintainer
- author: liaoandi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T10:52:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces closed #75036 with the same task-registry fix on a narrow branch. This keeps only the terminal lost cron recovery change and focused regression coverage. The previous PR branch had accumulated unrelated generated/runtime changes, so this branch was re

### #84146 fix(agents): thread errorMessage through finalizeTransportStream

- bucket: needs_proof
- author: martingarramon
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T11:30:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `finalizeTransportStream` throws when a stream stops with `stopReason === "error"` or `"aborted"`. The thrown error was hardcoded to `"An unknown error occurred"`, silently discarding `output.errorMessage` — which `failTransportStream` always popula

### #86064 fix(agents): count exec-path openclaw cron add in successfulCronAdds

- bucket: needs_proof
- author: martingarramon
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T11:31:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### What This PR fixes an issue where the `successfulCronAdds` counter was not incremented when an agent ran `openclaw cron add` as a shell command via `exec` or `bash`. ### Why The existing logic only checked for the structured `cron` tool. This caused the ag

### #84581 fix(agents): strip plaintext model provider keys

- bucket: maintainer_owned
- author: pcdqc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: osolmaz
- labels: docs, agents, size: XL, triage: blank-template, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T11:53:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - strip plaintext provider `apiKey` values after merge-mode preservation, source-managed enforcement, and provider compatibility transforms so old `models.json` keys cannot be reintroduced into the final prompt-facing catalog - clean legacy catalog-

### #75121 fix(telegram): preserve forwarded context in agent body

- bucket: needs_proof
- author: Komzpa
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: L, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T12:58:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep Telegram forwarded-message bodies clean in `BodyForAgent` - rely on typed `ForwardedFrom*` fields for single forwarded messages so prompt assembly renders the existing structured forwarded context block - preserve per-message forwarded attrib

