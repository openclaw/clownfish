import { createHash } from "node:crypto";
import { hasSecuritySensitiveText } from "./security-sensitive.mjs";

export const EXACT_MERGE_CHECK_NAME = "clownfish/exact-merge";
const DEFAULT_REQUIRED_CI_GATE_NAME = "openclaw/ci-gate";
export const REQUIRED_CI_GATE_NAME = String(process.env.CLOWNFISH_REQUIRED_CI_GATE_NAME ?? DEFAULT_REQUIRED_CI_GATE_NAME).trim() || DEFAULT_REQUIRED_CI_GATE_NAME;
export const COORDINATOR_CHECK_NAMES = Object.freeze([EXACT_MERGE_CHECK_NAME, REQUIRED_CI_GATE_NAME]);

const DECISION_AUTHORITY_KEYS = "author_login,body_sha256,comment_id,comment_updated_at,head_sha,schema_version";
const EXACT_DECISION_OBJECTION =
  /\b(?:not[- ]ready|(?:pause|wait|hold)(?:\s+off)?\b|(?:changes requested|requested changes|needs? changes?)|(?:must|should|needs? to|please)\s+(?:fix|address|resolve)\b|(?:fix|address|resolve)\b.{0,80}\b(?:before|prior to)\s+(?:merge|landing|shipping)|(?:fix|changes?)\s+(?:is|are)?\s*(?:required|needed)|needs?\s+(?:a\s+)?fix|(?:tests?|checks?|ci)\b.{0,40}\b(?:failing|failed|red|broken)|(?:bug|defect|regression|failure|risk|concern|issue)\b.{0,80}\b(?:remains?|persists?|unresolved|unfixed|open|present)|(?:unresolved|unfixed|remaining|open)\b.{0,50}\b(?:bug|defect|regression|failure|risk|concern|issue)|still\s+(?:fails?|broken)|(?:is|are|remains?)\s+(?:still\s+)?broken|(?:withdrawn|withdrew|withdraw|abandon(?:ed|ing)?|cancel(?:ed|led|ing)?)\b|(?:close|stop)\b.{0,30}\b(?:pr|pull request|merge|landing|shipping|work))\b/i;
const EXPLICIT_MERGE_OBJECTION_PATTERNS = [
  /\b(?:maintainers?\s+|please\s+)?(?:do not|don't|must not|mustn't|should not|shouldn't|cannot|can't)\s+(?:proceed with (?:the )?)?(?:merge|merging|land|landing|ship|shipping)\b/,
  /\b(?:(?:(?:this|the)\s+)?(?:pr|pull request|patch|change)|this|it)\s+(?:must not|mustn't|should not|shouldn't|cannot|can't)\s+be\s+(?:merged|landed|shipped)\b/,
  /\b(?:this|it|(?:this|the) (?:pr|pull request|patch|change))\s+is\s+(?:not safe|unsafe)\s+to\s+(?:merge|land|ship)\b/,
  /\bnot ready to\s+(?:merge|land|ship)\b/,
  /\bhold (?:the )?(?:merge|landing|shipping)\s+until\b/,
  /\b(?:the )?(?:pr|pull request|patch|change)\s+remains\s+blocked\b/,
  /\b(?:merge|merging|landing|shipping)\s+(?:is\s+)?(?:still\s+)?(?:blocked|forbidden|not allowed)\b/,
  /\b(?:merge|merging|landing|shipping)\s+remains\s+blocked\b/,
  /\b(?:merge|merging|landing|shipping)\s+(?:cannot|can't|must not|mustn't|should not|shouldn't)\s+(?:proceed|continue)\b/,
  /\b(?:merge|merging|landing|shipping)\s+(?:must|should)\s+(?:wait|be delayed|remain blocked)\b/,
  /\b(?:pending|awaiting)\s+(?:(?:maintainer|policy|risk)\s+){1,2}(?:decision|approval|acceptance)\b/,
  /\b(?:maintainer|policy|risk)(?:\s+(?:policy|risk))?\s+(?:decision|approval|acceptance)\s+(?:is\s+)?(?:still\s+)?(?:pending|unresolved)\b/,
  /\b(?:maintainer|policy|risk)(?:\s+(?:policy|risk))?\s+(?:decision|approval|acceptance)\s+(?:is\s+)?required before (?:merge|merging|landing|shipping)\b/,
];

export function hasExplicitMergeObjection(body, { ignoreLine = null } = {}) {
  return String(body).split(/\r?\n/).map((line) => line.trim().replace(/^[-*]\s+/, "").replace(/^#{1,6}\s*/, ""))
    .filter(Boolean).some((line) => !ignoreLine?.(line) && EXPLICIT_MERGE_OBJECTION_PATTERNS.some((pattern) => pattern.test(line)));
}

function isExactDecisionBody(body, headSha) {
  const normalized = body.trim().toLowerCase();
  return !hasSecuritySensitiveText(body) && !hasExplicitMergeObjection(normalized) && !EXACT_DECISION_OBJECTION.test(normalized) &&
    normalized.match(/^maintainer decision for `([0-9a-f]{40})`:\s*(?:accept(?:ed|ing)?|approv(?:ed|ing)?)\b/)?.[1] === String(headSha ?? "").toLowerCase() &&
    /\bno (?:branch )?repair,\s*(?:no )?rebase,\s*(?:or|and)\s*(?:no )?replacement (?:pr|pull request)(?: is)? requested\b/.test(normalized);
}

export function exactDecisionAuthority(comment, headSha) {
  const body = String(comment?.body ?? "");
  if (!isExactDecisionBody(body, headSha)) return null;
  return {
    schema_version: 1,
    comment_id: String(comment?.databaseId ?? comment?.id ?? ""),
    author_login: String(comment?.author?.login ?? comment?.user?.login ?? "").toLowerCase(),
    head_sha: String(headSha ?? "").toLowerCase(),
    body_sha256: createHash("sha256").update(body).digest("hex"),
    comment_updated_at: String(comment?.updatedAt ?? comment?.updated_at ?? ""),
  };
}

export function validateDecisionAuthority(preflight, { expectedHeadSha, allowNonNull }) {
  if (!Object.hasOwn(preflight ?? {}, "decision_authority")) return "merge_preflight.decision_authority is required";
  const authority = preflight.decision_authority;
  if (authority === null) return "";
  if (!allowNonNull) return "worker-authored merge_preflight.decision_authority must be null";
  if (!authority || typeof authority !== "object" || Array.isArray(authority) ||
      Object.keys(authority).sort().join() !== DECISION_AUTHORITY_KEYS) {
    return "merge_preflight.decision_authority has invalid fields";
  }
  if (authority.schema_version !== 1 ||
    !/^[1-9][0-9]*$/.test(authority.comment_id) ||
    !/^[a-z0-9](?:[a-z0-9-]{0,37}[a-z0-9])?$/.test(authority.author_login) ||
    !/^[0-9a-f]{40}$/.test(authority.head_sha) ||
    !/^[0-9a-f]{64}$/.test(authority.body_sha256) ||
    !Number.isFinite(Date.parse(authority.comment_updated_at))) return "merge_preflight.decision_authority is malformed";
  return authority.head_sha === String(expectedHeadSha ?? "").toLowerCase()
    ? ""
    : "merge_preflight.decision_authority head_sha does not match expected head";
}

export function matchesDecisionAuthority(authority, comment, expectedHeadSha) {
  const live = exactDecisionAuthority(comment, expectedHeadSha);
  return live !== null && Object.entries(live).every(([key, value]) => authority[key] === value);
}
