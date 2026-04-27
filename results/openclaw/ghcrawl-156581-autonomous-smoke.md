---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156581-autonomous-smoke"
mode: "autonomous"
run_id: "24978948275"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978948275"
head_sha: "29400ea714d617de4455a11f0aa59ca745bf6cda"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:08:50.817Z"
canonical: "https://github.com/openclaw/openclaw/issues/45474"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45474"
canonical_pr: null
actions_total: 29
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156581-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978948275](https://github.com/openclaw/clownfish/actions/runs/24978948275)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/45474

## Summary

Autonomous classification only. #45474 remains the best live canonical issue for the 440/401 linked-but-dead WhatsApp session failure. The cluster contains several related but non-duplicate WhatsApp reliability subfamilies, one open non-merge-ready PR path, and one security-sensitive linked PR that is quarantined. No close or merge actions are planned because require_fix_before_close is set and no canonical fix PR has landed in this run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 29 |
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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72621 | clownfish/ghcrawl-156581-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72621 | merge_canonical | blocked | fix_pr | merge state status is UNSTABLE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #45474 | keep_canonical | planned | canonical | Best surviving canonical for the 440/401 linked-but-dead WhatsApp session failure. |
| #46518 | keep_related | planned | related | Related WhatsApp Baileys auth/pairing failure with unique QR pairing evidence; keep open. |
| #47367 | keep_closed | skipped | superseded | Closed context ref; no mutation is allowed. |
| #49057 | keep_closed | skipped | superseded | Closed context ref; no mutation is allowed. |
| #51111 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no mutation is allowed. |
| #61663 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no mutation is allowed. |
| #61744 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no mutation is allowed. |
| #63855 | keep_related | planned | related | Related WhatsApp silent message-loss bug with distinct stale-socket detector scope; keep open. |
| #66917 | keep_closed | skipped | superseded | Closed context ref; no mutation is allowed. |
| #66920 | keep_related | planned | related | Related group-specific WhatsApp reliability bug; keep open. |
| #67986 | keep_related | planned | related | Related reliability report with distinct gateway wedge scope; keep open. |
| #70678 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no mutation is allowed. |
| #70856 | keep_related | planned | related | Related broader WhatsApp listener regression; keep open. |
| #7433 | keep_related | planned | related | Related group reliability work; keep open. |
| #39608 | keep_related | planned | related | Related group-inbound delivery bug; keep open. |
| #49305 | keep_related | planned | related | Related WhatsApp logout/recovery bug; keep open. |
| #47710 | keep_related | planned | related | Useful related contributor PR, but merge is blocked by failing checks and unresolved review-bot findings. |
| #63939 | keep_related | planned | related | Related configurable-watchdog PR; not merge-ready and not the canonical fix for #45474. |
| #69833 | route_security | planned | security_sensitive | Quarantine exact security-sensitive linked ref to central OpenClaw security handling; no ProjectClownfish mutation. |
| #19907 | keep_closed | skipped | superseded | Closed linked context ref; no mutation is allowed. |
| #24947 | keep_closed | skipped | superseded | Closed linked context ref; no mutation is allowed. |
| #45387 | keep_closed | skipped | fixed_by_candidate | Closed linked context ref; no mutation is allowed. |
| #45391 | keep_closed | skipped | fixed_by_candidate | Closed linked context ref; no mutation is allowed. |
| #47503 | keep_closed | skipped | superseded | Closed linked PR; no mutation is allowed. |
| #47513 | keep_closed | skipped | superseded | Closed linked PR; no mutation is allowed. |
| #60007 | keep_closed | skipped | fixed_by_candidate | Closed merged linked PR; no mutation is allowed. |
| #63410 | keep_closed | skipped | superseded | Closed linked context ref; no mutation is allowed. |
| cluster:ghcrawl-156581-autonomous-smoke | fix_needed | planned |  | A narrow replacement fix path is needed before duplicate or fixed-by closeout can be considered. |
| cluster:ghcrawl-156581-autonomous-smoke | build_fix_artifact | planned |  | No viable canonical PR exists for #45474 and allow_fix_pr is true. |

## Needs Human

- none
