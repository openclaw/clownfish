---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-021"
mode: "plan"
run_id: "27549042584"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549042584"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.588Z"
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
needs_human_count: 0
---

# pr-inventory-needs_proof-20260615T131654-021

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549042584](https://github.com/openclaw/clownfish/actions/runs/27549042584)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification for 40 hydrated PR refs. No GitHub mutations are planned because this is not a dedupe cluster, merge/fix/raise_pr are blocked, low-signal closeout is disabled, and the hydrated artifact does not prove boring duplicate/superseded closure for open contributor PRs. Already-closed PRs are recorded as skipped keep_closed. One plaintext API-key caching PR is routed to central security handling.

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
| #92284 | keep_independent | planned | independent | Useful open contributor PR with passing proof but no allowed merge/fix action. |
| #92723 | keep_independent | planned | independent | Failing proof blocks merge/fixed-by closeout, but the PR is independently scoped. |
| #92726 | keep_related | planned | related | Related Windows restart work, not proven duplicate. |
| #91682 | keep_independent | planned | independent | Standalone UI PR; no closure or merge action allowed. |
| #92517 | keep_independent | planned | independent | Independently scoped Discord behavior PR with insufficient proof for merge. |
| #92755 | keep_related | planned | related | Same issue family as #92822, but closure would be premature without proof that one contributor PR safely supersedes the other. |
| #91800 | keep_independent | planned | independent | Standalone broad API/hook PR; no dedupe closure. |
| #92763 | keep_independent | planned | independent | Independent provider compatibility PR with failing proof. |
| #92774 | keep_independent | planned | independent | Independent availability/session-state PR with failing proof. |
| #92756 | keep_related | planned | related | Related to #92682, but no close action planned in this inventory shard. |
| #92762 | keep_independent | planned | independent | Independent message-delivery PR awaiting proof/re-review. |
| #92759 | keep_closed | skipped |  | Already closed in live preflight state. |
| #91668 | keep_independent | planned | independent | Useful independent PR; failing checks block merge. |
| #88192 | keep_independent | planned | independent | Independent session-state PR with failing proof. |
| #90216 | keep_independent | planned | independent | Independent provider contract PR with failing behavior proof. |
| #88850 | keep_independent | planned | independent | Independent channel PR with insufficient proof and failing checks. |
| #88883 | keep_independent | planned | independent | Independent TS/auth correctness PR with failing proof/checks. |
| #92822 | keep_related | planned | related | Related to #92755 but not safely closable in plan mode. |
| #48396 | keep_independent | planned | independent | Independent UI feature PR; proof failure blocks merge. |
| #92831 | keep_independent | planned | independent | Independent channel PR with failing proof/checks. |
| #92682 | keep_related | planned | related | Related to #92756; likely stronger candidate but no closure planned. |
| #92420 | keep_independent | planned | independent | Standalone useful Telegram PR; no mutation planned. |
| #92716 | keep_related | planned | related | Related Windows restart work, not a duplicate closeout. |
| #92660 | keep_independent | planned | independent | Independent plugin compatibility PR. |
| #92770 | keep_independent | planned | independent | Independent provider/media compatibility PR. |
| #52120 | keep_independent | planned | independent | Independent channel PR with failing proof/checks. |
| #92847 | keep_independent | planned | independent | Independent extension PR; merge blocked by job policy. |
| #92867 | keep_independent | planned | independent | Independent Windows path handling PR. |
| #50454 | keep_independent | planned | independent | Independent session-state PR with failing proof. |
| #92893 | keep_independent | planned | independent | Independent channel PR. |
| #92878 | keep_independent | planned | independent | Independent Telegram behavior PR with failing proof. |
| #92929 | keep_independent | planned | independent | Independent agent/session PR with failing checks. |
| #55085 | keep_closed | skipped |  | Already closed in live preflight state. |
| #55390 | keep_independent | planned | independent | Independent broad WIP PR with failing checks; no low-signal closeout allowed. |
| #55742 | keep_closed | skipped |  | Already closed in live preflight state. |
| #55861 | keep_independent | planned | independent | Independent UI bugfix PR with failing proof/checks. |
| #56031 | keep_independent | planned | independent | Independent agent runner PR with failing proof/checks. |
| #92932 | route_security | planned | security_sensitive | Plaintext API key caching is security-sensitive under the worker security boundary. |
| #90833 | keep_independent | planned | independent | Independent UI feature PR with failing checks. |
| #90855 | keep_independent | planned | independent | Independent broad recovery PR; no merge/fix action allowed. |

## Needs Human

- none
