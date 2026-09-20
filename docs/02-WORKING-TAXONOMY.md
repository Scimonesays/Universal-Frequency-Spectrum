# Working Taxonomy

This taxonomy is intentionally provisional. Its job is to prevent unlike phenomena from being collapsed into one line merely because they share a numerical frequency.

## Primary rule

The first classification question is:

> **What physical degree of freedom is oscillating, changing periodically, or carrying the spectral mode?**

Frequency is then used as a common coordinate across the rows.

## Proposed major families

| Family | What oscillates / changes | Medium required? | Typical scientific treatment | Phase 1 status |
|---|---|---:|---|---|
| Macroscopic mechanical oscillation | Position, strain, deformation, rigid-body or structural coordinates | Usually matter itself | Classical mechanics / elasticity | ESTABLISHED |
| Acoustic / fluid waves | Pressure, density, fluid-particle displacement / velocity | Yes | Acoustics / continuum mechanics | ESTABLISHED |
| Elastic waves in solids | Displacement / strain fields | Yes | Elasticity / solid mechanics | ESTABLISHED |
| Lattice modes / phonons | Collective atomic displacement normal modes | Material lattice | Condensed-matter physics / lattice dynamics | ESTABLISHED |
| Molecular rotation | Molecular rotational state / orientation | Molecule | Quantum molecular spectroscopy | ESTABLISHED |
| Molecular vibration | Internal nuclear coordinates / normal modes | Molecule | Quantum molecular spectroscopy | ESTABLISHED |
| Atomic / electronic transitions | Quantum electronic state amplitudes / energy eigenstate transitions | Atom / ion / solid-state system | Atomic / quantum physics | ESTABLISHED |
| Spin / hyperfine modes | Spin degrees of freedom and coupled magnetic moments | Quantum system | Magnetic resonance / atomic physics | ESTABLISHED |
| Nuclear transitions / modes | Nuclear quantum states / collective nuclear modes | Nucleus | Nuclear physics | ESTABLISHED |
| Electromagnetic radiation | Electric and magnetic fields | No material medium required | Classical electrodynamics / QED | ESTABLISHED |
| Plasma collective modes | Charge density, currents, fields, particle distributions | Plasma | Plasma physics / kinetic theory | ESTABLISHED |
| Matter waves | Quantum state phase / wavefunction structure associated with matter | No classical propagation medium | Quantum mechanics / QFT | ESTABLISHED |
| Quantum-field excitations | Field modes / quantum states | No classical medium | Quantum field theory | ESTABLISHED framework; entry details vary |
| Gravitational waves | Radiative spacetime / metric degrees of freedom | No material medium | General relativity | ESTABLISHED |
| Thermal phenomena | Cross-cutting statistical energy distribution and transport | Depends | Thermodynamics / statistical mechanics / transport | CROSS-CUTTING, not one row |
| Dark-sector oscillations | Candidate-dependent fields or particles | Candidate-dependent | Beyond-Standard-Model physics | MODEL-DEPENDENT / OPEN |
| Quantum-gravity phenomena | Unknown / theory-dependent | Unknown | Candidate quantum-gravity theories | OPEN / SPECULATIVE |

## Why thermal phenomena are cross-cutting

Thermal physics can involve several rows simultaneously.

A hot solid may contain:

- thermally occupied phonons;
- electronic excitations;
- electromagnetic thermal radiation;
- diffusion and conduction;
- macroscopic convection if fluids are involved.

A temperature does not map to one unique frequency. For blackbody radiation, temperature determines a **distribution** of electromagnetic frequencies.

## Why "light" and "heat" partly overlap but are not synonyms

Visible light and infrared thermal radiation are both electromagnetic radiation.

However:

- not all infrared radiation should be casually equated with "heat";
- visible and ultraviolet radiation can also deposit thermal energy in matter;
- thermal conduction is not electromagnetic radiation propagating through space;
- thermal energy in solids can be carried substantially by phonons and/or electrons.

The atlas should represent **thermal radiation** in the electromagnetic row and link it to a cross-cutting thermal layer.

## Why "matter frequency" is not one row entry

An ordinary piece of matter can simultaneously contain:

- structural resonances;
- acoustic modes;
- phonons;
- molecular rotations and vibrations;
- electronic transitions;
- spin transitions;
- nuclear transitions;
- thermal distributions;
- quantum phases.

The project will therefore reject unsupported statements of the form:

> "This object vibrates at X Hz."

unless the statement identifies **which mode or degree of freedom** is meant.

## Frequency overlap is expected

The same frequency decade can contain many rows.

This is not clutter; it is one of the principal insights the final map should reveal.

Examples conceptually include:

- mechanical resonances overlapping audible sound;
- radio-frequency electromagnetic fields overlapping mechanical or acoustic frequencies;
- gravitational-wave bands overlapping acoustic and radio-frequency values;
- terahertz electromagnetic radiation probing terahertz-scale molecular or lattice dynamics.

The coupling between a probe and a mode must not be mistaken for identity between them. A terahertz photon can excite a material vibration without the photon and vibration becoming the same physical object.

## Secondary classification dimensions

Each family can be subdivided by:

### Propagation type
- traveling wave;
- standing wave;
- localized resonance;
- bound-state transition;
- stochastic spectrum;
- coherent field oscillation;
- quasiparticle mode.

### Spatial character
- longitudinal;
- transverse;
- mixed;
- scalar;
- vector;
- tensor;
- polarization-dependent;
- wavevector-dependent.

### Scale
- cosmological;
- astronomical;
- geophysical;
- macroscopic;
- mesoscopic;
- molecular;
- atomic;
- nuclear;
- subatomic / field-theoretic.

### Energy behavior

Energy behavior is a cross-cutting classification independent of frequency.

Possible roles include:

- stores;
- carries;
- receives/gains;
- supplies/releases;
- transfers;
- converts;
- absorbs;
- emits/radiates;
- does work/drives;
- dissipates;
- thermalizes;
- disperses;
- maintains steady state;
- exchanges;
- mediates/readout;
- unknown.

Every energy statement should also name the **system boundary**.

A phenomenon may have multiple roles simultaneously. For example, an electromagnetic wave can carry energy, a molecule can absorb it, and a material can later dissipate that energy into phonons.

### Spectral meaning
- exact eigenfrequency;
- resonance frequency;
- transition frequency;
- carrier frequency;
- modulation frequency;
- repetition rate;
- characteristic frequency;
- spectral peak;
- detector band;
- conventional named band.

The final dataset must store these distinctions rather than mixing them into one `frequency` column.

## Candidate visual structure

The current best hypothesis for the eventual visualization is:

```
vertical axis   = physical family / what oscillates
horizontal axis = logarithmic frequency
overlays        = wavelength, energy, energy-role/accounting, scale, detectors, evidence status
edges           = coupling / conversion / excitation relationships
```

This is a design hypothesis, not a locked UI.

## Known future additions

Phase 2 and the subsequent frontier work established representative coverage of the following areas; Phase 5 now treats unlisted species, materials, branches, transitions, and object-specific examples as **catalog gaps**, not evidence of physical absence:

- ocean and atmospheric waves;
- seismic normal modes;
- structural/mechanical resonance;
- infrasound, audible sound, ultrasound, hypersound;
- acoustic and optical phonon branches;
- magnons / spin waves;
- plasmons / plasma oscillations;
- molecular rotation and vibration;
- atomic transitions;
- hyperfine and spin resonance;
- nuclear modes and transitions;
- full electromagnetic spectrum;
- quantum matter waves;
- neutrino oscillation treatment, with special care because "oscillation frequency" has a different meaning;
- gravitational-wave observational bands;
- coherent ultralight-field dark-matter searches.

## Quick sources

- NIST, sound-induced pressure/density variation in air: https://www.nist.gov/news-events/news/2022/06/now-hear
- NIST Molecular Spectroscopic Data: https://www.nist.gov/pml/molecular-spectroscopic-data
- Wei & Chou, phonon dispersion, Physical Review Letters 69, 2799 (1992): https://doi.org/10.1103/PhysRevLett.69.2799
- Maldovan, phononics and sound/heat, Nature 503, 209–217 (2013): https://doi.org/10.1038/nature12608
- Davisson & Germer, electron diffraction / matter waves: https://doi.org/10.1103/PhysRev.30.705
- Particle Data Group, Review of Particle Physics: https://pdg.lbl.gov/
- Sathyaprakash & Schutz, gravitational-wave spectrum and physical distinction from EM radiation: https://doi.org/10.12942/lrr-2009-2
- Cervantes et al., frequency-domain dark-photon dark-matter search: https://doi.org/10.1103/PhysRevLett.129.201301
