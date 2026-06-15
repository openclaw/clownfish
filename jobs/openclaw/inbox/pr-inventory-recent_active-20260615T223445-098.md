---
repo: openclaw/openclaw
cluster_id: pr-inventory-recent_active-20260615T223445-098
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
  - "#93290"
  - "#90151"
  - "#92196"
  - "#93392"
  - "#91408"
  - "#92491"
  - "#93098"
  - "#91714"
  - "#93402"
cluster_refs:
  - "#93290"
  - "#90151"
  - "#92196"
  - "#93392"
  - "#91408"
  - "#92491"
  - "#93098"
  - "#91714"
  - "#93402"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.807Z; bucket=recent_active; no GitHub mutation is possible in plan mode."
---

# PR Inventory recent_active 98

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #93290 fix(test-env): skip browser cache directories in copyDirIfExists

- bucket: recent_active
- author: whiteyzy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 🔁 re-review loop, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T13:48:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91893: `copyDirIfExists` copies multi-GB browser cache dirs during live test setup, causing ENOSPC. **Fix**: Add `filter` to `fs.cpSync` skipping `Cache_Data` and `browser_recordings`. ## Linked context Closes #91893 ## Real behavior proof (r

### #90151 docs: clarify OpenClaw vs Codex code mode

- bucket: recent_active
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T17:59:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Closes #83390. - Adds a side-by-side comparison table for OpenClaw code mode vs Codex Code Mode in `docs/reference/code-mode.md`. - Adds a reverse link from `docs/plugins/codex-harness.md` so Codex harness readers can find the comparison anchor. -

### #92196 fix(memory-search): stop hybrid fusion from discounting vector-only multimodal results

- bucket: recent_active
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, P2, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-15T18:01:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Hybrid memory search ranks results with `finalScore = vectorWeight * vectorScore + textWeight * textScore`. `mergeHybridResults` (`extensions/memory-core/src/memory/hybrid.ts`) applied that formula uniformly to every candidate. Image and audio chunk

### #93392 fix(auto-reply): keep direct user_request turns visible after fallback NO_REPLY

- bucket: recent_active
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied
- gitcrawl snapshot updated: 2026-06-15T18:29:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve direct `user_request` turns after fallback `NO_REPLY` handling. - Ensure fallback suppression does not hide turns that still need a visible user-facing reply. - Adds regression coverage through embedded-agent runner and auto-reply e2e tes

### #91408 feat(channels/acp): support ACP bindings for direct-message peers

- bucket: recent_active
- author: pablospe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, gateway, scripts, size: L, proof: supplied, P2, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-15T18:48:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Motivation OpenClaw can route a conversation to an **ACP backend** — an external agent runtime (the `acpx` agents: claude-code, codex, gemini, droid, opencode, or any custom ACP runtime) — via a `type:"acp"` binding. On Telegram, a `type:"acp"` binding curr

### #92491 fix(mcp): reject blocked stdio env keys at MCP config write time (fixes #92474)

- bucket: recent_active
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-15T18:53:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: `openclaw mcp set` silently saves MCP server configs with blocked stdio env keys (e.g. `PYTHONPATH`). At every MCP operation — probe, doctor, status, and each spawn — the runtime resolver drops the key and logs a warning, flooding th

### #93098 fix(tools): add encoding parameter to read tool for non-UTF-8 files

- bucket: recent_active
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:57:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted (Claude). All behavior proof below was produced and verified by a human-run command in a real local checkout using OpenClaw CLI. ## Summary - **Problem:** The read tool always decodes files as UTF-8, causing garbled text (mojibake) when reading G

### #91714 fix(agents): apply Gemini schema cleaning for Gemini models via OpenAI-compat providers

- bucket: recent_active
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:59:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **Problem:** `isGeminiProvider` only checked if the provider name contained "google" or "gemini". This missed OpenAI-compatible providers (like jjcc) that route to Gemini models, causing cron tool schema with `anyOf` to be rejected by Gemini's stric

### #93402 fix(gateway): log websocket handshake phase

- bucket: recent_active
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied
- gitcrawl snapshot updated: 2026-06-15T19:00:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a Gateway WebSocket handshake phase tracker so failure logs report the last completed phase instead of only the terminal outcome. - Emits `phase=<value>` on preauth handshake timeout and pre-connect close logs, with matching structured metada
