import fs from "node:fs";
import path from "node:path";

export function normalizeResultMetadataFromPlan(result, plan) {
  if (!result || typeof result !== "object" || !plan || typeof plan !== "object") return false;
  if (!Array.isArray(result.actions)) return false;

  const itemByRef = buildItemMap(plan, result.repo);
  let changed = false;

  for (const action of result.actions) {
    if (!action || typeof action !== "object") continue;
    const ref = normalizeRef(action.target);
    if (!ref) continue;

    const item = itemByRef.get(ref);
    if (!item) continue;

    if (item.kind && action.target_kind !== item.kind) {
      action.target_kind = item.kind;
      changed = true;
    }
    if (item.updated_at && action.target_updated_at !== item.updated_at) {
      action.target_updated_at = item.updated_at;
      changed = true;
    }
  }

  return changed;
}

export function normalizeResultMetadataFile(resultPath, planPath = path.join(path.dirname(resultPath), "cluster-plan.json")) {
  if (!fs.existsSync(resultPath) || !fs.existsSync(planPath)) return false;
  const result = JSON.parse(fs.readFileSync(resultPath, "utf8"));
  const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
  const changed = normalizeResultMetadataFromPlan(result, plan);
  if (changed) fs.writeFileSync(resultPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
  return changed;
}

function buildItemMap(plan, repo) {
  const items = plan.item_matrix ?? plan.items ?? [];
  const out = new Map();
  for (const item of items) {
    const ref = normalizeRef(item?.ref ?? item?.target ?? item?.url);
    if (!ref) continue;
    out.set(ref, item);
    if (repo) {
      out.set(`https://github.com/${repo}/issues/${ref.slice(1)}`, item);
      out.set(`https://github.com/${repo}/pull/${ref.slice(1)}`, item);
    }
  }
  return out;
}

function normalizeRef(ref) {
  const match = String(ref ?? "").match(/(?:issues|pull)\/(\d+)\b|^#?(\d+)$/);
  if (!match) return "";
  return `#${match[1] ?? match[2]}`;
}
