---
repo: "openclaw/openclaw"
cluster_id: "pr-rebase-canary-80396-20260617"
mode: "autonomous"
run_id: "27705773540"
workflow_run_id: "27705773540"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27705773540"
head_sha: "a35c8907ec29188d7b2eb3a504f94102b6ac8592"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T17:10:38.369Z"
canonical: "https://github.com/openclaw/openclaw/pull/80396"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41966"
canonical_pr: "https://github.com/openclaw/openclaw/pull/80396"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-rebase-canary-80396-20260617

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27705773540](https://github.com/openclaw/clownfish/actions/runs/27705773540)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/80396

## Summary

PR #80396 is the sole canonical PR and remains the right branch to repair because it is open, focused, maintainer-editable, and tied to #41966. It is not merge-ready: the hydrated review state has a maintainer CHANGES_REQUESTED review asking that the parser signal remain but the warning be emitted only once at the actual outbound delivery boundary, and Codex /review proof is not present. No GitHub mutations, close actions, merge actions, labels, or replacement PRs are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#80396",
  "source_refs": [
    "#80396",
    "#41966"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #80396 in place. Keep the `splitMediaFromOutput()` fenced-token callback, but remove unconditional logging from shared parser wrappers and emit the warning only from real outbound delivery boundaries so repeated planning/comparison parser calls do not duplicate misleading `will not be delivered` warnings.",
  "pr_title": "fix(media): warn once for fenced MEDIA tokens at delivery",
  "pr_body": "## Summary\n\nRepair #80396 in place for #41966. Keep the warn-only behavior: fenced `MEDIA:` lines remain visible text and are not extracted, but the skipped-token signal is surfaced only at the outbound delivery boundary so parser reuse in planning/comparison paths does not log duplicate misleading warnings.\n\nThis preserves @Bartok9's original narrow fix and attribution while addressing the maintainer review on #80396.\n\n## Repair Plan\n\n- Keep `splitMediaFromOutput()` browser-safe and callback-based.\n- Thread an optional fenced-token callback through reply parsing without importing the logger into shared parser code.\n- Pass the warning callback only from real delivery paths, not from comparison, mirror, JSON, or planning-only parser calls.\n- Add regression coverage proving repeated parser/planning calls do not emit duplicate warnings, while actual delivery emits one warning for the fenced `MEDIA:` payload.\n\n## Verification\n\n- `pnpm test src/media/parse.test.ts src/infra/outbound/payloads.test.ts`\n- `pnpm check:changed`\n- Codex `/review` after the repair, with any findings addressed before a later merge job.",
  "likely_files": [
    "src/media/parse.ts",
    "src/media/parse.test.ts",
    "src/auto-reply/reply/reply-directives.ts",
    "src/infra/outbound/payloads.ts",
    "src/infra/outbound/payloads.test.ts",
    "src/infra/outbound/deliver.ts",
    "src/infra/outbound/message.ts",
    "src/agents/command/delivery.ts"
  ],
  "validation_commands": [
    "pnpm test src/media/parse.test.ts src/infra/outbound/payloads.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair contributor PR #80396 in place; preserve @Bartok9 authorship and PR credit.",
    "PR body/finalization should continue to reference #41966 and credit @Bartok9 for the warn-only parser signal and browser-safe callback approach."
  ],
  "source_job": "jobs/openclaw/inbox/pr-rebase-canary-80396-20260617.md",
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
| repair_contributor_branch | blocked |  |  | rebase-only repair stopped: Codex /review did not pass after 1 attempt(s): Merge is blocked. The branch adds the fenced MEDIA callback in parse.ts, but wires logging into the shared parseReplyDirectives wrapper, which violates the fix artifact's required boundary and reintroduces duplicate misleading warnings from planning/comparison paths. I did not rerun validation per instruction; git diff checks are clean, and no security-sensitive issue was found in the changed parser logic. |

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
| #80396 | fix_needed | planned | canonical | Repair the existing contributor branch rather than replacing it; the branch is maintainer-editable and the remaining work is narrow. |
| #41966 | keep_related | planned | related | Linked issue is evidence and validation context, not a target for closure in this rebase-only cluster. |
| cluster:pr-rebase-canary-80396-20260617 | build_fix_artifact | planned |  | Maintainer calibration requests rebase/validate/Codex-review repair of the existing branch; this artifact hands that exact work to the executor without opening a replacement PR. |

## Needs Human

- none
