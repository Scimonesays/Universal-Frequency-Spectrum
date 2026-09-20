# Phase 7 — Cross-Scale Coverage Expansion

**Status:** IN PROGRESS — coverage expansion integrated; scientific review and release provenance remain.

**Integrated:** 2026-09-20

## Goal

Close the largest missing bridges in the Universal Frequency Spectrum without weakening its central scientific rule:

> A common numerical coordinate does not imply a common physical ontology.

Phase 7 expands the canonical established-spectrum catalog from **35 to 80 phenomena** and the numeric range registry from **27 to 69 ranges**.

## What was added

### Cosmic / orbital

- Earth sidereal rotation;
- Earth sidereal orbit;
- binary-pulsar orbital example.

### Stellar

- solar rotation;
- solar five-minute helioseismic oscillations;
- Cepheid pulsations;
- RR Lyrae pulsations;
- ordinary and millisecond pulsar rotation examples;
- stellar-mass black-hole ringdown example.

### Atmosphere / ocean / geophysics

- ENSO recurrence timescale;
- seiches;
- oceanic Rossby-wave basin-transit timescale;
- atmospheric gravity waves;
- Schumann resonance.

### Electrical / plasma

- U.S. 60 Hz grid frequency;
- LC circuit resonance as parameter-dependent;
- observed Alfvén-wave example;
- ion plasma oscillation;
- ion gyrofrequency.

The pre-existing canonical electron plasma and electron gyrofrequency records remain in place.

### Biological / neural

- circadian rhythm;
- breathing;
- resting adult heartbeat;
- HRV VLF, LF and HF analysis bands;
- physiological tremor;
- EEG delta, theta, alpha, beta and gamma bands.

### Chemical / cellular

- Belousov-Zhabotinsky oscillating reaction example;
- protein conformational-dynamics envelope;
- enzyme turnover rate;
- charge-transfer inverse-timescale envelope;
- proton-transfer inverse-timescale envelope;
- room-temperature gas collision-rate scale.

### Thermal / derived

Four `k_B T/h` scale anchors were added:

- CMB temperature;
- room temperature;
- body temperature;
- solar effective temperature.

These are explicitly tagged **ENERGY-EQUIVALENT FREQUENCY** and are not physical single-frequency thermal oscillations.

### Atomic / particle anchors

- cesium-133 clock transition at 9,192,631,770 Hz;
- muon inverse-lifetime scale;
- electron rest-energy equivalent frequency.

## Frequency semantics

Phase 7 adds a first-class optional `spectral.semantic_type` to the canonical model.

Allowed meanings are:

```
periodic_or_rotational
propagating_wave
normal_mode_or_resonance
transition_frequency
detector_band
characteristic_inverse_timescale
characteristic_rate
energy_equivalent_frequency
classification_band
biological_sensitivity
parameter_dependent
state_dependent
other
```

The existing 35 phenomena were backfilled with semantic types as part of the same expansion.

This creates a crucial distinction:

```
same unit: Hz
≠
same physical meaning
```

## Atlas display window

The web atlas viewport now supports:

```
10^-18 Hz  →  10^24 Hz
```

These are **display limits only**.

They are not claimed universal lower or upper bounds of physical frequency.

The map now also shows the reciprocal period at each logarithmic frequency tick:

```
T = 1/f
```

so the spectrum can be read simultaneously as a rate axis and a timescale axis.

## Visual families

The display taxonomy now separates:

1. Cosmic / Orbital
2. Stellar
3. Atmospheric / Oceanic / Geophysical
4. Gravitational
5. Mechanical / Acoustic
6. Biological / Neural
7. Chemical / Cellular
8. Electrical / Plasma
9. Electromagnetic
10. Molecular / Solid-State
11. Atomic / Electronic
12. Nuclear
13. Particle / Quantum
14. Thermal / Derived

Frontier / unknown questions remain outside the established physical rows and retain their own evidence-aware view.

## Interpretation rules

### A rate is not automatically an oscillation

Enzyme turnover, gas collision rate and particle inverse lifetime can be written in s^-1. That does not make them periodic waves.

### An energy-equivalent frequency is not automatically a clock

Relations such as:

```
E / h
k_B T / h
m c^2 / h
```

provide useful frequency-equivalent scales. They do not prove a literal recurring process at that number.

### A detector band is not an existence band

PTA, LISA and LIGO ranges remain detector/observational windows rather than universal gravitational-wave boundaries.

### A classification band is not a natural discontinuity

EEG, HRV and EM named bands are useful classifications whose edges may be conventional.

### A propagation time is not an oscillation period

Rossby-wave crossing times are retained only as inverse characteristic timescales and explicitly labeled as such.

## What this changes scientifically

Before Phase 7, the atlas had strong coverage in geophysics, acoustics, EM, molecular/solid-state, atomic, nuclear and gravitational-wave detector bands, but major bridges were visually and canonically thin.

The expanded atlas now makes a much stronger continuous path visible:

```
cosmic/orbital
→ stellar
→ atmosphere/ocean
→ bulk mechanics
→ living physiology
→ neural dynamics
→ chemistry/cellular dynamics
→ electrical/plasma
→ molecular/solid-state
→ atomic/electronic
→ nuclear
→ particle/quantum
```

The continuity is in **timescale/frequency space**, not in physical substance.

## Remaining Phase 7 work

Coverage expansion is not the same thing as final scientific release.

Before public “complete” status:

- run fresh canonical and web validators;
- review each new source/range against the primary or authoritative reference;
- inspect the full atlas for label collisions and misleading visual overlap;
- decide whether any broad inverse-timescale envelopes should be split into narrower sub-records;
- complete release provenance;
- obtain external scientific review where practical.

See [Phase 7 Source Notes](../research/PHASE-7-SOURCES.md) and [Frequency-Scale Patterns](14-FREQUENCY-SCALE-PATTERNS.md).
