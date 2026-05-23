import test from "node:test";
import assert from "node:assert/strict";

import { restoreGateValue } from "../scripts/gate-restore.mjs";

test("restoreGateValue closes gates that were previously unset", () => {
  assert.equal(restoreGateValue(""), "0");
});

test("restoreGateValue preserves explicit prior gate values", () => {
  assert.equal(restoreGateValue("0"), "0");
  assert.equal(restoreGateValue("1"), "1");
});
