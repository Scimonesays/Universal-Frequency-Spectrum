# Phase 6 Web Atlas

This directory contains the **Universal Vibration Table / Universal Frequency Spectrum** interactive atlas.

It is deliberately a thin visualization layer over `data/canonical/`.

## Scientific authority

Do not hard-code scientific frequencies, evidence statuses or source claims into the web application.

The authority order remains:

1. `data/canonical/`;
2. research/source documents;
3. the web visualization.

If the canonical data changes, the application should reflect that change without editing a second scientific table.

## Local build

Requires only Node.js 22+ for the build script.

```bash
node scripts/build-site.mjs
python -m http.server 8000 -d _site
```

Then open:

`http://localhost:8000`

The build copies the web assets and the exact canonical JSON files referenced by the manifest into `_site/`.

## Views

- **Spectrum** — logarithmic Hz axis, physical-family separation, open/one-sided bands, characteristic lines, detector windows, filters, energy roles and EM wavelength/photon-energy overlays.
- **Connections** — interaction graph with mediators, directionality, conservation/energy accounting and source trail.
- **Frontier** — dark-sector, quantum-gravity, consciousness, anomalous-cognition and other question nodes without invented frequency bars.
- **Gaps** — typed gaps: instrumentation, theory, constraint, mechanism, replication, operationalization, energy accounting, catalog and visual-only.
- **Method / Data** — canonical counts, files, scientific reading rules and CURV validation status.

## Export

Use **Print / Save PDF** from the Spectrum view. Print CSS removes controls/inspectors and formats the spectrum as a landscape atlas sheet.

## Accessibility

The SVG spectrum and interaction graph use keyboard-selectable elements and ARIA labels. The Spectrum view also includes a semantic table so the data is usable without relying on the visual chart.

## Validation

CI runs:

```bash
node --check web/app.js
node scripts/build-site.mjs
node scripts/test-web-app.mjs
```

The web audit also verifies that selected scientific record IDs are not hard-coded in the application.
