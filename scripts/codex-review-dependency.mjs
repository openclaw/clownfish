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
const PROVENANCE_KEYS = [...Object.keys(CODEX_REVIEW_PROVENANCE), "source_path", "line"];
function normalizeCodexReviewCitation(value) {
  const sourcePath = value?.source_path;
  if (typeof sourcePath !== "string" || sourcePath.includes("\\") || path.posix.isAbsolute(sourcePath) ||
      path.posix.normalize(sourcePath) !== sourcePath || !sourcePath.startsWith("codex-rs/") ||
      sourcePath.endsWith("/") || !Number.isInteger(value?.line) || value.line < 1) return null;
  return { source_path: sourcePath, line: value.line };
}
export function codexReviewProvenanceEvidence(citation) {
  const normalized = normalizeCodexReviewCitation(citation);
  if (!normalized) throw new Error("Codex dependency provenance citation is invalid");
  return `${PROVENANCE_PREFIX}${JSON.stringify({ ...CODEX_REVIEW_PROVENANCE, ...normalized })}`;
}
export function validateCodexReviewProvenance(repo, evidence) {
  if (repo !== CODEX_REVIEW_DEPENDENCY.repo) return "";
  const records = Array.isArray(evidence) ? evidence.filter((entry) => typeof entry === "string" && entry.startsWith(PROVENANCE_PREFIX)) : [];
  if (records.length !== 1) return "Codex dependency provenance evidence must contain exactly one canonical record";
  let parsed; try { parsed = JSON.parse(records[0].slice(PROVENANCE_PREFIX.length)); } catch { return "Codex dependency provenance evidence is malformed"; }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return "Codex dependency provenance evidence is malformed";
  if (Object.keys(parsed).length !== PROVENANCE_KEYS.length || PROVENANCE_KEYS.some((key) => !Object.hasOwn(parsed, key))) return "Codex dependency provenance evidence fields are invalid";
  const citation = normalizeCodexReviewCitation(parsed);
  if (!citation) return "Codex dependency provenance citation is invalid";
  return records[0] === codexReviewProvenanceEvidence(citation) ? "" : "Codex dependency provenance evidence is not canonical or does not match the pinned dependency";
}
export function validateCodexReviewSourceEvidence(review, dependencyDir, git) {
  const tracked = new Set(String(git(["ls-files", "-z"])).split("\0").filter(Boolean)); let firstCitation = null;
  for (const rawEntry of Array.isArray(review?.evidence) ? review.evidence : []) {
    const entry = String(rawEntry);
    const citations = [...entry.matchAll(/\.\.\/codex\/([^\s:#]+)(?::(\d+)|#L(\d+))/g)];
    const hasCommit = entry.includes(CODEX_REVIEW_DEPENDENCY.commit);
    if (!hasCommit && !entry.includes("../codex/")) continue;
    if (!hasCommit || citations.length === 0) {
      return { error: "Codex /review evidence must cite the pinned commit and source in the same entry", citation: null };
    }
    for (const citation of citations) {
      const normalized = normalizeCodexReviewCitation({ source_path: citation[1], line: Number(citation[2] ?? citation[3]) });
      const source = normalized?.source_path ?? citation[1];
      if (!normalized) return { error: `Codex /review source citation is invalid: ${source}`, citation: null };
      if (!tracked.has(source)) return { error: `Codex /review source citation is not tracked: ${source}`, citation: null };
      const sourcePath = path.join(dependencyDir, ...source.split("/"));
      const stats = fs.lstatSync(sourcePath, { throwIfNoEntry: false });
      if (!stats?.isFile() || stats.isSymbolicLink()) return { error: `Codex /review source citation is not a regular file: ${source}`, citation: null };
      const contents = fs.readFileSync(sourcePath, "utf8");
      const lineCount = contents ? contents.split("\n").length - Number(contents.endsWith("\n")) : 0;
      if (normalized.line > lineCount) return { error: `Codex /review source citation line is out of range: ${source}:${normalized.line}`, citation: null };
      firstCitation ??= normalized;
    }
  }
  return firstCitation
    ? { error: "", citation: firstCitation }
    : { error: "Codex /review evidence did not cite the pinned sibling Codex source", citation: null };
}
