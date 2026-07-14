export const EXACT_MERGE_CHECK_NAME = "clownfish/exact-merge";
const DEFAULT_REQUIRED_CI_GATE_NAME = "openclaw/ci-gate";
export const REQUIRED_CI_GATE_NAME =
  String(process.env.CLOWNFISH_REQUIRED_CI_GATE_NAME ?? DEFAULT_REQUIRED_CI_GATE_NAME).trim() ||
  DEFAULT_REQUIRED_CI_GATE_NAME;
export const COORDINATOR_CHECK_NAMES = Object.freeze([
  EXACT_MERGE_CHECK_NAME,
  REQUIRED_CI_GATE_NAME,
]);
