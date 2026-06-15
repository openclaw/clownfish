---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-030
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
cluster_refs:
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
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.200Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 30

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

