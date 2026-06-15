---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-080
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
  - "#73976"
  - "#74613"
  - "#74735"
  - "#74940"
  - "#75054"
  - "#75165"
  - "#75351"
  - "#75371"
  - "#75662"
  - "#78381"
  - "#78664"
  - "#81471"
  - "#83670"
  - "#84115"
  - "#71537"
  - "#72932"
  - "#84657"
  - "#85509"
  - "#85621"
  - "#85628"
  - "#85642"
  - "#85657"
  - "#85663"
  - "#93183"
  - "#86710"
cluster_refs:
  - "#73976"
  - "#74613"
  - "#74735"
  - "#74940"
  - "#75054"
  - "#75165"
  - "#75351"
  - "#75371"
  - "#75662"
  - "#78381"
  - "#78664"
  - "#81471"
  - "#83670"
  - "#84115"
  - "#71537"
  - "#72932"
  - "#84657"
  - "#85509"
  - "#85621"
  - "#85628"
  - "#85642"
  - "#85657"
  - "#85663"
  - "#93183"
  - "#86710"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.803Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 80

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #73976 fix(memory): use per-keyword FTS search in hybrid mode #39484

- bucket: ready_for_maintainer
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, clawsweeper, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:24:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Canonical repair path for #39555. Before merge, rebase or refresh the contributor branch against main 79159f11f6952ac063f0d13585ab7575ef4594bc if needed, verify the bounded per-keyword hybrid FTS fan-out remains narrow, rerun Codex /review and address every fi

### #74613 docs(cli): add agent selector to CLI backend quick start

- bucket: ready_for_maintainer
- author: vyctorbrzezowski
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, stale, size: XS, proof: supplied, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:26:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #68940. - Updates the CLI Backends quick start to keep the current Claude CLI backend example while adding the required `--agent main` selector. - Explains that `main` is the default agent id when no explicit agent list is configured. - No C

### #74735 feat(bootstrap): support session-scoped extra files

- bucket: ready_for_maintainer
- author: presidenzo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:27:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `bootstrap-extra-files` could only apply one global extra file set, and explicitly configured extra files were still constrained by the default bootstrap basename list. - Why it matters: operators with long-lived group/session workflows n

### #74940 Fix legacy LLM timeout diagnostics

- bucket: ready_for_maintainer
- author: chiyouYCH
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:27:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve the numeric `agents.defaults.llm.idleTimeoutSeconds` value in `doctor --fix` output instead of silently dropping it. - Add a one-shot config-load warning when `agents.defaults.llm` is still present, pointing users to `models.providers.<id

### #75054 docs(contextInjection): document always as a valid option and default

- bucket: ready_for_maintainer
- author: ayesha-aziz123
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:28:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `agents.defaults.contextInjection` accepts three values — `"always"`, `"continuation-skip"`, and `"never"` — as defined in `src/config/types.agent-defaults.ts` (line 19) and validated by the Zod schema. The docs stated `"always"` as the d

### #75165 feat(agents): composable termination algebra + GSAR grounding scorer

- bucket: ready_for_maintainer
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:29:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #77981 ## What this does Adds a **composable termination algebra** for A2A agent loops and implements **GSAR** (Typed Grounding for Hallucination Detection and Recovery) from [Kamelhar 2026, arxiv:2604.23366](https://arxiv.org/abs/2604.23366) as a first

### #75351 fix(ui): improve Thai locale copy

- bucket: ready_for_maintainer
- author: gokusenz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, scripts, size: M, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:30:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the new Thai Control UI locale still had high-visible English fallback copy and a few unnatural Thai labels around common controls, the agent detail surface, files, channels, cron panels, and the language picker. - Why it matters: Thai us

### #75371 Gateway: guard session-run cancel requester in minimal tests

- bucket: ready_for_maintainer
- author: seoseo-ai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, scripts, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:30:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rebased this replacement lane onto latest `origin/main` and kept the minimal-test-gateway requester guard from the prior patch. - Bounded sticky session-run cancel replay state with a 10 minute TTL plus a 1,000-entry cap, while preserving late-han

### #75662 fix(agents): pause yielded main-session runs

- bucket: ready_for_maintainer
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: L, extensions: codex, triage: dirty-candidate, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:30:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Extend the subagent yield-pause fix from [6f3b5f86](https://github.com/openclaw/openclaw/commit/6f3b5f8666f3a3877b62d9019b8842455fdf62e1) to top-level (non-subagent) sessions. When a main session ends via the `sessions_yield` tool, the runner alread

### #78381 feat(embedded-runner): expose prep stage timings

- bucket: ready_for_maintainer
- author: guanbear
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, agents, size: M, extensions: memory-wiki, triage: blank-template, triage: dirty-candidate, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:31:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Expose embedded runner prep stage snapshots on `EmbeddedRunAttemptResult`. - Include the same prep stage summary on the `agent_end` hook event for plugin observability. - Add focused coverage for attempt result and hook event prep stage propagatio

### #78664 perf(agents): cache provider tool schema normalization

- bucket: ready_for_maintainer
- author: guanbear
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, agents, size: L, extensions: memory-wiki, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:32:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Cache provider-normalized tool schema `parameters` for repeated embedded agent turns, but only when OpenClaw can identify one of its bundled SDK tool-compat normalizers. - Keep the cache internal and conservative: bundled DeepSeek, Gemini, and Ope

### #81471 fix(line): load accounts.default and default-enable named accounts

- bucket: ready_for_maintainer
- author: edenfunf
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: line, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:32:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #47264. The LINE multi-account resolver had two bugs that prevented webhook routes from registering when `channels.line.accounts` was used: 1. **`accounts.default` was ignored.** `resolveLineAccount` short-circuited the account lookup when `ac

### #83670 fix: Preserve Telegram hooks when flushing buffered finals

- bucket: ready_for_maintainer
- author: bpconnor3-r2
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:34:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - flush buffered Telegram final answers before returning from segmented final delivery - preserve the normal preview-finalized `message:sent` hook and transcript mirror when the buffered answer flushes - add a regression test covering skipped reason

### #84115 docs: resolve distorted and oversized avatars for contributors in README

- bucket: ready_for_maintainer
- author: alricium
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: docs-discoverability, proof: sufficient, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:34:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: I noticed that the avatars for CHINMANSINO and M-HAJAZ were displaying significantly larger and distorted compared to the rest of the contributors grid in the README. I fixed the styling/dimensions for these specific avatars to ensure they render cleanly and m

### #71537 Recover archived (.reset) session transcripts in memory hook + session-logs skill

- bucket: ready_for_maintainer
- author: injinj
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:47:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a session is reset (`/new` or `/reset`), the gateway renames its `<id>.jsonl` transcript to `<id>.jsonl.reset.<timestamp>Z`. After that rename, two surfaces silently lose the conversation: 1. **The session-memory hook**, which runs at reset tim

### #72932 fix(gateway): unblock startup and fresh agent sessions

- bucket: ready_for_maintainer
- author: gitchrisqueen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:47:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - rebase the patch onto current `main` - allow `OPENCLAW_GATEWAY_FAST_CONFIG=1` to defer pre-ready channel startup maintenance and startup session migration - keep deferred failures visible by warning on rejected background startup tasks - add regre

### #84657 [codex] Declare node-gyp for native package builds

- bucket: ready_for_maintainer
- author: Grynn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:49:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `node-gyp` as a root dev dependency - update `pnpm-lock.yaml` with the resolved `node-gyp` dependency graph - add a changelog entry for the local install/bootstrap fix ## Why this is needed `sharp` can fall back to a source build during local

### #85509 fix(openai): drop empty reasoning replay blocks

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:51:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Drop replayable OpenAI Responses reasoning blocks when their persisted `thinking` text is empty, whitespace-only, or non-string. - Preserve the rest of the assistant content, including tool calls and matching tool results. - Keep non-empty signed

### #85621 Clarify landable bug sweep skill credential boundaries

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:52:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Clarifies local bug sweep workflow wording to avoid implying browser, wallet, SSH, credential-store, or secret access. This targets a SafeOps reviewed-risk false positive in the landable bug sweep skill.

### #85628 Clarify small bugfix sweep skill tracking wording

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:52:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Renames the small bugfix sweep output ledger wording to tracking log to avoid SafeOps false-positive credential/wallet/ledger implications. This is a doc-only skill wording clarification.

### #85642 Clarify skill authentication and session boundaries

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, proof: sufficient, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:52:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Doc-only SafeOps reviewed-risk reduction pass for skill documentation. Changes: - Clarify Graincrawl encrypted source checks so they require explicit readiness checks and no unexpected OS approval prompts. - Clarify browser automation user-session g

### #85657 Clarify OpenClaw testing evidence wording

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:53:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Clarifies release evidence and protected-context wording in the OpenClaw testing skill to avoid SafeOps reviewed-risk false positives while preserving release validation instructions.

### #85663 Harden SafeOps final config risk defaults

- bucket: ready_for_maintainer
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: refactor-only, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:53:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Hardens the final SafeOps-reviewed config surfaces after the skill-doc risk cleanup pass. Changes: - GitHub CLI config discovery no longer guesses broad operator home paths such as root, sudo user, or login user homes by default. - Alternate GitHub

### #93183 [codex] Fix /btw Codex runtime side-question routing

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, agents, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:55:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #88902. Resolves `/btw` to the canonical runtime model before committing to a side-question route, then reselects the harness with the canonical provider/model. This lets stale legacy `openai-codex` route state use the Codex side-question handling inste

### #86710 fix: summarize gateway startup sidecars

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, channel: whatsapp-web, app: web-ui, gateway, extensions: memory-core, cli, scripts, commands, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:56:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #14861. - Add a small redacted Gateway startup outcome summary after sidecars settle and before readiness is logged. - Surface the missing Gmail watcher account case as `gmail-watcher=skipped (no gmail account configured)`. - Keep raw except
