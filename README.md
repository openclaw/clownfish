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

Last dashboard update: Jun 16, 2026, 09:45 UTC

<!-- projectclownfish-dashboard:start -->
State: Failed clusters need inspection

Scope: 4178 active latest cluster reports. 4 policy-archived cluster(s) are excluded from health stats; run attempts are tracked as audit history only.

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 4178 | 100% |
| Policy-archived clusters | 4 | audit |
| Clean completed clusters | 2722 | 65.2% |
| Needs-human clusters | 1188 | 28.4% |
| Latest successful clusters | 4022 | 96.3% |
| Latest failed clusters | 99 | 2.4% |
| Latest cancelled clusters | 3 | 0.1% |
| Run attempts archived | 5340 | audit |
| Fix action attempts | 316 | audit |
| Fix actions executed | 2 | 0.6% |
| Fix actions failed | 68 | 21.5% |
| Fix actions blocked | 115 | 36.4% |
| Latest clusters with fix failures | 94 | 2.2% |
| Distinct PRs touched | 7184 | 100% |
| Open PRs tracked | 2929 | 40.8% |
| Closed unmerged PRs tracked | 3322 | 46.2% |
| Completed close actions | 72 | 15.5% |
| Completed merge actions | 40 | 8.6% |
| Duplicate closes | 25 | 34.7% |
| Superseded closes | 22 | 30.6% |
| Fixed-by-candidate closes | 15 | 20.8% |
| Low-signal PR closes | 0 | 0.0% |
| Blocked mutation attempts | 198 | 42.5% |
| Skipped mutation attempts | 156 | 33.5% |

### Clusters Needing Inspection

| Cluster | State | Source job | Reason | Report | Run |
| --- | --- | --- | --- | --- | --- |
| [gitcrawl-102-dedupe-cleanup-wave](results/openclaw/gitcrawl-102-dedupe-cleanup-wave.md) | needs human | jobs/openclaw/inbox/gitcrawl-102-dedupe-cleanup-wave.md | #87925 needs maintainer product direction: should model switches permanently rewrite stored thinkingLevel preferences, or should unsuppor... | [report](results/openclaw/gitcrawl-102-dedupe-cleanup-wave.md) | [27608149933](https://github.com/openclaw/clownfish/actions/runs/27608149933) |
| [gitcrawl-73-dedupe-cleanup-wave](results/openclaw/gitcrawl-73-dedupe-cleanup-wave.md) | apply blocked | jobs/openclaw/inbox/gitcrawl-73-dedupe-cleanup-wave.md | candidate fix is not listed in job refs | [report](results/openclaw/gitcrawl-73-dedupe-cleanup-wave.md) | [27608149163](https://github.com/openclaw/clownfish/actions/runs/27608149163) |
| [gitcrawl-100-dedupe-cleanup-wave](results/openclaw/gitcrawl-100-dedupe-cleanup-wave.md) | needs human | jobs/openclaw/inbox/gitcrawl-100-dedupe-cleanup-wave.md | #30452 needs maintainer/product decision on whether the remaining flush-then-reset behavior should stay open, be split, or be declined; t... | [report](results/openclaw/gitcrawl-100-dedupe-cleanup-wave.md) | [27608148111](https://github.com/openclaw/clownfish/actions/runs/27608148111) |
| [gitcrawl-103-dedupe-cleanup-wave](results/openclaw/gitcrawl-103-dedupe-cleanup-wave.md) | needs human | jobs/openclaw/inbox/gitcrawl-103-dedupe-cleanup-wave.md | #86174: maintainer needs to choose the permanent WebChat child-session model contract before implementation: explicit default/no-inherit ... | [report](results/openclaw/gitcrawl-103-dedupe-cleanup-wave.md) | [27608148058](https://github.com/openclaw/clownfish/actions/runs/27608148058) |
| [gitcrawl-117-dedupe-cleanup-wave](results/openclaw/gitcrawl-117-dedupe-cleanup-wave.md) | needs human | jobs/openclaw/inbox/gitcrawl-117-dedupe-cleanup-wave.md | #89245 was required by deterministic validation to route_security, so the previously selected open canonical path is quarantined and cann... | [report](results/openclaw/gitcrawl-117-dedupe-cleanup-wave.md) | [27608147908](https://github.com/openclaw/clownfish/actions/runs/27608147908) |
| [live-pr-inventory-20260616T090421-052](results/openclaw/live-pr-inventory-20260616t090421-052.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-052.md | #70046 needs maintainer technical review and branch-update/rebase handling before any merge path; this autonomous inventory job cannot me... | [report](results/openclaw/live-pr-inventory-20260616t090421-052.md) | [27607592110](https://github.com/openclaw/clownfish/actions/runs/27607592110) |
| [live-pr-inventory-20260616T090421-015](results/openclaw/live-pr-inventory-20260616t090421-015.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-015.md | Refresh live hydration for #83274; this run has no hydrated PR body, comments, review comments, files, checks, merge state, or updated_at... | [report](results/openclaw/live-pr-inventory-20260616t090421-015.md) | [27606776970](https://github.com/openclaw/clownfish/actions/runs/27606776970) |
| [live-pr-inventory-20260616T090421-012](results/openclaw/live-pr-inventory-20260616t090421-012.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-012.md | Re-run hydration for #81298 after the GitHub installation API rate limit clears; current artifact lacks live state required for classific... | [report](results/openclaw/live-pr-inventory-20260616t090421-012.md) | [27606776688](https://github.com/openclaw/clownfish/actions/runs/27606776688) |
| [live-pr-inventory-20260616T090421-055](results/openclaw/live-pr-inventory-20260616t090421-055.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-055.md | #91132 requires maintainer/product and technical-correctness judgment for a green gateway message-delivery feature PR. | [report](results/openclaw/live-pr-inventory-20260616t090421-055.md) | [27606834278](https://github.com/openclaw/clownfish/actions/runs/27606834278) |
| [live-pr-inventory-20260616T090421-056](results/openclaw/live-pr-inventory-20260616t090421-056.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-056.md | #91477 depends on unresolved product direction in #91282, which was unavailable in hydration due GitHub API rate limit; draft status shou... | [report](results/openclaw/live-pr-inventory-20260616t090421-056.md) | [27606834221](https://github.com/openclaw/clownfish/actions/runs/27606834221) |
| [live-pr-inventory-20260616T090421-049](results/openclaw/live-pr-inventory-20260616t090421-049.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-049.md | #90648: maintainer technical correctness review for the ready Discord mention scanner PR; no merge is permitted by this job. | [report](results/openclaw/live-pr-inventory-20260616t090421-049.md) | [27606834092](https://github.com/openclaw/clownfish/actions/runs/27606834092) |
| [live-pr-inventory-20260616T090421-059](results/openclaw/live-pr-inventory-20260616t090421-059.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-059.md | #69822: proof-sufficient socket.drain PR needs maintainer decision because a GitHub Advanced Security CodeQL review comment remains and t... | [report](results/openclaw/live-pr-inventory-20260616t090421-059.md) | [27606833942](https://github.com/openclaw/clownfish/actions/runs/27606833942) |
| [live-pr-inventory-20260616T090421-041](results/openclaw/live-pr-inventory-20260616t090421-041.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-041.md | #89017: maintainer review/merge decision for a green P1 session-resume PR with public protocol surface; merge is blocked by job policy. | [report](results/openclaw/live-pr-inventory-20260616t090421-041.md) | [27606833708](https://github.com/openclaw/clownfish/actions/runs/27606833708) |
| [live-pr-inventory-20260616T090421-040](results/openclaw/live-pr-inventory-20260616t090421-040.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-040.md | #89714: maintainer must accept or reject the Control UI stale replay suppression boundary before any merge path. | [report](results/openclaw/live-pr-inventory-20260616t090421-040.md) | [27606833567](https://github.com/openclaw/clownfish/actions/runs/27606833567) |
| [live-pr-inventory-20260616T090421-060](results/openclaw/live-pr-inventory-20260616t090421-060.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-060.md | #72025: unresolved actionable review-bot findings on Signal status-reaction behavior require maintainer or contributor follow-up because ... | [report](results/openclaw/live-pr-inventory-20260616t090421-060.md) | [27606833380](https://github.com/openclaw/clownfish/actions/runs/27606833380) |
| [live-pr-inventory-20260616T090421-045](results/openclaw/live-pr-inventory-20260616t090421-045.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-045.md | #89981: maintainer technical review for focused, proof-backed diagnostics-otel PR; merge is blocked by job policy. | [report](results/openclaw/live-pr-inventory-20260616t090421-045.md) | [27606833305](https://github.com/openclaw/clownfish/actions/runs/27606833305) |
| [live-pr-inventory-20260616T090421-043](results/openclaw/live-pr-inventory-20260616t090421-043.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-043.md | #59920 requires maintainer review before any merge/finalization. | [report](results/openclaw/live-pr-inventory-20260616t090421-043.md) | [27606833202](https://github.com/openclaw/clownfish/actions/runs/27606833202) |
| [live-pr-inventory-20260616T090421-038](results/openclaw/live-pr-inventory-20260616t090421-038.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-038.md | #90968: resolve ClawSweeper review findings before any ACP/auth-provider merge decision. | [report](results/openclaw/live-pr-inventory-20260616t090421-038.md) | [27606832692](https://github.com/openclaw/clownfish/actions/runs/27606832692) |
| [live-pr-inventory-20260616T090421-054](results/openclaw/live-pr-inventory-20260616t090421-054.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-054.md | #90989: latest ClawSweeper review still says needs changes while the author reports follow-up fixes; maintainer/technical judgment is nee... | [report](results/openclaw/live-pr-inventory-20260616t090421-054.md) | [27606832456](https://github.com/openclaw/clownfish/actions/runs/27606832456) |
| [live-pr-inventory-20260616T090421-034](results/openclaw/live-pr-inventory-20260616t090421-034.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-034.md | #74974: proof-supplied and green focused gateway compatibility PR needs maintainer technical/product judgment before promotion to merge/f... | [report](results/openclaw/live-pr-inventory-20260616t090421-034.md) | [27606832253](https://github.com/openclaw/clownfish/actions/runs/27606832253) |
| [live-pr-inventory-20260616T090421-033](results/openclaw/live-pr-inventory-20260616t090421-033.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-033.md | #73809: maintainer review/finalization decision for a proof-backed focused heartbeat PR; merge is blocked by job and no merge preflight i... | [report](results/openclaw/live-pr-inventory-20260616t090421-033.md) | [27606832084](https://github.com/openclaw/clownfish/actions/runs/27606832084) |
| [live-pr-inventory-20260616T090421-050](results/openclaw/live-pr-inventory-20260616t090421-050.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-050.md | #66213: release automation/CODEOWNERS PR has requested maintainer review and unresolved workflow correctness questions; job requires huma... | [report](results/openclaw/live-pr-inventory-20260616t090421-050.md) | [27606831613](https://github.com/openclaw/clownfish/actions/runs/27606831613) |
| [live-pr-inventory-20260616T090421-048](results/openclaw/live-pr-inventory-20260616t090421-048.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-048.md | #90468: maintainer CHANGES_REQUESTED parser compatibility review remains unresolved. | [report](results/openclaw/live-pr-inventory-20260616t090421-048.md) | [27606831564](https://github.com/openclaw/clownfish/actions/runs/27606831564) |
| [live-pr-inventory-20260616T090421-036](results/openclaw/live-pr-inventory-20260616t090421-036.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-036.md | #87255: maintainer technical review required for a green focused config/session-state fix linked to #45765; merge/fix actions are disabled. | [report](results/openclaw/live-pr-inventory-20260616t090421-036.md) | [27606831421](https://github.com/openclaw/clownfish/actions/runs/27606831421) |
| [live-pr-inventory-20260616T090421-047](results/openclaw/live-pr-inventory-20260616t090421-047.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260616T090421-047.md | #90217: actionable Copilot review comments plus failing Real behavior proof; fix not allowed. | [report](results/openclaw/live-pr-inventory-20260616t090421-047.md) | [27606831328](https://github.com/openclaw/clownfish/actions/runs/27606831328) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [ghcrawl-157024-autonomous-smoke](results/openclaw/ghcrawl-157024-autonomous-smoke.md) | failed |  |  | source PR #67967 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27602174405](https://github.com/openclaw/clownfish/actions/runs/27602174405) |
| [ghcrawl-157024-autonomous-smoke](results/openclaw/ghcrawl-157024-autonomous-smoke.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:chang... | [27602174405](https://github.com/openclaw/clownfish/actions/runs/27602174405) |
| [ghcrawl-157026-autonomous-smoke](results/openclaw/ghcrawl-157026-autonomous-smoke.md) | failed |  |  | source PR #56258 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27602240738](https://github.com/openclaw/clownfish/actions/runs/27602240738) |
| [ghcrawl-157026-autonomous-smoke](results/openclaw/ghcrawl-157026-autonomous-smoke.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:chang... | [27602240738](https://github.com/openclaw/clownfish/actions/runs/27602240738) |
| [gitcrawl-27-autonomous-issue-wave](results/openclaw/gitcrawl-27-autonomous-issue-wave.md) | blocked |  | clownfish/gitcrawl-27-autonomous-issue-wave | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:... | [27602440492](https://github.com/openclaw/clownfish/actions/runs/27602440492) |
| [ghcrawl-157059-autonomous-smoke](results/openclaw/ghcrawl-157059-autonomous-smoke.md) | blocked |  |  | git fetch origin +refs/heads/clownfish/ghcrawl-157059-autonomous-smoke:refs/remotes/origin/clownfish/ghcrawl-157059-autonomous-smoke time... | [27598134039](https://github.com/openclaw/clownfish/actions/runs/27598134039) |
| [ghcrawl-156734-autonomous-smoke](results/openclaw/ghcrawl-156734-autonomous-smoke.md) | blocked |  |  | Codex fix worker timed out after 1800000ms | [27597850383](https://github.com/openclaw/clownfish/actions/runs/27597850383) |
| [ghcrawl-156887-autonomous-smoke](results/openclaw/ghcrawl-156887-autonomous-smoke.md) | failed |  |  | source PR #65058 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27598131388](https://github.com/openclaw/clownfish/actions/runs/27598131388) |
| [ghcrawl-156887-autonomous-smoke](results/openclaw/ghcrawl-156887-autonomous-smoke.md) | blocked |  |  | Codex /review did not pass after 2 attempt(s): Blocked only on branch freshness: the code diff itself is narrow enough, security-sensitiv... | [27598131388](https://github.com/openclaw/clownfish/actions/runs/27598131388) |
| [ghcrawl-156846-autonomous-smoke](results/openclaw/ghcrawl-156846-autonomous-smoke.md) | blocked |  | clownfish/ghcrawl-156846-autonomous-smoke | base branch advanced after validation and clownfish/ghcrawl-156846-autonomous-smoke needs a fresh rebase pass: Rebasing (1/2) error: coul... | [27598130569](https://github.com/openclaw/clownfish/actions/runs/27598130569) |
| [ghcrawl-156896-autonomous-smoke](results/openclaw/ghcrawl-156896-autonomous-smoke.md) | blocked |  | clownfish/ghcrawl-156896-autonomous-smoke | base branch advanced after validation and clownfish/ghcrawl-156896-autonomous-smoke needs a fresh rebase pass: Rebasing (1/2) error: coul... | [27598131954](https://github.com/openclaw/clownfish/actions/runs/27598131954) |
| [ghcrawl-157027-autonomous-smoke](results/openclaw/ghcrawl-157027-autonomous-smoke.md) | blocked |  | clownfish/ghcrawl-157027-autonomous-smoke | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] sr... | [27598133399](https://github.com/openclaw/clownfish/actions/runs/27598133399) |
| [ghcrawl-156790-autonomous-smoke](results/openclaw/ghcrawl-156790-autonomous-smoke.md) | blocked |  | clownfish/ghcrawl-156790-autonomous-smoke | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:... | [27597851709](https://github.com/openclaw/clownfish/actions/runs/27597851709) |
| [ghcrawl-156772-autonomous-smoke](results/openclaw/ghcrawl-156772-autonomous-smoke.md) | blocked |  | clownfish/ghcrawl-156772-autonomous-smoke | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests, docs [... | [27597851193](https://github.com/openclaw/clownfish/actions/runs/27597851193) |
| [ghcrawl-156802-autonomous-smoke](results/openclaw/ghcrawl-156802-autonomous-smoke.md) | blocked |  | clownfish/ghcrawl-156802-autonomous-smoke | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:chang... | [27597852112](https://github.com/openclaw/clownfish/actions/runs/27597852112) |
| [ghcrawl-156799-autonomous-smoke](results/openclaw/ghcrawl-156799-autonomous-smoke.md) | blocked |  | clownfish/ghcrawl-156799-autonomous-smoke | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] sr... | [27597852030](https://github.com/openclaw/clownfish/actions/runs/27597852030) |
| [ghcrawl-157041-autonomous-smoke](results/openclaw/ghcrawl-157041-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27598133345](https://github.com/openclaw/clownfish/actions/runs/27598133345) |
| [ghcrawl-156990-autonomous-smoke](results/openclaw/ghcrawl-156990-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27598132840](https://github.com/openclaw/clownfish/actions/runs/27598132840) |
| [ghcrawl-156681-autonomous-smoke](results/openclaw/ghcrawl-156681-autonomous-smoke.md) | failed |  |  | branch projectclownfish/repair-ghcrawl-156681-autonomous-smoke-73365 could not rebase onto origin/main: Codex could not repair rebase con... | [27597849040](https://github.com/openclaw/clownfish/actions/runs/27597849040) |
| [ghcrawl-156681-autonomous-smoke](results/openclaw/ghcrawl-156681-autonomous-smoke.md) | blocked |  |  | branch projectclownfish/repair-ghcrawl-156681-autonomous-smoke-73365 could not rebase onto origin/main: Codex could not repair rebase con... | [27597849040](https://github.com/openclaw/clownfish/actions/runs/27597849040) |
| [ghcrawl-156795-autonomous-smoke](results/openclaw/ghcrawl-156795-autonomous-smoke.md) | blocked |  | clownfish/ghcrawl-156795-autonomous-smoke | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] sr... | [27597851825](https://github.com/openclaw/clownfish/actions/runs/27597851825) |
| [ghcrawl-156778-autonomous-smoke](results/openclaw/ghcrawl-156778-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27597851320](https://github.com/openclaw/clownfish/actions/runs/27597851320) |
| [ghcrawl-156774-autonomous-smoke](results/openclaw/ghcrawl-156774-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27597851169](https://github.com/openclaw/clownfish/actions/runs/27597851169) |
| [ghcrawl-156704-autonomous-smoke](results/openclaw/ghcrawl-156704-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27597849690](https://github.com/openclaw/clownfish/actions/runs/27597849690) |
| [ghcrawl-156699-autonomous-smoke](results/openclaw/ghcrawl-156699-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27597849416](https://github.com/openclaw/clownfish/actions/runs/27597849416) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| target changed since worker review | 27 | [pr-close-canary-75213-20260615-bulk-a](results/openclaw/pr-close-canary-75213-20260615-bulk-a.md) |
| merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish | 19 | [ghcrawl-156686-autonomous-smoke](results/openclaw/ghcrawl-156686-autonomous-smoke.md) |
| job does not allow merge | 12 | [clawsweeper-commit-openclaw-openclaw-806a0119f3cd](results/openclaw/clawsweeper-commit-openclaw-openclaw-806a0119f3cd.md) |
| blocked: Close is blocked on the canonical fix path or fix PR. | 10 | [ghcrawl-165990-agentic-merge](results/openclaw/ghcrawl-165990-agentic-merge.md) |
| canonical is not listed in job refs | 10 | [gitcrawl-238861-dedupe-only-20260429c](results/openclaw/gitcrawl-238861-dedupe-only-20260429c.md) |
| candidate fix is not listed in job refs | 8 | [gitcrawl-73-dedupe-cleanup-wave](results/openclaw/gitcrawl-73-dedupe-cleanup-wave.md) |
| merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review | 8 | [ghcrawl-156679-autonomous-smoke](results/openclaw/ghcrawl-156679-autonomous-smoke.md) |
| target is not listed in job candidates | 7 | [gitcrawl-14501-dedupe-only-20260429-remote](results/openclaw/gitcrawl-14501-dedupe-only-20260429-remote.md) |
| close requires ProjectClownfish fix PR opened/pushed or merge executed first | 6 | [ghcrawl-156593-autonomous-smoke](results/openclaw/ghcrawl-156593-autonomous-smoke.md) |
| merge state status is UNSTABLE | 6 | [ghcrawl-156647-autonomous-smoke](results/openclaw/ghcrawl-156647-autonomous-smoke.md) |
| fixed_by_candidate close requires a merged fix PR unless allow_unmerged_fix_close: true | 5 | [ghcrawl-156878-autonomous-smoke](results/openclaw/ghcrawl-156878-autonomous-smoke.md) |
| mergeable state is CONFLICTING | 5 | [ghcrawl-156651-autonomous-smoke](results/openclaw/ghcrawl-156651-autonomous-smoke.md) |
| blocked: Duplicate close is blocked on the replacement fix path. | 4 | [ghcrawl-165995-agentic-merge](results/openclaw/ghcrawl-165995-agentic-merge.md) |
| blocked: Blocked by require_fix_before_close until the credited replacement fix PR for #34574 is opened. | 3 | [ghcrawl-199253-agentic-merge](results/openclaw/ghcrawl-199253-agentic-merge.md) |
| blocked: Clear duplicate, but closeout is blocked on the canonical fix path. | 3 | [ghcrawl-156584-autonomous-smoke](results/openclaw/ghcrawl-156584-autonomous-smoke.md) |

### Open PR Finalizer Queue

| PR | Title | Cluster | Branch | Blockers | Next action |
| --- | --- | --- | --- | --- | --- |
| [#73989](https://github.com/openclaw/openclaw/pull/73989) | fix(health-monitor): add reconnect grace for gateway reconnects | ghcrawl-157023-autonomous-smoke | clownfish/ghcrawl-157023-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE; Real behavior p... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73987](https://github.com/openclaw/openclaw/pull/73987) | fix(control-ui): share gateway token scope across loopback hosts | ghcrawl-157066-autonomous-smoke | clownfish/ghcrawl-157066-autonomous-smoke | security_hold, security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:Real beh... | route to central security triage |
| [#73982](https://github.com/openclaw/openclaw/pull/73982) | fix(chat-bash): inherit exec policy defaults | ghcrawl-157029-autonomous-smoke | clownfish/ghcrawl-157029-autonomous-smoke | security_hold, security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:FAILURE; Real behavior... | route to central security triage |
| [#73976](https://github.com/openclaw/openclaw/pull/73976) | fix(memory): use per-keyword FTS search in hybrid mode #39484 | ghcrawl-156988-autonomous-smoke | clownfish/ghcrawl-156988-autonomous-smoke | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE;... | route to central security triage |
| [#73948](https://github.com/openclaw/openclaw/pull/73948) | fix(security): align audit symlink_escape boundary with skill loader | ghcrawl-156898-autonomous-smoke | clownfish/ghcrawl-156898-autonomous-smoke | security_hold, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE; ... | route to central security triage |
| [#73925](https://github.com/openclaw/openclaw/pull/73925) | fix(gateway): bound websocket auth after valid connect | ghcrawl-156675-autonomous-smoke | clownfish/ghcrawl-156675-autonomous-smoke | security_hold, security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:Real beh... | route to central security triage |
| [#73923](https://github.com/openclaw/openclaw/pull/73923) | fix(ui): preserve gateway token during safe websocket url edits | ghcrawl-156708-autonomous-smoke | clownfish/ghcrawl-156708-autonomous-smoke | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE; Real behavior p... | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |

### Latest ProjectClownfish Closures

| Target | Type | Title | Closed | Action | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [#80536](https://github.com/openclaw/openclaw/issues/80536) | issue | Channel config-schema additions in downstream patches not picked up by runtime validator (codegen-bundled JSON schema is checked-in, not ... | Jun 16, 2026, 09:36 UTC | close_fixed_by_candidate | [gitcrawl-110-dedupe-cleanup-wave](results/openclaw/gitcrawl-110-dedupe-cleanup-wave.md) | [report](results/openclaw/gitcrawl-110-dedupe-cleanup-wave.md) | [27608148324](https://github.com/openclaw/clownfish/actions/runs/27608148324) |
| [#92337](https://github.com/openclaw/openclaw/issues/92337) | issue | memory-core: mergeHybridResults ignores textScore when keyword/vector chunk IDs don't overlap | Jun 16, 2026, 09:34 UTC | close_fixed_by_candidate | [gitcrawl-78-dedupe-cleanup-wave](results/openclaw/gitcrawl-78-dedupe-cleanup-wave.md) | [report](results/openclaw/gitcrawl-78-dedupe-cleanup-wave.md) | [27608150680](https://github.com/openclaw/clownfish/actions/runs/27608150680) |
| [#92061](https://github.com/openclaw/openclaw/issues/92061) | issue | memory-core: CJK text FTS5 search returns textScore=0 with trigram tokenizer | Jun 16, 2026, 09:34 UTC | close_fixed_by_candidate | [gitcrawl-78-dedupe-cleanup-wave](results/openclaw/gitcrawl-78-dedupe-cleanup-wave.md) | [report](results/openclaw/gitcrawl-78-dedupe-cleanup-wave.md) | [27608150680](https://github.com/openclaw/clownfish/actions/runs/27608150680) |
| [#85932](https://github.com/openclaw/openclaw/pull/85932) | pull_request | fix(voice-call): suppress duplicate OpenAI initial greeting (#85846) | Jun 16, 2026, 09:33 UTC | close_superseded | [gitcrawl-120-dedupe-cleanup-wave](results/openclaw/gitcrawl-120-dedupe-cleanup-wave.md) | [report](results/openclaw/gitcrawl-120-dedupe-cleanup-wave.md) | [27608147987](https://github.com/openclaw/clownfish/actions/runs/27608147987) |
| [#68020](https://github.com/openclaw/openclaw/pull/68020) | pull_request | fix(memory-core): silence expected operator.admin scope miss in dreaming cleanup | Jun 16, 2026, 07:26 UTC | close_fixed_by_candidate | [pr-close-canary-68020-20260616-bulk](results/openclaw/pr-close-canary-68020-20260616-bulk.md) | [report](results/openclaw/pr-close-canary-68020-20260616-bulk.md) | [27601320435](https://github.com/openclaw/clownfish/actions/runs/27601320435) |
| [#41284](https://github.com/openclaw/openclaw/pull/41284) | pull_request | fix(ios): read IDEProvisioningTeamByIdentifier | Jun 16, 2026, 07:24 UTC | close_fixed_by_candidate | [pr-close-canary-41284-20260615-volume-a](results/openclaw/pr-close-canary-41284-20260615-volume-a.md) | [report](results/openclaw/pr-close-canary-41284-20260615-volume-a.md) | [27601172439](https://github.com/openclaw/clownfish/actions/runs/27601172439) |
| [#42754](https://github.com/openclaw/openclaw/issues/42754) | issue | [Feature]: Feishu card action handler discards action.option, action.options, and action.form_value | Jun 16, 2026, 05:19 UTC | close_duplicate | [gitcrawl-14172-dedupe-only-20260429-remote](results/openclaw/gitcrawl-14172-dedupe-only-20260429-remote.md) | [report](results/openclaw/gitcrawl-14172-dedupe-only-20260429-remote.md) | [27595847269](https://github.com/openclaw/clownfish/actions/runs/27595847269) |
| [#92202](https://github.com/openclaw/openclaw/pull/92202) | pull_request | fix(embedded-runner): recheck owned-writes before session takeover (#91236) | Jun 16, 2026, 02:08 UTC | close_superseded | [pr-close-canary-92202-20260616-bulk](results/openclaw/pr-close-canary-92202-20260616-bulk.md) | [report](results/openclaw/pr-close-canary-92202-20260616-bulk.md) | [27589215007](https://github.com/openclaw/clownfish/actions/runs/27589215007) |
| [#86551](https://github.com/openclaw/openclaw/pull/86551) | pull_request | fix(agents): add missing DeepSeek V4 proxy models to reasoning_content replay set | Jun 16, 2026, 02:07 UTC | close_fixed_by_candidate | [pr-close-canary-86551-20260616-bulk](results/openclaw/pr-close-canary-86551-20260616-bulk.md) | [report](results/openclaw/pr-close-canary-86551-20260616-bulk.md) | [27589214541](https://github.com/openclaw/clownfish/actions/runs/27589214541) |
| [#92301](https://github.com/openclaw/openclaw/pull/92301) | pull_request | #92285: fix: reconcile orphaned managed flows when all child tasks are terminal | Jun 15, 2026, 23:44 UTC | close_superseded | [pr-close-canary-92301-close-wave-20260616a](results/openclaw/pr-close-canary-92301-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-92301-close-wave-20260616a.md) | [27583793245](https://github.com/openclaw/clownfish/actions/runs/27583793245) |
| [#93275](https://github.com/openclaw/openclaw/pull/93275) | pull_request | #92776: fix(agents): prevent indefinite session model pinning from polluted fallback origin | Jun 15, 2026, 23:44 UTC | close_superseded | [pr-close-canary-93275-close-wave-20260616c](results/openclaw/pr-close-canary-93275-close-wave-20260616c.md) | [report](results/openclaw/pr-close-canary-93275-close-wave-20260616c.md) | [27583793841](https://github.com/openclaw/clownfish/actions/runs/27583793841) |
| [#92704](https://github.com/openclaw/openclaw/pull/92704) | pull_request | #92688: fix(qwen): use DashScope native image format for Qwen vision models | Jun 15, 2026, 23:44 UTC | close_superseded | [pr-close-canary-92704-close-wave-20260616a](results/openclaw/pr-close-canary-92704-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-92704-close-wave-20260616a.md) | [27583793185](https://github.com/openclaw/clownfish/actions/runs/27583793185) |
| [#84036](https://github.com/openclaw/openclaw/pull/84036) | pull_request | feat(cli): suggest closest command for unknown subcommands (#83999) | Jun 15, 2026, 23:44 UTC | close_superseded | [pr-close-canary-84036-close-wave-20260616a](results/openclaw/pr-close-canary-84036-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-84036-close-wave-20260616a.md) | [27583792935](https://github.com/openclaw/clownfish/actions/runs/27583792935) |
| [#90931](https://github.com/openclaw/openclaw/pull/90931) | pull_request | fix(ui): scope local assistant avatar overrides per agent (#90890) | Jun 15, 2026, 23:44 UTC | close_superseded | [pr-close-canary-90931-close-wave-20260616a](results/openclaw/pr-close-canary-90931-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-90931-close-wave-20260616a.md) | [27583792809](https://github.com/openclaw/clownfish/actions/runs/27583792809) |
| [#91870](https://github.com/openclaw/openclaw/pull/91870) | pull_request | fix(github-copilot): claude-opus-4.8 is native 1M context + thinking (not 128K) | Jun 15, 2026, 23:19 UTC | close_superseded | [pr-close-canary-91870-close-wave-20260616a](results/openclaw/pr-close-canary-91870-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-91870-close-wave-20260616a.md) | [27582529213](https://github.com/openclaw/clownfish/actions/runs/27582529213) |
| [#90252](https://github.com/openclaw/openclaw/pull/90252) | pull_request | fix(state-migrations): archive plugin install index on conflict instead of keeping it | Jun 15, 2026, 23:19 UTC | close_superseded | [pr-close-canary-90252-close-wave-20260616a](results/openclaw/pr-close-canary-90252-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-90252-close-wave-20260616a.md) | [27582527762](https://github.com/openclaw/clownfish/actions/runs/27582527762) |
| [#92164](https://github.com/openclaw/openclaw/pull/92164) | pull_request | fix(memory-core): score CJK keyword search instead of textScore=0 with trigram FTS5 | Jun 15, 2026, 23:15 UTC | close_superseded | [pr-close-canary-92164-close-wave-20260616a](results/openclaw/pr-close-canary-92164-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-92164-close-wave-20260616a.md) | [27582530380](https://github.com/openclaw/clownfish/actions/runs/27582530380) |
| [#91955](https://github.com/openclaw/openclaw/pull/91955) | pull_request | fix(agents): keep BOOTSTRAP.md pending on preseeded managed workspaces [AI-assisted] | Jun 15, 2026, 23:15 UTC | close_superseded | [pr-close-canary-91955-close-wave-20260616a](results/openclaw/pr-close-canary-91955-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-91955-close-wave-20260616a.md) | [27582530021](https://github.com/openclaw/clownfish/actions/runs/27582530021) |
| [#91875](https://github.com/openclaw/openclaw/pull/91875) | pull_request | fix(github-copilot): claude-opus-4.8 context window to 1M with reasoning support | Jun 15, 2026, 23:15 UTC | close_superseded | [pr-close-canary-91875-close-wave-20260616a](results/openclaw/pr-close-canary-91875-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-91875-close-wave-20260616a.md) | [27582529769](https://github.com/openclaw/clownfish/actions/runs/27582529769) |
| [#91447](https://github.com/openclaw/openclaw/pull/91447) | pull_request | fix(ui): scope local assistant avatar override to agent ID (fixes #90890) | Jun 15, 2026, 23:13 UTC | close_superseded | [pr-close-canary-91447-close-wave-20260616a](results/openclaw/pr-close-canary-91447-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-91447-close-wave-20260616a.md) | [27582528680](https://github.com/openclaw/clownfish/actions/runs/27582528680) |
| [#89538](https://github.com/openclaw/openclaw/pull/89538) | pull_request | fix(sessions): sweep orphaned atomic-write temp files at gateway startup | Jun 15, 2026, 23:13 UTC | close_superseded | [pr-close-canary-89538-close-wave-20260616a](results/openclaw/pr-close-canary-89538-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-89538-close-wave-20260616a.md) | [27582527727](https://github.com/openclaw/clownfish/actions/runs/27582527727) |
| [#89490](https://github.com/openclaw/openclaw/pull/89490) | pull_request | Config: preserve implicit main route bindings | Jun 15, 2026, 23:13 UTC | close_superseded | [pr-close-canary-89490-close-wave-20260616a](results/openclaw/pr-close-canary-89490-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-89490-close-wave-20260616a.md) | [27582526993](https://github.com/openclaw/clownfish/actions/runs/27582526993) |
| [#90932](https://github.com/openclaw/openclaw/pull/90932) | pull_request | fix(ui): scope local assistant avatar override to agent ID (fixes #90890) | Jun 15, 2026, 23:13 UTC | close_superseded | [pr-close-canary-90932-close-wave-20260616a](results/openclaw/pr-close-canary-90932-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-90932-close-wave-20260616a.md) | [27582528476](https://github.com/openclaw/clownfish/actions/runs/27582528476) |
| [#81131](https://github.com/openclaw/openclaw/pull/81131) | pull_request | fix(telegram): combine voice payload with preceding streamed text | Jun 15, 2026, 23:05 UTC | close_superseded | [pr-close-canary-81131-close-wave-20260616a](results/openclaw/pr-close-canary-81131-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-81131-close-wave-20260616a.md) | [27582174346](https://github.com/openclaw/clownfish/actions/runs/27582174346) |
| [#86168](https://github.com/openclaw/openclaw/pull/86168) | pull_request | fix(edit): show best matching region on mismatch instead of raw file head | Jun 15, 2026, 23:05 UTC | close_superseded | [pr-close-canary-86168-close-wave-20260616a](results/openclaw/pr-close-canary-86168-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-86168-close-wave-20260616a.md) | [27582175541](https://github.com/openclaw/clownfish/actions/runs/27582175541) |
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

# If the local gitcrawl cluster id space changed, ignore stale job cluster ids
# and dedupe only against published worker result refs.
npm run import-gitcrawl -- --from-gitcrawl --limit 80 --mode autonomous \
  --suffix autonomous-issue-wave \
  --existing-results-only \
  --overlap-policy exclude-existing \
  --allow-instant-close \
  --allow-merge \
  --allow-fix-pr \
  --allow-post-merge-close

# Dispatch reviewed jobs. Dispatch, requeue, and self-heal refuse to exceed
# 50 live cluster-worker runs by default; tune with CLOWNFISH_MAX_LIVE_WORKERS
# or --max-live-workers. With --wait-for-capacity, dispatch can drain a larger
# file list in capacity-sized waves instead of refusing the whole batch.
CLOWNFISH_MAX_LIVE_WORKERS=50 npm run dispatch -- jobs/openclaw/inbox/cluster-example.md \
  --mode autonomous \
  --runner blacksmith-4vcpu-ubuntu-2404 \
  --execution-runner blacksmith-16vcpu-ubuntu-2404

# Select a plan-only wave by total referenced issue/PR count without dispatching.
# This is useful for high-volume inventory shards where job count is less useful
# than the number of hydrated refs the wave will consume.
npm run queue-status -- \
  --attempt-filter unattempted \
  --plan-ref-limit 2500 \
  --write-missing-plan /tmp/clownfish-plan-wave.txt \
  --allow-app-token-auth

# Refresh only verified-open jobs that the live sweep marked requeueable.
# This is an explicit plan-only lane for stale historical results; it does not
# auto-dispatch or convert the selected jobs into write-mode work.
npm run sweep-openclaw-jobs -- --live --verify-target-refs-live --report /tmp/clownfish-sweep.json
npm run queue-status -- \
  --sweep-report /tmp/clownfish-sweep.json \
  --sweep-requeue-limit 30 \
  --write-sweep-requeue /tmp/clownfish-sweep-requeue.txt \
  --allow-app-token-auth
npm run dispatch -- --jobs-file /tmp/clownfish-sweep-requeue.txt --mode plan

# High-volume plan inventory waves should keep hydration lean. This hydrates
# only the listed PR refs and skips issue/review comments for first-pass
# classification; follow-up execute/autonomous jobs can rehydrate deeper.
npm run dispatch -- --jobs-file /tmp/clownfish-plan-wave-all.txt \
  --mode plan \
  --dispatch-event repository-batch \
  --allow-app-token-auth \
  --max-live-workers 200 \
  --batch-max-parallel 100 \
  --batch-matrix-limit 200 \
  --hydrate-comments 0 \
  --max-linked-refs 0 \
  --max-comments-per-item 0 \
  --max-review-comments-per-pr 0 \
  --runner blacksmith-4vcpu-ubuntu-2404 \
  --execution-runner blacksmith-16vcpu-ubuntu-2404

# Full open-PR inventory sweep from the local gitcrawl snapshot. Generate
# plan-only shards from currently open PRs, skipping refs already present in
# the active inbox. This is the high-volume lane; it performs classification,
# not writes.
npm run import-gitcrawl-pr-inventory -- \
  --limit all \
  --batch-size 40 \
  --existing-dir jobs/openclaw/inbox \
  --mode plan

# Dispatch that full plan lane wide with lean hydration. This is intentionally
# separate from write/apply dispatches.
node scripts/queue-status.mjs \
  --plan-ref-limit 4000 \
  --write-missing-plan /tmp/clownfish-plan-wave-all.txt \
  --allow-app-token-auth
npm run dispatch -- --jobs-file /tmp/clownfish-plan-wave-all.txt \
  --mode plan \
  --dispatch-event repository-batch \
  --allow-app-token-auth \
  --max-live-workers 200 \
  --batch-max-parallel 100 \
  --batch-matrix-limit 200 \
  --hydrate-comments 0 \
  --max-linked-refs 0 \
  --max-comments-per-item 0 \
  --max-review-comments-per-pr 0 \
  --runner blacksmith-4vcpu-ubuntu-2404 \
  --execution-runner blacksmith-16vcpu-ubuntu-2404

# Write/apply dispatches are deliberately capped separately. The default
# write lane cap is 5 workers even if the plan lane runs wider. Override only
# after fresh canaries prove the App quota and applicator path are healthy.
npm run dispatch -- --jobs-file /tmp/clownfish-close-retry.txt \
  --mode execute \
  --allow-app-token-auth \
  --wait-for-capacity \
  --write-live-worker-cap 3 \
  --batch-size 1 \
  --batch-delay-ms 120000 \
  --dispatch-concurrency 1 \
  --runner blacksmith-4vcpu-ubuntu-2404 \
  --execution-runner blacksmith-16vcpu-ubuntu-2404

# Find explicitly recoverable, checkpointed active-inbox fix failures that have
# not been superseded by a later child result. A failed batch alone is not
# enough to requeue work.
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
- optional `CLOWNFISH_CODEX_TIMEOUT_MS`, `CLOWNFISH_FIX_CODEX_TIMEOUT_MS`, and `CLOWNFISH_FIX_STEP_TIMEOUT_MS` variables; worker planning defaults to 30 minutes, while fix execution defaults to a 20 minute Codex budget inside a 40 minute executor step so timeout artifacts can be written
- optional `CLOWNFISH_REBASE_ONLY_FIX_STEP_TIMEOUT_MS` and `CLOWNFISH_REBASE_ONLY_REVIEW_TIMEOUT_MS` variables; explicit `rebase_only` jobs default to 25 minutes with a five minute review cap, refresh current main before review to avoid reviewing a stale rebase, emit stage timing to the workflow log, and defer the Codex write preflight unless an actual rebase conflict needs a write worker. The review never mutates GitHub and may make only the minimum read-only `gh` query required by target-repo instructions.
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
