import assert from "node:assert/strict";
import test from "node:test";

import { hasSecuritySignalText } from "../scripts/lib.mjs";

test("security signal detection ignores non-security advisory wording", () => {
  assert.equal(
    hasSecuritySignalText("pnpm lint:tmp:dynamic-import-warts (advisory-only; no new run-loop.ts advisory)"),
    false,
  );
});

test("security signal detection keeps explicit security advisory wording", () => {
  assert.equal(hasSecuritySignalText("security advisory triage for GHSA-1234-5678-abcd"), true);
});
