---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-038
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
  - "#82290"
  - "#82466"
  - "#82490"
  - "#82538"
  - "#82561"
  - "#83000"
  - "#83043"
  - "#84869"
  - "#84902"
  - "#84908"
  - "#84916"
  - "#84934"
  - "#84937"
  - "#84962"
  - "#84997"
  - "#85134"
  - "#85159"
  - "#85172"
  - "#85213"
  - "#85225"
  - "#85241"
  - "#85261"
  - "#85293"
  - "#85317"
  - "#85335"
  - "#85399"
  - "#90625"
  - "#90875"
  - "#90905"
  - "#90931"
  - "#90960"
  - "#93116"
  - "#85507"
  - "#85546"
  - "#85561"
  - "#85571"
  - "#85583"
  - "#93102"
  - "#85611"
  - "#85671"
cluster_refs:
  - "#82290"
  - "#82466"
  - "#82490"
  - "#82538"
  - "#82561"
  - "#83000"
  - "#83043"
  - "#84869"
  - "#84902"
  - "#84908"
  - "#84916"
  - "#84934"
  - "#84937"
  - "#84962"
  - "#84997"
  - "#85134"
  - "#85159"
  - "#85172"
  - "#85213"
  - "#85225"
  - "#85241"
  - "#85261"
  - "#85293"
  - "#85317"
  - "#85335"
  - "#85399"
  - "#90625"
  - "#90875"
  - "#90905"
  - "#90931"
  - "#90960"
  - "#93116"
  - "#85507"
  - "#85546"
  - "#85561"
  - "#85571"
  - "#85583"
  - "#93102"
  - "#85611"
  - "#85671"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.480Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 38

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #82290 fix(gateway): support pinned daemon runtime paths

- bucket: needs_proof
- author: darkamenosa
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, commands, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:00:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: managed gateway/node services could start with Homebrew or PATH-selected runtimes instead of the operator-selected mise/Bun executable. - Why it matters: launchd/systemd/schtasks do not load interactive shell startup files, so service res

### #82466 fix(plugins): suppress hook-pack fallback noise when plugin lacks compiled runtime

- bucket: needs_proof
- author: Sanjays2402
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:01:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #82454. When a third-party plugin declares `openclaw.extensions` with a TypeScript entry (e.g. `./index.ts`) but ships no compiled JavaScript, the install command produced two confusing errors back-to-back: ``` package install requires compile

### #82490 fix(browser): reject credentialed navigation URLs

- bucket: needs_proof
- author: lidge-jun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:01:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reject HTTP(S) browser navigation URLs that contain embedded username/password credentials before the browser tool sends them to a local browser client or remote browser proxy. - Enforce the same credentialed-URL block in the browser navigation gu

### #82538 fix(gateway): harden token comparison paths

- bucket: needs_proof
- author: bactiar291
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:01:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: gateway runtime token and assistant media ticket comparisons used manual length checks before `timingSafeEqual`. - Why it matters: these are secret-bearing validation paths, so keeping them on one shared constant-time helper avoids drift 

### #82561 feat(commands): add /long to fork long-running tasks into a detached subagent

- bucket: needs_proof
- author: gado-ships-it
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T02:01:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Long-running tool calls (deploys, broad test runs, slow web-scraping, multi-file refactors) are easy to start without realizing they'll exceed the conversation turn's no-output watchdog and get killed mid-run, losing all progress and 

### #83000 [codex] Fix delta-only assistant chat projection

- bucket: needs_proof
- author: flashosophy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:01:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - project assistant live-chat deltas when events carry `data.delta` without cumulative `data.text` - apply the same delta-only handling to the embedded TUI backend - add gateway and embedded TUI regressions for delta-only assistant events Fixes #829

### #83043 perf(gateway): cache compiled regexes used by oversized-transcript field extract

- bucket: needs_proof
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:01:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `src/gateway/session-utils.fs.ts:extractJsonStringFieldPrefix` and `extractJsonNullableStringFieldPrefix` recompile fresh regex objects on every invocation. `buildOversizedTranscriptRecord` calls them repeatedly for oversized records (`id`, `parentI

### #84869 fix(browser): normalize profile color matching and simplify port parsing

- bucket: needs_proof
- author: sovushik
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:04:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- normalize used profile colors to uppercase before palette checks\n- simplify URL port parsing logic while preserving default 80/443 fallback\n- update case-insensitive color allocation test to assert expected next color\n\n## Validation\n- pnpm t

### #84902 fix(openai): honor provider thinking profiles

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: openai, triage: mock-only-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:05:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes openclaw/openclaw#84880. OpenAI/Codex GPT-5 thinking validation was still able to collapse to off-only when the model catalog contained a stale `reasoning: false` row. That made `sessions_spawn(...thinking: "high")` reject supported models suc

### #84908 feat(slack): support reply broadcast directive

- bucket: needs_proof
- author: guidsen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, agents, size: M, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:05:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - adds `[[slack_reply_broadcast]]` / `[[reply_broadcast]]` directive parsing and streaming propagation - forwards Slack thread replies with `reply_broadcast: true` through outbound send paths and Slack action handling - adds targeted tests for direc

### #84916 [codex] Skip ACP timeout session config

- bucket: needs_proof
- author: henkterharmsel
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:05:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR stops OpenClaw from sending runtime timeouts as ACP `session/set_config` options. OpenClaw still enforces timeouts through its own manager/gateway run watchdogs. The change only removes the ACP session config emission for `timeout` / `timeou

### #84934 fix: model ref normalization, Vertex transport routing, symlink workspace dirs

- bucket: needs_proof
- author: cropsgg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:06:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes three unrelated bugs (Closes #84887, #84804, #84696): - **#84887** — Plugin runtime LLM allowlist diagnostics use `modelKey()` so provider-qualified refs are not double-prefixed in policy errors (e.g. stays `openrouter/gpt-5.4-mini`, not `open

### #84937 feat: add minimal Discord /ask command

- bucket: needs_proof
- author: ximanuki
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: discord, scripts, size: XL, triage: dirty-candidate, triage: external-plugin-candidate, proof: supplied, extensions: openrouter, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:06:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add bundled Ask plugin with a Discord-native `/ask` command - choose button/select/modal from the prompt and store log-only ask sessions/feedback - add `/ask grill <request>` as a prefix-mode clarification flow that asks one modal question at a ti

### #84962 Railway/fix control UI origin

- bucket: needs_proof
- author: 275C
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, docker, size: XS, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:06:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #84997 [AI-assisted] Add NEAR AI Cloud provider

- bucket: needs_proof
- author: PierreLeGuen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XL, proof: supplied, dependencies-changed, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:07:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw does not currently expose NEAR AI Cloud as a bundled model provider. - Solution: Adds a bundled `nearai` provider plugin for NEAR AI Cloud's OpenAI-compatible API at `https://cloud-api.near.ai/v1`. - What changed: Adds API-key on

### #85134 fix(slack): respect mute / stop-responding requests in shared channel threads

- bucket: needs_proof
- author: cznworld
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:11:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary In shared Slack channel threads, the bot kept replying after users asked it to stop. Two failure modes: 1. After the bot's first reply in a thread, every subsequent message implicitly re-engaged the bot via `bot_thread_participant` in `prepareSlackM

### #85159 fix(commands): show current level in /verbose and /reasoning menus

- bucket: needs_proof
- author: yiyouguisu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:12:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The v1 fix (#85150, closed) added `argsMenu: "auto"` to `/verbose` but bypassed the current status display. This proper fix: 1. Adds `argsMenu: "auto"` to `/verbose` (matching `/think`, `/trace`, `/fast`) 2. Extends `formatTelegramCommandArgMenuTitl

### #85172 fix(matrix): respect is_direct: false in isStrictDirectRoom

- bucket: needs_proof
- author: JulyanXu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:12:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `isStrictDirectRoom` in `extensions/matrix/src/matrix/direct-room.ts` returned `evidence.strict` directly without checking `memberStateFlag`. When a 2-person Matrix room has `is_direct: false` on the membership event, the function still classified i

### #85213 fix(codex): expose bound conversation dynamic tools

- bucket: needs_proof
- author: wizdomhall-hash
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: XL, extensions: codex, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:13:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - expose OpenClaw dynamic plugin tools to native bound Codex conversation threads - refresh managed Codex bindings when the dynamic-tool surface changes - route Codex app-server dynamic tool calls back through OpenClaw plugin handlers with bounded t

### #85225 fix: skip default idle heartbeat without HEARTBEAT.md

- bucket: needs_proof
- author: ANONYMOUSZED-beep
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:14:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Skip default, unconfigured idle heartbeat runs when the agent workspace has no HEARTBEAT.md, no due commitments, and no event wake payload. - Preserve existing behavior for explicit heartbeat configuration and wake/cron/exec-triggered runs. - Add a r

### #85241 fix(cli-runner): only the creating run closes the shared MCP loopback server

- bucket: needs_proof
- author: wmelonw
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:14:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A run that **reused** an existing in-process MCP loopback server still tore it down on run end, killing a server another run was actively using. `ensureMcpLoopbackServer()` returns a shared singleton. When a parent session created it and a one-shot 

### #85261 fix(gateway): streaming double-finalization, replace-event accumulation, session-key 400, module cache retry, trusted-proxy case sensitivity

- bucket: needs_proof
- author: cropsgg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:15:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ```md ## Summary Describe the problem, fix, and scope in 2–5 bullets. - Problem: - Fix: - Key changes: - Explicit non-goals / out-of-scope: --- ## Why This Change Explain the user pain, regression, maintainer need, or product goal. If purely mechanical, write 

### #85293 fix(codex): prevent isolated app-server process leaks on timeout

- bucket: needs_proof
- author: shivam-9090
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:15:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary This PR fixes a bug where isolated `codex app-server` child processes were leaked and left orphaned when client initialization or individual requests timed out or hung. ### Details of Changes 1. **Combined Setup Timeout (`shared-client.ts`)**: Grou

### #85317 fix(google): bypass SSRF private network restrictions for Gemini search

- bucket: needs_proof
- author: it114115-student
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, scripts, commands, size: M, proof: supplied, extensions: google, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:16:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Configuring a custom local or private network base URL (such as a local LiteLLM proxy at `192.168.249.129:4000`) for the Gemini `webSearch` provider resulted in `SsrFBlockedError: Blocked hostname or private/internal/special-use IP addres

### #85335 feat(cron): add acpTurn for isolated ACP cron jobs

- bucket: needs_proof
- author: lxf-lxf
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, scripts, size: XL, triage: refactor-only, triage: blank-template, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:16:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Support acpTurn payloads through acpx (oneshot Cursor/Codex runs), CLI --acp, Control UI editing, job validation, and docs for install and troubleshooting. ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, 

### #85399 fix(gateway): bound startup sidecar fanout

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:17:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #85366 by moving the two startup sidecar fanout paths from fully serial sweeps to bounded, yielding background work: - ACP startup identity reconciliation now runs pending session work through `runTasksWithConcurrency` with a small concurrency

### #90625 docs: add supported iOS install path when public beta is full

- bucket: needs_proof
- author: tarsopsbot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: ios, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:24:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Document the supported install path for the iOS node when the public beta or TestFlight capacity is full. Closes #90599 ## Changes - Add explicit wording to `docs/platforms/ios.md` stating that building the iOS app from source is the supported path 

### #90875 fix(clawdock-helpers): rename path name in loop to stop mutating PATH via zsh path<->PATH linkage

- bucket: needs_proof
- author: lshgdut
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:32:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Sourcing `scripts/clawdock/clawdock-helpers.sh` from `~/.zshrc` silently mutates the user's `PATH`. The for-loop variable `path` in `_clawdock_ensure_dir` shadows zsh's special `path` array, which is bidirectionally 

### #90905 Suppress recovered read-only tool warnings after block replies

- bucket: needs_proof
- author: keshavbotagent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T02:33:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace broad visible block-reply count suppression with explicit ordering evidence from the embedded subscription state, so only block replies delivered after the terminal tool execution suppress recovered read-only/probe warnings. - Preserve lat

### #90931 fix(ui): scope local assistant avatar overrides per agent (#90890)

- bucket: needs_proof
- author: hanZeng-08
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T02:34:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90890 # Comment for Issue #90890 — Agent avatar changes overwrite all agents ## Summary The Control UI stores the assistant avatar override in `localStorage` under a single global key (`openclaw.control.assistant.v1`). Because the key is not scoped by a

### #90960 fix(google): enable vertex image and video generation

- bucket: needs_proof
- author: NeoGeoSNK
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, scripts, commands, size: M, proof: supplied, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:35:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Vertex AI generative video currently experiences SDK integration failures when fetching credentials dynamically during the predictLongRunning and polling lifecycle via `gaxios`. This patch safely unblocks video generation by explicitly identifying `

### #93116 fix(xai): respect ssrfPolicy and request.allowPrivateNetwork in image_generate

- bucket: needs_proof
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, extensions: xai, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:37:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: `extensions/xai/image-generation-provider.ts` hardcodes `resolveAllowPrivateNetwork: () => false`, blocking xAI image generation when the user configures a private-network gateway (e.g., `http://10.0.0.10:8090`). The SSRF guard fires 

### #85507 fix(slack): include assistant loading messages

- bucket: needs_proof
- author: emergentash
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:44:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - pass Slack assistant `loading_messages` into native `assistant.threads.setStatus` calls - cover loading messages in Slack monitor status tests and preview fallback dispatch tests - add a changelog entry for the native Slack thinking/status message

### #85546 feat(ui): add session rename slash command

- bucket: needs_proof
- author: btilus
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:46:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Control UI slash commands did not expose chat-side session rename commands, even though `sessions.patch` already supports session labels. - Solution: Add `/rename <title>` with `/title` as an alias and execute it locally through `sessions

### #85561 docs: use concrete URLs in markdown examples

- bucket: needs_proof
- author: SeashoreShi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:46:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replace placeholder `url` targets in inline markdown examples with concrete `https://example.com/...` URLs - do the same for markdown image examples used in channel docs ## Why Several docs pages currently use inline examples like `[label](url)` a

### #85571 fix(diagnostic): recover terminal-progress orphan embedded runs at 60s

- bucket: needs_proof
- author: rhclaw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:46:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the codex app-server emits a terminal-looking progress event (`rawResponseItem/completed`, `response.completed`, `output_item.done`, …) and then goes silent, the turn lifecycle orphans: codex effectively finished the work but `turn/completed` n

### #85583 Control-plane hardening from Optimus ops findings

- bucket: needs_proof
- author: fchaudhryspear
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, extensions: diagnostics-otel, extensions: memory-core, cli, scripts, commands, docker, agents, size: XL, channel: qqbot, extensions: qa-lab, extensions: codex, extensions: diagnostics-prometheus, extensions: deepinfra, plugin: file-transfer, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:46:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Completes the OpenClaw control-plane hardening project stack from Optimus ops findings: - ADP-237: structured A2A handoff IDs and return-route tracing. - ADP-238: session/status diagnostics and safer control-plane visibility. - ADP-239: channel/runt

### #93102 feat(gateway): accept thinkingLevel/reasoningLevel at sessions.create (operator.write)

- bucket: needs_proof
- author: LightDriverCS
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:46:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `sessions.create` now accepts `thinkingLevel` and `reasoningLevel`, applying them to the new session entry using the same validators `sessions.patch` already uses. ## Motivation `sessions.patch` requires `operator.admin`, so a client that only holds

### #85611 Replace curl-piped install in duplicate PR tagging skill

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:47:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces curl-piped-to-shell prtags install guidance with a pinned download and checksum-verification flow. This removes the SafeOps curl-pipe-shell reviewed risk for the duplicate PR tagging skill.

### #85671 fix(outbound): auto-select single enabled message account

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:50:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #20756. - Add a shared outbound message account resolver after channel selection. - Preserve explicit `accountId`, CLI/default account overrides, and agent binding account IDs before inference. - When the message tool omits an account, prefer 

