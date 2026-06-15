---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T131654-055"
mode: "plan"
run_id: "27549046114"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549046114"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T13:28:19.734Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 20
---

# pr-inventory-ready_for_maintainer-20260615T131654-055

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549046114](https://github.com/openclaw/clownfish/actions/runs/27549046114)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-mode inventory classification. The compacted preflight artifact hydrated 20 candidate PRs; hydrated non-security open PRs are kept independently for maintainer review, #51822 and #64546 are routed to central security handling, and #75213 is already closed. The remaining listed candidates were not hydrated in the provided artifact, so no close/merge/fix action is planned for them.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 20 |

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
| #89745 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #89767 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #89428 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #59695 | keep_independent | planned | independent | Useful independent PR; no close, merge, or fix action is allowed in this plan job. |
| #89567 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #62063 | keep_independent | planned | independent | Large independent locale PR awaiting maintainer/author path; not a duplicate or close candidate. |
| #74131 | keep_independent | planned | independent | Independent PR with a failing check; keep for maintainer review rather than close or merge. |
| #74136 | keep_independent | planned | independent | Focused independent PR ready for maintainer review; merge remains blocked by job frontmatter. |
| #92725 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #74185 | keep_independent | planned | independent | Independent PR awaiting maintainer/author follow-up; no close or merge action is appropriate in plan mode. |
| #74235 | keep_independent | planned | independent | Independent PR with dirty merge state and broad diff; keep for maintainer review rather than close or merge. |
| #74252 | keep_independent | planned | independent | Focused independent PR ready for maintainer review; merge remains blocked by job frontmatter. |
| #74369 | keep_independent | planned | independent | Focused independent PR ready for maintainer review; no close or merge action is allowed. |
| #74444 | keep_independent | planned | independent | Independent feature/config PR awaiting maintainer/author review; not a close candidate. |
| #89577 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #92996 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #75100 | keep_independent | planned | independent | Independent feature PR with dirty/author-waiting signals; keep for maintainer review rather than close or merge. |
| #75157 | keep_independent | planned | independent | Independent UI PR awaiting maintainer/author path; no duplicate close or merge action is appropriate. |
| #75213 | keep_closed | skipped |  | Already closed in live preflight state. |
| #88901 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #75293 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #77736 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #89800 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #89806 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #89818 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #92243 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #92185 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #89855 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #89864 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #89882 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #87487 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #51822 | route_security | planned | security_sensitive | Credential-handling and secret-exposure claim is security-sensitive for this automation lane. |
| #55901 | keep_independent | planned | independent | Independent feature PR with failing proof and author-waiting status; no close or merge action is appropriate. |
| #92899 | needs_human | blocked | needs_human | Candidate was not hydrated in the artifact, so live state and target_updated_at are unavailable. |
| #64316 | keep_independent | planned | independent | Independent bug-fix PR awaiting maintainer/author path; not a duplicate or close candidate. |
| #64546 | route_security | planned | security_sensitive | Forgery/token/security-boundary claim must be routed to central security handling. |
| #66150 | keep_independent | planned | independent | Independent session-state PR awaiting maintainer/author path; no close or merge action is appropriate. |
| #66174 | keep_independent | planned | independent | Independent PR with failing checks; keep for maintainer/author follow-up rather than close or merge. |
| #66478 | keep_independent | planned | independent | Independent channel bug-fix PR ready for maintainer review; merge remains blocked by job frontmatter. |
| #67432 | keep_independent | planned | independent | Small independent accessibility PR with failing proof/checks; keep for maintainer review rather than close or merge. |

## Needs Human

- #89745 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #89767 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #89428 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #89567 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #92725 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #89577 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #92996 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #88901 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #75293 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #77736 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #89800 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #89806 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #89818 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #92243 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #92185 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #89855 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #89864 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #89882 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #87487 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
- #92899 not hydrated in provided preflight artifact; live state and target_updated_at unavailable.
