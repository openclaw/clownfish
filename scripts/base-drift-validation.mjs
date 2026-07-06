export const MAX_VALIDATION_BASE_DRIFT_COMMITS = 64;
export const MAX_VALIDATION_BASE_DRIFT_FILES = 128;

const SHA_PATTERN = /^[0-9a-f]{40}$/;
const PACKAGE_MANAGER_FILES = new Set([
  ".npmrc",
  ".pnpmfile.cjs",
  ".pnpmfile.js",
  ".yarnrc",
  ".yarnrc.yml",
  "bun.lock",
  "bun.lockb",
  "npm-shrinkwrap.json",
  "package-lock.json",
  "package.json",
  "pnpm-lock.yaml",
  "pnpm-workspace.yaml",
  "yarn.lock",
]);

export function evaluateValidationBaseDrift({
  validationCommands,
  validatedHeadSha,
  currentHeadSha,
  validatedBaseSha,
  currentBaseSha,
  validatedBaseIsAncestorOfHead,
  validatedBaseIsAncestorOfCurrentBase,
  driftCommitCount,
  branchFiles,
  baseDriftFiles,
  branchAreas,
  baseDriftAreas,
  evidenceComplete,
  maxCommits = MAX_VALIDATION_BASE_DRIFT_COMMITS,
  maxFiles = MAX_VALIDATION_BASE_DRIFT_FILES,
}) {
  const reject = (reason, details = {}) => ({ status: "rejected", reason, details });
  if (evidenceComplete !== true) return reject("incomplete_evidence");
  if (![validatedHeadSha, currentHeadSha, validatedBaseSha, currentBaseSha].every((sha) => SHA_PATTERN.test(sha))) {
    return reject("invalid_sha");
  }
  if (validatedHeadSha !== currentHeadSha) {
    return reject("validated_head_changed", { validated_head_sha: validatedHeadSha, current_head_sha: currentHeadSha });
  }
  if (validatedBaseSha === currentBaseSha) return reject("base_did_not_advance");
  if (validatedBaseIsAncestorOfHead !== true) return reject("validated_base_not_ancestor_of_head");
  if (validatedBaseIsAncestorOfCurrentBase !== true) return reject("base_advance_not_fast_forward");
  if (!Array.isArray(validationCommands) || validationCommands.length !== 1 || validationCommands[0] !== "pnpm check:changed") {
    return reject("unsupported_validation_command", { validation_commands: validationCommands });
  }
  if (!Number.isInteger(driftCommitCount) || driftCommitCount < 1 || driftCommitCount > maxCommits) {
    return reject("unbounded_commit_drift", { drift_commit_count: driftCommitCount, max_commits: maxCommits });
  }

  const normalizedBranchFiles = normalizePathEvidence(branchFiles);
  const normalizedBaseDriftFiles = normalizePathEvidence(baseDriftFiles);
  const normalizedBranchAreas = normalizeStringEvidence(branchAreas);
  const normalizedBaseDriftAreas = normalizeStringEvidence(baseDriftAreas);
  if (
    !normalizedBranchFiles ||
    !normalizedBaseDriftFiles ||
    !normalizedBranchAreas ||
    !normalizedBaseDriftAreas
  ) {
    return reject("incomplete_evidence");
  }
  if (
    normalizedBranchFiles.length === 0 ||
    normalizedBranchFiles.length > maxFiles ||
    normalizedBaseDriftFiles.length > maxFiles
  ) {
    return reject("unbounded_file_drift", {
      branch_file_count: normalizedBranchFiles.length,
      base_drift_file_count: normalizedBaseDriftFiles.length,
      max_files: maxFiles,
    });
  }

  const controlFiles = normalizedBaseDriftFiles.filter(isValidationDriftControlFile);
  if (controlFiles.length > 0) return reject("validation_control_file_drift", { control_files: controlFiles });

  const overlappingPaths = intersection(normalizedBranchFiles, normalizedBaseDriftFiles);
  if (overlappingPaths.length > 0) return reject("overlapping_changed_paths", { paths: overlappingPaths });

  const overlappingAreas = intersection(normalizedBranchAreas, normalizedBaseDriftAreas);
  if (overlappingAreas.length > 0) return reject("overlapping_affected_areas", { areas: overlappingAreas });

  return {
    status: "reused",
    proof: {
      status: "reused",
      validation_command: "pnpm check:changed",
      validated_head_sha: validatedHeadSha,
      validated_base_sha: validatedBaseSha,
      reviewed_base_sha: currentBaseSha,
      head_unchanged: true,
      base_fast_forward: true,
      drift_commit_count: driftCommitCount,
      branch_changed_files: normalizedBranchFiles,
      base_drift_files: normalizedBaseDriftFiles,
      branch_areas: normalizedBranchAreas,
      base_drift_areas: normalizedBaseDriftAreas,
      validation_control_files_changed: [],
      evidence_complete: true,
      bounds: {
        max_commits: maxCommits,
        max_files_per_side: maxFiles,
      },
    },
  };
}

export function isValidationDriftControlFile(file) {
  const normalized = normalizePath(file);
  if (!normalized) return true;
  const basename = normalized.split("/").at(-1);
  if (PACKAGE_MANAGER_FILES.has(basename)) return true;
  if (/^tsconfig(?:\.[A-Za-z0-9_-]+)*\.jsonc?$/i.test(basename)) return true;
  return /(^|\/)(?:check-changed|changed-gate)(?:[.-][A-Za-z0-9_-]+)*\.(?:[cm]?[jt]s|sh)$/i.test(normalized);
}

function normalizePathEvidence(values) {
  if (!Array.isArray(values)) return null;
  const normalized = values.map(normalizePath);
  if (normalized.some((value) => !value)) return null;
  const unique = [...new Set(normalized)].sort();
  return unique.length === normalized.length ? unique : null;
}

function normalizeStringEvidence(values) {
  if (!Array.isArray(values)) return null;
  const normalized = values.map((value) => String(value ?? "").trim());
  if (normalized.some((value) => !value)) return null;
  const unique = [...new Set(normalized)].sort();
  return unique.length === normalized.length ? unique : null;
}

function normalizePath(value) {
  const raw = String(value ?? "");
  if (raw !== raw.trim() || raw.includes("\\")) return "";
  const normalized = raw.replace(/^\.\/+/, "");
  if (!normalized || normalized.startsWith("/") || normalized.split("/").some((part) => !part || part === "." || part === "..")) {
    return "";
  }
  return normalized;
}

function intersection(left, right) {
  const rightValues = new Set(right);
  return left.filter((value) => rightValues.has(value));
}
