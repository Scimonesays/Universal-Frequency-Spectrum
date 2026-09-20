# Phase 2 Source Notes

This file records the evidence used to build the first known-spectrum catalog.

## Source policy for Phase 2

A source can support one of several different kinds of statements:

- **definition** — e.g. infrasound below 20 Hz;
- **conventional boundary** — e.g. approximate EM band divisions;
- **measured example** — e.g. a silicon optical phonon near 15 THz;
- **material-specific dispersion** — e.g. YIG magnon modes;
- **database coverage** — e.g. NIST molecular rotational lines;
- **detector sensitivity/search band** — e.g. LIGO or LISA;
- **governing relation** — e.g. electron plasma frequency depends on density.

Phase 2 does not convert one category into another.

---

## P2-SRC-001 — NOAA tidal frequency

URL: https://oceanservice.noaa.gov/facts/tidefrequency.html

Supports:
- lunar day = 24 h 50 min;
- two high and two low tides per lunar day for common semidiurnal coastal patterns;
- tides are long ocean waves driven by lunar/solar gravity.

Derived values used by the project:
- 24 h 50 min -> ~1.12×10^-5 Hz;
- 12 h 25 min -> ~2.24×10^-5 Hz.

The derived values are arithmetic conversions, not additional NOAA claims.

---

## P2-SRC-002 — NOAA equatorial-wave literature

URL: https://repository.library.noaa.gov/view/noaa/48990

Supports:
- equatorial waves include Kelvin, equatorial Rossby, mixed Rossby–gravity and inertia–gravity waves;
- synoptic/planetary equatorial disturbances can have periods from a few days to several weeks.

Project handling:
- approximate conversion to ~5×10^-7–4×10^-6 Hz is labeled representative, not universal.

---

## P2-SRC-003 — NOAA/WMO ocean wave-period coding

URL: https://www.ncei.noaa.gov/access/world-ocean-database/CODES/s_20_wave_period.html

Supports practical observational categories:
- <=5 s;
- 6–7 s;
- 8–9 s;
- ...
- 20–21 s;
- >21 s.

Project handling:
- 5–20 s (~0.05–0.2 Hz) is shown only as a representative familiar surface-wave interval, not an ocean-wave existence limit.

---

## P2-SRC-004 — USGS earthquake frequencies

URL: https://www.usgs.gov/programs/earthquake-hazards/what-are-effects-earthquakes

Supports:
- cited ground shaking from fault rupture can span about 0.1–30 Hz.

Additional USGS context:
- https://www.usgs.gov/observatories/hvo/news/volcano-watch-good-vibrations-earths-music
- https://www.usgs.gov/programs/earthquake-hazards/cool-earthquake-facts

Supports:
- smaller local earthquakes commonly concentrate energy around 1–15 Hz;
- larger earthquakes contain lower frequencies;
- whole-Earth free oscillations exist;
- human hearing is commonly approximated as 20–20,000 Hz.

---

## P2-SRC-005 — USGS infrasound

DOI landing page:
- https://doi.org/10.3133/sir20245062C

Supports:
- infrasound is below 20 Hz;
- volcanic acoustic signals can span very-long-period to audible;
- volcanic infrasound monitoring often emphasizes roughly 0.5–20 Hz.

---

## P2-SRC-006 — FDA medical acoustics

URL:
- https://www.fda.gov/medical-devices/medical-device-regulatory-science-research-programs-conducted-osel/medical-acoustics-program-research-medical-acoustic-devices

Supports:
- medical ultrasound devices include devices operating above 20 kHz;
- practical medical acoustic devices span much higher frequencies depending on application.

Project handling:
- "ultrasound >20 kHz" is a convention, not a theoretical upper limit.

---

## P2-SRC-007 — silicon phonons

Holt et al.:
- https://doi.org/10.1103/PhysRevLett.83.3317

Liao et al.:
- https://doi.org/10.1103/PhysRevLett.114.115901

Supports:
- phonon dispersion is branch- and wavevector-dependent;
- silicon provides a concrete material-specific example with branches extending from the acoustic zero-frequency limit to optical modes of order 15 THz.

Project handling:
- the ~15 THz scale is explicitly tagged **silicon**, never "all phonons."

---

## P2-SRC-008 — magnons

Pirro et al., *Advances in coherent magnonics*:
- https://doi.org/10.1038/s41578-021-00332-w

Chumak et al., *Magnon transistor for all-magnon data processing*:
- https://doi.org/10.1038/ncomms5700

Supports:
- spin waves are collective magnetic excitations whose quanta are magnons;
- a cited YIG experiment uses dipolar magnons around 7 GHz;
- cited neutron-scattering context places the first-Brillouin-zone edge around 7 THz in YIG.

Project handling:
- 7 GHz–7 THz is an **illustrative YIG span**, not a universal magnon band.

---

## P2-SRC-009 — molecular rotational spectra

NIST molecular data:
- https://www.nist.gov/pml/molecular-spectroscopic-data
- https://physics.nist.gov/PhysRefData/MolSpec/freqsearch.html
- https://physics.nist.gov/PhysRefData/MolSpec/Triatomic/Html/intro.html

Supports:
- critically evaluated rotational transition frequencies;
- major coverage in radio/microwave centimeter and millimeter regions;
- searchable MHz/GHz transition data.

Project handling:
- no universal rotational endpoints are asserted.

---

## P2-SRC-010 — molecular vibration

NIST THz spectroscopy:
- https://www.nist.gov/pml/applied-physics-division/molecular-and-biophotonics/state-resolved-terahertz-spectroscopy

NIST infrared calibration data:
- https://www.nist.gov/pml/wavenumbers-calibration-ir-spectrometers/wavenumbers-calibration-ir-spectrometers-atlas-and

Supports:
- THz radiation probes low-frequency intermolecular/intramolecular vibrational dynamics;
- NIST IR calibration spectral sets cover 488–3120 cm^-1 and 4000–4400 cm^-1 for selected molecules.

Project arithmetic:
- 488 cm^-1 ≈ 1.46×10^13 Hz;
- 4400 cm^-1 ≈ 1.32×10^14 Hz.

These are dataset limits, not universal vibrational limits.

---

## P2-SRC-011 — atomic and molecular electronic transitions

NIST Atomic Spectra Database:
- https://physics.nist.gov/asd
- https://physics.nist.gov/PhysRefData/ASD/Html/lineshelp.html

NIST Chemistry WebBook electronic-energy-level search:
- https://webbook.nist.gov/chemistry/bh-ser/

Supports:
- critically evaluated atomic/ionic wavelengths, wavenumbers, photon energies and frequencies;
- atomic spectra extend over broad electromagnetic regions;
- inner-shell excitations can reach soft-X-ray territory.

Project handling:
- atomic transitions receive transition records, not one "atomic band."

---

## P2-SRC-012 — hydrogen hyperfine line

NASA:
- https://imagine.gsfc.nasa.gov/educators/galaxies/imagine/hidden_objects.html

Supports:
- neutral atomic hydrogen's 21 cm line is about 1420 MHz.

NIST historical frequency-standard context:
- https://tf.nist.gov/general/pdf/584.pdf

Supports:
- hydrogen hyperfine resonance at about 1420 MHz.

---

## P2-SRC-013 — NMR

NIST NMR facility:
- https://www.nist.gov/mml/csd/biochemical-and-exposure-science-group/nuclear-magnetic-resonance-spectroscopy-nmr-facility

Supports:
- NIST operates representative 700 and 800 MHz NMR spectrometers.

Project handling:
- these are instrument examples; NMR frequency depends on nucleus and magnetic field.

---

## P2-SRC-014 — ESR/EPR

NIST single-atom ESR:
- https://www.nist.gov/programs-projects/electron-spin-resonance-single-atom-level

Supports:
- ESR drives transitions using an oscillating field matched to an energy-level splitting;
- cited STM implementation commonly uses RF around 5–25 GHz.

NIST EPR microresonators:
- https://www.nist.gov/publications/scalable-microresonators-room-temperature-detection-electron-spin-resonance-dilute-sub

Supports:
- EPR measurements at 9 GHz and 34 GHz.

---

## P2-SRC-015 — Fe-57 nuclear transition

Shakhmuratov, Vagizov & Kocharovskaya, *Radiation burst from a single γ-photon field*, Physical Review A 84, 043820 (2011):
- https://doi.org/10.1103/PhysRevA.84.043820

Supports:
- Fe-57 Mössbauer spectroscopy using the 14.4 keV gamma-photon transition.

Project arithmetic:
- E/h for 14.4 keV is approximately 3.48×10^18 Hz.

Project handling:
- this is a single representative nuclear transition.

---

## P2-SRC-016 — electromagnetic spectrum

NASA/GSFC:
- https://imagine.gsfc.nasa.gov/science/toolbox/spectrum_chart.html

Supports approximate conventional boundaries:
- radio <3×10^9 Hz;
- microwave 3×10^9–3×10^11 Hz;
- infrared 3×10^11–4×10^14 Hz;
- optical 4×10^14–7.5×10^14 Hz;
- UV 7.5×10^14–3×10^16 Hz;
- X-ray 3×10^16–3×10^19 Hz;
- gamma >3×10^19 Hz.

NASA overview:
- https://science.nasa.gov/asset/webb/the-electromagnetic-spectrum/

Supports:
- these regions are all electromagnetic radiation.

---

## P2-SRC-017 — plasma frequencies

NRL Plasma Formulary, hosted by PPPL:
- https://suli.pppl.gov/2016/course/NRL_FORMULARY_16.pdf

Supports parameter relations including, in its stated Gaussian-cgs convention:

`f_pe = 8.98×10^3 n_e^(1/2) Hz`

and

`f_ce = 2.80×10^6 B Hz`

with the density and magnetic-field units specified in the formulary.

Project handling:
- plasma modes are parameterized functions, not one fixed frequency band.

---

## P2-SRC-018 — matter waves

Davisson & Germer:
- https://doi.org/10.1103/PhysRev.30.705

Supports:
- electron diffraction as foundational evidence of wave behavior of matter.

Project handling:
- de Broglie wavelength is state/momentum dependent; no universal Hz band is assigned.

---

## P2-SRC-019 — neutrino oscillations

Particle Data Group 2026 review hub:
- https://pdg.lbl.gov/2026/reviews/astro-cosmo.html

PDG neutrino review framework expresses vacuum oscillation phase and oscillation length using mass-squared differences and L/E.

Project handling:
- neutrino flavor oscillation is established but is not represented as one fixed temporal-frequency bar.

---

## P2-SRC-020 — gravitational-wave bands

Pulsar timing:
- Romano & Cornish, Living Reviews in Relativity: https://doi.org/10.1007/s41114-017-0004-1
- reports PTA sensitivity/searches around ~10^-9–10^-7 Hz.

LISA:
- https://lisa.nasa.gov/documentsReference.html
- NASA reference material describes a broad low-frequency band around 0.1 mHz–0.1 Hz for LISA.

Advanced LIGO:
- https://dcc-backup.ligo.org/LIGO-P1500260/public
- detector designed for approximately 10 Hz–5 kHz.

Continuous-wave search example:
- https://ligo.org/science-summaries/O1AllskyFullBand/
- example search of 10–1000 Hz.

High-frequency GW review:
- https://doi.org/10.1007/s41114-021-00032-5
- reviews experimental challenges and opportunities in MHz–GHz GW searches.

Project handling:
- these are detector/search regimes, not hard physical existence boundaries.

---

# Phase 2 source conclusion

The strongest recurring lesson from the sources is that the final atlas requires at least three numeric concepts:

```
physical_supported_range
observed_or_example_range
detector_or_conventional_range
```

Collapsing those into a single `frequency_min` / `frequency_max` pair would create false science.


---

## P2-SRC-021 — mechanical / structural resonance

NIST, *A New Harmony: NIST Researchers Develop a Universal Method for Calculating the Resonances of Oscillators* (2021):
- https://www.nist.gov/news-events/news/2021/09/new-harmony-nist-researchers-develop-universal-method-calculating

Supports:
- physical oscillators possess system-dependent natural/resonance frequencies;
- resonance frequency depends on properties of the oscillator/system;
- mechanical resonators are concrete examples of parameter-dependent resonance.

Additional NIST structural-dynamics context:
- https://www.nist.gov/noac/technology/mass-force-and-acceleration/optomechanical-accelerometers

Supports:
- dimensions and support-beam properties determine a mechanical structure's fundamental resonance frequency.

Project handling:
- no universal structural-resonance band is asserted;
- geometry, mass, stiffness, support/boundary conditions and material properties determine the modes.
