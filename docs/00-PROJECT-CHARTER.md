# Project Charter

## Mission

Build a scientifically defensible **Universal Frequency Spectrum**: a research atlas of waves, oscillations, normal modes, field excitations, transitions, and related periodic phenomena organized around a shared frequency coordinate without pretending that frequency alone makes them physically identical.

The project is inspired by what the periodic table does well: it does not merely list things. It organizes known entities so relationships, families, regularities, and missing knowledge become easier to see.

The analogy has limits. There is no expectation that oscillatory physics must form periodic chemical-style groups, nor that blank regions necessarily predict undiscovered phenomena.

## Central questions

1. What physical phenomena have a meaningful frequency, period, wavelength, spectral density, or characteristic rate?
2. **What is actually oscillating?**
3. Does the phenomenon require a material medium?
4. What field, state variable, normal mode, degree of freedom, or geometry carries the oscillation?
5. Which apparently different phenomena are manifestations of the same physical family?
6. Which families overlap numerically in frequency while remaining physically distinct?
7. How can energy or information convert between families?
8. What frequencies are experimentally measured, theoretically predicted, or poorly constrained?
9. Where do gravity, gravitational waves, dark-matter candidates, quantum fields, and other frontier ideas fit without overstating what is known?
10. Can a rigorous map reveal useful research gaps that are otherwise hidden by discipline-specific charts?

## Primary deliverables

The mature project should contain:

- A human-readable research atlas.
- A machine-readable canonical dataset.
- Source-backed frequency ranges and characteristic frequencies.
- A taxonomy based primarily on **what oscillates**, not just how fast.
- Coupling and conversion relationships.
- Detector and measurement coverage.
- A clearly separated frontier/hypothesis layer.
- A visual map and eventually an interactive explorer.

## Non-goals

This project does **not** begin by assuming that:

- all physical reality is one literal vibration;
- sound and light are the same wave in different media;
- heat is a single frequency band;
- every object has one unique intrinsic frequency;
- every empty frequency interval corresponds to missing physics;
- a quantum relation such as `E = hf` gives the total energy of every classical oscillation;
- dark matter has a known frequency;
- gravity itself can be assigned one universal frequency.

Any later unifying proposal must survive the same evidence rules as every other claim.

## Core scientific principle

> **Frequency answers "how often?" It does not, by itself, answer "what is it?"**

Two phenomena may share exactly the same frequency while differing in physical degree of freedom, governing equations, propagation behavior, coupling, and detection method.

Therefore the atlas will be organized as a set of overlapping families projected onto a common frequency coordinate.

## Working ontology

Every atlas entry should eventually answer:

- **Name**
- **Family**
- **What oscillates**
- **Physical variable / degree of freedom**
- **Medium or substrate**
- **Frequency type** — carrier, mode, transition, repetition, resonance, bandwidth, stochastic spectrum, etc.
- **Frequency range or characteristic frequency**
- **Range context** — theoretical, observed, detector-limited, conventional label, biological sensitivity, etc.
- **Wavelength / wavevector**, where meaningful
- **Dispersion relation / propagation speed**, where meaningful
- **Energy relationship**, where meaningful
- **Scale**
- **Excitation / source mechanism**
- **Detection method**
- **Couplings / conversions**
- **Evidence status**
- **Sources**
- **Notes / caveats**

## Evidence labels

The project uses four top-level epistemic labels:

- **ESTABLISHED** — supported by mature theory and reproducible observation/measurement.
- **MODEL-DEPENDENT** — legitimate physics conditional on a specified model or assumptions.
- **OPEN** — an unresolved question or incompletely constrained region.
- **SPECULATIVE** — a proposed interpretation or extension without sufficient empirical support.

These labels describe the **claim**, not the prestige of the topic.

## Design principle for "gaps"

A blank region is not automatically a discovery opportunity.

A scientifically useful gap must specify at least:

1. the physical family or degree of freedom;
2. the observable;
3. the expected or allowed frequency region;
4. the governing model;
5. current measurement/detector coverage;
6. what has actually been excluded;
7. what remains unconstrained.

This keeps "unknown" from becoming a synonym for "anything can go here."

## Versioning philosophy

The visualization will be downstream of the research, not the other way around.

If the scientific model changes, the visual must change. The project should never preserve a beautiful layout at the expense of physical accuracy.

## Phase 1 completion criteria

Phase 1 is complete when the repository has:

- a charter;
- a foundations document;
- a first-pass taxonomy;
- a formal evidence and citation standard;
- an auditable claim ledger;
- a glossary;
- a source library;
- a research roadmap;
- a reserved machine-readable data area.

All are present as of Phase 1 completion.

## Quick sources

- Particle Data Group, *Review of Particle Physics* (current review hub): https://pdg.lbl.gov/
- NIST, Time & Frequency reference material: https://www.nist.gov/pml/time-and-frequency-division
- Sathyaprakash & Schutz, *Physics, Astrophysics and Cosmology with Gravitational Waves*, Living Reviews in Relativity: https://doi.org/10.12942/lrr-2009-2
- Davisson & Germer, *Diffraction of Electrons by a Crystal of Nickel*, Physical Review 30, 705 (1927): https://doi.org/10.1103/PhysRev.30.705
- Maldovan, *Sound and heat revolutions in phononics*, Nature 503, 209–217 (2013): https://doi.org/10.1038/nature12608
