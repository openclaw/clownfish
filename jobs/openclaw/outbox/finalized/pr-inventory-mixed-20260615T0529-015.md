---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-015
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
  - "#69972"
  - "#69999"
  - "#84769"
  - "#85464"
  - "#44476"
  - "#46793"
  - "#49022"
  - "#85402"
  - "#55997"
  - "#71154"
cluster_refs:
  - "#69972"
  - "#69999"
  - "#84769"
  - "#85464"
  - "#44476"
  - "#46793"
  - "#49022"
  - "#85402"
  - "#55997"
  - "#71154"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.601Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 15

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #69972 fix restart CI typings and prefer the current worktree under Vitest

- bucket: needs_proof
- author: OpenCnid
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, agents, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T17:29:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - repair the restart transaction typing fallout from the gateway restart handoff merge - prefer the current source checkout when Vitest or tsx resolves argv[1] through a borrowed node_modules tree - cover the worktree case with a bundled-dir regress

### #69999 feat(macos): wallboard shell — fullscreen WKWebView on external display (REL-433)

- bucket: needs_proof
- author: moneypennyrasener
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T17:30:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** No native macOS shell exists for the wall dashboard MVP; REL-434 needs a fullscreen, chrome-free host before it can wire in the clock-only Concept A surface. - **Why it matters:** The wall dashboard requires a dedicated window that fi

### #84769 fix: register google-gemini-cli in external CLI credential sync

- bucket: needs_proof
- author: stevenchouai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: googlechat, channel: matrix, gateway, agents, size: M, plugin: google-meet, triage: dirty-candidate, triage: needs-real-behavior-proof, extensions: google, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T17:50:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The `google-gemini-cli` provider was missing from the `EXTERNAL_CLI_SYNC_PROVIDERS` list in `external-cli-sync.ts`. This meant that OpenClaw could not auto-discover and reuse Gemini CLI OAuth credentials from `~/.gemini/oauth_creds.json`, forcing us

### #85464 fix(status): show configured cost for aws-sdk models

- bucket: stale_unassigned
- author: ItsOtherMauridian
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-22T17:56:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Remove the auth-mode gate from `/status` cost estimation so configured model pricing is used for `aws-sdk` providers too - Keep cost hidden when usage exists but no pricing is configured - Add regression coverage for an Amazon Bedrock `aws-sdk` pr

### #44476 fix(gateway): exit 0 on EADDRINUSE when healthy OpenClaw gateway is already running

- bucket: needs_proof
- author: hydro13
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T18:07:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `openclaw gateway run` hits EADDRINUSE, it exits with code 1. Under systemd/launchd with `Restart=on-failure`, this creates a tight crash-loop. ## Root Cause `GatewayLockError` on port conflict always exited non-zero, even when an already-healt

### #46793 Skills: apply tool policy to direct slash dispatch

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-22T18:07:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: direct `/skill` inline dispatch only applied the owner-only filter and skipped the rest of the tool-policy pipeline. - Why it matters: inline slash dispatch should honor the same allow/deny and policy composition rules as the rest of tool

### #49022 feat(tui): inline image rendering via pi-tui Image component

- bucket: needs_proof
- author: ademczuk
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T18:08:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: When tools generate images (charts, diagrams, AI art via `image_generate`), the TUI shows `[image/png 800kb]` text placeholders. Users can't see images without switching to another app. - Why it matters: Breaks the flow during iterative v

### #85402 fix(agents): lock transcript-writing session events [AI-assisted]

- bucket: ready_for_maintainer
- author: valkyriweb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-22T18:38:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: embedded prompt-lock fencing can report a takeover after a successful visible reply when `message`/`custom_message` session events write transcript entries while the prompt lock is released. - Why it matters: the user can receive the corr

### #55997 Gateway: require admin for chat.send reset

- bucket: maintainer_owned
- author: jacobtomlinson
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-22T19:36:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - align `chat.send` reset handling with the existing admin-only session reset boundary - add a gateway regression covering write-scoped `/reset` requests through `chat.send` ## Changes - reject internal `chat.send` `/new` and `/reset` requests unles

### #71154 fix(exec): accept POSIX `\<newline>` in allowlisted commands; distinct error for unparseable syntax

- bucket: needs_proof
- author: scottgl9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-22T19:43:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Splice POSIX `\<newline>` line continuations before exec-allowlist analysis so multi-line invocations with an allowlisted leading binary resolve the same as their single-line form (fixes #71153). - Disambiguate denial signals: when a command canno

