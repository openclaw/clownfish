# Open ProjectClownfish PR Finalizer

Generated: 2026-06-16T05:45:11.916Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 7 |
| ready_candidates | 0 |
| security_hold | 5 |
| needs_rebase | 7 |
| mergeability_unknown | 0 |
| needs_checks | 7 |
| needs_review | 2 |
| needs_merge_preflight | 7 |
| needs_result_backfill | 0 |

## Dispatch

Enabled: yes

Status: dry_run

| PR | Cluster | Job | Mode | Blockers |
| --- | --- | --- | --- | --- |
| [#73989](https://github.com/openclaw/openclaw/pull/73989) | ghcrawl-157023-autonomous-smoke | jobs/openclaw/outbox/finalized/ghcrawl-157023-autonomous-smoke.md | autonomous | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE; Real behavior proof:FAILURE, needs_merge_preflight |
| [#73923](https://github.com/openclaw/openclaw/pull/73923) | ghcrawl-156708-autonomous-smoke | jobs/openclaw/outbox/finalized/ghcrawl-156708-autonomous-smoke.md | autonomous | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE; Real behavior proof:FAILURE, needs_merge_preflight |

## Open PRs

| PR | Title | Cluster | Mergeable | Merge State | Checks | Blockers | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [#73989](https://github.com/openclaw/openclaw/pull/73989) | fix(health-monitor): add reconnect grace for gateway reconnects | ghcrawl-157023-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:22 CANCELLED:8 SKIPPED:70 SUCCESS:68 NEUTRAL:1; blockers:25 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE; Real behavior proof:FAILURE, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73987](https://github.com/openclaw/openclaw/pull/73987) | fix(control-ui): share gateway token scope across loopback hosts | ghcrawl-157066-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:11 CANCELLED:39 SKIPPED:128 SUCCESS:159; blockers:39 | security_hold, security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE; Real behavior proof:FAILURE, needs_merge_preflight | route to central security triage |
| [#73982](https://github.com/openclaw/openclaw/pull/73982) | fix(chat-bash): inherit exec policy defaults | ghcrawl-157029-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:12 CANCELLED:22 SKIPPED:112 SUCCESS:169; blockers:25 | security_hold, security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE; Real behavior proof:FAILURE, needs_merge_preflight | route to central security triage |
| [#73976](https://github.com/openclaw/openclaw/pull/73976) | fix(memory): use per-keyword FTS search in hybrid mode #39484 | ghcrawl-156988-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:9 CANCELLED:6 SKIPPED:59 SUCCESS:65; blockers:11 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE; Real behavior proof:FAILURE, needs_merge_preflight | route to central security triage |
| [#73948](https://github.com/openclaw/openclaw/pull/73948) | fix(security): align audit symlink_escape boundary with skill loader | ghcrawl-156898-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:4 CANCELLED:8 SKIPPED:80 SUCCESS:177; blockers:5 | security_hold, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE; Real behavior proof:FAILURE, needs_merge_preflight | route to central security triage |
| [#73925](https://github.com/openclaw/openclaw/pull/73925) | fix(gateway): bound websocket auth after valid connect | ghcrawl-156675-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:10 CANCELLED:18 SKIPPED:96 SUCCESS:91; blockers:15 | security_hold, security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE; Real behavior proof:FAILURE, needs_merge_preflight | route to central security triage |
| [#73923](https://github.com/openclaw/openclaw/pull/73923) | fix(ui): preserve gateway token during safe websocket url edits | ghcrawl-156708-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:9 CANCELLED:7 SKIPPED:72 SUCCESS:91; blockers:9 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:FAILURE; Real behavior proof:FAILURE; Real behavior proof:FAILURE, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
