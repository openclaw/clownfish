---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260427T0530-02
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
  - "#58005"
  - "#58386"
  - "#58291"
  - "#58500"
  - "#59082"
cluster_refs:
  - "#58005"
  - "#58386"
  - "#58291"
  - "#58500"
  - "#59082"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local ghcrawl open PR data on 2026-04-27T05:30:28.554Z."
---

# Low-Signal PR Sweep 2

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## GHCrawl Candidate Signals

### #58005 feat(bodhi): OpenBodhi Alpha — CLI, safety layer, precognition, vault backup, cron delivery

- author: Qenjin
- updated: 2026-03-31T00:57:07Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 100
- body excerpt: ## OpenBodhi Alpha Release This PR merges the full alpha feature set into main and prepares for the first public release. ### What's in this release **`openbodhi` CLI** - Branded terminal entry point: `openbodhi start | stop | status | setu
- changed files: .env.bodhi1.example, .github/workflows/ci.yml, .github/workflows/labeler.yml, .gitignore, README.md, apps/android/app/build.gradle.kts, apps/android/benchmark/build.gradle.kts, apps/android/build.gradle.kts, apps/android/gradle/wrapper/gradle-wrapper.jar, apps/android/gradle/wrapper/gradle-wrapper.properties, apps/android/gradlew, apps/android/gradlew.bat, bin/openbodhi, docs/bodhi/ROADMAP.md, docs/bodhi/arch-diagram.html, docs/bodhi/architecture-visual.html, docs/bodhi/architecture.md, docs/bodhi/assets/banner.webp

### #58386 fix: emit cli-backends.runtime as standalone build entry

- author: Tug
- updated: 2026-03-31T13:48:56Z
- score: 2
- signals: third_party_or_external_capability, risky_infra
- files: 5
- body excerpt: Fixes #57326 ## What's broken The `claude-cli` provider (and all CLI backend providers) fails with **"Unknown model"** errors on every request: ``` ⚠️ Agent failed before reply: All models failed (5): claude-cli/claude-sonnet-4-6: Unknown m
- changed files: extensions/anthropic/index.ts, scripts/test-built-plugin-singleton.mjs, src/agents/model-selection.ts, src/plugins/providers.ts, tsdown.config.ts

### #58291 fix(build): add lockfiles for bundled plugin runtime deps

- author: zhumengzhu
- updated: 2026-04-01T06:28:33Z
- score: 2
- signals: third_party_or_external_capability, risky_infra
- files: 11
- body excerpt: ## Summary - Commit lockfiles (`package-lock.json`) for all 6 bundled plugins with `stageRuntimeDependencies: true`, making transitive dependency resolution deterministic and supply-chain-safe - Modify `installPluginRuntimeDeps()` to use lo
- changed files: .gitignore, extensions/amazon-bedrock/package-lock.json, extensions/diffs/package-lock.json, extensions/discord/package-lock.json, extensions/feishu/package-lock.json, extensions/slack/package-lock.json, extensions/telegram/package-lock.json, package.json, scripts/copy-bundled-plugin-metadata.mjs, scripts/stage-bundled-plugin-runtime-deps.mjs, scripts/sync-plugin-lockfiles.mjs

### #58500 Feat/predictive plugins

- author: endse
- updated: 2026-04-01T07:03:53Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 22
- body excerpt: ## Summary This PR addresses the lack of predictive analytics and proactive assistance out-of-the-box by introducing the Cost Optimizer and Proactive Intelligence extensions. - Problem: The core orchestrator currently lacks built-in financi
- changed files: extensions/cost-optimizer/index.ts, extensions/cost-optimizer/openclaw.plugin.json, extensions/cost-optimizer/package.json, extensions/cost-optimizer/runtime-api.ts, extensions/cost-optimizer/src/budget-manager.ts, extensions/cost-optimizer/src/cost-optimizer.test.ts, extensions/cost-optimizer/src/cost-tools.ts, extensions/cost-optimizer/src/cost-tracker.ts, extensions/cost-optimizer/src/pricing-db.ts, extensions/cost-optimizer/src/task-classifier.ts, extensions/cost-optimizer/src/test-log.txt, extensions/proactive-intel/index.ts, extensions/proactive-intel/openclaw.plugin.json, extensions/proactive-intel/package.json, extensions/proactive-intel/runtime-api.ts, extensions/proactive-intel/src/anticipation-engine.ts, extensions/proactive-intel/src/intel-tools.ts, extensions/proactive-intel/src/pattern-detector.ts

### #59082 Add OpenClaw harness workflow and public contribution bundle

- author: laosu888
- updated: 2026-04-01T15:28:24Z
- score: 3
- signals: third_party_or_external_capability, risky_infra, dirty_branch
- files: 71
- body excerpt: ## Summary - add staged OpenClaw harness workflow and dispatch tooling - add automatic session closeout plugin support - add public workspace export/install/package helpers - add public template agent role stubs and context bundle ## Includ
- changed files: .gitignore, .openclaw/extensions/auto-session-closeout/index.js, .openclaw/extensions/auto-session-closeout/openclaw.plugin.json, agents/claude-style/README.md, agents/coordinator/AGENTS.md, agents/explore/AGENTS.md, agents/general-purpose/AGENTS.md, agents/general-purpose/BOOTSTRAP.md, agents/general-purpose/IDENTITY.md, agents/general-purpose/SOUL.md, agents/general-purpose/TOOLS.md, agents/general-purpose/USER.md, agents/plan/AGENTS.md, agents/plan/BOOTSTRAP.md, agents/plan/IDENTITY.md, agents/plan/SOUL.md, agents/plan/TOOLS.md, agents/plan/USER.md

