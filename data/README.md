# Data Area

This directory contains the machine-readable research data. **Beginning with Phase 5, `data/canonical/` is the preferred source of truth.**

Phase 1 intentionally did **not** invent a large frequency table before the evidence model was stable. Phase 2–4 then added provisional CSV research artifacts. **Phase 5 has since canonicalized that work under `data/canonical/`; the CSVs remain provenance/research snapshots, not the current source of truth.**

## Canonical record concepts

The Phase 5 canonical record model contains fields equivalent to:

```yaml
id: UFS-...
name: ...
family: ...
subfamily: ...
what_oscillates: ...
physical_variable: ...
medium_or_substrate: ...
spectral_meaning: ...
frequency_hz:
  min: ...
  max: ...
  characteristic: ...
  approximate: ...
range_context: ...
wavelength_m: ...
dispersion_relation: ...
energy_relation: ...
system_boundary: ...
energy_roles: []
energy_input_forms: []
energy_output_forms: []
stored_energy_forms: []
energy_balance:
  state: gains | loses | approximately_constant | exchanges | unknown | not_applicable
  interval_or_condition: ...
energy_transfer_observed: true | false | unknown
power_relevant: true | false
efficiency: ...
loss_channels: []
energy_sources: []
energy_sinks: []
energy_accounting_notes: ...
scale: ...
source_mechanism: ...
detection_method: ...
evidence_status: established | model-dependent | open | speculative
claim_ids: []
source_ids: []
couplings: []
notes: ...
```

## Rules

- Store normalized SI values.
- Preserve source-native units in provenance where useful.
- Do not invent numerical endpoints for qualitative phenomena.
- Do not store human hearing/vision boundaries as if they define acoustic/EM existence.
- Do not store detector sensitivity windows as universal phenomenon boundaries.
- Do not apply `E = hf` indiscriminately to classical total wave energy.
- Any claim that something gains, loses, uses, supplies, produces, disperses, or dissipates energy must define the system boundary and identify the input/output or state change.
- Do not use `create_energy_from_nothing` as a normal energy role.
- Keep energy and power as separate quantities.
- Keep dissipation and dispersion as separate processes.
- Every frontier record must name the underlying model.
- Every record that appears in the final atlas must be traceable to sources.

## Current provisional research datasets

- `phase2-known-spectrum.csv` — Phase 2 node/frequency catalog.
- `phase3-couplings.csv` — Phase 3 directed interaction graph.
- `phase4-frontier.csv` — Phase 4 frontier candidates, unresolved phenomena, contested evidence, historical claims, and question nodes.
- `energy-role-taxonomy.csv` — Legacy/research-format energy vocabulary: 17 roles plus the separate `NO_CREATE_FROM_NOTHING` accounting rule.

The Phase 3 edge file demonstrates that relationships need structured interaction metadata. Phase 4 demonstrates that **not every research object should be forced into a physical frequency record**: question nodes require status, operationalization requirements, predicted observables, and explicit caveats.

## Phase 5 canonical outputs

Current artifacts:

- `canonical/manifest.json`
- `canonical/phenomena.json`
- `canonical/interactions.json`
- `canonical/frontier.json`
- `canonical/entities.json`
- `canonical/ranges.json`
- `canonical/sources.json`
- `canonical/claims.json`
- `canonical/gaps.json`
- `canonical/energy_roles.json` — authoritative controlled energy roles and accounting rule
- `canonical/validations.json` — reviewed external validation results (for example CURV), with no automatic evidence-status promotion
- `../schema/ufs-canonical.schema.json`
- `../scripts/validate-canonical-data.mjs`

The legacy Phase 2–4 CSVs remain for provenance and research history; new visualization work should prefer canonical JSON.
