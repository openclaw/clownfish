---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-092"
mode: "plan"
run_id: "27560323972-1-94"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T09:55:06.146Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 5
---

# pr-inventory-ready_for_maintainer-20260615T154534-092

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification. This shard is not a dedupe cluster; no shared canonical was selected, no GitHub mutations were planned, and each listed PR is classified independently from the hydrated preflight artifact where available.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 5 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #77875 | keep_independent | planned | independent | Independent ready-for-maintainer PR; no duplicate/superseded evidence and merge is blocked by job frontmatter. |
| #77877 | keep_independent | planned | independent | Independent gateway feature/fix PR; related to #77875 by Bug #9 but covers a different implementation surface, so no closeout is safe. |
| #77904 | keep_independent | planned | independent | Independent focused CLI PR; no duplicate or closure basis. |
| #78606 | keep_independent | planned | independent | Independent message-delivery PR; status/compatibility risk warrants maintainer review rather than closure. |
| #93038 | needs_human | blocked | needs_human | Missing hydrated live state for a listed candidate; maintainer/applicator should rehydrate before classification. |
| #78668 | keep_independent | planned | independent | Independent feature PR; no duplicate/superseded evidence and merge is not allowed in this job. |
| #78715 | keep_independent | planned | independent | Low-signal/docs-only PR is not closable under this job because low-signal closeout is disabled; keep independent for maintainer handling. |
| #78741 | keep_independent | planned | independent | Independent session-state PR with substantial comment history but no hydrated maintainer comments; keep for maintainer review. |
| #78747 | keep_independent | planned | independent | Independent focused agents/cache PR; no duplicate or closure basis. |
| #78765 | keep_independent | planned | independent | Independent focused TUI PR; no duplicate/superseded evidence. |
| #78839 | keep_independent | planned | independent | Draft PR with failing actionlint is not closable under this job; keep independent for author/maintainer follow-up. |
| #78852 | keep_independent | planned | independent | Independent agents performance PR; no duplicate or closure basis. |
| #42637 | keep_independent | planned | independent | Independent skills PR with unresolved review-bot preflight gaps for merge only; keep for maintainer review. |
| #78884 | keep_independent | planned | independent | Independent docs PR; no duplicate or closure basis. |
| #78931 | keep_independent | planned | independent | Independent test PR with failing proof check; keep for author/maintainer follow-up rather than close. |
| #78964 | keep_independent | planned | independent | Independent message-delivery PR with failing check and review-bot preflight gaps; keep for maintainer/author follow-up. |
| #78966 | keep_closed | skipped | superseded | Already closed; no action to apply. |
| #59859 | keep_independent | planned | independent | Broad independent feature PR with failing proof; no low-signal or superseded closeout is enabled by job frontmatter. |
| #93055 | needs_human | blocked | needs_human | Missing hydrated live state for a listed candidate; rehydrate before classification. |
| #79049 | keep_independent | planned | independent | Independent UI i18n PR with failing checks; keep for maintainer/author follow-up. |
| #90154 | keep_independent | planned | independent | Independent gateway/auth-provider hardening PR; keep for maintainer review because merge/fix actions are blocked. |
| #90169 | needs_human | blocked | needs_human | Missing hydrated live state for a listed candidate; rehydrate before classification. |
| #90184 | needs_human | blocked | needs_human | Missing hydrated live state for a listed candidate; rehydrate before classification. |
| #77710 | keep_independent | planned | independent | Independent small docs/command-summary PR; no duplicate or closure basis. |
| #90202 | needs_human | blocked | needs_human | Missing hydrated live state for a listed candidate; rehydrate before classification. |

## Needs Human

- #93038 missing hydrated live state in compacted preflight artifact.
- #93055 missing hydrated live state in compacted preflight artifact.
- #90169 missing hydrated live state in compacted preflight artifact.
- #90184 missing hydrated live state in compacted preflight artifact.
- #90202 missing hydrated live state in compacted preflight artifact.
