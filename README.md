<img width="1584" height="672" alt="image" src="https://github.com/user-attachments/assets/ba1571d9-785e-47df-92b6-ce90681ca8e4" />

# 🐠 Project Clownfish

ProjectClownfish is a conservative OpenClaw maintainer tool for one-cluster issue and PR cleanup.

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

Security-sensitive clusters are deliberately out of scope. Anything that smells
like a vulnerability, advisory, leaked secret, credential/token exposure,
plaintext secret storage, SSRF/XSS/CSRF/RCE, security-class injection, or sensitive-data
exposure is skipped at import time and routed to central OpenClaw security
handling. ProjectClownfish is a backlog cleanup tool, not a security triage
queue.

## Status

ProjectClownfish is intentionally smaller than ClawSweeper. ClawSweeper scans the whole OpenClaw backlog on a cadence; ProjectClownfish handles targeted clusters that were already grouped by a human, ghcrawl, or another dedupe tool.

Cluster discovery currently comes from [vincentkoc/ghcrawl](https://github.com/vincentkoc/ghcrawl). That repository is expected to migrate into the OpenClaw organization soon.

<img width="3582" height="2160" alt="image" src="https://github.com/user-attachments/assets/20b816cc-72ab-479e-bc18-84f5b2b53745" />

The default workflow is proposal-first. It does not comment or close unless a job is explicitly promoted and the deterministic applicator confirms live GitHub state has not changed.

## Dashboard

Last dashboard update: Apr 26, 2026, 00:55 UTC

<!-- projectclownfish-dashboard:start -->
State: Blocked actions need triage

Scope: 27 latest cluster reports. Run attempts are tracked as audit history only.

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 27 | 100% |
| Clean completed clusters | 7 | 25.9% |
| Needs-human clusters | 20 | 74.1% |
| Latest successful clusters | 27 | 100.0% |
| Latest failed clusters | 0 | 0.0% |
| Latest cancelled clusters | 0 | 0.0% |
| Run attempts archived | 34 | audit |
| Distinct PRs touched | 110 | 100% |
| ProjectClownfish merged PRs | 0 | 0.0% |
| Open PRs tracked | 86 | 78.2% |
| Closed unmerged PRs tracked | 18 | 16.4% |
| Completed close actions | 16 | 88.9% |
| Duplicate closes | 16 | 100.0% |
| Superseded closes | 0 | 0.0% |
| Fixed-by-candidate closes | 0 | 0.0% |
| Low-signal PR closes | 0 | 0.0% |
| Blocked mutation attempts | 2 | 11.1% |
| Skipped mutation attempts | 0 | 0.0% |

### Recent ProjectClownfish Merges

| PR | Title | Merged | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- |
| _None yet_ |  |  |  |  |  |
<!-- projectclownfish-dashboard:end -->

## How It Works

Each cluster job:

1. Starts from one markdown job file under `jobs/`.
2. Hydrates the listed issue/PR refs and first-hop linked refs.
3. Builds a cluster plan and fix artifact for autonomous jobs.
4. Runs Codex with repo-local policy prompts and JSON output schema in a read-only sandbox.
5. Writes structured run artifacts under `.projectclownfish/runs/`.
6. Reviews the worker artifact with deterministic safety checks.
7. Applies only safe close/comment actions through `scripts/apply-result.mjs`.
8. Publishes a sanitized result ledger back to this repo under `results/`, `closed/`, `apply-report.json`, and this README dashboard.

Codex does not receive a GitHub token. The runner preflights GitHub state before model execution, then Codex receives those artifacts and returns JSON only. The applicator re-fetches the target item, checks `updated_at`, blocks maintainer-authored items, writes an idempotent close comment, and closes only supported duplicate/superseded/fixed-by-candidate actions.

Runs for the same job path and mode are queued instead of running concurrently. The workflow uses Node 24 and `ubuntu-latest` for ClawSweeper parity; other hosted runners are opt-in.

Full worker prompts, Codex transcripts, and raw artifacts stay in GitHub Actions. The committed ledger keeps only the cluster summary, run URL, action counts, apply outcomes, closed targets, and needs-human entries.

## Modes

- `plan`: produces recommendations only.
- `execute`: can apply reviewed safe close actions from structured JSON.
- `autonomous`: adds live cluster preflight and fix-artifact generation. It may recommend a canonical fix path, but direct mutation still goes through the applicator.
- `needs_human`: any unclear canonical choice, stale cluster state, failing checks, conflict, broad fix, or independent report should land here.
- Automated reviewer feedback must be cleared during autonomous PR work. Greptile, Codex, Asile, CodeRabbit, Copilot, and similar bot comments must be addressed, proven non-actionable, or escalated before any merge or post-merge closeout recommendation.

## Local Run

Requires Node 24.

```bash
# Validate all job files.
npm run validate

# Render a plan-mode prompt without running Codex.
npm run render -- jobs/openclaw/cluster-example.md --mode plan

# Dry-run a worker without calling Codex.
npm run worker -- jobs/openclaw/cluster-example.md --mode plan --dry-run

# Build an offline autonomous cluster/fix artifact.
npm run build-fix-artifact -- jobs/openclaw/autonomous-example.md --offline

# Stage low-signal PR sweep jobs from local ghcrawl data.
npm run import-low-signal -- --limit 20 --batch-size 5 --mode autonomous --sort stale

# Stage the next largest active ghcrawl clusters, skipping already-imported and
# security-sensitive clusters by default.
npm run import-ghcrawl -- --from-ghcrawl --limit 40 --mode autonomous --suffix autonomous-smoke --allow-instant-close

# Find failed cluster jobs that have not been superseded by a later success.
npm run self-heal

# Retry failed jobs once. This briefly opens the execution gate, waits for the
# dispatched workers to start, records the self-heal ledger, and closes the gate.
npm run self-heal -- --execute --open-execute-window --max-jobs 5 --runner ubuntu-latest
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
- an execution gate that defaults off
- optional `CLOWNFISH_CODEX_CLI_VERSION` variable to pin and refresh the cached Codex CLI

Keep exact secret names, token scopes, and execution-window procedures in private operations docs or repository settings notes. Do not put token values or live operational credentials in job files.
