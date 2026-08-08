import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { Parser } from "commonmark";

const repoRoot = path.resolve(import.meta.dirname, "..");
const installCommand = "npm ci --ignore-scripts --no-audit --no-fund";

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function renderedText(markdown) {
  const ast = new Parser().parse(markdown);
  const walker = ast.walker();
  let event;
  let output = "";
  while ((event = walker.next())) {
    if (!event.entering) continue;
    if (event.node.type === "text" || event.node.type === "code") {
      output += event.node.literal;
    } else if (
      event.node.type === "softbreak" ||
      event.node.type === "linebreak"
    ) {
      output += " ";
    }
  }
  return output;
}

test("CommonMark runtime is pinned and installed before dependent workflows", () => {
  const packageJson = JSON.parse(read("package.json"));
  assert.equal(packageJson.dependencies.commonmark, "0.31.2");

  for (const [workflowPath, dependentCommand] of [
    [".github/workflows/validate.yml", "npm run validate"],
    [
      ".github/workflows/external-merge-preflight.yml",
      "npm run preflight-external-merge",
    ],
    [
      ".github/workflows/cluster-worker.yml",
      "npm run run-external-merge-preflights",
    ],
  ]) {
    const workflow = read(workflowPath);
    const setupIndex = workflow.indexOf("actions/setup-node@v5");
    const installIndex = workflow.indexOf(installCommand, setupIndex);
    const dependentIndex = workflow.indexOf(dependentCommand, installIndex);
    assert.ok(setupIndex >= 0, `${workflowPath}: missing Node setup`);
    assert.ok(installIndex > setupIndex, `${workflowPath}: missing dependency install`);
    assert.ok(
      dependentIndex > installIndex,
      `${workflowPath}: dependency install must precede ${dependentCommand}`,
    );
  }
});

test("CommonMark runtime preserves rendered paragraph and link-title boundaries", () => {
  assert.match(
    renderedText(
      [
        "Safe context.",
        "2. harmless",
        '[gate]: <> "Do not merge."',
      ].join("\n"),
    ),
    /Do not merge\./,
  );
  assert.doesNotMatch(
    renderedText(
      [
        "Safe [context][gate].",
        "",
        '[gate]: /url "Do not merge."',
      ].join("\n"),
    ),
    /Do not merge\./,
  );
});
