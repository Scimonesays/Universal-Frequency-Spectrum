#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = p => JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const fail = [];
const pass = [];

const files = {
  manifest:"data/canonical/manifest.json",
  phenomena:"data/canonical/phenomena.json",
  interactions:"data/canonical/interactions.json",
  frontier:"data/canonical/frontier.json",
  entities:"data/canonical/entities.json",
  ranges:"data/canonical/ranges.json",
  sources:"data/canonical/sources.json",
  claims:"data/canonical/claims.json",
  gaps:"data/canonical/gaps.json",
  validations:"data/canonical/validations.json"
};

for (const [name,p] of Object.entries(files)) {
  if (!fs.existsSync(path.join(root,p))) fail.push(`missing canonical file: ${p}`);
  else pass.push(`exists: ${p}`);
}

if (fail.length) {
  console.error(fail.join("\n"));
  process.exit(1);
}

const manifest=read(files.manifest);
const phenomena=read(files.phenomena).records;
const interactions=read(files.interactions).records;
const frontier=read(files.frontier).records;
const entities=read(files.entities).records;
const ranges=read(files.ranges).records;
const sources=read(files.sources).records;
const claims=read(files.claims).records;
const gaps=read(files.gaps).records;
const validations=read(files.validations).records;

const unique=(records,label)=>{
  const seen=new Set();
  for(const r of records){
    if(!r.id) fail.push(`${label}: record without id`);
    else if(seen.has(r.id)) fail.push(`${label}: duplicate id ${r.id}`);
    else seen.add(r.id);
  }
  return seen;
};

const pids=unique(phenomena,"phenomena");
const iids=unique(interactions,"interactions");
const fids=unique(frontier,"frontier");
const eids=unique(entities,"entities");
const sids=unique(sources,"sources");
const cids=unique(claims,"claims");
unique(ranges,"ranges");
const gids=unique(gaps,"gaps");
unique(validations,"validations");

const allRecordIds=new Set([...pids,...iids,...fids]);
const validValidationTargets=new Set([...allRecordIds,...gids]);

for(const p of phenomena){
  const s=p.spectral||{};
  if(s.min_hz!==null && s.max_hz!==null && s.min_hz>s.max_hz) fail.push(`phenomena ${p.id}: min_hz > max_hz`);
  if(!Array.isArray(p.source_ids) || p.source_ids.length===0) fail.push(`phenomena ${p.id}: no source_ids`);
  for(const sid of p.source_ids||[]) if(!sids.has(sid)) fail.push(`phenomena ${p.id}: unknown source ${sid}`);
  if(!cids.has(p.claim_id)) fail.push(`phenomena ${p.id}: missing claim ${p.claim_id}`);
}
for(const x of interactions){
  if(!eids.has(x.source_entity_id)) fail.push(`interaction ${x.id}: unresolved source entity ${x.source_entity_id}`);
  if(!eids.has(x.target_entity_id)) fail.push(`interaction ${x.id}: unresolved target entity ${x.target_entity_id}`);
  if(!x.energy_accounting?.system_boundary) fail.push(`interaction ${x.id}: missing energy system boundary`);
  if(!x.energy_accounting?.fate) fail.push(`interaction ${x.id}: missing energy fate`);
  for(const sid of x.source_ids||[]) if(!sids.has(sid)) fail.push(`interaction ${x.id}: unknown source ${sid}`);
  if(!cids.has(x.claim_id)) fail.push(`interaction ${x.id}: missing claim ${x.claim_id}`);
}
for(const x of frontier){
  for(const sid of x.source_ids||[]) if(!sids.has(sid)) fail.push(`frontier ${x.id}: unknown source ${sid}`);
  if(!cids.has(x.claim_id)) fail.push(`frontier ${x.id}: missing claim ${x.claim_id}`);
}
for(const r of ranges){
  if(!pids.has(r.phenomenon_id)) fail.push(`range ${r.id}: unknown phenomenon ${r.phenomenon_id}`);
  if(r.min_hz!==null && r.max_hz!==null && r.min_hz>r.max_hz) fail.push(`range ${r.id}: min_hz > max_hz`);
}
for(const g of gaps){
  for(const sid of g.source_ids||[]) if(!sids.has(sid)) fail.push(`gap ${g.id}: unknown source ${sid}`);
  for(const rid of g.related_ids||[]) if(!allRecordIds.has(rid)) fail.push(`gap ${g.id}: unknown related record ${rid}`);
}
for(const v of validations){
  if(!validValidationTargets.has(v.target_record_id)) fail.push(`validation ${v.id}: unknown target record ${v.target_record_id}`);
  if(v.target_claim_id && !cids.has(v.target_claim_id)) fail.push(`validation ${v.id}: unknown target claim ${v.target_claim_id}`);
  if(v.reviewed_for_canonical_ingest !== true && v.reviewed_for_canonical_ingest !== false) fail.push(`validation ${v.id}: reviewed_for_canonical_ingest must be boolean`);
}

const expected={
  phenomena:phenomena.length, interactions:interactions.length, frontier:frontier.length,
  entities:entities.length, ranges:ranges.length, sources:sources.length, claims:claims.length, gaps:gaps.length,
  validations:validations.length
};
for(const [k,v] of Object.entries(expected)){
  if(manifest.counts?.[k]!==v) fail.push(`manifest count mismatch for ${k}: ${manifest.counts?.[k]} != ${v}`);
}

const claimRefs=[
  ...phenomena.map(x=>x.claim_id),
  ...interactions.map(x=>x.claim_id),
  ...frontier.map(x=>x.claim_id)
];
for(const id of claimRefs) if(!cids.has(id)) fail.push(`missing referenced claim ${id}`);

if(fail.length){
  console.error("Canonical validation FAILED");
  for(const x of fail) console.error(" - "+x);
  process.exit(1);
}
console.log("Canonical validation PASS");
console.log(JSON.stringify(expected,null,2));
