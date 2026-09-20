# Phase 3 Source Notes — Couplings & Conversions

This document records the evidence behind the Phase 3 edge map.

The source notes deliberately distinguish:

- interaction;
- energy conversion;
- coherent hybridization;
- inelastic scattering;
- modulation;
- forcing;
- measurement/readout.

---

## P3-SRC-001 — mechanical / acoustic coupling

NIST sound reference:
- https://www.nist.gov/news-events/news/2022/06/now-hear

Supports:
- acoustic sound in air consists of compression/expansion and density/pressure changes produced by mechanical motion.

Project use:
- supports the basic mechanical-source ↔ acoustic-field boundary concept.

Caution:
- specific radiation impedance and efficiency depend on geometry and medium.

---

## P3-SRC-002 — piezoelectric electrical ↔ acoustic transduction

Lee et al., *Surface Acoustic Wave Sensors: Physics, Materials, and Applications*:
- https://doi.org/10.3390/s22030820

Supports:
- piezoelectric crystals enable electromechanical coupling;
- interdigital transducers generate/detect surface acoustic waves.

Moon et al., *Thin-film PMUTs: a review of over 40 years of research*:
- https://doi.org/10.1038/s41378-023-00555-7

Supports:
- piezoelectric micromachined ultrasonic transducers can function as transmitters, receivers, and transceivers;
- electrical actuation can generate acoustic pressure and acoustic/mechanical input can be sensed electrically.

Hugot et al., Nature Electronics (2026):
- https://doi.org/10.1038/s41928-025-01548-2

Supports:
- modern bidirectional piezoelectric microwave–acoustic transduction;
- reported 4–8 GHz operating region in the cited system.

Project use:
- establishes reciprocal electrical ↔ mechanical/acoustic edge class.

---

## P3-SRC-003 — electromagnetic ↔ molecular transitions

NIST Molecular Spectroscopic Data:
- https://www.nist.gov/pml/molecular-spectroscopic-data

NIST rotational frequency search:
- https://physics.nist.gov/PhysRefData/MolSpec/freqsearch.html

NIST IR calibration/spectroscopic resources:
- https://www.nist.gov/pml/wavenumbers-calibration-ir-spectrometers/wavenumbers-calibration-ir-spectrometers-atlas-and

Supports:
- molecules absorb/emit electromagnetic radiation at transition frequencies associated with rotational/vibrational structure.

Project use:
- EM ABSORBS/EXCITES molecular rotational/vibrational state;
- excited molecular state can EMIT radiation under allowed transitions.

---

## P3-SRC-004 — electromagnetic ↔ atomic/electronic transitions

NIST Atomic Spectra Database:
- https://physics.nist.gov/asd

Supports:
- critically evaluated wavelengths, frequencies, energy levels, and transition probabilities for atomic/ionic spectra.

Project use:
- photon absorption and emission edges associated with energy-level differences.

Caution:
- selection rules, linewidths, environment, and specific state labels must be preserved in detailed records.

---

## P3-SRC-005 — cavity optomechanics / photon ↔ mechanical mode

Aspelmeyer, Kippenberg & Marquardt, *Cavity optomechanics*, Reviews of Modern Physics 86, 1391 (2014):
- https://doi.org/10.1103/RevModPhys.86.1391

Supports:
- interaction between electromagnetic radiation and micro/nanomechanical motion;
- radiation-pressure force as a coupling mechanism;
- mechanical motion shifts/modulates cavity resonance;
- motional sidebands;
- phonon creation/annihilation processes;
- coherent photon–phonon conversion under suitable mode/pump conditions.

Project use:
- FORCE, MODULATE, SCATTER_INELASTICALLY, TRANSDUCE and HYBRIDIZE edge classes.

---

## P3-SRC-006 — integrated photon ↔ phonon conversion

Chen et al., *Optomechanical ring resonator for efficient microwave-optical frequency conversion*, Nature Communications 14, 7594 (2023):
- https://doi.org/10.1038/s41467-023-43393-x

Supports:
- co-resonant infrared photons and GHz phonons;
- optomechanical interconversion;
- piezoelectric ZnO used for phonon generation;
- phase matching and co-resonance;
- reported optical/phononic modes and conversion efficiency.

Project use:
- photon ↔ phonon TRANSDUCE/SCATTER edges;
- direct evidence that different spectral families can be engineered into a coherent conversion path.

---

## P3-SRC-007 — microwave ↔ acoustic ↔ optical chain

Blésin et al., *Bidirectional microwave-optical transduction based on integration of high-overtone bulk acoustic resonators and photonic circuits*, Nature Communications 15, 6096 (2024):
- https://doi.org/10.1038/s41467-024-49467-8

Supports:
- bidirectional microwave–optical transduction;
- piezoelectric actuator converts microwave drive into bulk acoustic waves;
- acoustic modes couple to optical modes via photoelastic/moving-boundary interactions;
- optical input can be down-converted to microwave output.

Project use:
- proves the importance of storing mediated paths rather than drawing a direct unexplained microwave↔optical edge.

---

## P3-SRC-008 — photon ↔ magnon coherent coupling

Harder et al., *Coherent and dissipative cavity magnonics*, Journal of Applied Physics 129 (2021):
- https://doi.org/10.1063/5.0046202

Supports:
- strong interaction between magnetic excitations and electrodynamic cavity modes;
- spin–photon properties can hybridize;
- coherent and dissipative coupling regimes.

Pirro et al., *Advances in coherent magnonics*:
- https://doi.org/10.1038/s41578-021-00332-w

Supports:
- magnons as collective spin-wave excitations;
- coherent manipulation and coupling framework.

Project use:
- photon ↔ magnon HYBRIDIZE / COUPLE edges.

---

## P3-SRC-009 — optical magnon probing and spin–phonon coupling

NIST, *Optical Probes of 2D Magnetic Phenomena*:
- https://www.nist.gov/programs-projects/optical-probes-2d-magnetic-phenomena

Supports:
- Raman laser light can excite and probe one- and two-magnon excitations;
- spin ordering can shift phonon frequencies and modify phonon symmetry/intensity;
- experiments investigate phonon–magnon continuum hybridization/coupling.

Project use:
- PHOTON ↔ MAGNON probe/excitation;
- MAGNON/SPIN ↔ PHONON interaction.

---

## P3-SRC-010 — electron ↔ phonon energy exchange

Allen, *Theory of thermal relaxation of electrons in metals*, Physical Review Letters 59, 1460 (1987):
- https://doi.org/10.1103/PhysRevLett.59.1460

Supports:
- electron–phonon interaction transfers energy between a hot electronic population and the lattice and produces temperature relaxation.

Maldovan, *Sound and heat revolutions in phononics*, Nature 503, 209–217 (2013):
- https://doi.org/10.1038/nature12608

Supports:
- phonons participate centrally in thermal transport and interact with other carriers in materials.

Project use:
- ELECTRON ↔ PHONON THERMALIZE / SCATTER edge.

Caution:
- coupling strength and relative carrier contributions are material- and temperature-dependent.

---

## P3-SRC-011 — phonon ↔ phonon interaction

Maldovan, *Sound and heat revolutions in phononics*:
- https://doi.org/10.1038/nature12608

Cepellotti et al., *Phonon hydrodynamics in two-dimensional materials*, Nature Communications 6, 6400 (2015):
- https://doi.org/10.1038/ncomms7400

Supports:
- three-phonon processes include Normal and Umklapp events;
- Normal processes conserve crystal momentum while Umklapp processes transfer crystal momentum by a reciprocal-lattice vector;
- the distinction matters for heat transport.

Supporting lattice-dynamics background:
- Wei & Chou: https://doi.org/10.1103/PhysRevLett.69.2799
- Holt et al.: https://doi.org/10.1103/PhysRevLett.83.3317

Project use:
- anharmonic phonon scattering is represented as a many-mode SCATTER / THERMALIZE relation, not one fixed conversion arrow.

---

## P3-SRC-012 — thermal matter ↔ electromagnetic radiation

IUPAC Gold Book, *heat*:
- https://doi.org/10.1351/goldbook.H02752

NIST, *Heat Transfer*:
- https://www.nist.gov/glossary-term/24981

NIST blackbody / Planck-law metrology material:
- https://www.nist.gov/system/files/documents/iaao/SIM-Metrology-School-Optical-Metrology-Y-Ohno-2.pdf

Supports:
- heat transfer mechanisms include radiation;
- thermal electromagnetic emission has a temperature-dependent spectrum described through blackbody/Planck-law physics.

Project use:
- THERMAL MATTER → EM EMIT;
- EM → MATTER ABSORB followed by material-dependent redistribution.

---

## P3-SRC-013 — electromagnetic ↔ plasma modes

Naval Research Laboratory, *NRL Plasma Formulary*:
- https://suli.pppl.gov/2016/course/NRL_FORMULARY_16.pdf

Supports:
- plasma frequencies, gyrofrequencies and electromagnetic/plasma characteristic scales depend on density, charge, mass and magnetic field.

Project use:
- electromagnetic field ↔ charged-particle/plasma mode DRIVE / RESONATE relation.

Caution:
- "plasma wave" covers many branches with different dispersion relations and polarization.

---

## P3-SRC-014 — gravitational wave → optical readout

LIGO Scientific Collaboration, *Gravitational-Wave Science*:
- https://ligo.org/gravitational-wave-science/

Supports:
- gravitational waves produce differential changes in optical travel time/arm response;
- laser interferometry converts that path/phase effect into a measured light-intensity variation at a photodetector.

LIGO GW150914 science summary:
- https://ligo.org/science-summaries/gw150914/

Supports:
- arm lengths/optical phase respond to passing gravitational-wave strain.

Project use:
- GW → optical-path modulation → interference READ_OUT chain.

Critical interpretation:
- this is not a claim that a gravitational wave converts into an optical photon.

---

## P3-SRC-015 — photon radiation pressure → mirror motion

LIGO Scientific Collaboration, GW150914 calibration:
- https://ligo.org/science-summaries/GW150914Calibration/

Supports:
- modulated laser power produces photon radiation pressure on a 40 kg end mirror;
- the force causes a calibrated mechanical displacement sensed by the interferometer.

Project use:
- PHOTON/EM → MECHANICAL FORCE edge.

This is a useful reciprocal-side example to the GW optical readout chain.

---

## P3-SRC-016 — tidal forcing → ocean response

NOAA, *How frequent are tides?*:
- https://oceanservice.noaa.gov/facts/tidefrequency.html

Supports:
- lunar/solar gravitational forcing and Earth rotation produce periodic tidal response.

Project use:
- GRAVITATIONAL/TIDAL FORCING → OCEAN FLUID RESPONSE.

Critical interpretation:
- the ocean tide's observed frequency is a driven-response frequency, not a unique intrinsic frequency of gravity.

---

# Phase 3 evidence conclusion

A coupling edge requires more metadata than:

```
source → target
```

The minimum scientifically useful edge is closer to:

```yaml
id: P3-E...
source: ...
target: ...
interaction_type: ...
mediator: ...
directionality: ...
energy_transfer: ...
coherent: ...
frequency_condition: ...
momentum_condition: ...
regime: ...
evidence_status: ...
source_ids: [...]
caveat: ...
```

That schema is the main structural result of Phase 3.
