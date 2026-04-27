---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156594-autonomous-smoke"
mode: "autonomous"
run_id: "24981853908"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24981853908"
head_sha: "fd3fada323e8dc58055c36d72ab846ef212caf2d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T07:34:48.454Z"
canonical: "https://github.com/openclaw/openclaw/issues/40352"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40352"
canonical_pr: null
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 2
---

# ghcrawl-156594-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24981853908](https://github.com/openclaw/clownfish/actions/runs/24981853908)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/40352

## Summary

Autonomous classification only. No GitHub mutations performed. The original canonical PR #40443 is now closed and its replacement #72624 is security-sensitive, so it must be quarantined. The cluster contains at least two non-security bug families: explicit config reload stale state (#40352/#40443/#72624) and Agents overview model-select drift/catalog/page-load behavior (#39392/#52948/#54724). Open non-security issues/PRs should remain open; no closeout is safe until a non-security canonical fix path lands.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 2 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72624 | clownfish/ghcrawl-156594-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72624 | merge_canonical | blocked | fix_pr | mergeable state is CONFLICTING |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #13142 | keep_closed | skipped | superseded | Already closed in hydrated preflight artifact. |
| #39392 | keep_canonical | planned | canonical | Best live canonical issue for the non-security Agents overview model-switch/model-select drift family. |
| #39401 | keep_closed | skipped | superseded | Already closed; useful historical evidence for the #39392 family only. |
| #40352 | keep_canonical | planned | canonical | Best live canonical issue for the explicit config reload stale-state family. |
| #40441 | keep_closed | skipped | superseded | Already closed as superseded; keep as historical contributor evidence for any replacement fix plan. |
| #40443 | keep_closed | skipped | superseded | Already closed; cannot be merged or closed again. It remains the source PR for a future credited non-security replacement if security triage clears or replaces #72624. |
| #41344 | keep_closed | skipped | fixed_by_candidate | Already closed historical context; not a live target. |
| #43013 | route_security | planned | security_sensitive | Security-sensitive PR must be quarantined to central OpenClaw security handling; do not close, merge, label, or comment via ProjectClownfish. |
| #46275 | keep_closed | skipped | superseded | Already closed as superseded; keep as historical source evidence for the #39392/#54724 family. |
| #52948 | keep_related | planned | related | Useful non-security contributor PR, but it is a related sub-scope rather than the sole canonical path for the whole cluster. |
| #54724 | keep_related | planned | related | Related useful PR but too broad and insufficiently validated for autonomous merge; keep open for maintainer review or narrower follow-up. |
| #70633 | keep_closed | skipped | duplicate | Already closed duplicate/superseded PR. |
| #72624 | route_security | planned | security_sensitive | Security-sensitive replacement PR must be quarantined to central OpenClaw security handling; unrelated non-security items remain classifiable. |
| cluster:ghcrawl-156594-autonomous-smoke | fix_needed | blocked | related | Implementation is blocked on security quarantine for #72624 and should be split: central security triage for #72624, plus a later non-security narrow fix job if maintainers do not clear that PR. |
| cluster:ghcrawl-156594-autonomous-smoke | build_fix_artifact | blocked | related | Blocked until central security handling decides whether #72624 is clear, needs security-owned changes, or must be replaced by a fresh non-security job. |

## Needs Human

- Security triage must decide #72624 because the current best replacement for the #40352/#40443 explicit reload fix has an Aisle security finding and is marked security_sensitive in the hydrated artifact.
- Maintainer judgment is needed to split or prioritize the related Agents model-select work (#39392/#52948/#54724) because #52948 is narrow page-load/config-form behavior while #54724 is a broader catalog hydration and agent-switch patch with a large diff and incomplete validation evidence.
