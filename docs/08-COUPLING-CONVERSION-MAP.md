# Phase 3 — Coupling, Conversion, Resonance & Bridges

**Status:** Phase 3 research map  
**Purpose:** Describe how the established phenomena cataloged in Phase 2 interact without confusing interaction, conversion, measurement, or hybridization with identity.

---

## Core rule

> **Two modes can exchange energy, information, momentum, or phase without becoming the same physical phenomenon.**

Phase 2 established the **nodes** of the atlas.

Phase 3 establishes the **edges**.

A scientifically useful edge must say:

1. what the source degree of freedom is;
2. what the target degree of freedom is;
3. what interaction mediates the relationship;
4. whether energy is actually transferred;
5. whether the process is reversible;
6. what conservation or resonance conditions apply;
7. whether the edge is direct or mediated by an intermediate mode;
8. whether the relation is a physical conversion, scattering event, force, hybridization, or merely a measurement/readout path;
9. what evidence supports it.

---

# 1. Edge ontology

The final atlas should not use one generic arrow.

## DRIVE

A time-dependent source forces another degree of freedom.

Example:

```
alternating electric field
  → piezoelectric strain
  → acoustic mode
```

A driven response is not necessarily a conversion with unit efficiency.

---

## TRANSDUCE

A signal or excitation in one physical domain is converted into another observable or excitation.

Examples:

```
acoustic strain ↔ electrical voltage
microwave ↔ acoustic phonon
microwave ↔ optical signal through an acoustic intermediary
```

A transducer may be reciprocal or non-reciprocal and usually has finite bandwidth and efficiency.

---

## ABSORB

Energy from one mode is deposited into another system.

Example:

```
infrared photon
  → molecular vibrational transition
```

For a resonant quantum transition:

```
ΔE = h f
```

subject to selection rules and linewidth.

---

## EMIT

An internal excitation produces radiation or another propagating excitation.

Example:

```
excited atomic state
  → lower state + photon
```

The reverse process can exist, but spontaneous emission and absorption are not the same microscopic event.

---

## SCATTER_INELASTICALLY

An incoming excitation leaves as another excitation with different frequency/energy while creating or annihilating another mode.

For a photon–phonon process, schematically:

```
f_out = f_in - f_phonon     # Stokes / phonon creation
f_out = f_in + f_phonon     # anti-Stokes / phonon annihilation
```

Energy and momentum/phase-matching conditions must be satisfied.

---

## MODULATE

One degree of freedom changes a property of another mode without being identical to it.

Example:

```
mechanical displacement
  → optical cavity length
  → optical resonance frequency / phase
```

---

## FORCE / BACK-ACTION

One mode exerts a force or torque on another.

Example:

```
photons
  → radiation pressure
  → mirror/mechanical displacement
```

The mechanical motion can in turn modulate the electromagnetic field.

---

## HYBRIDIZE

Two resonant modes couple strongly enough that the eigenmodes of the combined system are mixtures of both uncoupled modes.

Examples:

- cavity photon + magnon;
- cavity photon + mechanical mode;
- magnon + phonon under suitable conditions.

Hybridization is stronger language than "interacts." It should only be used where the source demonstrates coupled-mode behavior such as normal-mode splitting or avoided crossing.

---

## THERMALIZE / SCATTER

Microscopic interactions redistribute energy and momentum among populations.

Examples:

- electron–phonon scattering;
- phonon–phonon scattering;
- spin–lattice relaxation.

These processes can carry heat or establish equilibrium without creating a one-to-one conversion between monochromatic modes.

---

## READ_OUT

A mode changes a measurable variable in another system.

Example:

```
gravitational-wave strain
  → differential interferometer arm optical phase
  → photodetector intensity/electrical output
```

A readout edge is especially important because it **must not be rendered as if the measured phenomenon becomes the detector signal.**

---

# 2. Classical mechanical ↔ acoustic bridge

A vibrating structure can radiate pressure waves into a surrounding fluid, and incident acoustic pressure can drive mechanical motion.

```
mechanical displacement / surface velocity
            ↕
pressure + particle motion in fluid
```

This boundary coupling underlies loudspeakers, microphones, sonar transducers, musical instruments, ultrasound devices, and acoustic sensing.

### Scientific caution

The structural mode and the acoustic mode can share frequency because they are coupled at a boundary.

That does not make the solid's displacement field and the fluid's pressure field one physical medium.

---

# 3. Piezoelectric electrical ↔ mechanical/acoustic transduction

Piezoelectric materials provide one of the clearest bridges in the entire atlas.

The **direct piezoelectric effect** maps mechanical stress/strain into electrical polarization or charge.

The **converse piezoelectric effect** maps an applied electric field into strain.

Schematically:

```
electrical field / voltage
          ↕
piezoelectric polarization + strain
          ↕
mechanical / acoustic mode
```

Modern piezoelectric acoustic transducers operate in both directions.

This gives the atlas a real, experimentally mature example of:

> **different physical rows coupled bidirectionally without being the same row.**

---

# 4. Electromagnetic radiation ↔ molecular vibration

Infrared and terahertz spectroscopy demonstrate energy exchange between electromagnetic fields and molecular/collective vibrational degrees of freedom.

A resonant photon can be absorbed when its energy matches an allowed transition:

```
h f_photon = ΔE_vibrational
```

The important relationship is:

```
electromagnetic field
       --absorbs/excites-->
molecular vibrational state
```

not:

```
infrared photon = molecular vibration
```

Those are different excitations linked by an interaction.

---

# 5. Electromagnetic radiation ↔ atomic/electronic transitions

Atomic and molecular spectroscopy supplies another canonical bridge.

```
photon absorption
ground/lower state + photon → excited state

photon emission
excited state → lower state + photon
```

The emitted or absorbed photon frequency is set by the energy difference:

```
ΔE = h f
```

subject to linewidth, recoil, environmental shifts, and selection rules.

This edge explains why a spectral line can tell us about an internal quantum state without implying that the atom is a tiny classical object physically oscillating back and forth at the optical frequency.

---

# 6. Photon ↔ phonon inelastic scattering

Raman, Brillouin, and optomechanical interactions form a major bridge between electromagnetic and mechanical/lattice degrees of freedom.

## Stokes-type process

A photon loses energy while creating a vibrational excitation:

```
photon_in
  → photon_out + phonon
```

with approximately:

```
f_in = f_out + f_phonon
```

## Anti-Stokes-type process

A photon gains energy while annihilating a phonon:

```
photon_in + phonon
  → photon_out
```

with approximately:

```
f_out = f_in + f_phonon
```

Momentum / wavevector matching also matters.

### Why this matters for the atlas

A THz phonon may be measured using an optical photon whose carrier frequency is hundreds of THz.

The **difference frequency**, not the absolute optical carrier frequency, can encode the mechanical excitation.

The atlas therefore needs relationships between frequencies, not merely overlapping horizontal bars.

---

# 7. Cavity optomechanics: photon ↔ mechanical mode

Cavity optomechanics explicitly couples electromagnetic radiation to mechanical motion.

In a basic radiation-pressure picture:

```
cavity photon population
  → radiation-pressure force
  → mechanical displacement
```

and:

```
mechanical displacement
  → cavity boundary / optical-path change
  → electromagnetic resonance shift
```

The standard coupled Hamiltonian contains an interaction proportional to photon number and mechanical displacement.

Under suitable pumping and resonance conditions, the interaction can be linearized and used for coherent photon–phonon state conversion, sideband cooling, amplification, sensing, and microwave–optical interfaces.

### Classification

This relationship may appear as:

- **FORCE**
- **MODULATE**
- **SCATTER_INELASTICALLY**
- **HYBRIDIZE**
- **TRANSDUCE**

depending on the operating regime.

A single arrow would lose too much physics.

---

# 8. Microwave/electrical ↔ acoustic phonon ↔ optical photon

Modern piezo-optomechanical devices show a particularly instructive three-domain bridge.

A demonstrated architecture can be summarized as:

```
microwave electric field
       ↕  piezoelectric coupling
GHz acoustic phonon
       ↕  optomechanical / photoelastic coupling
optical photon / sideband
```

Experiments have demonstrated bidirectional microwave-to-optical transduction using the acoustic mode as an intermediary.

### Important atlas rule

The project should encode:

```
microwave → phonon
phonon → optical sideband
```

and the reverse edges independently.

It should **not** draw a bare "microwave = optical" conversion arrow that hides the mechanical intermediary.

---

# 9. Photon ↔ magnon coupling

Magnons are collective spin excitations.

Microwave photons in resonators can couple coherently to magnon modes in magnetic materials.

In the strong-coupling regime the uncoupled photon and magnon modes hybridize, producing mixed normal modes.

```
cavity microwave photon
          ↕ coherent coupling
magnon / collective spin mode
```

### Consequence

When hybridization occurs, the resulting eigenmodes can no longer be described as purely photon or purely magnon.

This is one place where the visual should show **mixed states**, not a simple conversion arrow.

---

# 10. Light ↔ magnons and spin ↔ phonons

Optical Raman methods can excite or probe magnon modes.

Magnetic ordering can also affect phonon spectra, and spin–phonon coupling can produce shifts, symmetry changes, linewidth changes, avoided crossings, or hybridization depending on the material and regime.

The useful network is:

```
photon ↔ spin/magnon
spin/magnon ↔ phonon
photon ↔ phonon
```

This triangular relationship is scientifically valuable because all three modes can occupy overlapping frequency scales while remaining distinct degrees of freedom.

---

# 11. Electrons ↔ phonons and thermalization

Electron–phonon interaction is a major microscopic pathway for energy and momentum transfer in solids.

Examples include:

- electrical resistance through electron–phonon scattering;
- energy transfer from a hot electronic population to the lattice;
- phonon damping by electrons;
- superconductivity in conventional electron–phonon-mediated descriptions;
- nanoscale heat transport.

The Phase 3 edge should therefore be represented as a **population/scattering interaction**, not as a one-photon-like conversion line:

```
electronic excitations
        ↕ scattering / energy exchange
phonon population
```

In nonequilibrium systems, electrons and lattice vibrations can temporarily have different effective temperatures and relax toward equilibrium through this coupling.

---

# 12. Phonon ↔ phonon scattering

Real crystals are not perfectly harmonic.

Anharmonicity permits phonon–phonon interactions such as three-phonon processes.

Schematic examples:

```
phonon_1 → phonon_2 + phonon_3

phonon_1 + phonon_2 → phonon_3
```

subject to conservation rules, including crystal momentum modulo a reciprocal-lattice vector.

Normal and Umklapp processes influence thermal transport and phonon lifetimes.

This means the phonon row is itself a network of branches rather than a set of independent bars.

---

# 13. Thermal matter ↔ electromagnetic radiation

Thermal radiation provides a cross-cutting bridge between matter's microscopic degrees of freedom and the electromagnetic field.

```
matter at finite temperature
       → electromagnetic emission

incident electromagnetic radiation
       → absorption in matter
       → redistribution among internal degrees of freedom
```

The spectrum emitted by an ideal blackbody follows Planck's law.

### Critical distinction

"Heat" still does not become a frequency band.

Instead, thermal radiation is one **energy-transfer pathway** connecting thermal matter to the EM spectrum.

Absorbed electromagnetic energy may later appear in electronic excitations, molecular vibration, phonons, chemical changes, or re-radiation depending on the material.

---

# 14. Electromagnetic field ↔ plasma modes

Charged particles couple directly to electromagnetic fields.

Plasma modes therefore provide another rich interaction network:

```
electric field ↔ charge-density oscillation
magnetic field ↔ charged-particle gyromotion
currents ↔ electromagnetic fields
```

Resonances occur when driving frequencies match plasma or cyclotron characteristic frequencies under the relevant conditions.

Again, a plasma oscillation and an electromagnetic wave may couple or mode-convert without being universally identical.

---

# 15. Gravitational wave → mechanical/spacetime response → optical readout

Gravitational-wave detection is an ideal test of the edge ontology.

For a LIGO-type detector:

```
gravitational-wave strain
        ↓
differential optical path / test-mass separation response
        ↓
relative laser phase
        ↓
interference intensity
        ↓
photodetector electrical signal
```

The gravitational wave is **not converted into light** in the ordinary sense.

Instead, spacetime strain changes the optical path of the interferometer, and the electromagnetic field acts as the measurement carrier.

LIGO additionally uses photon radiation pressure as a calibrated actuator on its mirrors:

```
laser power modulation
   → radiation pressure
   → mirror displacement
   → interferometer response
```

This gives the atlas a clean experimentally documented example of both **READ_OUT** and **FORCE/BACK-ACTION** edges.

---

# 16. Tidal gravitational forcing → ocean motion

The ocean tide supplies a low-frequency classical bridge:

```
time-varying gravitational/tidal potential in Earth's rotating geometry
        → oceanic fluid response
```

The ocean response depends on basin geometry, Earth rotation, bathymetry, resonances, friction, and other dynamics.

The observed ocean period therefore should not be presented as a "frequency of gravity."

It is the frequency of a **driven geophysical response**.

---

# 17. Frequency relationships used by edges

The future graph should support explicit constraints.

## Same-frequency / resonant drive

```
f_drive ≈ f_mode
```

Common in:

- NMR / ESR;
- mechanical resonance;
- piezoelectric acoustic drive;
- cavity coupling.

## Quantum absorption/emission

```
ΔE = h f
```

Common in:

- atomic;
- molecular;
- hyperfine;
- nuclear transitions.

## Three-wave sum/difference relation

```
f_3 ≈ f_1 ± f_2
```

Common in:

- Brillouin processes;
- optomechanical sidebands;
- microwave–phonon–optical transduction.

## Dispersion / momentum matching

```
ω = ω(k)
```

plus a wavevector relationship such as:

```
k_in = k_out + q
```

up to reciprocal-lattice vectors where appropriate.

## Broadband force/readout

No equality of carrier frequency and measured frequency is required.

Example:

A ~100 Hz gravitational wave can modulate the phase of laser light whose optical carrier is ~10^14 Hz.

This is one of the most important conceptual lessons of Phase 3.

---

# 18. Direct versus mediated edges

Every edge should store whether it is direct or mediated.

### Direct example

```
electric field ↔ piezoelectric strain
```

### Mediated example

```
microwave
 → piezoelectric acoustic mode
 → optical sideband
```

### Readout chain example

```
gravitational-wave strain
 → optical path modulation
 → photodetection
 → electrical data
```

The final visualization should allow mediated paths to be expanded rather than hiding them behind one arrow.

---

# 19. What Phase 3 does not claim

Phase 3 does **not** establish that:

- everything that can exchange energy is one underlying substance;
- equal frequencies guarantee strong coupling;
- frequency overlap alone allows conversion;
- every interaction is reversible;
- every coupled system hybridizes;
- a detector output is physically identical to the phenomenon being detected;
- a higher-frequency mode automatically contains "more vibration";
- conservation of energy alone guarantees an allowed transition;
- an apparent frequency gap predicts a missing coupling.

Coupling requires an interaction Hamiltonian or classical interaction mechanism, plus the appropriate symmetry, conservation, resonance, overlap, and boundary conditions.

---

# 20. Phase 3 network summary

The established graph now contains examples of:

```
MECHANICAL ↔ ACOUSTIC
ELECTRICAL ↔ MECHANICAL/ACOUSTIC
EM ↔ MOLECULAR VIBRATION
EM ↔ ATOMIC/ELECTRONIC TRANSITION
PHOTON ↔ PHONON
PHOTON ↔ MECHANICAL MODE
MICROWAVE ↔ PHONON ↔ OPTICAL
PHOTON ↔ MAGNON
MAGNON ↔ PHONON
ELECTRON ↔ PHONON
PHONON ↔ PHONON
THERMAL MATTER ↔ EM RADIATION
EM ↔ PLASMA
GRAVITATIONAL WAVE → OPTICAL READOUT → ELECTRICAL SIGNAL
TIDAL GRAVITATIONAL FORCING → OCEAN RESPONSE
```

This network is not evidence of a universal substance.

It is evidence that nature contains many degrees of freedom connected by well-defined interactions.

---

## Quick sources

### Piezoelectric and electroacoustic transduction
- Lee et al., *Surface Acoustic Wave Sensors: Physics, Materials, and Applications*: https://doi.org/10.3390/s22030820
- Moon et al., *Thin-film PMUTs: a review of over 40 years of research*: https://doi.org/10.1038/s41378-023-00555-7
- Hugot et al., *Approaching optimal microwave–acoustic transduction on lithium niobate using superconducting quantum interference device arrays*, Nature Electronics (2026): https://doi.org/10.1038/s41928-025-01548-2

### Molecular / atomic absorption and emission
- NIST Molecular Spectroscopic Data: https://www.nist.gov/pml/molecular-spectroscopic-data
- NIST Atomic Spectra Database: https://physics.nist.gov/asd

### Photon–phonon and optomechanical coupling
- Aspelmeyer, Kippenberg & Marquardt, *Cavity optomechanics*, Reviews of Modern Physics 86, 1391 (2014): https://doi.org/10.1103/RevModPhys.86.1391
- Chen et al., *Optomechanical ring resonator for efficient microwave-optical frequency conversion*, Nature Communications 14, 7594 (2023): https://doi.org/10.1038/s41467-023-43393-x
- Blésin et al., *Bidirectional microwave-optical transduction based on integration of high-overtone bulk acoustic resonators and photonic circuits*, Nature Communications 15, 6096 (2024): https://doi.org/10.1038/s41467-024-49467-8

### Magnon / spin coupling
- Harder et al., *Coherent and dissipative cavity magnonics*, Journal of Applied Physics 129 (2021): https://doi.org/10.1063/5.0046202
- Pirro et al., *Advances in coherent magnonics*, Nature Reviews Materials 6, 1114–1135 (2021): https://doi.org/10.1038/s41578-021-00332-w
- NIST, *Optical Probes of 2D Magnetic Phenomena*: https://www.nist.gov/programs-projects/optical-probes-2d-magnetic-phenomena

### Thermal / phonon interactions
- Allen, *Theory of thermal relaxation of electrons in metals*, Physical Review Letters 59, 1460 (1987): https://doi.org/10.1103/PhysRevLett.59.1460
- Cepellotti et al., *Phonon hydrodynamics in two-dimensional materials*, Nature Communications 6, 6400 (2015): https://doi.org/10.1038/ncomms7400
- Maldovan, *Sound and heat revolutions in phononics*, Nature 503, 209–217 (2013): https://doi.org/10.1038/nature12608
- IUPAC Gold Book, *heat*: https://doi.org/10.1351/goldbook.H02752
- NIST, *Heat Transfer*: https://www.nist.gov/glossary-term/24981

### Plasma
- Naval Research Laboratory, *NRL Plasma Formulary*: https://suli.pppl.gov/2016/course/NRL_FORMULARY_16.pdf

### Gravitational-wave readout
- LIGO Scientific Collaboration, *Gravitational-Wave Science*: https://ligo.org/gravitational-wave-science/
- LIGO Scientific Collaboration, calibration by photon radiation pressure: https://ligo.org/science-summaries/GW150914Calibration/
- LIGO Scientific Collaboration, GW150914 interferometer explanation: https://ligo.org/science-summaries/gw150914/

### Tidal forcing
- NOAA, *How frequent are tides?*: https://oceanservice.noaa.gov/facts/tidefrequency.html
