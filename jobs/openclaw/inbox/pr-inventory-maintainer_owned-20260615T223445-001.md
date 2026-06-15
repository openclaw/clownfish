---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-001
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
  - "#58367"
  - "#59705"
  - "#88487"
  - "#88497"
  - "#88639"
  - "#87695"
  - "#88121"
  - "#88292"
  - "#91957"
  - "#88533"
  - "#88621"
  - "#88649"
  - "#88673"
  - "#88713"
  - "#88793"
  - "#88835"
  - "#88841"
  - "#88633"
  - "#88876"
  - "#92833"
  - "#88959"
  - "#88382"
  - "#88884"
  - "#92886"
  - "#88875"
cluster_refs:
  - "#58367"
  - "#59705"
  - "#88487"
  - "#88497"
  - "#88639"
  - "#87695"
  - "#88121"
  - "#88292"
  - "#91957"
  - "#88533"
  - "#88621"
  - "#88649"
  - "#88673"
  - "#88713"
  - "#88793"
  - "#88835"
  - "#88841"
  - "#88633"
  - "#88876"
  - "#92833"
  - "#88959"
  - "#88382"
  - "#88884"
  - "#92886"
  - "#88875"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.785Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 1

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #58367 Gateway: preserve approved scope baseline during pairing

- bucket: maintainer_owned
- author: jacobtomlinson
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-24T18:42:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserves the approved operator scope baseline during silent pairing flows - requires explicit approval before a fresh shared-auth device gains newly requested operator scopes - adds regression coverage for fresh-device pairing and reconnect behav

### #59705 [codex] improve parallels windows smoke logging

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, maintainer, size: M, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-24T19:10:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - added explicit Windows update phase markers in the npm-update Parallels helper so outer progress output reflects guest work - added guarded Windows helper launch retries plus incremental guest-log draining for the npm-update wrapper - applied

### #88487 fix(build): externalize protobufjs from root bundle

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-31T00:46:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Externalize `protobufjs` from the unified tsdown graph so the diagnostics-otel/OpenTelemetry gRPC path does not force tsdown to resolve `protobufjs/ext/descriptor.js`'s JSON descriptor import. - Keep `diagnostics-otel` bundled dist artifacts intac

### #88497 fix(gateway): load auto-enabled channel plugins at startup

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-31T02:03:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Treat channels.<id>.enabled=true as explicit channel presence for startup discovery. - Keep deferred configured channel plugins in the post-bind full runtime startup scope after auto-enable. - Add regressions for enabled-only external channel config

### #88639 docs: document gateway method types

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, commands, agents, maintainer, size: XL, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-31T16:52:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Continue the inline-comment pass after PR #88554 on a fresh branch from current `main`. - Document the gateway method type/helper contracts for post-handshake `connect` rejection, shared record/string normalization, and method request/client/conte

### #87695 fix(types): unblock changed gate checks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T09:55:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds the optional approval-action marker that `approval-reaction-runtime` already reads. - Narrows package manifest cache stat handling through an explicit non-null local. - Unblocks `check:changed` type/lint gates that are currently blocking the

### #88121 Lower profile tool policy filter audit logs

- bucket: maintainer_owned
- author: sjf
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T13:41:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Log profile-stage tool catalog trimming at debug instead of info. - Keep explicit allow/deny, sender/group, provider policy removals, and sandbox tool blocks visible at info. Verification - Not run (single log-level routing change requested).

### #88292 fix(update): guard Windows task autostart during package updates

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, cli, maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T14:13:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - disables enabled Windows Scheduled Task autostart while a managed package update replaces the OpenClaw package tree - covers running, stopped, and unclassified installed task runtimes, including `--no-restart` stopped/unknown cases where the task

### #91957 perf(sessions): share one enumeration across archive retention sweeps

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: M, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-10T14:51:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Every non-warn session-store save runs archived-transcript retention cleanup, and reset-archive retention **defaults on** (`resolveResetArchiveRetentionMs` falls back to `pruneAfterMs` when unset). So `saveSessionStoreUnlocked` invoked `cleanupArchi

### #88533 test(core): align changed gate type fixtures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:20:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR is currently parked as a narrow changed-gate fixture cleanup. It was useful while the schema-runtime PR was blocked by transient main drift, but newer main now enables stricter unsafe-assertion lint on the full changed test files. Making thi

### #88621 fix(types): restore current changed gate

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:21:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - updates the sanitize-session-history test harness type so tests can pass the runtime `model` metadata used by current callers - parses persisted device-auth token maps through the existing canonical token copier instead of returning raw `Record<st

### #88649 test(agents): use neutral tool schema fixtures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, commands, agents, maintainer, size: M, extensions: codex, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:21:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replaces private plugin/tool fixture names in tool-schema tests with neutral `fuzzplugin` / `mockplugin` names - keeps this PR test-only so follow-up runtime hardening can land separately ## Verification - `node scripts/run-vitest.mjs <14 changed

### #88673 test(outbound): align implicit source reply sink

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T17:43:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Updates the current-main outbound routing test to expect the internal source sink for implicit `message_tool_only` source replies. - Keeps explicit current-source sends covered by the following Slack plugin-delivery test. ## Verification - `node s

### #88713 docs: document agent helper comments

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, commands, docker, agents, maintainer, size: XL, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T17:43:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Follow-up to landed PR #88554 for the inline-comment pass, rebased onto current `main` and kept free of file-top/header comments and import-block comments. - Adds targeted JSDoc and inline comments around command helpers, status/doctor flows, mode

### #88793 docs: document cli command path helpers

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, maintainer, size: XL, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-11T04:02:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Documents exported CLI command-path matching helpers. - Documents CLI JSON output helpers for pre-parse flag detection and stderr routing restoration. - Documents CLI respawn policy helpers and the foreground gateway no-respawn invariant. - Docume

### #88835 fix(gateway): guard node approval policy writes

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-11T04:03:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a gateway-side fresh read before `exec.approvals.node.set` forwards node approval policy writes. - Reject missing/stale `baseHash` values against the current node snapshot so stale UI/CLI state cannot overwrite newer node approval rules. - Nor

### #88841 fix(discord): reconnect after abnormal gateway close

- bucket: maintainer_owned
- author: levineam
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: channel: discord, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-11T17:50:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - re-arm Discord gateway reconnect after abnormal non-intentional closes when shouldReconnect had been cleared - preserve intentional disconnect and normal close behavior - add regression coverage for abnormal 1006 recovery and intentional disconnec

### #88633 fix(ci): restore cron run-log Kysely guard

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T06:34:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - routes cron run-log count, page, max-seq, and prune queries through Kysely instead of raw SQLite strings - preserves the existing filter semantics, including `not-requested` delivery status rows stored as `NULL` - keeps this as a one-file current-

### #88876 fix(ci): restore cron schema snapshots

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, extensions: phone-control, size: L, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T01:35:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - refreshes the affected Codex prompt snapshots against the provider-normalized cron tool schema - keeps the cron runtime schema nullable so `null` clear values still reach cron patch normalization - fixes the phone-control test lint/type regression

### #92833 fix(memory): search memory and wiki concurrently for corpus=all (#92633)

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:18:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - `memory_search` with `corpus=all` ran the builtin memory/sessions branch and the wiki/supplement branch **sequentially** under one 15s tool deadline. Two searches that each finished well under 15s individually summed past the deadline, so `corpus

### #88959 fix(plugins): ignore throwing provider runtime hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:33:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - catch throwing provider runtime `normalizeModelId` and `normalizeTransport` hooks so model/transport normalization keeps its existing fallback paths - log sanitized provider hook failures instead of letting a bad plugin poison provider lookup - ke

### #88382 fix(config): compare size-drop guard against canonical config

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T04:01:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #71865. - compare config size-drop protection against the canonical previous source config for valid existing files, instead of raw editor-format bytes - keep the raw-byte fallback for invalid existing configs so malformed/clobbered files rema

### #88884 fix(agents): trim web tools in lean mode

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: L, extensions: openai, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T04:50:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - extend `localModelLean` so it trims `web_search`, `web_fetch`, and `x_search` along with `browser`, `cron`, and `message` - keep explicit override behavior for exact, grouped, and wildcard web preserves (`group:web`, `web_*`) while suppressing nat

### #92886 docs: add Plugin Inspector development and CI workflow

- bucket: maintainer_owned
- author: fuller-stack-dev
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: docs-discoverability, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T05:59:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a canonical Plugin Inspector guide for plugin-author development, CI, trusted runtime capture, beta-checkout comparison, reports, and plugin-shipped skill proof. - Reorder the plugin testing guide so external authors see package, runtime, and

### #88875 docs: document markdown and shared helpers

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, commands, agents, maintainer, size: XL, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T06:05:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Continue the post-#88554 inline-comment pass on a fresh PR branch. - Add public/API docs and invariant notes for markdown, shared helper, channel, gateway, plugin SDK, logging, restart, update, install, port-probe, PATH, JSON byte, secure-random,
