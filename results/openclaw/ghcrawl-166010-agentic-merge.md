---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166010-agentic-merge"
mode: "autonomous"
run_id: "24946043420"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24946043420"
head_sha: "56bccb0db44200da8fc6f4a81252127a5c0e77d5"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T02:18:55.124Z"
canonical: "https://github.com/openclaw/openclaw/issues/37706"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37706"
canonical_pr: null
actions_total: 13
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 3
---

# ghcrawl-166010-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24946043420](https://github.com/openclaw/projectclownfish/actions/runs/24946043420)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/37706

## Summary

Using the hydrated preflight artifact as live state, #37706 is the clearest surviving canonical issue for the Feishu `@_all` false-positive. #39568/#39569 are independent reply-routing work, #49770 is blocked by the security boundary, and the remaining PRs stay open as related because the cluster does not contain a single merge-ready canonical PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 3 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #37706 | keep_canonical | planned | canonical | Open issue #37706 is the best live canonical tracker for the raw `@_all` false-positive while PR direction remains unresolved. |
| #39568 | keep_independent | planned | independent | #39568 is a different Feishu reply/thread bug and should not be deduped into this `@all` cluster. |
| #39569 | keep_independent | planned | independent | #39569 belongs to a separate Feishu reply-handling bug family and is out of scope for this cluster. |
| #49761 | keep_related | planned | related | #49761 is related to the same root bug, but it bakes in one specific opt-in behavior choice and should stay separate from the canonical bug tracker. |
| #44256 | keep_related | planned | related | #44256 is a useful related candidate fix, but it is not merge-ready and cannot be promoted to canonical without maintainer choice and clean validation. |
| #49767 | keep_related | planned | related | #49767 is a related config-oriented candidate, but it is not safe to treat as canonical while review findings and behavior direction remain unresolved. |
| #49770 | needs_human | blocked | needs_human | Security boundary: route #49770 to central OpenClaw security triage and do not process it further in this cluster. |
| #50144 | keep_related | planned | related | #50144 stays open only as related context because its config approach still has unresolved correctness and validation blockers. |
| #50394 | keep_related | planned | related | #50394 is related overlapping work, but there is insufficient evidence to elevate it over the other open minimal-fix candidates. |
| #50801 | keep_related | planned | related | #50801 remains related overlapping work and should stay open until maintainers choose a canonical landing path. |
| #58867 | keep_related | planned | related | #58867 is related config work, but unresolved review findings and failing validation block canonical treatment. |
| #59401 | keep_related | planned | related | #59401 is a related feature-request thread that should remain separate from the canonical root-bug issue. |
| #59422 | keep_related | planned | related | #59422 is related feature work with unresolved correctness bugs and failing validation, so it cannot serve as the canonical path. |

## Needs Human

- Route #49770 to central OpenClaw security handling because the hydrated artifact marks it security-sensitive after CWE-807/security discussion; ProjectClownfish must not mutate or close it.
- Maintainer decision is still required on behavior direction for the root bug: ship the minimal default-ignore-`@all` behavior tracked by #37706 and minimal PRs (#44256/#50394/#50801), or intentionally add an opt-in/ignore configuration surface (#49767/#50144/#58867/#59422/#59401).
- No canonical PR is merge-ready from the hydrated artifact: #44256 has failing checks, #49767 still has unresolved bot-review findings and incomplete validation evidence, and the later variants also carry P1 findings and/or failing checks.
