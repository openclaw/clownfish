---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-06
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
  - "#79846"
  - "#79378"
  - "#77290"
  - "#65936"
  - "#73130"
cluster_refs:
  - "#79846"
  - "#79378"
  - "#77290"
  - "#65936"
  - "#73130"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-15T10:33:33.321Z."
---

# Low-Signal PR Sweep 6

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #79846 docs: add troubleshooting table to getting-started guide

- author: RockENZO
- updated: 2026-05-29T06:31:10Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Adds a concise troubleshooting table to the [Getting Started](https://docs.openclaw.ai/start/getting-started) guide covering the four most common first-run blockers: missing command, gateway not starting, model auth errors, and
- changed files: not hydrated in gitcrawl

### #79378 test(plugin-sdk): guard realtime voice exports

- author: ifthikar-razik
- updated: 2026-05-29T06:31:29Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary\n- add plugin-sdk release guards for realtime voice runtime exports used by standalone voice-call plugins\n- add guards for security-runtime file-store helpers required by voice-call persistence/context loading\n\n## Why\nAIF-126
- changed files: not hydrated in gitcrawl

### #77290 docs(plugins): add module-level documentation for plugin registry and API builder

- author: 34262315716
- updated: 2026-05-29T06:32:46Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary This PR adds meaningful JSDoc annotations to two core plugin system files that currently have almost no comments despite being critical infrastructure: ### Changes **`src/plugins/api-builder.ts`** (+50 lines) - Module-level doc e
- changed files: not hydrated in gitcrawl

### #65936 feat: add Asia/Shanghai to cron timezone suggestions

- author: finallylly
- updated: 2026-05-29T06:36:08Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Adds \`Asia/Shanghai\` to the \`CRON_TIMEZONE_SUGGESTIONS\` list in ui/src/ui/app-render.ts - Useful for users in the Asia region who want to use their local timezone in cron schedules ## Test plan - [x] Lint passes - [x] Type 
- changed files: not hydrated in gitcrawl

### #73130 Add credential blast-radius guard

- author: martins-oss
- updated: 2026-05-30T04:56:39Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: Adds names-only credential blast-radius classification plus observe/approval-route guardrails for destructive tool calls when broad credentials are present. Scope/guardrails: - Names-only credential inventory; no credential values emitted. 
- changed files: not hydrated in gitcrawl

