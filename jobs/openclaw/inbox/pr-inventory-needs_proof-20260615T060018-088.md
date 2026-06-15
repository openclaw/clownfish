---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-088
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
  - "#76230"
  - "#75881"
  - "#75350"
  - "#75435"
  - "#75899"
  - "#75505"
  - "#75677"
  - "#75127"
  - "#76185"
  - "#74994"
cluster_refs:
  - "#76230"
  - "#75881"
  - "#75350"
  - "#75435"
  - "#75899"
  - "#75505"
  - "#75677"
  - "#75127"
  - "#76185"
  - "#74994"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.668Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 88

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #76230 perf: optimize agent tool result middleware runtime check

- bucket: needs_proof
- author: arcanis2k3
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:58:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces an $O(N \times M)$ array lookup with an $O(N + M)$ Set-based lookup when filtering runtimes against declared middleware in the plugin registry. This improves efficiency during plugin registration. ## Summary - Problem: Suboptimal O(N*M) data structure

### #75881 [codex] browser: expose headed start override

- bucket: needs_proof
- author: solavrc
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:58:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `openclaw browser start --headed` as the runtime counterpart to existing `--headless`. - Forward `headless=false` through the browser client and browser tool start action, including node proxy requests. - Add schema/tests for `headless: false`

### #75350 fix(deepseek): strip reasoning_content from input messages when thinking is enabled

- bucket: needs_proof
- author: t6am3
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:58:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When using DeepSeek V4 reasoning models with thinking enabled, OpenClaw returns a **400 error** on multi-turn conversations: > 400 The reasoning_content in the thinking mode must be passed back to the API. ## Root Cause In `createDeepSeekV4OpenAICom

### #75435 fix(memory-wiki): tolerate unavailable shared search

- bucket: needs_proof
- author: chen-zhang-cs-code
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: memory-wiki, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:58:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `wiki_search` can crash when `memory-wiki` is configured with `search.backend = "shared"` and a call selects `corpus = "all"` or `"memory"`. If the active memory runtime returns a truthy manager without a callable `search`, or if shared search throw

### #75899 fix(telegram): trigger synthetic session after enqueuing reaction events

- bucket: needs_proof
- author: sergattic
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-05-31T04:58:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Telegram `message_reaction` updates arrive fire-and-forget with no retry. The handler correctly enqueues a system event via `enqueueSystemEvent`, but previously never triggered a new session run — leaving the queued event dormant until the next scheduled heart

### #75505 fix(session_status): respect runtime and session model overrides

- bucket: needs_proof
- author: sreerevanth
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:58:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Session status showed incorrect model/provider when runtime or session overrides were active - Why it matters: Users see misleading model info, especially during live model switching - What changed: Updated precedence to → runtime > sessi

### #75677 i18n(tui): add Chinese (zh-CN) support for TUI status messages and waiting phrases

- bucket: needs_proof
- author: Kirra47
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:58:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR translates the TUI status messages and waiting phrases from English to Chinese (zh-CN), making the OpenClaw terminal interface accessible to Chinese-speaking users. ## Changes ### 📝 tui-waiting.ts - All 10 default waiting phrases translated

### #75127 fix: guard session reset prompts against fabricated data

- bucket: needs_proof
- author: afurm
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:58:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Bare `/new` and `/reset` startup prompts did not explicitly prevent models from presenting invented data as user-provided context. - Why it matters: On session reset, a model can fabricate realistic calendar/email/JSON-style data and act 

### #76185 fix(slack): route block-action events to thread sessions

- bucket: needs_proof
- author: Pearcekieser
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, agents, size: L, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Route Slack block-action button clicks through the normal inbound Slack message path so the owning agent session processes the interaction. - Preserve the clicked message/thread ownership for interactive replies, including replies sent through the

### #74994 fix(infra): guard all startup process.cwd() callers against deleted CWD

- bucket: needs_proof
- author: sumaiazaman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #73676 ## Problem When the process working directory is deleted after startup (common in CI, container teardown, or test environments), any bare `process.cwd()` call throws `ENOENT: no such file or directory, uv_cwd`. Four call sites in the startup path 

