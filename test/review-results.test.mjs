import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("codex result schema requires every object property for strict response formatting", () => {
  const schema = JSON.parse(fs.readFileSync(path.join(repoRoot, "schemas/codex-result.schema.json"), "utf8"));
  const failures = [];

  visitStrictObjects(schema, "$", failures);

  assert.deepEqual(failures, []);
});

test("codex result schema avoids unsupported structured output keywords", () => {
  const schema = JSON.parse(fs.readFileSync(path.join(repoRoot, "schemas/codex-result.schema.json"), "utf8"));
  const failures = [];

  visitUnsupportedKeywords(schema, "$", failures);

  assert.deepEqual(failures, []);
});

test("strict schema guard covers definitions, nullable objects, and exact required keys", () => {
  const failures = [];

  visitStrictObjects(
    {
      $defs: {
        nested: {
          type: ["object", "null"],
          properties: {
            value: { type: "string" },
          },
          required: ["stale", "value"],
          additionalProperties: true,
        },
      },
    },
    "$",
    failures,
  );

  assert.deepEqual(failures, [
    "$.$defs.nested: additionalProperties must be false",
    '$.$defs.nested: required properties ["stale","value"] do not match ["value"]',
  ]);
});

function visitStrictObjects(schema, schemaPath, failures) {
  if (!schema || typeof schema !== "object") return;

  const types = Array.isArray(schema.type) ? schema.type : [schema.type];
  if (types.includes("object") || Object.hasOwn(schema, "properties")) {
    if (schema.additionalProperties !== false) {
      failures.push(`${schemaPath}: additionalProperties must be false`);
    }
    const properties = Object.keys(schema.properties ?? {}).sort();
    const required = [...(schema.required ?? [])].sort();
    if (!Array.isArray(schema.required) || JSON.stringify(required) !== JSON.stringify(properties)) {
      failures.push(
        `${schemaPath}: required properties ${JSON.stringify(required)} do not match ${JSON.stringify(properties)}`,
      );
    }
  }

  for (const key of ["properties", "$defs", "definitions", "patternProperties", "dependentSchemas"]) {
    const value = schema[key];
    if (value && typeof value === "object" && !Array.isArray(value)) {
      for (const [property, propertySchema] of Object.entries(value)) {
        visitStrictObjects(propertySchema, `${schemaPath}.${key}.${property}`, failures);
      }
    }
  }
  for (const key of [
    "items",
    "contains",
    "not",
    "if",
    "then",
    "else",
    "propertyNames",
    "unevaluatedProperties",
  ]) {
    const value = schema[key];
    if (value && typeof value === "object" && !Array.isArray(value)) {
      visitStrictObjects(value, `${schemaPath}.${key}`, failures);
    }
  }
  for (const key of ["allOf", "anyOf", "oneOf", "prefixItems"]) {
    const value = schema[key];
    if (Array.isArray(value)) {
      value.forEach((nestedSchema, index) => {
        visitStrictObjects(nestedSchema, `${schemaPath}.${key}[${index}]`, failures);
      });
    }
  }
}

function visitUnsupportedKeywords(schema, schemaPath, failures) {
  if (!schema || typeof schema !== "object") return;

  if (Object.hasOwn(schema, "uniqueItems")) {
    failures.push(`${schemaPath}: uniqueItems is not supported by OpenAI Structured Outputs`);
  }

  for (const [key, value] of Object.entries(schema)) {
    if (!value || typeof value !== "object") continue;
    if (Array.isArray(value)) {
      value.forEach((nestedSchema, index) => {
        visitUnsupportedKeywords(nestedSchema, `${schemaPath}.${key}[${index}]`, failures);
      });
    } else {
      visitUnsupportedKeywords(value, `${schemaPath}.${key}`, failures);
    }
  }
}

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

test("review-results fails response-format schema blocks", () => {
  const dir = makeResultDir({
    status: "blocked",
    summary:
      "Invalid schema for response_format 'codex_output_schema': In context=('properties', 'actions', 'items'), 'required' is required to be supplied and include every key in properties.",
    needs_human: ["invalid_json_schema"],
  });

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /worker infrastructure blocked/);
  assert.match(result.stdout, /Invalid schema for response_format/);
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

test("review-results skips target checkouts when scanning run directories", () => {
  const dir = makeResultDir({
    status: "planned",
    summary: "direct result",
  });
  const targetDir = path.join(dir, "target", "nested");
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(
    path.join(targetDir, "result.json"),
    `${JSON.stringify({ status: "failed", summary: "target checkout result must be ignored" }, null, 2)}\n`,
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  const parsed = JSON.parse(result.stdout);
  assert.equal(parsed.reports.length, 1);
  assert.equal(path.basename(parsed.reports[0].result), "result.json");
  assert.doesNotMatch(parsed.reports[0].result.split(path.sep).join("/"), /target/);
  assert.doesNotMatch(result.stdout, /target checkout result must be ignored/);
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

test("review-results trusts explicit false preflight classifications", () => {
  const dir = makeResultDir(
    {
      summary: "Hydrated preflight marks every target in this inventory shard security_sensitive=false.",
      actions: [
        {
          target: "#90672",
          action: "needs_human",
          status: "planned",
          idempotency_key: "cluster-test:needs-human:90672",
          classification: "needs_human",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T14:15:01Z",
          evidence: [
            "Deterministic validation separately reported: #90672 security-sensitive target must use route_security.",
          ],
          reason:
            "Human review is required to reconcile the validator's security-sensitive classification with the authoritative hydrated preflight item before any routing or mutating action.",
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
            title: "fix: prevent private replies leaking to public channels",
            labels: ["channel: telegram", "proof: sufficient"],
            updated_at: "2026-06-15T14:15:01Z",
            security_sensitive: false,
            body_excerpt: "The preflight reviewed a privacy leak but classified this target as non-security.",
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results trusts plan summaries with no security-sensitive hydrated refs", () => {
  const dir = makeResultDir(
    {
      summary:
        "Plan-only inventory shard. The preflight artifact reports no security-sensitive hydrated refs; merge, fix, and raise_pr are blocked.",
      actions: [
        {
          target: "#90672",
          action: "keep_independent",
          status: "planned",
          idempotency_key: "cluster-test:keep-independent:90672:no-hydrated-security-items",
          classification: "independent",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T14:15:01Z",
          evidence: ["No hydrated duplicate or supersession evidence is available."],
          reason: "Independent PR.",
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
            title: "fix(security): avoid false positives in credential redaction",
            labels: ["proof: sufficient"],
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

test("review-results honors plan-level no-security routing assertions", () => {
  const dir = makeResultDir(
    {
      summary:
        "This inventory shard has no shared canonical; no close, merge, fix, or security-route action is justified from preflight evidence.",
      actions: [
        {
          target: "#90672",
          action: "keep_independent",
          status: "planned",
          idempotency_key: "cluster-test:keep-independent:90672:no-security-route",
          classification: "independent",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T14:15:01Z",
          evidence: ["No duplicate or superseded target is hydrated for this inventory shard."],
          reason: "Independent PR; keep open.",
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
            title: "fix(secrets): prevent half-migrated credentials",
            labels: ["proof: sufficient"],
            updated_at: "2026-06-15T14:15:01Z",
            security_sensitive: false,
            body_excerpt: "Credential migration now commits stores before the config file.",
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

test("review-results rejects planned merges without a reviewed PR head SHA", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#1",
          action: "merge_canonical",
          status: "planned",
          idempotency_key: "cluster-test:merge:1",
          classification: "canonical",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T14:15:01Z",
          canonical: "#1",
          duplicate_of: null,
          candidate_fix: null,
          comment: null,
          evidence: ["Fresh merge preflight completed."],
          reason: "Canonical PR is ready to merge.",
        },
      ],
      merge_preflight: [validMergePreflight("#1")],
    },
    {
      job: mergeJob(),
      plan: {
        items: [
          {
            ref: "#1",
            kind: "pull_request",
            state: "open",
            title: "fix: merge guard",
            labels: ["proof: sufficient"],
            updated_at: "2026-06-15T14:15:01Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /merge action requires expected_head_sha as a 40-character Git SHA/);
});

test("review-results ignores worker-authored merge proof when deterministic external preflight is required", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#1",
          action: "merge_canonical",
          status: "planned",
          idempotency_key: "cluster-test:merge:1",
          expected_head_sha: "7".repeat(40),
          classification: "canonical",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T14:15:01Z",
          canonical: "#1",
          duplicate_of: null,
          candidate_fix: null,
          comment: null,
          evidence: ["Worker claims the PR is ready."],
          reason: "Canonical PR is ready to merge.",
        },
      ],
      merge_preflight: [validMergePreflight("#1")],
    },
    {
      job: mergeJob({ requireExternalPreflight: true }),
      plan: {
        items: [
          {
            ref: "#1",
            kind: "pull_request",
            state: "open",
            title: "fix: merge guard",
            labels: ["proof: sufficient"],
            updated_at: "2026-06-15T14:15:01Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /worker-authored merge_preflight is ignored/);
});

test("review-results accepts a blocked external preflight request for calibrated finalization", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      canonical_pr: "#1",
      actions: [blockedMergeCandidate("#1")],
      merge_preflight: [],
    },
    {
      job: mergeJob({ requireExternalPreflight: true, calibrated: true }),
      plan: {
        items: [openPrItem("#1", "2026-06-27T16:00:00Z")],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
});

test("review-results ignores empty security boundary item collections in mutating evidence", () => {
  const dir = makeResultDir(
    {
      mode: "execute",
      actions: [
        {
          target: "#90672",
          action: "comment",
          status: "planned",
          idempotency_key: "cluster-test:comment:90672:empty-security-items",
          classification: "canonical",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T14:15:01Z",
          comment: "The closeout remains pending maintainer review.",
          evidence: [
            "Preflight item_matrix marks #90672 security_sensitive false.",
            "security_boundary.security_sensitive_items is empty, so route_security is not allowed for this run.",
          ],
          reason: "The target remains a non-security maintainer workflow item.",
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

test("review-results rejects route_security without a hydrated preflight item", () => {
  const dir = makeResultDir({
    actions: [
      {
        target: "#89936",
        action: "route_security",
        status: "planned",
        idempotency_key: "cluster-test:route_security:89936:missing",
        classification: "security_sensitive",
        target_kind: "unknown",
        target_updated_at: null,
        evidence: ["Imported metadata identified a security boundary."],
        reason: "Route to central security handling.",
      },
    ],
  });

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /route_security target was not hydrated in preflight/);
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
        validation_commands: ["pnpm check:changed", "scripts/pr review-validate-artifacts 94022"],
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

test("review-results rejects synthetic cluster fix targets even with fabricated target metadata", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "cluster:cluster-test:googlechat-spacetype-repair",
          action: "build_fix_artifact",
          status: "planned",
          idempotency_key: "cluster-test:build-fix-artifact:googlechat",
          classification: "canonical",
          target_kind: "issue",
          target_updated_at: "2026-06-21T09:49:00Z",
          evidence: ["The plan claims a narrow Google Chat repair."],
          reason: "Open a replacement fix PR.",
        },
      ],
      fix_artifact: validFixArtifact(),
    },
    { job: fixEnabledJob() },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /cluster:cluster-test:googlechat-spacetype-repair cluster-scoped target must be exactly cluster:cluster-test/);
});

test("review-results rejects multiple build fix artifact actions", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "cluster:cluster-test",
          action: "build_fix_artifact",
          status: "planned",
          idempotency_key: "cluster-test:build-fix-artifact:one",
          classification: "canonical",
          target_kind: null,
          target_updated_at: null,
          evidence: ["The first narrow repair is executable."],
          reason: "Open one narrow fix PR.",
        },
        {
          target: "cluster:cluster-test",
          action: "build_fix_artifact",
          status: "planned",
          idempotency_key: "cluster-test:build-fix-artifact:two",
          classification: "canonical",
          target_kind: null,
          target_updated_at: null,
          evidence: ["The second narrow repair is executable."],
          reason: "Open another narrow fix PR.",
        },
      ],
      fix_artifact: validFixArtifact(),
    },
    { job: fixEnabledJob() },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /result contains 2 build_fix_artifact actions; at most one is allowed/);
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

test("review-results does not treat the security-sensitive CI guard as a target signal", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#81410",
          action: "fix_needed",
          status: "planned",
          idempotency_key: "cluster-test:fix-needed:81410:ci-guard",
          classification: "related",
          target_kind: "issue",
          target_updated_at: "2026-06-15T10:00:00Z",
          evidence: [
            "#81410 still needs the narrow gateway lifecycle repair.",
            "The contributor PR checks passed, including security-sensitive-guard, dependency-guard, and check-lint.",
          ],
          reason: "A narrow new fix PR is appropriate for #81410.",
        },
      ],
      fix_artifact: {
        summary: "Repair stale SUDO_USER user-scope resolution for root gateway lifecycle commands.",
        affected_surfaces: ["gateway", "systemd"],
        likely_files: ["src/daemon/systemd.ts", "src/daemon/systemd.test.ts"],
        linked_refs: ["#81410"],
        validation_commands: ["pnpm check:changed"],
        changelog_required: true,
        credit_notes: ["Preserve contributor attribution for the source report."],
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

test("review-results ignores an explicit non-security boundary assertion in fix evidence", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#81410",
          action: "fix_needed",
          status: "planned",
          idempotency_key: "cluster-test:fix-needed:81410:security-boundary",
          classification: "canonical",
          target_kind: "issue",
          target_updated_at: "2026-06-15T10:00:00Z",
          evidence: [
            "#81410 still needs the narrow gateway lifecycle repair.",
            "Security boundary: preflight security_sensitive=false and security-sensitive guard passed; no route_security action needed.",
          ],
          reason: "A narrow new fix PR is appropriate for #81410.",
        },
      ],
      fix_artifact: {
        summary: "Repair stale SUDO_USER user-scope resolution for root gateway lifecycle commands.",
        affected_surfaces: ["gateway", "systemd"],
        likely_files: ["src/daemon/systemd.ts", "src/daemon/systemd.test.ts"],
        linked_refs: ["#81410"],
        validation_commands: ["pnpm check:changed"],
        changelog_required: true,
        credit_notes: ["Preserve contributor attribution for the source report."],
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

test("review-results rejects executable repair paths bound to risk-labeled preflight PRs", () => {
  const bindings = [
    {
      name: "direct action target",
      actions: [
        {
          target: "#91286",
          action: "fix_needed",
          status: "planned",
          idempotency_key: "cluster-test:fix-needed:91286:risk-label",
          classification: "canonical",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T10:00:00Z",
          evidence: ["#91286 is hydrated as the contributor repair target."],
          reason: "Repair the contributor branch and preserve attribution.",
        },
      ],
      fixArtifact: validFixArtifact(),
    },
    {
      name: "candidate fix reference",
      actions: [plannedBuildFixArtifact({ candidate_fix: "#91286" })],
      fixArtifact: validFixArtifact(),
    },
    {
      name: "artifact linked reference",
      actions: [plannedBuildFixArtifact()],
      fixArtifact: validFixArtifact({ linked_refs: ["#91286"] }),
    },
    {
      name: "artifact source reference",
      actions: [plannedBuildFixArtifact()],
      fixArtifact: validFixArtifact({ source_prs: ["https://github.com/openclaw/openclaw/pull/91286"] }),
    },
  ];

  for (const label of ["merge-risk: availability", "clawsweeper:automerge"]) {
    for (const binding of bindings) {
      const dir = makeResultDir(
        {
          mode: "autonomous",
          actions: binding.actions,
          fix_artifact: binding.fixArtifact,
        },
        {
          job: fixEnabledJob(),
          plan: {
            items: [
              {
                ref: "#91286",
                kind: "pull_request",
                state: "open",
                title: "fix(cron): repair timer behavior",
                labels: [label],
                updated_at: "2026-06-15T10:00:00Z",
                security_sensitive: false,
              },
            ],
          },
        },
      );

      const result = review(dir);

      assert.notEqual(result.status, 0, `${binding.name}: ${result.stdout || result.stderr}`);
      assert.match(
        result.stdout,
        new RegExp(`#91286 executable repair target has blocked label: ${label}`),
        binding.name,
      );
    }
  }
});

test("review-results permits non-security merge-risk labels for repair-only inventory jobs", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#91286",
          action: "fix_needed",
          status: "planned",
          idempotency_key: "cluster-test:fix-needed:91286:repair-only-risk",
          classification: "canonical",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T10:00:00Z",
          evidence: ["#91286 is hydrated as the contributor repair target."],
          reason: "Repair the contributor branch and preserve attribution.",
        },
      ],
      fix_artifact: validFixArtifact({
        repair_strategy: "repair_contributor_branch",
        linked_refs: ["#91286", "#91287"],
        source_prs: ["https://github.com/openclaw/openclaw/pull/91286"],
        credit_notes: ["Preserve the original contributor's credit on the repaired branch."],
      }),
    },
    {
      job: repairOnlyRiskRemediationJob(),
      plan: {
        items: [
          {
            ref: "#91286",
            kind: "pull_request",
            state: "open",
            title: "fix(cron): repair timer behavior",
            labels: ["merge-risk: availability"],
            updated_at: "2026-06-15T10:00:00Z",
            security_sensitive: false,
          },
          {
            ref: "#91287",
            kind: "pull_request",
            state: "open",
            title: "fix(cron): related timer behavior",
            labels: [],
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

test("review-results still blocks security merge-risk labels for repair-only inventory jobs", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#91286",
          action: "fix_needed",
          status: "planned",
          idempotency_key: "cluster-test:fix-needed:91286:repair-only-security",
          classification: "canonical",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T10:00:00Z",
          evidence: ["#91286 is hydrated as the contributor repair target."],
          reason: "Repair the contributor branch and preserve attribution.",
        },
      ],
      fix_artifact: validFixArtifact({
        repair_strategy: "repair_contributor_branch",
        linked_refs: ["#91286"],
        source_prs: ["https://github.com/openclaw/openclaw/pull/91286"],
        credit_notes: ["Preserve the original contributor's credit on the repaired branch."],
      }),
    },
    {
      job: repairOnlyRiskRemediationJob(),
      plan: {
        items: [
          {
            ref: "#91286",
            kind: "pull_request",
            state: "open",
            title: "fix(cron): repair timer behavior",
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
  assert.match(result.stdout, /#91286 executable repair target has blocked label: merge-risk: security-boundary/);
});

test("review-results permits non-security automerge risk labels for adopted repair jobs only", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#91286",
          action: "fix_needed",
          status: "planned",
          idempotency_key: "cluster-test:fix-needed:91286:adopted-automerge",
          classification: "canonical",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T10:00:00Z",
          evidence: ["#91286 is the bounded contributor repair target."],
          reason: "Repair the contributor branch and preserve attribution.",
        },
      ],
      fix_artifact: validFixArtifact({
        repair_strategy: "repair_contributor_branch",
        linked_refs: ["#91286"],
        source_prs: ["https://github.com/openclaw/openclaw/pull/91286"],
        credit_notes: ["Preserve the original contributor's credit on the repaired branch."],
      }),
    },
    {
      job: fixEnabledJob().replace("mode: autonomous", "mode: autonomous\nsource: pr_automerge"),
      plan: {
        source_job_permissions: {
          source: "pr_automerge",
          canonical: ["#91286"],
          allowed_actions: ["comment", "label", "close", "fix", "raise_pr"],
          blocked_actions: ["force_push"],
          allow_fix_pr: true,
          allow_merge: false,
          maintainer_calibration: [],
        },
        items: [
          {
            ref: "#91286",
            kind: "pull_request",
            state: "open",
            title: "fix(cron): repair timer behavior",
            labels: ["clawsweeper:automerge", "merge-risk: availability"],
            updated_at: "2026-06-15T10:00:00Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );
  fs.rmSync(path.join(dir, "job.md"));

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);

  const artifactPath = path.join(dir, "result.json");
  const mismatchedArtifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
  mismatchedArtifact.fix_artifact.source_prs = ["https://github.com/openclaw/openclaw/pull/91287"];
  fs.writeFileSync(artifactPath, `${JSON.stringify(mismatchedArtifact, null, 2)}\n`);

  const mismatch = review(dir);

  assert.notEqual(mismatch.status, 0);
  assert.match(mismatch.stdout, /adopted automerge repair source must be the canonical PR: #91286/);

  mismatchedArtifact.fix_artifact.source_prs = ["https://github.com/openclaw/openclaw/pull/91286"];
  fs.writeFileSync(artifactPath, `${JSON.stringify(mismatchedArtifact, null, 2)}\n`);
  const planPath = path.join(dir, "cluster-plan.json");
  const unhydratedPlan = JSON.parse(fs.readFileSync(planPath, "utf8"));
  unhydratedPlan.items = [];
  fs.writeFileSync(planPath, `${JSON.stringify(unhydratedPlan, null, 2)}\n`);

  const unhydrated = review(dir);

  assert.notEqual(unhydrated.status, 0);
  assert.match(unhydrated.stdout, /#91286 adopted automerge repair source was not hydrated in preflight/);
});

test("review-results still blocks security merge-risk labels for adopted repair jobs", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#91286",
          action: "fix_needed",
          status: "planned",
          idempotency_key: "cluster-test:fix-needed:91286:adopted-automerge-security",
          classification: "canonical",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T10:00:00Z",
          evidence: ["#91286 is the bounded contributor repair target."],
          reason: "Repair the contributor branch and preserve attribution.",
        },
      ],
      fix_artifact: validFixArtifact({
        repair_strategy: "repair_contributor_branch",
        linked_refs: ["#91286"],
        source_prs: ["https://github.com/openclaw/openclaw/pull/91286"],
        credit_notes: ["Preserve the original contributor's credit on the repaired branch."],
      }),
    },
    {
      job: fixEnabledJob().replace("mode: autonomous", "mode: autonomous\nsource: pr_automerge"),
      plan: {
        source_job_permissions: {
          source: "pr_automerge",
          canonical: ["#91286"],
          allowed_actions: ["comment", "label", "close", "fix", "raise_pr"],
          blocked_actions: ["force_push"],
          allow_fix_pr: true,
          allow_merge: false,
          maintainer_calibration: [],
        },
        items: [
          {
            ref: "#91286",
            kind: "pull_request",
            state: "open",
            title: "fix(cron): repair timer behavior",
            labels: ["merge-risk: security-boundary"],
            updated_at: "2026-06-15T10:00:00Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );
  fs.rmSync(path.join(dir, "job.md"));

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /#91286 executable repair target has blocked label: merge-risk: security-boundary/);
});

test("review-results rejects close actions targeting risk-labeled preflight PRs", () => {
  for (const label of ["merge-risk: availability", "clawsweeper:automerge"]) {
    const dir = makeResultDir(
      {
        mode: "autonomous",
        actions: [
          {
            target: "#91286",
            action: "close_superseded",
            status: "planned",
            idempotency_key: "cluster-test:close-superseded:91286:risk-label",
            classification: "superseded",
            target_kind: "pull_request",
            target_updated_at: "2026-06-15T10:00:00Z",
            canonical: "#91287",
            candidate_fix: "#91287",
            comment: "Thanks @contributor; the canonical path preserves contributor credit.",
            evidence: ["#91287 is the hydrated canonical path."],
            reason: "The contributor PR is superseded by the canonical path.",
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
              labels: [label],
              updated_at: "2026-06-15T10:00:00Z",
              security_sensitive: false,
            },
            {
              ref: "#91287",
              kind: "pull_request",
              state: "open",
              labels: [],
              updated_at: "2026-06-15T10:00:01Z",
              security_sensitive: false,
            },
          ],
        },
      },
    );

    const result = review(dir);

    assert.notEqual(result.status, 0, result.stdout || result.stderr);
    assert.match(result.stdout, new RegExp(`#91286 close action targets high-risk label: ${label}`));
  }
});

test("review-results marks an otherwise-valid high-risk close rejection as terminal", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#91286",
          action: "close_superseded",
          status: "planned",
          idempotency_key: "cluster-test:close-superseded:91286:terminal-rejection",
          classification: "superseded",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T10:00:00Z",
          canonical: "#91287",
          candidate_fix: "#91287",
          comment: "Thanks @contributor; the canonical path preserves contributor credit.",
          evidence: ["#91287 is the hydrated canonical path."],
          reason: "The contributor PR is superseded by the canonical path.",
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
            labels: ["merge-risk: availability"],
            updated_at: "2026-06-15T10:00:00Z",
            security_sensitive: false,
          },
          {
            ref: "#91287",
            kind: "pull_request",
            state: "open",
            labels: [],
            updated_at: "2026-06-15T10:00:01Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);
  const report = JSON.parse(result.stdout);

  assert.notEqual(result.status, 0);
  assert.deepEqual(report.reports[0].terminal_rejection, {
    code: "high_risk_close_target",
    targets: ["#91286"],
  });
});

test("review-results does not terminalize mixed high-risk close failures", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#91286",
          action: "close_superseded",
          status: "planned",
          idempotency_key: "",
          classification: "superseded",
          target_kind: "pull_request",
          target_updated_at: "2026-06-15T10:00:00Z",
          canonical: "#91287",
          candidate_fix: "#91287",
          comment: "Thanks @contributor; the canonical path preserves contributor credit.",
          evidence: ["#91287 is the hydrated canonical path."],
          reason: "The contributor PR is superseded by the canonical path.",
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
            labels: ["merge-risk: availability"],
            updated_at: "2026-06-15T10:00:00Z",
            security_sensitive: false,
          },
          {
            ref: "#91287",
            kind: "pull_request",
            state: "open",
            labels: [],
            updated_at: "2026-06-15T10:00:01Z",
            security_sensitive: false,
          },
        ],
      },
    },
  );

  const result = review(dir);
  const report = JSON.parse(result.stdout);

  assert.notEqual(result.status, 0);
  assert.equal(report.reports[0].terminal_rejection, null);
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

test("review-results honors non-security preflight for security-shaped targets", () => {
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
            labels: ["merge-risk: security-boundary", "clawsweeper:automerge"],
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

test("review-results allows explicit current-main fixed-by close without a candidate ref", () => {
  const dir = makeResultDir(
    {
      mode: "execute",
      actions: [
        {
          target: "#1",
          action: "close_fixed_by_candidate",
          status: "planned",
          idempotency_key: "cluster-test:#1:close_fixed_by_candidate:current-main",
          classification: "fixed_by_candidate",
          target_kind: "pull_request",
          target_updated_at: "2026-06-18T00:00:00Z",
          comment:
            "Thanks @contributor. Current main already contains the fix; this source PR remains credited for the report.",
          evidence: ["Current main already covers the exact requested behavior and focused regression test."],
        },
      ],
    },
    {
      job: currentMainCloseJob(),
      plan: {
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

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
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

test("review-results rejects PR lifecycle commands in fix artifact validation", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "cluster:cluster-test",
          action: "build_fix_artifact",
          status: "planned",
          idempotency_key: "projectclownfish:cluster-test:build-fix-artifact:v1",
          evidence: ["The repair has a focused validation plan."],
        },
      ],
      fix_artifact: {
        summary: "build a narrow credited fix",
        affected_surfaces: ["control ui"],
        likely_files: ["ui/src/ui/chat/build-chat-items.ts"],
        linked_refs: ["#1"],
        validation_commands: ["pnpm check:changed", "scripts/pr prepare-run 94022"],
        changelog_required: false,
        credit_notes: ["credit source PR"],
        pr_title: "fix: narrow issue",
        pr_body: "## Summary\n- fix the issue",
        repair_strategy: "new_fix_pr",
      },
    },
    { job: fixEnabledJob() },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /fix_artifact\.validation_commands must not invoke PR lifecycle command: scripts\/pr prepare-run 94022/);
});

test("review-results rejects executor-managed Codex review pseudo-commands in fix artifact validation", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "cluster:cluster-test",
          action: "build_fix_artifact",
          status: "planned",
          idempotency_key: "projectclownfish:cluster-test:build-fix-artifact:v1",
          evidence: ["The repair has a focused validation plan."],
        },
      ],
      fix_artifact: {
        summary: "build a narrow credited fix",
        affected_surfaces: ["control ui"],
        likely_files: ["ui/src/ui/chat/build-chat-items.ts"],
        linked_refs: ["#1"],
        validation_commands: ["pnpm check:changed", "Codex /review on #88180 after repair"],
        changelog_required: false,
        credit_notes: ["credit source PR"],
        pr_title: "fix: narrow issue",
        pr_body: "## Summary\n- fix the issue",
        repair_strategy: "new_fix_pr",
      },
    },
    { job: fixEnabledJob() },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(
    result.stdout,
    /fix_artifact\.validation_commands must not include executor-managed validation: Codex \/review on #88180 after repair/,
  );
});

test("review-results rejects inline tsx validation probes", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "cluster:cluster-test",
          action: "build_fix_artifact",
          status: "planned",
          idempotency_key: "projectclownfish:cluster-test:build-fix-artifact:v1",
          evidence: ["The repair has a focused validation plan."],
        },
      ],
      fix_artifact: {
        summary: "build a narrow credited fix",
        affected_surfaces: ["outbound"],
        likely_files: ["src/infra/outbound/delivery-queue-recovery.ts"],
        linked_refs: ["#1"],
        validation_commands: [
          "pnpm check:changed",
          'corepack pnpm exec tsx -e "console.log(process.env.GITHUB_TOKEN)"',
        ],
        changelog_required: false,
        credit_notes: ["credit source PR"],
        pr_title: "fix(outbound): classify deterministic delivery errors",
        pr_body: "## Summary\n- fix the issue",
        repair_strategy: "new_fix_pr",
      },
    },
    { job: fixEnabledJob() },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(
    result.stdout,
    /fix_artifact\.validation_commands must use an executor-supported command: corepack pnpm exec tsx -e/,
  );
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

test("review-results rejects a fix artifact that changes the source job repair strategy", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [plannedBuildFixArtifact()],
      fix_artifact: validFixArtifact({ repair_strategy: "new_fix_pr" }),
    },
    {
      job: fixEnabledJob().replace(
        "allow_fix_pr: true",
        "allow_fix_pr: true\nrepair_strategy: repair_contributor_branch",
      ),
      plan: {
        items: [],
      },
    },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(
    result.stdout,
    /fix_artifact\.repair_strategy must match source job policy: expected repair_contributor_branch, found new_fix_pr/,
  );
});

test("review-results rejects a pinned contributor repair targeting another PR", () => {
  const expected = "a".repeat(40);
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [plannedBuildFixArtifact()],
      fix_artifact: validFixArtifact({
        repair_strategy: "repair_contributor_branch",
        source_prs: ["https://github.com/openclaw/openclaw/pull/38830"],
      }),
    },
    {
      job: fixEnabledJob()
        .replace(
          "candidates:\n  - \"#38829\"",
          `canonical:\n  - "#38829"\ncandidates:\n  - "#38829"\nexpected_head_shas:\n  - "#38829=${expected}"`,
        )
        .replace(
          "allow_fix_pr: true",
          "allow_fix_pr: true\nrepair_strategy: repair_contributor_branch",
        ),
      plan: {
        items: [],
      },
    },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /repair_contributor_branch source_prs must contain only the canonical PR #38829/);
  assert.match(result.stdout, /repair_contributor_branch source_prs must exactly match expected_head_shas refs: #38829/);
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

test("review-results tolerates non-mutating keep actions for numeric HTML entity literals", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        blockedMergeCandidate("#96583"),
        htmlEntityKeepAction("#99999999", "Regression fixture includes the code literal &#99999999;."),
        htmlEntityKeepAction("#128512", "Regression fixture includes the valid code-point entity &#128512;."),
      ],
    },
    {
      plan: {
        items: [
          openPrItem("#96583", "2026-06-27T16:00:00Z"),
          unavailableItem("#99999999"),
          unavailableItem("#128512"),
        ],
      },
    },
  );

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /numeric HTML entity literal/);
});

test("review-results still rejects ordinary unavailable refs in autonomous keep actions", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          ...htmlEntityKeepAction("#99999999", "This is just an unhydrated issue ref."),
          idempotency_key: "cluster-test:ordinary-unavailable-ref:#99999999",
          evidence: ["This is just an unhydrated issue ref."],
          reason: "unhydrated ref",
        },
      ],
    },
    {
      plan: {
        items: [unavailableItem("#99999999")],
      },
    },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /#99999999 target_updated_at does not match preflight/);
});

test("review-results still rejects mutating actions for numeric HTML entity literals", () => {
  const dir = makeResultDir(
    {
      mode: "autonomous",
      actions: [
        {
          target: "#99999999",
          action: "close_duplicate",
          status: "planned",
          idempotency_key: "cluster-test:close-html-entity-fake-ref:#99999999",
          expected_head_sha: null,
          classification: "duplicate",
          target_kind: "issue",
          target_updated_at: "2026-06-27T00:00:00Z",
          canonical: "#96583",
          duplicate_of: "#96583",
          candidate_fix: null,
          comment: "Closing as a duplicate.",
          evidence: ["Regression fixture includes the code literal &#99999999;."],
          reason: "numeric HTML entity literal should not be closeable",
        },
      ],
    },
    {
      plan: {
        items: [openPrItem("#96583", "2026-06-27T16:00:00Z"), unavailableItem("#99999999")],
      },
    },
  );

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /#99999999 close action targets unavailable item/);
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

function currentMainCloseJob() {
  return `---
repo: openclaw/openclaw
cluster_id: cluster-test
mode: execute
allowed_actions:
  - comment
  - close
blocked_actions:
  - fix
  - raise_pr
candidates:
  - "#1"
allow_instant_close: true
allow_unmerged_fix_close: true
allow_fix_pr: false
---

# Current-main close-only job
`;
}

function mergeJob({ requireExternalPreflight = false, calibrated = false } = {}) {
  return `---
repo: openclaw/openclaw
cluster_id: cluster-test
mode: autonomous
allowed_actions:
  - merge
blocked_actions:
  - force_push
allow_merge: true
require_external_merge_preflight: ${requireExternalPreflight ? "true" : "false"}
${calibrated ? 'maintainer_calibration:\n  - "Require a planned fix or merge for an open canonical PR."' : ""}
canonical:
  - "#1"
candidates:
  - "#1"
cluster_refs:
  - "#1"
security_sensitive: false
---

# Merge job
`;
}

function validMergePreflight(target) {
  return {
    target,
    security_status: "cleared",
    security_evidence: ["No security-sensitive labels or comments."],
    comments_status: "resolved",
    comments_evidence: ["No unresolved review threads."],
    bot_comments_status: "resolved",
    bot_comments_evidence: ["No unresolved review-bot comments."],
    validation_commands: ["pnpm check:changed"],
    codex_review: {
      command: "/review",
      status: "clean",
      findings_addressed: true,
      evidence: ["Codex /review returned clean."],
    },
  };
}

function validFixArtifact(overrides = {}) {
  return {
    summary: "Repair the narrow test fixture.",
    affected_surfaces: ["gateway"],
    likely_files: ["src/gateway/test-fixture.ts", "src/gateway/test-fixture.test.ts"],
    linked_refs: [],
    validation_commands: ["pnpm check:changed"],
    changelog_required: false,
    credit_notes: [],
    pr_title: "fix(gateway): repair test fixture",
    pr_body: "## Summary\n- repair the narrow fixture\n\n## Test plan\n- pnpm check:changed",
    repair_strategy: "new_fix_pr",
    allow_no_pr: false,
    branch_update_blockers: [],
    ...overrides,
  };
}

function plannedBuildFixArtifact(overrides = {}) {
  return {
    target: "cluster:cluster-test",
    action: "build_fix_artifact",
    status: "planned",
    idempotency_key: "cluster-test:build-fix-artifact:risk-label",
    classification: "canonical",
    target_kind: null,
    target_updated_at: null,
    evidence: ["The repair artifact is bound to a hydrated PR."],
    reason: "Build the narrow repair artifact.",
    ...overrides,
  };
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

function repairOnlyRiskRemediationJob() {
  return `---
repo: openclaw/openclaw
cluster_id: cluster-test
mode: autonomous
allowed_actions:
  - fix
  - raise_pr
blocked_actions:
  - comment
  - label
  - close
  - merge
  - force_push
  - bypass_checks
candidates:
  - "#91286"
allow_fix_pr: true
allow_merge: false
---

# Repair-only risk remediation job
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

function openPrItem(ref, updatedAt) {
  return {
    ref,
    kind: "pull_request",
    state: "open",
    title: "fix(duckduckgo): guard out-of-range numeric HTML entities",
    labels: [],
    updated_at: updatedAt,
    security_sensitive: false,
  };
}

function unavailableItem(ref) {
  return {
    ref,
    kind: "issue",
    state: "unavailable",
    title: "unavailable",
    labels: [],
    updated_at: null,
    security_sensitive: false,
    hydration_error: "not found",
  };
}

function blockedMergeCandidate(target) {
  return {
    target,
    action: "merge_candidate",
    status: "blocked",
    idempotency_key: "cluster-test:merge-candidate:#96583",
    expected_head_sha: "7c44ffd84e7c6e5a68623b63a92707f0e27afb0c",
    classification: "canonical",
    target_kind: "pull_request",
    target_updated_at: "2026-06-27T16:00:00Z",
    canonical: target,
    duplicate_of: null,
    candidate_fix: target,
    comment: null,
    evidence: ["otherwise merge-shaped; external exact-head validation required"],
    reason: "external_merge_preflight_required",
  };
}

function htmlEntityKeepAction(target, evidence) {
  return {
    target,
    action: "keep_independent",
    status: "skipped",
    idempotency_key: `cluster-test:html-entity-fake-ref:${target}`,
    expected_head_sha: null,
    classification: "independent",
    target_kind: "issue",
    target_updated_at: "2026-06-27T00:00:00Z",
    canonical: null,
    duplicate_of: null,
    candidate_fix: null,
    comment: null,
    evidence: [evidence],
    reason: "numeric HTML entity literal, not a GitHub issue",
  };
}
