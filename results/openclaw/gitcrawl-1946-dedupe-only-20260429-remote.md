---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1946-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130819603"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130819603"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.900Z"
canonical: "https://github.com/openclaw/openclaw/pull/72400"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72400"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1946-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130819603](https://github.com/openclaw/clownfish/actions/runs/25130819603)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72400

## Summary

Preflight shows no security-sensitive hydrated refs. The obsolete representative #63994 is already closed and the repeated-character gateway stream-merge fix is already represented by merged PR #72400 on the provided main context. The remaining open PRs are related follow-up subfamilies, not high-confidence duplicate close targets: WebChat cumulative snapshot rendering (#46985, #47377, #47399, #74498), provider replace/overlap streaming plumbing (#60063), and directive-tag whitespace corruption (#66499). No GitHub mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #63994 | keep_closed | skipped | superseded | Closed canonical hint is historical evidence only; #72400 is the already-merged replacement path for that root cause. |
| #54374 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #46985 | keep_related | planned | related | Related overlapping UI implementation candidate; leave open for maintainer implementation-path choice rather than closing a useful contributor PR. |
| #47377 | keep_related | planned | related | Related UI candidate with useful code; no safe autonomous closeout. |
| #47399 | keep_related | planned | related | Related but not safely closable; useful overlapping PR with unresolved review and broad-diff concerns. |
| #60063 | keep_related | planned | related | Same streaming surface but different provider/protocol problem; keep open as a related candidate. |
| #66499 | keep_related | planned | related | Related gateway follow-up with unresolved review and stale-target concerns; no closure action is safe. |
| #74498 | keep_related | planned | related | Best current UI follow-up candidate, but outside the primary #72400 root cause and not a merge/close target in this dedupe-only run. |

## Needs Human

- none
