# Phase 2 — Known-Spectrum Catalog

**Status:** Phase 2 research catalog  
**Purpose:** Populate the project with established physical phenomena and defensible frequency information without turning contextual ranges into false laws of nature.

## How to read this catalog

A number in hertz can mean several different things. Phase 2 therefore uses these range types:

- **PHYSICAL MODE / DISPERSION** — frequencies actually supported by a specified physical system or mode family.
- **CHARACTERISTIC LINE** — a particular transition or resonance.
- **CONVENTIONAL BAND** — a human-defined name or engineering division.
- **BIOLOGICAL SENSITIVITY** — what a biological detector such as the human ear can sense.
- **OBSERVED / REPRESENTATIVE RANGE** — values reported for a specified class of observations.
- **DETECTOR BAND** — where a particular instrument or technique has sensitivity.
- **PARAMETER-DEPENDENT** — no universal range exists; frequency follows system parameters.
- **NOT A SIMPLE Hz AXIS** — the phenomenon oscillates, but a single observer-independent temporal frequency would be misleading.

The table below intentionally allows blanks. A blank numeric range is scientifically preferable to a fabricated one.

---

## 1. Planetary, oceanic, atmospheric, and geophysical oscillations

| Entry | Frequency information | Range type | What oscillates? | Key caution |
|---|---:|---|---|---|
| Semidiurnal ocean tide | **~2.24×10^-5 Hz** (12 h 25 min between high tides) | characteristic geophysical period | ocean surface / water mass under tidal forcing | one important tidal constituent scale, not the full ocean-wave spectrum |
| Diurnal/lunar-day tidal scale | **~1.12×10^-5 Hz** (24 h 50 min lunar day) | characteristic geophysical period | ocean response to Earth–Moon geometry | not a universal tide frequency |
| Equatorial atmospheric waves | roughly **5×10^-7 to 4×10^-6 Hz** for periods of a few days to several weeks | observed/representative | atmospheric pressure, wind, geopotential and thermodynamic fields | Kelvin, Rossby, mixed Rossby–gravity and inertia–gravity modes have different dispersion relations |
| Ocean surface wind waves / swell | approximately **0.05–0.2 Hz** corresponds to 5–20 s periods used in NOAA/WMO wave-period reporting | observational / practical | free-surface elevation and fluid velocity | sea states extend outside this representative interval |
| Earthquake ground motion | about **0.1–30 Hz** in the cited USGS ground-shaking context | observed/representative | elastic displacement/strain in Earth | not the full seismic spectrum; larger earthquakes and Earth normal modes extend lower |

### Why these belong together but are not identical

These are all mechanical or fluid/geophysical systems, but their restoring forces differ: gravity, rotation/Coriolis effects, elasticity, pressure, buoyancy, and boundary geometry can all matter.

A tide, atmospheric Rossby wave, ocean swell, and seismic P wave should therefore be separate entries even when frequency ranges overlap.

---

## 2. Acoustics and macroscopic mechanical vibration

| Entry | Frequency information | Range type | What oscillates? | Key caution |
|---|---:|---|---|---|
| Infrasound | **below 20 Hz** by common acoustic convention; volcanic monitoring often emphasizes **0.5–20 Hz** | conventional + observational | pressure/density/particle motion in a material medium | 20 Hz is tied to hearing convention, not a hard physical boundary |
| Human auditory sensitivity | approximately **20 Hz–20 kHz** | biological sensitivity | auditory system responding to acoustic pressure | this is an overlay, not the existence range of sound |
| Audible sound | commonly labeled **20 Hz–20 kHz** because of human hearing | conventional / biological | pressure, density and displacement in matter | other species and instruments hear/detect outside it |
| Ultrasound | **above 20 kHz** by common usage; medical devices commonly operate into MHz | conventional | acoustic pressure/displacement in matter | no universal upper cutoff for acoustic waves |
| Structural/mechanical resonance | **no universal band** | parameter-dependent | displacement, strain, rotation or deformation of a structure | geometry, mass, stiffness, boundary conditions and scale set the modes |

### Important boundary

Sound does not turn into electromagnetic radiation merely by raising its frequency. Acoustic waves remain mechanical modes of matter.

---

## 3. Lattice vibrations, phonons, magnons, and collective condensed-matter modes

| Entry | Frequency information | Range type | What oscillates? | Key caution |
|---|---:|---|---|---|
| Acoustic phonons | approach **0 Hz** in the long-wavelength limit for acoustic branches; upper frequencies are material-dependent | physical dispersion | collective atomic displacement | "phonon frequency range" must name a material and branch |
| Silicon phonons | representative bulk Si dispersion extends from near 0 to roughly **15 THz** | material-specific physical dispersion | Si lattice normal modes | **not** a universal phonon limit |
| Silicon optical phonon | around **15–16 THz** in cited experiments/calculations | characteristic material mode | relative sublattice atomic motion | material-specific |
| Magnons / spin waves | strongly material-, field-, and wavevector-dependent; YIG examples span **~7 GHz** dipolar magnons to **~7 THz** near the Brillouin-zone edge | material-specific physical dispersion | collective spin/magnetization dynamics | not a universal magnon band |
| Plasmons / plasma collective modes | **parameter-dependent** | physical dispersion / parameter-dependent | charge density and electromagnetic fields | density, geometry, material and wavevector determine frequency |

The lesson here is important for the eventual visual: a material can possess **many branches at once**. A crystal should never receive one single "vibrational frequency."

---

## 4. Molecular rotation and vibration

| Entry | Frequency information | Range type | What changes? | Key caution |
|---|---:|---|---|---|
| Molecular rotational transitions | NIST critically evaluated catalogs are primarily in **radio/microwave, MHz–GHz** regions, including centimeter and millimeter wavelengths | transition frequencies | molecular rotational quantum state | no universal molecular-rotation range |
| Low-frequency molecular/collective vibration | commonly probed in the **terahertz** region | observed spectroscopy domain | intermolecular and intramolecular coordinates, librations, lattice-like motions | photon probe frequency matches an energy transition; photon and vibration are not the same excitation |
| Representative NIST infrared molecular calibration spectra | cited sets cover **488–3120 cm^-1** and **4000–4400 cm^-1**; the overall envelope is about **1.46×10^13–1.32×10^14 Hz** | dataset / observed spectroscopy domain | molecular vibrational/electronic transition response | the gap between the cited calibration regions is preserved; this is not a universal molecular-vibration band |
| Molecular electronic transitions | span visible/UV and beyond depending on species and state | transition frequencies | electronic quantum state of molecule | must be cataloged species-by-species or transition-by-transition |

Molecules have rotational, vibrational, electronic, spin, and sometimes tunneling structure simultaneously. They do not have one universal "molecular frequency."

---

## 5. Atomic, hyperfine, spin, and nuclear transitions

| Entry | Frequency information | Range type | What changes? | Key caution |
|---|---:|---|---|---|
| Atomic electronic transitions | span broad EM regions from infrared/visible/UV into X-ray for inner-shell processes | transition frequencies | atomic electronic state | no single atomic-transition band |
| Neutral-hydrogen 21 cm hyperfine line | approximately **1.420 GHz** | characteristic line | hyperfine spin configuration of ground-state H | transition frequency, not mechanical vibration of the atom |
| NMR | field- and nucleus-dependent; NIST operates representative **700 and 800 MHz** instruments | parameter-dependent resonance | nuclear spin state / magnetization | resonance scales with magnetic field and gyromagnetic ratio |
| ESR/EPR | field- and species-dependent; NIST examples use **5–25 GHz**, and instruments at **9 and 34 GHz** | parameter-dependent resonance | electron spin state / magnetization | no universal ESR frequency |
| Nuclear gamma transition — Fe-57 Mössbauer example | **14.4 keV ≈ 3.48×10^18 Hz** photon frequency | characteristic line | nuclear quantum state | representative nuclear line, not a universal nuclear band |
| Other nuclear transitions / collective modes | system-specific, often high-energy photon or nuclear-mode frequencies | transition/mode frequencies | nuclear state or collective nuclear degree of freedom | requires nuclide and transition specification |

The atlas should eventually let the user distinguish **resonance frequency**, **transition frequency**, and **mechanical oscillation** instead of rendering all three as the same category.

---

## 6. Electromagnetic spectrum

The electromagnetic row is unusual because its named bands genuinely are regions of one underlying family: electromagnetic radiation.

The following are **approximate conventional boundaries** from NASA/GSFC, not hard walls:

| EM region | Approximate frequency |
|---|---:|
| Radio | **< 3×10^9 Hz** |
| Microwave | **3×10^9–3×10^11 Hz** |
| Infrared | **3×10^11–4×10^14 Hz** |
| Visible / optical | **4×10^14–7.5×10^14 Hz** |
| Ultraviolet | **7.5×10^14–3×10^16 Hz** |
| X-ray | **3×10^16–3×10^19 Hz** |
| Gamma ray | **> 3×10^19 Hz** |

### AM and FM

AM and FM do **not** identify different fundamental wave families.

They are modulation methods applied to electromagnetic carrier waves. The atlas should represent:

- carrier frequency;
- modulation frequency;
- encoded signal;

as different fields.

---

## 7. Plasma oscillations

Plasma physics is a strong example of why some rows cannot have fixed endpoints.

For an electron plasma in the NRL Plasma Formulary convention:

```
f_pe ≈ 8.98 × 10^3 √(n_e) Hz
```

when electron density `n_e` is expressed in cm^-3.

The same reference gives an electron gyrofrequency:

```
f_ce ≈ 2.80 × 10^6 B Hz
```

when magnetic field `B` is expressed in gauss.

Therefore:

> **Plasma frequency is not one band. It is a function of plasma parameters.**

The same applies to ion plasma frequencies, gyrofrequencies, Alfvénic modes, magnetosonic modes, Langmuir waves, and many other plasma branches.

The eventual atlas should be able to render formulas and parameter sliders rather than forcing every plasma mode into a static bar.

---

## 8. Matter waves

Matter-wave behavior is experimentally established.

For a particle with momentum `p`:

```
λ = h / p
```

However, there is **no universal matter-wave frequency range** analogous to the conventional EM spectrum.

A particle's wavelength and phase evolution depend on its state, momentum, energy, and frame. Electron diffraction is therefore included as an established phenomenon, while a single "matter frequency band" is rejected.

### Catalog decision

**Matter waves belong in the atlas, but not as one fixed horizontal bar.**

Their entries should be generated from physical state variables or concrete experiments.

---

## 9. Neutrino flavor oscillation

Neutrino oscillation is established physics but needs special handling.

In vacuum, the oscillation phase depends on the mass-squared differences, propagation distance `L`, and neutrino energy `E`. Particle Data Group treatments express the oscillatory behavior in terms of **L/E** and an oscillation length.

Therefore it would be misleading to give "neutrino oscillation" one fixed Hz band.

### Catalog decision

Classify neutrino oscillation as:

**ESTABLISHED — OSCILLATORY, BUT NOT A SIMPLE UNIVERSAL TEMPORAL-FREQUENCY BAR**

Later visualization should represent:

- flavor;
- mass-eigenstate splitting;
- neutrino energy;
- propagation distance / oscillation length;
- frame/context.

This is a useful test case for whether the atlas is genuinely physical rather than merely a collection of numbers ending in "Hz."

---

## 10. Gravitational-wave spectrum

Gravitational waves have a true frequency spectrum, but the familiar bands are often **detector/observing bands**, not existence limits.

| Observational regime | Approximate frequency | Meaning |
|---|---:|---|
| Pulsar timing arrays | **~10^-9–10^-7 Hz** | detector / observational band |
| LISA low-frequency space band | roughly **10^-4–10^-1 Hz** (0.1 mHz–0.1 Hz in NASA mission material) | detector / mission band |
| Advanced LIGO calibrated/design domain | approximately **10–5000 Hz** in cited detector documentation | detector band |
| Continuous-wave LIGO searches | examples include **10–1000 Hz** | analysis/search band |
| MHz–GHz gravitational-wave searches | discussed in scientific reviews as high-frequency search territory | proposed/experimental search domain, **not an established astrophysical detection band** |

### Critical distinction

A detector band is not where gravitational waves are "allowed to exist."

It means:

> this observing technique can meaningfully search that region.

That distinction will become central in Phase 4 and Phase 5.

---

# Cross-family overlap examples

The Phase 2 catalog already demonstrates why the project needs rows.

### Around 10 Hz

Potentially relevant phenomena include:

- seismic ground motion;
- acoustic/infrasonic waves;
- structural resonances;
- gravitational waves in the lower edge of terrestrial-interferometer territory.

Same number. Different physics.

### Around 1 GHz

Potentially relevant phenomena include:

- microwave electromagnetic radiation;
- molecular rotational transitions;
- spin/hyperfine transitions;
- some magnon modes;
- parameter-dependent plasma phenomena.

Again: same frequency, different degree of freedom.

### Around 1–10 THz

Potentially relevant phenomena include:

- terahertz electromagnetic radiation;
- lattice/phonon modes;
- molecular collective vibrations;
- high-frequency magnons in some materials.

This is exactly the kind of overlap a one-dimensional spectrum hides.

---

# Things Phase 2 explicitly refuses to turn into fixed bands

The following are real physical concepts but **do not receive a universal numeric band**:

- structural resonance;
- phonons in general;
- magnons in general;
- plasmons in general;
- plasma oscillations in general;
- molecular rotation in general;
- molecular vibration in general;
- atomic transitions in general;
- NMR/ESR in general;
- nuclear transitions in general;
- matter waves;
- neutrino oscillation.

They require system parameters or a specific transition.

This is not missing data. It is part of the scientific structure of the atlas.

---

# Phase 2 scientific conclusion

The known spectrum is best represented as a mixture of:

1. **continuous families** — e.g. electromagnetic radiation;
2. **dispersive mode families** — e.g. phonons, magnons, plasma waves;
3. **discrete transitions** — e.g. atomic, molecular, hyperfine and nuclear lines;
4. **system resonances** — e.g. mechanical structures;
5. **geophysical continua and characteristic periods**;
6. **detector windows** — e.g. gravitational-wave observing bands;
7. **oscillatory quantum phenomena that are not honestly represented by one fixed temporal Hz range** — notably neutrino oscillation.

That structure should drive the eventual visual design.

## Quick sources

### Ocean / atmosphere / geophysics
- NOAA, tide frequency: https://oceanservice.noaa.gov/facts/tidefrequency.html
- NOAA, tidal cycle detail: https://oceanservice.noaa.gov/education/tutorial_tides/media/supp_tide05.html
- NOAA repository, equatorial waves review: https://repository.library.noaa.gov/view/noaa/48990
- NOAA World Ocean Database wave-period codes: https://www.ncei.noaa.gov/access/world-ocean-database/CODES/s_20_wave_period.html
- USGS, earthquake ground-motion frequencies: https://www.usgs.gov/programs/earthquake-hazards/what-are-effects-earthquakes

### Acoustics
- USGS, infrasound for volcano monitoring: https://doi.org/10.3133/sir20245062C
- USGS, human hearing / seismic context: https://www.usgs.gov/programs/earthquake-hazards/cool-earthquake-facts
- FDA Medical Acoustics Program: https://www.fda.gov/medical-devices/medical-device-regulatory-science-research-programs-conducted-osel/medical-acoustics-program-research-medical-acoustic-devices

### Condensed matter
- Holt et al., silicon phonon dispersion: https://doi.org/10.1103/PhysRevLett.83.3317
- Liao et al., silicon phonon transport/dispersion: https://doi.org/10.1103/PhysRevLett.114.115901
- Pirro et al., *Advances in coherent magnonics*: https://doi.org/10.1038/s41578-021-00332-w
- Chumak et al., YIG magnon frequency examples: https://doi.org/10.1038/ncomms5700
- NIST terahertz spectroscopy: https://www.nist.gov/pml/applied-physics-division/molecular-and-biophotonics/state-resolved-terahertz-spectroscopy

### Molecular / atomic / spin / nuclear
- NIST Molecular Spectroscopic Data: https://www.nist.gov/pml/molecular-spectroscopic-data
- NIST molecular frequency search: https://physics.nist.gov/PhysRefData/MolSpec/freqsearch.html
- NIST infrared calibration spectra: https://www.nist.gov/pml/wavenumbers-calibration-ir-spectrometers/wavenumbers-calibration-ir-spectrometers-atlas-and
- NIST Atomic Spectra Database: https://physics.nist.gov/asd
- NIST Chemistry WebBook electronic-energy-level search: https://webbook.nist.gov/chemistry/bh-ser/
- NASA, hydrogen 21 cm line: https://imagine.gsfc.nasa.gov/educators/galaxies/imagine/hidden_objects.html
- NIST NMR facility: https://www.nist.gov/mml/csd/biochemical-and-exposure-science-group/nuclear-magnetic-resonance-spectroscopy-nmr-facility
- NIST ESR project: https://www.nist.gov/programs-projects/electron-spin-resonance-single-atom-level
- Shakhmuratov, Vagizov & Kocharovskaya, Fe-57 14.4 keV gamma-photon context: https://doi.org/10.1103/PhysRevA.84.043820

### Electromagnetic
- NASA/GSFC frequency/wavelength chart: https://imagine.gsfc.nasa.gov/science/toolbox/spectrum_chart.html
- NASA electromagnetic spectrum overview: https://science.nasa.gov/asset/webb/the-electromagnetic-spectrum/

### Plasma
- Naval Research Laboratory, *NRL Plasma Formulary* (hosted by PPPL): https://suli.pppl.gov/2016/course/NRL_FORMULARY_16.pdf

### Matter waves / neutrinos
- Davisson & Germer, electron diffraction: https://doi.org/10.1103/PhysRev.30.705
- Particle Data Group, 2026 review hub: https://pdg.lbl.gov/2026/reviews/astro-cosmo.html

### Gravitational waves
- Romano & Cornish, stochastic GW detection review: https://doi.org/10.1007/s41114-017-0004-1
- NASA LISA reference documents: https://lisa.nasa.gov/documentsReference.html
- Advanced LIGO sensitivity documentation: https://dcc-backup.ligo.org/LIGO-P1500260/public
- LIGO continuous-wave search example: https://ligo.org/science-summaries/O1AllskyFullBand/
- Aggarwal et al., MHz–GHz GW review: https://doi.org/10.1007/s41114-021-00032-5
