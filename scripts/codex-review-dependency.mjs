import fs from "node:fs";
import path from "node:path";
export const CODEX_REVIEW_DEPENDENCY = {
  repo: "openclaw/openclaw", version: "codex-cli 0.125.0",
  url: "https://github.com/openai/codex.git", tag: "rust-v0.125.0",
  tagObject: "7d8152a5d74226ddaac12f93f7c5ed3f33a60d2a",
  commit: "637f7dd6d737f3961e6bf32fbb3861c4953269c5",
  files: ["AGENTS.md", "codex-rs/core/src/lib.rs", "codex-rs/protocol/src/protocol.rs", "codex-rs/exec/src/main.rs"],
};
const PROVENANCE_PREFIX = "Codex dependency provenance: ";
export const CODEX_REVIEW_PROVENANCE = {
  repository: "openai/codex", version: CODEX_REVIEW_DEPENDENCY.version,
  tag: CODEX_REVIEW_DEPENDENCY.tag, tag_object: CODEX_REVIEW_DEPENDENCY.tagObject,
  commit: CODEX_REVIEW_DEPENDENCY.commit,
};
export const codexReviewProvenanceEvidence = () => `${PROVENANCE_PREFIX}${JSON.stringify(CODEX_REVIEW_PROVENANCE)}`;
export function validateCodexReviewProvenance(repo, evidence) {
  if (repo !== CODEX_REVIEW_DEPENDENCY.repo) return "";
  const records = Array.isArray(evidence) ? evidence.filter((entry) => typeof entry === "string" && entry.startsWith(PROVENANCE_PREFIX)) : [];
  if (records.length !== 1) return "Codex dependency provenance evidence must contain exactly one canonical record";
  let parsed; try { parsed = JSON.parse(records[0].slice(PROVENANCE_PREFIX.length)); } catch { return "Codex dependency provenance evidence is malformed"; }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return "Codex dependency provenance evidence is malformed";
  const expectedKeys = Object.keys(CODEX_REVIEW_PROVENANCE); if (Object.keys(parsed).length !== expectedKeys.length || expectedKeys.some((key) => !Object.hasOwn(parsed, key))) return "Codex dependency provenance evidence fields are invalid";
  return records[0] === codexReviewProvenanceEvidence() ? "" : "Codex dependency provenance evidence does not match the pinned dependency";
}
export function validateCodexReviewSourceEvidence(review, dependencyDir, git) {
  const tracked = new Set(String(git(["ls-files", "-z"])).split("\0").filter(Boolean));
  let validEntry = false;
  for (const rawEntry of Array.isArray(review?.evidence) ? review.evidence : []) {
    const entry = String(rawEntry);
    const citations = [...entry.matchAll(/\.\.\/codex\/([^\s:#]+)(?::(\d+)|#L(\d+))/g)];
    const hasCommit = entry.includes(CODEX_REVIEW_DEPENDENCY.commit);
    if (!hasCommit && !entry.includes("../codex/")) continue;
    if (!hasCommit || citations.length === 0) {
      return "Codex /review evidence must cite the pinned commit and source in the same entry";
    }
    for (const citation of citations) {
      const source = citation[1];
      const line = Number(citation[2] ?? citation[3]);
      const normalized = path.posix.normalize(source);
      if (source.includes("\\") || path.posix.isAbsolute(source) || normalized !== source || !source.startsWith("codex-rs/")) {
        return `Codex /review source citation is invalid: ${source}`;
      }
      if (!tracked.has(source)) return `Codex /review source citation is not tracked: ${source}`;
      const sourcePath = path.join(dependencyDir, ...source.split("/"));
      const stats = fs.lstatSync(sourcePath, { throwIfNoEntry: false });
      if (!stats?.isFile() || stats.isSymbolicLink()) return `Codex /review source citation is not a regular file: ${source}`;
      const contents = fs.readFileSync(sourcePath, "utf8");
      const lineCount = contents ? contents.split("\n").length - Number(contents.endsWith("\n")) : 0;
      if (!Number.isInteger(line) || line < 1 || line > lineCount) return `Codex /review source citation line is out of range: ${source}:${line}`;
    }
    validEntry = true;
  }
  return validEntry ? "" : "Codex /review evidence did not cite the pinned sibling Codex source";
}
