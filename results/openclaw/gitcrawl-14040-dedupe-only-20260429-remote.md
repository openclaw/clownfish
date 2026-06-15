---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14040-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129102705"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129102705"
head_sha: "c6792f0250a6710fb4bca0bf6ba7777e5c4f0fbc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.812Z"
canonical: "https://github.com/openclaw/openclaw/pull/45673"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/45673"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14040-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129102705](https://github.com/openclaw/clownfish/actions/runs/25129102705)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/45673

## Summary

Hydrated preflight shows no security-sensitive refs. The open canonical path remains #45673 for the Feishu tool account-resolution family, but this dedupe-only job cannot merge or repair it and its checks/review state are not merge-clean. The other open PRs are useful but related or independent follow-ups, not safe duplicate/superseded closeouts.

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
| #45673 | keep_canonical | planned | canonical | Canonical PR is open and useful, but this run may only classify/close/comment/label and does not have merge or fix authority. |
| #41306 | keep_related | planned | related | Related Feishu chat-tool work, not a duplicate of the canonical tool-account resolution PR. |
| #57541 | keep_independent | planned | independent | Independent docs/test cleanup choice; do not close or fold into the account-routing canonical. |
| #59420 | keep_closed | skipped | fixed_by_candidate | Historical closed context only; no action to apply. |
| #68443 | keep_related | planned | related | Related Feishu list-action feature work with unresolved review findings; keep open for maintainer comparison rather than close as duplicate. |
| #68455 | keep_related | planned | related | Related provider/onboarding gap with unresolved implementation blockers; not a duplicate/superseded closeout for this dedupe-only cluster. |

## Needs Human

- none
