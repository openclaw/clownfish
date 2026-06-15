---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T131654-068"
mode: "plan"
run_id: "27549048715"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549048715"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.831Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# pr-inventory-ready_for_maintainer-20260615T131654-068

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549048715](https://github.com/openclaw/clownfish/actions/runs/27549048715)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification shard. The hydrated preflight artifact provides live state for 20 of 40 listed PRs; those hydrated PRs are classified independently and conservatively. The remaining 20 listed refs lack hydrated live state in the provided artifact, so they are non-mutating needs_human items rather than close, label, merge, or fix actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #88075 | keep_related | planned | related | Independent maintainer review is appropriate for a security-boundary-adjacent feature PR; no dedupe or closure basis exists in this inventory shard. |
| #88085 | keep_related | planned | related | Focused PR with a failed check; keep for maintainer review rather than close or merge. |
| #88503 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact, so no reliable classification or mutating plan can be emitted. |
| #88098 | keep_related | planned | related | Focused feature PR with failed proof; keep for maintainer review. |
| #88150 | keep_related | planned | related | Looks focused and plausibly maintainer-ready, but inventory plan mode and blocked merge require non-mutating keep classification. |
| #88203 | keep_related | planned | related | Focused PR with passing checks, but no closure or merge action is allowed in this plan shard. |
| #88206 | keep_related | planned | related | Focused message-delivery PR with passing checks; keep for maintainer review. |
| #90741 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #88301 | keep_related | planned | related | Broad cross-area PR should remain in maintainer review; no low-signal or superseded evidence is hydrated. |
| #88323 | keep_related | planned | related | Useful contributor PR with unavailable branch modification should remain open for maintainer decision rather than be closed or replaced in this job. |
| #88437 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #88400 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #88401 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #92930 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #93025 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #93176 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #93182 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #90979 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #91093 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #91097 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #91117 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #91134 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #91146 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #91193 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #93185 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #93149 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #93189 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |
| #69729 | keep_related | planned | related | Failed checks and unresolved bot review context block merge or fixed-by-candidate classification; keep for maintainer/author follow-up. |
| #72009 | keep_related | planned | related | Active/waiting-on-author PR with broad enough scope and unhydrated discussion; keep for maintainer review. |
| #72404 | keep_related | planned | related | Focused but waiting-on-author PR with unhydrated bot review context; keep for maintainer review. |
| #73163 | keep_related | planned | related | Focused PR with passing checks; keep for maintainer review in plan mode. |
| #73785 | keep_related | planned | related | Focused PR with passing checks; keep for maintainer review. |
| #75754 | keep_related | planned | related | Failed proof blocks maintainer-ready merge; keep open for follow-up rather than close. |
| #75857 | keep_related | planned | related | Focused PR with passing checks but waiting-on-author; keep for maintainer review. |
| #75860 | keep_related | planned | related | Failed checks block merge or fixed-by-candidate classification; keep for author/maintainer follow-up. |
| #80008 | keep_related | planned | related | Large feature/API PR with prior blocker review context and unhydrated review threads should stay in maintainer review. |
| #80147 | keep_related | planned | related | Focused bugfix with passing checks but waiting-on-author; keep for maintainer review. |
| #80204 | keep_related | planned | related | Failed relevant gateway check blocks merge; keep for author/maintainer follow-up. |
| #80396 | keep_related | planned | related | Focused PR with passing checks; keep for maintainer review. |
| #93188 | needs_human | blocked | needs_human | Live hydrated state is unavailable from the artifact. |

## Needs Human

- Hydrated live state is missing from the provided compacted preflight artifact for #88503, #90741, #88437, #88400, #88401, #92930, #93025, #93176, #93182, #90979, #91093, #91097, #91117, #91134, #91146, #91193, #93185, #93149, #93189, and #93188; re-run hydration or provide an untruncated artifact before mutating or final-classifying those refs.
- Several hydrated PRs have failed checks or unhydrated review-bot/human review context; these are kept open for maintainer/author follow-up rather than escalated as whole-cluster blockers.
