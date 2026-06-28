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

Last dashboard update: Jun 28, 2026, 23:46 UTC

<!-- projectclownfish-dashboard:start -->
State: Failed clusters need inspection

Scope: 6609 active latest cluster reports. 4 policy-archived cluster(s) are excluded from health stats; run attempts are tracked as audit history only.

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 6609 | 100% |
| Policy-archived clusters | 4 | audit |
| Clean completed clusters | 4039 | 61.1% |
| Needs-human clusters | 2136 | 32.3% |
| Latest successful clusters | 6245 | 94.5% |
| Latest failed clusters | 290 | 4.4% |
| Latest cancelled clusters | 8 | 0.1% |
| Run attempts archived | 8755 | audit |
| Fix action attempts | 534 | audit |
| Fix actions executed | 11 | 2.1% |
| Fix actions failed | 112 | 21.0% |
| Fix actions blocked | 165 | 30.9% |
| Latest clusters with fix failures | 103 | 1.6% |
| Distinct PRs touched | 8541 | 100% |
| Open PRs tracked | 2501 | 29.3% |
| Closed unmerged PRs tracked | 4457 | 52.2% |
| Completed close actions | 86 | 13.2% |
| Completed merge actions | 58 | 8.9% |
| Duplicate closes | 26 | 30.2% |
| Superseded closes | 24 | 27.9% |
| Fixed-by-candidate closes | 26 | 30.2% |
| Low-signal PR closes | 0 | 0.0% |
| Blocked mutation attempts | 274 | 42.1% |
| Skipped mutation attempts | 233 | 35.8% |

### Clusters Needing Inspection

| Cluster | State | Source job | Reason | Report | Run |
| --- | --- | --- | --- | --- | --- |
| [live-pr-inventory-20260628T225930-003](results/openclaw/live-pr-inventory-20260628t225930-003.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260628T225930-003.md | #53467: choose the canonical Slack `ignoreOtherMentions` path across #53467, #89846, and #89625 after resolving bot-review findings and p... | [report](results/openclaw/live-pr-inventory-20260628t225930-003.md) | [28338928676](https://github.com/openclaw/clownfish/actions/runs/28338928676) |
| [live-pr-inventory-20260628T225930-002](results/openclaw/live-pr-inventory-20260628t225930-002.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260628T225930-002.md | #97340 requires maintainer judgment before automation because it is a broad Teams multi-account feature touching compatibility, auth-prov... | [report](results/openclaw/live-pr-inventory-20260628t225930-002.md) | [28338927794](https://github.com/openclaw/clownfish/actions/runs/28338927794) |
| [live-pr-inventory-20260628T225930-001](results/openclaw/live-pr-inventory-20260628t225930-001.md) | fix failed | jobs/openclaw/inbox/live-pr-inventory-20260628T225930-001.md | source PR #97581 head fetch failed after 2 attempt(s): source PR #97581 head fetch resolved 28d409161d94e965f5099c5e4faae0a9d306ed1e, exp... | [report](results/openclaw/live-pr-inventory-20260628t225930-001.md) | [28338926716](https://github.com/openclaw/clownfish/actions/runs/28338926716) |
| [live-pr-inventory-20260628T224925-003](results/openclaw/live-pr-inventory-20260628t224925-003.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T224925-003.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t224925-003.md) | [28338680976](https://github.com/openclaw/clownfish/actions/runs/28338680976) |
| [live-pr-inventory-20260628T224925-002](results/openclaw/live-pr-inventory-20260628t224925-002.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260628T224925-002.md | #87891: maintainer decision required on whether to accept the new Telegram spooled handler timeout config surface before any merge, repai... | [report](results/openclaw/live-pr-inventory-20260628t224925-002.md) | [28338680142](https://github.com/openclaw/clownfish/actions/runs/28338680142) |
| [live-pr-inventory-20260628T224925-001](results/openclaw/live-pr-inventory-20260628t224925-001.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260628T224925-001.md | #88098 requires maintainer product direction before merge or close because it adds a new public non-interactive onboard flag/config surfa... | [report](results/openclaw/live-pr-inventory-20260628t224925-001.md) | [28338679254](https://github.com/openclaw/clownfish/actions/runs/28338679254) |
| [live-pr-inventory-20260628T223159-003](results/openclaw/live-pr-inventory-20260628t223159-003.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T223159-003.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t223159-003.md) | [28338250218](https://github.com/openclaw/clownfish/actions/runs/28338250218) |
| [live-pr-inventory-20260628T223159-002](results/openclaw/live-pr-inventory-20260628t223159-002.md) | needs human | jobs/openclaw/inbox/live-pr-inventory-20260628T223159-002.md | #97340: maintainer decision needed for broad Teams multi-account product/config/session-state change; branch is uneditable by maintainers... | [report](results/openclaw/live-pr-inventory-20260628t223159-002.md) | [28338249288](https://github.com/openclaw/clownfish/actions/runs/28338249288) |
| [live-pr-inventory-20260628T223159-001](results/openclaw/live-pr-inventory-20260628t223159-001.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T223159-001.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t223159-001.md) | [28338248592](https://github.com/openclaw/clownfish/actions/runs/28338248592) |
| [live-pr-inventory-20260628T192120-002](results/openclaw/live-pr-inventory-20260628t192120-002.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T192120-002.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t192120-002.md) | [28333264671](https://github.com/openclaw/clownfish/actions/runs/28333264671) |
| [live-pr-inventory-20260628T192120-001](results/openclaw/live-pr-inventory-20260628t192120-001.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T192120-001.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t192120-001.md) | [28333264051](https://github.com/openclaw/clownfish/actions/runs/28333264051) |
| [live-pr-inventory-20260628T192105-001](results/openclaw/live-pr-inventory-20260628t192105-001.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T192105-001.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t192105-001.md) | [28333263243](https://github.com/openclaw/clownfish/actions/runs/28333263243) |
| [live-pr-inventory-20260628T175830-005](results/openclaw/live-pr-inventory-20260628t175830-005.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T175830-005.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t175830-005.md) | [28331051110](https://github.com/openclaw/clownfish/actions/runs/28331051110) |
| [live-pr-inventory-20260628T175830-002](results/openclaw/live-pr-inventory-20260628t175830-002.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T175830-002.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t175830-002.md) | [28331045359](https://github.com/openclaw/clownfish/actions/runs/28331045359) |
| [live-pr-inventory-20260628T175830-006](results/openclaw/live-pr-inventory-20260628t175830-006.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T175830-006.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t175830-006.md) | [28331051187](https://github.com/openclaw/clownfish/actions/runs/28331051187) |
| [live-pr-inventory-20260628T175830-003](results/openclaw/live-pr-inventory-20260628t175830-003.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T175830-003.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t175830-003.md) | [28331045340](https://github.com/openclaw/clownfish/actions/runs/28331045340) |
| [live-pr-inventory-20260628T175830-004](results/openclaw/live-pr-inventory-20260628t175830-004.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T175830-004.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t175830-004.md) | [28331051131](https://github.com/openclaw/clownfish/actions/runs/28331051131) |
| [live-pr-inventory-20260628T175830-001](results/openclaw/live-pr-inventory-20260628t175830-001.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T175830-001.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t175830-001.md) | [28331045344](https://github.com/openclaw/clownfish/actions/runs/28331045344) |
| [live-pr-inventory-20260628T173641-018](results/openclaw/live-pr-inventory-20260628t173641-018.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T173641-018.md | blocked: external_merge_preflight_required: PR is otherwise merge-shaped, but this worker does not have complete merge_preflight evidence... | [report](results/openclaw/live-pr-inventory-20260628t173641-018.md) | [28330512472](https://github.com/openclaw/clownfish/actions/runs/28330512472) |
| [live-pr-inventory-20260628T173641-016](results/openclaw/live-pr-inventory-20260628t173641-016.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T173641-016.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t173641-016.md) | [28330500620](https://github.com/openclaw/clownfish/actions/runs/28330500620) |
| [live-pr-inventory-20260628T173641-013](results/openclaw/live-pr-inventory-20260628t173641-013.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T173641-013.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t173641-013.md) | [28330500619](https://github.com/openclaw/clownfish/actions/runs/28330500619) |
| [live-pr-inventory-20260628T173641-015](results/openclaw/live-pr-inventory-20260628t173641-015.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T173641-015.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t173641-015.md) | [28330500604](https://github.com/openclaw/clownfish/actions/runs/28330500604) |
| [live-pr-inventory-20260628T173641-014](results/openclaw/live-pr-inventory-20260628t173641-014.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T173641-014.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t173641-014.md) | [28330500595](https://github.com/openclaw/clownfish/actions/runs/28330500595) |
| [live-pr-inventory-20260628T173641-011](results/openclaw/live-pr-inventory-20260628t173641-011.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T173641-011.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t173641-011.md) | [28330494801](https://github.com/openclaw/clownfish/actions/runs/28330494801) |
| [live-pr-inventory-20260628T173641-010](results/openclaw/live-pr-inventory-20260628t173641-010.md) | apply skipped | jobs/openclaw/inbox/live-pr-inventory-20260628T173641-010.md | blocked: external_merge_preflight_required | [report](results/openclaw/live-pr-inventory-20260628t173641-010.md) | [28330494779](https://github.com/openclaw/clownfish/actions/runs/28330494779) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [live-pr-inventory-20260628T225930-001](results/openclaw/live-pr-inventory-20260628t225930-001.md) | failed |  |  | source PR #97581 head fetch failed after 2 attempt(s): source PR #97581 head fetch resolved 28d409161d94e965f5099c5e4faae0a9d306ed1e, exp... | [28338926716](https://github.com/openclaw/clownfish/actions/runs/28338926716) |
| [live-pr-inventory-20260628T225930-001](results/openclaw/live-pr-inventory-20260628t225930-001.md) | blocked |  |  | source PR #97581 head fetch failed after 2 attempt(s): source PR #97581 head fetch resolved 28d409161d94e965f5099c5e4faae0a9d306ed1e, exp... | [28338926716](https://github.com/openclaw/clownfish/actions/runs/28338926716) |
| [gitcrawl-1214-autonomous-refresh-20260623a](results/openclaw/gitcrawl-1214-autonomous-refresh-20260623a.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [28005085136](https://github.com/openclaw/clownfish/actions/runs/28005085136) |
| [live-pr-inventory-20260622T175816-002](results/openclaw/live-pr-inventory-20260622t175816-002.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27986288546](https://github.com/openclaw/clownfish/actions/runs/27986288546) |
| [gitcrawl-1348-autonomous-bulk-20260622b](results/openclaw/gitcrawl-1348-autonomous-bulk-20260622b.md) | blocked |  | clownfish/gitcrawl-1348-autonomous-bulk-20260622b | validation command failed (pnpm check:changed): pnpm check:changed exited 2 | [27961714444](https://github.com/openclaw/clownfish/actions/runs/27961714444) |
| [gitcrawl-1378-autonomous-bulk-20260622b](results/openclaw/gitcrawl-1378-autonomous-bulk-20260622b.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27961720358](https://github.com/openclaw/clownfish/actions/runs/27961720358) |
| [automerge-openclaw-openclaw-86062](results/openclaw/automerge-openclaw-openclaw-86062.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27875510517](https://github.com/openclaw/clownfish/actions/runs/27875510517) |
| [automerge-openclaw-openclaw-85899](results/openclaw/automerge-openclaw-openclaw-85899.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27868634023](https://github.com/openclaw/clownfish/actions/runs/27868634023) |
| [repair-88581-live-pr-inventory-20260618t170451-007-20260619](results/openclaw/repair-88581-live-pr-inventory-20260618t170451-007-20260619.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27798111337](https://github.com/openclaw/clownfish/actions/runs/27798111337) |
| [repair-93897-live-pr-inventory-20260617t081753-004-20260617a](results/openclaw/repair-93897-live-pr-inventory-20260617t081753-004-20260617a.md) | failed |  |  | Codex /review did not pass after 3 attempt(s): Merge is blocked. Security-sensitive issues look absent, and the supplied `pnpm check:chan... | [27745761430](https://github.com/openclaw/clownfish/actions/runs/27745761430) |
| [repair-93897-live-pr-inventory-20260617t081753-004-20260617a](results/openclaw/repair-93897-live-pr-inventory-20260617t081753-004-20260617a.md) | blocked |  |  | Codex /review did not pass after 3 attempt(s): Merge is blocked. Security-sensitive issues look absent, and the supplied `pnpm check:chan... | [27745761430](https://github.com/openclaw/clownfish/actions/runs/27745761430) |
| [pr-rebase-canary-80396-20260617](results/openclaw/pr-rebase-canary-80396-20260617.md) | blocked |  |  | rebase-only repair stopped: Codex /review did not pass after 1 attempt(s): Merge is blocked. The branch adds the fenced MEDIA callback in... | [27705773540](https://github.com/openclaw/clownfish/actions/runs/27705773540) |
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

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| blocked: external_merge_preflight_required | 75 | [live-pr-inventory-20260628T225930-003](results/openclaw/live-pr-inventory-20260628t225930-003.md) |
| job does not allow merge | 66 | [repair-openclaw-openclaw-78105-20260623a](results/openclaw/repair-openclaw-openclaw-78105-20260623a.md) |
| target changed since worker review | 27 | [pr-close-canary-75213-20260615-bulk-a](results/openclaw/pr-close-canary-75213-20260615-bulk-a.md) |
| merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish | 19 | [ghcrawl-156686-autonomous-smoke](results/openclaw/ghcrawl-156686-autonomous-smoke.md) |
| canonical is not listed in job refs | 14 | [gitcrawl-301-dedupe-cleanup-wave-3](results/openclaw/gitcrawl-301-dedupe-cleanup-wave-3.md) |
| blocked: Close is blocked on the canonical fix path or fix PR. | 10 | [ghcrawl-165990-agentic-merge](results/openclaw/ghcrawl-165990-agentic-merge.md) |
| candidate fix is not listed in job refs | 9 | [gitcrawl-516-dedupe-cleanup-wave-3](results/openclaw/gitcrawl-516-dedupe-cleanup-wave-3.md) |
| merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review | 8 | [ghcrawl-156679-autonomous-smoke](results/openclaw/ghcrawl-156679-autonomous-smoke.md) |
| target is not listed in job candidates | 7 | [gitcrawl-14501-dedupe-only-20260429-remote](results/openclaw/gitcrawl-14501-dedupe-only-20260429-remote.md) |
| close requires ProjectClownfish fix PR opened/pushed or merge executed first | 6 | [ghcrawl-156593-autonomous-smoke](results/openclaw/ghcrawl-156593-autonomous-smoke.md) |
| fixed_by_candidate close requires a merged fix PR unless allow_unmerged_fix_close: true | 6 | [gitcrawl-339-autonomous-terminal-gap](results/openclaw/gitcrawl-339-autonomous-terminal-gap.md) |
| merge state status is UNSTABLE | 6 | [ghcrawl-156647-autonomous-smoke](results/openclaw/ghcrawl-156647-autonomous-smoke.md) |
| mergeable state is CONFLICTING | 5 | [ghcrawl-156651-autonomous-smoke](results/openclaw/ghcrawl-156651-autonomous-smoke.md) |
| blocked: Duplicate close is blocked on the replacement fix path. | 4 | [ghcrawl-165995-agentic-merge](results/openclaw/ghcrawl-165995-agentic-merge.md) |
| blocked: Blocked by require_fix_before_close until the credited replacement fix PR for #34574 is opened. | 3 | [ghcrawl-199253-agentic-merge](results/openclaw/ghcrawl-199253-agentic-merge.md) |

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
| [#90643](https://github.com/openclaw/openclaw/issues/90643) | issue | Discord mention aliases rewrite @handle inside fenced code when body contains triple-backtick literal | Jun 23, 2026, 05:47 UTC | close_fixed_by_candidate | [gitcrawl-252-autonomous-refresh-20260623a](results/openclaw/gitcrawl-252-autonomous-refresh-20260623a.md) | [report](results/openclaw/gitcrawl-252-autonomous-refresh-20260623a.md) | [28005072169](https://github.com/openclaw/clownfish/actions/runs/28005072169) |
| [#69199](https://github.com/openclaw/openclaw/pull/69199) | pull_request | fix(memory): improve error message when node:sqlite is unavailable | Jun 23, 2026, 02:24 UTC | close_fixed_by_candidate | [close-openclaw-openclaw-69199-fixed-by-95916-20260623a](results/openclaw/close-openclaw-openclaw-69199-fixed-by-95916-20260623a.md) | [report](results/openclaw/close-openclaw-openclaw-69199-fixed-by-95916-20260623a.md) | [27997823512](https://github.com/openclaw/clownfish/actions/runs/27997823512) |
| [#95453](https://github.com/openclaw/openclaw/pull/95453) | pull_request | fix #95407: [Bug]: `cron` tool `add` action mangles certain key names in `job` parameter | Jun 22, 2026, 22:42 UTC | close_fixed_by_candidate | [pr-close-canary-95453-close-fixed-by-20260623a](results/openclaw/pr-close-canary-95453-close-fixed-by-20260623a.md) | [report](results/openclaw/pr-close-canary-95453-close-fixed-by-20260623a.md) | [27988915967](https://github.com/openclaw/clownfish/actions/runs/27988915967) |
| [#93728](https://github.com/openclaw/openclaw/issues/93728) | issue | Implement RFC 0008: Context Engine Runtime Settings | Jun 21, 2026, 08:48 UTC | close_fixed_by_candidate | [gitcrawl-1261-intake-20260621b](results/openclaw/gitcrawl-1261-intake-20260621b.md) | [report](results/openclaw/gitcrawl-1261-intake-20260621b.md) | [27899069192](https://github.com/openclaw/clownfish/actions/runs/27899069192) |
| [#90819](https://github.com/openclaw/openclaw/pull/90819) | pull_request | fix(gateway): pin plugin workspace dir during sessions.list to stop O(rows) metadata scans under concurrency | Jun 18, 2026, 17:46 UTC | close_fixed_by_candidate | [pr-close-canary-90819-current-main-20260618](results/openclaw/pr-close-canary-90819-current-main-20260618.md) | [report](results/openclaw/pr-close-canary-90819-current-main-20260618.md) | [27778309662](https://github.com/openclaw/clownfish/actions/runs/27778309662) |
| [#94490](https://github.com/openclaw/openclaw/pull/94490) | pull_request | fix(compaction): wire aggregate retry timeout through compaction.timeoutSeconds | Jun 18, 2026, 11:03 UTC | close_superseded | [pr-close-canary-94490-20260618a](results/openclaw/pr-close-canary-94490-20260618a.md) | [report](results/openclaw/pr-close-canary-94490-20260618a.md) | [27754974428](https://github.com/openclaw/clownfish/actions/runs/27754974428) |
| [#94489](https://github.com/openclaw/openclaw/pull/94489) | pull_request | fix(cron): default runMode to "due" instead of "force" | Jun 18, 2026, 11:01 UTC | close_superseded | [pr-close-canary-94489-20260618a](results/openclaw/pr-close-canary-94489-20260618a.md) | [report](results/openclaw/pr-close-canary-94489-20260618a.md) | [27754850372](https://github.com/openclaw/clownfish/actions/runs/27754850372) |
| [#65409](https://github.com/openclaw/openclaw/pull/65409) | pull_request | Populate codex-cli tool entries in system prompt report | Jun 18, 2026, 09:43 UTC | close_fixed_by_candidate | [pr-close-canary-65409-20260615-bulk-a](results/openclaw/pr-close-canary-65409-20260615-bulk-a.md) | [report](results/openclaw/pr-close-canary-65409-20260615-bulk-a.md) | [27750820101](https://github.com/openclaw/clownfish/actions/runs/27750820101) |
| [#90754](https://github.com/openclaw/openclaw/pull/90754) | pull_request | feat(control-ui): add toggle to collapse/expand workspace files panel [AI-assisted] | Jun 18, 2026, 09:40 UTC | close_fixed_by_candidate | [pr-close-canary-90754-20260615-a](results/openclaw/pr-close-canary-90754-20260615-a.md) | [report](results/openclaw/pr-close-canary-90754-20260615-a.md) | [27750657939](https://github.com/openclaw/clownfish/actions/runs/27750657939) |
| [#90069](https://github.com/openclaw/openclaw/pull/90069) | pull_request | docs: explain message tool turn termination | Jun 18, 2026, 09:31 UTC | close_fixed_by_candidate | [pr-close-canary-90069-20260615-a](results/openclaw/pr-close-canary-90069-20260615-a.md) | [report](results/openclaw/pr-close-canary-90069-20260615-a.md) | [27750121909](https://github.com/openclaw/clownfish/actions/runs/27750121909) |
| [#92731](https://github.com/openclaw/openclaw/pull/92731) | pull_request | fix(doctor): skip top-level group-allowlist scan when sub-accounts exist | Jun 17, 2026, 03:54 UTC | close_fixed_by_candidate | [pr-close-canary-92731-superseded-20260617-a](results/openclaw/pr-close-canary-92731-superseded-20260617-a.md) | [report](results/openclaw/pr-close-canary-92731-superseded-20260617-a.md) | [27664583043](https://github.com/openclaw/clownfish/actions/runs/27664583043) |
| [#73814](https://github.com/openclaw/openclaw/issues/73814) | issue | [Bug]: Installer hangs and truncates function "warn_shell_path_missing_di" in install.sh presumably due to stdin consumption from "curl \... | Jun 17, 2026, 01:30 UTC | close_duplicate | [issue-close-canary-73814-20260617-batch](results/openclaw/issue-close-canary-73814-20260617-batch.md) | [report](results/openclaw/issue-close-canary-73814-20260617-batch.md) | [27659597043](https://github.com/openclaw/clownfish/actions/runs/27659597043) |
| [#93785](https://github.com/openclaw/openclaw/pull/93785) | pull_request | fix(reasoning-tags): strip MiniMax `mm:` namespaced reasoning tags | Jun 16, 2026, 23:13 UTC | close_fixed_by_candidate | [pr-close-canary-93785-fresh-inventory-close-20260617-a](results/openclaw/pr-close-canary-93785-fresh-inventory-close-20260617-a.md) | [report](results/openclaw/pr-close-canary-93785-fresh-inventory-close-20260617-a.md) | [27654278453](https://github.com/openclaw/clownfish/actions/runs/27654278453) |
| [#58702](https://github.com/openclaw/openclaw/issues/58702) | issue | [Bug] WebChat: Message text covered by action icons after upgrade to 2026.3.31 | Jun 16, 2026, 15:24 UTC | close_fixed_by_candidate | [issue-close-canary-58702-20260616-live-a](results/openclaw/issue-close-canary-58702-20260616-live-a.md) | [report](results/openclaw/issue-close-canary-58702-20260616-live-a.md) | [27628421056](https://github.com/openclaw/clownfish/actions/runs/27628421056) |
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
# 32 live cluster-worker runs by default; tune with CLOWNFISH_MAX_LIVE_WORKERS
# or --max-live-workers. With --wait-for-capacity, dispatch can drain a larger
# file list in capacity-sized waves instead of refusing the whole batch.
CLOWNFISH_MAX_LIVE_WORKERS=32 npm run dispatch -- jobs/openclaw/inbox/cluster-example.md \
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
  --max-live-workers 32 \
  --batch-max-parallel 8 \
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

# Dispatch that full plan lane with lean hydration. Repository-batch admission
# rejects waves whose aggregate matrix width exceeds 32 workers, so this
# high-volume example uses one worker per batch and stays inside the cap.
node scripts/queue-status.mjs \
  --plan-ref-limit 4000 \
  --write-missing-plan /tmp/clownfish-plan-wave-all.txt \
  --allow-app-token-auth
npm run dispatch -- --jobs-file /tmp/clownfish-plan-wave-all.txt \
  --mode plan \
  --dispatch-event repository-batch \
  --allow-app-token-auth \
  --max-live-workers 32 \
  --batch-max-parallel 1 \
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
  --max-live-workers 32 \
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
- optional `CLOWNFISH_MAX_LIVE_WORKERS` variable for dispatch/requeue/self-heal worker fan-out; default is `32`
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
