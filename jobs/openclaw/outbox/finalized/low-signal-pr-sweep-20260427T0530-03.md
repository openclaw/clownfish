---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260427T0530-03
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
  - "#59523"
  - "#59483"
  - "#49529"
  - "#59075"
  - "#61167"
cluster_refs:
  - "#59523"
  - "#59483"
  - "#49529"
  - "#59075"
  - "#61167"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local ghcrawl open PR data on 2026-04-27T05:30:28.555Z."
---

# Low-Signal PR Sweep 3

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## GHCrawl Candidate Signals

### #59523 fix(script): clawdock ignores docker-compose.sandbox.yml

- author: chanjarster
- updated: 2026-04-02T10:13:57Z
- score: 2
- signals: blank_template, risky_infra
- files: 1
- body excerpt: bug fix: clawdock ignores docker-compose.sandbox.yml ## Summary Describe the problem and fix in 2–5 bullets: - Problem: clawdock ignores docker-compose.sandbox.yml ## Change Type (select all) - [x] Bug fix ## Scope (select all touched areas
- changed files: scripts/clawdock/clawdock-helpers.sh

### #59483 Feat/gmicloud provider integration

- author: Alas129
- updated: 2026-04-03T00:15:56Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 22
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `bet
- changed files: docs/concepts/model-providers.md, docs/docs.json, docs/providers/gmicloud.md, docs/providers/index.md, docs/zh-CN/providers/gmicloud.md, docs/zh-CN/providers/index.md, extensions/gmicloud/api.ts, extensions/gmicloud/index.ts, extensions/gmicloud/models.ts, extensions/gmicloud/onboard.ts, extensions/gmicloud/openclaw.plugin.json, extensions/gmicloud/package.json, extensions/gmicloud/provider-catalog.ts, pnpm-lock.yaml, src/agents/models-config.e2e-harness.ts, src/agents/models-config.providers.gmicloud.test.ts, src/channels/model-overrides.ts, src/commands/auth-choice.test.ts

### #49529 Add configurable Gemini safety settings for Google provider

- author: 0x04c11db7
- updated: 2026-04-03T02:29:56Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 16
- body excerpt: ## Summary - Problem: Gemini safety thresholds were not configurable from `openclaw.json`, and non-`google` provider keys using the `google-generative-ai` adapter could silently ignore configured safety overrides. - Why it matters: users ne
- changed files: CHANGELOG.md, docs/.generated/config-baseline.json, docs/.generated/config-baseline.jsonl, docs/.generated/plugin-sdk-api-baseline.json, docs/.generated/plugin-sdk-api-baseline.jsonl, docs/concepts/model-providers.md, docs/gateway/configuration-reference.md, src/agents/pi-embedded-runner-extraparams.test.ts, src/agents/pi-embedded-runner/extra-params.ts, src/config/config-misc.test.ts, src/config/schema.base.generated.ts, src/config/schema.help.ts, src/config/schema.labels.ts, src/config/types.models.ts, src/config/zod-schema.core.ts, test/vitest-scoped-config.test.ts

### #59075 feat(desktop): add Tauri desktop companion MVP

- author: gnanam1990
- updated: 2026-04-04T12:38:22Z
- score: 2
- signals: third_party_or_external_capability, dirty_branch
- files: 24
- body excerpt: ## Summary - add a new Tauri v2 desktop companion app under `apps/desktop/` for a Linux/Windows MVP - embed the existing Gateway Control UI in a React + Tailwind shell with gateway restart and health status wiring - add tray integration, cl
- changed files: apps/desktop/README.md, apps/desktop/index.html, apps/desktop/package.json, apps/desktop/postcss.config.cjs, apps/desktop/src-tauri/Cargo.lock, apps/desktop/src-tauri/Cargo.toml, apps/desktop/src-tauri/build.rs, apps/desktop/src-tauri/capabilities/default.json, apps/desktop/src-tauri/icons/icon.ico, apps/desktop/src-tauri/icons/icon.png, apps/desktop/src-tauri/src/main.rs, apps/desktop/src-tauri/tauri.conf.json, apps/desktop/src/App.tsx, apps/desktop/src/api.ts, apps/desktop/src/index.css, apps/desktop/src/main.tsx, apps/desktop/src/types.ts, apps/desktop/tailwind.config.ts

### #61167 docker: wire bundled plugins and playwright cache env for whatsapp setup

- author: eodeluga
- updated: 2026-04-06T22:02:46Z
- score: 2
- signals: third_party_or_external_capability, risky_infra
- files: 4
- body excerpt: ## Summary - Problem: Docker WhatsApp setup could miss runtime env wiring for bundled plugins and Playwright cache. - Why it matters: Missing env propagation can break plugin resolution or browser install/login flows inside containers. - Wh
- changed files: docker-compose.yml, docker-setup-web-whatsapp.sh, docker-teardown-web-whatsapp.sh, scripts/docker/setup.sh

