---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260616T0317-01
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
  - "#76631"
  - "#85727"
  - "#81503"
  - "#88738"
cluster_refs:
  - "#76631"
  - "#85727"
  - "#81503"
  - "#88738"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-16T03:17:16.609Z."
---

# Low-Signal PR Sweep 1

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #76631 docs(prometheus): warn that plugins.allow is strict-mode

- author: RayWoo
- updated: 2026-06-14T19:02:17Z
- score: 2
- signals: docs_only, third_party_or_external_capability
- files: 1
- body excerpt: ## Summary Adds a `<Warning>` callout to the Prometheus Quick Start clarifying that `plugins.allow` is **strict-mode** — when set, only listed plugins are eligible to load. The current Quick Start example shows `allow: ["diagnostics-prometh
- changed files: docs/gateway/prometheus.md

### #85727 docs: add first run setup steps to CONTRIBUTING.md

- author: Arvuno
- updated: 2026-06-15T02:53:12Z
- score: 2
- signals: docs_only, third_party_or_external_capability
- files: 1
- body excerpt: ## Summary - Added "First Run Setup" section to CONTRIBUTING.md with step-by-step instructions - Covers API key setup, doctor verification, gateway startup, and quick test - Added links to full config and provider docs ## Problem New contri
- changed files: CONTRIBUTING.md

### #81503 docs(plugins): document session end shutdown budget

- author: WuKongAI-CMU
- updated: 2026-06-15T06:46:22Z
- score: 2
- signals: docs_only, third_party_or_external_capability
- files: 1
- body excerpt: ## Summary - document the `shutdown` and `restart` `session_end` reasons as shutdown-finalizer events - call out the 2-second total drain budget for plugin `session_end` work - advise plugin maintainers to fast-path or make persistence cras
- changed files: docs/plugins/hooks.md

### #88738 docs: document wacli message verification

- author: shbernal
- updated: 2026-06-15T10:52:44Z
- score: 2
- signals: docs_only, third_party_or_external_capability
- files: 1
- body excerpt: ## Summary - Add the exact `wacli messages show --chat <jid> --id <message_id>` verification syntax to the bundled wacli skill. - Clarify that `messages show` does not accept the message ID as a positional argument. - Recommend verifying st
- changed files: skills/wacli/SKILL.md

