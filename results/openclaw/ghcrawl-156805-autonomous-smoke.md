---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156805-autonomous-smoke"
mode: "autonomous"
run_id: "25039479679"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25039479679"
head_sha: "9df5f4e9a92398a6f1ec7b56908b3d4f37000a73"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T07:27:18.150Z"
canonical: "https://github.com/openclaw/openclaw/issues/44424"
canonical_issue: "https://github.com/openclaw/openclaw/issues/44424"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156805-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25039479679](https://github.com/openclaw/clownfish/actions/runs/25039479679)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/44424

## Summary

The original representative #44394 is already closed as a duplicate of #44424, so #44424 is the live canonical issue for the remaining intermittent Telegram cross-topic send reliability failure. No merge or close is safe in this run because there is no hydrated PR or merged fix proving the intermittent network-failure mode is resolved; emit a narrow fix artifact for #44424 and keep the linked topic-name resolver #43231 open as related but separate work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=extensions, extensionTests, docs [check:changed] extensions/telegram/src/send.proxy.test.ts: extension test [check:changed] extensions/telegram/src/send.test.ts: extension test [check:changed] extensions/telegram/src/send.ts: extension production [check:changed] conflict markers [check:changed] changelog attributions [check:changed] guarded extension wildcard re-exports [check:changed] plugin-sdk wildcard re-exports [check:changed] typecheck extensions [check:changed] typecheck extension tests [check:changed] lint extensions [check:changed] summary 431ms ok conflict markers 167ms ok changelog attributions 185ms ok guarded extension wildcard re-exports 176ms ok plugin-sdk wildcard re-exports 1.77s ok typecheck extensions 1.92s ok typecheck extension tests 16.35s failed:1 lint extensions |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #21162 | keep_closed | skipped | related | Closed historical context only. |
| #32949 | keep_closed | skipped | related | Closed historical context only. |
| #41531 | keep_closed | skipped | related | Closed historical context only. |
| #43231 | keep_related | planned | related | Keep open as a separate Telegram topic-name resolver capability issue. |
| #44268 | keep_closed | skipped | related | Closed historical context only. |
| #44394 | keep_closed | skipped | duplicate | Already closed duplicate of the live canonical #44424. |
| #44424 | keep_canonical | planned | canonical | Use #44424 as the canonical open issue for the remaining Telegram outbound reliability bug. |
| #44424 | fix_needed | planned | canonical | No viable canonical PR exists; build a narrow new fix PR artifact for the #44424 reliability path. |
| #44926 | keep_closed | skipped | related | Closed historical context only. |
| cluster:ghcrawl-156805-autonomous-smoke | build_fix_artifact | planned | canonical | Prepare executor-owned fix work for the canonical Telegram outbound reliability issue. |

## Needs Human

- none
