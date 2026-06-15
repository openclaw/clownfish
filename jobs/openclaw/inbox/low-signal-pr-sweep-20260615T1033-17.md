---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-17
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
  - "#69245"
  - "#82303"
  - "#91257"
  - "#85155"
  - "#89987"
cluster_refs:
  - "#69245"
  - "#82303"
  - "#91257"
  - "#85155"
  - "#89987"
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

# Low-Signal PR Sweep 17

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #69245 feat: enable cache-ttl context pruning for openai-completions providers

- author: g18166599417-svg
- updated: 2026-06-07T05:07:47Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Enable cache-ttl based context pruning for all providers using the \openai-completions\ API type. Currently, \isCacheTtlEligibleProvider\ only returns \ rue\ for Anthropic-family and Google-family providers (plus those registered
- changed files: not hydrated in gitcrawl

### #82303 feat(telegram): add progress assistant preview lane

- author: Fuma2013
- updated: 2026-06-07T20:38:01Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add `streaming.progress.assistantPreview` to enable assistant partial previews while staying in `mode: "progress"` - keep the existing Telegram progress/tool/status draft on the answer lane and stream assistant partial text on 
- changed files: not hydrated in gitcrawl

### #91257 perf: split subagent registry runtime imports

- author: poison
- updated: 2026-06-07T22:54:14Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Split the subagent registry lazy runtime imports across three narrower runtime entries: `context-engine-init.runtime`, `context-engine-registry.runtime`, and `runtime-plugins.runtime`. - Keep the existing `subagent-registry.run
- changed files: not hydrated in gitcrawl

### #85155 fix(agents): avoid inviting provider swaps in model alias guidance

- author: extrasmall0
- updated: 2026-06-08T01:34:30Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - stop telling the model to prefer aliases when a full provider/model override is already present - clarify that aliases are only shortcuts for unqualified model requests - update the prompt test to lock in the exact-ref guidance
- changed files: not hydrated in gitcrawl

### #89987 fix(cron): suppress control diagnostics in delivery

- author: bdjben
- updated: 2026-06-08T05:33:27Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Treat leading cron `NO_SUBPROCESS_STARTED` diagnostics as non-deliverable control replies only for Matrix cron delivery. - Suppress that diagnostic before Matrix/channel delivery while preserving ordinary explanatory text that 
- changed files: not hydrated in gitcrawl

