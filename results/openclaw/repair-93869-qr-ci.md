---
repo: "openclaw/openclaw"
cluster_id: "repair-93869-qr-ci"
mode: "autonomous"
run_id: "27771404713"
workflow_run_id: "27771404713"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27771404713"
head_sha: "e81e61d1b5dcab67b8f9b11b56c123e488966d61"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-06-18T15:48:18.821Z"
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
needs_human_count: 1
---

# repair-93869-qr-ci

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27771404713](https://github.com/openclaw/clownfish/actions/runs/27771404713)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/pull/93869

## Summary

#93869 remains the canonical repair path for the QR half-block rendering/copy regression, with #51868 preserved as source/credit context. The #93869 item is downgraded to `needs_human` instead of `route_security` because the hydrated preflight explicitly marks #93869 as `security_sensitive: false`, and the security repair rule forbids overriding that with validator wording or check names. A complete non-security fix artifact is preserved for the cluster, but implementation is blocked in this worker because the target checkout is a grafted main-only snapshot, `gh` is unavailable without `GH_TOKEN`, and fetching `clownfish/repair-51868-qr-rendering` from origin timed out.

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
| Needs human | 1 |

## Repair Candidate

```json
{
  "target": "#93869",
  "source_refs": [
    "#93869",
    "#51868"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [],
  "summary": "Repair #93869 on `clownfish/repair-51868-qr-rendering` so QR/block-art copy preserves leading quiet-zone spaces after DOM parsing. Use a deterministic marked `data-code` representation only for block-art payloads, decode marked payloads immediately before clipboard copy, keep raw payload compatibility, and add focused DOM plus clipboard-handler coverage.",
  "pr_title": "UI: render half-block QR output in web chat",
  "pr_body": "## Summary\n- Repairs the existing #93869 QR/block-art path so leading quiet-zone spaces survive rendered DOM parsing and clipboard copy.\n- Encodes only detected block-art `data-code` payloads with a deterministic marker, decodes marked payloads before `copyToClipboard`, and keeps existing raw payloads supported.\n- Updates focused markdown/chat tests to prove rendered code blocks and clipboard payloads preserve the two leading spaces for normal and truncated QR art.\n\n## Credit\nThis continues to carry forward the fix idea and reproduction from @emg110 in https://github.com/openclaw/openclaw/pull/51868.\n\n## Validation\n- pnpm test ui/src/ui/markdown.test.ts ui/src/ui/chat/grouped-render.test.ts ui/src/ui/views/chat.test.ts\n- pnpm check:changed\n- git diff --check\n\n## Notes\nDo not edit unrelated prompt snapshots or ClawHub cleanup behavior; those failures are known current-main drift per the repair job.",
  "likely_files": [
    "ui/src/ui/markdown.ts",
    "ui/src/ui/markdown.test.ts",
    "ui/src/ui/chat/grouped-render.test.ts",
    "ui/src/ui/views/chat.ts",
    "ui/src/ui/views/chat.test.ts"
  ],
  "validation_commands": [
    "pnpm test ui/src/ui/markdown.test.ts ui/src/ui/chat/grouped-render.test.ts ui/src/ui/views/chat.test.ts",
    "pnpm check:changed",
    "git diff --check"
  ],
  "credit_notes": [
    "Preserve #93869 as the canonical credited replacement PR.",
    "Keep #51868 and @emg110 credited in the PR body and release-note context as the original report, implementation direction, and proof source.",
    "Do not open a second replacement PR and do not alter #51868."
  ],
  "source_job": "jobs/openclaw/inbox/repair-93869-qr-ci.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [
    "Resolve validator/preflight conflict for #93869: validator demands `route_security`, but hydrated preflight marks #93869 `security_sensitive: false`, which the security repair rule says is authoritative and not overridable."
  ],
  "repair_status": null,
  "terminal": null
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | skipped |  |  | worker result status blocked is not executable |

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
| #93869 | needs_human | blocked | needs_human | Human review is required for the validator/preflight security conflict; this worker cannot safely route #93869 to security because hydrated preflight marks it non-security-sensitive. |
| #51868 | keep_related | planned | superseded | #51868 is source/credit context for the same QR half-block fix; #93869 is the canonical replacement path. |
| cluster:repair-93869-qr-ci | build_fix_artifact | blocked |  | A complete repair plan exists, but local implementation is blocked because the existing PR branch is not available in this checkout. |

## Needs Human

- Resolve validator/preflight conflict for #93869: validator demands `route_security`, but hydrated preflight marks #93869 `security_sensitive: false`, which the security repair rule says is authoritative and not overridable.
