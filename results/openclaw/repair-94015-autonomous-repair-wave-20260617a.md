---
repo: "openclaw/openclaw"
cluster_id: "repair-94015-autonomous-repair-wave-20260617a"
mode: "autonomous"
run_id: "27721523041"
workflow_run_id: "27721523041"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27721523041"
head_sha: "a3c7ad79a041dae9accf636bab73739a88862292"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-06-17T21:52:34.018Z"
canonical: "https://github.com/openclaw/openclaw/pull/94015"
canonical_issue: "https://github.com/openclaw/openclaw/issues/79521"
canonical_pr: "https://github.com/openclaw/openclaw/pull/94015"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-94015-autonomous-repair-wave-20260617a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27721523041](https://github.com/openclaw/clownfish/actions/runs/27721523041)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/94015

## Summary

Current main at 0a6736af still has the voice-call stale final-payload path: `generateVoiceResponse` awaits `runEmbeddedAgent` and extracts TTS text only from `result.payloads`. The embedded-agent contract already supports `onBlockReply`/`blockReplyBreak`, and PR #94015 is the canonical repair branch for wiring that early payload path into voice-call while preserving @xialonglee's contribution. Merge and close actions are not allowed for this job, so the output is a repair artifact plus non-mutating classifications.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
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
  "summary": "Repair PR #94015 by collecting early `onBlockReply` payloads inside `generateVoiceResponse`, preferring those payloads over final `result.payloads` for TTS spoken-text extraction, and adding a regression proving voice-call can speak the early reply when the final embedded-run payload is empty or stale after compaction.",
  "pr_title": "fix(voice-call): use early block replies for TTS",
  "pr_body": "## Summary\n- Collect early embedded-agent `onBlockReply` payloads in voice-call response generation.\n- Prefer early spoken payloads over final `result.payloads` so TTS is not blocked by or polluted by post-turn compaction output.\n- Add a regression for the stale/empty final-payload path.\n\nFixes #79521.\n\nCredit: this repairs and carries forward @xialonglee's source PR https://github.com/openclaw/openclaw/pull/94015.\n\n## Verification\n- `node scripts/run-vitest.mjs extensions/voice-call/src/response-generator.test.ts`\n- `pnpm check:changed`\n- Fresh `/review` required before merge consideration.",
  "likely_files": [
    "extensions/voice-call/src/response-generator.ts",
    "extensions/voice-call/src/response-generator.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs extensions/voice-call/src/response-generator.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve source PR credit for @xialonglee and https://github.com/openclaw/openclaw/pull/94015.",
    "Keep the repair on the contributor branch when possible; do not replace the PR because maintainer_can_modify is true."
  ],
  "source_job": "jobs/openclaw/inbox/repair-94015-autonomous-repair-wave-20260617a.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [],
  "repair_status": null,
  "terminal": null
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #79521 | keep_related | planned | fixed_by_candidate | Issue is covered by the canonical repair PR but cannot be closed before the fix is landed. |
| #94015 | fix_needed | planned | canonical | Repair should stay on contributor PR #94015 because the defect is real on current main, the branch is editable, and the diff scope is narrow; merge is disallowed and /review is not yet clean in the artifact. |
| cluster:repair-94015-autonomous-repair-wave-20260617a | build_fix_artifact | planned |  | An executable repair path is available and allowed by the job. |

## Needs Human

- none
