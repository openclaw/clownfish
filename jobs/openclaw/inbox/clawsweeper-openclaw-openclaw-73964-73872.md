---
repo: openclaw/openclaw
cluster_id: clawsweeper-openclaw-openclaw-73964-73872
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - fix
  - raise_pr
blocked_actions:
  - merge
require_human_for:
  - merge
canonical:
  - #73964
candidates:
  - #73964
  - #73872
cluster_refs:
  - #73964
  - #73872
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: true
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/clawsweeper-openclaw-openclaw-73964-73872
source: clawsweeper
---

# ClawSweeper-promoted fix PR candidate

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-openclaw-openclaw-73964-73872`.

## Operator Prompt

Create a narrow replacement PR for openclaw/openclaw based on the useful lifecycle portion of PR #73964.

Context:
- Source PR #73964 is open but stale and mixed. It includes private sensitive-command routing work plus one gateway lifecycle-loader build fix.
- The private routing work was already merged separately as PR #73872 (`Route sensitive group commands to the owner privately`, merge commit `4aa8da375659f34914d243ef4c0bb532d17f591b`). Do not re-implement or re-land that part here.
- Current target should be latest `origin/main`, observed at `ab39f2b272a1f794d0cb4ed2aed78a9e763be889` during maintainer triage.
- PR #73964 head is `9ea4916905ef0496c462a9647674cffeefea9361` and merge-base with current main is old (`d3683a61c5f8b7a42e66c291d6646dd67eafc1a5`), so do not merge or replay the whole branch.

Bug / desired behavior:
- Gateway restart/shutdown paths use lazy dynamic imports from `src/cli/gateway-cli/run-loop.ts`.
- Those modules can be loaded late during shutdown, restart, respawn, diagnostic bundle writing, process command queue cleanup, or runtime cleanup.
- If the installed package is rebuilt or updated and only hash-named chunks exist, late dynamic imports can fail because the old chunk filenames are no longer present.
- The lifecycle modules that can be reached late should have stable package dist entries in `tsdown.config.ts`, so runtime imports resolve through stable `dist/<entry>.js` files rather than transient hash chunks.

Implementation target:
- Add a focused helper to `tsdown.config.ts` for gateway lifecycle lazy entries.
- Include every first-hop lazy loader from `src/cli/gateway-cli/run-loop.ts` that is used during restart/shutdown/lifecycle handling:
  - `agents/pi-embedded-runner/runs`: `src/agents/pi-embedded-runner/runs.ts`
  - `config/config`: `src/config/config.ts`
  - `infra/process-respawn`: `src/infra/process-respawn.ts`
  - `infra/restart`: `src/infra/restart.ts`
  - `infra/restart-sentinel`: `src/infra/restart-sentinel.ts`
  - `infra/supervisor-markers`: `src/infra/supervisor-markers.ts`
  - `logging/diagnostic-stability-bundle`: `src/logging/diagnostic-stability-bundle.ts`
  - `plugins/bundled-runtime-deps-activity`: `src/plugins/bundled-runtime-deps-activity.ts`
  - `process/command-queue`: `src/process/command-queue.ts`
  - `tasks/runtime-internal`: `src/tasks/runtime-internal.ts`
- If current main still has other late lifecycle dynamic imports that are not listed above, include them too, but do not add unrelated entries.
- Current main already has `config/config` indirectly via Docker E2E harness entries. Still include it in the lifecycle helper/test so the lifecycle contract owns that requirement explicitly. Avoid churn if a duplicate key with the same source path would be noisy; the final unified entry map must include it with the same source.
- Preserve the current `run-loop.ts` logic on main, especially the bounded restart deferral behavior that calls `resolveGatewayRestartDeferralTimeoutMs`.
- Do not touch private command routing files, docs, changelog, Telegram tests, or other files from the stale PR unless absolutely necessary for this lifecycle-only fix.

Tests:
- Extend `src/infra/tsdown-config.test.ts` to assert that gateway lifecycle lazy loader modules have stable entries in the unified dist graph.
- Prefer a drift-catching test that derives or at least centrally lists the lifecycle loaders from current `run-loop.ts`, including `config/config`.
- Keep test scope focused on the build entry contract.

Validation:
- Run `pnpm test src/infra/tsdown-config.test.ts`.
- Run `pnpm build` if feasible because this changes the build graph / published dist entries.
- If a broad gate is needed, use the repo's Testbox policy rather than heavy local validation.

PR hygiene:
- Create a replacement Clownfish PR against current `main`; do not edit the source contributor branch directly.
- Credit PR #73964 in the new PR body as source context.
- Preserve the source author `pashpashpash` as co-author if the implementation uses their lifecycle idea/code.
- Do not merge the replacement PR automatically.
- Do not close or comment on PR #73964 unless the deterministic replacement workflow requires a superseded-source comment after the replacement PR exists.

## Related Refs

- #73964
- #73872

## Likely Files

- unknown

## Validation

- choose the narrowest repo-native validation for the touched surface

## Guardrails

- Do not merge.
- Do not close issues before a fix PR is opened, landed, or explicitly proven unnecessary.
- Keep one PR for this cluster; reuse `clownfish/clawsweeper-openclaw-openclaw-73964-73872` if it already exists.
- Preserve contributor credit and add a changelog entry when the target repo expects one.
