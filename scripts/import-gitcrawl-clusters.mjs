#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { hasDeterministicSecuritySignal, hasSecuritySignalText, parseArgs, repoRoot } from "./lib.mjs";

const DEFAULT_BLOCK_LABELS = [
  "proof:*",
  "status:*ready for maintainer look",
  "status:*waiting on author",
  "status:*needs proof",
  "triage: needs-real-behavior-proof",
  "triage: mock-only-proof",
  "merge-risk:*",
  "rating:*platinum",
  "rating:*gold",
  "rating:*diamond",
  "issue-rating:*platinum",
  "issue-rating:*gold",
  "issue-rating:*diamond",
  "impact:auth-provider",
  "impact:session-state",
];
const rawArgv = process.argv.slice(2);
const args = parseArgs(rawArgv);
const repo = String(args.repo ?? "openclaw/openclaw");
const dbPath = path.resolve(String(args.db ?? path.join(os.homedir(), ".config", "gitcrawl", "gitcrawl.db")));
const outDir = path.resolve(String(args.out ?? path.join(repoRoot(), "jobs", repo.split("/")[0], "inbox")));
const existingDir = path.resolve(String(args["existing-dir"] ?? path.join(repoRoot(), "jobs", repo.split("/")[0])));
const existingResultsDir = path.resolve(
  String(args["existing-results-dir"] ?? args.existing_results_dir ?? path.join(repoRoot(), "results", repo.split("/")[0])),
);
const mode = String(args.mode ?? "plan");
const suffix = typeof args.suffix === "string" ? args.suffix : "";
const allowInstantClose = booleanArg("allow-instant-close", false);
const editEnabledByDefault = mode === "autonomous" || mode === "execute";
const allowMerge = booleanArg("allow-merge", editEnabledByDefault);
const allowFixPr = booleanArg("allow-fix-pr", editEnabledByDefault);
const allowForcePush = booleanArg("allow-force-push", false);
const allowGuardedForcePush = allowFixPr && editEnabledByDefault && allowForcePush;
const allowPostMergeClose = booleanArg("allow-post-merge-close", allowMerge || allowFixPr);
const skipExisting = args["skip-existing"] !== "false";
const existingResultsOnly = Boolean(args["existing-results-only"] ?? args.existing_results_only);
const existingResultsActionPolicy = String(args["existing-results-action-policy"] ?? args.existing_results_action_policy ?? "all");
const securityPolicy = securityPolicyArg();
const overlapPolicy = String(args["overlap-policy"] ?? "skip-any");
const liveStateFilter = Boolean(args["live-state-filter"] ?? args.live_state_filter);
const ghCommand = String(args["gh-bin"] ?? args.gh_bin ?? process.env.CLOWNFISH_GH_BIN ?? "gh");
const skipFeatureRequests = args["include-feature-requests"] !== true && args["skip-feature-requests"] !== "false";
const includeBlockedLabels = Boolean(args["include-blocked-labels"] ?? args.include_blocked_labels);
const blockedLabelPatterns = includeBlockedLabels
  ? []
  : compileLabelPatterns(argValues(rawArgv, ["block-label", "block_label"], args["block-label"] ?? args.block_label ?? DEFAULT_BLOCK_LABELS));
const dryRun = Boolean(args["dry-run"]);
const jsonOutput = Boolean(args.json);
const fromGitcrawl = Boolean(args["from-gitcrawl"] || args["from-ghcrawl"] || args.all);
const limit = numberArg("limit", 40);
const minSize = numberArg("min-size", 2);
const minOpenMembers = numberArg("min-open-members", 1);
let clusterIds = args._.map((value) => Number(value)).filter(Boolean);
const selectingFromGitcrawl = clusterIds.length === 0 && fromGitcrawl;
const clusterSource = detectClusterSource();
const threadBodyColumn = tableHasColumn("threads", "body_excerpt") ? "body_excerpt" : "body";

if (selectingFromGitcrawl) {
  clusterIds = selectClusterIds();
}

if (clusterIds.length === 0) {
  console.error(
    "usage: node scripts/import-gitcrawl-clusters.mjs <cluster-id> [...] [--from-gitcrawl] [--limit N] [--min-size N] [--min-open-members N] [--repo owner/repo] [--db path] [--out dir] [--existing-dir dir] [--existing-results-dir dir] [--existing-results-only] [--existing-results-action-policy all|terminal] [--mode plan|autonomous] [--suffix name] [--overlap-policy skip-any|skip-full|exclude-existing] [--security-policy skip-full|skip-any|include] [--block-label pattern] [--include-blocked-labels] [--live-state-filter] [--gh-bin gh] [--dry-run] [--json] [--allow-instant-close] [--allow-merge true|false] [--allow-fix-pr true|false] [--allow-force-push true|false] [--allow-post-merge-close true|false]",
  );
  process.exit(2);
}
if (!["plan", "execute", "autonomous"].includes(mode)) {
  console.error("mode must be plan, execute, or autonomous");
  process.exit(2);
}
if (!["skip-any", "skip-full", "exclude-existing"].includes(overlapPolicy)) {
  console.error("overlap-policy must be skip-any, skip-full, or exclude-existing");
  process.exit(2);
}
if (!["skip-full", "skip-any", "include"].includes(securityPolicy)) {
  console.error("security-policy must be skip-full, skip-any, or include");
  process.exit(2);
}
if (!["all", "terminal"].includes(existingResultsActionPolicy)) {
  console.error("existing-results-action-policy must be all or terminal");
  process.exit(2);
}
if (allowForcePush && !allowGuardedForcePush) {
  console.error("--allow-force-push requires execute/autonomous mode with --allow-fix-pr true");
  process.exit(2);
}

if (!dryRun) fs.mkdirSync(outDir, { recursive: true });

const existingClusterIds = skipExisting && !existingResultsOnly ? existingGitcrawlClusterIds(existingDir) : new Set();
const existingMemberRefs = skipExisting ? existingMemberRefMap() : new Map();
const initialExistingMemberRefCount = existingMemberRefs.size;
const prefetchedMembers = selectingFromGitcrawl ? prefetchMembers(clusterIds) : null;
const liveStateCache = new Map();
const generated = [];
const skipped = [];
let createdCount = 0;

for (const clusterId of clusterIds) {
  if (selectingFromGitcrawl && createdCount >= limit) break;
  if (existingClusterIds.has(clusterId)) {
    skipCluster(clusterId, "existing_cluster", "skip existing cluster", { title: "" });
    continue;
  }

  let members = prefetchedMembers?.get(clusterId) ?? sqliteJson(memberSql(clusterId));

  if (members.length === 0) {
    skipCluster(clusterId, "not_found", "cluster not found", { title: "" });
    continue;
  }
  const representativeTitle = members[0].representative_title ?? "";
  const overlappingRefs = members
    .map((member) => Number(member.number))
    .filter((number) => existingMemberRefs.has(number));
  const overlappingRefSet = new Set(overlappingRefs);
  const existingFiles = [...new Set(overlappingRefs.flatMap((number) => existingMemberRefs.get(number) ?? []))];
  const allMembersOverlap = overlappingRefs.length > 0 && overlappingRefs.length === members.length;
  if (overlappingRefs.length > 0 && (overlapPolicy === "skip-any" || (overlapPolicy === "skip-full" && allMembersOverlap))) {
    skipCluster(clusterId, "existing_member_overlap", "skip existing member overlap cluster", {
      title: representativeTitle,
      refs: overlappingRefs,
      existingFiles,
      overlap_policy: overlapPolicy,
    });
    continue;
  }

  let securitySensitiveMembers = members.filter((member) =>
    hasDeterministicSecuritySignal({ labels: safeJson(member.labels_json) }) ||
    hasSecuritySignalText(member.title, member.body),
  );
  let targetMembers = overlapPolicy === "exclude-existing"
    ? members.filter((member) => !overlappingRefSet.has(Number(member.number)))
    : members;
  if (targetMembers.length === 0) {
    skipCluster(clusterId, "existing_member_overlap", "skip fully overlapped cluster", {
      title: representativeTitle,
      refs: overlappingRefs,
      existingFiles,
      overlap_policy: overlapPolicy,
    });
    continue;
  }
  const blockedLabelMembers = targetMembers
    .map((member) => ({ member, labels: blockedLabelsForMember(member) }))
    .filter((item) => item.labels.length > 0);
  if (blockedLabelMembers.length > 0) {
    skipCluster(clusterId, "blocked_label", "skip blocked-label cluster", {
      title: representativeTitle,
      refs: blockedLabelMembers.map((item) => Number(item.member.number)),
      labels: unique(blockedLabelMembers.flatMap((item) => item.labels)),
    });
    continue;
  }
  if (liveStateFilter) {
    members = applyLiveStates(members);
    securitySensitiveMembers = members.filter((member) =>
      hasDeterministicSecuritySignal({ labels: safeJson(member.labels_json) }) ||
      hasSecuritySignalText(member.title, member.body),
    );
    targetMembers = overlapPolicy === "exclude-existing"
      ? members.filter((member) => !overlappingRefSet.has(Number(member.number)))
      : members;
  }
  const targetMemberNumbers = new Set(targetMembers.map((member) => Number(member.number)));
  const targetSecuritySensitiveMembers = securitySensitiveMembers.filter((member) =>
    targetMemberNumbers.has(Number(member.number)),
  );
  const securitySensitive = targetSecuritySensitiveMembers.length > 0;
  const openTargetMembers = targetMembers.filter((member) => member.state === "open");
  const targetSecuritySensitiveNumbers = new Set(targetSecuritySensitiveMembers.map((member) => Number(member.number)));
  const allOpenTargetSecuritySensitive =
    openTargetMembers.length > 0 &&
    openTargetMembers.every((member) => targetSecuritySensitiveNumbers.has(Number(member.number)));
  if (
    (securityPolicy === "skip-any" && securitySensitive) ||
    (securityPolicy === "skip-full" && allOpenTargetSecuritySensitive)
  ) {
    skipCluster(clusterId, "security_sensitive", "skip security-sensitive cluster", {
      title: representativeTitle,
      refs: targetSecuritySensitiveMembers.map((member) => Number(member.number)),
      security_policy: securityPolicy,
    });
    continue;
  }
  if (skipFeatureRequests && isProductFeatureRequest(representativeTitle)) {
    skipCluster(clusterId, "product_feature_request", "skip product feature-request cluster", {
      title: representativeTitle,
    });
    continue;
  }

  const first = members[0];
  const representative = {
    number: first.representative_number,
    kind: first.representative_kind,
    state: first.representative_state,
    title: first.representative_title,
  };
  const openMembers = targetMembers.filter((member) => member.state === "open");
  if (openMembers.length === 0) {
    skipCluster(clusterId, "closed_only", "skip closed-only cluster", { title: representative.title ?? "" });
    continue;
  }
  if (openMembers.length < minOpenMembers) {
    skipCluster(clusterId, "low_open", "skip low-open cluster", {
      title: representative.title ?? "",
      open_members: openMembers.length,
      min_open_members: minOpenMembers,
    });
    continue;
  }
  const closedMembers = targetMembers.filter((member) => member.state !== "open");
  const excludedOverlapMembers = overlapPolicy === "exclude-existing"
    ? members.filter((member) => overlappingRefSet.has(Number(member.number)))
    : [];
  const issueCount = members.filter((member) => member.kind === "issue").length;
  const pullRequestCount = members.filter((member) => member.kind === "pull_request").length;
  const latestUpdatedAt = members.map((member) => member.updated_at).sort().at(-1);
  const slug = slugify(representative.title || `cluster-${clusterId}`);
  const fileStem = suffix ? `gitcrawl-${clusterId}-${slugify(suffix)}` : `gitcrawl-${clusterId}-${slug}`;
  const filePath = path.join(outDir, `${fileStem}.md`);
  const clusterSlug = suffix ? `gitcrawl-${clusterId}-${slugify(suffix)}` : `gitcrawl-${clusterId}-${slug}`;
  const targetRepresentative = targetMemberNumbers.has(Number(representative.number));
  const canonical = representative.number && targetRepresentative ? [`#${representative.number}`] : [];
  const securityRefs = securitySensitiveMembers.map((member) => `#${member.number}`);
  const overlapRefs = overlappingRefs.map((number) => `#${number}`);

  const markdown = [
    "---",
    `repo: ${repo}`,
    `cluster_id: ${clusterSlug}`,
    `mode: ${mode}`,
    "allowed_actions:",
    "  - comment",
    "  - label",
    "  - close",
    ...(allowMerge ? ["  - merge"] : []),
    ...(allowFixPr ? ["  - fix", "  - raise_pr"] : []),
    ...(allowGuardedForcePush ? ["  - force_push"] : []),
    "blocked_actions:",
    ...(allowGuardedForcePush ? [] : ["  - force_push"]),
    "  - bypass_checks",
    ...(allowMerge ? [] : ["  - merge"]),
    ...(allowFixPr ? [] : ["  - fix", "  - raise_pr"]),
    "require_human_for:",
    "  - security_sensitive",
    "  - failing_checks",
    "  - conflicting_prs",
    "  - unclear_canonical",
    "  - broad_code_delta",
    ...yamlField("canonical", canonical),
    ...yamlField("candidates", openMembers.map((member) => `#${member.number}`)),
    ...yamlField("cluster_refs", targetMembers.map((member) => `#${member.number}`)),
    `overlap_policy: ${quoteYaml(overlapPolicy)}`,
    ...(overlapRefs.length > 0 ? yamlField("existing_overlap_refs", overlapRefs) : []),
    "security_policy: central_security_only",
    `import_security_policy: ${quoteYaml(securityPolicy)}`,
    "security_sensitive: false",
    ...(securityRefs.length > 0 ? yamlField("security_signal_refs", securityRefs) : []),
    ...(mode === "autonomous" || mode === "execute"
      ? [
          `allow_instant_close: ${allowInstantClose ? "true" : "false"}`,
          `allow_fix_pr: ${allowFixPr ? "true" : "false"}`,
          `allow_merge: ${allowMerge ? "true" : "false"}`,
          `allow_post_merge_close: ${allowPostMergeClose ? "true" : "false"}`,
          `require_fix_before_close: ${
            securitySensitiveMembers.length > 0 ||
            (pullRequestCount > 0 && (allowFixPr || allowMerge))
              ? "true"
              : "false"
          }`,
        ]
      : []),
    `canonical_hint: ${quoteYaml(canonicalHint(representative, targetRepresentative))}`,
    `notes: ${quoteYaml(jobNotes(clusterId, targetSecuritySensitiveMembers, excludedOverlapMembers))}`,
    "---",
    "",
    `# Gitcrawl Cluster ${clusterId}`,
    "",
    `Generated from local gitcrawl run cluster ${clusterId} for \`${repo}\`.`,
    "",
    "Display title:",
    "",
    `> ${representative.title || "Untitled representative"}`,
    "",
    "Cluster shape from gitcrawl:",
    "",
    `- total members: ${members.length}`,
    `- issues: ${issueCount}`,
    `- pull requests: ${pullRequestCount}`,
    `- open candidates in local store: ${openMembers.length}`,
    ...(excludedOverlapMembers.length > 0 ? [`- excluded existing-overlap refs: ${formatRefs(excludedOverlapMembers)}`] : []),
    ...(securityRefs.length > 0 ? [`- security-signal refs requiring route_security: ${securityRefs.join(", ")}`] : []),
    `- representative: #${representative.number}, currently ${representative.state} in local store`,
    `- latest member update: ${latestUpdatedAt}`,
    "",
    "## Goal",
    "",
    goalText(mode),
    "",
    "## Member Inventory",
    "",
    "Closed context refs:",
    "",
    ...bulletList(closedMembers, { securitySensitiveMembers: targetSecuritySensitiveMembers }),
    "",
    "Open candidates:",
    "",
    ...bulletList(openMembers, { securitySensitiveMembers: targetSecuritySensitiveMembers }),
    ...(excludedOverlapMembers.length > 0
      ? [
          "",
          "Existing-overlap context refs:",
          "",
          ...bulletList(excludedOverlapMembers, { securitySensitiveMembers }),
        ]
      : []),
    "",
  ].join("\n");

  if (!dryRun) fs.writeFileSync(filePath, markdown);
  for (const member of targetMembers) {
    const number = Number(member.number);
    if (!Number.isSafeInteger(number)) continue;
    const files = existingMemberRefs.get(number) ?? [];
    files.push(path.relative(repoRoot(), filePath));
    existingMemberRefs.set(number, files);
  }
  createdCount += 1;
  const generatedJob = {
    path: path.relative(repoRoot(), filePath),
    cluster_id: clusterSlug,
    source_cluster_id: clusterId,
    mode,
    candidates: openMembers.map((member) => `#${member.number}`),
    cluster_refs: targetMembers.map((member) => `#${member.number}`),
    security_signal_refs: securityRefs,
    existing_overlap_refs: overlapRefs,
    dry_run: dryRun,
  };
  generated.push(generatedJob);
  if (!jsonOutput) console.log(generatedJob.path);
}

if (jsonOutput) {
  console.log(JSON.stringify({
    generated,
    skipped,
    options: {
      repo,
      mode,
      dry_run: dryRun,
      overlap_policy: overlapPolicy,
      security_policy: securityPolicy,
      skip_existing: skipExisting,
      existing_results_only: existingResultsOnly,
      existing_results_action_policy: existingResultsActionPolicy,
      live_state_filter: liveStateFilter,
      gh_bin: liveStateFilter ? ghCommand : null,
      existing_dir: path.relative(repoRoot(), existingDir),
      existing_results_dir: path.relative(repoRoot(), existingResultsDir),
      skip_feature_requests: skipFeatureRequests,
      include_blocked_labels: includeBlockedLabels,
      blocked_labels: blockedLabelPatterns.map((pattern) => pattern.source),
      limit,
      min_size: minSize,
      min_open_members: minOpenMembers,
      allow_force_push: allowForcePush,
    },
    totals: {
      generated: generated.length,
      skipped: skipped.length,
      existing_clusters: existingClusterIds.size,
      existing_refs: initialExistingMemberRefCount,
    },
  }, null, 2));
}

function existingMemberRefMap() {
  const refs = existingResultsOnly ? new Map() : existingGitcrawlMemberRefs(existingDir);
  mergeMemberRefs(refs, existingPublishedResultMemberRefs(existingResultsDir, repo, existingResultsActionPolicy));
  return refs;
}

function selectClusterIds() {
  if (clusterSource === "portable") {
    return sqliteJson(`
      select
        cg.id,
        count(*) as member_count
      from cluster_groups cg
      join cluster_memberships cm on cm.cluster_id = cg.id and cm.state = 'active'
      where cg.status = 'active'
      group by cg.id
      having member_count >= ${sqlNumber(minSize)}
      order by member_count desc, cg.id asc
    `).map((row) => Number(row.id)).filter(Boolean);
  }
  return sqliteJson(`
    select
      c.id,
      c.member_count
    from clusters c
    where c.closed_at_local is null
      and c.member_count >= ${sqlNumber(minSize)}
    order by c.member_count desc, c.id asc
  `).map((row) => Number(row.id)).filter(Boolean);
}

function memberSql(clusterId) {
  return memberSqlForClusterIds([clusterId]);
}

function memberSqlForClusterIds(clusterIds) {
  const idList = clusterIds.map(sqlNumber).join(",");
  if (clusterSource === "portable") {
    return `
      select
        cg.id as cluster_id,
        (
          select count(*)
          from cluster_memberships cm_count
          where cm_count.cluster_id = cg.id
            and cm_count.state = 'active'
        ) as member_count,
        cg.created_at as cluster_created_at,
        cg.closed_at as closed_at_local,
        cg.status as close_reason_local,
        rt.number as representative_number,
        rt.kind as representative_kind,
        rt.state as representative_state,
        rt.title as representative_title,
        t.number,
        t.kind,
        t.state,
        t.title,
        t.${threadBodyColumn} as body,
        t.labels_json,
        t.updated_at
      from cluster_groups cg
      join cluster_memberships cm on cm.cluster_id = cg.id and cm.state = 'active'
      join threads t on t.id = cm.thread_id
      left join threads rt on rt.id = cg.representative_thread_id
      where cg.id in (${idList})
      order by cg.id, t.number;
    `;
  }
  return `
    select
      c.id as cluster_id,
      c.member_count,
      c.created_at as cluster_created_at,
      c.closed_at_local,
      c.close_reason_local,
      rt.number as representative_number,
      rt.kind as representative_kind,
      rt.state as representative_state,
      rt.title as representative_title,
      t.number,
      t.kind,
      t.state,
      t.title,
      t.body,
      t.labels_json,
      t.updated_at
    from clusters c
    join cluster_members cm on cm.cluster_id = c.id
    join threads t on t.id = cm.thread_id
    left join threads rt on rt.id = c.representative_thread_id
    where c.id in (${idList})
    order by c.id, t.number;
  `;
}

function prefetchMembers(clusterIds) {
  const rows = sqliteJson(memberSqlForClusterIds(clusterIds));
  const byCluster = new Map();
  for (const row of rows) {
    const id = Number(row.cluster_id);
    const members = byCluster.get(id) ?? [];
    members.push(row);
    byCluster.set(id, members);
  }
  return byCluster;
}

function applyLiveStates(members) {
  const numbers = unique(members.map((member) => Number(member.number)).filter(Number.isSafeInteger));
  const states = liveStatesForNumbers(numbers);
  return members.map((member) => {
    const number = Number(member.number);
    const representativeNumber = Number(member.representative_number);
    return {
      ...member,
      state: states.get(number) ?? member.state,
      representative_state: states.get(representativeNumber) ?? member.representative_state,
    };
  });
}

function liveStatesForNumbers(numbers) {
  const states = new Map();
  for (const number of numbers) {
    if (!liveStateCache.has(number)) liveStateCache.set(number, fetchLiveState(number));
    states.set(number, liveStateCache.get(number));
  }
  return states;
}

function fetchLiveState(number) {
  const [owner, name] = repo.split("/");
  const query = `query($owner:String!,$name:String!,$number:Int!){
    repository(owner:$owner,name:$name) {
      issueOrPullRequest(number:$number) {
        __typename
        ... on Issue { state }
        ... on PullRequest { state }
      }
    }
  }`;
  const payload = execFileSync(
    ghCommand,
    [
      "api",
      "graphql",
      "-F",
      `owner=${owner}`,
      "-F",
      `name=${name}`,
      "-F",
      `number=${number}`,
      "-f",
      `query=${query}`,
    ],
    {
      cwd: repoRoot(),
      encoding: "utf8",
      maxBuffer: 2 * 1024 * 1024,
      env: {
        ...process.env,
        CLICOLOR: "0",
        CLICOLOR_FORCE: "0",
        GH_FORCE_TTY: "0",
        NO_COLOR: "1",
      },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  const item = JSON.parse(stripAnsi(payload))?.data?.repository?.issueOrPullRequest;
  const state = String(item?.state ?? "").toLowerCase();
  if (state === "open") return "open";
  if (state === "closed" || state === "merged") return "closed";
  throw new Error(`GitHub live state unavailable for #${number}`);
}

function stripAnsi(value) {
  return String(value).replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function sqliteJson(sql) {
  const output = execFileSync("sqlite3", ["-json", dbPath, sql], {
    cwd: repoRoot(),
    encoding: "utf8",
    maxBuffer: 256 * 1024 * 1024,
  }).trim();
  return JSON.parse(output || "[]");
}

function sqliteScalar(sql) {
  const output = execFileSync("sqlite3", [dbPath, sql], {
    cwd: repoRoot(),
    encoding: "utf8",
    maxBuffer: 1024 * 1024,
  }).trim();
  return output;
}

function detectClusterSource() {
  const legacyRows = Number(sqliteScalar("select count(*) from sqlite_master where type = 'table' and name = 'clusters';")) > 0
    ? Number(sqliteScalar("select count(*) from clusters;"))
    : 0;
  if (legacyRows > 0) return "legacy";
  const portableRows = Number(sqliteScalar("select count(*) from sqlite_master where type = 'table' and name = 'cluster_groups';")) > 0
    ? Number(sqliteScalar("select count(*) from cluster_groups;"))
    : 0;
  if (portableRows > 0) return "portable";
  return "legacy";
}

function tableHasColumn(table, column) {
  const tableName = sqlString(table);
  const columnName = sqlString(column);
  return Number(sqliteScalar(`select count(*) from pragma_table_info(${tableName}) where name = ${columnName};`)) > 0;
}

function numberArg(name, fallback) {
  const value = Number(args[name] ?? fallback);
  if (!Number.isInteger(value) || value < 1) throw new Error(`--${name} must be a positive integer`);
  return value;
}

function booleanArg(name, fallback) {
  const value = args[name];
  if (value === undefined) return fallback;
  if (value === true || value === "true") return true;
  if (value === false || value === "false") return false;
  throw new Error(`--${name} must be true or false`);
}

function securityPolicyArg() {
  if (args["security-policy"] !== undefined) return String(args["security-policy"]);
  if (args["include-security"] === true || args["skip-security"] === "false") return "include";
  if (args["skip-security"] === true || args["skip-security"] === "true") return "skip-any";
  return "skip-full";
}

function sqlNumber(value) {
  if (!Number.isSafeInteger(value)) {
    throw new Error(`unsafe cluster id: ${value}`);
  }
  return String(value);
}

function safeJson(value) {
  try {
    return JSON.parse(value || "[]");
  } catch {
    return [];
  }
}

function blockedLabelsForMember(member) {
  const labels = labelNames(safeJson(member.labels_json));
  return labels.filter((label) => {
    const normalized = normalizeLabel(label);
    return blockedLabelPatterns.some((pattern) => pattern.test(normalized));
  });
}

function argValues(argv, names, fallback) {
  const keys = new Set(names.map((name) => `--${name}`));
  const values = [];
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    const equalMatch = item.match(/^(--[^=]+)=(.*)$/);
    if (equalMatch) {
      if (keys.has(equalMatch[1])) values.push(equalMatch[2]);
      continue;
    }
    if (!keys.has(item)) continue;
    const next = argv[index + 1];
    if (next && !next.startsWith("--")) {
      values.push(next);
      index += 1;
    } else {
      values.push("true");
    }
  }
  return values.length > 0 ? values : fallback;
}

function listArgValues(value) {
  const values = Array.isArray(value) ? value : [value];
  return values
    .flatMap((item) => String(item ?? "").split(/[\n,]/))
    .map((item) => item.trim())
    .filter(Boolean);
}

function labelNames(labels) {
  return labels.map((label) => label.name ?? label).filter(Boolean).map(String);
}

function normalizeLabel(label) {
  return String(label ?? "").toLowerCase().replace(/\s+/g, " ").trim();
}

function compileLabelPatterns(values) {
  return listArgValues(values).map((value) => {
    const normalized = normalizeLabel(value);
    if (normalized.includes("*")) return new RegExp(`^${normalized.split("*").map(escapeRegExp).join(".*")}$`);
    return new RegExp(`^${escapeRegExp(normalized)}$`);
  });
}

function escapeRegExp(value) {
  return String(value).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
}

function isProductFeatureRequest(title) {
  return /^\s*\[?\s*feature(?:\s+(?:request|proposal))?\b/i.test(String(title ?? ""));
}

function existingGitcrawlClusterIds(dir) {
  if (!fs.existsSync(dir)) return new Set();
  const ids = new Set();
  for (const entry of fs.readdirSync(dir, { recursive: true })) {
    const file = path.join(dir, String(entry));
    if (!file.endsWith(".md") || !fs.statSync(file).isFile()) continue;
    const text = fs.readFileSync(file, "utf8");
    for (const match of text.matchAll(/\b(?:ghcrawl|gitcrawl)-(\d+)\b/g)) ids.add(Number(match[1]));
  }
  return ids;
}

function existingGitcrawlMemberRefs(dir) {
  const refs = new Map();
  if (!fs.existsSync(dir)) return refs;
  for (const entry of fs.readdirSync(dir, { recursive: true })) {
    const file = path.join(dir, String(entry));
    if (!file.endsWith(".md") || !fs.statSync(file).isFile()) continue;
    const text = fs.readFileSync(file, "utf8");
    const frontmatter = text.match(/^---\n([\s\S]*?)\n---/);
    const clusterRefs = frontmatter?.[1].match(/^cluster_refs:\n((?:  - .+\n?)*)/m)?.[1] ?? "";
    for (const match of clusterRefs.matchAll(/#(\d+)/g)) {
      const number = Number(match[1]);
      if (!Number.isSafeInteger(number)) continue;
      const files = refs.get(number) ?? [];
      files.push(path.relative(repoRoot(), file));
      refs.set(number, files);
    }
  }
  return refs;
}

function existingPublishedResultMemberRefs(dir, targetRepo, actionPolicy) {
  const refs = new Map();
  if (!fs.existsSync(dir)) return refs;
  for (const entry of fs.readdirSync(dir, { recursive: true })) {
    const file = path.join(dir, String(entry));
    if (!file.endsWith(".md") || !fs.statSync(file).isFile()) continue;
    const text = fs.readFileSync(file, "utf8");
    const frontmatter = text.match(/^---\n([\s\S]*?)\n---\n?/);
    if (!frontmatter) continue;
    const parsed = parsePublishedResultFrontmatter(frontmatter[1]);
    if (String(parsed.repo ?? "") !== targetRepo) continue;
    for (const ref of publishedResultRefs(text, actionPolicy)) {
      const number = Number(ref.slice(1));
      if (!Number.isSafeInteger(number)) continue;
      const files = refs.get(number) ?? [];
      files.push(path.relative(repoRoot(), file));
      refs.set(number, files);
    }
  }
  return refs;
}

function publishedResultRefs(markdown, actionPolicy) {
  if (actionPolicy === "all") return workerActionRows(markdown).map((row) => row.target);
  const refs = new Set();
  for (const row of applyActionRows(markdown)) {
    if (row.status === "executed") refs.add(row.target);
  }
  for (const row of workerActionRows(markdown)) {
    if (row.action === "keep_closed" || row.action === "route_security") refs.add(row.target);
  }
  return [...refs];
}

function mergeMemberRefs(target, source) {
  for (const [number, files] of source.entries()) {
    const existing = target.get(number) ?? [];
    existing.push(...files);
    target.set(number, existing);
  }
  return target;
}

function parsePublishedResultFrontmatter(text) {
  const out = {};
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    out[match[1]] = String(match[2] ?? "").trim().replace(/^"(.*)"$/, "$1");
  }
  return out;
}

function applyActionRows(markdown) {
  return actionTableRows(markdown, "Apply Actions");
}

function workerActionRows(markdown) {
  return actionTableRows(markdown, "Worker Action Matrix");
}

function actionTableRows(markdown, headingName) {
  const heading = markdown.match(new RegExp(`^## ${escapeRegExp(headingName)}[^\\n]*\\n`, "m"));
  if (!heading) return [];
  const rest = markdown.slice((heading.index ?? 0) + heading[0].length);
  const nextHeading = rest.search(/\n## /);
  const section = nextHeading >= 0 ? rest.slice(0, nextHeading) : rest;
  const rows = [];
  for (const line of section.split(/\r?\n/)) {
    const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
    if (cells.length < 3 || cells[0] === "Target" || cells[0] === "---" || cells[0] === "_None_") continue;
    const target = cells[0];
    if (!/^#\d+$/.test(target)) continue;
    rows.push({
      target,
      action: String(cells[1] ?? "").trim(),
      status: String(cells[2] ?? "").trim(),
      classification: String(cells[3] ?? "").trim(),
      reason: String(cells[4] ?? "").trim(),
    });
  }
  return rows;
}

function yamlField(name, values) {
  if (values.length === 0) return [`${name}: []`];
  return [`${name}:`, ...values.map((value) => `  - ${quoteYaml(value)}`)];
}

function quoteYaml(value) {
  return JSON.stringify(String(value));
}

function sqlString(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}

function canonicalHint(representative, targetRepresentative = true) {
  if (!representative.number) return "No gitcrawl representative was available; worker must choose a live canonical.";
  if (!targetRepresentative) {
    return `gitcrawl representative #${representative.number} is already owned by an existing job; worker must choose the best live canonical from the remaining open refs.`;
  }
  if (representative.state === "open") {
    return `gitcrawl representative #${representative.number} is open; worker must verify it is still the best live canonical.`;
  }
  return `gitcrawl representative #${representative.number} is ${representative.state}; worker must verify whether an open canonical should replace it.`;
}

function goalText(mode) {
  if (mode === "plan") {
    return "Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.";
  }
  return "Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.";
}

function jobNotes(clusterId, securitySensitiveMembers, excludedOverlapMembers = []) {
  const base = `Generated from gitcrawl run cluster ${clusterId} on ${new Date().toISOString().slice(0, 10)}.`;
  const notes = [base];
  if (securitySensitiveMembers.length > 0) {
    notes.push(`Security-signal refs ${formatRefs(securitySensitiveMembers)} must be routed with route_security and must not block unrelated non-security work.`);
  }
  if (excludedOverlapMembers.length > 0) {
    notes.push(`Existing-overlap refs ${formatRefs(excludedOverlapMembers)} were excluded from actionable refs and kept as context only.`);
  }
  return notes.join(" ");
}

function bulletList(members, { securitySensitiveMembers = [] } = {}) {
  if (members.length === 0) return ["- none"];
  const securityRefs = new Set(securitySensitiveMembers.map((member) => Number(member.number)));
  return members.map((member) =>
    `- #${member.number}${securityRefs.has(Number(member.number)) ? " [security-signal]" : ""} ${member.title}`,
  );
}

function formatRefs(members) {
  return members.map((member) => `#${member.number}`).join(", ");
}

function unique(values) {
  return [...new Set(values)];
}

function skipCluster(clusterId, reason, message, details = {}) {
  const refs = details.refs ?? [];
  const examples = refs
    .slice(0, 4)
    .map((number) => `#${number}`)
    .join(", ");
  const suffixParts = [];
  if (examples) suffixParts.push(`${examples}${refs.length > 4 ? ", ..." : ""}`);
  if (details.existingFiles?.length) suffixParts.push(details.existingFiles.slice(0, 2).join(", "));
  const suffix = suffixParts.length > 0 ? ` (${suffixParts.join("; ")})` : "";
  const title = details.title ? ` ${details.title}` : "";
  skipped.push({ cluster_id: clusterId, reason, ...details });
  console.error(`${message}: ${clusterId}${title}${suffix}`);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64)
    .replace(/-+$/g, "") || "cluster";
}
