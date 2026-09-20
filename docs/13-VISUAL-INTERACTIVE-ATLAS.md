# Phase 6 — Visual & Interactive Atlas

**Status:** COMPLETE  
**Completed:** 2026-09-20  
**Application:** `web/`  
**Build output:** `_site/`  
**Canonical schema consumed:** 1.0.0

## Goal

Build the Universal Vibration Table / Universal Frequency Spectrum as a real interactive web application without creating a second scientific database.

Phase 6 therefore treats:

`data/canonical/`

as the only machine-readable scientific source of truth.

The application contains no hard-coded Phase 2/3/4 record IDs or scientific frequency values.

---

# 1. Application views

## Spectrum

The main view renders established known-spectrum records on a logarithmic hertz axis.

It supports:

- logarithmic frequency positioning;
- finite bands;
- characteristic-frequency lines;
- one-sided/open bands;
- detector/mission windows;
- biological overlays;
- text search;
- physical-family filtering;
- energy-role filtering;
- viewport controls from low to extreme high frequency;
- a persistent inspector;
- an accessible semantic table.

Records that do not have a defensible simple-Hz coordinate remain present in the table and inspector instead of being assigned a fabricated frequency.

## Connections

The interaction view renders the Phase 3 graph.

Each edge can expose:

- source and target entities;
- interaction type;
- directionality;
- mediator;
- frequency/resonance condition;
- energy-transfer status;
- source/target energy roles;
- energy fate;
- system boundary;
- caveat;
- canonical claim;
- source links.

The graph does not imply that connected modes are the same physical phenomenon.

## Frontier

The frontier view shows Phase 4 physical-frontier and human-experience/question nodes without putting them onto the established spectrum axis.

Examples include:

- dark-sector candidates;
- dark energy;
- quantum gravity;
- black-hole singularity questions;
- wormholes;
- memory/consciousness hypotheses;
- anomalous cognition;
- unknown/unobserved proposed carriers.

The inspector preserves:

- canonical status;
- evidence class;
- proposed physical candidate/question;
- frequency status;
- predicted/observed signal;
- required bridge;
- energy-accounting status;
- project caution;
- sources;
- reviewed external validation results.

## Gaps

The gap view keeps absence typed.

It renders:

- instrument gaps;
- theory gaps;
- constraint gaps;
- mechanism gaps;
- replication gaps;
- operationalization gaps;
- energy-accounting gaps;
- catalog gaps;
- visual-only gaps.

A blank interval is never automatically presented as evidence of undiscovered physics.

## Method / Data

The method view explains the reading rules and displays the canonical file/count contract.

It also shows reviewed CURV validation status without allowing a CURV readiness result to silently change UFS evidence status.

---

# 2. Scientific visualization rules

The Phase 6 application enforces these visual semantics:

1. **Frequency is not identity.**
2. **Known-spectrum rows remain separated by physical family.**
3. **Characteristic lines are visually distinct from bands.**
4. **Open-ended conventional bands are clipped to the viewport and visibly marked as open.**
5. **Detector windows are identified as detector coverage, not existence limits.**
6. **Biological sensitivity is displayed as an overlay, not a physics boundary.**
7. **Frontier/question nodes without established frequencies are not plotted as frequency bars.**
8. **EM wavelength and single-photon energy are calculated only for electromagnetic entries.**
9. **Energy roles come from the canonical 17-role registry.**
10. **Every selected scientific entry resolves to canonical claims and source groups.**

---

# 3. EM overlays

For electromagnetic records only, the inspector can derive:

```
lambda = c / f
E_photon = h f
```

The UI labels which representative frequency was used:

- characteristic frequency;
- geometric midpoint;
- lower boundary;
- upper boundary.

These overlays are not applied to arbitrary classical waves.

---

# 4. Accessibility

Phase 6 includes:

- semantic navigation;
- skip link;
- keyboard-selectable SVG entries;
- keyboard-selectable interaction edges;
- ARIA labels;
- visible focus states;
- non-color text labels;
- an accessible spectrum table;
- responsive layouts;
- print-specific styling.

The visual chart is therefore not the only route to the scientific content.

---

# 5. Publication/export

The Spectrum view includes:

**Print / Save PDF**

Print CSS:

- removes controls/navigation;
- removes the interactive inspector;
- retains the spectrum chart;
- uses a light publication-oriented layout;
- requests landscape page orientation.

This provides a reproducible static/poster export without maintaining a second poster dataset.

---

# 6. Build architecture

The application intentionally has **zero runtime framework dependencies**.

Files:

- `web/index.html`
- `web/styles.css`
- `web/app.js`

Build:

`scripts/build-site.mjs`

The builder copies:

- web assets;
- exact canonical JSON files listed by the manifest;

into:

`_site/`

The web app first looks for built data at `./data/` and falls back to the repository canonical path during local repository development.

---

# 7. Validation

Phase 6 adds:

- `scripts/test-web-app.mjs`
- `.github/workflows/validate-web-atlas.yml`

The pipeline runs:

```
node scripts/validate-canonical-data.mjs
node --check web/app.js
node scripts/build-site.mjs
node scripts/test-web-app.mjs
```

The web audit verifies:

- required app files;
- all five application views;
- chart/graph/export controls;
- canonical schema compatibility;
- canonical build-file completeness;
- byte-for-byte canonical JSON copying;
- manifest counts;
- no numeric frontier bars;
- no selected scientific record IDs hard-coded into application logic.

Latest refined Phase 6 CI:

**PASS**

Run:

https://github.com/Scimonesays/Universal-Frequency-Spectrum/actions/runs/35537259429

Validated inputs:

- 35 phenomena;
- 27 numeric range records;
- 25 interactions;
- 31 frontier/question nodes;
- 16 typed gaps;
- 11 canonical JSON build files.

---

# 8. Hosting boundary

The application is ready to be hosted as a static site.

Phase 6 does **not** automatically enable GitHub Pages in repository settings.

GitHub Pages enablement is an account/repository administration choice, not a scientific-data or application requirement.

Once Pages is enabled for GitHub Actions, the existing zero-dependency build can be deployed without changing the atlas model.

Public deployment/release belongs naturally with Phase 7.

---

# 9. Phase 6 conclusion

The Universal Frequency Spectrum is no longer only a research corpus.

It now has a reproducible visual layer that can answer:

- where a phenomenon sits in frequency space;
- what physically oscillates;
- whether a plotted region is a band, line, detector window or overlay;
- what energy roles are involved;
- what interactions connect physical modes;
- what evidence supports the record;
- what source documents support it;
- what frontier questions remain unresolved;
- what kind of gap an apparent absence actually represents.

Most importantly:

> **The visualization consumes scientific meaning; it does not invent it.**

## Next phase

**Phase 7 — scientific review, correction workflow, public release and archival/release provenance.**
