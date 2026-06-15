---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238803-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107668920"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107668920"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.636Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-238803-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107668920](https://github.com/openclaw/clownfish/actions/runs/25107668920)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

No GitHub mutations are safe from this dedupe-only pass. The hydrated artifact shows no security-sensitive refs, but the open PRs are useful, overlapping, and not closeable without a settled canonical path. #62775 remains the representative, but its broad unrelated delta and unresolved P1/P2 bot findings make the canonical/repair choice a maintainer decision.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #52126 | keep_closed | skipped | superseded | Already closed in live state; keep as historical evidence only. |
| #52759 | keep_related | planned | related | Same symptom family, but it carries distinct read-offset scope and unresolved review/check blockers; it is not a high-confidence duplicate close. |
| #56403 | keep_related | planned | related | Overlaps the default-enable/generic_repeat family but remains a useful, blocked implementation candidate rather than a safe close target. |
| #62775 | needs_human | blocked | needs_human | Canonical choice is unclear because the representative is broad, unresolved, and conflicts with narrower open candidates. |
| #68673 | keep_related | planned | related | Same subsystem but a distinct root cause; keep open outside the default-enable dedupe decision. |
| #70877 | keep_related | planned | related | Same symptom family but incomplete and blocked; without a settled canonical or replacement path, it should stay open. |

## Needs Human

- Maintainer decision needed for the canonical path: whether to split/repair #62775 despite broad unrelated changes, prefer a narrower open candidate such as #56403/#52759/#70877, or create a separate follow-up job for a narrow loop-detection default/generic_repeat fix.
