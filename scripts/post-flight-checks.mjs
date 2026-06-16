const PASSING_CHECK_CONCLUSIONS = new Set(["SUCCESS", "SKIPPED", "NEUTRAL"]);
const DEFAULT_IGNORED_CHECKS = ["auto-response", "Labeler", "Stale"];

export function shouldRequirePrChecks(value = process.env.CLOWNFISH_POST_FLIGHT_REQUIRE_PR_CHECKS) {
  return value !== "0";
}

export function validateStatusChecks(checks, ignored = ignoredCheckNames()) {
  if (!Array.isArray(checks) || checks.length === 0) return "no PR checks found";
  const blockers = [];
  let relevantChecks = 0;
  for (const check of checks) {
    const name = String(check.name ?? check.context ?? "unknown check");
    if (ignored.has(name)) continue;
    relevantChecks += 1;
    const status = String(check.status ?? check.state ?? "").toUpperCase();
    const conclusion = String(check.conclusion ?? "").toUpperCase();
    if (status && !["COMPLETED", "SUCCESS"].includes(status)) {
      blockers.push(`${name}: ${status}`);
      continue;
    }
    if (conclusion && !PASSING_CHECK_CONCLUSIONS.has(conclusion)) {
      blockers.push(`${name}: ${conclusion}`);
    }
  }
  if (relevantChecks === 0) return "no PR checks found";
  if (blockers.length > 0) return `checks are not clean: ${blockers.slice(0, 5).join(", ")}`;
  return "";
}

export function shouldWaitForMergeReadiness({ mergeBlock, view, ignored = ignoredCheckNames() }) {
  const message = String(mergeBlock ?? "").toLowerCase();
  if (message.includes("no pr checks found")) return true;
  if (message.includes("mergeable state is unknown")) return true;
  if (message.includes("merge state status is unknown")) return true;
  if (message.includes("merge state status is unstable")) return hasPendingChecks(view.statusCheckRollup ?? [], ignored);
  if (message.includes("checks are not clean")) return hasPendingChecks(view.statusCheckRollup ?? [], ignored);
  return false;
}

export function ignoredCheckNames(value = process.env.CLOWNFISH_POST_FLIGHT_IGNORE_CHECKS) {
  const configured = value ?? DEFAULT_IGNORED_CHECKS.join(",");
  return new Set(
    String(configured)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  );
}

function hasPendingChecks(checks, ignored) {
  return (checks ?? []).some((check) => {
    const name = String(check.name ?? check.context ?? "unknown check");
    if (ignored.has(name)) return false;
    const status = String(check.status ?? check.state ?? "").toUpperCase();
    const conclusion = String(check.conclusion ?? "").toUpperCase();
    if (conclusion) return false;
    return Boolean(status) && !["COMPLETED", "SUCCESS"].includes(status);
  });
}
