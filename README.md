<img width="1584" height="672" alt="clownfish_banner" src="https://github.com/user-attachments/assets/6b2a0d0f-aca8-47e5-8a1f-eb266c760646" />

# 🐠 Clownfish

Clownfish is a conservative OpenClaw maintainer tool for one-cluster issue and PR cleanup.

It takes a curated GitHub issue/PR cluster, asks a Codex worker to classify the items, and applies only narrow, auditable cleanup actions when the evidence is strong. This compliments the pre-pass work on [clawsweeper](https://github.com/openclaw/clawsweeper) and act as the second-pass intent based cluster resolution.

Allowed automated close reasons:

- duplicate of a clear canonical thread
- superseded by a clear canonical thread
- fixed by a specific candidate fix

Manual backlog-cleanup jobs may also use
[`instructions/low-signal-prs.md`](instructions/low-signal-prs.md) for
drive-by PRs that are clearly blank-template, docs-only discoverability churn,
test-only coverage spam, refactor-only noise, third-party capabilities that
belong on ClawHub, risky unapproved infra, or dirty branches. This policy is
opt-in per job and should return `needs_human` for plausible bug fixes or
anything with active maintainer signal.

Everything else stays open or is escalated for maintainer review.

Security-sensitive reports are deliberately out of scope. Clownfish
routes those refs to central OpenClaw security handling and keeps processing
unrelated ordinary bugs, provider gaps, and duplicate cleanup in the same
cluster. It follows OpenClaw `SECURITY.md`: trusted-operator exec behavior,
provider gaps, feature gaps, and hardening-only parity drift are not treated as
vulnerabilities unless there is a real trust-boundary bypass.

## Status

Clownfish is intentionally smaller than ClawSweeper. ClawSweeper scans the whole OpenClaw backlog on a cadence; Clownfish handles targeted clusters that were already grouped by a human, gitcrawl, or another dedupe tool.

Cluster discovery currently comes from [openclaw/gitcrawl](https://github.com/openclaw/gitcrawl).

<img width="3582" height="2160" alt="image" src="https://github.com/user-attachments/assets/20b816cc-72ab-479e-bc18-84f5b2b53745" />

The default workflow is proposal-first. It does not comment or close unless a job is explicitly promoted and the deterministic applicator confirms live GitHub state has not changed.

## Dashboard

Last dashboard update: Jun 15, 2026, 02:11 UTC

<!-- projectclownfish-dashboard:start -->
State: Failed clusters need inspection

Scope: 481 active latest cluster reports. 4 policy-archived cluster(s) are excluded from health stats; run attempts are tracked as audit history only.

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 481 | 100% |
| Policy-archived clusters | 4 | audit |
| Clean completed clusters | 280 | 58.2% |
| Needs-human clusters | 59 | 12.3% |
| Latest successful clusters | 472 | 98.1% |
| Latest failed clusters | 3 | 0.6% |
| Latest cancelled clusters | 1 | 0.2% |
| Run attempts archived | 807 | audit |
| Fix action attempts | 254 | audit |
| Fix actions executed | 1 | 0.4% |
| Fix actions failed | 61 | 24.0% |
| Fix actions blocked | 80 | 31.5% |
| Latest clusters with fix failures | 71 | 14.8% |
| Distinct PRs touched | 1357 | 100% |
| Open PRs tracked | 178 | 13.1% |
| Closed unmerged PRs tracked | 972 | 71.6% |
| Completed close actions | 32 | 9.6% |
| Completed merge actions | 26 | 7.8% |
| Duplicate closes | 22 | 68.8% |
| Superseded closes | 0 | 0.0% |
| Fixed-by-candidate closes | 0 | 0.0% |
| Low-signal PR closes | 0 | 0.0% |
| Blocked mutation attempts | 150 | 45.2% |
| Skipped mutation attempts | 124 | 37.3% |

### Clusters Needing Inspection

| Cluster | State | Source job | Reason | Report | Run |
| --- | --- | --- | --- | --- | --- |
| [gitcrawl-950-plan-wave-20260615-b](results/openclaw/gitcrawl-950-plan-wave-20260615-b.md) | needs human | jobs/openclaw/inbox/gitcrawl-950-plan-wave-20260615-b.md | #84728 requires maintainer/product decision on the automatic Codex-owned rollout JSONL repair boundary and a refreshed conflict-resolutio... | [report](results/openclaw/gitcrawl-950-plan-wave-20260615-b.md) | [27519121085](https://github.com/openclaw/clownfish/actions/runs/27519121085) |
| [gitcrawl-931-plan-wave-20260615-b](results/openclaw/gitcrawl-931-plan-wave-20260615-b.md) | needs human | jobs/openclaw/inbox/gitcrawl-931-plan-wave-20260615-b.md | #80235 requires maintainer product review for the new Discord implicitReplyMentions config surface and cannot be merge-recommended while ... | [report](results/openclaw/gitcrawl-931-plan-wave-20260615-b.md) | [27519115708](https://github.com/openclaw/clownfish/actions/runs/27519115708) |
| [gitcrawl-909-plan-wave-20260615-b](results/openclaw/gitcrawl-909-plan-wave-20260615-b.md) | needs human | jobs/openclaw/inbox/gitcrawl-909-plan-wave-20260615-b.md | Maintainer product decision remains for #80377: decide the intended /reset contract for preserving versus clearing user-sourced thinking/... | [report](results/openclaw/gitcrawl-909-plan-wave-20260615-b.md) | [27519107665](https://github.com/openclaw/clownfish/actions/runs/27519107665) |
| [gitcrawl-900-plan-wave-20260615-b](results/openclaw/gitcrawl-900-plan-wave-20260615-b.md) | needs human | jobs/openclaw/inbox/gitcrawl-900-plan-wave-20260615-b.md | #89045 needs maintainer review before any merge path: hydrated ClawSweeper review flags persisted session-state/data-model compatibility ... | [report](results/openclaw/gitcrawl-900-plan-wave-20260615-b.md) | [27519104225](https://github.com/openclaw/clownfish/actions/runs/27519104225) |
| [gitcrawl-891-plan-wave-20260615-b](results/openclaw/gitcrawl-891-plan-wave-20260615-b.md) | needs human | jobs/openclaw/inbox/gitcrawl-891-plan-wave-20260615-b.md | Maintainer/product decision still needed for the canonical fix design on #72500: keep authenticated UI mounted only for transient reconne... | [report](results/openclaw/gitcrawl-891-plan-wave-20260615-b.md) | [27519099775](https://github.com/openclaw/clownfish/actions/runs/27519099775) |
| [gitcrawl-830-plan-wave-20260615-b](results/openclaw/gitcrawl-830-plan-wave-20260615-b.md) | needs human | jobs/openclaw/inbox/gitcrawl-830-plan-wave-20260615-b.md | #76263 and #76730 require central OpenClaw security handling before any duplicate, closure, fix, or merge decision. | [report](results/openclaw/gitcrawl-830-plan-wave-20260615-b.md) | [27519071785](https://github.com/openclaw/clownfish/actions/runs/27519071785) |
| [gitcrawl-504-plan-wave-20260615-a](results/openclaw/gitcrawl-504-plan-wave-20260615-a.md) | needs human | jobs/openclaw/inbox/gitcrawl-504-plan-wave-20260615-a.md | #74481 needs maintainer product/security-boundary review for whether OpenAI-compatible custom base URLs should use live /v1/models discov... | [report](results/openclaw/gitcrawl-504-plan-wave-20260615-a.md) | [27518864728](https://github.com/openclaw/clownfish/actions/runs/27518864728) |
| [gitcrawl-455-plan-wave-20260615-a](results/openclaw/gitcrawl-455-plan-wave-20260615-a.md) | needs human | jobs/openclaw/inbox/gitcrawl-455-plan-wave-20260615-a.md | Decide whether #81054 should be treated as a source of useful follow-up work to fold into #81046, kept as an independent broader replacem... | [report](results/openclaw/gitcrawl-455-plan-wave-20260615-a.md) | [27518845716](https://github.com/openclaw/clownfish/actions/runs/27518845716) |
| [gitcrawl-74-plan-ramp](results/openclaw/gitcrawl-74-plan-ramp.md) | needs human | jobs/openclaw/inbox/gitcrawl-74-plan-ramp.md | #80621 needs a maintainer/API decision on whether contracts.tools:true should mean catch-all tool ownership; related implementation PR #8... | [report](results/openclaw/gitcrawl-74-plan-ramp.md) | [27516230700](https://github.com/openclaw/clownfish/actions/runs/27516230700) |
| [ghcrawl-156982-autonomous-smoke](results/openclaw/ghcrawl-156982-autonomous-smoke.md) | fix blocked | jobs/openclaw/outbox/stuck/ghcrawl-156982-autonomous-smoke.md | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] sr... | [report](results/openclaw/ghcrawl-156982-autonomous-smoke.md) | [27515659253](https://github.com/openclaw/clownfish/actions/runs/27515659253) |
| [ghcrawl-156949-autonomous-smoke](results/openclaw/ghcrawl-156949-autonomous-smoke.md) | needs human | jobs/openclaw/outbox/stuck/ghcrawl-156949-autonomous-smoke.md | #92091 needs maintainer/author follow-up for redacted live Discord behavior proof and, if that cannot be provided promptly, a decision on... | [report](results/openclaw/ghcrawl-156949-autonomous-smoke.md) | [27514543970](https://github.com/openclaw/clownfish/actions/runs/27514543970) |
| [ghcrawl-156966-autonomous-smoke](results/openclaw/ghcrawl-156966-autonomous-smoke.md) | needs human | jobs/openclaw/outbox/stuck/ghcrawl-156966-autonomous-smoke.md | Hydrate the existing open/conflicting recovery PR referenced in #38091's 2026-06-12 ClawSweeper comment before executing fix work; choose... | [report](results/openclaw/ghcrawl-156966-autonomous-smoke.md) | [27507069908](https://github.com/openclaw/clownfish/actions/runs/27507069908) |
| [ghcrawl-156848-autonomous-smoke](results/openclaw/ghcrawl-156848-autonomous-smoke.md) | fix blocked | jobs/openclaw/outbox/stuck/ghcrawl-156848-autonomous-smoke.md | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [report](results/openclaw/ghcrawl-156848-autonomous-smoke.md) | [27506373340](https://github.com/openclaw/clownfish/actions/runs/27506373340) |
| [ghcrawl-156962-autonomous-smoke](results/openclaw/ghcrawl-156962-autonomous-smoke.md) | fix blocked | jobs/openclaw/outbox/stuck/ghcrawl-156962-autonomous-smoke.md | Codex fix worker timed out after 1800000ms | [report](results/openclaw/ghcrawl-156962-autonomous-smoke.md) | [27502019109](https://github.com/openclaw/clownfish/actions/runs/27502019109) |
| [ghcrawl-157005-autonomous-smoke](results/openclaw/ghcrawl-157005-autonomous-smoke.md) | fix blocked | jobs/openclaw/outbox/stuck/ghcrawl-157005-autonomous-smoke.md | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [report](results/openclaw/ghcrawl-157005-autonomous-smoke.md) | [27494816783](https://github.com/openclaw/clownfish/actions/runs/27494816783) |
| [ghcrawl-156836-autonomous-smoke](results/openclaw/ghcrawl-156836-autonomous-smoke.md) | needs human | jobs/openclaw/outbox/stuck/ghcrawl-156836-autonomous-smoke.md | Maintainers need to decide the #44395/#68019 product, API, compatibility, and security-review scope before Clownfish can safely repair or... | [report](results/openclaw/ghcrawl-156836-autonomous-smoke.md) | [27494691474](https://github.com/openclaw/clownfish/actions/runs/27494691474) |
| [ghcrawl-156984-autonomous-smoke](results/openclaw/ghcrawl-156984-autonomous-smoke.md) | needs human | jobs/openclaw/outbox/stuck/ghcrawl-156984-autonomous-smoke.md | #39406 needs a maintainer product/safety decision on the normal-chat tool-warning delivery semantics, such as whether to add all/final/of... | [report](results/openclaw/ghcrawl-156984-autonomous-smoke.md) | [27494574253](https://github.com/openclaw/clownfish/actions/runs/27494574253) |
| [ghcrawl-156686-autonomous-smoke](results/openclaw/ghcrawl-156686-autonomous-smoke.md) | fix failed | jobs/openclaw/outbox/stuck/ghcrawl-156686-autonomous-smoke.md | source PR #63593 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [report](results/openclaw/ghcrawl-156686-autonomous-smoke.md) | [27491294402](https://github.com/openclaw/clownfish/actions/runs/27491294402) |
| [ghcrawl-156633-autonomous-smoke](results/openclaw/ghcrawl-156633-autonomous-smoke.md) | fix failed | jobs/openclaw/outbox/stuck/ghcrawl-156633-autonomous-smoke.md | source PR #68590 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [report](results/openclaw/ghcrawl-156633-autonomous-smoke.md) | [27491295229](https://github.com/openclaw/clownfish/actions/runs/27491295229) |
| [ghcrawl-156895-autonomous-smoke](results/openclaw/ghcrawl-156895-autonomous-smoke.md) | fix failed | jobs/openclaw/outbox/stuck/ghcrawl-156895-autonomous-smoke.md | branch projectclownfish/repair-ghcrawl-156895-autonomous-smoke-59920 could not rebase onto origin/main: Codex could not repair rebase con... | [report](results/openclaw/ghcrawl-156895-autonomous-smoke.md) | [27491293592](https://github.com/openclaw/clownfish/actions/runs/27491293592) |
| [gitcrawl-12687-autonomous-smoke](results/openclaw/gitcrawl-12687-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/gitcrawl-12687-autonomous-smoke.md | git fetch https://github.com/zeng269/openclaw.git pr/claw-parity-fs-hardening:projectclownfish/repair-gitcrawl-12687-autonomous-smoke-673... | [report](results/openclaw/gitcrawl-12687-autonomous-smoke.md) | [27488929287](https://github.com/openclaw/clownfish/actions/runs/27488929287) |
| [gitcrawl-5644-autonomous-smoke](results/openclaw/gitcrawl-5644-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/gitcrawl-5644-autonomous-smoke.md | source PR #59137 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [report](results/openclaw/gitcrawl-5644-autonomous-smoke.md) | [27488930957](https://github.com/openclaw/clownfish/actions/runs/27488930957) |
| [gitcrawl-10447-autonomous-smoke](results/openclaw/gitcrawl-10447-autonomous-smoke.md) | fix failed | jobs/openclaw/inbox/gitcrawl-10447-autonomous-smoke.md | source PR #76134 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [report](results/openclaw/gitcrawl-10447-autonomous-smoke.md) | [27488927901](https://github.com/openclaw/clownfish/actions/runs/27488927901) |
| [gitcrawl-11828-autonomous-smoke](results/openclaw/gitcrawl-11828-autonomous-smoke.md) | apply blocked | jobs/openclaw/inbox/gitcrawl-11828-autonomous-smoke.md | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish | [report](results/openclaw/gitcrawl-11828-autonomous-smoke.md) | [27488928582](https://github.com/openclaw/clownfish/actions/runs/27488928582) |
| [gitcrawl-17425-autonomous-smoke](results/openclaw/gitcrawl-17425-autonomous-smoke.md) | needs human | jobs/openclaw/inbox/gitcrawl-17425-autonomous-smoke.md | Regenerate or repair gitcrawl cluster 17425 before applying cleanup: the job inventory/title describes account-suspension reports, while ... | [report](results/openclaw/gitcrawl-17425-autonomous-smoke.md) | [27488709655](https://github.com/openclaw/clownfish/actions/runs/27488709655) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [ghcrawl-156982-autonomous-smoke](results/openclaw/ghcrawl-156982-autonomous-smoke.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] sr... | [27515659253](https://github.com/openclaw/clownfish/actions/runs/27515659253) |
| [ghcrawl-156848-autonomous-smoke](results/openclaw/ghcrawl-156848-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27506373340](https://github.com/openclaw/clownfish/actions/runs/27506373340) |
| [ghcrawl-156962-autonomous-smoke](results/openclaw/ghcrawl-156962-autonomous-smoke.md) | blocked |  |  | Codex fix worker timed out after 1800000ms | [27502019109](https://github.com/openclaw/clownfish/actions/runs/27502019109) |
| [ghcrawl-157005-autonomous-smoke](results/openclaw/ghcrawl-157005-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27494816783](https://github.com/openclaw/clownfish/actions/runs/27494816783) |
| [ghcrawl-156686-autonomous-smoke](results/openclaw/ghcrawl-156686-autonomous-smoke.md) | failed |  |  | source PR #63593 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27491294402](https://github.com/openclaw/clownfish/actions/runs/27491294402) |
| [ghcrawl-156633-autonomous-smoke](results/openclaw/ghcrawl-156633-autonomous-smoke.md) | failed |  |  | source PR #68590 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27491295229](https://github.com/openclaw/clownfish/actions/runs/27491295229) |
| [ghcrawl-156895-autonomous-smoke](results/openclaw/ghcrawl-156895-autonomous-smoke.md) | failed |  |  | branch projectclownfish/repair-ghcrawl-156895-autonomous-smoke-59920 could not rebase onto origin/main: Codex could not repair rebase con... | [27491293592](https://github.com/openclaw/clownfish/actions/runs/27491293592) |
| [ghcrawl-156895-autonomous-smoke](results/openclaw/ghcrawl-156895-autonomous-smoke.md) | blocked |  |  | branch projectclownfish/repair-ghcrawl-156895-autonomous-smoke-59920 could not rebase onto origin/main: Codex could not repair rebase con... | [27491293592](https://github.com/openclaw/clownfish/actions/runs/27491293592) |
| [gitcrawl-12687-autonomous-smoke](results/openclaw/gitcrawl-12687-autonomous-smoke.md) | failed |  |  | git fetch https://github.com/zeng269/openclaw.git pr/claw-parity-fs-hardening:projectclownfish/repair-gitcrawl-12687-autonomous-smoke-673... | [27488929287](https://github.com/openclaw/clownfish/actions/runs/27488929287) |
| [gitcrawl-12687-autonomous-smoke](results/openclaw/gitcrawl-12687-autonomous-smoke.md) | blocked |  |  | git fetch https://github.com/zeng269/openclaw.git pr/claw-parity-fs-hardening:projectclownfish/repair-gitcrawl-12687-autonomous-smoke-673... | [27488929287](https://github.com/openclaw/clownfish/actions/runs/27488929287) |
| [gitcrawl-5644-autonomous-smoke](results/openclaw/gitcrawl-5644-autonomous-smoke.md) | failed |  |  | source PR #59137 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27488930957](https://github.com/openclaw/clownfish/actions/runs/27488930957) |
| [gitcrawl-10447-autonomous-smoke](results/openclaw/gitcrawl-10447-autonomous-smoke.md) | failed |  |  | source PR #76134 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27488927901](https://github.com/openclaw/clownfish/actions/runs/27488927901) |
| [ghcrawl-156928-autonomous-smoke](results/openclaw/ghcrawl-156928-autonomous-smoke.md) | failed |  |  | source PR #68106 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27487490239](https://github.com/openclaw/clownfish/actions/runs/27487490239) |
| [ghcrawl-157004-autonomous-smoke](results/openclaw/ghcrawl-157004-autonomous-smoke.md) | failed |  |  | source PR #67783 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27487023623](https://github.com/openclaw/clownfish/actions/runs/27487023623) |
| [ghcrawl-156909-autonomous-smoke](results/openclaw/ghcrawl-156909-autonomous-smoke.md) | failed |  |  | source PR #63644 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27486519036](https://github.com/openclaw/clownfish/actions/runs/27486519036) |
| [ghcrawl-157062-autonomous-smoke](results/openclaw/ghcrawl-157062-autonomous-smoke.md) | failed |  |  | source PR #64181 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27486517646](https://github.com/openclaw/clownfish/actions/runs/27486517646) |
| [ghcrawl-156837-autonomous-smoke](results/openclaw/ghcrawl-156837-autonomous-smoke.md) | failed |  |  | source PR #56176 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27486518620](https://github.com/openclaw/clownfish/actions/runs/27486518620) |
| [ghcrawl-156822-autonomous-smoke](results/openclaw/ghcrawl-156822-autonomous-smoke.md) | failed |  |  | source PR #63321 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27486525526](https://github.com/openclaw/clownfish/actions/runs/27486525526) |
| [ghcrawl-156788-autonomous-smoke](results/openclaw/ghcrawl-156788-autonomous-smoke.md) | failed |  |  | source PR #48588 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27485433477](https://github.com/openclaw/clownfish/actions/runs/27485433477) |
| [ghcrawl-156886-autonomous-smoke](results/openclaw/ghcrawl-156886-autonomous-smoke.md) | failed |  |  | source PR #64734 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27485435509](https://github.com/openclaw/clownfish/actions/runs/27485435509) |
| [ghcrawl-156727-autonomous-smoke](results/openclaw/ghcrawl-156727-autonomous-smoke.md) | failed |  |  | source PR #54962 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27484664789](https://github.com/openclaw/clownfish/actions/runs/27484664789) |
| [ghcrawl-156753-autonomous-smoke](results/openclaw/ghcrawl-156753-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27484665882](https://github.com/openclaw/clownfish/actions/runs/27484665882) |
| [ghcrawl-156760-autonomous-smoke](results/openclaw/ghcrawl-156760-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27484665398](https://github.com/openclaw/clownfish/actions/runs/27484665398) |
| [ghcrawl-156615-autonomous-smoke](results/openclaw/ghcrawl-156615-autonomous-smoke.md) | failed |  |  | source PR #61080 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27483675863](https://github.com/openclaw/clownfish/actions/runs/27483675863) |
| [ghcrawl-156779-autonomous-smoke](results/openclaw/ghcrawl-156779-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27483675257](https://github.com/openclaw/clownfish/actions/runs/27483675257) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish | 20 | [ghcrawl-156686-autonomous-smoke](results/openclaw/ghcrawl-156686-autonomous-smoke.md) |
| target changed since worker review | 17 | [ghcrawl-199237-agentic-merge](results/openclaw/ghcrawl-199237-agentic-merge.md) |
| job does not allow merge | 12 | [clawsweeper-commit-openclaw-openclaw-806a0119f3cd](results/openclaw/clawsweeper-commit-openclaw-openclaw-806a0119f3cd.md) |
| blocked: Close is blocked on the canonical fix path or fix PR. | 11 | [ghcrawl-191463-agentic-merge](results/openclaw/ghcrawl-191463-agentic-merge.md) |
| close requires ProjectClownfish fix PR opened/pushed or merge executed first | 11 | [ghcrawl-156593-autonomous-smoke](results/openclaw/ghcrawl-156593-autonomous-smoke.md) |
| merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review | 9 | [ghcrawl-156679-autonomous-smoke](results/openclaw/ghcrawl-156679-autonomous-smoke.md) |
| merge state status is UNSTABLE | 9 | [ghcrawl-156647-autonomous-smoke](results/openclaw/ghcrawl-156647-autonomous-smoke.md) |
| mergeable state is CONFLICTING | 5 | [ghcrawl-156651-autonomous-smoke](results/openclaw/ghcrawl-156651-autonomous-smoke.md) |
| target is not listed in job candidates | 5 | [gitcrawl-238838-dedupe-only-20260429c](results/openclaw/gitcrawl-238838-dedupe-only-20260429c.md) |
| blocked: Duplicate close is blocked on the replacement fix path. | 4 | [ghcrawl-165995-agentic-merge](results/openclaw/ghcrawl-165995-agentic-merge.md) |
| blocked: Blocked by require_fix_before_close until the credited replacement fix PR for #34574 is opened. | 3 | [ghcrawl-199253-agentic-merge](results/openclaw/ghcrawl-199253-agentic-merge.md) |
| blocked: Clear duplicate, but closeout is blocked on the canonical fix path. | 3 | [ghcrawl-156584-autonomous-smoke](results/openclaw/ghcrawl-156584-autonomous-smoke.md) |
| blocked: Closeout is blocked on the canonical fix path #72614 landing. | 3 | [ghcrawl-156598-autonomous-smoke](results/openclaw/ghcrawl-156598-autonomous-smoke.md) |
| blocked: True duplicate/subreport of #54155, but close is blocked on the canonical fix path or fix PR. | 3 | [ghcrawl-166014-agentic-merge](results/openclaw/ghcrawl-166014-agentic-merge.md) |
| fixed_by_candidate close requires a merged fix PR unless allow_unmerged_fix_close: true | 3 | [ghcrawl-156880-autonomous-smoke](results/openclaw/ghcrawl-156880-autonomous-smoke.md) |

### Open PR Finalizer Queue

| PR | Title | Cluster | Branch | Blockers | Next action |
| --- | --- | --- | --- | --- | --- |
| [#92910](https://github.com/openclaw/openclaw/pull/92910) | fix(memory-core): safely refresh qmd index during collection repair | ghcrawl-156633-autonomous-smoke | clownfish/ghcrawl-156633-autonomous-smoke | needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |

### Latest ProjectClownfish Closures

| Target | Type | Title | Closed | Action | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [#70205](https://github.com/openclaw/openclaw/pull/70205) | pull_request | fix(gateway): aggregate usage cost across agents | Jun 14, 2026, 17:09 UTC | close_superseded | [ghcrawl-157040-autonomous-smoke](results/openclaw/ghcrawl-157040-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-157040-autonomous-smoke.md) | [27504160898](https://github.com/openclaw/clownfish/actions/runs/27504160898) |
| [#55886](https://github.com/openclaw/openclaw/pull/55886) | pull_request | fix(telegram): cool down transient sendChatAction failures | Jun 14, 2026, 17:08 UTC | close_superseded | [ghcrawl-156876-autonomous-smoke](results/openclaw/ghcrawl-156876-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-156876-autonomous-smoke.md) | [27504161669](https://github.com/openclaw/clownfish/actions/runs/27504161669) |
| [#59439](https://github.com/openclaw/openclaw/pull/59439) | pull_request | Use daemon auth for unmanaged restart probes | Apr 28, 2026, 05:25 UTC | close_superseded | [ghcrawl-207050-agentic-merge](results/openclaw/ghcrawl-207050-agentic-merge.md) | [report](results/openclaw/ghcrawl-207050-agentic-merge.md) | [25035228706](https://github.com/openclaw/clownfish/actions/runs/25035228706) |
| [#59431](https://github.com/openclaw/openclaw/pull/59431) | pull_request | fix(feishu): correct Chinese filename encoding in attachments | Apr 28, 2026, 05:23 UTC | close_superseded | [ghcrawl-199239-agentic-merge](results/openclaw/ghcrawl-199239-agentic-merge.md) | [report](results/openclaw/ghcrawl-199239-agentic-merge.md) | [25035231796](https://github.com/openclaw/clownfish/actions/runs/25035231796) |
| [#59409](https://github.com/openclaw/openclaw/issues/59409) | issue | [Bug]: Feishu plugin: Chinese filenames in attachments display as garbled (Latin-1 encoding issue) | Apr 28, 2026, 05:23 UTC | close_fixed_by_candidate | [ghcrawl-199239-agentic-merge](results/openclaw/ghcrawl-199239-agentic-merge.md) | [report](results/openclaw/ghcrawl-199239-agentic-merge.md) | [25035231796](https://github.com/openclaw/clownfish/actions/runs/25035231796) |
| [#50435](https://github.com/openclaw/openclaw/pull/50435) | pull_request | fix(feishu): recover Chinese filenames from Latin-1 mojibake in Content-Disposition | Apr 28, 2026, 05:23 UTC | close_superseded | [ghcrawl-199239-agentic-merge](results/openclaw/ghcrawl-199239-agentic-merge.md) | [report](results/openclaw/ghcrawl-199239-agentic-merge.md) | [25035231796](https://github.com/openclaw/clownfish/actions/runs/25035231796) |
| [#48388](https://github.com/openclaw/openclaw/issues/48388) | issue | [Bug]: Feishu file names with Chinese characters are garbled (UTF-8 encoding issue) | Apr 28, 2026, 05:23 UTC | close_fixed_by_candidate | [ghcrawl-199239-agentic-merge](results/openclaw/ghcrawl-199239-agentic-merge.md) | [report](results/openclaw/ghcrawl-199239-agentic-merge.md) | [25035231796](https://github.com/openclaw/clownfish/actions/runs/25035231796) |
| [#61016](https://github.com/openclaw/openclaw/pull/61016) | pull_request | fix(media): anchor sanitizeMimeType regex and make case-insensitive per RFC 2045 | Apr 28, 2026, 04:48 UTC | close_superseded | [ghcrawl-156640-autonomous-smoke](results/openclaw/ghcrawl-156640-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-156640-autonomous-smoke.md) | [25034019917](https://github.com/openclaw/clownfish/actions/runs/25034019917) |
| [#49961](https://github.com/openclaw/openclaw/pull/49961) | pull_request | fix: restore compact JS placeholders in session export template | Apr 28, 2026, 04:36 UTC | close_superseded | [ghcrawl-156664-autonomous-smoke](results/openclaw/ghcrawl-156664-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-156664-autonomous-smoke.md) | [25033552424](https://github.com/openclaw/clownfish/actions/runs/25033552424) |
| [#49957](https://github.com/openclaw/openclaw/issues/49957) | issue | Bug: Session export HTML is empty due to reformatted JS placeholders in template | Apr 28, 2026, 04:36 UTC | close_duplicate | [ghcrawl-156664-autonomous-smoke](results/openclaw/ghcrawl-156664-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-156664-autonomous-smoke.md) | [25033552424](https://github.com/openclaw/clownfish/actions/runs/25033552424) |
| [#54429](https://github.com/openclaw/openclaw/issues/54429) | issue | Gateway Service Installation Failure: Missing systemd Service File | Apr 26, 2026, 03:04 UTC | close_duplicate | [ghcrawl-166002-agentic-merge](results/openclaw/ghcrawl-166002-agentic-merge.md) | [report](results/openclaw/ghcrawl-166002-agentic-merge.md) | [24946559138](https://github.com/openclaw/projectclownfish/actions/runs/24946559138) |
| [#67622](https://github.com/openclaw/openclaw/issues/67622) | issue | [Feature Request] Support file/image upload in browser Control UI (webchat) | Apr 26, 2026, 03:03 UTC | close_duplicate | [ghcrawl-165992-agentic-merge](results/openclaw/ghcrawl-165992-agentic-merge.md) | [report](results/openclaw/ghcrawl-165992-agentic-merge.md) | [24946558493](https://github.com/openclaw/projectclownfish/actions/runs/24946558493) |
| [#63094](https://github.com/openclaw/openclaw/issues/63094) | issue | [Feature Request] WebChat/Control UI support file upload | Apr 26, 2026, 03:03 UTC | close_duplicate | [ghcrawl-165992-agentic-merge](results/openclaw/ghcrawl-165992-agentic-merge.md) | [report](results/openclaw/ghcrawl-165992-agentic-merge.md) | [24946558493](https://github.com/openclaw/projectclownfish/actions/runs/24946558493) |
| [#56298](https://github.com/openclaw/openclaw/issues/56298) | issue | [Feature Request] Webchat supports image/attachment upload in UI | Apr 26, 2026, 03:03 UTC | close_duplicate | [ghcrawl-165992-agentic-merge](results/openclaw/ghcrawl-165992-agentic-merge.md) | [report](results/openclaw/ghcrawl-165992-agentic-merge.md) | [24946558493](https://github.com/openclaw/projectclownfish/actions/runs/24946558493) |
| [#43242](https://github.com/openclaw/openclaw/issues/43242) | issue | [Feature Request] Add file upload support to Control UI (Web) | Apr 26, 2026, 03:03 UTC | close_duplicate | [ghcrawl-165992-agentic-merge](results/openclaw/ghcrawl-165992-agentic-merge.md) | [report](results/openclaw/ghcrawl-165992-agentic-merge.md) | [24946558493](https://github.com/openclaw/projectclownfish/actions/runs/24946558493) |
| [#41992](https://github.com/openclaw/openclaw/issues/41992) | issue | [Feature Request] WebChat file upload support | Apr 26, 2026, 03:03 UTC | close_duplicate | [ghcrawl-165992-agentic-merge](results/openclaw/ghcrawl-165992-agentic-merge.md) | [report](results/openclaw/ghcrawl-165992-agentic-merge.md) | [24946558493](https://github.com/openclaw/projectclownfish/actions/runs/24946558493) |
| [#67406](https://github.com/openclaw/openclaw/issues/67406) | issue | image tool doesn't recognise Ollama cloud vision models | Apr 25, 2026, 19:58 UTC | close_duplicate | [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [#66758](https://github.com/openclaw/openclaw/issues/66758) | issue | Image tool fails with 'Unknown model' for all ollama/ provider models despite #59943 fix | Apr 25, 2026, 19:57 UTC | close_duplicate | [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [#65832](https://github.com/openclaw/openclaw/issues/65832) | issue | [Bug]: image tool fails with custom provider — ModelRegistry doesn't recognize custom providers from models.json | Apr 25, 2026, 19:57 UTC | close_duplicate | [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [#70180](https://github.com/openclaw/openclaw/issues/70180) | issue | Bug: Image tool reports 'Unknown model' for all custom providers | Apr 25, 2026, 19:57 UTC | close_duplicate | [ghcrawl-143816-autonomous-smoke](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143816-autonomous-smoke.md) | [24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401) |
| [#71133](https://github.com/openclaw/openclaw/issues/71133) | issue | memory-core: narrative session cleanup fails with missing scope: operator.admin | Apr 25, 2026, 19:53 UTC | close_duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#70395](https://github.com/openclaw/openclaw/issues/70395) | issue | memory-core dreaming cleanup requires operator.admin and logs failure despite successful promotion | Apr 25, 2026, 19:53 UTC | close_duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#70353](https://github.com/openclaw/openclaw/issues/70353) | issue | memory-core: dreaming subagent lacks operator.admin to delete its own session | Apr 25, 2026, 19:53 UTC | close_duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#69886](https://github.com/openclaw/openclaw/issues/69886) | issue | memory-core narrative session cleanup fails with missing scope: operator.admin | Apr 25, 2026, 19:53 UTC | close_duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
| [#67029](https://github.com/openclaw/openclaw/issues/67029) | issue | [Bug]: memory-core dreaming: narrative session cleanup fails with missing scope operator.admin | Apr 25, 2026, 19:53 UTC | close_duplicate | [ghcrawl-143819-autonomous-smoke](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [report](results/openclaw/ghcrawl-143819-autonomous-smoke.md) | [24939011554](https://github.com/openclaw/projectclownfish/actions/runs/24939011554) |
<!-- projectclownfish-dashboard:end -->

## How It Works

For a maintainer-facing architecture map of the automation lanes, see
[`docs/INTERNAL_FEATURES.md`](docs/INTERNAL_FEATURES.md).

For the ClawSweeper feedback loop that updates existing generated PRs, see
[`docs/auto-update-prs.md`](docs/auto-update-prs.md).

That loop is marker-driven. ClawSweeper comments use hidden
`clawsweeper-verdict:*` markers, and only actionable PR feedback includes
`clawsweeper-action:fix-required`. Clownfish skips stale head SHAs and caps
automatic repairs at five per PR and one per PR head SHA.

Maintainers can opt an existing Clownfish PR into the bounded merge loop with
`/clownfish automerge`. That adds `clownfish:automerge`, dispatches
ClawSweeper for the current head, lets Clownfish repair trusted
`needs-changes` findings for up to five rounds, and merges only after a trusted
pass verdict for the exact current head plus green checks, clean mergeability,
and explicit `CLOWNFISH_ALLOW_MERGE=1` and `CLOWNFISH_ALLOW_AUTOMERGE=1`
gates.

ClawSweeper commit findings have a separate intake lane. A
`clawsweeper_commit_finding` dispatch fetches the latest markdown commit report,
writes an audit record under `results/commit-findings/`, and only sends the
finding into the PR executor when the issue is narrow, non-security, and still
worth repairing on latest `main`.

Each cluster job:

1. Starts from one markdown job file under `jobs/`.
2. Hydrates the listed issue/PR refs and first-hop linked refs.
3. Builds a cluster plan and fix artifact for autonomous jobs.
4. Runs Codex with repo-local policy prompts and JSON output schema in a read-only sandbox.
5. Writes structured run artifacts under `.projectclownfish/runs/`.
6. Reviews the worker artifact with deterministic safety checks.
7. Executes credited fix artifacts through `scripts/execute-fix-artifact.mjs` when the fix gate is open: repair a maintainer-editable contributor branch first, otherwise raise a narrow replacement PR, add non-bot source PR authors as replacement co-authors, and close the uneditable source PR after the replacement push succeeds.
8. Applies guarded close/comment and explicit merge actions through `scripts/apply-result.mjs`.
9. Publishes a sanitized result ledger back to this repo under `results/`, `jobs/openclaw/closed/`, `apply-report.json`, and this README dashboard.

Codex does not receive a GitHub token during classification. The runner preflights GitHub state before model execution, then Codex receives those artifacts and returns JSON only. When a reviewed fix artifact is executed, Codex gets a temporary target checkout without GitHub credentials; the deterministic executor owns commit, push, PR creation, and source-PR closeout using `CLOWNFISH_GH_TOKEN`. Commit author metadata defaults to `projectclownfish` and can be overridden with `CLOWNFISH_GIT_USER_NAME` and `CLOWNFISH_GIT_USER_EMAIL`; this is separate from the GitHub token used to push. The applicator re-fetches the target item, checks `updated_at`, blocks unsafe closeouts, writes idempotent close comments, closes supported duplicate/superseded/fixed-by-candidate actions, and can squash-merge explicitly allowed clean PR actions.

Merge is deliberately harder than closeout. A merge action must include `merge_preflight` proving security clearance, resolved human comments, resolved review-bot findings, a passed Codex `/review`, addressed review findings, and clean validation commands. The fix executor runs an agentic edit/review loop before it writes a fix PR: edit, validate, Codex `/review`, address findings, revalidate, and resolve PR review threads when permitted. The applicator also checks live unresolved GitHub review threads immediately before merge.

Replacement fix work uses a recoverable target branch named `clownfish/<cluster-id>`. The executor resumes that branch if it already exists and pushes checkpoint commits after agent edits and review-fix edits, adding `Co-authored-by` trailers for non-bot source PR authors when a contributor PR is replaced. It then opens or updates the PR only after validation and Codex `/review` pass. If `/review` still blocks the merge after retries, the run writes a blocked fix report and leaves the checkpoint branch recoverable instead of losing the patch.

Runs for the same job path and mode are queued instead of running concurrently. The workflow uses Node 24, `blacksmith-4vcpu-ubuntu-2404` for cluster planning/review, and `blacksmith-16vcpu-ubuntu-2404` for fix/apply execution. Fix execution prepares the target checkout with Corepack and the target `pnpm` package manager before validation; the execution job caches Codex, npm, Corepack, and the target pnpm store. Fix validation is pinned to OpenClaw's fast changed-lane posture by default: `pnpm check:changed` plus diff checks are the hard local gate, and target validation commands normalize to `pnpm check:changed` unless `CLOWNFISH_TARGET_VALIDATION_MODE=strict` or `CLOWNFISH_STRICT_TARGET_VALIDATION=1` is explicitly set. Unrelated flaky main CI, broad `pnpm check`, full tests, live, docker, and e2e lanes do not block narrow ProjectClownfish fixes by default.

Full worker prompts, Codex transcripts, and raw artifacts stay in GitHub Actions. The committed ledger keeps only the cluster summary, run URL, action counts, apply outcomes, closed targets, and needs-human entries.

## Modes

- `plan`: produces recommendations only.
- `execute`: can apply reviewed safe close and explicit clean merge actions from structured JSON.
- `autonomous`: adds live cluster preflight and fix-artifact generation. It may recommend and drive a canonical fix path; direct mutation still goes through the fix executor and applicator gates.
- `route_security`: quarantines true security-sensitive refs without poisoning unrelated cluster work.
- `needs_human`: only product-direction, trust-boundary, canonical-choice, merge-path, or contributor-credit decisions that remain unclear after the hydrated artifact and single-item review/check/decide pass.
- Automated reviewer feedback must be cleared during autonomous PR work. Greptile, Codex, Asile, CodeRabbit, Copilot, and similar bot comments must be addressed, proven non-actionable, or escalated before any merge or post-merge closeout recommendation.
- Merge preflight: no PR can merge until `CLOWNFISH_ALLOW_MERGE=1`, security issues are cleared, comments are resolved, Codex `/review` has passed, findings are addressed, and changed-surface validation is clean. With the merge gate closed, ProjectClownfish labels merge-ready targets for human review instead of merging.
- Repair ladder: make the useful contributor PR mergeable when its branch is maintainer-editable; otherwise replace draft, stale, unmergeable, uneditable, or unsafe branches with a narrow credited fix PR. When fix PR mode is enabled, "wait or replace" is already answered: replace, preserve credit, then supersede only the source PR that could not be safely updated.

## Maintainer Comment Commands

Clownfish can route maintainer comments from target repositories back into the
cloud repair workflow. It recognizes both command styles:

```text
/clownfish status
@openclaw-clownfish status
```

Do not use `@clownfish`; that is a separate GitHub user. The accepted mention is
`@openclaw-clownfish` or `@openclaw-clownfish[bot]`.

Only maintainers can trigger it. The router checks GitHub `author_association`
and accepts `OWNER`, `MEMBER`, and `COLLABORATOR` by default. Contributor and
unknown comments are ignored without a reply.

Supported commands:

```text
/clownfish status
/clownfish fix ci
/clownfish address review
/clownfish rebase
/clownfish explain
/clownfish stop
@openclaw-clownfish fix ci
```

`status` and `explain` post a short status reply. `fix ci`, `address review`,
and `rebase` dispatch the normal `cluster-worker.yml` repair path, but only for
existing Clownfish PRs identified by the `clownfish` label or `clownfish/*`
branch. `stop` labels the item for human review.

The router writes an idempotency marker into each reply and records processed
comments in `results/comment-router.json`. The scheduled workflow is dry by
default; set `CLOWNFISH_COMMENT_ROUTER_EXECUTE=1` to let scheduled runs post
replies and dispatch workers.

## Local Run

Requires Node 24.

```bash
# Validate all job files.
npm run validate

# Render a plan-mode prompt without running Codex.
npm run render -- jobs/openclaw/inbox/cluster-example.md --mode plan

# Dry-run a worker without calling Codex.
npm run worker -- jobs/openclaw/inbox/cluster-example.md --mode plan --dry-run

# Build an offline autonomous cluster/fix artifact.
npm run build-fix-artifact -- jobs/openclaw/inbox/autonomous-example.md --offline

# Stage low-signal PR sweep jobs from local gitcrawl data.
npm run import-gitcrawl-low-signal -- --limit 20 --batch-size 5 --mode autonomous --sort stale

# Stage the next largest active gitcrawl clusters, skipping already-imported and
# fully security-sensitive clusters by default. Mixed clusters can route security
# refs while continuing ordinary bug/dedupe work.
npm run import-gitcrawl -- --from-gitcrawl --limit 40 --mode autonomous --suffix autonomous-smoke --allow-instant-close --allow-merge --allow-fix-pr --allow-post-merge-close

# Dispatch reviewed jobs. Dispatch, requeue, and self-heal refuse to exceed
# 50 live cluster-worker runs by default; tune with CLOWNFISH_MAX_LIVE_WORKERS
# or --max-live-workers. With --wait-for-capacity, dispatch can drain a larger
# file list in capacity-sized waves instead of refusing the whole batch.
CLOWNFISH_MAX_LIVE_WORKERS=50 npm run dispatch -- jobs/openclaw/inbox/cluster-example.md \
  --mode autonomous \
  --runner blacksmith-4vcpu-ubuntu-2404 \
  --execution-runner blacksmith-16vcpu-ubuntu-2404

# Find failed cluster jobs that have not been superseded by a later success.
npm run self-heal

# Resolve a job from a run id or job path and show the requeue plan.
npm run requeue -- 24947178021

# Requeue one reviewed job/run into the live queue. This briefly opens both
# write gates when the job is execute/autonomous, waits for the run to start,
# then closes the gates.
npm run requeue -- 24947178021 --execute --open-execute-window \
  --runner blacksmith-4vcpu-ubuntu-2404 \
  --execution-runner blacksmith-16vcpu-ubuntu-2404

# Execute a reviewed fix artifact locally. Requires both execution gates and a write token.
CLOWNFISH_ALLOW_EXECUTE=1 CLOWNFISH_ALLOW_FIX_PR=1 npm run execute-fix -- jobs/openclaw/inbox/cluster-example.md --latest --dry-run

# Rebuild the open Clownfish PR finalization report without mutating GitHub.
npm run finalize-open-prs -- --write-report

# Dry-run maintainer comment routing. Recognizes `/clownfish ...` and
# `@openclaw-clownfish ...` in recent issue/PR comments.
npm run comment-router -- --repo openclaw/openclaw --lookback-minutes 180

# Execute maintainer comment routing: post replies and dispatch repair workers
# for existing Clownfish PRs when maintainers ask for `fix ci`,
# `address review`, or `rebase`.
npm run comment-router -- --repo openclaw/openclaw --execute --wait-for-capacity

# Dry-run job hygiene: classify old smoke jobs, outbox-ready jobs, unprocessed
# jobs, and requeue candidates without deleting, moving, or dispatching.
npm run sweep-openclaw-jobs -- --live

# Apply reviewed job hygiene. This deletes old smoke jobs, moves finalized jobs
# to jobs/openclaw/outbox/finalized, and parks never-run backlog in
# jobs/openclaw/outbox/stuck; it never dispatches workers.
npm run sweep-openclaw-jobs -- --live --apply-delete-tests --apply-outbox --apply-stuck

# Dry-run a parked-backlog promotion from outbox/stuck back into inbox.
npm run promote-stuck-jobs -- --limit 20

# Promote the largest parked-backlog jobs into the active queue.
npm run promote-stuck-jobs -- --sort size --limit 20 --apply

# Promote every parked-backlog job, largest clusters first.
npm run promote-stuck-jobs -- --sort size --limit all --apply

# Dry-run the Clownfish label backfill. This verifies live GitHub state and
# reports the exact PRs/issues that would receive the "clownfish" label.
npm run tag-clownfish -- --live

# Apply the label backfill after reviewing the dry-run report.
CLOWNFISH_ALLOW_EXECUTE=1 npm run tag-clownfish -- --live --apply

# Retry failed jobs once. This briefly opens the execution gate, waits for the
# dispatched workers to start, records the self-heal ledger, and closes the gate.
npm run self-heal -- --execute --open-execute-window --max-jobs 5 \
  --max-live-workers 50 \
  --runner blacksmith-4vcpu-ubuntu-2404 \
  --execution-runner blacksmith-16vcpu-ubuntu-2404
```

## Checks

```bash
npm run validate
for f in scripts/*.mjs; do node --check "$f" || exit 1; done
npm run review-results -- .projectclownfish/runs
npm run publish-result -- .projectclownfish/runs
git diff --check
```

## GitHub Actions Setup

The workflow needs:

- Codex/OpenAI authentication for model execution
- a read-only GitHub token for worker inspection
- a separate write-scoped GitHub token for the deterministic applicator
- execution gates that default closed: set `CLOWNFISH_ALLOW_EXECUTE=1` and `CLOWNFISH_ALLOW_FIX_PR=1` only for an intentional execution window; otherwise execute/autonomous dispatches render plan-only output and skip mutation steps
- merge is separately gated by `CLOWNFISH_ALLOW_MERGE`; automerge additionally requires `CLOWNFISH_ALLOW_AUTOMERGE`; both default to `0`, and merge-ready PRs are labeled `clownfish:human-review` and `clownfish:merge-ready` for a maintainer to merge manually
- optional `CLOWNFISH_CODEX_CLI_VERSION` variable to pin and refresh the cached Codex CLI
- optional `CLOWNFISH_MODEL` override for dispatch scripts; default Codex model is `gpt-5.5`
- optional `CLOWNFISH_MAX_LIVE_WORKERS` variable for dispatch/requeue/self-heal worker fan-out; default is `50`
- optional `CLOWNFISH_MAX_ACTIVE_PRS_PER_AREA` variable for replacement PR backpressure; default is `50` open Clownfish PRs per touched area, `0` disables the area cap, and common changelog/release-note files are ignored for this check
- ClawSweeper commit-finding repair PRs are labeled `clownfish:commit-finding`
- optional `CLOWNFISH_CODEX_TIMEOUT_MS` and `CLOWNFISH_FIX_CODEX_TIMEOUT_MS` variables; worker planning defaults to 30 minutes, while fix execution defaults to a 20 minute Codex budget inside the 30 minute build-PR step so timeout artifacts can be written
- optional `CLOWNFISH_CODEX_REVIEW_ATTEMPTS` and `CLOWNFISH_RESOLVE_REVIEW_THREADS` variables for agentic merge-prep review loops
- optional `CLOWNFISH_CLAWSWEEPER_MAX_REPAIRS_PER_PR` and
  `CLOWNFISH_CLAWSWEEPER_MAX_REPAIRS_PER_HEAD` variables for trusted
  ClawSweeper review feedback; defaults are `5` automatic repair iterations per
  PR and `1` repair per PR head SHA. The per-PR cap is total across changing
  head SHAs and stops the automatic review/repair loop.
- optional `CLOWNFISH_COMMENT_ROUTER_EXECUTE=1` to let the scheduled comment
  router respond to maintainer-only `/clownfish ...` and
  `@openclaw-clownfish ...` commands. Without it, scheduled runs only write a
  dry report.

Keep exact secret names, token scopes, and execution-window procedures in private operations docs or repository settings notes. Do not put token values or live operational credentials in job files.
