# Glossary

Working definitions for the Universal Frequency Spectrum project.

## Frequency

Rate at which a periodic process repeats.

`f = 1/T`

SI unit: hertz (Hz), equivalent to s⁻¹.

## Period

Time required for one cycle of a periodic process.

`T = 1/f`

## Angular frequency

Frequency expressed in radians per unit time.

`ω = 2πf`

## Wavelength

Spatial distance between equivalent phase points of a periodic traveling wave.

For a simple propagating mode:

`λ = v_p / f`

where `v_p` is phase velocity.

## Wave

A propagating or spatially structured disturbance described by fields or state variables. Different wave families can involve different physical quantities.

## Oscillation

Repeated variation of one or more system variables around or through a state.

Not every oscillation is a freely propagating wave.

## Mode

A characteristic pattern of motion or field variation allowed by a system, often with a corresponding eigenfrequency and wavevector.

## Normal mode

A collective mode in which the system's participating degrees of freedom oscillate with a definite pattern and frequency in the linearized approximation.

## Resonance

Enhanced response when a system is driven near one of its characteristic frequencies or under another matching condition.

## Spectrum

Distribution of a signal, excitation, response, or power across frequency, wavelength, energy, wavevector, or another conjugate variable.

## Medium

Material through which a disturbance propagates.

A material medium is required for ordinary sound. It is not required for electromagnetic radiation in vacuum.

## Field

A physical quantity defined over space and time.

Examples include electromagnetic fields and, in general relativity, the spacetime metric field. Quantum field theory promotes fields to quantum operators / quantum degrees of freedom.

## Degree of freedom

An independent variable needed to describe a system's state or dynamics.

The phrase "what is oscillating?" is often shorthand for "which physical degree of freedom carries this variation?"

## Dispersion relation

Relationship among frequency, angular frequency, wavelength, wavevector, momentum, and/or energy for allowed excitations.

Common form:

`ω = ω(k)`

The form depends on the physical system.

## Phase velocity

Speed at which a point of constant phase propagates.

`v_p = ω/k`

## Group velocity

Speed associated with the propagation of a wave packet/envelope in many systems.

`v_g = dω/dk`

## Photon

Quantum excitation of the electromagnetic field.

For a photon:

`E = hf = ħω`

## Phonon

Quantized excitation of a normal mode of mechanical vibration in a condensed-matter system, commonly a crystal lattice.

## Quasiparticle

An emergent excitation in an interacting many-body system that behaves in useful respects like a particle.

Examples include phonons and magnons.

## Matter wave

Wave behavior associated with matter in quantum mechanics.

The de Broglie wavelength is:

`λ = h/p`

## Transition frequency

Frequency associated with an energy difference between quantum states when the exchanged quantum satisfies:

`ΔE = hf`

A transition frequency should not automatically be interpreted as literal mechanical back-and-forth motion of the entire object.

## Acoustic wave

Mechanical wave involving variables such as pressure, density, displacement, or velocity in matter.

## Electromagnetic wave

Propagating variation of electromagnetic fields described classically by Maxwell's equations and quantum mechanically through the electromagnetic field / photons.

## Gravitational wave

Propagating radiative solution of general relativity associated with dynamical spacetime geometry.

It is not a sound wave in a material medium.

## Thermal radiation

Electromagnetic radiation emitted by matter due to its thermal state.

An ideal blackbody has a temperature-dependent electromagnetic spectrum.

## Heat

Energy transferred because of a temperature difference.

Heat is a transfer process, not a single wave type or one frequency band.

## Dark matter

Name for the non-luminous matter component inferred through gravitational/cosmological evidence whose microscopic identity remains unknown.

Different candidate theories can have radically different frequency-domain behavior.

## Dark sector

General term for hypothesized particles/fields beyond the established Standard Model that interact weakly with ordinary matter. It is not one single accepted theory.

## Detector band

Frequency interval over which an instrument or observing technique has meaningful sensitivity.

A detector band is **not necessarily** the full physical existence range of the phenomenon.

## Conventional band

Named interval defined for practical, historical, regulatory, observational, or engineering use.

Band boundaries do not always correspond to abrupt changes in fundamental physics.

## Characteristic frequency

A frequency that summarizes some important timescale or dynamical behavior of a system.

It is not necessarily an exact eigenfrequency or universal boundary.

## Coherence

Degree to which phase relationships remain predictable across time or space.

## Coupling

Physical interaction allowing one degree of freedom, field, mode, or system to influence or exchange energy/information with another.

## Conversion

Process in which excitation or energy in one mode/family is transformed into another.

## Established

Project evidence label for a claim supported by mature theory and reproducible observation/measurement within a stated domain.

## Model-dependent

Project evidence label for a claim that follows from specified assumptions or a legitimate scientific model that is not uniquely established.

## Open

Project evidence label for an unresolved scientific question or incompletely constrained region.

## Speculative

Project evidence label for a proposed interpretation or extension that lacks sufficient empirical support to be presented as established physics.


# Phase 3 interaction terms

## Transduction

Conversion of a signal, excitation, or measurable quantity from one physical domain into another.

A transduction edge does not imply that the source and target are the same kind of excitation.

## Mediated coupling

Interaction between two systems that proceeds through one or more intermediate degrees of freedom.

Example:

`microwave → piezoelectric phonon → optical sideband`

The intermediary should remain visible in the atlas.

## Hybridization

Formation of coupled eigenmodes containing substantial contributions from two or more uncoupled modes.

Use this term only when the coupling regime justifies mixed-mode language, such as normal-mode splitting or avoided crossing.

## Back-action

Influence of a measurement or coupled field on the system being measured or driven.

Radiation pressure acting on an optomechanical resonator is a canonical example.

## Inelastic scattering

Scattering in which the outgoing excitation has different energy from the incoming excitation because energy is transferred to or from another degree of freedom.

Stokes and anti-Stokes photon–phonon processes are examples.

## Stokes process

An inelastic light-scattering process in which the outgoing photon has lower energy/frequency while another excitation, such as a phonon, is created.

## Anti-Stokes process

An inelastic light-scattering process in which the outgoing photon has higher energy/frequency while another excitation, such as a phonon, is annihilated.

## Readout

A measurement relationship in which a physical phenomenon changes another observable that is easier to detect.

A readout chain must not be interpreted as identity or necessarily as energy conversion.

Example:

`gravitational-wave strain → interferometer optical phase → photodetector signal`

## Phase matching

Condition on participating wavevectors that permits efficient coherent wave-mixing or conversion.

The exact relation depends on the physical process and may include reciprocal-lattice vectors.

## Frequency matching

Requirement that participating frequencies satisfy the resonance or energy-conservation relation appropriate to an interaction.

This may mean equal frequencies, a transition condition `ΔE = hf`, or a sum/difference relation such as `f3 = f1 ± f2`.

## Direct edge

Interaction whose documented mechanism connects the specified source and target without requiring another atlas node as an essential intermediate excitation.

## Mediated edge

Interaction path whose source and target communicate through one or more intermediate physical modes.

Mediated edges should generally be expandable into their component edges in the final atlas.
