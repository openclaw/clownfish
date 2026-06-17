import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("review-results fails worker infrastructure auth blocks", () => {
  const dir = makeResultDir({
    status: "blocked",
    summary:
      "2026-06-09T05:41:01Z ERROR codex_api::endpoint::responses_websocket: failed to connect to websocket: HTTP error: 401 Unauthorized, url: wss://api.openai.com/v1/responses",
    needs_human: ["HTTP error: 401 Unauthorized"],
  });

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /worker infrastructure blocked/);
  assert.match(result.stdout, /401 Unauthorized/);
});

test("review-results fails explicit worker failed status", () => {
  const dir = makeResultDir({
    status: "failed",
    summary: "worker produced an invalid terminal result",
  });

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /worker result status is failed/);
});

test("review-results allows actionless blocked maintainer decisions", () => {
  const dir = makeResultDir({
    status: "blocked",
    summary: "needs maintainer choice between two live canonical issues",
    needs_human: ["choose canonical issue"],
  });

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results ignores negated security-sensitive assertions", () => {
  const dir = makeResultDir(
    {
      actions: [
        {
          target: "#90672",
          action: "keep_independent",
          status: "planned",
          idempotency_key: "cluster-test:keep-independent:90672",
          classification: "independent",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T14:15:01Z",
          evidence: ["Validator output did not mark #90672 as a security-sensitive target."],
          reason: "Distinct Telegram diagnostic PR with conflict state; keep independent.",
        },
      ],
    },
    {
      plan: {
        items: [
          {
            ref: "#90672",
            kind: "pull_request",
            state: "open",
            title: "fix(telegram): report blocked group ingress in /status",
            labels: ["channel: telegram", "proof: sufficient"],
            updated_at: "2026-06-15T14:15:01Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results ignores false security_sensitive field echoes", () => {
  const dir = makeResultDir(
    {
      actions: [
        {
          target: "#90672",
          action: "keep_independent",
          status: "planned",
          idempotency_key: "cluster-test:keep-independent:90672",
          classification: "independent",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T14:15:01Z",
          evidence: ["Preflight item showed security_sensitive=false and securitySensitive: false."],
          reason: "No security-sensitive signal detected in hydrated job refs.",
        },
      ],
    },
    {
      plan: {
        items: [
          {
            ref: "#90672",
            kind: "pull_request",
            state: "open",
            title: "fix(telegram): report blocked group ingress in /status",
            labels: ["channel: telegram", "proof: sufficient"],
            updated_at: "2026-06-15T14:15:01Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results ignores security-boundary no-signal prose in mutating action evidence", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#90672",
          action: "comment",
          status: "planned",
          idempotency_key: "cluster-test:comment:90672",
          classification: "canonical",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T14:15:01Z",
          comment: "Rebase review is required before finalization.",
          evidence: ["No security-sensitive hydrated item is present."],
          reason: "The contributor branch needs a fresh review before finalization.",
        },
      ],
    },
    {
      job: closeOnlyJob(),
      plan: {
        items: [
          {
            ref: "#90672",
            kind: "pull_request",
            state: "open",
            title: "fix(telegram): report blocked group ingress in /status",
            labels: ["channel: telegram", "proof: sufficient"],
            updated_at: "2026-06-15T14:15:01Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results ignores no-signal prose with a security_boundary field name", () => {
  const dir = makeResultDir(
    {
      actions: [
        {
          target: "#90672",
          action: "comment",
          status: "planned",
          idempotency_key: "cluster-test:comment:90672",
          classification: "canonical",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T14:15:01Z",
          comment: "Rebase review is required before finalization.",
          evidence: ["No security-sensitive signal in the hydrated preflight; security_boundary reports no security-sensitive job refs."],
          reason: "The contributor branch needs a fresh review before finalization.",
        },
      ],
    },
    {
      job: closeOnlyJob(),
      plan: {
        items: [
          {
            ref: "#90672",
            kind: "pull_request",
            state: "open",
            title: "fix(telegram): report blocked group ingress in /status",
            labels: ["channel: telegram", "proof: sufficient"],
            updated_at: "2026-06-15T14:15:01Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results ignores separately routed security refs for non-security targets", () => {
  const dir = makeResultDir(
    {
      actions: [
        {
          target: "#39476",
          action: "keep_canonical",
          status: "planned",
          idempotency_key: "cluster-test:keep-canonical:39476",
          classification: "canonical",
          target_kind: "issue",
          target_updated_at: "2026-06-15T10:00:00Z",
          evidence: ["Linked implementation PR #91161 is hydrated as security-sensitive and must be quarantined."],
          reason:
            "#39476 remains canonical; any security-sensitive linked implementation path is quarantined separately.",
        },
      ],
    },
    {
      plan: {
        items: [
          {
            ref: "#39476",
            kind: "issue",
            state: "open",
            title: "A2A sessions_send causes duplicate messages",
            labels: ["bug"],
            updated_at: "2026-06-15T10:00:00Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results ignores sibling security routing prose for keep actions", () => {
  const dir = makeResultDir(
    {
      actions: [
        {
          target: "#48045",
          action: "keep_canonical",
          status: "planned",
          idempotency_key: "cluster-test:keep-canonical:48045",
          classification: "canonical",
          target_kind: "issue",
          target_updated_at: "2026-06-15T10:00:00Z",
          evidence: ["#89416 is quarantined through route_security."],
          reason: "#48045 remains canonical while the linked security-signaled PR is handled through security triage.",
        },
        {
          target: "#89416",
          action: "route_security",
          status: "planned",
          idempotency_key: "cluster-test:route-security:89416",
          classification: "security_sensitive",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T11:00:00Z",
          evidence: ["Linked implementation has a security-sensitive auth boundary."],
          reason: "Route the implementation PR to central security handling.",
        },
      ],
    },
    {
      plan: {
        items: [
          {
            ref: "#48045",
            kind: "issue",
            state: "open",
            title: "File changes lost while switching sessions",
            labels: ["bug", "impact:data-loss"],
            updated_at: "2026-06-15T10:00:00Z",
            security_sensitive: false,
          },
          {
            ref: "#89416",
            kind: "pull_request",
            state: "open",
            title: "fix: tighten session authorization",
            labels: ["bug"],
            updated_at: "2026-06-15T11:00:00Z",
            security_sensitive: true,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results allows skipped keep_closed for closed security-shaped context refs", () => {
  const dir = makeResultDir(
    {
      actions: [
        {
          target: "#41964",
          action: "keep_closed",
          status: "skipped",
          idempotency_key: "cluster-test:keep-closed:41964",
          classification: "superseded",
          target_kind: "pull_request",
          target_updated_at: "2026-04-28T09:03:01Z",
          evidence: [
            "#41964 is already closed.",
            "Hydrated comments mention a hidden-run chat/node fanout security boundary and sensitive-data exposure risk.",
          ],
          reason: "Closed superseded implementation context only.",
        },
      ],
    },
    {
      plan: {
        items: [
          {
            ref: "#41964",
            kind: "pull_request",
            state: "closed",
            title: "fix(tui): render external-channel session messages live",
            labels: ["gateway"],
            updated_at: "2026-04-28T09:03:01Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results allows unavailable security route when hydration was rate limited", () => {
  const dir = makeResultDir(
    {
      actions: [
        {
          target: "#89935",
          action: "route_security",
          status: "planned",
          idempotency_key: "cluster-test:route_security:89935:unavailable",
          classification: "security_sensitive",
          target_kind: "unknown",
          target_updated_at: null,
          evidence: [
            "Job body labels #89935 merge-risk: security-boundary.",
            "Hydration failed with GitHub API rate limit HTTP 403 before live metadata was available.",
          ],
          reason: "Route the security-shaped PR to central security handling without mutation.",
        },
      ],
    },
    {
      plan: {
        items: [
          {
            ref: "#89935",
            kind: "unknown",
            state: "unavailable",
            updated_at: null,
            security_sensitive: false,
            hydration_error: "gh: API rate limit exceeded for installation ID 127893203 (HTTP 403)",
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
  assert.match(result.stdout, /route_security target was not marked security_sensitive in preflight/);
});

test("review-results allows non-security fix artifact with separately routed security ref", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#38829",
          action: "keep_canonical",
          status: "planned",
          idempotency_key: "cluster-test:keep-canonical:38829",
          classification: "canonical",
          target_kind: "issue",
          target_updated_at: "2026-06-15T10:00:00Z",
          canonical: "#38829",
          evidence: ["#38829 remains the non-security live transcript issue."],
          reason: "Keep the canonical issue open until the separate fix PR lands.",
        },
        {
          target: "#73402",
          action: "route_security",
          status: "planned",
          idempotency_key: "cluster-test:route-security:73402",
          classification: "security_sensitive",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T17:50:07Z",
          evidence: ["#73402 has security-boundary review findings and is routed separately."],
          reason: "Route this exact linked security-sensitive PR to central security handling.",
        },
        {
          target: "cluster:cluster-test",
          action: "build_fix_artifact",
          status: "planned",
          idempotency_key: "cluster-test:build-fix-artifact:v1",
          classification: "canonical",
          target_kind: null,
          target_updated_at: null,
          evidence: [
            "The linked security-sensitive PR is quarantined separately; this fix artifact targets the non-security canonical issue.",
          ],
          reason: "Open a narrow non-security TUI live transcript replacement fix for #38829.",
        },
      ],
      fix_artifact: {
        summary: "Add a narrow live transcript subscription path for the TUI without touching the quarantined security PR.",
        affected_surfaces: ["tui"],
        likely_files: ["src/tui/tui.ts", "src/tui/tui-event-handlers.ts", "src/tui/tui.test.ts"],
        linked_refs: ["#38829"],
        validation_commands: ["pnpm check:changed"],
        changelog_required: true,
        credit_notes: ["Security-shaped linked PR #73402 is quarantined separately."],
        pr_title: "fix(tui): subscribe to live session transcript updates",
        pr_body: "## Summary\n- fix the non-security TUI live transcript update path\n\n## Test plan\n- pnpm check:changed",
        repair_strategy: "new_fix_pr",
        allow_no_pr: false,
      },
    },
    {
      job: fixEnabledJob(),
      plan: {
        items: [
          {
            ref: "#38829",
            kind: "issue",
            state: "open",
            title: "openclaw tui terminal cannot receive real-time messages",
            labels: ["bug", "tui"],
            updated_at: "2026-06-15T10:00:00Z",
            security_sensitive: false,
          },
          {
            ref: "#73402",
            kind: "pull_request",
            state: "open",
            title: "fix(tui): subscribe to live session transcript updates",
            labels: ["security-review"],
            updated_at: "2026-06-15T17:50:07Z",
            security_sensitive: true,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results allows non-security fix actions that mention sibling security-boundary routes", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#81410",
          action: "fix_needed",
          status: "planned",
          idempotency_key: "cluster-test:fix-needed:81410",
          classification: "related",
          target_kind: "issue",
          target_updated_at: "2026-06-15T10:00:00Z",
          evidence: [
            "#81410 reports a root shell with stale SUDO_USER causing lifecycle commands to target the wrong user manager.",
            "The existing linked #79538 PR does not list #81410 and is quarantined to central security handling due to security-signal/security-boundary indicators.",
          ],
          reason: "A narrow new fix PR is appropriate for #81410 while the linked security-boundary PR is routed separately.",
        },
      ],
      fix_artifact: {
        summary: "Repair stale SUDO_USER user-scope resolution for root gateway lifecycle commands.",
        affected_surfaces: ["gateway", "systemd"],
        likely_files: ["src/daemon/systemd.ts", "src/daemon/systemd.test.ts"],
        linked_refs: ["#81410"],
        validation_commands: ["pnpm check:changed"],
        changelog_required: true,
        credit_notes: ["Sibling security-boundary PR #79538 is routed separately."],
        pr_title: "fix(gateway): ignore stale sudo scope for root systemd commands",
        pr_body: "## Summary\n- fix stale root systemd user scope resolution\n\n## Test plan\n- pnpm check:changed",
        repair_strategy: "new_fix_pr",
        allow_no_pr: false,
      },
    },
    {
      job: fixEnabledJob(),
      plan: {
        items: [
          {
            ref: "#81410",
            kind: "issue",
            state: "open",
            title: "Gateway lifecycle commands target stale SUDO_USER scope from root shell",
            labels: ["bug", "systemd"],
            updated_at: "2026-06-15T10:00:00Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results allows unavailable non-mutating plan classifications", () => {
  const dir = makeResultDir(
    {
      actions: [
        {
          target: "#79703",
          action: "keep_independent",
          status: "planned",
          idempotency_key: "cluster-test:keep-independent:79703:unavailable",
          classification: "independent",
          target_kind: "unknown",
          target_updated_at: "2026-06-14T21:11:53Z",
          evidence: ["Hydration unavailable, so keep the PR independent without mutation."],
          reason: "No safe live metadata for a mutating recommendation.",
        },
      ],
    },
    {
      plan: {
        items: [
          {
            ref: "#79703",
            kind: "unknown",
            state: "unavailable",
            updated_at: null,
            security_sensitive: false,
            hydration_error: "gh: not found",
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
  assert.match(result.stdout, /target_updated_at ignored because preflight item was unavailable/);
});

test("review-results rejects non-security routes for security-shaped targets", () => {
  const dir = makeResultDir(
    {
      actions: [
        {
          target: "#91286",
          action: "keep_independent",
          status: "planned",
          idempotency_key: "cluster-test:keep-independent:91286",
          classification: "independent",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T10:00:00Z",
          evidence: ["PR title is fix(security): tighten SecretRef auth boundary."],
          reason: "Classified as independent.",
        },
      ],
    },
    {
      plan: {
        items: [
          {
            ref: "#91286",
            kind: "pull_request",
            state: "open",
            title: "fix(security): tighten SecretRef auth boundary",
            labels: ["merge-risk: security-boundary"],
            updated_at: "2026-06-15T10:00:00Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /security-sensitive target must use route_security/);
});

test("review-results rejects route_security when preflight marks the target non-security", () => {
  const dir = makeResultDir(
    {
      actions: [
        {
          target: "#91286",
          action: "route_security",
          status: "planned",
          idempotency_key: "cluster-test:route-security:91286",
          classification: "security_sensitive",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T10:00:00Z",
          evidence: ["PR title is fix(security): tighten SecretRef auth boundary."],
          reason: "Route to central security handling.",
        },
      ],
    },
    {
      plan: {
        items: [
          {
            ref: "#91286",
            kind: "pull_request",
            state: "open",
            title: "fix(security): tighten SecretRef auth boundary",
            labels: ["merge-risk: security-boundary"],
            updated_at: "2026-06-15T10:00:00Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /route_security target was not marked security_sensitive in preflight/);
});

test("review-results rejects unavailable close-style plan actions", () => {
  const dir = makeResultDir(
    {
      actions: [
        {
          target: "#79703",
          action: "close_low_signal",
          status: "planned",
          idempotency_key: "cluster-test:close-low-signal:79703:unavailable",
          classification: "low_signal",
          target_kind: "pull_request",
          target_updated_at: "2026-06-14T21:11:53Z",
          evidence: ["Hydration unavailable."],
          reason: "Cannot prove this PR is live and low-signal.",
        },
      ],
    },
    {
      plan: {
        items: [
          {
            ref: "#79703",
            kind: "unknown",
            state: "unavailable",
            updated_at: null,
            security_sensitive: false,
            hydration_error: "gh: not found",
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /close action targets unavailable item/);
  assert.match(result.stdout, /target_updated_at does not match preflight/);
});

test("review-results rejects fix artifacts when source job disallows fix PRs", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "cluster:cluster-test",
          action: "build_fix_artifact",
          status: "planned",
          idempotency_key: "projectclownfish:cluster-test:build-fix-artifact:v1",
          evidence: ["closed-source PR is useful, but this job is close-only"],
        },
      ],
      fix_artifact: {
        summary: "build a narrow credited fix",
        affected_surfaces: ["control ui"],
        likely_files: ["ui/src/ui/chat/build-chat-items.ts"],
        linked_refs: ["#1"],
        validation_commands: ["pnpm check:changed"],
        changelog_required: false,
        credit_notes: ["credit source PR"],
        pr_title: "fix: narrow issue",
        pr_body: "## Summary\n- fix the issue",
        repair_strategy: "new_fix_pr",
      },
    },
    { job: closeOnlyJob() },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /fix actions are not permitted by job frontmatter/);
  assert.match(result.stdout, /allowed_actions lacks fix/);
  assert.match(result.stdout, /allow_fix_pr is not true/);
});

test("review-results verifies fix artifacts with a permission snapshot after source job removal", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "cluster:cluster-test",
          action: "build_fix_artifact",
          status: "planned",
          idempotency_key: "projectclownfish:cluster-test:build-fix-artifact:v1",
          evidence: ["The archived plan proves this job permits a narrow fix PR."],
        },
      ],
      fix_artifact: {
        summary: "build a narrow credited fix",
        affected_surfaces: ["control ui"],
        likely_files: ["ui/src/ui/chat/build-chat-items.ts"],
        linked_refs: ["#1"],
        validation_commands: ["pnpm check:changed"],
        changelog_required: false,
        credit_notes: ["credit source PR"],
        pr_title: "fix: narrow issue",
        pr_body: "## Summary\n- fix the issue",
        repair_strategy: "new_fix_pr",
      },
    },
    {
      job: fixEnabledJob(),
      plan: {
        source_job_permissions: {
          allowed_actions: ["comment", "label", "close", "fix", "raise_pr"],
          blocked_actions: ["force_push"],
          allow_fix_pr: true,
          allow_merge: false,
          maintainer_calibration: [],
        },
      },
    },
  );
  fs.rmSync(path.join(dir, "job.md"));

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results rejects incomplete permission snapshots after source job removal", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "cluster:cluster-test",
          action: "build_fix_artifact",
          status: "planned",
          idempotency_key: "projectclownfish:cluster-test:build-fix-artifact:v1",
          evidence: ["The permission snapshot is incomplete."],
        },
      ],
      fix_artifact: {
        summary: "build a narrow credited fix",
        affected_surfaces: ["control ui"],
        likely_files: ["ui/src/ui/chat/build-chat-items.ts"],
        linked_refs: ["#1"],
        validation_commands: ["pnpm check:changed"],
        changelog_required: false,
        credit_notes: ["credit source PR"],
        pr_title: "fix: narrow issue",
        pr_body: "## Summary\n- fix the issue",
        repair_strategy: "new_fix_pr",
      },
    },
    {
      job: fixEnabledJob(),
      plan: {
        source_job_permissions: {
          allowed_actions: ["comment", "label", "close", "fix", "raise_pr"],
          blocked_actions: ["force_push"],
          allow_fix_pr: true,
          maintainer_calibration: [],
        },
      },
    },
  );
  fs.rmSync(path.join(dir, "job.md"));

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /fix actions require source job permissions/);
});

test("review-results enforces calibrated canonical finalization after source job removal", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      canonical_pr: "#1",
    },
    {
      job: calibratedFixEnabledJob(),
      plan: {
        source_job_permissions: {
          allowed_actions: ["comment", "label", "close", "fix", "raise_pr"],
          blocked_actions: ["force_push"],
          allow_fix_pr: true,
          allow_merge: false,
          maintainer_calibration: ["Require a planned fix or merge for an open canonical PR."],
        },
        items: [
          {
            ref: "#1",
            kind: "pull_request",
            state: "open",
            updated_at: "2026-06-18T00:00:00Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );
  fs.rmSync(path.join(dir, "job.md"));

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /#1 calibrated canonical PR requires either a planned merge action with merge_preflight or a planned fix action/);
});

function makeResultDir(overrides, options = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-review-"));
  const result = {
    status: "planned",
    repo: "openclaw/openclaw",
    cluster_id: "cluster-test",
    mode: "plan",
    summary: "test result",
    actions: [],
    needs_human: [],
    ...overrides,
  };
  fs.writeFileSync(path.join(dir, "result.json"), `${JSON.stringify(result, null, 2)}\n`);
  if (options.job || options.plan) {
    const jobPath = path.join(dir, "job.md");
    fs.writeFileSync(jobPath, options.job ?? closeOnlyJob());
    fs.writeFileSync(
      path.join(dir, "cluster-plan.json"),
      `${JSON.stringify(
        {
          source_job: path.relative(repoRoot, jobPath),
          repo: result.repo,
          cluster_id: result.cluster_id,
          mode: result.mode,
          items: [],
          ...options.plan,
        },
        null,
        2,
      )}\n`,
    );
  }
  return dir;
}

function review(dir) {
  return spawnSync(process.execPath, ["scripts/review-results.mjs", dir], {
    cwd: repoRoot,
    encoding: "utf8",
  });
}

function closeOnlyJob() {
  return `---
repo: openclaw/openclaw
cluster_id: cluster-test
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - fix
  - raise_pr
candidates:
  - "#1"
allow_fix_pr: false
---

# Close-only job
`;
}

function fixEnabledJob() {
  return `---
repo: openclaw/openclaw
cluster_id: cluster-test
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - fix
  - raise_pr
blocked_actions:
  - force_push
candidates:
  - "#38829"
allow_fix_pr: true
---

# Fix-enabled job
`;
}

function calibratedFixEnabledJob() {
  return `---
repo: openclaw/openclaw
cluster_id: cluster-test
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - fix
  - raise_pr
blocked_actions:
  - force_push
maintainer_calibration:
  - "Require a planned fix or merge for an open canonical PR."
candidates:
  - "#1"
allow_fix_pr: true
---

# Calibrated fix-enabled job
`;
}
