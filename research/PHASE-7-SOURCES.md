# Phase 7 Source Notes — Coverage Expansion

**Status:** Integrated into the canonical dataset on 2026-09-20.

Phase 7 expands the established-spectrum catalog across astronomy, stellar physics, climate/ocean dynamics, electrical/plasma physics, physiology, neural rhythms, chemistry, cellular dynamics, derived thermal scales, and concrete quantum/particle reference scales.

## Scientific rule

A quantity may be plotted on the shared Hz axis only when its meaning is explicit. Phase 7 therefore distinguishes literal periodic oscillations and waves from:

- transition frequencies;
- resonances / normal modes;
- detector bands;
- characteristic rates;
- inverse timescales;
- conventional analysis bands;
- energy-equivalent frequencies.

A reciprocal timescale or energy-equivalent frequency is **not** silently promoted into a literal oscillation.

## Source groups

| ID | Scope | Source |
|---|---|---|
| P7-SRC-001 | Earth rotation/orbit | NASA Earth Fact Sheet |
| P7-SRC-002 | Solar rotation | NASA |
| P7-SRC-003 | Solar 5-minute oscillations | NASA/MSFC Helioseismology |
| P7-SRC-004 | Cepheid and RR Lyrae representative periods | NASA/GSFC teaching reference |
| P7-SRC-005 | Pulsar rotation and binary example | NASA / ESA |
| P7-SRC-006 | Stellar-mass black-hole ringdown example | LIGO |
| P7-SRC-007 | ENSO recurrence | NOAA |
| P7-SRC-008 | Seiches | NOAA Ocean Service |
| P7-SRC-009 | Oceanic Rossby-wave crossing times | NOAA Ocean Service |
| P7-SRC-010 | Atmospheric gravity-wave periods | NOAA / NASA |
| P7-SRC-011 | Schumann resonance | NASA NTRS / NASA SVS |
| P7-SRC-012 | U.S. 60 Hz power system | NIST |
| P7-SRC-013 | LC resonance example | NIST |
| P7-SRC-014 | Alfvén-wave observed example | NASA NTRS |
| P7-SRC-015 | Circadian rhythm | peer-reviewed review / PMC |
| P7-SRC-016 | Adult respiratory and heart rates | NCBI / peer-reviewed review |
| P7-SRC-017 | HRV VLF/LF/HF bands | peer-reviewed review / PMC |
| P7-SRC-018 | Physiological tremor | Movement Disorder Society consensus |
| P7-SRC-019 | EEG delta–gamma conventions | peer-reviewed EEG literature |
| P7-SRC-020 | BZ reaction example | University of Colorado |
| P7-SRC-021 | Protein dynamical timescales | peer-reviewed review / PMC |
| P7-SRC-022 | Enzyme turnover | NCBI Molecular Biology of the Cell / IUPAC |
| P7-SRC-023 | Charge-transfer dynamics | peer-reviewed review / PMC |
| P7-SRC-024 | Proton-transfer dynamics | peer-reviewed review / PubMed / PMC |
| P7-SRC-025 | Gas molecular collision-rate context | OpenStax |
| P7-SRC-026 | h, k_B and energy-equivalence constants | NIST CODATA |
| P7-SRC-027 | CMB temperature | NASA COBE |
| P7-SRC-028 | Room/body/Sun temperature anchors | NIST / NASA |
| P7-SRC-029 | Cesium clock transition | NIST |
| P7-SRC-030 | Muon lifetime | Particle Data Group |
| P7-SRC-031 | Electron rest-energy equivalent | NIST CODATA |

Canonical source URLs live in `data/canonical/sources.json`; this file documents why those source groups were introduced.

## Important source-to-display caveats

### Rossby waves

NOAA's months-to-years figures describe basin-crossing / propagation times. UFS converts these to inverse timescales only for shared-axis comparison. It does **not** call those numbers Rossby oscillation periods.

### Thermal scales

The thermal-derived row uses:

```
f_equiv = k_B T / h
```

This is an energy-frequency equivalence. It is not a statement that matter at temperature `T` has one physical vibration frequency. It is also distinct from the peak frequency of a blackbody spectrum.

### Particle decay

Muon `1/τ` is an inverse lifetime. Decay is stochastic, not a periodic oscillation.

### Electron rest energy

`m_e c^2/h` is an energy-equivalent frequency used as a scale comparison. The atlas does not present it as a directly observed internal clock.

### Biological bands

EEG and HRV bands are analysis conventions. Exact boundaries and physiological interpretations vary across studies. They are retained because the bands are widely useful, but the atlas labels them as classification bands rather than fundamental boundaries.

### Protein and chemical dynamics

Broad protein, charge-transfer and proton-transfer entries are envelopes across multiple distinct processes. They must not be read as a claim that every process continuously fills every frequency within the displayed interval.
