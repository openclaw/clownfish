# Open ProjectClownfish PR Finalizer

Generated: 2026-06-14T07:37:52.842Z

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
| [#92911](https://github.com/openclaw/openclaw/pull/92911) | fix(cli): avoid false downgrade prompt for latest tag | ghcrawl-156686-autonomous-smoke | MERGEABLE | UNSTABLE | CANCELLED:2 IN_PROGRESS:121 SKIPPED:47 SUCCESS:11 NEUTRAL:1; blockers:121 | needs_merge_state:UNSTABLE, needs_checks:CodeQL / Security High (core-auth-secrets):IN_PROGRESS; OpenGrep — PR Diff / Scan changed paths (precise):IN_PROGRESS; Real behavior proof:IN_PROGRESS, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#92910](https://github.com/openclaw/openclaw/pull/92910) | fix(memory-core): safely refresh qmd index during collection repair | ghcrawl-156633-autonomous-smoke | MERGEABLE | CLEAN | CANCELLED:6 SKIPPED:67 SUCCESS:132; blockers:3 | needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#92879](https://github.com/openclaw/openclaw/pull/92879) | fix(sessions): fall back to reset archive for missing async transcripts | gitcrawl-10447-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:9 SKIPPED:75 SUCCESS:136 NEUTRAL:1; blockers:3 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
