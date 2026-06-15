---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-041
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
  - "#71839"
  - "#71885"
  - "#71902"
  - "#72005"
  - "#72209"
  - "#72254"
  - "#72351"
  - "#72358"
  - "#72449"
  - "#72467"
  - "#72510"
  - "#72513"
  - "#72770"
  - "#72771"
  - "#72987"
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
  - "#71839"
  - "#71885"
  - "#71902"
  - "#72005"
  - "#72209"
  - "#72254"
  - "#72351"
  - "#72358"
  - "#72449"
  - "#72467"
  - "#72510"
  - "#72513"
  - "#72770"
  - "#72771"
  - "#72987"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.481Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 41

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

### #71839 fix(telegram): avoid routine reply quoting

- bucket: needs_proof
- author: Zozi96
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, agents, stale, size: S, extensions: qa-lab, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:32:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Stops Telegram draft previews and default assistant guidance from causing routine replies to quote the triggering message. This keeps native Telegram quoting available when explicitly useful, without making the first streamed paragraph appear as an 

### #71885 fix(tasks): serialize structured task values for sqlite

- bucket: needs_proof
- author: likewen-tech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:32:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - serialize structured `TaskRecord.task` values before binding them into sqlite - preserve existing string task values unchanged - add regression coverage that object task payloads are stored as JSON strings instead of throwing during sqlite binding

### #71902 Add managed flow residue resolution

- bucket: needs_proof
- author: smartpurchasingexpert-droid
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: cli, commands, agents, stale, size: L, extensions: qa-lab, triage: refactor-only, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:32:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add source-level resolution for managed TaskFlow terminal residue - expose `openclaw tasks flow resolve-residue` and residue readback/audit coverage - keep flow terminal residue resolution distinct from linked child task cleanup - allow queued non

### #72005 feat: server-rendered status footer and context threshold warnings

- bucket: needs_proof
- author: wearegoodthanks
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:32:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Server-rendered status footer and one-shot context-usage warnings for outbound chat messages. Fixes the "model lies about its own runtime state" failure mode in #71984 by moving footer authorship below the LLM. ## Why Asking a model to append a stat

### #72209 Add passive session recovery checkpoints

- bucket: needs_proof
- author: likewen-tech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds passive session recovery checkpoints so automatically recreated sessions can recover task context without pretending to remember, inheriting old approvals, or auto-executing recovered steps. ## What changed - Add session recovery prompt discipl

### #72254 fix(skills): clean up partially-copied skill dirs after sync failure

- bucket: needs_proof
- author: fancymatt
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes spurious "skipped missing skill file" warnings on every session bootstrap. ## Problem `syncSkillsToWorkspace` copies skills from the agent's source workspace into the sandbox target workspace. When a copy fails (e.g. the source is a stale `.sk

### #72351 fix(tui): handle zero history limit

- bucket: needs_proof
- author: Stedyclaw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes `openclaw tui --history-limit 0` so it disables history loading locally instead of sending an invalid `chat.history` request to the gateway. Before this change, the TUI passed `limit: 0` through to the gateway, which rejected it because histor

### #72358 chore(ci): harden package-manager resolution

- bucket: needs_proof
- author: mcgrew-oai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: CI and repo scripts had several package-resolution escape hatches: `pnpm dlx`, docs publish `npm install --no-save --package-lock=false`, non-hash-pinned pre-commit hook refs, stale pnpm pins, and Python CI installs that only implicitly r

### #72449 Fix/cron parse undefined

- bucket: needs_proof
- author: Eruditi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, stale, size: S, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #72467 fix(discord/security-audit): include top-level allowFrom in ownerAllowFromConfigured

- bucket: needs_proof
- author: chrispatil
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The `channels.discord.commands.native.no_allowlists` audit warning is supposed to fire when a Discord operator hasn't configured any allowlist that would let users invoke `/…` slash commands. Today it only consults legacy `channels.discord.dm.allowF

### #72510 fix(group-chat): wire multi-agent bot-targeting signals end-to-end (#56692)

- bucket: needs_proof
- author: Bojun-Vvibe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, stale, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #56692. ## Problem In a group chat with multiple bots, an agent can't tell which messages in the recent history were addressed to **itself** vs. another bot in the same group. `InboundHistory` and the reply context only carry sender / body / timestamp; 

### #72513 fix(mattermost): handle post_edited websocket events (#71930)

- bucket: needs_proof
- author: Bojun-Vvibe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #71930. ## Problem In a Mattermost channel where the bot is already running, **adding an @mention by editing an existing message** never wakes the agent. The mention is simply ignored. ## Root cause The Mattermost WebSocket dispatcher at `extensions/mat

### #72770 feat(gateway): add session sharing via time-limited read-only tokens

- bucket: needs_proof
- author: chinadbo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:34:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `sessions.createSharedToken` (WRITE scope) generating a time-limited, session-scoped read-only token - Adds `sessions.revokeSharedToken` (WRITE scope) for explicit revocation - Tokens are random 32-byte hex strings stored in an in-memory map 

### #72771 feat(gateway): emit agent.run.status events for run observability

- bucket: needs_proof
- author: chinadbo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:34:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `agent.run.status` gateway event emitted at agent run start and completion - Start payload: `agentId`, `sessionKey`, `model`, `startedAt` - Completion payload: `status` (completed/failed/interrupted), `durationMs`, token usage (input/output/c

### #72987 docs(compaction): document reserveTokensFloor default (20,000 tokens)

- bucket: needs_proof
- author: ayesha-aziz123
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, stale, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:34:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `reserveTokensFloor` under `agents.defaults.compaction` is used in `src/auto-reply/reply/agent-runner-memory.ts` (lines 393–395) with a fallback default of 20 000 tokens, but the configuration reference gave no indication of this default 

