---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-031
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
  - "#87521"
  - "#87527"
  - "#87260"
  - "#87394"
  - "#87164"
  - "#87275"
  - "#87083"
  - "#87166"
  - "#87202"
  - "#87330"
cluster_refs:
  - "#87521"
  - "#87527"
  - "#87260"
  - "#87394"
  - "#87164"
  - "#87275"
  - "#87083"
  - "#87166"
  - "#87202"
  - "#87330"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.603Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 31

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #87521 fix(infra): normalize Request input in proxy-fetch to prevent dropped headers/body

- bucket: needs_proof
- author: geekhuashan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-05-29T05:12:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When callers pass a `Request` object or a request-like plain object `{url, method, headers, body}` to `makeProxyFetch` / `resolveProxyFetchFromEnv`, the current code casts `input as string | URL` and passes `init` directly to undici's `fetch`. This 

### #87527 fix(bash-tools): default stdin to pipe-closed in service-managed mode

- bucket: needs_proof
- author: geekhuashan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-05-29T05:12:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When OpenClaw runs as a launchd service (`OPENCLAW_SERVICE_MODE=launchd`), spawned child processes inherit fd 0 (stdin) from the service manager process. On Node 26, launchd closes fd 0 before exec. The child process inherits a closed file descripto

### #87260 docs: add secure multi-agent routing pattern for research workflows

- bucket: needs_proof
- author: SeverinQuan
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-05-29T05:12:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds a documentation example for a secure Multi-Agent routing pattern in OpenClaw. The pattern separates routine execution from research-heavy workflows: - `main Agent` remains the default interaction and execution entrypoint. - `main Agent`

### #87394 docs(gateway): add optional caffeinate-wrapper note to macOS troubleshooting

- bucket: stale_unassigned
- author: arunjeetsingh
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, proof: supplied, P3, rating: 🌊 off-meta tidepool, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-05-29T05:12:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a fourth "What to do" step in the macOS gateway troubleshooting section that just landed via 6727985365, documenting the well-established operator pattern of wrapping the gateway in `caffeinate(8)` to prevent macOS Maintenance Sleep entirely. T

### #87164 Fix Session File Corruption During Embedded Retry (critical bug)

- bucket: needs_proof
- author: wmaulanaaishq
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-05-29T05:12:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary What problem does this PR solve? Fixes critical bug where session files become permanently corrupted with an EmbeddedAttemptSessionTakeoverError if an embedded retry fails while the model I/O lock is released. Previously, if the session file fingerprin

### #87275 fix(tools): treat non-positive gateway timeoutMs as absent

- bucket: needs_proof
- author: valkyriweb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-29T05:12:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveGatewayOptions` in `src/agents/tools/gateway.ts` clamps an optional `opts.timeoutMs` via `Math.max(1, Math.floor(opts.timeoutMs))` before falling back to the 30s default. A caller-supplied `0` was rewritten to `1ms` instead of falling back t

### #87083 fix(agents): break bootstrap-context append doomloop with a recent-entry circuit breaker

- bucket: stale_unassigned
- author: YOMXXX
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-05-29T05:13:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `FULL_BOOTSTRAP_COMPLETED_PERSIST_LIMIT = 10` plus two pure helpers (`countRecentCompletedBootstrapTurns`, `hasReachedBootstrapPersistLimit`) in `src/agents/bootstrap-files.ts`. The helpers reuse the existing tail-scan budget (`CONTINUATION_SC

### #87166 fix(models): strip plaintext api keys from models json

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-29T05:13:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Part of #11829. Replaces #83294; the contributor branch cannot be updated because maintainer edits are disabled. This keeps the contributor commits and adds maintainer fixups. Summary: - Strip newly generated plaintext provider `apiKey` values from `models.jso

### #87202 refactor: internalize OpenClaw agent runtime

- bucket: needs_proof
- author: deepshekhardas
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: matrix, channel: slack, channel: telegram, channel: tlon, channel: voice-call, channel: whatsapp-web, app: macos, app: web-ui, gateway, extensions: llm-task, extensions: memory-core, cli, scripts, commands, docker, agents, size: XL, extensions: acpx, extensions: anthropic, extensions: openai, extensions: minimax, extensions: cloudflare-ai-gateway, extensions: byteplus, extensions: huggingface, extensions: kimi-coding, extensions: moonshot, extensions: synthetic, extensions: together, extensions: volcengine, extensions: xiaomi, extensions: kilocode, extensions: nvidia, extensions: vercel-ai-gateway, extensions: fal, extensions: tavily, extensions: deepseek, channel: qqbot, extensions: qa-lab, extensions: arcee, extensions: codex, extensions: lmstudio, extensions: tokenjuice, extensions: tencent, plugin: google-meet, extensions: senseaudio, extensions: litellm, extensions: inworld, extensions: gradium, plugin: azure-speech, plugin: migrate-hermes, plugin: migrate-claude, extensions: cerebras, plugin: file-transfer, triage: needs-real-behavior-proof, extensions: amazon-bedrock, extensions: anthropic-vertex, extensions: brave, extensions: chutes, extensions: elevenlabs, extensions: firecrawl, extensions: github-copilot, extensions: google, extensions: mistral, extensions: ollama, extensions: opencode, extensions: opencode-go, extensions: openrouter, extensions: perplexity, extensions: xai, extensions: sglang, extensions: vllm, extensions: zai, dependencies-changed, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, extensions: policy
- gitcrawl snapshot updated: 2026-05-29T05:13:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Applies changes from PR #85341 (internalize agent runtime) on top of latest main.

### #87330 fix: prevent sessions_yield completion wake freeze

- bucket: needs_proof
- author: adam-birddog
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-05-29T05:13:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prefer direct requester-agent handoff for expected subagent completion messages so yielded parent sessions resume instead of being steered into an aborting active run. - Mark sessions_yield abort transitions as temporarily not accepting embedded m

