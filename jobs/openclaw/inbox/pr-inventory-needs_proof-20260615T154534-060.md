---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-060
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
  - "#81724"
  - "#81743"
  - "#81829"
  - "#82098"
  - "#82105"
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
cluster_refs:
  - "#81724"
  - "#81743"
  - "#81829"
  - "#82098"
  - "#82105"
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
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.206Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 60

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #81724 ui(i18n): localize overview, sessions, and channels pages for zh-CN

- bucket: needs_proof
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, P3, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T01:59:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Overview, sessions, and channels pages had hardcoded English strings when using Simplified Chinese locale. - Why it matters: Non-English users see English labels, filters, table headers, and pagination controls. - What changed: Extracted 

### #81743 feat(ui/i18n): add Chinese translations for config page

- bucket: needs_proof
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, P3, rating: 🧂 unranked krab, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T01:59:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Config page quick settings had missing or incorrect Chinese translations. Theme names, roundness options, and several card labels showed raw i18n keys or English text when using Simplified Chinese locale. - Why it matters: Non-English use

### #81829 fix(doctor): exit non-zero on final invalid config (#77804)

- bucket: needs_proof
- author: koshaji
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:00:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw doctor` printed `Invalid config:` validation errors but still exited `0`. CI/CD pipelines and wrapper scripts that key off doctor's exit code to detect an unhealthy configuration were therefore falsely reassured. This PR sets `process.exit

### #82098 Update README.md

- bucket: needs_proof
- author: h908714124
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: docs-discoverability, triage: refactor-only, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:00:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: I think this sentence was the wrong way round. ## Summary minor docs change ## Change Type (select all) - [ ] Bug fix - [ ] Feature - [ ] Refactor required for the fix - [x] Docs - [ ] Security hardening - [ ] Chore/infra ## Scope (select all touched areas) - 

### #82105 chore(docker): bundle channel voice plugin deps

- bucket: needs_proof
- author: exoulster
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, docker, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:00:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: default Docker builds pruned optional bundled plugin runtime dependencies unless operators knew to set `OPENCLAW_EXTENSIONS`. - Why it matters: Discord, Feishu, and Voice Call are externalized plugin packages but should be ready in the st

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

