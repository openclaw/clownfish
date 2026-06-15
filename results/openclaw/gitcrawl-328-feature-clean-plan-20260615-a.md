---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-328-feature-clean-plan-20260615-a"
mode: "plan"
run_id: "27523901205"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523901205"
head_sha: "654d0f6d994e0cc77c0c4725aa1626ba02f19a57"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:26:12.340Z"
canonical: "#45508"
canonical_issue: "#45508"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-328-feature-clean-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523901205](https://github.com/openclaw/clownfish/actions/runs/27523901205)

Workflow conclusion: success

Worker result: planned

Canonical: #45508

## Summary

Plan-mode classification only. #45508 remains the open canonical issue for the WebChat provider-backed voice gap. #76027 is security-sensitive in the hydrated artifact and should be routed to central OpenClaw security handling without merge, close, label, or comment planning. #91025 is already closed and remains historical duplicate context only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #45508 | keep_canonical | planned | canonical | #45508 is still the best surviving canonical because it covers the full TTS and STT provider-backed WebChat voice feature family and remains open for maintainer follow-up. |
| #76027 | route_security | planned | security_sensitive | #76027 is related to #45508's TTS path, but the hydrated artifact marks it security-sensitive; route only this PR to central security handling and continue non-security classification for #45508. |
| #91025 | keep_closed | skipped | duplicate | Already closed linked context; no action should be applied. |

## Needs Human

- #45508 still needs maintainer product direction for the STT recorder/Talk UX and config-boundary split; that decision should remain on the canonical issue.
