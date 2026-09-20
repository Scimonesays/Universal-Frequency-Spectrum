# CURV Research Validator Integration

**Status:** ACTIVE INTEGRATION CONTRACT  
**Repositories:**
- Universal Frequency Spectrum (UFS): canonical scientific atlas/database
- CURV: external falsifier-first research/constraint instrument

## Purpose

UFS and CURV remain separate projects.

**UFS owns scientific identity and evidence status.**

**CURV may evaluate whether a UFS frontier/question record is sufficiently operationalized to design a falsifiable test.**

The integration is intentionally one-way by default:

```
UFS canonical record
      ↓ read-only
CURV validation run
      ↓
validation artifact / gate result
      ↓ reviewed ingestion
UFS canonical validations registry
```

CURV must never silently modify a UFS phenomenon, frontier status, source, gap, or claim.

---

## Why CURV is useful here

CURV already provides:

- deterministic jobs;
- strict / normal / sandbox policy modes;
- explicit speculative mode;
- append-only registries;
- reproducibility metadata;
- artifacts;
- gate-based evaluation;
- certification discipline.

Those capabilities are useful for testing whether a proposed UFS frontier idea is ready for quantitative constraint work.

CURV is **not** the source of truth for the Universal Vibration Table.

---

## What CURV validates first

The first integration layer is a **structural readiness validator**.

It asks whether a frontier/question record has:

1. a defined candidate or question;
2. a predicted or observed signal;
3. an identified required bridge/coupling;
4. source traceability;
5. an explicit energy-accounting status.

Possible readiness verdicts:

- `READY_FOR_CONSTRAINT_DESIGN`
- `NEEDS_OPERATIONALIZATION`
- `HOLD_EVIDENCE`
- `INCONCLUSIVE`

These are **research-readiness labels**, not claims that the underlying hypothesis is true or false.

Example:

```
telepathy
→ sources exist
→ claimed information effect exists
→ carrier unknown
→ energy transfer unknown
→ no physical bridge established
→ NEEDS_OPERATIONALIZATION
```

A gravity-deviation or wormhole model with equations and a detector signature may instead reach:

```
READY_FOR_CONSTRAINT_DESIGN
```

and then be routed into a domain-specific CURV test.

---

## Read-only local connection

CURV discovers UFS using:

1. explicit CLI path, where supported;
2. `UFS_REPO_PATH` environment variable;
3. a sibling repository named `Universal-Frequency-Spectrum`.

CURV reads:

- `data/canonical/manifest.json`
- `data/canonical/frontier.json`
- `data/canonical/gaps.json`
- `data/canonical/phenomena.json`
- `data/canonical/interactions.json`
- `data/canonical/claims.json`

No UFS write permission is required for the CURV console.

---

## Validation result contract

Reviewed CURV results may be registered in:

`data/canonical/validations.json`

Each external validation records:

- target UFS record;
- target claim, when applicable;
- provider;
- provider repository and commit;
- run ID;
- validation type;
- policy/speculative state;
- gate results;
- artifact/evidence references;
- review state.

The schema is:

`schema/ufs-validation-result.schema.json`

---

## Trust boundary

An external validation result must **not** automatically change:

- `evidence.class`;
- `status`;
- a frequency/range;
- a gap classification;
- source provenance;
- an established/open/speculative label.

A human/scientific review must decide whether a CURV result warrants a canonical scientific change.

This is deliberate.

A computational gate can test the assumptions it was given. It cannot, by itself, establish that those assumptions describe nature.

---

## Intended Phase 6 use

The future UFS web application may display external validation beside a frontier/question node:

```
Hypothesis
Evidence status: SPECULATIVE
Operationalization: NEEDS WORK
CURV validations: 3
Latest result: READY_FOR_CONSTRAINT_DESIGN
Canonical evidence status: unchanged
```

This lets the public atlas show **research progress without conflating research readiness with discovery**.

---

## Long-term extension

After the generic readiness validator, domain-specific adapters can be added when scientifically justified:

- gravity / black-hole / wormhole models → CURV gravity lane;
- fifth-force models → parameterized constraint lane;
- unknown-energy devices → energy-accounting / source-plausibility lane;
- dark-sector models → candidate-specific detector/coupling constraints.

Claims such as telepathy, nonlocal memory, or postmortem survival should not be pushed into a gravity solver merely because CURV exists.

They first need a measurable physical model.

That separation is the point of the integration.
