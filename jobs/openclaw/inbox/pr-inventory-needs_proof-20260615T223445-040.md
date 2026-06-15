---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-040
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
  - "#93160"
  - "#93161"
  - "#43659"
  - "#87709"
  - "#87799"
  - "#87863"
  - "#88894"
  - "#88078"
  - "#88082"
  - "#88112"
  - "#88193"
  - "#88224"
  - "#88239"
  - "#88396"
  - "#93065"
  - "#93111"
  - "#92301"
  - "#87739"
  - "#64611"
  - "#71249"
  - "#71382"
  - "#71517"
  - "#71792"
  - "#71837"
  - "#71839"
cluster_refs:
  - "#93160"
  - "#93161"
  - "#43659"
  - "#87709"
  - "#87799"
  - "#87863"
  - "#88894"
  - "#88078"
  - "#88082"
  - "#88112"
  - "#88193"
  - "#88224"
  - "#88239"
  - "#88396"
  - "#93065"
  - "#93111"
  - "#92301"
  - "#87739"
  - "#64611"
  - "#71249"
  - "#71382"
  - "#71517"
  - "#71792"
  - "#71837"
  - "#71839"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.794Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 40

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #93160 fix(tui): recognize DEL (0x7f) as backspace for WSL2 terminals (fixes #92777)

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T04:30:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92777 ## Summary Add explicit `\x7f` (DEL) recognition to the TUI backspace deduper so backspace works on terminals that send `^?` instead of `^H`, such as WSL2 Ubuntu. ## Root Cause `createBackspaceDeduper` in `src/tui/tui.ts` explicitly checks for `\x

### #93161 perf(tasks): memoize reconcileInspectableTasks for same-tick calls (fixes #73531)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:39:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw status` and related commands call `reconcileInspectableTasks()` multiple times within the same event-loop tick (e.g. once for the task tree and once for the summary). Each call rebuilds the full reconciliation from the task registry, which

### #43659 fix: copilot token cache ignores profile rotation on rate limit

- bucket: needs_proof
- author: faishalwahiduddin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:57:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #43658 ## Problem When multiple `github-copilot` auth profiles are configured, profile rotation after a rate limit has no effect. All profiles end up using the same Copilot API token because `resolveCopilotApiToken()` caches to a single shared file (`gi

### #87709 fix(feishu): honor session activation mode for group admission (#50490)

- bucket: needs_proof
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: L, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:08:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Feishu's group admission gate consults only the static `channels.feishu.mentionRequired` config when deciding whether to admit non-@-mentioned messages, so `/activation mention` returned its confirmation reply but the runtime kept forwarding every

### #87799 fix(install): harden stdin consumers to prevent pipe corruption in curl | bash

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:11:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90008 Fixes #73814 ## Problem When the OpenClaw installer is piped via `curl | bash`, child processes spawned under `gum spin` can inherit the script stream as stdin. Gum v0.17.0 sets the wrapped command's stdin to `os.Stdin`, allowing npm or other subp

### #87863 fix(qqbot): send user-facing error message when lane dispatch fails

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, channel: qqbot, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:13:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary QQ Bot silently swallows lane errors (rate limit, timeout, FailoverError) — the user receives no feedback at all, and the message simply disappears into the void. Unlike other channels (Telegram, Feishu), the QQ Bot has no "thinking" indicator, so a

### #88894 docs(feishu): document raw-mode card fallback

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:15:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Documents the Feishu/Lark CardKit fallback symptom from #88888, where an interactive-card reply can show only the client-upgrade fallback text instead of the final answer. - Adds the plain-rendering workaround using `streaming: false` plus `render

### #88078 fix(active-memory): trim recall prompt envelope

- bucket: needs_proof
- author: gisk0
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:19:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Trim Active Memory's recall "latest user message" before building the recall subagent conversation context. - Prefer the explicit `Current user request:` section when a prompt envelope contains OpenClaw runtime context, then fall back to short pro

### #88082 feat(stepfun): add step-3.7-flash model

- bucket: needs_proof
- author: lit26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XS, extensions: stepfun, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:19:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `step-3.7-flash` to the bundled StepFun provider plugin on both surfaces (`stepfun`, `stepfun-plan`). - Make `step-3.7-flash` the default model (`STEPFUN_DEFAULT_MODEL_ID`); propagates to onboarding + provider registration via the derived `STE

### #88112 fix(agents): ensure inline image attachments use ASCII base64 (Fixes #86984)

- bucket: needs_proof
- author: alkor2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P1, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:19:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Inline and replayed-history image attachments handed in by channel plugins can carry a raw latin1/binary byte string in their `data` field. This value was forwarded untouched into the provider `source.base64`. The Anthropic Messages API rejects any

### #88193 [codex] tighten final Telegram DM recovery

- bucket: needs_proof
- author: Jaehdawg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T05:21:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - Preserve the real durable suppression reason in Telegram final delivery results instead of collapsing every no-send into `no_visible_result`. - Retry the missing-final Telegram recovery path only when the durable send truly reports `no_visibl

### #88224 fix(update): prefer package root as managed-service handoff cwd (fixes #87889)

- bucket: needs_proof
- author: ztexydt-cqh
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T05:21:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes **#87889** — Dashboard updates for global installs are skipped with `managed-service-handoff-started`, while CLI updates succeed. ## Root Cause `resolveManagedServiceHandoffCwd` preferred `os.homedir()` over the package `root` when choosing th

### #88239 fix(agents): surface terminal stream errors

- bucket: needs_proof
- author: Darclindy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:22:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Surface terminal stream/timeout errors as assistant text events on both the process event bus and the local run observer. - Preserve terminal error payload returns even if local event observers reject. - Add coverage for OpenAI stream parsing, inc

### #88396 feat(cron): make isolated-agent setup watchdog configurable

- bucket: needs_proof
- author: Kaspnov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:26:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The cron **setup watchdog** that aborts an isolated agent job which has not reached `runner started` is a hardcoded `60_000` ms (`CRON_AGENT_SETUP_WATCHDOG_MS` in `src/cron/service/timer.ts`). It is not overridable via config. - When several heavy

### #93065 fix(ui): dedupe relay chat copies by message id

- bucket: needs_proof
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:53:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Deduplicate adjacent Control UI chat render copies that share the same transcript `id`/`messageId`. - Prefer the native unlabeled chat copy when the duplicate pair includes a relay-labeled projection. - Keep existing display-signature duplicate co

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

### #87739 Telegram: keep long DM turns alive through progress previews

- bucket: needs_proof
- author: dredozubov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, stale, size: XL, triage: mock-only-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:14:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Maintainer Design Check Requested @steipete @obviyus I’m opening this as the follow-up to #85749, but I want to align the UX contract before spending another full Telegram proof cycle. This PR intentionally follows the direction from #85749’s close comment:

### #64611 Fix/heartbeat task due clock skew

- bucket: needs_proof
- author: Rahulkumar070
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:29:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `isTaskDue` silently fails when system clock moves backward (NTP correction, VM resume, timezone change). `nowMs - lastRunMs` becomes negative so the task never runs. - Why it matters: Heartbeat tasks get permanently stuck until the clock

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
