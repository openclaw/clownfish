---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-14
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
  - "#90542"
  - "#63339"
  - "#65707"
  - "#85308"
  - "#90625"
cluster_refs:
  - "#90542"
  - "#63339"
  - "#65707"
  - "#85308"
  - "#90625"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-15T10:33:33.322Z."
---

# Low-Signal PR Sweep 14

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #90542 fix(mentions): enforce scoped regex pattern allowlists

- author: patrick-slimelab
- updated: 2026-06-05T04:30:08Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: Follow-up to #70864. ## Summary - Treat explicit provider `mentionPatterns.mode: "allow"` as an allowlist scoped by `allowIn` instead of enabling regex mention patterns everywhere except `denyIn`. - Preserve backward-compatible permissive b
- changed files: not hydrated in gitcrawl

### #63339 tools: clarify sessions_send schema field guidance

- author: Kl163
- updated: 2026-06-05T05:04:20Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Clarify the model-facing schema guidance for `sessions_send`. This adds field descriptions so tool callers are guided to: - prefer `sessionKey` when known - use `label` only when `sessionKey` is unavailable - treat `agentId` as a
- changed files: not hydrated in gitcrawl

### #65707 perf(context-pruning): reduce keepLastAssistants to 1 in skill mode

- author: gztony
- updated: 2026-06-05T05:08:57Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - In skill mode (agent-autonomous execution), the model drives all tool calls and consumes results in the same turn — retaining 3 turns of full tool results wastes context window space - Detect skill mode via `skillsSnapshot` pre
- changed files: not hydrated in gitcrawl

### #85308 fix(subagents): preserve requester wake on visible delivery failure

- author: DolencLuka
- updated: 2026-06-05T09:14:52Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - split requester wake success from visible message-tool delivery status for subagent completions - preserve requester/parent wake when required group/channel visible delivery fails to produce message-tool evidence - persist visi
- changed files: not hydrated in gitcrawl

### #90625 docs: add supported iOS install path when public beta is full

- author: tarsopsbot
- updated: 2026-06-05T10:24:44Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Document the supported install path for the iOS node when the public beta or TestFlight capacity is full. Closes #90599 ## Changes - Add explicit wording to `docs/platforms/ios.md` stating that building the iOS app from source is
- changed files: not hydrated in gitcrawl

