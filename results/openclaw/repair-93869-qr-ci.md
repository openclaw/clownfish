---
repo: "openclaw/openclaw"
cluster_id: "repair-93869-qr-ci"
mode: "autonomous"
run_id: "27705775409"
workflow_run_id: "27705775409"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27705775409"
head_sha: "a35c8907ec29188d7b2eb3a504f94102b6ac8592"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-06-17T17:22:41.551Z"
canonical: "https://github.com/openclaw/openclaw/pull/93869"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/93869"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-93869-qr-ci

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27705775409](https://github.com/openclaw/clownfish/actions/runs/27705775409)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93869

## Summary

#93869 is the canonical writable repair path for the half-block QR rendering/copy regression. #51868 remains the credited source PR and should not be altered in this run. The repair should update the existing `clownfish/repair-51868-qr-rendering` branch, not open a second PR: encode only block-art copy payloads with a marked representation that survives DOM parsing, decode marked payloads in the chat copy handler while preserving raw legacy payloads, and add focused tests proving QR quiet-zone spaces survive rendered DOM and clipboard copy for normal and truncated block art.

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
  "target": "#93869",
  "source_refs": [
    "#93869",
    "#51868"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair existing PR #93869 by narrowing QR/block-art copy payload encoding to block-art only, preserving quiet-zone spaces through DOM parsing and clipboard copy, and keeping raw legacy/non-block-art `data-code` copy behavior intact.",
  "pr_title": "UI: preserve QR block-art copy whitespace",
  "pr_body": "## Summary\n- Repairs the existing #93869 branch so only QR/block-art code-block copy payloads use a marked encoded representation.\n- Decodes marked block-art payloads before clipboard copy while preserving raw legacy/non-block-art `data-code` payload support.\n- Adds focused coverage proving leading quiet-zone spaces survive rendered DOM parsing and clipboard copy for normal and truncated block art.\n\n## Credit\nThis continues the replacement fix path for #51868 and preserves credit for @emg110's original report, implementation direction, and proof.\n\n## Validation\n- pnpm test:serial ui/src/ui/markdown.test.ts ui/src/ui/chat/grouped-render.test.ts ui/src/ui/views/chat.test.ts\n- pnpm check:changed\n- Fresh Codex /review required before push/merge handling.\n\n## Notes\nDo not edit prompt snapshots, ClawHub cleanup behavior, or #51868 as part of this repair.",
  "likely_files": [
    "ui/src/ui/markdown.ts",
    "ui/src/ui/chat/code-block-copy-payload.ts",
    "ui/src/ui/views/chat.ts",
    "ui/src/ui/markdown.test.ts",
    "ui/src/ui/views/chat.test.ts",
    "ui/src/ui/chat/grouped-render.test.ts"
  ],
  "validation_commands": [
    "pnpm test:serial ui/src/ui/markdown.test.ts ui/src/ui/chat/grouped-render.test.ts ui/src/ui/views/chat.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve #93869 as the existing replacement PR rather than opening another PR.",
    "Carry forward credit to @emg110 and https://github.com/openclaw/openclaw/pull/51868 for the original report, implementation direction, and proof.",
    "Do not edit #51868 in this run."
  ],
  "source_job": "jobs/openclaw/inbox/repair-93869-qr-ci.md",
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
| #93869 | fix_needed | planned | canonical | Canonical PR is useful but not currently merge-ready because the CI remediation requires a branch update on the existing credited replacement PR. |
| cluster:repair-93869-qr-ci | build_fix_artifact | planned |  | Fix is narrow, executable, non-security, and confined to the existing canonical repair branch. |
| #51868 | keep_related | planned | fixed_by_candidate | #51868 is the credited source PR for the same fix path, but this run is scoped to repairing #93869 only. |

## Needs Human

- none
