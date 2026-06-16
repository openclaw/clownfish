---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156842-autonomous-smoke"
mode: "autonomous"
run_id: "27598130649"
workflow_run_id: "27598130649"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598130649"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:34:19.656Z"
canonical: "https://github.com/openclaw/openclaw/issues/49833"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49833"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156842-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598130649](https://github.com/openclaw/clownfish/actions/runs/27598130649)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/49833

## Summary

All job seed PRs are already closed, so no close or merge mutation is valid for them. Current main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 still builds Feishu plain post replies by prepending text-format <at user_id="...">name</at> markup and wrapping the full reply in one post md element, so the original Feishu blue-mention bug still needs a narrow replacement fix PR. Security-sensitive linked PR #80306 is quarantined only for security routing and is not used as the canonical non-security fix path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93522 | clownfish/ghcrawl-156842-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93522 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49833 | keep_closed | skipped | canonical | Closed root report retained as historical canonical evidence; no mutation planned. |
| #49837 | keep_closed | skipped | superseded | Already closed superseded contributor PR; replacement fix artifact will preserve credit without reopening or mutating this PR. |
| #49850 | keep_closed | skipped | superseded | Already closed useful-but-uneditable contributor PR; use as credited source context for a narrow replacement fix. |
| #49983 | keep_closed | skipped | superseded | Already closed useful-but-uneditable contributor PR; use as credited source context for a narrow replacement fix. |
| #80306 | route_security | planned | security_sensitive | Route only the exact security-sensitive linked PR to central OpenClaw security handling; continue the unrelated Feishu mention fix lane separately. |
| cluster:ghcrawl-156842-autonomous-smoke | fix_needed | planned |  | No viable open canonical PR remains, all contributor branches are closed/uneditable, and current main still shows the reported Feishu post mention payload shape. |
| cluster:ghcrawl-156842-autonomous-smoke | build_fix_artifact | planned |  | Fix PRs are allowed, the bug is still present on current main, and a complete narrow fix artifact is safe without depending on the security-routed ref. |

## Needs Human

- none
