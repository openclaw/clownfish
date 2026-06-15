---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13996-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25110371631"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25110371631"
head_sha: "7d2adb9c59b8750974f50f0d9103e76d18fa9122"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.783Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 24
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13996-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25110371631](https://github.com/openclaw/clownfish/actions/runs/25110371631)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

No single open canonical safely replaces closed representative #59438. The hydrated open refs split into Telegram topic labels, avatar resolution/customization, v2 UI regressions, session naming/channel UX, agent switching, and memory isolation subfamilies. No close/comment/label mutations are high-confidence in this dedupe-only run; all open refs should remain open as canonical, related, or independent follow-up trackers.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 24 |
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
| #7406 | keep_canonical | planned | canonical | Canonical open tracker for the Telegram topic-name session-label subfamily. |
| #20230 | keep_related | planned | related | Related Control UI identity work, but not a duplicate of avatar resolution or session-label reports. |
| #38439 | keep_canonical | planned | canonical | Canonical open tracker for the IDENTITY.md avatar endpoint bug subfamily. |
| #38923 | keep_related | planned | related | Useful implementation candidate for #38439, but not merge-ready and this job blocks merge/fix actions. |
| #40016 | keep_canonical | planned | canonical | Canonical open tracker for the CLI session rename/set-label subfamily. |
| #41201 | keep_related | planned | related | Related avatar display issue with a distinct remote-avatar policy and diagnostics scope; not safe to close as duplicate of #38439. |
| #42504 | keep_related | planned | related | Related avatar feature request, but it has unique upload/RPC/storage work and should remain open. |
| #45649 | keep_related | planned | related | Related v2 UI regression, but the tool-card surface is distinct from the Agents page regression in #45703. |
| #45688 | keep_related | planned | related | Related v2 UI regression, but the Config search/filter scope is unique and should stay open. |
| #45703 | keep_canonical | planned | canonical | Canonical open tracker for the v2 Agents-page regression subfamily. |
| #45711 | keep_related | planned | related | Related v2 UI regression, but it is a distinct Sessions view copy/readability issue. |
| #45755 | keep_related | planned | related | Related v2 UI identity regression; not fixed by the closed unmerged selector PR. |
| #51124 | keep_related | planned | related | Useful adjacent PR, but not a complete canonical fix for #7406 and not merge-ready. |
| #53378 | keep_related | planned | related | Related session UX work with a distinct channel identity display scope. |
| #55249 | keep_related | planned | related | Related session-label request; not a high-confidence duplicate because it carries additional programmatic-session scope. |
| #55718 | keep_related | planned | related | Related channel/session labeling work with distinct config and inbound metadata behavior. |
| #56308 | keep_related | planned | related | Related session-title request; unique details block automatic duplicate closure. |
| #56997 | keep_related | planned | related | Related session/channel UX work, but it requires distinct UI/protocol design and should remain open. |
| #61213 | keep_related | planned | related | Related session-label issue with a distinct binding-comment priority contract. |
| #63558 | keep_related | planned | related | Related multi-agent UI selector work, but narrower than the general Control UI agent switcher and not a duplicate. |
| #63829 | keep_independent | planned | independent | Independent follow-up cluster; do not close or route under this UI/session-label cluster. |
| #68248 | keep_related | planned | related | Related avatar/customization feature request with unique remaining scope. |
| #68959 | keep_canonical | planned | canonical | Canonical open tracker for the general Control UI agent-switcher subfamily. |
| #68981 | keep_canonical | planned | canonical | Canonical open tracker for the broad session-management UX subfamily. |

## Needs Human

- none
