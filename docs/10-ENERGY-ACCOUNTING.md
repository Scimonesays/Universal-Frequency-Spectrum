# Energy Accounting Across the Universal Frequency Spectrum

**Status:** Cross-cutting project rule  
**Applies to:** all established phenomena, interaction edges, frontier models, question nodes, detectors, and future visualizations.

## Why this layer exists

Frequency tells us how rapidly something changes.

Energy accounting asks a different set of questions:

- Does this system **store** energy?
- Does it **gain** or **lose** energy?
- Does it **carry** energy somewhere else?
- Does it **convert** one form of energy into another?
- Does it **do work** or drive another system?
- Does it **emit**, **radiate**, or otherwise release energy?
- Does it **dissipate** organized energy into less recoverable thermal motion?
- Does it **disperse** energy spatially or spectrally?
- Does it maintain an approximately constant energy through balanced input and output?
- Is energy transfer negligible while information or phase is still measured?
- Is the energy behavior unknown because the proposed phenomenon itself is not established?

This is a separate atlas dimension from frequency.

---

# 1. System boundary comes first

Statements such as:

> "this reduces energy"

are incomplete until the project states **whose energy** is changing.

A subsystem can lose energy while a larger closed accounting remains balanced.

Example:

```
battery
  loses stored chemical energy
      ↓
electrical circuit
  receives/transfers electrical energy
      ↓
motor
  converts electrical → mechanical
      ↓
friction + resistance
  dissipate organized energy → thermal energy
      ↓
environment
  gains thermal/radiative energy
```

The atlas must therefore store a **system boundary** with any important energy claim.

---

# 2. Conservation rule

For ordinary laboratory and engineering systems, the project uses conservation of energy / the first law as the default accounting rule.

A system may:

- receive energy;
- release energy;
- transform energy;
- transport energy;
- store energy;
- do work;
- dissipate energy into another form.

It does not receive an atlas label meaning:

**CREATE ENERGY FROM NOTHING**

unless a future experiment genuinely demonstrates a failure of the applicable conservation law and survives independent replication.

This means ordinary language such as "makes energy" should normally be translated into one of:

- **releases stored energy**;
- **converts energy**;
- **converts mass/binding energy**;
- **receives energy from an external source**;
- **generates usable output from another energy form**.

---

# 3. Core energy-role vocabulary

A node or edge can have more than one role.

## STORES

Energy resides in a system/state and can later participate in interactions.

Examples:
- chemical battery;
- electromagnetic cavity;
- mechanical oscillator;
- gravitationally bound system.

## CARRIES

A propagating excitation transports energy.

Examples:
- electromagnetic radiation;
- acoustic wave;
- gravitational wave;
- moving particle.

## RECEIVES / GAINS

The selected subsystem gains energy from another system.

## SUPPLIES / RELEASES

The selected subsystem transfers energy outward.

This does **not** mean energy was created.

## TRANSFERS

Energy crosses the chosen system boundary.

## CONVERTS

Energy changes representation or physical degree of freedom.

Examples:
- electrical → mechanical in a piezoelectric actuator;
- photon energy → molecular excitation;
- chemical → electrical in a battery;
- nuclear binding/mass-energy difference → kinetic/radiative output.

## ABSORBS

Incoming energy is taken up by a system.

## EMITS / RADIATES

The system releases energy in propagating excitations or radiation.

## DOES_WORK / DRIVES

Energy transfer causes controlled change in another degree of freedom.

## DISSIPATES

Organized energy becomes distributed into less recoverable microscopic degrees of freedom, often as thermal energy.

Dissipation does not destroy energy.

## THERMALIZES

Energy redistributes among microscopic populations toward thermal equilibrium.

## DISPERSES

Energy spreads through space, modes, frequencies, directions, or many degrees of freedom.

Dispersion is not necessarily dissipation; an ideal wave packet may spread without losing total energy.

## MAINTAINS_STEADY_STATE

The system's stored energy remains approximately constant because energy input and output are balanced over the stated interval.

"Maintains energy" therefore usually means a **steady-state balance**, not that nothing is happening.

## EXCHANGES

Energy can flow in either direction depending on state and operating conditions.

## MEDIATES / CATALYZES

A system enables or controls an energy-transfer pathway without being the primary net energy source.

## READS_OUT / MODULATES

A system carries information about another variable even when the measured signal should not be described as the original phenomenon's energy being converted wholesale into the detector carrier.

Example:
- a gravitational wave modulates an optical interferometer;
- the laser supplies the optical power used for readout.

## UNKNOWN

Use for frontier/question nodes when no physically established energy-transfer mechanism exists.

---

# 4. Human-language translation

| User-facing question | Canonical interpretation |
|---|---|
| Does it **reduce energy**? | Does the chosen subsystem lose energy? Through which transfer/output channel? |
| Does it **maintain energy**? | Does it store energy, or remain in a steady state with balanced input/output? |
| Does it **make energy**? | What source is converted or released? Is mass/binding energy involved? |
| Does it **disperse energy**? | Does energy spread spatially/spectrally, radiate away, diffuse, or dissipate? |
| Does it **use energy**? | Does it receive energy to do work, drive dynamics, compute/process, or maintain a state? |
| Does it **destroy energy**? | Not in standard closed-system accounting; identify the output form instead. |
| Does it **create energy**? | Not as a standard label; identify source/conversion unless new physics is established. |

---

# 5. Energy amount is not frequency

The atlas must preserve this distinction.

Two waves can have the same frequency and very different total energies because amplitude, occupation number, volume, duration, or particle number differ.

For a single photon:

```
E = h f
```

For a quantized harmonic mode, an individual quantum has an energy scale tied to `ħω`.

But the total energy of a classical field, mechanical oscillator, acoustic wave, or many-particle system is **not determined by frequency alone**.

---

# 6. Energy versus power

Energy and power are different atlas quantities.

```
power = energy transferred per unit time
```

A device can have:

- high energy but low power;
- low stored energy but high instantaneous power;
- steady energy content while continuously receiving and releasing power.

The canonical dataset should therefore keep `energy` and `power` separate.

---

# 7. Dissipation versus dispersion

These words must not be merged.

## Dissipation

Organized/mechanical/electrical energy is irreversibly or effectively irreversibly redistributed into microscopic degrees of freedom, commonly increasing entropy.

Example:

```
mechanical vibration → friction → thermal motion
```

## Dispersion

Different spectral components propagate differently or energy spreads over a wider region/mode set.

A lossless dispersive medium can alter a pulse shape without destroying energy.

---

# 8. "Using energy" versus "using information"

A detector or computational system may consume energy while the **information** being measured is not itself an additional energy source.

Example:

```
gravitational-wave strain
  → changes optical phase
laser + detector electronics
  → supply the readout energy
```

The atlas must distinguish:

- source of information;
- source of detector power;
- physical energy transferred by the phenomenon;
- energy expended to measure it.

This will be especially important for telepathy/anomalous-information question nodes: a claimed information effect does not justify assuming an unknown energy transfer.

---

# 9. Frontier / unknown-energy rule

For any proposed unknown phenomenon, store these separately:

```
energy_transfer_observed: yes | no | unclear
energy_carrier_known: yes | no
information_transfer_claimed: yes | no
input_energy_identified: ...
output_energy_identified: ...
net_energy_balance_measured: ...
system_boundary: ...
uncertainty: ...
```

A statistically unusual information result cannot be labeled a "new energy" unless an energy flow is independently measured.

---

# 10. General-relativity caveat

Energy accounting in gravitation and cosmology requires care.

Matter stress-energy has a local conservation structure in general relativity, but a unique globally conserved total energy is not available in every arbitrary dynamical spacetime. Global energy definitions can depend on spacetime symmetries and boundary conditions.

Therefore the project will not force a naive laboratory-style global energy ledger onto:

- expanding cosmological spacetime;
- gravitational field energy;
- black-hole spacetime;
- gravitational radiation in arbitrary geometries.

Such entries must state the relevant GR energy definition or observable.

---

# 11. Canonical data fields

Phase 5 should support at least:

```yaml
system_boundary: ...
energy_roles:
  - stores
  - carries
  - receives
  - supplies
  - transfers
  - converts
  - absorbs
  - emits
  - radiates
  - does_work
  - dissipates
  - thermalizes
  - disperses
  - maintains_steady_state
  - exchanges
  - mediates
  - reads_out
  - unknown
energy_input_forms: []
energy_output_forms: []
stored_energy_forms: []
energy_balance:
  state: gains | loses | approximately_constant | exchanges | unknown | not_applicable
  interval_or_condition: ...
energy_transfer_observed: true | false | unknown
power_relevant: true | false
efficiency:
  value: ...
  conditions: ...
loss_channels: []
energy_sources: []
energy_sinks: []
energy_accounting_notes: ...
```

Fields are optional where physically meaningless, but any visual statement about "energy use" must trace to them.

---

# 12. Visual-language proposal

The future atlas can show an energy badge beside each node/edge:

- **STORE**
- **CARRY**
- **GAIN**
- **SUPPLY**
- **CONVERT**
- **ABSORB**
- **EMIT**
- **WORK**
- **DISSIPATE**
- **DISPERSE**
- **STEADY**
- **EXCHANGE**
- **READOUT**
- **UNKNOWN**

Multiple badges are allowed.

A tooltip should always answer:

> **Energy of what system, before and after what process?**

---

# 13. Project rule

The Universal Frequency Spectrum now treats every phenomenon through four separate questions:

1. **What is it?**
2. **How fast does it vary?**
3. **What does it interact with?**
4. **What happens to energy across the stated system boundary?**

That fourth question is now a permanent project dimension.

## Quick sources

- IUPAC Gold Book, *energy*: https://doi.org/10.1351/goldbook.E02101
- NIST, *Conservation of Energy (First Law of Thermodynamics)*: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication1018-5.pdf
- NIST, phase-field best practices — conservation of energy / first and second laws: https://pages.nist.gov/pf-recommended-practices/bp-guide-gh/ch1-model-formulation.html
- IUPAC Gold Book, *heat*: https://doi.org/10.1351/goldbook.H02752
- Szabados, *Quasi-Local Energy-Momentum and Angular Momentum in General Relativity*, Living Reviews in Relativity: https://doi.org/10.12942/lrr-2009-4
