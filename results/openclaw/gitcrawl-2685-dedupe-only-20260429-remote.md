---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2685-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134052565"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134052565"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.992Z"
canonical: "https://github.com/openclaw/openclaw/pull/73228"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73228"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2685-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134052565](https://github.com/openclaw/clownfish/actions/runs/25134052565)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73228

## Summary

Hydrated preflight shows #39046 is the only open candidate. Its target-agent hook event routing is already covered by merged #73228 on current main cdb424a64282a073292a0b38f5b82aaa14c9f1eb, with related shared-hook announcement policy landed in #73800. Planned a high-confidence close_superseded for #39046, routed the security-sensitive historical issue #24693 to central security handling, and kept closed context refs evidence-only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39046 | close_superseded | blocked | superseded | canonical is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #24693 | route_security | planned | security_sensitive | Quarantine only the security-sensitive historical issue and continue ordinary non-security cleanup. |
| #39046 | close_superseded | planned | superseded | The only open candidate is obsolete because the same target-agent hook completion/error routing is already merged on current main through #73228. |
| #49234 | keep_closed | skipped | superseded | Closed historical PR; kept as evidence only. |
| #55607 | keep_closed | skipped | related | Closed related hook-policy context; no mutation needed. |
| #55704 | keep_closed | skipped | fixed_by_candidate | Closed issue already covered by the merged shared-hook announcement repair. |
| #55747 | keep_closed | skipped | related | Closed related session-key context; no mutation needed. |
| #55761 | keep_closed | skipped | superseded | Closed source PR superseded by merged replacement #73800. |
| #68667 | keep_closed | skipped | superseded | Closed source PR superseded by merged replacement #73228. |
| #73228 | keep_closed | skipped | canonical | Merged canonical PR; no merge or close action is emitted. |
| #73800 | keep_closed | skipped | canonical | Merged related canonical PR; no merge or close action is emitted. |

## Needs Human

- none
