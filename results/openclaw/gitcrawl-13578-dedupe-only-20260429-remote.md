---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13578-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109705707"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109705707"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.730Z"
canonical: "https://github.com/openclaw/openclaw/issues/40770"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40770"
canonical_pr: "https://github.com/openclaw/openclaw/pull/34262"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13578-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109705707](https://github.com/openclaw/clownfish/actions/runs/25109705707)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/40770

## Summary

Representative #40770 is closed and remains the historical canonical issue for the Feishu Chinese filename upload bug; merged #34262 is the hydrated canonical PR for that fixed path. No open item is a safe duplicate closeout. Open refs split into related subclusters: #41860/#41880 for Feishu underscore URLs, #48788 for a broader filename utility, and #59744/#59783 for Discord filename metadata. #58272 is independent. #43239 is quarantined because hydrated review comments describe boundary-sensitive local-root/CODEOWNERS regressions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #41860 | keep_related | planned | related | Keep open as the canonical issue for the related Feishu underscore-URL subcluster; it is not a duplicate of the closed #40770 filename upload bug. |
| #41880 | keep_related | planned | related | Keep as the focused implementation candidate for #41860; do not merge or close in this dedupe-only job. |
| #43239 | route_security | planned | security_sensitive | Route the exact PR to central OpenClaw security handling instead of dedupe mutation. |
| #48788 | keep_related | planned | related | Keep open as a related follow-up feature/design tracker, not a duplicate of the already-fixed #40770 upload regression. |
| #58272 | keep_independent | planned | independent | Independent bug report with unique platform and reproduction scope; do not close or fold into the Feishu filename cluster. |
| #59744 | keep_related | planned | related | Keep open as the Discord filename metadata tracker until #59783 or another hydrated fix lands cleanly. |
| #59783 | keep_related | planned | related | Useful but not merge-ready related Discord PR; keep open for its own subcluster and do not close as part of this Feishu dedupe pass. |

## Needs Human

- none
