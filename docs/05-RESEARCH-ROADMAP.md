# Research Roadmap

The project is currently planned as **seven phases**.

The phases are ordered so that visual design cannot outrun the science.

---

## Phase 1 — Scientific foundation and repository architecture

**Status: COMPLETE**

### Goal

Define what the project is, what it is not, and how truth is separated from hypothesis.

### Deliverables

- project charter;
- physics foundations;
- working taxonomy;
- evidence/source standard;
- auditable claims ledger;
- glossary;
- curated source library;
- data-area contract;
- full roadmap.

### Exit condition

A contributor should be able to answer:

> "What counts as an entry, what does frequency mean here, and how do we know whether a claim is established?"

without inventing policy.

---

## Phase 2 — Known-spectrum catalog

**Status: COMPLETE**

### Goal

Populate the map with established physical phenomena and defensible frequency information.

### Major workstreams

- mechanical resonances;
- geophysical and seismic oscillations;
- atmospheric/ocean waves where frequency is a useful coordinate;
- acoustics from infrasound through ultrasound/hypersound;
- elastic waves and phonons;
- magnons and other condensed-matter collective modes;
- molecular rotation and vibration;
- atomic/electronic transitions;
- spin/hyperfine resonance;
- nuclear transitions and collective modes;
- plasma oscillations and waves;
- electromagnetic spectrum;
- matter-wave phenomena;
- gravitational-wave spectrum.

### Exit condition

The project has a source-backed table of major established families, with ranges described as **contextual ranges**, not false universal limits.

**Completed 2026-09-20.** See [Known-Spectrum Catalog](07-KNOWN-SPECTRUM-CATALOG.md) and [Phase 2 Completion Record](PHASE-2-COMPLETE.md).

---

## Phase 3 — Coupling, conversion, resonance, and bridges

**Status: NOT STARTED**

### Goal

Map how families interact.

### Example relationships

- mechanical motion → acoustic wave;
- acoustic pressure → electrical signal in a microphone;
- electrical signal → acoustic wave in a speaker;
- charge/current oscillation → electromagnetic radiation;
- photon absorption → molecular vibrational transition;
- photon scattering ↔ phonon creation/annihilation;
- thermal gradients ↔ phonon/electron transport;
- optomechanical coupling;
- spin-photon coupling;
- gravitational-wave interaction with matter and detectors.

### Exit condition

Entries no longer sit as isolated spectrum bars; the repository can represent directed, sourced relationships between them.

---

## Phase 4 — Frontier physics and detection space

**Status: NOT STARTED**

### Goal

Add unresolved and model-dependent territory **without visually promoting it to established fact**.

### Topics

- dark matter candidate classes;
- axions / ALPs;
- dark photons;
- ultralight scalar fields;
- topological defects;
- stochastic backgrounds;
- unexplored gravitational-wave frequency bands;
- quantum-gravity proposals where a frequency-domain statement is meaningful;
- dark energy only where a concrete spectral prediction exists.

### Required distinction

For every frontier entry:

```
theory/model
→ predicted observable
→ frequency/mass/coupling relation
→ experiment
→ measured/excluded/unconstrained region
```

### Exit condition

Unknowns can be plotted without the viewer confusing "hypothesized" with "detected."

---

## Phase 5 — Gap analysis and canonical dataset

**Status: NOT STARTED**

### Goal

Turn the research into a machine-readable source of truth and ask disciplined questions about gaps.

### Outputs

- canonical JSON/CSV/YAML dataset;
- schema validation;
- unique claim IDs;
- normalized SI values;
- alternate conventional ranges;
- source metadata;
- confidence/evidence status;
- detector coverage;
- gap annotations.

### Gap categories

- **instrument gap** — poor measurement sensitivity;
- **theory gap** — incomplete or incompatible models;
- **catalog gap** — project has not researched the area yet;
- **constraint gap** — model allows a region that is not well tested;
- **true forbidden region** — theory rules something out under stated assumptions;
- **visual gap only** — no significance; simply no plotted item.

### Exit condition

A blank pixel can no longer masquerade as a scientific discovery.

---

## Phase 6 — Visual and interactive atlas

**Status: NOT STARTED**

### Goal

Build the visual representation from the canonical dataset.

### Candidate features

- logarithmic frequency axis;
- rows by physical family;
- zoom from cosmological timescales to extreme high-frequency phenomena;
- overlays for wavelength and photon energy where valid;
- filters by evidence status;
- detector coverage;
- "what is oscillating?" inspector;
- source links on every entry;
- coupling arrows;
- known / model-dependent / open / speculative visual language;
- accessibility-first labeling;
- static publication-quality poster/export.

### Exit condition

The visual is useful to both curious non-specialists and technically literate readers without becoming scientifically misleading.

---

## Phase 7 — Scientific review, corrections, and public release

**Status: NOT STARTED**

### Goal

Treat the atlas as research infrastructure rather than a finished poster.

### Work

- solicit review from domain experts;
- open issue templates for corrections;
- add source/version provenance;
- document disagreements in conventions;
- create release snapshots;
- publish methodology;
- add reproducible build/export process;
- consider DOI/archive release;
- explicitly document limitations.

### Exit condition

The project is citable, reviewable, correctable, and reproducible.

---

# Overall definition of done

The project is mature when a viewer can move across frequency space and distinguish:

1. what is physically oscillating;
2. what merely shares the same number in hertz;
3. how different modes couple;
4. what has been observed;
5. what is predicted under a model;
6. what has been ruled out under stated assumptions;
7. what is genuinely unknown;
8. where measurement itself is missing.

The most important outcome is not finding a mysterious empty band.

It is creating a map rigorous enough that **if an important gap exists, we can tell what kind of gap it actually is.**
