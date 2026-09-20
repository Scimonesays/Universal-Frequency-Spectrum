# Evidence Standard

The usefulness of this project depends more on epistemic discipline than on visual design.

This document defines what qualifies for inclusion and how claims must be labeled.

## 1. Claim classes

Every consequential scientific statement in the canonical dataset should have one of these statuses.

### ESTABLISHED

Use when the claim is supported by mature theory plus reproducible observation or measurement, or by a well-established empirical law within its domain.

Examples:

- electromagnetic waves are solutions of Maxwell's equations;
- electron diffraction demonstrates matter-wave behavior;
- gravitational waves have been directly observed;
- molecular rotational spectra occur at discrete transition frequencies.

### MODEL-DEPENDENT

Use when the claim follows from a scientifically legitimate model but depends on assumptions that are not uniquely established.

Examples:

- an ultralight bosonic dark-matter field would oscillate at a mass-related characteristic frequency;
- a particular beyond-Standard-Model particle would couple to a specified detector.

### OPEN

Use when the phenomenon or parameter is scientifically unresolved.

Examples:

- the microscopic identity of dark matter;
- an experimentally unconstrained portion of a candidate model's parameter space.

### SPECULATIVE

Use for proposed interpretations or unifying ideas that lack sufficient empirical support.

A speculative idea may still be mathematically interesting. It simply must not be rendered with the same visual authority as established physics.

## 2. Source hierarchy

Sources should be chosen in this order when practical.

### Tier A — Primary / standards / canonical measurements

Preferred for hard claims and numeric ranges.

Examples:

- peer-reviewed discovery or measurement papers;
- NIST / BIPM / CODATA standards and reference data;
- Particle Data Group;
- major experiment collaboration papers;
- evaluated scientific databases.

### Tier B — High-quality reviews

Preferred for field-wide definitions, accepted taxonomy, and synthesis.

Examples:

- Living Reviews in Relativity;
- Reviews of Modern Physics;
- Nature Reviews;
- Journal of Physical and Chemical Reference Data.

### Tier C — Authoritative scientific institutions

Useful for stable explanations and links to primary literature.

Examples:

- CERN;
- NASA;
- NIST educational pages;
- national laboratories;
- major observatories and collaborations.

### Tier D — Textbooks / educational references

Useful for pedagogy and basic definitions.

They should not be the sole support for disputed frontier claims.

### Tier E — Secondary web content

Blogs, unsourced diagrams, commercial pages, social posts, and general-interest summaries may help discover terminology but should **not** become canonical evidence.

## 3. Numeric-range rules

A frequency range must never be stored without context.

Every range should specify:

- lower value;
- upper value;
- unit;
- whether bounds are open or closed;
- whether the scale is conventional, theoretical, observed, or instrumental;
- whether the values are approximate;
- source;
- date/version of the source;
- notes on alternate conventions.

Example:

```yaml
name: "LISA nominal science band"
range_hz:
  min: 1.0e-4
  max: 1.0e-1
range_type: "instrument sensitivity / mission design"
approximate: true
family: "gravitational waves"
source: "mission reference"
```

This is fundamentally different from saying:

> "Gravitational waves exist only from 10^-4 to 10^-1 Hz."

## 4. Conventional boundaries are not natural walls

Many named spectrum regions use conventional boundaries.

Examples include:

- radio sub-bands;
- visible-light color boundaries;
- infrared subdivisions;
- ultrasound definitions;
- detector bands.

The atlas should render conventional boundaries differently from theoretically forbidden regions.

## 5. Do not confuse excitation with probe

A photon used to excite or measure a material mode is not automatically the same physical excitation as that mode.

Examples:

- infrared photons can excite molecular vibrational transitions;
- X-rays can scatter from phonons;
- microwaves can drive rotational transitions;
- lasers can read out mechanical resonators.

Dataset relationships should explicitly say **excites**, **absorbed by**, **scatters from**, **converts to**, or **measures**.

## 6. Do not confuse biological sensitivity with physical existence

Human hearing and human vision are detector ranges of one biological species.

They should be overlays, not definitions of the underlying physical families.

## 7. Do not use "proves" loosely

Preferred evidence wording:

- **measured**
- **observed**
- **detected**
- **consistent with**
- **supports**
- **constrains**
- **excludes within stated assumptions**
- **predicted by**
- **model proposes**

Reserve "proves" for mathematical proof or extremely narrow contexts.

## 8. Negative-result discipline

A null search does not prove that an entire phenomenon does not exist.

For frontier searches, record:

- candidate/model;
- parameter assumptions;
- coupling;
- mass/frequency interval;
- confidence level;
- excluded region;
- remaining region.

## 9. Cross-source verification

High-impact or surprising claims should ideally have:

- one primary source;
- one independent review or authoritative synthesis.

For controversial or frontier claims, opposing interpretations should be represented where scientifically relevant.

## 10. Quick-source sections

Every major research document should end with a **Quick sources** section.

The canonical dataset should also contain structured source IDs so the final visual can open directly to the relevant paper or reference.

## 11. Claim-ledger rule

Before a statement becomes a visual label, it should exist in a claim ledger or be directly derivable from structured dataset fields.

That gives the project an audit path:

```
visual element
  → dataset record
    → claim ID
      → source
        → paper / standard / measurement
```

## Quick sources

- Particle Data Group, Review of Particle Physics: https://pdg.lbl.gov/
- NIST Physical Measurement Laboratory: https://www.nist.gov/pml
- CODATA / NIST fundamental constants: https://physics.nist.gov/cuu/Constants/
- Living Reviews in Relativity: https://link.springer.com/journal/41114
- NIST Molecular Spectroscopic Data: https://www.nist.gov/pml/molecular-spectroscopic-data
