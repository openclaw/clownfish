---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260616T0847-docs-only-02
mode: autonomous
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
  - "#77629"
  - "#80716"
  - "#90401"
  - "#82379"
cluster_refs:
  - "#77629"
  - "#80716"
  - "#90401"
  - "#82379"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-16T08:47:03.709Z."
---

# Low-Signal PR Sweep 2

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #77629 docs(plugins): clarify hook runtime activation

- author: Beandon13
- updated: 2026-06-14T20:16:08Z
- score: 1
- signals: docs_only
- files: 2
- body excerpt: ## Summary - document that chat-path hooks such as `before_dispatch` only run when Gateway startup planning actually loads the plugin into the messaging runtime - tie the hook docs back to the manifest activation contract, especially `activ
- changed files: docs/plugins/hooks.md, docs/plugins/manifest.md

### #80716 docs: add Codex long-task reliability runbook

- author: scarlettdetekelala
- updated: 2026-06-14T21:40:25Z
- score: 1
- signals: docs_only
- files: 4
- body excerpt: ## Summary Adds a public Codex long-task reliability runbook based on a field deployment where long Telegram/cron tasks kept appearing stalled or failing even after queue/concurrency tuning. The report is intentionally sanitized and generic
- changed files: docs/docs.json, docs/plugins/codex-harness-long-tasks.md, docs/plugins/codex-harness-reference.md, docs/plugins/codex-harness.md

### #90401 docs(local-models): add Atomic Chat as an OpenAI-compatible local server

- author: danyurkin
- updated: 2026-06-14T22:26:19Z
- score: 1
- signals: docs_only
- files: 1
- body excerpt: Adds Atomic Chat to the local-models guide as another OpenAI-compatible local server, alongside the existing LM Studio / Ollama / MLX / custom-proxy guidance. [Atomic Chat](https://atomic.chat/) is a desktop app that runs open-weight models
- changed files: docs/gateway/local-models.md

### #82379 docs(lobster): enumerate injected runtime env vars and clarify step-output access

- author: Sanjays2402
- updated: 2026-06-14T23:00:18Z
- score: 1
- signals: docs_only
- files: 1
- body excerpt: ## Summary Closes #82281. The Lobster docs document workflow files and step `stdin:` piping, but they don't enumerate which env vars the runtime injects into step shells. The current page mentions `LOBSTER_ARG_<name>` and `LOBSTER_FINAL_STA
- changed files: docs/tools/lobster.md

