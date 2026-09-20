# Physics Foundations

This document establishes the minimum physics vocabulary required before building a common frequency map.

## 1. Frequency

Frequency `f` measures the number of cycles of a periodic phenomenon per unit time.

The SI unit is the **hertz (Hz)**:

```
1 Hz = 1 cycle per second = 1 s^-1
```

For a strictly periodic process with period `T`:

```
f = 1 / T
```

Angular frequency is:

```
ω = 2πf
```

Frequency is a property of a process, mode, field configuration, transition, signal, or oscillation. It is **not a substance**.

## 2. Wavelength is not interchangeable with frequency

For a propagating mode, wavelength `λ`, frequency `f`, and phase velocity `v_p` are related by:

```
v_p = f λ
```

In vacuum, electromagnetic radiation obeys `c = fλ`.

In material media, the propagation speed can depend on the medium and on frequency. In dispersive systems, phase velocity and group velocity can differ. Therefore a universal frequency axis is more general than a universal wavelength axis.

## 3. Same frequency does not mean same phenomenon

A 100 Hz acoustic wave, 100 Hz electromagnetic signal, and 100 Hz gravitational wave can all exist as physically different phenomena.

They differ in what oscillates:

- **Sound / acoustics:** mechanical variables such as pressure, density, and particle displacement in matter.
- **Electromagnetic radiation:** electric and magnetic fields.
- **Gravitational waves:** radiative degrees of freedom of spacetime geometry in general relativity.

This is the core reason the project needs a second organizing dimension: **what is oscillating?**

## 3A. Energy accounting is a separate axis

Frequency does not tell us how much total energy a system contains, whether that energy is increasing or decreasing, or where the energy came from.

For ordinary laboratory and thermodynamic systems, the project uses conservation of energy / the first law as the default accounting rule.

A subsystem can lose energy while another subsystem gains it. Therefore phrases such as "reduces energy," "uses energy," "makes energy," "disperses energy," or "maintains energy" must be translated into a boundary-aware description.

Common project verbs are:

- **stores**;
- **carries**;
- **receives**;
- **supplies/releases**;
- **transfers**;
- **converts**;
- **absorbs**;
- **emits/radiates**;
- **does work/drives**;
- **dissipates**;
- **thermalizes**;
- **disperses**;
- **maintains a steady state**;
- **exchanges**;
- **mediates/reads out**;
- **unknown**.

"Dissipation" means energy becomes distributed into less recoverable microscopic degrees of freedom; it does **not** mean energy is destroyed.

"Maintains energy" normally means stored energy remains approximately constant because inputs and outputs balance.

"Produces energy" normally means another form is converted or stored energy is released. The atlas does not use "create energy from nothing" as an ordinary mechanism.

Energy and power are distinct:

```
power = energy transferred per unit time
```

For gravitation and cosmology, global energy accounting can be subtler than in laboratory systems, so the relevant general-relativistic definition and boundary conditions must be stated.

See [Energy Accounting](10-ENERGY-ACCOUNTING.md).

## 4. Mechanical and acoustic oscillations

Mechanical oscillations involve displacement or deformation of matter.

In a fluid such as air, an ordinary sound wave consists of coupled variations in pressure, density, and fluid-particle motion. It therefore requires a material medium.

"Sound" is not limited to human hearing. Infrasound and ultrasound are still acoustic phenomena; the familiar human auditory band is a biological sensitivity range, not the physical boundary of acoustics.

## 5. Electromagnetic radiation

Maxwell's equations admit propagating electromagnetic-wave solutions. In vacuum, the wave does not require a material medium.

Radio, microwave, infrared, visible, ultraviolet, X-ray, and gamma-ray labels divide the electromagnetic spectrum into useful regions. Their boundaries are partly conventional and can overlap by source/detection convention.

They are not different fundamental media. They are frequency/wavelength/energy regions of electromagnetic radiation.

For a photon:

```
E = h f = ħ ω
```

where `h` is Planck's constant.

### Important limitation

`E = hf` should **not** be used as the total-energy formula for an arbitrary classical oscillation.

For example, two classical sound waves can have the same frequency but very different amplitudes and energies. Frequency alone does not specify their total classical energy.

## 6. Lattice vibrations and phonons

Atoms in solids can participate in collective normal modes of vibration.

When these normal modes are quantized, their excitations are called **phonons**. Phonons are quasiparticles associated with collective mechanical vibration in condensed matter.

A crystal generally supports many branches and wavevectors, not one "frequency of the crystal."

This is a useful warning for the broader project: **matter usually has a spectrum of modes, not one intrinsic vibration.**

## 7. Molecular rotation and vibration

Molecules possess quantized rotational and vibrational energy structure.

Rotational spectroscopy commonly occupies radio/microwave/millimeter-wave regions, while molecular vibrational spectroscopy commonly appears in infrared and terahertz-related regions. Exact transition frequencies depend on the molecule, state, environment, and mode.

A molecule therefore cannot be represented by one universal frequency either.

## 8. Atomic, electronic, nuclear, and spin transitions

Bound quantum systems have discrete energy differences. When a transition exchanges a photon:

```
ΔE = h f
```

Different transition families occupy very different spectral regions.

Examples include:

- atomic/electronic transitions;
- hyperfine transitions;
- nuclear magnetic resonance and electron spin resonance;
- nuclear gamma transitions.

The atlas must distinguish the **transition frequency** from a claim that the entire object is mechanically vibrating at that rate.

## 9. Matter waves

Quantum particles display wave phenomena.

The de Broglie relation is:

```
λ = h / p
```

Electron diffraction experiments provided direct evidence of matter-wave behavior.

A quantum state's time dependence can also carry a frequency related to energy, but calling that a macroscopic object's single "vibration frequency" is generally misleading. Matter-wave frequency and wavelength must be described in the context of the quantum state and its energy-momentum relation.

## 10. Quantum fields

Quantum field theory is the framework underlying the Standard Model of particle physics.

In field-theoretic language, particles are excitations of quantum fields. This makes oscillatory/mode language deeply relevant to modern physics — but it does **not** justify collapsing every field into one empirically established universal vibrating substance.

For this project, "quantum field" is therefore a **framework layer** and a possible family of entries, not proof of a universal-vibration hypothesis.

## 11. Gravitational waves

General relativity predicts gravitational radiation, and gravitational waves have been directly detected.

Gravitational waves possess frequency and spectra, but they are not acoustic waves moving through a material medium. They are associated with dynamical spacetime geometry.

The gravitational-wave spectrum spans many observational bands addressed by different techniques, including pulsar timing, space-based concepts, ground-based interferometers, and proposed high-frequency detectors.

The existence of different detector bands is especially useful for this project because it demonstrates the distinction between:

- a **physical spectrum**;
- an **instrument's sensitivity window**;
- a genuinely **unconstrained region**.

## 12. Heat is not a single spectral family

"Heat" is energy transfer associated with a temperature difference, not one kind of wave.

Thermal energy can be transported or redistributed by multiple mechanisms, including:

- conduction;
- convection;
- thermal electromagnetic radiation;
- lattice vibrations / phonons in solids;
- electronic carriers and other excitations, depending on the material.

Thermal radiation is electromagnetic and has a temperature-dependent spectrum described by Planck's law.

Therefore the final atlas should treat **thermal behavior as cross-cutting**, not create a misleading single "heat frequency band."

## 13. Dark matter belongs in a frontier layer

The microscopic nature of dark matter is unknown.

Different candidate models make different spectral predictions. In particular, some ultralight bosonic dark-matter models behave as coherent oscillating fields, allowing searches to be described in frequency space.

That does **not** mean dark matter in general has one known frequency.

The correct atlas representation is:

```
Dark matter
  └─ candidate model
       └─ predicted observable
            └─ model-dependent frequency / mass relation
                 └─ experimental search range and exclusion
```

## 14. Is there a universal vibration?

Phase 1 makes no such assumption.

Modern physics contains many systems whose dynamics are naturally expressed through oscillations, modes, waves, Fourier spectra, and field excitations. This shared mathematics is profound and worth mapping.

But a shared mathematical language does not establish that sound, photons, phonons, matter waves, gravitational waves, and hypothetical dark-sector fields are all one physical wave in one common medium.

If this project later explores a unifying hypothesis, it will appear in the **SPECULATIVE** layer and must make testable distinctions from established theories.

## Quick sources

### Frequency, wavelength, and electromagnetic fields
- NIST, *Time and Frequency from A to Z — Wavelength*: https://www.nist.gov/pml/time-and-frequency-division/popular-links/time-frequency-z/time-and-frequency-z-u-w
- NIST Journal of Research, electromagnetic wave equation from Maxwell equations: https://nvlpubs.nist.gov/nistpubs/jres/100/4/j14lym.pdf
- Particle Data Group, current *Review of Particle Physics*: https://pdg.lbl.gov/

### Sound and mechanical vibration
- NIST, *Now Hear This!* — sound in air as compression/expansion and density variation: https://www.nist.gov/news-events/news/2022/06/now-hear
- Maldovan, *Sound and heat revolutions in phononics*, Nature 503, 209–217 (2013): https://doi.org/10.1038/nature12608

### Thermodynamics and heat
- IUPAC Gold Book, *heat* — energy transfer due to a temperature gradient: https://doi.org/10.1351/goldbook.H02752
- IUPAC Gold Book, *energy* — includes `E = hν` specifically for photons: https://doi.org/10.1351/goldbook.E02101
- NIST, *Heat Transfer* — conduction, convection, and radiation: https://www.nist.gov/glossary-term/24981
- NIST, *Conservation of Energy (First Law of Thermodynamics)*: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication1018-5.pdf
- Szabados, *Quasi-Local Energy-Momentum and Angular Momentum in General Relativity*: https://doi.org/10.12942/lrr-2009-4

### Phonons and condensed matter
- Wei & Chou, *Ab initio calculation of force constants and full phonon dispersions*, Physical Review Letters 69, 2799 (1992): https://doi.org/10.1103/PhysRevLett.69.2799
- Banks, Kleist & Ruggiero, *Investigating the function and design of molecular materials through terahertz vibrational spectroscopy*, Nature Reviews Chemistry 7, 480–495 (2023): https://doi.org/10.1038/s41570-023-00487-w

### Molecular spectroscopy
- NIST Molecular Spectroscopic Data: https://www.nist.gov/pml/molecular-spectroscopic-data
- NIST Triatomic Spectral Database introduction: https://physics.nist.gov/PhysRefData/MolSpec/Triatomic/Html/intro.html

### Matter waves
- Davisson & Germer, *Diffraction of Electrons by a Crystal of Nickel*, Physical Review 30, 705 (1927): https://doi.org/10.1103/PhysRev.30.705

### Quantum fields
- Particle Data Group, *Review of Particle Physics*: https://pdg.lbl.gov/
- CERN, *Quantum field theory and the Standard Model*: https://doi.org/10.5170/CERN-2010-002.1
- CERN, *What’s so special about the Higgs boson?*: https://home.cern/science/physics/higgs-boson/what/

### Gravitational waves
- Sathyaprakash & Schutz, *Physics, Astrophysics and Cosmology with Gravitational Waves*, Living Reviews in Relativity 12, 2 (2009): https://doi.org/10.12942/lrr-2009-2
- Gair et al., *Testing General Relativity with Low-Frequency, Space-Based Gravitational-Wave Detectors*, Living Reviews in Relativity 16, 7 (2013): https://doi.org/10.12942/lrr-2013-7
- Aggarwal et al., *Challenges and opportunities of gravitational-wave searches at MHz to GHz frequencies*, Living Reviews in Relativity 24, 4 (2021): https://doi.org/10.1007/s41114-021-00032-5

### Dark-matter frequency searches
- Wcisło et al., *Experimental constraint on dark matter detection with optical atomic clocks*, Nature Astronomy 1, 0009 (2017): https://doi.org/10.1038/s41550-016-0009
- Cervantes et al., *Search for Dark Photon Dark Matter with a Dielectrically Loaded Multiwavelength Microwave Cavity*, Physical Review Letters 129, 201301 (2022): https://doi.org/10.1103/PhysRevLett.129.201301
