---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-21
mode: plan
triage_policy: low_signal_prs
allowed_actions:
  - comment
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - label
require_human_for:
  - security_sensitive
  - maintainer_signal
  - active_author_followup
  - focused_bug_fix
  - green_checks
  - technical_correctness_judgment
canonical: []
candidates:
  - "#88504"
  - "#88531"
  - "#88551"
  - "#92000"
  - "#80805"
cluster_refs:
  - "#88504"
  - "#88531"
  - "#88551"
  - "#92000"
  - "#80805"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-15T10:33:33.324Z."
---

# Low-Signal PR Sweep 21

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #88504 feat(memory): add multi-slot memory role architecture

- author: kklouzal
- updated: 2026-06-10T16:19:28Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary This PR adds a purpose-specific memory role-slot contract so memory plugins can compose instead of replacing each other through one global `plugins.slots.memory` selector. What changes: - Adds canonical memory role slots: `memory
- changed files: not hydrated in gitcrawl

### #88531 Suggest closest edit match when oldText is missing

- author: imwyvern
- updated: 2026-06-10T16:20:12Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Add line-numbered closest-match hints when the edit tool cannot find an `oldText` block. - Reuse the edit diff failure path so execution and preview errors share the same hint wording. - Keep hint generation bounded for large f
- changed files: not hydrated in gitcrawl

### #88551 fix(agents): skip auth gate for CLI-owned transport

- author: yu-xin-c
- updated: 2026-06-10T16:20:27Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ### Summary - Skip the model-fallback auth cooldown gate for explicitly configured CLI agent runtimes such as `anthropic/*` with `agentRuntime.id: "claude-cli"`. - Keep the attempt-level auth-profile selection guard so CLI-owned transports 
- changed files: not hydrated in gitcrawl

### #92000 fix(plugin-sdk): re-export resolveAllAgentSessionStoreTargetsSync from session-store-runtime

- author: xiaobao-k8s
- updated: 2026-06-10T18:14:00Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary `resolveAllAgentSessionStoreTargetsSync` is defined in `src/config/sessions/targets.ts` but was missing from the `plugin-sdk/session-store-runtime` re-export surface. External consumers importing from `openclaw/plugin-sdk/session
- changed files: not hydrated in gitcrawl

### #80805 SUP-1563 restore channel responsiveness health

- author: levineam
- updated: 2026-06-10T20:32:59Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Surface real busy/active-run/stale activity state in channel status instead of relying only on connected transport state. - Record Telegram outbound activity with the correct account id and avoid treating bot-authored Discord m
- changed files: not hydrated in gitcrawl

