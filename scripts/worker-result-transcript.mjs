export function extractWorkerResultFromCodexJsonl(jsonlText) {
  const candidates = [];
  for (const line of String(jsonlText ?? "").split(/\r?\n/)) {
    if (!line.trim()) continue;
    let event;
    try {
      event = JSON.parse(line);
    } catch {
      continue;
    }

    const text = event?.item?.type === "agent_message" ? event.item.text : undefined;
    const jsonText = extractJsonText(text);
    if (jsonText) candidates.push(jsonText);
  }

  for (const text of candidates.reverse()) {
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      continue;
    }
    if (isWorkerResult(parsed) && hasTerminalWorkerSignal(parsed)) return parsed;
  }
  return null;
}

function extractJsonText(text) {
  if (typeof text !== "string") return null;
  const trimmed = text.trim();
  if (trimmed.startsWith("{")) return trimmed;

  const fenced = trimmed.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);
  const fencedBody = fenced?.[1]?.trim();
  return fencedBody?.startsWith("{") ? fencedBody : null;
}

function isWorkerResult(value) {
  return (
    value &&
    typeof value === "object" &&
    typeof value.status === "string" &&
    typeof value.repo === "string" &&
    typeof value.cluster_id === "string" &&
    typeof value.mode === "string" &&
    typeof value.summary === "string" &&
    Array.isArray(value.actions) &&
    Array.isArray(value.needs_human) &&
    Array.isArray(value.merge_preflight) &&
    Object.hasOwn(value, "canonical") &&
    Object.hasOwn(value, "canonical_issue") &&
    Object.hasOwn(value, "canonical_pr") &&
    Object.hasOwn(value, "fix_artifact")
  );
}

function hasTerminalWorkerSignal(result) {
  if (result.status !== "planned") return true;
  if (result.actions.length > 0) return true;
  if (result.needs_human.length > 0) return true;
  if (result.merge_preflight.length > 0) return true;
  if (result.fix_artifact !== null) return true;
  if (result.canonical !== null || result.canonical_issue !== null || result.canonical_pr !== null) return true;
  return false;
}
