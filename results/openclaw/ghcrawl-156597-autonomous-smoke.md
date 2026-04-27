---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156597-autonomous-smoke"
mode: "autonomous"
run_id: "24979700828"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24979700828"
head_sha: "8806d2971f220668a5fdb92adf8595525bd6678b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:31:13.523Z"
canonical: "https://github.com/openclaw/openclaw/issues/39673"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39673"
canonical_pr: null
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156597-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24979700828](https://github.com/openclaw/clownfish/actions/runs/24979700828)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/39673

## Summary

Classified the hydrated cluster without direct GitHub mutation. #39673 remains the live canonical issue for unrecovered Linux gateway install user-systemd bus failures. No merge is safe: the only open PR in the hydrated family, #52293, is security-sensitive and has failing checks, so it is routed to central security handling. A narrow replacement/new fix artifact is needed for #39673 and related install detection/hinting gaps; already-closed refs are kept closed and open adjacent reports remain open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72617 | clownfish/ghcrawl-156597-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72617 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39673 | keep_canonical | planned | canonical | #39673 is still the best live canonical issue for the remaining gateway install bus-unavailable failure family. |
| #42025 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions. |
| #44070 | keep_closed | skipped | fixed_by_candidate | Already-closed refs must not receive close actions; linked security-sensitive PR is routed separately. |
| #44417 | keep_related | planned | related | Related open issue with unique environment and root-cause details; keep open and let the fix path validate coverage. |
| #54429 | keep_closed | skipped | duplicate | Already-closed refs must not receive close actions. |
| #54517 | keep_closed | skipped | fixed_by_candidate | Already-closed refs must not receive close actions. |
| #62764 | keep_independent | planned | independent | Different command surface and ownership model; do not close or merge under this gateway-install cluster. |
| #63561 | keep_related | planned | related | Related but not a pure duplicate; keep open until the canonical fix path proves coverage. |
| #65184 | keep_closed | skipped | fixed_by_candidate | Already-closed refs must not receive close actions. |
| #52293 | route_security | planned | security_sensitive | Route only #52293 to central OpenClaw security handling; do not merge, close, comment, or use it as a candidate fix in ProjectClownfish. |
| #62763 | keep_related | planned | related | Keep as related follow-up context for the #62764 doctor --fix subcluster. |
| cluster:ghcrawl-156597-autonomous-smoke | fix_needed | planned |  | A narrow fix artifact is needed because the bug is real, current main is not proven fixed for #39673, and no safe canonical PR exists. |
| cluster:ghcrawl-156597-autonomous-smoke | build_fix_artifact | planned |  | Prepare a ProjectClownfish replacement/new fix PR plan for the open canonical issue and related install-detection reports. |

## Needs Human

- none
