---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165997-agentic-merge"
mode: "autonomous"
run_id: "24946034991"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24946034991"
head_sha: "56bccb0db44200da8fc6f4a81252127a5c0e77d5"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T02:25:27.942Z"
canonical: "https://github.com/openclaw/openclaw/issues/39392"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39392"
canonical_pr: null
actions_total: 12
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# ghcrawl-165997-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24946034991](https://github.com/openclaw/projectclownfish/actions/runs/24946034991)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/39392

## Summary

Hydration shows an over-broad Control UI stale-selection cluster split across agent-switch drift, explicit reload drift, and initial-load select-state bugs. Kept #39392 as the live canonical issue for the agent-switch subfamily, left all open PRs non-mutating, and escalated only the unresolved maintainer choices around the surviving agent-switch PR path and the broad reload PR #40443.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39392 | keep_canonical | planned | canonical | Best live canonical issue for the agent-switch stale primary-model selector family. |
| #39401 | keep_related | planned | superseded | Directly overlapped by the stronger same-scope PR #39495; kept non-mutating until maintainers choose the surviving PR. |
| #39495 | keep_related | planned | related | Useful narrow candidate for #39392, but not the settled canonical PR path from the available artifact. |
| #40352 | keep_related | planned | fixed_by_candidate | Reload-specific report is tentatively covered by #40443, but it should stay open until that broader fix path is either accepted or narrowed. |
| #40441 | keep_related | planned | superseded | Naive reload fix is superseded by the safer explicit-reload path in #40443. |
| #40443 | needs_human | blocked | needs_human | Maintainer judgment is required before using #40443 as the reload canonical path or superseding other reload PRs with it. |
| #41344 | keep_related | planned | related | Broader regression bundle with unique save-path behavior; not safely deduped into the narrower switch/reload UI cluster. |
| #43013 | keep_related | planned | superseded | Initial-load option-selection approach is functionally superseded by the later follow-up PR #52948. |
| #46275 | keep_related | planned | related | Useful candidate, but not the safest live canonical PR path from the available artifact. |
| #52948 | keep_related | planned | related | Keep open as related work; it is not a safe cluster-wide canonical replacement for the live switch or reload issues. |
| #54724 | keep_related | planned | related | Related follow-up, but too broad and under-hydrated to use as the canonical path from this run. |
| #70633 | needs_human | blocked | needs_human | Maintainer must choose whether #70633 becomes the surviving PR for the agent-switch/first-load subfamily before any supersede or merge recommendation. |

## Needs Human

- Choose the surviving PR for the agent-switch stale-selector family: #39495 is the clean keyed-remount fix, #70633 is the newer select-binding fix, and #46275/#54724 are broader variants; the artifact does not prove which one should supersede the others.
- Decide whether #40443 is acceptable as the reload-specific fix for #40352 or whether a narrower follow-up is required; the PR is broad and still has hydrated Codex review concerns.
