---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-025
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
  - "#72548"
  - "#79655"
  - "#79880"
  - "#80293"
  - "#80532"
  - "#80243"
  - "#85035"
  - "#81341"
  - "#80455"
  - "#80716"
cluster_refs:
  - "#72548"
  - "#79655"
  - "#79880"
  - "#80293"
  - "#80532"
  - "#80243"
  - "#85035"
  - "#81341"
  - "#80455"
  - "#80716"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.602Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 25

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #72548 feat(secrets): pluggable SecretRef sources via plugin SDK seam

- bucket: needs_proof
- author: akoscz
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: matrix, channel: telegram, app: web-ui, gateway, scripts, commands, agents, size: XL, channel: qqbot, triage: needs-real-behavior-proof, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-26T01:23:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** OpenClaw's SecretRef contract was closed to three built-in sources (`env`/`file`/`exec`). Every new vendor backend (GCP Secret Manager, OS keyring, AWS Secrets Manager, HashiCorp Vault, native 1Password) required a core PR that touche

### #79655 Prune completed Codex Responses tool replay

- bucket: stale_unassigned
- author: fanfanliu964-web
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-26T03:14:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - prune completed OpenAI Codex native Responses tool-call replay after a later assistant/user turn has consumed the tool output - keep active tail function call outputs so tool continuation still works - add synthetic regression coverage for complet

### #79880 feat(doctor): suppress warnings for docker-out-of-docker architectures

- bucket: ready_for_maintainer
- author: jlapenna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-26T04:51:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add environment variables to suppress Docker-specific warnings. In proxy-managed Docker-out-of-Docker architectures, the doctor commands report false positives for bind warnings and multiple state directories. This adds `OPENCLAW_IGNORE_BIND_WARNING` and `OPEN

### #80293 fix: apply thread routing to plugin actions

- bucket: ready_for_maintainer
- author: artdaal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-26T04:51:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - apply existing outbound thread-id resolution to targeted plugin-owned message actions before local/gateway dispatch - cover targeted plugin actions such as stickers so Telegram/forum thread ids are preserved - add regression coverage for auto-thre

### #80532 feat(exec): add allowSymlinkPath config option

- bucket: needs_proof
- author: TheArchitectit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, dependencies-changed, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-05-26T04:51:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds a new `tools.exec.allowSymlinkPath` boolean config option that allows the exec tool to run commands in directories containing symlinks, or when the cwd itself is a symlink. ### Problem When a user's workspace path contains symlink compo

### #80243 [codex] Further optimize Telegram media and reply context flow

- bucket: ready_for_maintainer
- author: safzanpirani
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-26T05:12:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add scoped indexes to the Telegram message cache so `recentBefore` and `around` avoid scanning and sorting the full cache - cache successful Telegram media resolutions by file identity and relevant runtime options - revalidate cached media paths b

### #85035 Add follow-up queue plugin hooks for OpenCOAT weaving

- bucket: ready_for_maintainer
- author: HyperdustLabs
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-26T06:41:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add native `queue_before_enqueue` and `queue_after_enqueue` plugin hooks around follow-up queue enqueue (`agent-runner`). - Emit the same hooks on embedded steering (`queueEmbeddedPiMessageWithOutcomeAsync`) with `queueMode: "steer"`, `originating

### #81341 [AI-assisted] Fix ACP bound thread follow-up delivery

- bucket: needs_proof
- author: qiyueqiu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-05-26T19:42:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: follow-up messages sent inside a Discord Thread bound to a spawned ACP runtime session could run the ACP turn but suppress the child session's visible reply. - Why it matters: `/acp spawn ... --thread` creates a user-facing thread; follow

### #80455 fix(doctor): suppress --fix trailer when no pending config changes remain

- bucket: ready_for_maintainer
- author: KeWang0622
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-27T04:57:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw doctor` (without `--fix`) prints `Run "openclaw doctor --fix" to apply changes.` on every run, even when nothing in the run actually had a pending config change. After a successful `--fix` settles the workspace, a follow-up plai

### #80716 docs: add Codex long-task reliability runbook

- bucket: needs_proof
- author: scarlettdetekelala
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-27T04:59:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a public Codex long-task reliability runbook based on a field deployment where long Telegram/cron tasks kept appearing stalled or failing even after queue/concurrency tuning. The report is intentionally sanitized and generic. It documents the k

