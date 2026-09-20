# UFS Schemas

The canonical data contract is intentionally split into two schemas:

- `ufs-canonical.schema.json` — manifest plus the canonical phenomena, interactions, frontier, entities, ranges, sources, claims, gaps, and energy-role datasets.
- `ufs-validation-result.schema.json` — reviewed external validation packages, such as CURV results.

Every canonical JSON document is self-identifying with:

```json
{
  "schema_version": "1.0.0",
  "dataset_type": "..."
}
```

## CI authority

The repository's zero-dependency validator:

`scripts/validate-canonical-data.mjs`

enforces the cross-file invariants JSON Schema cannot express by itself, including:

- source and claim references;
- interaction endpoint resolution;
- entity-to-phenomenon links;
- gap related-record links;
- manifest counts/files;
- controlled energy-role membership;
- orphan source/claim detection;
- external-validation targets.

The JSON Schemas define record shape; the validator defines repository-level referential integrity.

Phase 6 consumers should reject unsupported `schema_version` values rather than silently guessing.
