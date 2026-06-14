import assert from "node:assert/strict";
import test from "node:test";

import { hasDeterministicSecuritySignal, hasSecuritySignalText } from "../scripts/lib.mjs";

test("security signal detection ignores non-security advisory wording", () => {
  assert.equal(
    hasSecuritySignalText("pnpm lint:tmp:dynamic-import-warts (advisory-only; no new run-loop.ts advisory)"),
    false,
  );
});

test("security signal detection keeps explicit security advisory wording", () => {
  assert.equal(hasSecuritySignalText("security advisory triage for GHSA-1234-5678-abcd"), true);
});

test("security signal detection catches review and scanner appeal wording", () => {
  assert.equal(hasSecuritySignalText("Security Review Request: metadata inconsistency false positive"), true);
  assert.equal(hasSecuritySignalText("False positive security flag on published skill"), true);
  assert.equal(hasSecuritySignalText("Skill flagged as suspicious despite benign scanner verdicts"), true);
  assert.equal(hasSecuritySignalText("fix: avoid inlining daemon secrets in generated systemd units"), true);
});

test("deterministic security signals ignore prose credential wording", () => {
  assert.equal(
    hasDeterministicSecuritySignal({
      comments: [
        "Current main's Codex credential reader types expose codexHome, platform, and execSync, but no allowKeychainPrompt.",
      ],
    }),
    false,
  );
});

test("deterministic security signals accept labels and structured ClawSweeper markers", () => {
  assert.equal(hasDeterministicSecuritySignal({ labels: ["security:sensitive"] }), true);
  assert.equal(
    hasDeterministicSecuritySignal({
      comments: ["<!-- clawsweeper-security:security-sensitive item=123 sha=abc -->"],
    }),
    true,
  );
});
