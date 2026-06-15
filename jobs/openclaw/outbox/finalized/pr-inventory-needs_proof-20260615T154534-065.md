---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-065
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
  - "#91476"
  - "#93065"
  - "#93089"
  - "#93111"
  - "#92301"
  - "#91140"
  - "#91161"
  - "#91162"
  - "#91180"
  - "#87739"
  - "#93151"
  - "#45901"
  - "#60328"
  - "#64611"
  - "#69904"
  - "#70156"
  - "#71135"
  - "#71154"
  - "#71205"
  - "#71249"
  - "#71382"
  - "#71517"
  - "#71678"
  - "#71792"
  - "#71837"
cluster_refs:
  - "#91476"
  - "#93065"
  - "#93089"
  - "#93111"
  - "#92301"
  - "#91140"
  - "#91161"
  - "#91162"
  - "#91180"
  - "#87739"
  - "#93151"
  - "#45901"
  - "#60328"
  - "#64611"
  - "#69904"
  - "#70156"
  - "#71135"
  - "#71154"
  - "#71205"
  - "#71249"
  - "#71382"
  - "#71517"
  - "#71678"
  - "#71792"
  - "#71837"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.207Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 65

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91476 feat(claude-cli): add ultracode backend config flag

- bucket: needs_proof
- author: Agent-Aurelius
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, docker, agents, size: L, extensions: acpx, extensions: anthropic, proof: supplied, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:27:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #91475 ## What & why Adds an opt-in `ultracode?: boolean` flag to the `claude-cli` backend config. When `true`, the backend injects `--settings '{"ultracode":true}'` into the spawned Claude Code argv **at execution time**, enabling ultracode — xhigh eff

### #93065 fix(ui): dedupe relay chat copies by message id

- bucket: needs_proof
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:53:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Deduplicate adjacent Control UI chat render copies that share the same transcript `id`/`messageId`. - Prefer the native unlabeled chat copy when the duplicate pair includes a relay-labeled projection. - Keep existing display-signature duplicate co

### #93089 fix(dashboard): add --print-token to copy SecretRef-managed gateway token to clipboard (fixes #93043)

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:53:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #93043 ## Summary When `gateway.auth.token` is SecretRef-managed (default after `openclaw onboard`), the `openclaw dashboard` command skips embedding the token in the URL (correct security behavior) but provides no actionable way for users to retrieve th

### #93111 #92684 fix(doctor): skip empty parent groupAllowFrom warning when all accounts override

- bucket: needs_proof
- author: Pandah97
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, commands, size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T05:56:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: "## Summary\n\n`openclaw doctor` warns about an empty top-level `groupAllowFrom` even when every child account has its own populated effective group allowlist. The runtime resolves `account ?? parent`, so the parent's empty list is never read \u2014 the warnin

### #92301 #92285: fix: reconcile orphaned managed flows when all child tasks are terminal

- bucket: needs_proof
- author: Pandah97
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, scripts, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:57:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: "## Summary\n\nAdd a new reconciliation rule in task-flow registry maintenance that transitions a managed TaskFlow to \"lost\" when all its linked child tasks are terminal (but no cancel was requested). This prevents parent orchestration flows from remaining p

### #91140 Project channel activity into gateway health snapshots

- bucket: needs_proof
- author: unknown7751
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, commands, size: M, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T06:11:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes openclaw/openclaw#90985. ## Summary Project recorded channel activity timestamps into gateway health snapshots so the health/status surface reflects known inbound and outbound activity. - **Fresh snapshots** fill `lastInboundAt` and `lastOutboundAt` from

### #91161 fix: prevent A2A target from reverse-calling sessions_send to requester (#39476)

- bucket: needs_proof
- author: sumitaich1998
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:11:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A2A `sessions_send` could post duplicate messages in the requester's channel. When Agent A calls `sessions_send(agentId: "agentB", ...)`, Agent B's reply already flows back to A through the `sessions_send` tool result (and the announce flow). But be

### #91162 fix(cron): honor configured delivery.channel instead of misrouting (#46899)

- bucket: needs_proof
- author: sumitaich1998
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:11:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A cron job configured with an explicit `delivery.channel` (e.g. Telegram) could be silently misrouted to a different enabled channel (e.g. Feishu) using a stale/leftover recipient id, failing with `Invalid ids: [-1002381931352]`. This makes the conf

### #91180 feat(whatsapp): support opt-in group-name config

- bucket: needs_proof
- author: haishmg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, gateway, size: L, proof: supplied, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:11:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91174. - Adds WhatsApp group config matching by exact current group name, gated behind `channels.whatsapp.dangerouslyAllowGroupNameMatching` at root or account scope. - Keeps stable group JIDs as the preferred and highest-precedence key for g

### #87739 Telegram: keep long DM turns alive through progress previews

- bucket: needs_proof
- author: dredozubov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, stale, size: XL, triage: mock-only-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:14:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Maintainer Design Check Requested @steipete @obviyus I’m opening this as the follow-up to #85749, but I want to align the UX contract before spending another full Telegram proof cycle. This PR intentionally follows the direction from #85749’s close comment:

### #93151 #92664: fix(read): decode GBK-encoded files on Chinese Windows via existing decoder

- bucket: needs_proof
- author: qingminglong
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:16:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Replace hard-coded UTF-8 decoding in the read tool with `decodeWindowsOutputBuffer`, which tries strict UTF-8 first then falls back to the Windows system codepage. On Chinese Windows (codepage 936/GBK), GBK-encoded text files now display correctly i

### #45901 security: create session dirs with private permissions

- bucket: needs_proof
- author: Tiooo111
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, commands, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:29:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: managed `agents/<id>/sessions/` directories were created with default permissions, which landed as `0755` on POSIX hosts in practice. - Why it matters: session transcripts are sensitive state, 

### #60328 feat(feishu): exec approval interactive cards with Handler pattern

- bucket: needs_proof
- author: schumilin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:29:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Feishu channel delivers exec approval requests as plain text — users must manually type `/approve <id> <decision>` to respond, while Discord and Telegram users get one-click interactive buttons. - **Why it matters:** Feishu is a prima

### #64611 Fix/heartbeat task due clock skew

- bucket: needs_proof
- author: Rahulkumar070
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:29:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `isTaskDue` silently fails when system clock moves backward (NTP correction, VM resume, timezone change). `nowMs - lastRunMs` becomes negative so the task never runs. - Why it matters: Heartbeat tasks get permanently stuck until the clock

### #69904 fix: drop stale transient async notices after session advance

- bucket: needs_proof
- author: OpenSpek
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:30:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This narrows late async/system notices so transient success-style notices do not surface after the session has already advanced. It keeps durable blocked, error, and timeout notices intact. ## What changed - mark transient async completion notices w

### #70156 chore: repo hygiene — gitignore generalization + large-file + exec-surface CI guards

- bucket: needs_proof
- author: clivemoore
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:30:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Three additive repo-hygiene improvements. Zero behavior change on the current tree — each CI check exits 0 today; the point is to keep the tree in that state. **Commit 1 — `.gitignore` generalization** (`aa5a9d1fc0`) Collapses per-kit `apps/shared/M

### #71135 feat(agents): add session working-context capsule (MVP for #67511)

- bucket: needs_proof
- author: Powwpol
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:30:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a small, self-contained module for persisting a per-session "working context" capsule alongside the session transcript. This is the minimal MVP piece of #67511: the persistence primitive itself, with no runtime wiring yet. Landing the storage s

### #71154 fix(exec): accept POSIX `\<newline>` in allowlisted commands; distinct error for unparseable syntax

- bucket: needs_proof
- author: scottgl9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:30:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Splice POSIX `\<newline>` line continuations before exec-allowlist analysis so multi-line invocations with an allowlisted leading binary resolve the same as their single-line form (fixes #71153). - Disambiguate denial signals: when a command canno

### #71205 config(io): add OPENCLAW_SKIP_STATE_DIR_HARDEN opt-out for multi-uid sidecar deployments (AI-assisted)

- bucket: needs_proof
- author: chrislangston
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:31:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `tightenStateDirPermissionsIfNeeded` in `src/config/io.ts` unconditionally calls `chmod(configDir, 0o700)` on every config save when the config dir matches the state dir. Multi-uid shared-volume deployments (e.g. Fly Machines running 

### #71249 fix(plugins): clear stale plugin debug banners

- bucket: needs_proof
- author: hoppsen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T06:31:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: turn-scoped `pluginDebugEntries` could outlive the turn that produced them, and the initial stale-banner cleanup fix still had two regressions: metadata-only clears touched `updatedAt`, and ver

### #71382 feat: add WhatsApp read-only mode

- bucket: needs_proof
- author: udaymanish6
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:31:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a true read-only mode for WhatsApp channels so OpenClaw can ingest and analyze inbound WhatsApp messages without ever sending outbound WhatsApp traffic. Fixes openclaw/openclaw#71166. ## Problem WhatsApp could emit automatic outbound messages d

### #71517 media: add shared filename decoder

- bucket: needs_proof
- author: szupzj18
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, stale, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:31:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: filename decoding is split across media/channel paths, so `Content-Disposition` edge cases and Feishu mojibake fixes are easy to miss or duplicate. - Why it matters: attachment names with RFC 5987 language tags, non-UTF-8 charset labels, 

### #71678 Fix: Issue 71522 memory embeddings

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, stale, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:31:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #71792 fix(session): persist memory on auto daily/idle rollover

- bucket: needs_proof
- author: jtatum
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: S, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:31:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Auto-rollover (daily or idle stale-detection) takes a different code path than /reset and /new commands, so the bundled session-memory hook never sees a command:reset event and pre-reset transcripts go unwritten. Low-activity agents that get rolled 

### #71837 fix(memory-core): denoise dreaming wrappers and promote grounded REM truths

- bucket: needs_proof
- author: vicenteliu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, stale, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:31:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR finishes the second half of the Dreaming denoise work and unblocks deep promotion. It does three things: - strips wrapper/prompt scaffolding earlier during session text extraction - suppresses meta-language in REM (`assistant`, `report`, `ca

