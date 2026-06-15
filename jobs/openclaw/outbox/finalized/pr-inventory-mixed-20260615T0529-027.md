---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-027
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
  - "#81154"
  - "#84703"
  - "#84479"
  - "#85176"
  - "#85183"
  - "#85229"
  - "#85235"
  - "#85241"
  - "#85292"
  - "#85317"
cluster_refs:
  - "#81154"
  - "#84703"
  - "#84479"
  - "#85176"
  - "#85183"
  - "#85229"
  - "#85235"
  - "#85241"
  - "#85292"
  - "#85317"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.602Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 27

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #81154 fix(installer): bypass onboard exec when existing config is present

- bucket: stale_unassigned
- author: adone0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-05-28T05:00:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `scripts/install.sh:main()` already detects an existing `~/.openclaw/openclaw.json` (or the legacy `~/.clawdbot/clawdbot.json`) in the install finalization branch, runs `run_doctor`, flips `should_open_dashboard=true`, and sets `skip_onboard=true`

### #84703 fix: clarify custom provider HTML responses

- bucket: maintainer_owned
- author: zerone0x
- author association: CONTRIBUTOR
- draft: no
- assignees: osolmaz
- labels: commands, agents, size: S, triage: mock-only-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-28T06:42:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reject custom-provider verification probes that return successful-looking non-JSON responses, with a `/v1` base URL hint. - Surface a clearer OpenAI-compatible runtime error when the provider returns HTML instead of an API response. - Add regressi

### #84479 新增 CI 自動修復管線：失敗 → Codex 修復 → ClawSweeper 通知

- bucket: needs_proof
- author: yuye7973
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: dirty-candidate, triage: external-plugin-candidate, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-28T09:45:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 新增 CI 失敗時的自動修復管線，讓 OpenClaw 能自己處理常見的 CI 問題： - **`.github/workflows/ci-fix-agent.yml`**（新增）：CI 失敗後自動觸發 Codex agent 修復，含安全防護（同 repo only、6 小時 3 次限制、fork PR 改為發診斷留言） - **`.github/codex/prompts/ci-fix-agent.md`**（新增）：Codex agent 的修復範圍與限制定義 - **`.github/

### #85176 fix(gateway): broadcast idle timeout errors to clients after agent run started

- bucket: needs_proof
- author: JulyanXu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-28T09:51:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When an LLM idle timeout occurs after the agent has started (e.g., after tool calls), the error is returned as a normal `{ text, isError: true }` payload via the `deliver` callback — it is NOT thrown. The `.then()` handler at line 2882 only called `

### #85183 Preserve authored config intent during update

- bucket: maintainer_owned
- author: joshavant
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, maintainer, size: XL, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-28T09:51:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve pre-update authored `agents` model intent after post-core doctor/plugin update rewrites - keep legacy Codex routes canonicalized to `openai/*` while retaining `agentRuntime.id: "codex"` - preserve authored plugin/agent `${VAR}` references

### #85229 Deny sensitive host file mutations

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, dependencies-changed, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-28T09:51:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Bump `@openclaw/fs-safe` to `0.3.0` and expose the deny-mutation types/helpers OpenClaw needs. - Add a sensitive host mutation policy for write/edit/apply_patch, including SSH keys, shell profiles, credential stores, OpenClaw state/OAuth paths, co

### #85235 surface message-tool-only diagnostics

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, maintainer, size: M, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-28T09:51:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Carry message-tool-only delivery mode, prompt-persistence suppression, and inbound event kind through agent run context. - Surface non-deliverable message-tool-only lifecycle endings as chat error diagnostics for GUI/TUI consumers. - Mirror suppre

### #85241 fix(cli-runner): only the creating run closes the shared MCP loopback server

- bucket: needs_proof
- author: wmelonw
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-28T09:51:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A run that **reused** an existing in-process MCP loopback server still tore it down on run end, killing a server another run was actively using. `ensureMcpLoopbackServer()` returns a shared singleton. When a parent session created it and a one-shot 

### #85292 fix(config): scope dry-run bundled channel validation

- bucket: ready_for_maintainer
- author: zarapharr
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, rating: 🧂 unranked krab, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-05-28T09:51:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Allow empty/no-op `config patch --dry-run` payloads without writing config. - Preserve dry-run touched paths and only force bundled-channel validation when a touched path is under `channels.<id>`. - Forward `touchedPaths` / `validateBundledChannel

### #85317 fix(google): bypass SSRF private network restrictions for Gemini search

- bucket: needs_proof
- author: it114115-student
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, scripts, commands, size: M, proof: supplied, extensions: google, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-28T09:51:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Configuring a custom local or private network base URL (such as a local LiteLLM proxy at `192.168.249.129:4000`) for the Gemini `webSearch` provider resulted in `SsrFBlockedError: Blocked hostname or private/internal/special-use IP addres

