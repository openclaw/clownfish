export function parseCommand(body) {
  for (const line of String(body ?? "").split(/\r?\n/)) {
    const slash = line.match(/^\s*\/clownfish(?:\s+(.+))?\s*$/i);
    if (slash) return commandFromText("slash", slash[1] ?? "status");
    const mention = line.match(/^\s*@openclaw-clownfish(?:\[bot\])?(?:\s+(.+))?\s*$/i);
    if (mention) return commandFromText("mention", mention[1] ?? "status");
  }
  return null;
}

export function renderResponse(command, dispatched) {
  const marker = `<!-- clownfish-command:${command.comment_id}:${command.intent}:${command.target?.head_sha ?? "na"} -->`;
  if (command.intent === "help") {
    return [
      marker,
      "Clownfish is listening for maintainer commands.",
      "",
      "Supported commands: `/clownfish status`, `/clownfish fix ci`, `/clownfish address review`, `/clownfish rebase`, `/clownfish explain`, `/clownfish stop`.",
    ].join("\n");
  }
  if (["status", "explain"].includes(command.intent)) {
    return [marker, renderStatusBody(command)].join("\n");
  }
  if (command.intent === "stop") {
    return [
      marker,
      "Clownfish will leave this item for human review.",
      "",
      "I added `clownfish:human-review` when permissions allowed it. Future automation should treat this as a maintainer handoff signal.",
    ].join("\n");
  }
  if (!dispatched) {
    return [
      marker,
      "Clownfish did not dispatch a repair worker.",
      "",
      `Reason: ${command.reason ?? "unsupported command or target"}.`,
      "",
      "Supported repair commands currently work on existing Clownfish PRs only: `/clownfish fix ci`, `/clownfish address review`, `/clownfish rebase`.",
    ].join("\n");
  }
  return [
    marker,
    "Clownfish picked this up.",
    "",
    `Command: \`${command.command}\``,
    `Action: dispatched \`${dispatched.workflow}\` for \`${dispatched.job_path}\` in \`${dispatched.mode}\` mode.`,
    `Model: \`${dispatched.model}\``,
    "",
    "I will update the PR branch if the repair worker finds a safe, narrow fix.",
  ].join("\n");
}

function commandFromText(trigger, value) {
  const command = String(value ?? "status").trim().replace(/\s+/g, " ").toLowerCase();
  const intent = normalizeIntent(command);
  return { trigger, command, intent };
}

function normalizeIntent(command) {
  if (!command || command === "status") return "status";
  if (["help", "?"].includes(command)) return "help";
  if (["explain", "why"].includes(command)) return "explain";
  if (["fix ci", "fix-ci", "ci", "repair ci", "repair checks", "fix checks"].includes(command)) return "fix_ci";
  if (["address review", "address-review", "fix review", "review"].includes(command)) return "address_review";
  if (["rebase", "update branch", "sync"].includes(command)) return "rebase";
  if (["stop", "pause", "human review", "handoff"].includes(command)) return "stop";
  return "help";
}

function renderStatusBody(command) {
  const target = command.target ?? {};
  const lines = ["Clownfish status:"];
  if (target.kind === "pull_request") {
    lines.push(`- PR: #${command.issue_number}`);
    lines.push(`- Branch: \`${target.branch ?? "unknown"}\``);
    lines.push(`- Clownfish PR: ${target.is_clownfish_pr ? "yes" : "no"}`);
    if (target.job_path) lines.push(`- Job: \`${target.job_path}\``);
    if (target.merge_state_status) lines.push(`- Merge state: \`${target.merge_state_status}\``);
    if (target.review_decision) lines.push(`- Review decision: \`${target.review_decision}\``);
    lines.push(`- Checks: ${formatCounts(target.checks?.counts) || "none"}`);
    if (target.checks?.blockers?.length) lines.push(`- Check blockers: ${target.checks.blockers.slice(0, 5).join(", ")}`);
  } else {
    lines.push(`- Issue: #${command.issue_number}`);
    lines.push(`- State: \`${target.state ?? "unknown"}\``);
    lines.push("- Existing PR repair: not applicable until a Clownfish PR exists.");
  }
  return lines.join("\n");
}

function formatCounts(counts) {
  return Object.entries(counts ?? {})
    .map(([key, value]) => `${key}:${value}`)
    .join(" ");
}
