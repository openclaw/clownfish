import fs from "node:fs";
import path from "node:path";

export function summarizeChecks(checks) {
  const counts = {};
  const blockers = [];
  for (const check of checks) {
    const name = String(check.name ?? check.context ?? "unknown check");
    const status = String(check.status ?? check.state ?? "").toUpperCase();
    const conclusion = String(check.conclusion ?? "").toUpperCase();
    const key = conclusion || status || "UNKNOWN";
    counts[key] = (counts[key] ?? 0) + 1;
    if (status && !["COMPLETED", "SUCCESS"].includes(status)) blockers.push(`${name}:${status}`);
    if (conclusion && !["SUCCESS", "SKIPPED", "NEUTRAL"].includes(conclusion)) blockers.push(`${name}:${conclusion}`);
  }
  return { total: checks.length, counts, blockers };
}

export function readLedger(file) {
  if (!fs.existsSync(file)) return { updated_at: null, commands: [] };
  try {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    return { updated_at: data.updated_at ?? null, commands: Array.isArray(data.commands) ? data.commands : [] };
  } catch {
    return { updated_at: null, commands: [] };
  }
}

export function appendLedger(current, entries) {
  const compact = entries
    .filter((entry) => ["executed", "skipped"].includes(entry.status))
    .map((entry) => ({
      idempotency_key: entry.idempotency_key,
      comment_id: entry.comment_id,
      comment_url: entry.comment_url,
      repo: entry.repo,
      issue_number: entry.issue_number,
      author: entry.author,
      author_association: entry.author_association,
      trigger: entry.trigger,
      command: entry.command,
      intent: entry.intent,
      trusted_bot: Boolean(entry.trusted_bot),
      trusted_bot_author: entry.trusted_bot_author ?? null,
      automation_source: entry.automation_source ?? null,
      repair_reason: entry.repair_reason ?? null,
      expected_head_sha: entry.expected_head_sha ?? null,
      finding_id: entry.finding_id ?? null,
      status: entry.status,
      processed_at: new Date().toISOString(),
      target: entry.target
        ? {
            kind: entry.target.kind,
            branch: entry.target.branch,
            head_sha: entry.target.head_sha,
            cluster_id: entry.target.cluster_id,
            job_path: entry.target.job_path,
          }
        : null,
    }));
  const byComment = new Map((current.commands ?? []).map((entry) => [String(entry.comment_id), entry]));
  for (const entry of compact) byComment.set(String(entry.comment_id), entry);
  current.updated_at = new Date().toISOString();
  current.commands = [...byComment.values()].slice(-1000);
}

export function writeLedger(file, current) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(current, null, 2)}\n`);
}

export function writeReportFile(root, data) {
  const file = path.join(root, "results", "comment-router-latest.json");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

export function writePayload(root, name, payload) {
  const dir = path.join(root, ".projectclownfish", "payloads");
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${safeName(name)}.json`);
  fs.writeFileSync(file, `${JSON.stringify(payload)}\n`);
  return file;
}

export function issueNumberFromUrl(value) {
  const match = String(value ?? "").match(/\/issues\/(\d+)$/);
  return match ? Number(match[1]) : 0;
}

export function positiveInteger(value, name) {
  const number = Number(value);
  if (!Number.isInteger(number) || number < 1) throw new Error(`${name} must be a positive integer`);
  return number;
}

export function commaSet(value) {
  return new Set(
    String(value ?? "")
      .split(",")
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean),
  );
}

export function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

export function assertRepo(value, name) {
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(value)) throw new Error(`${name} must be owner/repo`);
}

function safeName(value) {
  return String(value).replace(/[^A-Za-z0-9_.-]+/g, "-").slice(0, 120);
}
