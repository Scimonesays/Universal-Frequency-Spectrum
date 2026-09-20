#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const fail = [];
const pass = [];

const files = {
  manifest: "data/canonical/manifest.json",
  phenomena: "data/canonical/phenomena.json",
  interactions: "data/canonical/interactions.json",
  frontier: "data/canonical/frontier.json",
  entities: "data/canonical/entities.json",
  ranges: "data/canonical/ranges.json",
  sources: "data/canonical/sources.json",
  claims: "data/canonical/claims.json",
  gaps: "data/canonical/gaps.json",
  validations: "data/canonical/validations.json",
  energy_roles: "data/canonical/energy_roles.json",
};

const read = p => JSON.parse(fs.readFileSync(path.join(root, p), "utf8"));
const isNonEmptyString = v => typeof v === "string" && v.trim().length > 0;
const isHttps = v => isNonEmptyString(v) && /^https:\/\/[^\s]+$/i.test(v);
const isFiniteNonnegative = v => typeof v === "number" && Number.isFinite(v) && v >= 0;

for (const p of Object.values(files)) {
  if (!fs.existsSync(path.join(root, p))) fail.push(`missing canonical file: ${p}`);
  else pass.push(`exists: ${p}`);
}
if (fail.length) {
  console.error("Canonical validation FAILED");
  for (const x of fail) console.error(" - " + x);
  process.exit(1);
}

const data = Object.fromEntries(Object.entries(files).map(([k, p]) => [k, read(p)]));
const manifest = data.manifest;

for (const [name, doc] of Object.entries(data)) {
  if (name !== "manifest") {
    if (doc.schema_version !== manifest.schema_version) {
      fail.push(`${name}: schema_version ${doc.schema_version} != manifest ${manifest.schema_version}`);
    }
    if (doc.dataset_type !== name) fail.push(`${name}: dataset_type must equal "${name}"`);
    if (!Array.isArray(doc.records)) fail.push(`${name}: records must be an array`);
  }
}
if (manifest.dataset_type !== "manifest") fail.push('manifest: dataset_type must equal "manifest"');

const phenomena = data.phenomena.records || [];
const interactions = data.interactions.records || [];
const frontier = data.frontier.records || [];
const entities = data.entities.records || [];
const ranges = data.ranges.records || [];
const sources = data.sources.records || [];
const claims = data.claims.records || [];
const gaps = data.gaps.records || [];
const validations = data.validations.records || [];
const energyRoles = data.energy_roles.records || [];
const energyRules = data.energy_roles.rules || [];

const unique = (records, label, key = "id") => {
  const seen = new Set();
  for (const r of records) {
    const value = r?.[key];
    if (!isNonEmptyString(value)) fail.push(`${label}: record without ${key}`);
    else if (seen.has(value)) fail.push(`${label}: duplicate ${key} ${value}`);
    else seen.add(value);
  }
  return seen;
};

const pids = unique(phenomena, "phenomena");
const iids = unique(interactions, "interactions");
const fids = unique(frontier, "frontier");
const eids = unique(entities, "entities");
const rids = unique(ranges, "ranges");
const sids = unique(sources, "sources");
const cids = unique(claims, "claims");
const gids = unique(gaps, "gaps");
const vids = unique(validations, "validations");
const roleIds = unique(energyRoles, "energy_roles", "code");

const allRecordIds = new Set([...pids, ...iids, ...fids]);
const validValidationTargets = new Set([...allRecordIds, ...gids]);
const evidenceClasses = new Set([
  "established", "observed", "model-dependent", "open", "speculative",
  "contested", "theoretical", "unverified", "not-established", "other",
]);
const gapTypes = new Set([
  "instrument_gap", "theory_gap", "catalog_gap", "constraint_gap",
  "true_forbidden_region", "visual_gap_only", "energy_accounting_gap",
  "mechanism_gap", "replication_gap", "operationalization_gap",
]);
const validationVerdicts = new Set([
  "READY_FOR_CONSTRAINT_DESIGN", "NEEDS_OPERATIONALIZATION", "HOLD_EVIDENCE",
  "INCONCLUSIVE", "CONSTRAINED", "REJECTED_BY_TEST", "SUPPORTIVE_RESULT",
]);
const validationPolicies = new Set(["strict", "normal", "sandbox"]);
const validationGateStatuses = new Set(["PASS", "FAIL", "NA", "WARNING"]);

const requireSources = (record, label) => {
  if (!Array.isArray(record.source_ids) || record.source_ids.length === 0) {
    fail.push(`${label} ${record.id}: no source_ids`);
    return;
  }
  for (const sid of record.source_ids) if (!sids.has(sid)) fail.push(`${label} ${record.id}: unknown source ${sid}`);
};

const checkEvidence = (record, label) => {
  if (!record.evidence || !evidenceClasses.has(record.evidence.class)) {
    fail.push(`${label} ${record.id}: invalid evidence class ${record.evidence?.class}`);
  }
  if (!isNonEmptyString(record.evidence?.label)) fail.push(`${label} ${record.id}: missing evidence label`);
};

const checkEnergyRoleList = (values, label) => {
  if (!Array.isArray(values)) return;
  for (const role of values) if (!roleIds.has(role)) fail.push(`${label}: uncontrolled energy role ${role}`);
};

for (const p of phenomena) {
  if (p.record_type !== "phenomenon") fail.push(`phenomena ${p.id}: record_type must be phenomenon`);
  if (!isNonEmptyString(p.name) || !isNonEmptyString(p.family)) fail.push(`phenomena ${p.id}: missing name/family`);
  requireSources(p, "phenomena");
  checkEvidence(p, "phenomena");
  if (!cids.has(p.claim_id)) fail.push(`phenomena ${p.id}: missing claim ${p.claim_id}`);
  const s = p.spectral || {};
  for (const key of ["min_hz", "max_hz", "characteristic_hz"]) {
    if (s[key] !== null && s[key] !== undefined && !isFiniteNonnegative(s[key])) fail.push(`phenomena ${p.id}: invalid ${key}`);
  }
  if (s.min_hz != null && s.max_hz != null && s.min_hz > s.max_hz) fail.push(`phenomena ${p.id}: min_hz > max_hz`);
  checkEnergyRoleList(p.energy_accounting?.roles, `phenomena ${p.id}`);
}

for (const x of interactions) {
  if (x.record_type !== "interaction") fail.push(`interaction ${x.id}: record_type must be interaction`);
  if (!eids.has(x.source_entity_id)) fail.push(`interaction ${x.id}: unresolved source entity ${x.source_entity_id}`);
  if (!eids.has(x.target_entity_id)) fail.push(`interaction ${x.id}: unresolved target entity ${x.target_entity_id}`);
  if (!isNonEmptyString(x.interaction_type)) fail.push(`interaction ${x.id}: missing interaction_type`);
  if (!isNonEmptyString(x.energy_accounting?.system_boundary)) fail.push(`interaction ${x.id}: missing energy system boundary`);
  if (!isNonEmptyString(x.energy_accounting?.fate)) fail.push(`interaction ${x.id}: missing energy fate`);
  requireSources(x, "interaction");
  checkEvidence(x, "interaction");
  checkEnergyRoleList(x.energy_accounting?.source_roles, `interaction ${x.id} source`);
  checkEnergyRoleList(x.energy_accounting?.target_roles, `interaction ${x.id} target`);
  if (!cids.has(x.claim_id)) fail.push(`interaction ${x.id}: missing claim ${x.claim_id}`);
}

for (const x of frontier) {
  if (x.record_type !== "frontier") fail.push(`frontier ${x.id}: record_type must be frontier`);
  if (!isNonEmptyString(x.name) || !isNonEmptyString(x.domain) || !isNonEmptyString(x.status)) fail.push(`frontier ${x.id}: missing required text`);
  requireSources(x, "frontier");
  checkEvidence(x, "frontier");
  if (!cids.has(x.claim_id)) fail.push(`frontier ${x.id}: missing claim ${x.claim_id}`);
}

for (const e of entities) {
  if (!isNonEmptyString(e.display_name) || !isNonEmptyString(e.family)) fail.push(`entity ${e.id}: missing display_name/family`);
  for (const pid of e.related_phenomenon_ids || []) if (!pids.has(pid)) fail.push(`entity ${e.id}: unknown related phenomenon ${pid}`);
}

for (const r of ranges) {
  if (!pids.has(r.phenomenon_id)) fail.push(`range ${r.id}: unknown phenomenon ${r.phenomenon_id}`);
  requireSources(r, "range");
  for (const key of ["min_hz", "max_hz", "characteristic_hz"]) {
    if (r[key] !== null && r[key] !== undefined && !isFiniteNonnegative(r[key])) fail.push(`range ${r.id}: invalid ${key}`);
  }
  if (r.min_hz != null && r.max_hz != null && r.min_hz > r.max_hz) fail.push(`range ${r.id}: min_hz > max_hz`);
}

for (const s of sources) {
  const expectedPrefix = `P${s.phase}-SRC-`;
  if (![2, 3, 4].includes(s.phase)) fail.push(`source ${s.id}: invalid phase ${s.phase}`);
  if (!s.id.startsWith(expectedPrefix)) fail.push(`source ${s.id}: phase/id mismatch`);
  if (!isNonEmptyString(s.title) || !isNonEmptyString(s.source_note_file)) fail.push(`source ${s.id}: missing title/source_note_file`);
  if (!Array.isArray(s.urls) || s.urls.length === 0) fail.push(`source ${s.id}: no URLs`);
  const local = new Set();
  for (const u of s.urls || []) {
    if (!isHttps(u)) fail.push(`source ${s.id}: URL must be HTTPS: ${u}`);
    if (local.has(u)) fail.push(`source ${s.id}: duplicate URL ${u}`);
    local.add(u);
  }
}

for (const c of claims) {
  if (!Number.isInteger(c.phase) || c.phase < 1 || c.phase > 4) fail.push(`claim ${c.id}: invalid phase`);
  if (!isNonEmptyString(c.claim) || !isNonEmptyString(c.status)) fail.push(`claim ${c.id}: missing claim/status`);
  for (const sid of c.source_ids || []) if (!sids.has(sid)) fail.push(`claim ${c.id}: unknown source ${sid}`);
  for (const u of c.source_urls || []) if (!isHttps(u)) fail.push(`claim ${c.id}: source URL must be HTTPS: ${u}`);
  if (c.record_id && !allRecordIds.has(c.record_id)) fail.push(`claim ${c.id}: unknown record_id ${c.record_id}`);
  if (c.phase === 1 && c.legacy_id !== "FND-016" && !(c.source_urls || []).length && !(c.source_ids || []).length) {
    fail.push(`claim ${c.id}: Phase 1 empirical/foundation claim lacks direct source`);
  }
}

for (const g of gaps) {
  if (!gapTypes.has(g.type)) fail.push(`gap ${g.id}: invalid type ${g.type}`);
  if (!isNonEmptyString(g.name) || !isNonEmptyString(g.status) || !isNonEmptyString(g.scope) || !isNonEmptyString(g.meaning)) {
    fail.push(`gap ${g.id}: missing required text`);
  }
  for (const sid of g.source_ids || []) if (!sids.has(sid)) fail.push(`gap ${g.id}: unknown source ${sid}`);
  for (const rid of g.related_ids || []) if (!allRecordIds.has(rid)) fail.push(`gap ${g.id}: unknown related record ${rid}`);
}

for (const v of validations) {
  if (!validValidationTargets.has(v.target_record_id)) fail.push(`validation ${v.id}: unknown target record ${v.target_record_id}`);
  if (v.target_claim_id && !cids.has(v.target_claim_id)) fail.push(`validation ${v.id}: unknown target claim ${v.target_claim_id}`);
  if (typeof v.reviewed_for_canonical_ingest !== "boolean") fail.push(`validation ${v.id}: reviewed_for_canonical_ingest must be boolean`);
  if (!isNonEmptyString(v.provider) || !isNonEmptyString(v.provider_repo) || !isNonEmptyString(v.provider_commit) || !isNonEmptyString(v.run_id)) {
    fail.push(`validation ${v.id}: incomplete provider/run provenance`);
  }
  if (!validationVerdicts.has(v.verdict)) fail.push(`validation ${v.id}: invalid verdict ${v.verdict}`);
  if (!validationPolicies.has(v.policy)) fail.push(`validation ${v.id}: invalid policy ${v.policy}`);
  if (typeof v.speculative !== "boolean") fail.push(`validation ${v.id}: speculative must be boolean`);
  if (!Array.isArray(v.gate_results)) fail.push(`validation ${v.id}: gate_results must be an array`);
  for (const gate of v.gate_results || []) {
    if (!isNonEmptyString(gate.id) || !isNonEmptyString(gate.label) || !isNonEmptyString(gate.detail)) {
      fail.push(`validation ${v.id}: incomplete gate result`);
    }
    if (!validationGateStatuses.has(gate.status)) fail.push(`validation ${v.id}: invalid gate status ${gate.status}`);
  }
  for (const sid of v.evidence_refs || []) if (!sids.has(sid)) fail.push(`validation ${v.id}: unknown evidence ref ${sid}`);
}

if (energyRules.length !== 1 || energyRules[0]?.code !== "NO_CREATE_FROM_NOTHING") {
  fail.push("energy_roles: expected exactly one NO_CREATE_FROM_NOTHING accounting rule");
}

const usedSources = new Set();
for (const group of [phenomena, interactions, frontier, ranges, claims, gaps]) {
  for (const r of group) for (const sid of r.source_ids || []) usedSources.add(sid);
}
for (const v of validations) for (const sid of v.evidence_refs || []) usedSources.add(sid);
for (const sid of sids) if (!usedSources.has(sid)) fail.push(`sources: orphan source group ${sid}`);

const referencedClaims = new Set([
  ...phenomena.map(x => x.claim_id),
  ...interactions.map(x => x.claim_id),
  ...frontier.map(x => x.claim_id),
]);
for (const c of claims) {
  if (c.phase >= 2 && !referencedClaims.has(c.id)) fail.push(`claims: orphan phase-${c.phase} claim ${c.id}`);
}

const counts = {
  phenomena: pids.size,
  interactions: iids.size,
  frontier: fids.size,
  entities: eids.size,
  ranges: rids.size,
  sources: sids.size,
  claims: cids.size,
  gaps: gids.size,
  validations: vids.size,
  energy_roles: roleIds.size,
  energy_rules: energyRules.length,
};
for (const [k, v] of Object.entries(counts)) {
  if (manifest.counts?.[k] !== v) fail.push(`manifest count mismatch for ${k}: ${manifest.counts?.[k]} != ${v}`);
}
for (const [key, filename] of Object.entries(manifest.files || {})) {
  const expected = path.basename(files[key] || "");
  if (!files[key]) fail.push(`manifest files: unknown dataset key ${key}`);
  else if (filename !== expected) fail.push(`manifest files: ${key} points to ${filename}, expected ${expected}`);
}

if (fail.length) {
  console.error("Canonical validation FAILED");
  for (const x of fail) console.error(" - " + x);
  process.exit(1);
}
console.log("Canonical validation PASS");
console.log(JSON.stringify(counts, null, 2));
