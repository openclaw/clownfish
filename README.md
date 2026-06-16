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

Last dashboard update: Jun 16, 2026, 02:25 UTC

<!-- projectclownfish-dashboard:start -->
State: Failed clusters need inspection

Scope: 3674 active latest cluster reports. 4 policy-archived cluster(s) are excluded from health stats; run attempts are tracked as audit history only.

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 3674 | 100% |
| Policy-archived clusters | 4 | audit |
| Clean completed clusters | 2365 | 64.4% |
| Needs-human clusters | 1052 | 28.6% |
| Latest successful clusters | 3509 | 95.5% |
| Latest failed clusters | 103 | 2.8% |
| Latest cancelled clusters | 3 | 0.1% |
| Run attempts archived | 4697 | audit |
| Fix action attempts | 270 | audit |
| Fix actions executed | 1 | 0.4% |
| Fix actions failed | 64 | 23.7% |
| Fix actions blocked | 91 | 33.7% |
| Latest clusters with fix failures | 72 | 2.0% |
| Distinct PRs touched | 6691 | 100% |
| Open PRs tracked | 2952 | 44.1% |
| Closed unmerged PRs tracked | 2997 | 44.8% |
| Completed close actions | 65 | 14.9% |
| Completed merge actions | 26 | 5.9% |
| Duplicate closes | 24 | 36.9% |
| Superseded closes | 21 | 32.3% |
| Fixed-by-candidate closes | 10 | 15.4% |
| Low-signal PR closes | 0 | 0.0% |
| Blocked mutation attempts | 194 | 44.4% |
| Skipped mutation attempts | 152 | 34.8% |

### Clusters Needing Inspection

| Cluster | State | Source job | Reason | Report | Run |
| --- | --- | --- | --- | --- | --- |
| [ghcrawl-156934-autonomous-smoke](results/openclaw/ghcrawl-156934-autonomous-smoke.md) | needs human | jobs/openclaw/outbox/finalized/ghcrawl-156934-autonomous-smoke.md | Security-routed #8147 blocks the canonical WebChat send-shortcut replacement fix lane; central OpenClaw security handling must clear or r... | [report](results/openclaw/ghcrawl-156934-autonomous-smoke.md) | [27589624918](https://github.com/openclaw/clownfish/actions/runs/27589624918) |
| [ghcrawl-157064-autonomous-smoke](results/openclaw/ghcrawl-157064-autonomous-smoke.md) | needs human | jobs/openclaw/outbox/finalized/ghcrawl-157064-autonomous-smoke.md | Automated repair of the one-shot `/think <level> <body>` PR is blocked because #43837 must be routed to central security handling before ... | [report](results/openclaw/ghcrawl-157064-autonomous-smoke.md) | [27589624889](https://github.com/openclaw/clownfish/actions/runs/27589624889) |
| [ghcrawl-156951-autonomous-smoke](results/openclaw/ghcrawl-156951-autonomous-smoke.md) | needs human | jobs/openclaw/outbox/finalized/ghcrawl-156951-autonomous-smoke.md | Route #20786 and #53629 through central OpenClaw security handling before any ProjectClownfish fix PR or closeout work. | [report](results/openclaw/ghcrawl-156951-autonomous-smoke.md) | [27589624467](https://github.com/openclaw/clownfish/actions/runs/27589624467) |
| [ghcrawl-156917-autonomous-smoke](results/openclaw/ghcrawl-156917-autonomous-smoke.md) | needs human | jobs/openclaw/outbox/finalized/ghcrawl-156917-autonomous-smoke.md | Decide whether #67777 should remain a planning/product-review issue with no Clownfish fix PR, or whether maintainers want to override the... | [report](results/openclaw/ghcrawl-156917-autonomous-smoke.md) | [27589624395](https://github.com/openclaw/clownfish/actions/runs/27589624395) |
| [ghcrawl-157058-autonomous-smoke](results/openclaw/ghcrawl-157058-autonomous-smoke.md) | apply blocked | jobs/openclaw/outbox/finalized/ghcrawl-157058-autonomous-smoke.md | close requires Clownfish fix PR opened/pushed, merged candidate fix, or merge executed first | [report](results/openclaw/ghcrawl-157058-autonomous-smoke.md) | [27589609050](https://github.com/openclaw/clownfish/actions/runs/27589609050) |
| [pr-close-canary-92491-20260616-bulk](results/openclaw/pr-close-canary-92491-20260616-bulk.md) | needs human | jobs/openclaw/inbox/pr-close-canary-92491-20260616-bulk.md | #92484 and #92491 were routed to central security handling after deterministic validation classified both PR targets as security-sensitiv... | [report](results/openclaw/pr-close-canary-92491-20260616-bulk.md) | [27589215072](https://github.com/openclaw/clownfish/actions/runs/27589215072) |
| [pr-inventory-mixed-20260616T015330-019](results/openclaw/pr-inventory-mixed-20260616t015330-019.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-019.md | #93354 requires central security review because it appears to alter privileged Discord guild-admin authorization across provider identities. | [report](results/openclaw/pr-inventory-mixed-20260616t015330-019.md) | [27588775193](https://github.com/openclaw/clownfish/actions/runs/27588775193) |
| [pr-inventory-mixed-20260616T015330-024](results/openclaw/pr-inventory-mixed-20260616t015330-024.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-024.md | #77736 and #88684: choose whether the broader explicit-provider routing PR, the smaller runtime-provider PR, or a combined follow-up shou... | [report](results/openclaw/pr-inventory-mixed-20260616t015330-024.md) | [27588776267](https://github.com/openclaw/clownfish/actions/runs/27588776267) |
| [pr-inventory-mixed-20260616T015330-031](results/openclaw/pr-inventory-mixed-20260616t015330-031.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-031.md | #92287: maintainer/technical correctness decision on Telegram typing proof because Real behavior proof passed but Run agentic native Tele... | [report](results/openclaw/pr-inventory-mixed-20260616t015330-031.md) | [27588776240](https://github.com/openclaw/clownfish/actions/runs/27588776240) |
| [pr-inventory-mixed-20260616T015330-046](results/openclaw/pr-inventory-mixed-20260616t015330-046.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-046.md | #70907 maintainer-owned draft docs PR requires maintainer/product correctness judgment after ClawSweeper review findings. | [report](results/openclaw/pr-inventory-mixed-20260616t015330-046.md) | [27588776220](https://github.com/openclaw/clownfish/actions/runs/27588776220) |
| [pr-inventory-mixed-20260616T015330-041](results/openclaw/pr-inventory-mixed-20260616t015330-041.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-041.md | #91274 requires maintainer product/technical judgment on QMD collection de-scoping compatibility and session-state risk. | [report](results/openclaw/pr-inventory-mixed-20260616t015330-041.md) | [27588776186](https://github.com/openclaw/clownfish/actions/runs/27588776186) |
| [pr-inventory-mixed-20260616T015330-040](results/openclaw/pr-inventory-mixed-20260616t015330-040.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-040.md | #92898 requires a maintainer/product decision on the Skill Workshop description limit contract. | [report](results/openclaw/pr-inventory-mixed-20260616t015330-040.md) | [27588776141](https://github.com/openclaw/clownfish/actions/runs/27588776141) |
| [pr-inventory-mixed-20260616T015330-035](results/openclaw/pr-inventory-mixed-20260616t015330-035.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-035.md | #89820: maintainer-owned UI scope/review decision. | [report](results/openclaw/pr-inventory-mixed-20260616t015330-035.md) | [27588775983](https://github.com/openclaw/clownfish/actions/runs/27588775983) |
| [pr-inventory-mixed-20260616T015330-036](results/openclaw/pr-inventory-mixed-20260616t015330-036.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-036.md | #86627: maintainer review and correctness judgment for a large dirty doctor health ordering PR. | [report](results/openclaw/pr-inventory-mixed-20260616t015330-036.md) | [27588775767](https://github.com/openclaw/clownfish/actions/runs/27588775767) |
| [pr-inventory-mixed-20260616T015330-017](results/openclaw/pr-inventory-mixed-20260616t015330-017.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-017.md | #92079 needs maintainer technical/product judgment because the author states the original CLI --force stale providerKey scenario cannot b... | [report](results/openclaw/pr-inventory-mixed-20260616t015330-017.md) | [27588775666](https://github.com/openclaw/clownfish/actions/runs/27588775666) |
| [pr-inventory-mixed-20260616T015330-013](results/openclaw/pr-inventory-mixed-20260616t015330-013.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-013.md | #84975 requires rehydration because the compacted artifact lacks live target_updated_at and PR details. | [report](results/openclaw/pr-inventory-mixed-20260616t015330-013.md) | [27588775585](https://github.com/openclaw/clownfish/actions/runs/27588775585) |
| [pr-inventory-mixed-20260616T015330-026](results/openclaw/pr-inventory-mixed-20260616t015330-026.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-026.md | #73606 requires maintainer/product judgment on the provider-agnostic call SDK RFD scope after author follow-up. | [report](results/openclaw/pr-inventory-mixed-20260616t015330-026.md) | [27588775349](https://github.com/openclaw/clownfish/actions/runs/27588775349) |
| [pr-inventory-mixed-20260616T015330-020](results/openclaw/pr-inventory-mixed-20260616t015330-020.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-020.md | #91519 requires maintainer judgment for broad maintainer-owned QA-lab automation work with failing checks. | [report](results/openclaw/pr-inventory-mixed-20260616t015330-020.md) | [27588775337](https://github.com/openclaw/clownfish/actions/runs/27588775337) |
| [pr-inventory-mixed-20260616T015330-006](results/openclaw/pr-inventory-mixed-20260616t015330-006.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-006.md | #93387 requires maintainer/product judgment because the broad watch action-surface PR has unresolved review-bot findings and a failing ch... | [report](results/openclaw/pr-inventory-mixed-20260616t015330-006.md) | [27588774493](https://github.com/openclaw/clownfish/actions/runs/27588774493) |
| [pr-inventory-mixed-20260616T015330-039](results/openclaw/pr-inventory-mixed-20260616t015330-039.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-039.md | #91728 requires maintainer/provider policy review before merge. | [report](results/openclaw/pr-inventory-mixed-20260616t015330-039.md) | [27588776621](https://github.com/openclaw/clownfish/actions/runs/27588776621) |
| [pr-inventory-mixed-20260616T015330-030](results/openclaw/pr-inventory-mixed-20260616t015330-030.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-030.md | #92342 requires maintainer/product decision on broad draft external-plugin candidate scope and proof requirements. | [report](results/openclaw/pr-inventory-mixed-20260616t015330-030.md) | [27588776440](https://github.com/openclaw/clownfish/actions/runs/27588776440) |
| [pr-inventory-mixed-20260616T015330-021](results/openclaw/pr-inventory-mixed-20260616t015330-021.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-021.md | #89783 requires maintainer technical/product judgment because it is a broad Feishu bot-to-bot feature with ClawSweeper-reported issues be... | [report](results/openclaw/pr-inventory-mixed-20260616t015330-021.md) | [27588775906](https://github.com/openclaw/clownfish/actions/runs/27588775906) |
| [pr-inventory-mixed-20260616T015330-008](results/openclaw/pr-inventory-mixed-20260616t015330-008.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T015330-008.md | #89693 requires maintainer technical-correctness judgment because a human comment flags an over-broad heuristic and real behavior proof i... | [report](results/openclaw/pr-inventory-mixed-20260616t015330-008.md) | [27588774885](https://github.com/openclaw/clownfish/actions/runs/27588774885) |
| [pr-inventory-needs_proof-20260616T013940-011](results/openclaw/pr-inventory-needs_proof-20260616t013940-011.md) | needs human | jobs/openclaw/inbox/pr-inventory-needs_proof-20260616T013940-011.md | #92774 requires maintainer technical judgment because hydrated Codex/Copilot review comments include unresolved correctness concerns and ... | [report](results/openclaw/pr-inventory-needs_proof-20260616t013940-011.md) | [27588299507](https://github.com/openclaw/clownfish/actions/runs/27588299507) |
| [pr-inventory-mixed-20260616T013940-019](results/openclaw/pr-inventory-mixed-20260616t013940-019.md) | needs human | jobs/openclaw/inbox/pr-inventory-mixed-20260616T013940-019.md | #59835: maintainer-labeled open PR appears superseded by merged #86578, but hydrated ClawSweeper comment explicitly says protected mainta... | [report](results/openclaw/pr-inventory-mixed-20260616t013940-019.md) | [27588299256](https://github.com/openclaw/clownfish/actions/runs/27588299256) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [ghcrawl-156857-autonomous-smoke](results/openclaw/ghcrawl-156857-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27585280132](https://github.com/openclaw/clownfish/actions/runs/27585280132) |
| [ghcrawl-156718-autonomous-smoke](results/openclaw/ghcrawl-156718-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27585096705](https://github.com/openclaw/clownfish/actions/runs/27585096705) |
| [ghcrawl-156813-autonomous-smoke](results/openclaw/ghcrawl-156813-autonomous-smoke.md) | failed |  |  | source PR #55789 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27584188260](https://github.com/openclaw/clownfish/actions/runs/27584188260) |
| [ghcrawl-156614-autonomous-smoke](results/openclaw/ghcrawl-156614-autonomous-smoke.md) | blocked |  | clownfish/ghcrawl-156614-autonomous-smoke | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:chang... | [27584186408](https://github.com/openclaw/clownfish/actions/runs/27584186408) |
| [ghcrawl-156765-autonomous-smoke](results/openclaw/ghcrawl-156765-autonomous-smoke.md) | failed |  |  | source PR #42908 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected... | [27584187847](https://github.com/openclaw/clownfish/actions/runs/27584187847) |
| [ghcrawl-156765-autonomous-smoke](results/openclaw/ghcrawl-156765-autonomous-smoke.md) | blocked |  | clownfish/ghcrawl-156765-autonomous-smoke | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests, docs [... | [27584187847](https://github.com/openclaw/clownfish/actions/runs/27584187847) |
| [ghcrawl-156965-autonomous-smoke](results/openclaw/ghcrawl-156965-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27584190187](https://github.com/openclaw/clownfish/actions/runs/27584190187) |
| [ghcrawl-156798-autonomous-smoke](results/openclaw/ghcrawl-156798-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27584188657](https://github.com/openclaw/clownfish/actions/runs/27584188657) |
| [ghcrawl-156690-autonomous-smoke](results/openclaw/ghcrawl-156690-autonomous-smoke.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 | [27584186498](https://github.com/openclaw/clownfish/actions/runs/27584186498) |
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

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| target changed since worker review | 34 | [pr-close-canary-75213-20260615-bulk-a](results/openclaw/pr-close-canary-75213-20260615-bulk-a.md) |
| merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish | 19 | [ghcrawl-156686-autonomous-smoke](results/openclaw/ghcrawl-156686-autonomous-smoke.md) |
| canonical is not listed in job refs | 12 | [gitcrawl-2685-dedupe-only-20260429-remote](results/openclaw/gitcrawl-2685-dedupe-only-20260429-remote.md) |
| job does not allow merge | 12 | [clawsweeper-commit-openclaw-openclaw-806a0119f3cd](results/openclaw/clawsweeper-commit-openclaw-openclaw-806a0119f3cd.md) |
| blocked: Close is blocked on the canonical fix path or fix PR. | 10 | [ghcrawl-165990-agentic-merge](results/openclaw/ghcrawl-165990-agentic-merge.md) |
| candidate fix is not listed in job refs | 9 | [gitcrawl-1934-dedupe-only-20260429-remote](results/openclaw/gitcrawl-1934-dedupe-only-20260429-remote.md) |
| merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review | 8 | [ghcrawl-156679-autonomous-smoke](results/openclaw/ghcrawl-156679-autonomous-smoke.md) |
| target is not listed in job candidates | 8 | [gitcrawl-14501-dedupe-only-20260429-remote](results/openclaw/gitcrawl-14501-dedupe-only-20260429-remote.md) |
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
| _None_ |  |  |  |  |  |

### Latest ProjectClownfish Closures

| Target | Type | Title | Closed | Action | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- | --- |
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
| [#87589](https://github.com/openclaw/openclaw/pull/87589) | pull_request | fix(memory): show signalCount in dreaming promotion annotation (#87588) | Jun 15, 2026, 23:05 UTC | close_superseded | [pr-close-canary-87589-close-wave-20260616a](results/openclaw/pr-close-canary-87589-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-87589-close-wave-20260616a.md) | [27582176513](https://github.com/openclaw/clownfish/actions/runs/27582176513) |
| [#76545](https://github.com/openclaw/openclaw/pull/76545) | pull_request | fix(cron): sweep base cron sessions, not just run sessions | Jun 15, 2026, 23:05 UTC | close_superseded | [pr-close-canary-76545-close-wave-20260616a](results/openclaw/pr-close-canary-76545-close-wave-20260616a.md) | [report](results/openclaw/pr-close-canary-76545-close-wave-20260616a.md) | [27582173703](https://github.com/openclaw/clownfish/actions/runs/27582173703) |
| [#84902](https://github.com/openclaw/openclaw/pull/84902) | pull_request | fix(openai): honor provider thinking profiles | Jun 15, 2026, 13:17 UTC | close_fixed_by_candidate | [pr-close-canary-84902-20260615-bulk-a](results/openclaw/pr-close-canary-84902-20260615-bulk-a.md) | [report](results/openclaw/pr-close-canary-84902-20260615-bulk-a.md) | [27548872820](https://github.com/openclaw/clownfish/actions/runs/27548872820) |
| [#90447](https://github.com/openclaw/openclaw/pull/90447) | pull_request | fix(memory-core): resolve adapter default model for index identity state | Jun 15, 2026, 13:10 UTC | close_superseded | [pr-close-canary-90447-20260615-a](results/openclaw/pr-close-canary-90447-20260615-a.md) | [report](results/openclaw/pr-close-canary-90447-20260615-a.md) | [27548478357](https://github.com/openclaw/clownfish/actions/runs/27548478357) |
| [#78953](https://github.com/openclaw/openclaw/issues/78953) | issue | Docs: memorySearch embedding cache default disagrees with runtime | Jun 15, 2026, 13:05 UTC | close_fixed_by_candidate | [issue-close-canary-78953-20260615-bulk-a](results/openclaw/issue-close-canary-78953-20260615-bulk-a.md) | [report](results/openclaw/issue-close-canary-78953-20260615-bulk-a.md) | [27548192047](https://github.com/openclaw/clownfish/actions/runs/27548192047) |
| [#92759](https://github.com/openclaw/openclaw/pull/92759) | pull_request | fix(memory): guard against missing agentIds in wiki artifact clone and sort | Jun 15, 2026, 12:10 UTC | close_fixed_by_candidate | [pr-close-canary-92759-20260615-volume-a](results/openclaw/pr-close-canary-92759-20260615-volume-a.md) | [report](results/openclaw/pr-close-canary-92759-20260615-volume-a.md) | [27545122661](https://github.com/openclaw/clownfish/actions/runs/27545122661) |
| [#85464](https://github.com/openclaw/openclaw/pull/85464) | pull_request | fix(status): show configured cost for aws-sdk models | Jun 15, 2026, 12:09 UTC | close_fixed_by_candidate | [pr-close-canary-85464-20260615-a](results/openclaw/pr-close-canary-85464-20260615-a.md) | [report](results/openclaw/pr-close-canary-85464-20260615-a.md) | [27545120115](https://github.com/openclaw/clownfish/actions/runs/27545120115) |
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
