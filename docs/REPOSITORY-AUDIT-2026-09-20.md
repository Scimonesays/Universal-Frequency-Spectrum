# Repository Audit — 2026-09-20

**Repository:** Universal Frequency Spectrum  
**Branch audited:** `main`  
**Audit scope:** scientific data integrity, provenance, graph resolution, phase/status consistency, internal links, canonical schema, energy accounting, and automated validation.

## Final verdict

**PASS**

No unresolved canonical cross-reference failures remain.

The audit found several correctable issues during the process. All were repaired before this report was written.

---

# 1. Issues found and fixed

## A. Missing provenance on structural/mechanical resonance

**Found:** `MECH-STRUCT` was marked established in the Phase 2 CSV but had an empty `source_ids` field.

**Fix:** Added `P2-SRC-021` using NIST mechanical-resonance references and attached it to the record.

**Status:** FIXED

---

## B. Canonical source-registry parser bug

**Found:** The first Phase 5 generation of `data/canonical/sources.json` was empty because the source-heading regex over-escaped `\d`.

**Fix:** Corrected the parser logic, regenerated the registry, and corrected the manifest count.

**Result:** **75** structured Phase 2–4 source groups.

**Status:** FIXED

---

## C. Unresolved Phase 3 graph endpoints

**Found:** Phase 3 edges intentionally used conceptual endpoints such as `EM-PHOTON`, `PHONON`, `GW-STRAIN`, and `ACOUSTIC-FIELD`, but most did not correspond directly to Phase 2 record IDs.

**Risk:** A future graph renderer could create arrows to nonexistent nodes or force generic physical concepts into arbitrary frequency bands.

**Fix:** Added `data/canonical/entities.json` with **33** normalized interaction entities and attached `source_entity_id` / `target_entity_id` to all canonical interactions.

**Status:** FIXED

---

## D. Stale future-tense phase language

**Found:** Historical files still said things such as:

- "Phase 2 should..."
- "Phase 3 will..."
- "Phase 4 will..."
- "Phase 5 will..."

after those phases had already been completed.

**Fix:** Reworded the taxonomy and Phase 1–4 completion records to distinguish historical handoff from current repository status.

**Status:** FIXED

---

## E. Gap taxonomy mismatch

**Found:** The roadmap's Phase 5 gap list did not yet include the gap types introduced by Phase 4 material.

**Fix:** Added:

- mechanism gap;
- replication gap;
- operationalization gap;

alongside instrument, theory, catalog, constraint, forbidden, visual, and energy-accounting gaps.

**Status:** FIXED

---

# 2. Canonical data integrity

Direct cross-reference validation result:

```
PASS

phenomena:    35
interactions: 25
frontier:     31
entities:     33
ranges:       27
sources:      75
claims:       107
gaps:         16

cross-reference failures: 0
```

Checks included:

- duplicate IDs;
- source-ID existence;
- claim-ID existence;
- interaction entity resolution;
- frequency min/max ordering;
- range ownership;
- gap related-record existence;
- manifest count consistency;
- mandatory interaction energy boundaries;
- mandatory interaction energy fate.

---

# 3. Legacy research-data integrity

CSV audit:

| File | Records | Columns | Bad-width rows |
|---|---:|---:|---:|
| `phase2-known-spectrum.csv` | 35 | 11 | 0 |
| `phase3-couplings.csv` | 25 | 16 | 0 |
| `phase4-frontier.csv` | 31 | 10 | 0 |
| `energy-role-taxonomy.csv` | 18 | 5 | 0 |

All Phase 2–4 CSV records now have source IDs.

All referenced Phase 2–4 source IDs resolve to source-note entries.

---

# 4. Source audit

Canonical source registry:

- **75** source groups;
- every source group contains at least one HTTPS source;
- **0** structurally malformed source records;
- repeated URLs across source groups are allowed because the same primary/review source can support different claims in different phases.

Phase 1 canonical claims also carry direct source URLs where applicable.

`CLAIM-FND-016` remains a **project boundary**, not a standalone empirical measurement claim, so it does not pretend to have a single primary experimental citation.

---

# 5. Markdown / navigation audit

Repository Markdown was checked for relative-link resolution.

Result:

```
broken internal links: 0
```

The README index resolves to the current files.

Phase-completion documents resolve to their datasets and research documents.

---

# 6. Energy-accounting audit

The entire project now has a controlled energy-accounting vocabulary.

The Phase 3 legacy interaction CSV contains, for every one of its **25 edges**:

- `system_boundary`;
- `source_energy_role`;
- `target_energy_role`;
- `energy_fate`.

Canonical interactions preserve those fields.

The project explicitly distinguishes:

- energy transfer;
- conversion;
- storage;
- work;
- radiation;
- dissipation;
- thermalization;
- dispersion;
- steady-state balance;
- information readout;
- unknown energy behavior.

"Create energy from nothing" is not a normal project role.

---

# 7. Current-science spot checks

Because several Phase 4 claims are date-sensitive, key current references were spot-checked during this audit.

Confirmed consistent with the repository's wording:

- DESI's 30 July 2026 Lyα full-shape result shifts toward ΛCDM and does not establish evolving dark energy;
- LIGO/Virgo/KAGRA GW250114 black-hole spectroscopy reports ringdown measurements consistent with Kerr/general-relativity expectations within stated precision;
- Event Horizon Telescope Sagittarius A* results constrain deviations and support a Kerr-like exterior spacetime.

This is a spot check, not a claim that every external URL on the internet can never move or change.

---

# 8. Automated validation

Added:

- `schema/ufs-canonical.schema.json`
- `scripts/validate-canonical-data.mjs`
- `.github/workflows/validate-canonical-data.yml`

GitHub Actions result:

**Validate canonical data — SUCCESS**

The workflow has completed successfully on canonical-data changes.

---

# 9. Authority hierarchy after the audit

For machine-readable work, use this order:

1. **`data/canonical/`** — canonical source of truth;
2. Phase research documents — scientific explanation/context;
3. Phase source notes — detailed evidence notes;
4. legacy Phase 2–4 CSV files — provenance/research snapshots;
5. README — navigation and project summary.

A future visual should not bypass the canonical layer and manually copy scientific values from prose.

---

# 10. Remaining items are intentional future scope, not defects

The audit does **not** classify these as repository defects:

- Phase 2 is representative rather than exhaustive across every molecule/material/object;
- many frontier questions have no frequency because assigning one would be false;
- soul/afterlife/nonlocal-memory nodes have no physical carrier because none is established;
- wormholes remain theoretical/unobserved;
- black-hole singularity physics remains unresolved;
- anomalous-cognition records remain contested;
- Phase 6 visual design has not been built;
- Phase 7 external scientific review has not occurred.

Those are explicitly represented as catalog, theory, mechanism, replication, operationalization, or future-phase states.

---

# Audit conclusion

The repository is internally consistent at the end of Phase 5.

The major scientific rule now survives from the README through the canonical data:

> **Frequency, physical identity, evidence status, interaction mechanism, and energy accounting are separate dimensions.**

That separation is the project's strongest protection against turning an interesting pattern into an unsupported physical claim.
