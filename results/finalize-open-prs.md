# Open ProjectClownfish PR Finalizer

Generated: 2026-06-14T07:14:19.837Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 3 |
| ready_candidates | 0 |
| security_hold | 0 |
| needs_rebase | 1 |
| mergeability_unknown | 0 |
| needs_checks | 3 |
| needs_review | 0 |
| needs_merge_preflight | 3 |
| needs_result_backfill | 0 |

## Dispatch

Enabled: no

Status: report_only

| PR | Cluster | Job | Mode | Blockers |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Open PRs

| PR | Title | Cluster | Mergeable | Merge State | Checks | Blockers | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [#92881](https://github.com/openclaw/openclaw/pull/92881) | fix(memory): preserve reindex rollback recovery | gitcrawl-5644-autonomous-smoke | MERGEABLE | UNSTABLE | CANCELLED:5 SKIPPED:42 SUCCESS:135 FAILURE:1 NEUTRAL:1; blockers:4 | needs_merge_state:UNSTABLE, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#92879](https://github.com/openclaw/openclaw/pull/92879) | fix(sessions): fall back to reset archive for missing async transcripts | gitcrawl-10447-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:9 SKIPPED:75 SUCCESS:136 NEUTRAL:1; blockers:3 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#92876](https://github.com/openclaw/openclaw/pull/92876) | fix(memory-wiki): stop flagging raw source pages as malformed | gitcrawl-11828-autonomous-smoke | MERGEABLE | UNSTABLE | CANCELLED:2 SKIPPED:33 SUCCESS:41 IN_PROGRESS:86; blockers:87 | needs_merge_state:UNSTABLE, needs_checks:Real behavior proof:CANCELLED; CI / build-artifacts:IN_PROGRESS; CI / checks-fast-bundled-protocol:IN_PROGRESS, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
