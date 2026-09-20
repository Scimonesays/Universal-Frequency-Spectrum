# Data Area

This directory is reserved for the machine-readable source of truth that will be built beginning in later phases.

Phase 1 intentionally did **not** invent a large frequency table before the evidence model was stable. Phase 2 added a provisional known-spectrum CSV, and Phase 3 added a provisional coupling-edge CSV. These are research artifacts, not yet the Phase 5 canonical dataset.

## Planned record shape

A future record should contain fields equivalent to:

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
- Every frontier record must name the underlying model.
- Every record that appears in the final atlas must be traceable to sources.

## Current provisional research datasets

- `phase2-known-spectrum.csv` — Phase 2 node/frequency catalog.
- `phase3-couplings.csv` — Phase 3 directed interaction graph.
- `phase4-frontier.csv` — Phase 4 frontier candidates, unresolved phenomena, contested evidence, historical claims, and question nodes.

The Phase 3 edge file demonstrates that relationships need structured interaction metadata. Phase 4 demonstrates that **not every research object should be forced into a physical frequency record**: question nodes require status, operationalization requirements, predicted observables, and explicit caveats.

## Planned Phase 5 outputs

Likely artifacts:

- `phenomena.json`
- `ranges.json`
- `sources.json`
- `claims.json`
- `couplings.json`
- generated CSV exports
- schema validation files

The exact format will be decided after Phase 2 and Phase 3 reveal the real shape of the research.
