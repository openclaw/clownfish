---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-069
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
  - "#71235"
  - "#71940"
  - "#72215"
  - "#72253"
  - "#72267"
  - "#72495"
  - "#72713"
  - "#72792"
  - "#72843"
  - "#73122"
  - "#73171"
  - "#73311"
  - "#73355"
  - "#73382"
  - "#73746"
  - "#73883"
  - "#73897"
  - "#74083"
  - "#74200"
  - "#74231"
  - "#74266"
  - "#74274"
  - "#74488"
  - "#74529"
  - "#87968"
cluster_refs:
  - "#71235"
  - "#71940"
  - "#72215"
  - "#72253"
  - "#72267"
  - "#72495"
  - "#72713"
  - "#72792"
  - "#72843"
  - "#73122"
  - "#73171"
  - "#73311"
  - "#73355"
  - "#73382"
  - "#73746"
  - "#73883"
  - "#73897"
  - "#74083"
  - "#74200"
  - "#74231"
  - "#74266"
  - "#74274"
  - "#74488"
  - "#74529"
  - "#87968"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.208Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 69

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #71235 Dockerfile: add python -> python3 symlink for bookworm

- bucket: needs_proof
- author: boundedagency
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, size: XS, triage: risky-infra, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:18:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a conditional `python` → `python3` symlink to every Debian-based OpenClaw Dockerfile so agents that default to `python` (rather than `python3`) don't waste a tool round trip on `command not found`. ## Problem Debian bookworm dropped the unversio

### #71940 fix(browser): fall back to Hyprland grim capture for headed viewport screenshots

- bucket: needs_proof
- author: Angfr95
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:19:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #54470 ### Problem On native Windows, `openclaw webhooks gmail setup --account` crashed immediately with `Error: spawn gcloud ENOENT`. Node's `child_process.spawn` with `shell: false` does not consult `PATHEXT`, so bare `gcloud`, `gog`, and `tailscale` 

### #72215 Gateway: allow cron.enabled and compaction mode config paths

- bucket: needs_proof
- author: YangManBOBO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:19:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `cron.enabled` to the gateway tool config mutation allowlist so owner automation can toggle cron through `config.patch`. - Add `agents.defaults.compaction.mode` to the same allowlist so compaction mode can be updated via API-driven gateway edi

### #72253 fix(heartbeat): keep benign exec completions internal

- bucket: needs_proof
- author: GodsBoy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:19:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: benign async exec completions, including restart-cleanup `signal SIGTERM`, can be relayed into user chat as noisy failure summaries. - Why it matters: routine gateway/session restarts can produ

### #72267 fix: zsh compdef directive on first line

- bucket: needs_proof
- author: gigamonster256
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:19:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: zsh completions do not work when auto loaded - Why it matters: zsh completions must have the #compdef directive on the first line to work properly (works fine when sourced but not loaded automatically from fpath) - What changed: zsh compl

### #72495 fix(agents): harden workspace bootstrap cache identity

- bucket: needs_proof
- author: aimqwest
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:20:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Objective Harden the guarded workspace bootstrap file cache identity so an equal-size in-place edit with restored `mtime` cannot keep stale bootstrap instructions cached. This is the narrow cache-identity follow-up to the security tradeoff surfaced on #72406 a

### #72713 [codex] fix: allow trusted .openclaw symlink

- bucket: needs_proof
- author: sgaofen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:20:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #72572. This restores support for dotfile-managed `~/.openclaw` directories while keeping exec approval paths hardened on both the Node and macOS node-host paths. - allow trusted first-level `~/.openclaw` symlinks on POSIX after validating li

### #72792 fix(talk): resolve config from runtime secrets

- bucket: needs_proof
- author: haishmg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, extensions: qa-lab, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:20:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `talk.config` could pass raw `talk.providers.*.apiKey` SecretRef wrappers into provider-specific config resolution. - Why it matters: Talk clients use `talk.config` for discovery, so a documented SecretRef-backed provider key could break 

### #72843 fix(agents): warm context-window cache for the gateway daemon

- bucket: needs_proof
- author: jakepresent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:20:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What The long-running gateway daemon never warms the context-window cache, so synchronous lookups on the status path return `DEFAULT_CONTEXT_TOKENS = 200_000` until the first agent run completes. That value then gets persisted onto the session record and ra

### #73122 test claude-cli backend registration guardrails

- bucket: needs_proof
- author: szupzj18
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: anthropic, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:21:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a bundled Anthropic loader guardrail proving `claude-cli` is registered and resolvable as a CLI backend. - Assert the same test does not register `claude-cli` as an embedded agent harness, matching the current runtime-family split. - Add a leg

### #73171 Add bounded status gateway auth fallback

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:21:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a bounded fallback when resolving gateway auth for deep/status scans - preserve existing status behavior while avoiding hangs when auth lookup stalls - keep promised Discord decision digest artifact path present for tool-call audit output ## V

### #73311 Add Control UI session kind filter

- bucket: needs_proof
- author: Shawn-Kim96
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, size: M, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:21:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a Control UI chat-header session kind filter for main/direct, group, subagent, dreaming, cron, and other sessions. - Keeps filtering UI-local so `sessions.list` params and gateway protocol stay unchanged. - Preserves the selected session in t

### #73355 fix(cron): add .catch() re-arm and watchdog to prevent runtime timer chain death

- bucket: needs_proof
- author: SkywingsWang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:22:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the cron `setTimeout` chain breaks at runtime, the scheduler silently stops firing and never recovers until a gateway restart. This was observed after ~2.5 days of continuous gateway uptime on macOS (Apple Silicon) with no errors logged. **Root

### #73382 fix(amazon-bedrock): resolve 200K context window for Claude 3.x and unlisted Anthropic Bedrock variants

- bucket: needs_proof
- author: wenxu007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:22:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `extensions/amazon-bedrock/discovery.ts` only listed a handful of Anthropic models in `KNOWN_CONTEXT_WINDOWS`. Common Bedrock IDs such as `anthropic.claude-3-opus-20240229-v1:0`, `anthropic.claude-3-sonnet-20240229-v1:0`, and `anthropic.c

### #73746 feat(tasks): improve task state transitions and lifecycle formatting

- bucket: needs_proof
- author: neofdezf-cloud
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XL, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:23:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add explicit intermediate active task states for approval waits and external waits - propagate those active-state semantics across registry maintenance, flow guards, CLI views, and auto-reply task rendering - add compressed operational summaries p

### #73883 feat(session): add includeArchived to chat.history and sessions_history

- bucket: needs_proof
- author: CadanHu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, app: web-ui, gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:23:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements the read-only path of [#45003](https://github.com/openclaw/openclaw/issues/45003)'s 3-PR roadmap: give agents and `chat.history` callers a way to recover context that lives in `.reset.<ts>` archives, **without** resurrecting those archive

### #73897 Fix Android node system.run shell wrapper

- bucket: needs_proof
- author: alixchow
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, size: XS, plugin: file-transfer, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:23:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Title: Fix Android node system.run shell wrapper Summary: - Use Termux's shell path for Android node system.run wrappers. - Keep Windows and other POSIX platforms unchanged. - Document the Android/Termux node-host shell behavior. Problem: Android/Termux does n

### #74083 fix(sandbox): pass --init so tini reaps zombie processes

- bucket: needs_proof
- author: luckylhb90
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, agents, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:25:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: What: Adding --init to the docker sandbox makes tini the PID 1 and reaps zombie processes. Why: Long-running sandboxes generate a large number of short-lived child processes (shell/browser helpers), and the entrypoint does not reap them →

### #74200 fix(skills): never wipe target skills dir on sync to prevent data los…

- bucket: needs_proof
- author: luckylhb90
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:25:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: …s on partial load `syncSkillsToWorkspace` used to call `fsp.rm(targetSkillsDir)` before recopying every skill. Any transient failure inside `loadWorkspaceSkillEntries` (a filesystem hiccup, a config parse error, an agent-filter edge case) returns fewer entrie

### #74231 fix(media): include configured roots in path-not-allowed error hint

- bucket: needs_proof
- author: ebarkhordar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:25:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `assertLocalMediaAllowed` rejects out-of-tree paths with: ``` Local media path is not under an allowed directory: /tmp/file.png ``` This tells the operator their path was wrong but not what *was* allowed. In production the user just sees the rejecti

### #74266 docs(gateway): add external auth-proxy recipe

- bucket: needs_proof
- author: coletebou
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:26:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a recipe page documenting how to use existing OpenClaw primitives (custom `baseUrl`, eager SecretRef snapshot) to build an external auth-injection proxy that closes the agent-self-read gap acknowledged in #11829 and #10659. The page does **not*

### #74274 fix(control-ui): download assistant markdown attachments

- bucket: needs_proof
- author: Neomail2
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:26:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - render assistant `mediaUrl` / `mediaUrls` payload fields as attachment cards in the Control UI - add download links for non-image assistant attachments instead of opening them inline - force `Content-Disposition: attachment` for local markdown fil

### #74488 feat(openai): dynamic model catalog discovery from upstream /v1/models

- bucket: needs_proof
- author: sunapi386
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: openai, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:26:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: First slice of the design proposed in #74481 — adds the discovery primitive without yet wiring it into catalog resolution. Keeping infrastructure and integration in separate PRs so the cache strategy / response mapping can be reviewed independently of the bigg

### #74529 fix(matrix): rewrite /keys/upload OTK ID-collision 400 to a synthetic 200

- bucket: needs_proof
- author: nklock
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:26:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Rewrite /keys/upload OTK ID-collision 400 to a synthetic 200 ## What this PR does Unblocks Matrix E2EE bootstrap on accounts where `matrix-rust-sdk` regenerates a one-time-key with an ID it has already published. Before this change, the OTK upload determinis

### #87968 fix(ui): treat started managed-service handoff as pending update instead of skipped

- bucket: needs_proof
- author: xydigit-sj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:26:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #87889. When a user clicks "Update now" in the Dashboard on a global install with a managed-service supervisor, the Gateway starts a managed-service handoff and returns `ok=true` with `result.status="skipped"` and `reason="managed-service-hand

