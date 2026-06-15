---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-048
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
  - "#56398"
  - "#56706"
  - "#56720"
  - "#60229"
  - "#60630"
  - "#93273"
  - "#60683"
  - "#60934"
  - "#61322"
  - "#61624"
  - "#61675"
  - "#61973"
  - "#62021"
  - "#62338"
  - "#62403"
  - "#62722"
  - "#62841"
  - "#63015"
  - "#63571"
  - "#87344"
  - "#89283"
  - "#89288"
  - "#89380"
  - "#93234"
  - "#89828"
cluster_refs:
  - "#56398"
  - "#56706"
  - "#56720"
  - "#60229"
  - "#60630"
  - "#93273"
  - "#60683"
  - "#60934"
  - "#61322"
  - "#61624"
  - "#61675"
  - "#61973"
  - "#62021"
  - "#62338"
  - "#62403"
  - "#62722"
  - "#62841"
  - "#63015"
  - "#63571"
  - "#87344"
  - "#89283"
  - "#89288"
  - "#89380"
  - "#93234"
  - "#89828"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.796Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 48

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #56398 fix(gateway): keep two-phase exec approvals pending when no approval …

- bucket: needs_proof
- author: PexMor
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:29:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(gateway): keep two-phase exec approvals pending when no approval clients connected ## Summary - Problem: Two-phase exec approval requests (used by agent tools) were immediately expired with `no-approval-route` when no approval clients were connected, same

### #56706 TTS: enforce standalone directive lines parsing

- bucket: needs_proof
- author: yejiming
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:29:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: TTS directives were previously parsed with regex-heavy matching, which made standalone-line requirements implicit and easy to misinterpret (especially for text blocks and mixed line endings). - Why it matters: Ambiguous parsing can cause

### #56720 fix(hooks): restore --exclude-labels in Gmail watcher args

- bucket: needs_proof
- author: Lidang-Jiang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:29:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #56635 - Restores `--exclude-labels SPAM,TRASH,DRAFT,SENT` in `gog gmail watch serve` args so sent mail and draft saves do not trigger Gmail hook runs by default. - Adds `hooks.gmail.excludeLabels` to the config schema/types with runtime defau

### #60229 feat(telegram): coalesce inbound messages while agent is busy

- bucket: needs_proof
- author: fangli
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When an agent run is active, subsequent inbound Telegram messages from the same chat are serialized at two layers before reaching the queue-level collect logic: 1. **grammY `sequentialize` middleware** — uses a per-chat key (`telegram:{chatId}`), bl

### #60630 fix(ci): Windows task tests and Telegram setup promotion surface

- bucket: needs_proof
- author: Tianworld
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, channel: signal, channel: telegram, extensions: memory-core, commands, agents, size: L, channel: qqbot, extensions: memory-wiki, extensions: codex, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary ### Tasks (Windows CI) - **task-executor.test.ts**: Avoid triggering outbound `sendMessage` in the blocked-flow retry test (dynamic import can bypass the Vitest mock on Windows CI and hang until timeout). - **task-registry.test.ts**: Close the task-

### #93273 fix(ui): adopt inFlightRun on Control UI history reload

- bucket: needs_proof
- author: LiuwqGit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Control UI loses the in-progress assistant response when the user navigates away from a running chat session and returns; only the last committed user message is shown even though the gateway run is still active. W

### #60683 feat(memory): expose local llama embedding settings

- bucket: needs_proof
- author: kevinlasnh
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add memorySearch.local tuning fields for local node-llama-cpp embeddings: gpu, gpuLayers, contextSize, and lashAttention - pass the resolved settings through memory config into the local embedding provider without changing defaults - document the

### #60934 fix(auth): respect auth override by filtering profiles (token/oauth) (closes #60930)

- bucket: needs_proof
- author: juliabush
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Auth profile resolution ignored `auth` override and selected OAuth profiles even when `mode: "token"` was configured - Why it matters: Telegram and other integrations incorrectly used OAuth, consuming credits instead of billing via API ke

### #61322 fix(sessions): remap stale same-agent paths into the current state dir

- bucket: needs_proof
- author: rbutera
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:31:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: persisted absolute `sessionFile` paths for the same agent can survive a state-root move (for example `/home/<user>/.openclaw/...` to `/Users/<user>/.openclaw/...`) and still be treated as structurally valid. - Why it matters: resumed or targete

### #61624 feat(whatsapp): add dmRequireMention for DM trigger gating

- bucket: needs_proof
- author: mubbie
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: S, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `dmRequireMention` config option to WhatsApp channel (and base `ExtensionChannelConfig`) that gates DM replies behind mention-pattern matching - Reuses existing `mentionPatterns` + `resolveMentionGating` infrastructure — no new pattern config

### #61675 feat: fire session reset hooks for daily and idle resets

- bucket: needs_proof
- author: salvormallow
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Internal hooks and `before_reset` plugin hook only fire for manual `/new` and `/reset` commands, not for daily (4AM) or idle-timeout session resets. This means `session-memory` never saves on daily/idle resets. - Why it matters: 4 communi

### #61973 feat(update): add `openclaw update review` pre-upgrade risk assessment

- bucket: needs_proof
- author: ziggy2socks
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this adds `openclaw update review` — a read-only pre-upgrade risk assessment subcommand. Run it before `openclaw update` to understand what changed and whether it is safe to upgrade right now. ``` openclaw update review openclaw update review --json op

### #62021 fix(macos): rewrite wildcard A2UI host to loopback

- bucket: needs_proof
- author: ThanhNguyxn07
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes macOS node A2UI URL resolution by rewriting wildcard canvas hosts (`0.0.0.0` / `::`) to loopback before appending the A2UI path. - Keeps the change minimal and isolated to macOS node runtime URL handling, so existing non-wildcard host behavi

### #62338 doctor(memory): surface FTS5 unavailable state in doctor checks

- bucket: needs_proof
- author: ZanderH-code
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:33:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #62328 by making `openclaw doctor` visibly report when SQLite FTS5 is unavailable in the running gateway. - Extend `doctor.memory.status` payload with `fts` probe fields (`enabled`, `available`, `error`) - Thread that payload through `probeGat

### #62403 fix(ui): keep session label edits attached to correct row after sorting

- bucket: needs_proof
- author: edwardlong-ctrl
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:33:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Problem: Editing a session label could visually apply the change to the wrong row when the table reorders. * Why it matters: Users may accidentally modify the wrong session label due to DOM reuse after sorting. * What changed: Use Lit `repeat()` k

### #62722 fix(gateway): use already-aborted signal in stopChannel fallback

- bucket: needs_proof
- author: pruthvishetty
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:33:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - In `stopChannel`, when no `AbortController` exists for an account (i.e. no running task), the fallback `new AbortController().signal` creates a signal from an anonymous controller that **can never be aborted** - `stopAccount` implementations may u

### #62841 fix(auto-reply): accept /activate as alias for /activation command

- bucket: needs_proof
- author: pradeep7127
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:33:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The `/activate mention` and `/activate always` commands were silently ignored because the parser regex only matched `/activation` exactly - Changed regex from `/^\/activation.../` to `/^\/activate?ion.../` so both forms are accepted - Added test c

### #63015 fix: honor filePath/path/media fallbacks in outbound reply normalization

- bucket: needs_proof
- author: tombensim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:34:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `normalizeOutboundReplyPayload` only checked `payload.mediaUrl`, silently dropping media when agents returned `filePath`, `path`, or `media` fields - This caused WhatsApp (and other channel) auto-replies to send plain text instead of attachments (

### #63571 feat(web-search): add explicit provider fallback support

- bucket: needs_proof
- author: scriptsth
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:34:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When a provider is explicitly configured with a fallbacks array, retry the next configured provider on any error instead of failing immediately. Without fallbacks, explicit mode keeps existing fail-fast behavior. ## Summary Describe the problem and fix in 2–5

### #87344 fix(browser): read Chrome version from PE metadata on Windows

- bucket: needs_proof
- author: Jefsky
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:36:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Description Fixes #87312 `openclaw doctor` reports "Could not determine the installed Chrome version" even when Chrome is installed at the expected path with correct version metadata (Chrome 148.x in this case). ## Root Cause The `readBrowserVersion` functi

### #89283 fix: include nextOffset in sessions JSON output

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:41:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - include `nextOffset` in `sessions --json` output when `hasMore` is true - keep `nextOffset` null when the full result set is returned - cover both limited and unlimited JSON output cases in tests ## Testing - node scripts/run-vitest.mjs run src/co

### #89288 fix: prune stale session cleanup archives

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:41:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: <!-- hermes-auto-maintainer --> ## Summary - Preserve the existing split between stale `.deleted.*` archive pruning and `.reset.*` archive pruning. - Thread `session.maintenance.resetArchiveRetention` into the new unreferenced-artifact cleanup sweeps used by `

### #89380 fix(daemon): default Windows tasks to hidden launcher

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:42:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Default Windows Scheduled Task installs and upgrades to the existing `gateway.vbs` hidden launcher instead of running `gateway.cmd` directly. - Keep the existing internal escape hatch for explicit falsey `OPENCLAW_WINDOWS_TASK_HIDDEN_LAUNCHER` val

### #93234 fix(mattermost): backfill thread history from server when in-memory window is empty

- bucket: needs_proof
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:42:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Mattermost now backfills thread history from the server when its in-memory history window is empty, so a bot re-mentioned inside an existing thread after a restart/session-clear replies **with** context instead of blind. - Non-thread / main-channe

### #89828 fix(cron): suppress announce fallback for resolved targets

- bucket: needs_proof
- author: cbeltrao
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:43:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - carry Slack delivery target aliases from cron target resolution into the source delivery plan without changing cron model/provider fallback or runtime cleanup paths - compare message-tool sends against the canonical target plus resolver-proven ali
