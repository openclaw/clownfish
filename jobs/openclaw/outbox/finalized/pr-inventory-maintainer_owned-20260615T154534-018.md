---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-018
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
  - "#81729"
  - "#75025"
  - "#39059"
  - "#47604"
  - "#60488"
  - "#74068"
  - "#82434"
  - "#83169"
  - "#83600"
  - "#93175"
  - "#24661"
  - "#39046"
  - "#40782"
  - "#85345"
  - "#85496"
  - "#86365"
  - "#86539"
  - "#86544"
  - "#86627"
  - "#87081"
  - "#87111"
  - "#87304"
  - "#87434"
  - "#93179"
  - "#87572"
cluster_refs:
  - "#81729"
  - "#75025"
  - "#39059"
  - "#47604"
  - "#60488"
  - "#74068"
  - "#82434"
  - "#83169"
  - "#83600"
  - "#93175"
  - "#24661"
  - "#39046"
  - "#40782"
  - "#85345"
  - "#85496"
  - "#86365"
  - "#86539"
  - "#86544"
  - "#86627"
  - "#87081"
  - "#87111"
  - "#87304"
  - "#87434"
  - "#93179"
  - "#87572"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.198Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 18

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #81729 Remove system event trust metadata

- bucket: maintainer_owned
- author: jesse-merhi
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: matrix, channel: mattermost, channel: msteams, channel: slack, channel: telegram, gateway, maintainer, size: S, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:47:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Follow up on Peter's structured system-event authority fix by keeping the remaining PR scope focused on channel/system-event producers that still need explicit non-owner downgrades. - Downgrade reaction, modal/member/message subtype, standalone Ma

### #75025 fix(heartbeat): refresh stale Current time line on every helper call (#44993)

- bucket: maintainer_owned
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: agents, stale, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-15T06:58:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `appendCronStyleCurrentTimeLine()` in `src/agents/current-time.ts` early-returns when its input already contains `Current time:`, so heartbeat and cron prompts that flow the previously formatted prompt back through the helper keep emitting the same 

### #39059 Security: harden gateway timeouts and auth store sealing

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, agents, maintainer, size: M, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:08:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `GatewayClient.request()` could hang indefinitely, auth stores were always plaintext at rest, and mirrored transcript writes did not re-assert restrictive permissions after append. - Why it matters: hung gateway RPCs leak pending state an

### #47604 feat(android): add Wear OS app MVP

- bucket: maintainer_owned
- author: sibbl
- author association: CONTRIBUTOR
- draft: no
- assignees: obviyus
- labels: app: android, no-stale, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:11:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary > This is the follow up PR of #46279 > It was heavily written with the help of Gemini 3.1 Pro (mainly for building UI) and Codex GPT 5.4, including lots of review iterations. > During the implementation of the previous PR I moved more and more logic

### #60488 fix(security): close active April 4 transport and auth gaps

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: channel: discord, gateway, agents, maintainer, size: S, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:16:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: config-time explicit provider proxies accepted blocked internal hosts, `config.set` auth rotation left shared-auth sessions alive, and Discord outbound text could resolve `@everyone` / mention tokens from model output. - Why it matters: t

### #74068 fix(cron): keep recurring backoff stable after reload

- bucket: maintainer_owned
- author: ai-hpc
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: XS, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:25:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep recurring cron error backoff on the fixed recurring schedule during reload/recompute - stop applying one-shot `cron.retry.backoffMs` to recurring jobs after reload - add regression coverage for an errored recurring job with custom one-shot re

### #82434 feat: add external plugin approval verification

- bucket: maintainer_owned
- author: Guardiola31337
- author association: CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: docs, channel: discord, channel: matrix, channel: slack, app: web-ui, gateway, commands, agents, stale, size: XL, channel: qqbot, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:32:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is the narrowed AgentKit host API slice after @kevinslin's feedback about avoiding a broad custom-action surface. - Adds `externalResolution` for plugin approvals as a single command-template field, not arbitrary custom action arrays. - Keeps c

### #83169 Discord: add reaction notification wake policy

- bucket: maintainer_owned
- author: 100menotu001
- author association: CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: docs, channel: discord, stale, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:33:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add shared `notificationWake.reactions` policy support so notification-backed reaction events queue by default, can opt into immediate wake, or can be disabled with `off`. - Wire Discord reaction notifications through that shared helper after exis

### #83600 feat(whatsapp): support list reply actions

- bucket: maintainer_owned
- author: rc125
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: docs, channel: whatsapp-web, agents, stale, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T07:33:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: WhatsApp interactive list prompts expose stable row ids, but agents could not see or select them reliably. - Why it matters: business and service flows often require a real WhatsApp `singleSelectReply.selectedRowId`, not a plain-text answ

### #93175 Add smoke-ci primary scorecard evidence

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, extensions: qa-lab, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:44:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add primary smoke-ci scorecard evidence links for six high-value already-covered behaviors - cover Control UI bootstrap, cron RPC/announce delivery, protected Prometheus scrape, media generation persistence, and thread placement - make the `releas

### #24661 feat: Provider/Cohere onboarding + auth-choice support

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, commands, agents, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:45:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Cohere was missing as a first-class onboarding/auth choice, so users had to hand-roll custom provider config. - Why it matters: this made Cohere setup inconsistent with other supported providers and harder to script in non-interactive onb

### #39046 AI-assisted: Gateway hook event routing respects target agent session

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P3, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:45:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Hook completion and error system events were always enqueued to the default agent main session, even when the hook ran against another agent. - Why it matters: In multi-agent setups this leaked hook summaries, including email-derived cont

### #40782 fix(feishu): use union_id as fallback for @mention detection in multi-bot groups

- bucket: maintainer_owned
- author: alaleiwang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: channel: feishu, stale, size: S, clawsweeper:automerge, clawsweeper:human-review, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-15T07:45:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Fixes #40768 When multiple Feishu bots share the same group, @mentioning a specific bot is not recognized. The bot logs `message in group ... did not mention bot` even though it's correctly mentioned. ## Root Cause Feishu `open_id` is **app-scoped**

### #85345 [codex] fix gateway derived plugin metadata reuse

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:51:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Allows Gateway-owned derived plugin metadata snapshots to remain reusable for the Gateway process when the persisted registry is stale or missing. - Threads the prepared metadata snapshot into provider auth prewarm model catalog loading. - Keeps r

### #85496 fix(codex): unsubscribe bound threads after turns

- bucket: maintainer_owned
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: size: S, extensions: codex, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:51:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #85458. - Adds best-effort `thread/unsubscribe` cleanup after Codex app-server bound turns finish or fail. - Reuses the canonical app-server cleanup helper and covers missing-thread recovery when the replacement thread retry fails, preservin

### #86365 fix(ui): dismiss stale approval prompts

- bucket: maintainer_owned
- author: jesse-merhi
- author association: MEMBER
- draft: no
- assignees: jesse-merhi
- labels: app: web-ui, maintainer, size: S, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:54:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Dismiss Control UI approval prompts when the Gateway says the approval was already resolved or expired. - Keep the prompt visible for non-terminal resolve failures, such as a disconnected Gateway. - Add jsdom coverage for expired, already-resolved

### #86539 fix: repair gateway stop hook runner alias

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: galiniliev
- labels: scripts, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:55:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Repairs runtime postbuild so a missing nested `dist/plugins/hook-runner-global.js` alias is recreated from the hashed root hook-runner chunk when present. - Runs that nested alias repair before legacy root chunk compatibility aliases, so old shutd

### #86544 fix(cli): show Gemini CLI runtime auth status

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:55:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #79585. ## Summary - Teach `openclaw models status` to detect canonical text models such as `google/*` that are routed through a CLI runtime such as `google-gemini-cli`. - Show/check a separate runtime auth route for that split, so `GEMINI_API_KEY` can r

### #86627 Keep core doctor health in contribution order

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, commands, maintainer, size: XL, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:56:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR integrates structured health checks with the ordered core doctor checks. The goal is to make it cheap and safe to add structured findings, dry-run previews, and diff/effect reporting to existing doctor rules without moving those rules out of

### #87081 test(policy): add config coverage report

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: galiniliev
- labels: scripts, maintainer, size: L, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:58:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is the final policy-series maintainer follow-up. It adds an internal, report-only coverage inventory for the OpenClaw config fields that Policy currently watches for conformance or attestation drift. - adds `pnpm policy:config-coverage` - keeps

### #87111 fix(webchat): paginate tool-heavy chat history

- bucket: maintainer_owned
- author: BunsDev
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, scripts, maintainer, size: XL, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:59:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rebuilt this PR onto current `origin/main` as one clean WebChat/Gateway pagination commit. - Adds additive `chat.history` cursor pagination with `beforeSeq`, `hasMore`, `nextBeforeSeq`, `oldestSeq`, and `newestSeq`. - Pages bounded, display-normal

### #87304 fix(update): fail closed on managed plugin pin conflicts

- bucket: maintainer_owned
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc, steipete
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:00:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: `openclaw update` could silently downgrade a user-pinned managed plugin direct dependency. After the maintainer policy note, this PR now implements the conflict/fail-closed behavior instead of preserving the newer pin automatically. Fixes #85184. ## Affected s

### #87434 [codex] Expire Telegram message-cache plugin state

- bucket: maintainer_owned
- author: scoootscooob
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: telegram, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:01:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - gives Telegram prompt-context message-cache plugin-state rows a seven-day TTL - normalizes existing no-expiry rows in a TTL-enabled namespace on the next write so upgraded `telegram.message-cache` rows can age out too - preserves sibling namespace

### #93179 excludeTestExecution option for more compact QA profile evidence

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, extensions: qa-lab, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:01:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add taxonomy profile support for `excludeTestExecution` and set it on `smoke-ci` - make QA evidence entry `execution` optional and omit it when the profile/default or CLI override requests compact evidence - add `qa run --exclude-test-execution-ev

### #87572 fix(memory): increase QMD embedTimeoutMs default to 600s for local GG…

- bucket: maintainer_owned
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: osolmaz
- labels: extensions: memory-core, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:03:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Local GGUF models (e.g., embeddinggemma-300m) take 3-4 minutes to embed a 30-50 file workspace on commodity hardware (4-core CPU), but `memory.qmd.update.embedTimeoutMs` default is only 120s, causing repeated timeout failures and effectiv

