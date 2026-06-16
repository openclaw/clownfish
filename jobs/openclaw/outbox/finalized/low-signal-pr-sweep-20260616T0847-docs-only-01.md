---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260616T0847-docs-only-01
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
  - "#87627"
  - "#76479"
  - "#78411"
  - "#76744"
  - "#77232"
cluster_refs:
  - "#87627"
  - "#76479"
  - "#78411"
  - "#76744"
  - "#77232"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-16T08:47:03.708Z."
---

# Low-Signal PR Sweep 1

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #87627 docs(platforms): add ClawBox (Jetson hardware appliance)

- author: KrasimirKralev
- updated: 2026-06-10T09:54:49Z
- score: 1
- signals: docs_only
- files: 2
- body excerpt: ## What Adds a **Hardware** section to the Platforms page and a short `platforms/clawbox.md` page documenting ClawBox — an NVIDIA Jetson appliance that ships with the OpenClaw Gateway preconfigured. The Platforms page currently covers OS ta
- changed files: docs/platforms/clawbox.md, docs/platforms/index.md

### #76479 docs: add macOS setup notes and common setup troubleshooting

- author: Sujabaral
- updated: 2026-06-14T19:01:32Z
- score: 1
- signals: docs_only
- files: 1
- body excerpt: ## Summary Added macOS setup notes and a common troubleshooting section to improve onboarding for new contributors. ## Changes - Added macOS setup instructions (Xcode tools, Node, Homebrew) - Added common setup errors section - Improved cla
- changed files: README.md

### #78411 docs(concepts): standardize active memory related heading

- author: GGzili
- updated: 2026-06-14T19:19:12Z
- score: 1
- signals: docs_only
- files: 1
- body excerpt: ## Summary - Rename `## Related pages` to `## Related` in the Active memory concept doc - Align the page with the heading used by the rest of the docs set ## Real behavior proof **Behavior or issue addressed:** The Active memory concept doc
- changed files: docs/concepts/active-memory.md

### #76744 docs: standardize ACP behavior spelling

- author: clawsweeper[bot]
- updated: 2026-06-14T19:49:07Z
- score: 1
- signals: docs_only
- files: 1
- body excerpt: ## Summary - Standardize the ACP agents docs wording from `persistent behaviour` to `persistent behavior`. - Add a small Unreleased changelog entry for the docs fix. Issue: https://github.com/openclaw/openclaw/issues/76734 Credit: requested
- changed files: docs/tools/acp-agents.md

### #77232 docs(agent-loop): document idle-timeout cost-runaway circuit breaker

- author: adhirajhangal
- updated: 2026-06-14T19:52:46Z
- score: 1
- signals: docs_only
- files: 1
- body excerpt: ## What Adds a bullet to the Timeouts section of `docs/concepts/agent-loop.md` documenting the idle-timeout circuit breaker introduced in #76345. ## Why The existing Timeouts section explains that individual model requests abort on idle tim
- changed files: docs/concepts/agent-loop.md

