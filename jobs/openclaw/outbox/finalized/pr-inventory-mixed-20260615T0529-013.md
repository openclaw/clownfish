---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-013
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
  - "#84978"
  - "#84934"
  - "#84987"
  - "#82354"
  - "#84389"
  - "#84547"
  - "#61519"
  - "#85098"
  - "#85147"
  - "#85148"
cluster_refs:
  - "#84978"
  - "#84934"
  - "#84987"
  - "#82354"
  - "#84389"
  - "#84547"
  - "#61519"
  - "#85098"
  - "#85147"
  - "#85148"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.601Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 13

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #84978 feat(mantis): add Discord desktop proof draft

- bucket: maintainer_owned
- author: thewilloftheshadow
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, maintainer, size: XL, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-21T14:29:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **Untested first draft.** This is a first-pass Discord mirror of the existing Telegram desktop proof workflow. It has syntax/YAML sanity only; no live Crabbox/Discord proof has been run yet. Describe the problem and fix in 2–5 bullets: If this PR fi

### #84934 fix: model ref normalization, Vertex transport routing, symlink workspace dirs

- bucket: needs_proof
- author: cropsgg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-21T15:12:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes three unrelated bugs (Closes #84887, #84804, #84696): - **#84887** — Plugin runtime LLM allowlist diagnostics use `modelKey()` so provider-qualified refs are not double-prefixed in policy errors (e.g. stays `openrouter/gpt-5.4-mini`, not `open

### #84987 fix(models): omit plaintext api keys from models.json

- bucket: needs_proof
- author: junn-dev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-21T15:46:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #11829. This implements the Layer 1 hardening for `models.json` generation: - omit plaintext provider `apiKey` values before serializing agent-visible `models.json` - preserve non-secret auth markers such as known environment variable markers so marker-b

### #82354 fix(msteams): emit message:sent hook on reply delivery

- bucket: needs_proof
- author: ndholakia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-21T20:58:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes a parity gap with telegram: the msteams reply-dispatcher previously bypassed both the internal hook bus AND the plugin-SDK `message_sent` hook entirely on outbound delivery. Downstream listeners (audit-loggers, per-user memory substrates) can

### #84389 Gateway: add oc heartbeat agents endpoint

- bucket: ready_for_maintainer
- author: hugin-vault
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-21T20:59:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Added `GET /oc/heartbeat/agents`, a read-only gateway endpoint that returns per-agent `lastSeenAt` values from the live in-memory heartbeat runner. - Exposed a small snapshot helper on the heartbeat runner so the HTTP layer can read the authoritative

### #84547 perf: attach jiti-normalized alias via source-object property

- bucket: ready_for_maintainer
- author: jokemanfire
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-21T21:00:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Multiple duplicate strings were found in the snapshot, with each instance occupying 101K Change-Id: Ia253dc246c2422366643e2b2ce92580b571d5f4c ## Summary - Problem:Heap snapshots revealed that three LRU caches in sdk-alias.ts (normalizedJitiAliasMapCache, plugi

### #61519 CI: report circular dependencies in PRs

- bucket: maintainer_owned
- author: huntharo
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, maintainer, size: L, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-21T21:16:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: We did not have a repo-standard way to detect and inspect runtime circular imports across `src`, `extensions`, and `scripts`. - Why it matters: These cycles can drag large strongly connected co

### #85098 fix(telegram): honor table mode while chunking

- bucket: needs_proof
- author: zerone0x
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-21T21:26:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Telegram outbound chunking ignored `channels.telegram.markdown.tables` for non-HTML/streamed chunked messages. - Solution: propagate outbound `cfg`/`accountId` into chunker contexts and resolve Telegram table mode before Markdown-to-HTML 

### #85147 fix(docker): pre-create workspace and config dirs for named volumes

- bucket: needs_proof
- author: yiyouguisu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T01:13:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Docker named volumes mounted at `/home/node/.openclaw/workspace` and `/home/node/.config/openclaw` come up `root:root` because only the state dir (`/home/node/.openclaw`) was pre-created in the image. This blocks first-run agent commands with `EACCE

### #85148 fix(codex): preserve webSearch query and action metadata in transcript

- bucket: needs_proof
- author: yiyouguisu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T01:15:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Codex-native `web_search` calls were mirrored into session/chat logs with an empty query string `{"query":""}` and a bare `{"status":"completed"}` result, making it impossible to tell what the model actually searched for. ## Fix 1. **Empty query sen

