---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2967-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134568002"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134568002"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T21:30:52.953Z"
canonical: "https://github.com/openclaw/openclaw/pull/41624"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/41624"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2967-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134568002](https://github.com/openclaw/clownfish/actions/runs/25134568002)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41624

## Summary

Preflight at main 9b536ed3a925d629dcc507525684b2743258553c shows no security-sensitive refs. The closed representative #48552 is obsolete; #41624 is the current open dedupe-parent only for the Playwright cache ownership subfamily, while the other open PRs are related or independent follow-ups with active review or check blockers. No close, merge, fix, or PR-opening action is planned; closed candidates are recorded only as skipped keep_closed entries.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48552 | keep_closed | skipped | fixed_by_candidate | Closed representative is historical evidence only; no open cluster-wide canonical replaces the entire over-broad Docker/runtime family. |
| #41624 | keep_canonical | planned | canonical | Current open canonical only for the Playwright cache ownership subfamily; failing checks and maintainer review block merge or fixed-by closeout. |
| #42771 | keep_related | planned | related | Related alternate Playwright browser path proposal with active contributor signal and unresolved review findings; not a duplicate closeout target. |
| #47660 | keep_related | planned | related | Related Docker build refactor with unresolved review/check risk; leave open and do not close as duplicate or superseded. |
| #52176 | keep_independent | planned | independent | Independent Docker feature PR with active review blockers; no dedupe closure or fix artifact is appropriate in this job. |
| #55933 | keep_related | planned | related | Related Docker build-cache improvement; it is not a duplicate of the closed representative and should stay open. |
| #60052 | keep_closed | skipped | related | Already closed candidate; no mutation is valid. |
| #61167 | keep_related | planned | related | Related but broad Docker setup follow-up with failing checks and review blockers; keep open and do not close or merge. |
| #64485 | keep_closed | skipped | related | Already closed candidate; no mutation is valid. |
| #65561 | keep_closed | skipped | related | Already closed runtime-entry candidate; no mutation is valid. |
| #65735 | keep_closed | skipped | related | Already closed runtime-entry candidate; no mutation is valid. |
| #65962 | keep_related | planned | related | Related runtime-sidecar packaging follow-up, not a duplicate closeout item; keep open for normal PR review. |

## Needs Human

- none
