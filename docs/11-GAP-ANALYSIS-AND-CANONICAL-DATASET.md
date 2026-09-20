# Phase 5 — Gap Analysis & Canonical Dataset

**Status:** COMPLETE  
**Completed:** 2026-09-20  
**Canonical schema version:** 1.0.0

## Goal

Turn the Phase 1–4 research into a machine-readable source of truth and make every important "gap" state what kind of gap it actually is.

Phase 5 does **not** treat blank frequency space as evidence of missing physics.

Instead, it asks:

> Gap in what — theory, instrumentation, constraints, mechanism, replication, operational definition, catalog coverage, energy accounting, or only the visualization?

---

# 1. Canonical source of truth

The canonical data now lives under:

- `data/canonical/manifest.json`
- `data/canonical/phenomena.json`
- `data/canonical/interactions.json`
- `data/canonical/frontier.json`
- `data/canonical/entities.json`
- `data/canonical/ranges.json`
- `data/canonical/sources.json`
- `data/canonical/claims.json`
- `data/canonical/gaps.json`

The earlier CSV files remain as **phase research snapshots / provenance inputs**.

They are no longer the preferred source for the final visual.

---

# 2. Canonical counts

At Phase 5 completion the canonical package contains:

| Record type | Count |
|---|---:|
| Established-spectrum phenomena | 35 |
| Interaction edges | 25 |
| Frontier/question nodes | 31 |
| Normalized interaction entities | 33 |
| Numeric frequency-range records | 27 |
| Structured Phase 2–4 source groups | 75 |
| Canonical claim records | 107 |
| Classified gaps | 16 |
| Controlled energy-role definitions | 18 |

A range count smaller than the phenomenon count is intentional.

Some legitimate phenomena have:

- no universal numeric range;
- parameter-dependent frequency;
- state-dependent frequency;
- transition-specific frequencies;
- or no honest simple-Hz representation.

---

# 3. Stable identities

Phase 5 preserves the stable record IDs already established by the research phases.

Examples:

```
MECH-STRUCT
EM-VISIBLE
GW-LIGO
P3-E005
P4-F002
P4-H013
```

Every canonical Phase 2–4 record also receives a stable claim ID.

Examples:

```
CLAIM-P2-EM-VISIBLE
CLAIM-P3-E005
CLAIM-P4-H013
```

Phase 1's original `FND-001`–`FND-016` claims remain preserved as:

```
CLAIM-FND-001
...
CLAIM-FND-016
```

This creates an auditable chain:

```
visual
→ canonical record
→ claim ID
→ source ID / source URL
→ paper, database, collaboration, standard or authoritative reference
```

---

# 4. Interaction endpoint normalization

Phase 3 intentionally used physical concepts as edge endpoints.

Examples included:

- `ACOUSTIC-FIELD`;
- `EM-PHOTON`;
- `PHONON`;
- `MAGNON`;
- `GW-STRAIN`;
- `INTERFEROMETER-OPTICAL-PATH`.

Those concepts did not all correspond one-to-one with a Phase 2 frequency row.

Phase 5 therefore adds `entities.json`.

An entity can:

- point directly to one Phase 2 phenomenon;
- point to several representative Phase 2 rows;
- or remain a valid conceptual interaction node with no false fixed frequency.

This resolves every Phase 3 edge without forcing concepts such as "photon" or "thermal matter" into one arbitrary frequency interval.

---

# 5. Range model

A canonical frequency range stores:

- minimum frequency, when justified;
- maximum frequency, when justified;
- characteristic frequency, when justified;
- range kind;
- source IDs;
- owning phenomenon ID.

The range kind remains critical.

Examples include:

- conventional band;
- characteristic transition;
- detector band;
- observed/representative interval;
- material-specific dispersion;
- biological sensitivity.

A range is never allowed to silently change meaning merely because all values use hertz.

---

# 6. Energy accounting

Phase 5 treats energy behavior as a first-class data concern.

Every interaction edge now has:

- a system boundary;
- source energy role;
- target energy role;
- energy fate.

The controlled vocabulary includes:

- STORE;
- CARRY;
- RECEIVE;
- SUPPLY;
- TRANSFER;
- CONVERT;
- ABSORB;
- EMIT;
- DO WORK;
- DISSIPATE;
- THERMALIZE;
- DISPERSE;
- MAINTAIN STEADY STATE;
- EXCHANGE;
- MEDIATE;
- READ OUT;
- UNKNOWN.

The project does not use "creates energy from nothing" as an ordinary role.

---

# 7. Gap taxonomy

Phase 5 expands the original gap vocabulary because Phase 4 introduced questions that are not well described by instrument/theory alone.

## Instrument gap

Poor or missing measurement sensitivity.

Example:

- the approximate 0.1–1 Hz gravitational-wave coverage gap.

## Theory gap

The governing theory is incomplete or competing frameworks are unresolved.

Examples:

- quantum gravity;
- black-hole singularity resolution.

## Constraint gap

A model exists but substantial allowed parameter space or competing fits remain.

Examples:

- dark-matter candidate mass/coupling space;
- dynamical-dark-energy model comparison;
- wormhole model/observation constraints.

## Mechanism gap

A phenomenon/question exists but its causal physical mechanism is incomplete.

Examples:

- consciousness;
- terminal/paradoxical lucidity;
- near-death experiences.

## Replication gap

A claimed effect has inconsistent or insufficient independent reproducibility.

Example:

- anomalous cognition / telepathy / remote viewing / precognition literature.

## Operationalization gap

A concept lacks measurable state variables, carrier, coupling or falsification criteria.

Examples:

- physically interacting soul;
- postmortem-survival carrier.

## Energy-accounting gap

An interaction or information-transfer claim lacks an identified energy source, sink, carrier or measured balance.

Example:

- proposed anomalous information transfer.

## Catalog gap

The project has not yet cataloged every material, species, transition, mode or object.

This is expected.

## True forbidden region

A theory explicitly rules out a region under stated assumptions.

Phase 5 does **not** currently claim a grand universal forbidden frequency interval.

## Visual gap only

An empty-looking area of the chart with no independent scientific significance.

---

# 8. Canonical gap registry

The first canonical gap registry contains 16 records.

Notable examples include:

### GAP-INSTR-001 — decihertz gravitational waves

An observing-technology gap.

It is **not** a claim that gravitational waves cannot exist there.

### GAP-CONSTRAINT-001 — dark-matter parameter space

Different candidate models remain allowed or constrained over different mass/coupling regions.

It is **not** one blank "dark-matter band."

### GAP-THEORY-002 — black-hole singularity resolution

The classical GR prediction enters a regime where the physical quantum-gravity completion is unknown.

This is a theory gap, not a missing measured frequency.

### GAP-MECH-001 — consciousness mechanism

Consciousness is real; the sufficient physical explanatory mechanism remains unsettled.

### GAP-REPL-001 — anomalous cognition

The central deficit is reproducibility and physical-carrier identification, not an empty frequency bin.

### GAP-ENERGY-001 — anomalous-information energy accounting

No new physical energy carrier is established.

This prevents a claimed information effect from being prematurely labeled "unknown energy."

### GAP-VISUAL-001 — blank frequency interval

Explicitly records the project's rule:

> blank chart space has no scientific meaning by itself.

---

# 9. What is *not* a gap

The following must not be labeled as discoveries:

- lack of a Phase 2 row for a particular material;
- a blank logarithmic decade;
- no human sensory sensitivity in a region;
- a detector losing sensitivity;
- two known phenomena not currently connected by a Phase 3 edge;
- a frontier claim lacking a frequency;
- a philosophical concept lacking physical variables.

Each can be important, but they are different kinds of absence.

---

# 10. Validation

Phase 5 adds:

- `schema/ufs-canonical.schema.json`
- `scripts/validate-canonical-data.mjs`
- `.github/workflows/validate-canonical-data.yml`

The validator checks:

- required canonical files;
- duplicate IDs;
- manifest counts;
- source-ID references;
- claim-ID references;
- interaction endpoint resolution;
- range ownership;
- numeric min/max ordering;
- gap related-record references;
- mandatory interaction energy boundaries/fates.

The validator uses only Node.js built-ins.

No dependency installation is required.

---

# 11. Provenance correction discovered during Phase 5

The Phase 2 `MECH-STRUCT` record had no source ID.

Phase 5 repaired it by adding:

`P2-SRC-021 — mechanical / structural resonance`

using NIST material on system-dependent mechanical resonance.

That correction is exactly why canonicalization and audit phases matter.

---

# 12. Phase 5 conclusion

The project now has four mutually compatible structures:

```
PHENOMENA
  what exists / what oscillates

INTERACTIONS
  how modes influence, convert or read out one another

FRONTIER / QUESTIONS
  what is predicted, contested, unresolved or not yet operationalized

GAPS
  exactly what kind of knowledge or measurement is missing
```

all crossed by:

```
FREQUENCY
EVIDENCE
SOURCES
ENERGY ACCOUNTING
```

The project is therefore ready for a visual layer without requiring the visual designer to invent scientific meaning.

## Quick sources

- NIST resonance research: https://www.nist.gov/news-events/news/2021/09/new-harmony-nist-researchers-develop-universal-method-calculating
- DESI DR2 publications: https://data.desi.lbl.gov/doc/papers/dr2/
- LIGO black-hole spectroscopy / GW250114: https://ligo.org/science-summaries/GW250114_TGR/
- Event Horizon Telescope Sgr A* metric test: https://eventhorizontelescope.org/publications/first-sagittarius-event-horizon-telescope-results-vi-testing-black-hole-metric
- NIST / first-law energy reference: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication1018-5.pdf
