---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-019
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
  - "#92065"
  - "#46895"
  - "#92072"
  - "#92023"
  - "#92021"
  - "#88828"
  - "#92091"
  - "#92036"
  - "#92025"
  - "#92028"
  - "#92128"
  - "#92149"
  - "#92164"
  - "#92188"
  - "#92202"
  - "#92179"
  - "#92167"
  - "#92221"
  - "#92254"
  - "#92203"
  - "#92090"
  - "#92303"
  - "#92298"
  - "#92310"
  - "#91332"
  - "#92334"
  - "#92349"
  - "#92354"
  - "#92358"
  - "#92359"
  - "#92371"
  - "#92355"
  - "#92370"
  - "#92388"
  - "#92392"
  - "#92351"
  - "#92432"
  - "#90637"
  - "#92342"
  - "#92466"
cluster_refs:
  - "#92065"
  - "#46895"
  - "#92072"
  - "#92023"
  - "#92021"
  - "#88828"
  - "#92091"
  - "#92036"
  - "#92025"
  - "#92028"
  - "#92128"
  - "#92149"
  - "#92164"
  - "#92188"
  - "#92202"
  - "#92179"
  - "#92167"
  - "#92221"
  - "#92254"
  - "#92203"
  - "#92090"
  - "#92303"
  - "#92298"
  - "#92310"
  - "#91332"
  - "#92334"
  - "#92349"
  - "#92354"
  - "#92358"
  - "#92359"
  - "#92371"
  - "#92355"
  - "#92370"
  - "#92388"
  - "#92392"
  - "#92351"
  - "#92432"
  - "#90637"
  - "#92342"
  - "#92466"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.475Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 19

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92065 fix(memory): honor configured qmd search timeouts

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-06-11T01:52:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- derive the memory_search tool deadline from the configured QMD timeout when the qmd backend is active\n- keep a bounded wrapper overhead so hung searches still fail cleanly\n- add regression coverage for slow successful QMD searches and timeout b

### #46895 fix(slash): handle /model status locally[AI-assisted]#46894

- bucket: needs_proof
- author: xiaoHEI-312
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T02:51:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: - Why it matters: - What changed: - What did NOT change (scope boundary): ## Change Type (select all) - [ ] Bug fix - [ ] Feature - [ ] Refactor - [ ] Docs - [ ] Security hardening - [ ] Chore/

### #92072 fix(gateway): treat `google-gemini-cli` Gemini models as image-capable

- bucket: needs_proof
- author: HaozheZhang6
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-06-11T03:17:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `google-gemini-cli` models (e.g. `google/gemini-3.5-flash`) were rejected at the Gateway attachment gate with `UnsupportedAttachmentError: active model does not accept image inputs` before the Gemini CLI was ever invoked — even though the CLI acce

### #92023 test(secrets,routing): cover sensitive-header, exec-ref, and binding-scope policies

- bucket: needs_proof
- author: hansraj316
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: mock-only-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T03:41:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds unit coverage for three security-sensitive policy modules that lacked direct tests: sensitive model-provider header classification (credential-leak guard), exec secret-ref resolution gating (dry-run execution gate), and route binding-scope + ro

### #92021 fix(agents): drop body/method on cross-origin MCP HTTP redirects

- bucket: needs_proof
- author: hansraj316
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: mock-only-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T03:42:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The MCP HTTP transport passed `allowCrossOriginUnsafeRedirectReplay: true`, so a cross-origin 30x redirect replayed the original POST body/method — an SSRF / credential-exfil vector. Set it to `false` to match the secure default already used by `pro

### #88828 fix(gateway): gate cron on channel readiness

- bucket: needs_proof
- author: samzong
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T04:03:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Prevent gateway cron from starting delivery work before configured channel transports report ready during startup and hot reload. Why does this matter now? - Cron catch-up can immediately deliver notifications afte

### #92091 feat(discord): reprocess edited messages and cancel runs on delete

- bucket: needs_proof
- author: sws-apps
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: L, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T04:33:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Discord: reprocess edited messages, cancel runs when the source message is deleted Closes #53654. Also covers the edit-to-reprocess half tracked in #20173 and #38505. ## Summary Adds Discord `MESSAGE_UPDATE` / `MESSAGE_DELETE` gateway handling to the bundled

### #92036 fix(fal): preserve raw video queue results

- bucket: needs_proof
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: fal, proof: supplied, P1, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T06:30:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve raw fal video result payloads returned from the queue `response_url` instead of dropping top-level `video` / `videos` fields. - Keep the existing wrapped `response` parsing path intact for deployments that return an envelope-like result. 

### #92025 feat(skills): add per-section remediation hints to skills check

- bucket: needs_proof
- author: hansraj316
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T08:06:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `skills check` listed hidden / agent-excluded / missing-requirement skills but never told the author how to fix each. Append a per-section `Fix:` hint: hidden -> frontmatter `disable-model-invocation: false`; excluded -> add to the agent's `skills` 

### #92028 feat(skills): report malformed SKILL.md files via `skills lint`

- bucket: needs_proof
- author: hansraj316
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: L, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T08:06:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Malformed SKILL.md directories were silently dropped. `loadSkillsFromDirSafe` now returns skipped dirs with a discriminated reason (parse-error, or missing-required-field naming the field); `status.ts` threads it through, and a new `openclaw skills 

### #92128 fix(feishu): prefer native thread id for topic sessions

- bucket: needs_proof
- author: hanhuihanhui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T08:55:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Why does this matter now? What is the intended outcome? What is intentionally out of scope? What does success look like? What should reviewers focus on? <details> <summary>Summary guidance</summary> This PR descripti

### #92149 fix(gateway): sign custom node ids

- bucket: needs_proof
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XL, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T10:45:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replaces the unsigned `client.instanceId` custom-node-id approach from #88374 with an explicit top-level `ConnectParams.nodeId` that is covered by device-auth v4 signatures. - Keeps generated node-host device IDs on the existing compatibility path

### #92164 fix(memory-core): score CJK keyword search instead of textScore=0 with trigram FTS5

- bucket: needs_proof
- author: draix
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T12:38:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Hybrid memory search scored **every** Chinese/Japanese/Korean (CJK) query at `textScore: 0` when the FTS5 store uses the `trigram` tokenizer. Vector search still returned correct matches, but the BM25/full-text component contributed nothing, draggin

### #92188 fix(logging): prune non-idle stale diagnostic session states (fixes #91697)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T15:01:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: `pruneDiagnosticSessionStates()` only cleans up diagnostic entries where `state === "idle"` AND `queueDepth <= 0`. Entries that never transition back to "idle" — for example after a failed stuck-session recovery — accumulate in the p

### #92202 fix(embedded-runner): recheck owned-writes before session takeover (#91236)

- bucket: needs_proof
- author: DouglasCherry
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T15:45:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Status: DRAFT — proposed fix, needs validation.** The fix and regression test were authored from source analysis against the harness conventions but **have not been executed in my environment** (deps not installed). Please treat this as a starting point fo

### #92179 Improve TUI control-plane progress rendering

- bucket: needs_proof
- author: wnlen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-11T16:21:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - render TUI tool progress as control-plane milestones instead of generic tool labels like Bash - show live command output with redaction and strip plain text fences - separate control-plane progress from final assistant replies in the chat log ## V

### #92167 fix(media): recognize .m2a files as audio

- bucket: needs_proof
- author: llljjjwww333
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T17:44:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Maps `.m2a` filenames to `audio/mpeg` in shared media-core MIME detection. - Treats `.m2a` as audio across the related filename-based audio surfaces: voice-message compatibility, auto-reply transcription note stripping, webchat local audio attachm

### #92221 feat(agents/mcp): scope MCP servers per-agent via generic agents allowlist [AI-assisted]

- bucket: needs_proof
- author: adele-with-a-b
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T17:59:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds per-agent MCP server scoping across **all** runtimes via a generic top-level `agents: [...]` allowlist on `mcp.servers.<name>`. **Problem.** `loadMergedBundleMcpConfig` (the shared merge every CLI + embedded agent runtime consumes) handed the e

### #92254 fix(model-picker): preserve auth profile override when selecting a model

- bucket: needs_proof
- author: jbetala7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: telegram, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T20:33:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The native model pickers call `applyModelOverrideToSessionEntry()` (`src/sessions/model-overrides.ts`) with only a model `selection` and no `profileOverride`. In that case the helper takes its default-clear branch and **unconditionally deletes** `au

### #92203 fix(plugins): keep CLI auth backends out of startup agent harnesses

- bucket: needs_proof
- author: sglee
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T21:26:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary CLI backends declared in a plugin manifest's `cliBackends` (e.g. Anthropic's `claude-cli`) are **auth backends**, not agent harness runtimes. The installed-plugin-index record builder was folding them into `startup.agentHarnesses`, so startup planni

### #92090 fix(cron): set active marker for startup catch-up runs (fixes #91695)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-11T23:47:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Startup catch-up cron runs never call `markCronJobActive`, so `isCronJobActive(jobId)` returns `false` for the duration of the catch-up run. The task-registry reconcile checks this marker and misclassifies long catch-up jobs (>5 min)

### #92303 fix(recovery): reset command lane when abort leaves pre-existing task blocked

- bucket: needs_proof
- author: hanZeng-08
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-06-12T01:22:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix #92270 # PR Comment for Issue #92270 > **Branch**: `fix/92270-stuck-session-recovery-lane-release` > **Files Changed**: > - `src/logging/diagnostic-stuck-session-recovery.runtime.ts` > - `src/logging/diagnostic-stuck-session-recovery.runtime.test.ts` --- #

### #92298 fix(codex): isolate CODEX_HOME per authProfileId to prevent cross-acc…

- bucket: needs_proof
- author: hanZeng-08
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T01:30:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix #92275 # Issue #92275 PR Comment ## Transformation Plan Details - **Root Cause**: When multiple Codex OAuth accounts on the same machine use the same Agent configuration, they share the same `CODEX_HOME` directory. The Codex app-server persists local state

### #92310 fix(telegram): restore sent-message ledger writes for delivery replies

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-06-12T01:57:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - restore `recordSentMessage` for successful Telegram `deliverReplies` sends - keep the existing `message_sent` hook behavior, but persist the same send into the sent-message ledger first - add a regression test that verifies `wasSentByBot` sees del

### #91332 fix(session): add fallback lock file cleanup on session write-lock release

- bucket: needs_proof
- author: immortal-autumn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-12T05:05:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `sidecar-lock`'s `removeLockIfUnchanged` fails because the lock file snapshot doesn't match (content/inode changed between acquisition and release), the session write-lock file persists on disk permanently. This blocks all subsequent messages t

### #92334 fix(exec-approvals): skip socket in YOLO mode regardless of token presence

- bucket: needs_proof
- author: immortal-autumn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T05:28:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `exec-approvals.json` has a socket token (e.g. after `ensureExecApprovals()` was called by an external approvals write like `openclaw approvals set --node`), the fast-path check in `resolveExecApprovals()` failed its third condition (`!file.soc

### #92349 fix(feishu): keep memory probe replies visible

- bucket: needs_proof
- author: wangyaok1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T05:49:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - suppress Feishu SOP internal-noise final text before outbound delivery - keep short memory governance / true @ / mention probe replies visible - add regression coverage for both suppression and visible probe replies ## Test - PATH=/Users/<user>

### #92354 fix(issue): resolve #91804 [Bug]: Internal Reasoning Leakage in 2026.6.5

- bucket: needs_proof
- author: xuwei-xy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: qa-lab, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T06:07:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 修复 issue #91804 中报告的问题。 ### Bug type Regression (worked before, now fails) ### Beta release blocker No ### Summary Since upgrading to OpenClaw 2026.6.5, internal agent reasoning/thinking is being exposed to users in eve ## Changes - `extensions/qa-l

### #92358 fix(gateway): resolve plugin method scope from channel-pinned registry in gateway mode

- bucket: needs_proof
- author: jiewent1-cmyk
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T06:22:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # fix(gateway): resolve plugin method scope from channel-pinned registry > Suggested PR title: **fix(gateway): resolve plugin method scope from channel-pinned registry in gateway mode** > Branch: `fix/gateway-plugin-method-scope-channel-registry` (one commit, 

### #92359 fix(config): allow model.compat.sendSessionAffinityHeaders in ModelCompatSchema

- bucket: needs_proof
- author: jiewent1-cmyk
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T06:23:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # fix(config): allow model.compat.sendSessionAffinityHeaders in ModelCompatSchema > Suggested PR title: **fix(config): allow model.compat.sendSessionAffinityHeaders in ModelCompatSchema** > Branch: `fix/modelcompat-allow-sendSessionAffinityHeaders` (one commit

### #92371 fix(codex): restore continuity after cron interleave

- bucket: needs_proof
- author: jerem-ai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T07:28:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - detect BlueBubbles cron direct-delivery mirrors before building Codex prompt context - inject a cron interleave continuity guard plus restore surfaces before workspace context - keep cron runs isolated while forcing the next normal chat turn to re

### #92355 #92240: fix(plugins): resolve bundled public surfaces from package dist output

- bucket: needs_proof
- author: zhangqueping
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T07:43:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix gateway startup failure: `Unable to resolve bundled plugin public surface speech-core/runtime-api.js` after upgrading to 2026.6.1. ## Root Cause `resolveBundledPluginPublicSurfacePath` in `public-surface-runtime.ts` only searched for bundled plu

### #92370 #92080: fix(skills): skip skill workshop approval when config is unavailable

- bucket: needs_proof
- author: zhangqueping
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T08:07:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `skill_workshop action=apply` returning "Plugin approval unavailable (no approval route)" on feishu channels even when `approvalPolicy: "auto"` is configured. ## Root Cause `resolveSkillWorkshopToolApproval` in `src/skills/workshop/policy.ts` re

### #92388 #92379: fix(session): refresh stale model before reading contextWindow in checkCompaction

- bucket: needs_proof
- author: sheyanmin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T08:20:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix auto-compaction using stale `contextWindow` after model switch via Telegram `/model` picker. The in-memory `agent.state.model` now gets refreshed from the registry before `checkCompaction` reads the compaction threshold. ## Root Cause When the T

### #92392 #92374: fix(dispatch): include message_sending hooks when channel supplies custom beforeDeliver

- bucket: needs_proof
- author: sheyanmin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T08:56:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix plugin `message_sending` hooks being silently bypassed on Telegram agent-reply delivery. When a channel supplies `dispatcherOptions.beforeDeliver`, the hook chain now always includes `buildMessageSendingBeforeDeliver` alongside the channel hook 

### #92351 #92241: Gateway holds stale module import paths after update/rollback — inbound messages silently dropped (ERR_MODULE_NOT_FOUND)

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T09:13:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Guard lazy reply-module loaders against `ERR_MODULE_NOT_FOUND` caused by stale dist chunk hashes after an in-place `npm install -g` upgrade or rollback. Previously, a running gateway process would silently drop all inbound messages because the lazy 

### #92432 fix(issue): resolve #92372 [Bug]: read tool drops memory/ prefix in multi-agent setup, 

- bucket: needs_proof
- author: xuwei-xy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: qa-lab, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T11:32:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 修复 issue #92372 中报告的问题。 ### Bug type Regression (worked before, now fails) ### Beta release blocker No ### Summary In a multi-agent setup, the secondary agent's read tool call drops the memory/ subdirectory prefix from ## Changes - `extensions/qa-la

### #90637 fix(nextcloud-talk): ignore signed non-message webhooks

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: nextcloud-talk, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T13:24:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - distinguish malformed webhook JSON / malformed supported Note payloads from signed Activity Streams events that are not chat messages - acknowledge signed non-message Talk events with 200 without dispatching them to the bot - add a signed Document

### #92342 OpenClaw 1 Codex reliability build

- bucket: needs_proof
- author: dredozubov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: XL, extensions: codex, triage: external-plugin-candidate, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-12T13:51:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - carries the openclaw-1 Codex reliability build branch - includes the provider-id TDZ/bootstrap fix already deployed in core package 2026.5.26-openclaw.2 - bumps @openclaw/codex package metadata/shrinkwrap to 2026.5.26-openclaw.2 for matching exter

### #92466 Add EvoLink provider integration

- bucket: needs_proof
- author: EvoLinkAI
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: M, triage: needs-real-behavior-proof, dependencies-changed, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T14:12:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a bundled `evolink` OpenAI-compatible provider plugin with `EVOLINK_API_KEY` auth, `evolink/auto` static catalog entry, and OpenAI replay/tool compatibility hooks. - Preserves EvoLink's literal provider-prefixed model id so `evolink/auto` rou

