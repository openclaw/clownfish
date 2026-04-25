---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143793-autonomous-smoke"
mode: "autonomous"
run_id: "24937904802"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24937904802"
head_sha: "30ab2327f6f8b0ff0fe89a5e798b06494ef7e237"
workflow_conclusion: "failure"
result_status: "needs_human"
published_at: "2026-04-25T23:09:32.092Z"
canonical: "https://github.com/openclaw/openclaw/issues/70678"
canonical_issue: "https://github.com/openclaw/openclaw/issues/70678"
canonical_pr: "https://github.com/openclaw/openclaw/pull/71466"
actions_total: 50
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 4
---

# ghcrawl-143793-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24937904802](https://github.com/openclaw/projectclownfish/actions/runs/24937904802)

Workflow conclusion: failure

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/70678

## Summary

Using the provided 2026-04-25 preflight artifact as live GitHub state, the closed representative #62258 is obsolete for new dedupe work. The surviving canonical issue is #70678, with open draft PR #71466 as the current linked fix path. I did not emit any new close/comment/label mutations: the remaining open issues fall into distinct QR/auth, 408 keepalive, stale-socket/message-loss, discovery, or mixed-symptom subfamilies, and #71466 is not yet merge-ready.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 50 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 4 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #13544 | keep_related | executed | related | Historical related report only; leave as related context, not canonical duplicate. |
| #14000 | keep_related | executed | related | Same family, different user-visible failure. |
| #19907 | keep_related | executed | related | Distinct QR/auth root cause. |
| #24947 | keep_related | executed | related | Distinct QR pairing subfamily. |
| #40079 | keep_independent | executed | independent | Adjacent delivery-queue work, outside this root-cause family. |
| #45198 | keep_related | executed | related | Same area, different failure mode. |
| #45387 | keep_related | executed | related | Related listener-state regression, not direct duplicate. |
| #45391 | keep_related | executed | related | Related degraded-socket symptom, not duplicate. |
| #45474 | keep_related | executed | related | Keep open as related auth/conflict failure. |
| #46372 | keep_related | executed | related | Related restart-window message-loss issue. |
| #46518 | keep_related | executed | related | Keep open as related QR pairing issue. |
| #47154 | keep_related | executed | related | Related stale-socket/send-path race, not duplicate. |
| #47367 | keep_related | executed | related | Keep open as related QR/login issue. |
| #47527 | keep_related | executed | related | Related inbound-delivery symptom. |
| #49057 | keep_related | executed | related | Keep open as related listener/logout regression. |
| #50684 | keep_related | executed | related | Keep open as related message-loss issue. |
| #51111 | keep_related | executed | related | Keep open as related QR/auth issue. |
| #54322 | keep_independent | executed | independent | Separate delivery-queue feature track. |
| #54332 | close_duplicate | skipped | duplicate | Already closed duplicate of the surviving canonical issue. |
| #54614 | keep_related | executed | related | Preserve as related stale-socket/health-monitor report. |
| #55030 | close_duplicate | skipped | duplicate | Already closed duplicate of the quiet-socket canonical issue. |
| #55246 | close_duplicate | skipped | duplicate | Already closed duplicate of #70678. |
| #55752 | keep_related | executed | related | Preserve as related creds-corruption report. |
| #56054 | keep_related | executed | related | Related mixed creds/reconnect report. |
| #57718 | keep_related | executed | related | Related creds persistence issue. |
| #58480 | keep_related | executed | related | Related creds-race issue. |
| #59107 | keep_related | executed | related | Related degraded-socket outbound issue. |
| #59275 | keep_related | executed | related | Related reconnect-window message-loss issue. |
| #59589 | close_duplicate | skipped | duplicate | Already closed duplicate of the surviving quiet-socket canonical issue. |
| #60136 | keep_related | executed | related | Related creds rotation issue. |
| #60337 | close_duplicate | skipped | duplicate | Already closed duplicate of #70678. |
| #60378 | close_duplicate | skipped | duplicate | Already closed duplicate of the quiet-session reconnect family. |
| #60625 | keep_related | executed | related | Related credential-warning issue. |
| #60626 | close_duplicate | skipped | duplicate | Already closed duplicate of the quiet-session watchdog root cause. |
| #61326 | close_duplicate | skipped | duplicate | Already closed duplicate of #70678. |
| #61663 | keep_related | executed | related | Related QR/auth issue. |
| #61744 | keep_related | executed | related | Keep open as related mixed discovery-plus-reconnect report. |
| #62258 | close_duplicate | skipped | duplicate | Closed representative is obsolete for current dedupe routing; use #70678 as the surviving canonical issue. |
| #63410 | keep_related | executed | related | Keep open as related 408 keepalive report. |
| #63496 | keep_related | executed | related | Related creds-write issue. |
| #63855 | keep_related | executed | related | Keep open as related stale-socket issue. |
| #64553 | keep_related | executed | related | Related QR rotation issue. |
| #65215 | keep_related | executed | related | Keep open as related config-surface issue rather than auto-close. |
| #65290 | keep_related | executed | related | Related credential-corruption loop. |
| #65427 | close_superseded | skipped | superseded | Do not use this closed, broad, failing refactor as the canonical fix path; the narrower current candidate is #71466. |
| #66917 | needs_human | blocked | needs_human | Broad mixed-symptom report spans multiple subfamilies; unsafe to auto-dedupe without human triage. |
| #66920 | keep_related | executed | related | Keep open as related group-inbound failure. |
| #70678 | keep_canonical | executed | canonical | This is the live surviving canonical issue for the quiet-socket reconnect family; it replaces closed representative #62258 for any future dedupe routing. |
| #70856 | needs_human | blocked | needs_human | Platform-specific mixed listener failure is too broad and ambiguous for safe duplicate closure in this cluster. |
| #71466 | merge_candidate | blocked | needs_human | This is the current candidate fix path for #70678, but it is not merge-ready and is not safe to use for fixed-by-candidate closeout yet. |

## Needs Human

- PR #71466 is the current fix path for quiet-socket reconnects, but it is still draft and substantive repository checks are skipped, so no merge recommendation or fixed-by-candidate closeout is safe in this run.
- Closed PR #65427 cannot serve as the canonical fix path because it is already closed, has failing checks, and carries a broad 19-file refactor delta.
- Issues #66917 and #70856 each bundle multiple root causes and/or platform-specific behavior, so they need separate human triage or follow-up clusters instead of dedupe closure.
- Issues #61744 and #65215 retain unique remaining scope beyond the quiet-socket duplicate path (discovery emptiness and operator-config surface), so they were left open as related rather than auto-closed.
