---
repo: "openclaw/openclaw"
cluster_id: "repair-94015-autonomous-repair-wave-20260617a"
mode: "autonomous"
run_id: "27703237100"
workflow_run_id: "27703237100"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27703237100"
head_sha: "3d1c6e80508f4f0169e7d61190672f06031166e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T16:33:00.416Z"
canonical: "https://github.com/openclaw/openclaw/pull/94015"
canonical_issue: "https://github.com/openclaw/openclaw/issues/79521"
canonical_pr: "https://github.com/openclaw/openclaw/pull/94015"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-94015-autonomous-repair-wave-20260617a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27703237100](https://github.com/openclaw/clownfish/actions/runs/27703237100)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/94015

## Summary

Current main still has the voice-call stale/late payload path: `generateVoiceResponse` awaits `runEmbeddedAgent` and extracts TTS text only from `result.payloads`. PR #94015 is the canonical repair path and is maintainer-editable, but it needs contributor-branch repair before merge: rebase onto current main, keep the patch scoped to voice-call response generation, and add the missing regression proving `onBlockReply` payloads win over stale/empty completed-run payloads.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#94015",
  "source_refs": [
    "#94015",
    "#79521"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair contributor PR #94015 on its existing editable branch. Rebase onto current main `baa389ebed1a85258b2ff7f4a61d0746280edf61`, keep the implementation scoped to `generateVoiceResponse`, collect `onBlockReply` payloads with `blockReplyBreak: \"text_end\"`, prefer those payloads over completed-run `result.payloads`, and add a regression where callback payloads contain fresh spoken JSON while the final result payloads are stale/empty.",
  "pr_title": "fix(voice-call): use early block replies for TTS",
  "pr_body": "## Summary\n- Repair #94015 by rebasing the contributor branch onto current main and keeping the fix scoped to voice-call response generation.\n- Collect `onBlockReply` payloads with `blockReplyBreak: \"text_end\"` so voice-call TTS can use the spoken response before post-turn compaction/maintenance settles.\n- Prefer early block-reply payloads over completed-run `result.payloads`, with completed payloads as the existing fallback.\n- Add a regression proving fresh callback payloads are spoken when completed-run payloads are stale or empty.\n\nFixes #79521.\nContinues and credits @xialonglee's source PR: https://github.com/openclaw/openclaw/pull/94015.\n\n## Verification\n- `node scripts/run-vitest.mjs extensions/voice-call/src/response-generator.test.ts`\n- `pnpm check:changed`\n- `/review` clean before merge consideration\n\n## Notes\nThis does not change TTS policy, compaction policy, or voice-call configuration. It only wires voice-call into the embedded runner's existing block-reply callback contract.",
  "likely_files": [
    "extensions/voice-call/src/response-generator.ts",
    "extensions/voice-call/src/response-generator.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs extensions/voice-call/src/response-generator.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve source PR credit for https://github.com/openclaw/openclaw/pull/94015 by @xialonglee.",
    "PR body should state that the repair continues @xialonglee's #94015 fix for #79521.",
    "Do not edit CHANGELOG.md directly; include release-note context in the PR body or squash message because this is user-visible voice-call latency behavior."
  ],
  "source_job": "jobs/openclaw/inbox/repair-94015-autonomous-repair-wave-20260617a.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [],
  "repair_status": "pushed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/94015 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #94015 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #94015 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #94015 | fix_needed | planned | canonical | Repair the editable contributor branch before any merge path. The patch shape is narrow and correct in direction, but the branch needs rebase/fresh review and a stronger regression for the stale post-compaction payload bug. |
| #79521 | keep_related | planned | fixed_by_candidate | The issue is covered by the canonical PR repair path but cannot be closed in this job. |
| cluster:repair-94015-autonomous-repair-wave-20260617a | build_fix_artifact | planned |  | Emit an executable repair artifact for Clownfish scripts to update the contributor PR branch. |

## Needs Human

- none
