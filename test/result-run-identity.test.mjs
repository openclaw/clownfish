import assert from "node:assert/strict";
import { test } from "node:test";
import { inferResultRunIdentity } from "../scripts/result-run-identity.mjs";

test("infers single worker run identity", () => {
  assert.deepEqual(
    inferResultRunIdentity("/tmp/artifacts/projectclownfish-27569115751-1/cluster/result.json"),
    {
      run_id: "27569115751",
      workflow_run_id: "27569115751",
      run_attempt: "1",
      matrix_index: null,
    },
  );
});

test("infers matrix worker run identity", () => {
  assert.deepEqual(
    inferResultRunIdentity("/tmp/artifacts/projectclownfish-27570100673-1-12/cluster/result.json"),
    {
      run_id: "27570100673-1-12",
      workflow_run_id: "27570100673",
      run_attempt: "1",
      matrix_index: "12",
    },
  );
});

test("returns null when no ProjectClownfish artifact path is present", () => {
  assert.equal(inferResultRunIdentity("/tmp/artifacts/other/result.json"), null);
});
