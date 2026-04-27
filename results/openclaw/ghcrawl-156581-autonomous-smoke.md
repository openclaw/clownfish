---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156581-autonomous-smoke"
mode: "autonomous"
run_id: "24978139846"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978139846"
head_sha: "e8d437d9978c397d8d3fb39c23597d4e5c1d98bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T05:42:36.786Z"
canonical: "https://github.com/openclaw/openclaw/issues/45474"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45474"
canonical_pr: null
actions_total: 21
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

Run: [https://github.com/openclaw/clownfish/actions/runs/24978139846](https://github.com/openclaw/clownfish/actions/runs/24978139846)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/45474

## Summary

Autonomous classification only. #45474 remains the canonical open issue for the 440/401 linked-but-dead WhatsApp listener family. The cluster also contains several related but distinct WhatsApp reliability subfamilies; no close or merge action is safe before a fix path lands. A narrow fix artifact is planned for the #45474 stale auth/listener recovery path, while unrelated open reports stay open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 21 |
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
| #72621 | merge_canonical | blocked | fix_pr | mergeable state is CONFLICTING |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #45474 | keep_canonical | planned | canonical | Best surviving canonical for the original 440/401 stale auth/listener silent-delivery family. |
| #46518 | keep_related | planned | related | Related WhatsApp login reliability report with distinct QR-pairing scope; leave open. |
| #47367 | keep_closed | skipped | superseded | Already closed refs must not receive close actions. |
| #47710 | keep_related | planned | related | Useful related contributor PR, but merge is blocked by unresolved bot review findings and failing checks. |
| #49057 | keep_closed | skipped | superseded | Already closed refs must not receive close actions. |
| #49305 | keep_related | planned | related | Related stale-auth/listener recovery issue; leave open for fix validation. |
| #51111 | keep_closed | skipped | fixed_by_candidate | Already closed refs must not receive close actions. |
| #61663 | keep_closed | skipped | fixed_by_candidate | Already closed refs must not receive close actions. |
| #61744 | keep_closed | skipped | fixed_by_candidate | Already closed refs must not receive close actions. |
| #63855 | keep_related | planned | related | Related but not duplicate; leave open. |
| #63939 | keep_related | planned | related | Related config PR; not merge-ready and not the canonical path for this cluster. |
| #66917 | keep_closed | skipped | superseded | Already closed refs must not receive close actions. |
| #66920 | keep_related | planned | related | Related open group reliability bug; leave open. |
| #67986 | keep_related | planned | related | Related reliability report but likely separate gateway/config-read failure path; leave open. |
| #70678 | keep_closed | skipped | fixed_by_candidate | Already closed refs must not receive close actions. |
| #70856 | keep_related | planned | related | Related but broader active WhatsApp regression; leave open. |
| #7433 | keep_related | planned | related | Related follow-up group reliability work; leave open. |
| #39608 | keep_related | planned | related | Related group inbound issue; leave open. |
| #69833 | route_security | planned | security_sensitive | Route exact security-sensitive linked PR to central OpenClaw security handling; do not mutate it. |
| cluster:ghcrawl-156581-autonomous-smoke | fix_needed | planned |  | A narrow replacement fix plan is needed before closing or post-merge closeout can be planned. |
| cluster:ghcrawl-156581-autonomous-smoke | build_fix_artifact | planned |  | Prepare a bounded fix PR path while preserving related issues for separate follow-up clusters. |

## Needs Human

- none
