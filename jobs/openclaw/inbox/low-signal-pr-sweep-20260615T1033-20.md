---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-20
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
  - "#91924"
  - "#88082"
  - "#88203"
  - "#88239"
  - "#52664"
cluster_refs:
  - "#91924"
  - "#88082"
  - "#88203"
  - "#88239"
  - "#52664"
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

# Low-Signal PR Sweep 20

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #91924 feat(macos): add Simplified Chinese (zh-Hans) localization for InfoPlist

- author: Demon904050
- updated: 2026-06-10T11:26:59Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Add Simplified Chinese (`zh-Hans`) localization for the macOS app bundle, enabling native permission dialogs to display in Chinese when the system language is set to Chinese. ## Changes 1. **`Info.plist`** — add `CFBundleLocaliza
- changed files: not hydrated in gitcrawl

### #88082 feat(stepfun): add step-3.7-flash model

- author: lit26
- updated: 2026-06-10T12:29:30Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Add `step-3.7-flash` to the bundled StepFun provider plugin on both surfaces (`stepfun`, `stepfun-plan`). - Make `step-3.7-flash` the default model (`STEPFUN_DEFAULT_MODEL_ID`); propagates to onboarding + provider registration 
- changed files: not hydrated in gitcrawl

### #88203 fix(approvals): handle stale plugin waits

- author: TurboTheTurtle
- updated: 2026-06-10T13:43:08Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Extend the shared approval-not-found classifier to cover the gateway waitDecision stale-id message `approval expired or not found`. - Reuse that classifier in plugin approval waits for before_tool_call, Codex app-server approva
- changed files: not hydrated in gitcrawl

### #88239 fix(agents): surface terminal stream errors

- author: Darclindy
- updated: 2026-06-10T13:43:47Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Surface terminal stream/timeout errors as assistant text events on both the process event bus and the local run observer. - Preserve terminal error payload returns even if local event observers reject. - Add coverage for OpenAI
- changed files: not hydrated in gitcrawl

### #52664 feat: expose rawBody on user messages in plugin hook events

- author: kingdoooo
- updated: 2026-06-10T15:08:18Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ### Summary Add `rawBody` field to user messages in `agent_end`, `before_prompt_build`, and `before_agent_start` (legacy) hook events. This provides plugins with the original user input before channel structural context, `buildInboundUserCo
- changed files: not hydrated in gitcrawl

