const DATASET_NAMES = [
  "manifest",
  "phenomena",
  "ranges",
  "interactions",
  "entities",
  "frontier",
  "gaps",
  "sources",
  "claims",
  "energy_roles",
  "validations",
];

const C = 299_792_458;
const H = 6.62607015e-34;
const EV_J = 1.602176634e-19;
const SVG_NS = "http://www.w3.org/2000/svg";

const state = {
  data: null,
  maps: null,
  selectedSpectrum: null,
  selectedInteraction: null,
  selectedFrontier: null,
  selectedGap: null,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeUrl(value) {
  try {
    const url = new URL(String(value));
    return url.protocol === "https:" ? url.href : "#";
  } catch {
    return "#";
  }
}

async function fetchDataset(name) {
  const candidates = [
    `./data/${name}.json`,
    `../data/canonical/${name}.json`,
  ];
  let lastError;
  for (const url of candidates) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const payload = await response.json();
      return payload;
    } catch (error) {
      lastError = error;
    }
  }
  throw new Error(`Could not load ${name}.json: ${lastError?.message || "unknown error"}`);
}

async function loadCanonicalData() {
  const pairs = await Promise.all(
    DATASET_NAMES.map(async (name) => [name, await fetchDataset(name)]),
  );
  const data = Object.fromEntries(pairs);
  const version = data.manifest.schema_version;
  if (!version) throw new Error("Canonical manifest is missing schema_version.");
  for (const name of DATASET_NAMES.filter((name) => name !== "manifest")) {
    if (data[name].schema_version !== version) {
      throw new Error(`${name}.json schema version does not match manifest.`);
    }
  }
  return data;
}

function makeMaps(data) {
  return {
    phenomenon: new Map(data.phenomena.records.map((r) => [r.id, r])),
    range: new Map(data.ranges.records.map((r) => [r.phenomenon_id, r])),
    interaction: new Map(data.interactions.records.map((r) => [r.id, r])),
    entity: new Map(data.entities.records.map((r) => [r.id, r])),
    frontier: new Map(data.frontier.records.map((r) => [r.id, r])),
    gap: new Map(data.gaps.records.map((r) => [r.id, r])),
    source: new Map(data.sources.records.map((r) => [r.id, r])),
    claim: new Map(data.claims.records.map((r) => [r.id, r])),
    validationByTarget: groupBy(data.validations.records, (r) => r.target_record_id),
  };
}

function groupBy(records, keyFn) {
  const map = new Map();
  for (const record of records) {
    const key = keyFn(record);
    const bucket = map.get(key) || [];
    bucket.push(record);
    map.set(key, bucket);
  }
  return map;
}

function slug(value) {
  return String(value ?? "unknown").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function titleCase(value) {
  return String(value ?? "")
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function compactNumber(value, digits = 3) {
  if (!Number.isFinite(value)) return "—";
  if (value === 0) return "0";
  const abs = Math.abs(value);
  if (abs >= 1e4 || abs < 1e-2) return value.toExponential(digits - 1).replace("+", "");
  return new Intl.NumberFormat("en-US", { maximumSignificantDigits: digits }).format(value);
}

function formatHz(value) {
  if (!Number.isFinite(value)) return "—";
  const abs = Math.abs(value);
  const units = [
    [1e18, "EHz"],
    [1e15, "PHz"],
    [1e12, "THz"],
    [1e9, "GHz"],
    [1e6, "MHz"],
    [1e3, "kHz"],
  ];
  for (const [scale, label] of units) {
    if (abs >= scale) return `${compactNumber(value / scale, 4)} ${label}`;
  }
  if (abs >= 0.01) return `${compactNumber(value, 4)} Hz`;
  return `${value.toExponential(3).replace("+", "")} Hz`;
}

function formatFrequency(record) {
  const spectral = record.spectral || {};
  const min = spectral.min_hz;
  const max = spectral.max_hz;
  const char = spectral.characteristic_hz;
  if (Number.isFinite(char) && !Number.isFinite(min) && !Number.isFinite(max)) return `≈ ${formatHz(char)}`;
  if (Number.isFinite(min) && Number.isFinite(max)) return `${formatHz(min)} – ${formatHz(max)}`;
  if (Number.isFinite(min)) return `≥ ${formatHz(min)}`;
  if (Number.isFinite(max)) return `≤ ${formatHz(max)}`;
  if (Number.isFinite(char)) return `≈ ${formatHz(char)}`;
  return spectral.status || "No universal frequency";
}

function representativeFrequency(record) {
  const spectral = record.spectral || {};
  if (Number.isFinite(spectral.characteristic_hz) && spectral.characteristic_hz > 0) {
    return { value: spectral.characteristic_hz, basis: "characteristic frequency" };
  }
  if (Number.isFinite(spectral.min_hz) && Number.isFinite(spectral.max_hz) && spectral.min_hz > 0 && spectral.max_hz > 0) {
    return { value: Math.sqrt(spectral.min_hz * spectral.max_hz), basis: "geometric midpoint of displayed range" };
  }
  if (Number.isFinite(spectral.min_hz) && spectral.min_hz > 0) return { value: spectral.min_hz, basis: "lower boundary" };
  if (Number.isFinite(spectral.max_hz) && spectral.max_hz > 0) return { value: spectral.max_hz, basis: "upper boundary" };
  return null;
}

function photonOverlay(record) {
  if (record.family !== "electromagnetic") return null;
  const rep = representativeFrequency(record);
  if (!rep) return null;
  const wavelength = C / rep.value;
  const energyJ = H * rep.value;
  const energyEv = energyJ / EV_J;
  return {
    frequency: rep.value,
    basis: rep.basis,
    wavelength,
    energyJ,
    energyEv,
  };
}

function formatLength(meters) {
  if (!Number.isFinite(meters)) return "—";
  const abs = Math.abs(meters);
  const units = [
    [1e3, "km"],
    [1, "m"],
    [1e-2, "cm"],
    [1e-3, "mm"],
    [1e-6, "µm"],
    [1e-9, "nm"],
    [1e-12, "pm"],
    [1e-15, "fm"],
  ];
  for (const [scale, label] of units) {
    if (abs >= scale) return `${compactNumber(meters / scale, 4)} ${label}`;
  }
  return `${meters.toExponential(3)} m`;
}

function formatEnergyEv(ev) {
  if (!Number.isFinite(ev)) return "—";
  const abs = Math.abs(ev);
  const units = [[1e9, "GeV"], [1e6, "MeV"], [1e3, "keV"]];
  for (const [scale, label] of units) if (abs >= scale) return `${compactNumber(ev / scale, 4)} ${label}`;
  if (abs >= 1e-3) return `${compactNumber(ev, 4)} eV`;
  return `${ev.toExponential(3)} eV`;
}

function evidenceBadge(evidence) {
  const cls = slug(evidence?.class || evidence?.label || "other");
  return `<span class="badge ${cls}">${escapeHtml(evidence?.label || evidence?.class || "UNKNOWN")}</span>`;
}

function metric(value, label) {
  return `<div class="metric"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`;
}

function renderSourceList(sourceIds = []) {
  if (!sourceIds.length) return "<p class=\"muted\">No source IDs attached.</p>";
  const items = sourceIds.map((id) => {
    const source = state.maps.source.get(id);
    if (!source) return `<li><code>${escapeHtml(id)}</code> · unresolved</li>`;
    const links = (source.urls || [])
      .map((url, i) => `<a href="${safeUrl(url)}" target="_blank" rel="noopener">source ${i + 1} ↗</a>`)
      .join(" · ");
    return `<li><strong>${escapeHtml(id)}</strong> · ${escapeHtml(source.title)}<br>${links}</li>`;
  }).join("");
  return `<ul class="source-list">${items}</ul>`;
}

function relatedClaimHtml(claimId) {
  const claim = state.maps.claim.get(claimId);
  if (!claim) return "—";
  return `<span>${escapeHtml(claim.claim)}</span><br><code>${escapeHtml(claim.id)}</code>`;
}

function field(label, value) {
  return `<div class="field"><dt>${escapeHtml(label)}</dt><dd>${value}</dd></div>`;
}

function setInspector(element, html) {
  element.innerHTML = html;
  element.scrollTop = 0;
}

function renderSpectrumInspector(id) {
  const record = state.maps.phenomenon.get(id);
  if (!record) return;
  state.selectedSpectrum = id;
  const overlay = photonOverlay(record);
  const roles = record.energy_accounting?.roles || [];
  const sourceHtml = renderSourceList(record.source_ids);
  const detector = String(record.spectral?.range_kind || "").includes("detector");
  const html = `
    <p class="eyebrow">Spectrum inspector · ${escapeHtml(record.id)}</p>
    <h3>${escapeHtml(record.name)}</h3>
    <div class="pill-row">${evidenceBadge(record.evidence)}<span class="badge">${escapeHtml(record.family)}</span>${detector ? '<span class="badge model-dependent">DETECTOR WINDOW</span>' : ""}</div>
    <dl>
      ${field("Frequency", escapeHtml(formatFrequency(record)))}
      ${field("Range meaning", escapeHtml(record.spectral?.range_kind || "—"))}
      ${field("What is oscillating?", escapeHtml(record.physical?.what_oscillates || "—"))}
      ${field("Energy roles", roles.length ? roles.map((r) => `<span class="badge">${escapeHtml(r)}</span>`).join(" ") : "—")}
      ${field("System boundary", escapeHtml(record.energy_accounting?.system_boundary || "—"))}
      ${overlay ? field("EM overlay", `At the ${escapeHtml(overlay.basis)}: λ ≈ <strong>${escapeHtml(formatLength(overlay.wavelength))}</strong>; one photon carries ≈ <strong>${escapeHtml(formatEnergyEv(overlay.energyEv))}</strong>. This is an EM-specific derivation, not a universal wave-energy rule.`) : ""}
      ${field("Notes", escapeHtml(record.notes || "—"))}
      ${field("Claim", relatedClaimHtml(record.claim_id))}
      ${field("Sources", sourceHtml)}
    </dl>`;
  setInspector($("#inspector"), html);
  $$("#spectrum-table-body tr").forEach((tr) => tr.classList.toggle("selected", tr.dataset.id === id));
  $$("#spectrum-chart .band-hit").forEach((el) => el.classList.toggle("selected-mark", el.dataset.id === id));
}

function spectrumFilters() {
  return {
    q: $("#spectrum-search").value.trim().toLowerCase(),
    family: $("#family-filter").value,
    energy: $("#energy-filter").value,
    minExp: Number($("#exp-min").value),
    maxExp: Number($("#exp-max").value),
  };
}

function numericInterval(record, minExp, maxExp) {
  const minDomain = 10 ** minExp;
  const maxDomain = 10 ** maxExp;
  const spectral = record.spectral || {};
  const min = spectral.min_hz;
  const max = spectral.max_hz;
  const char = spectral.characteristic_hz;
  if (Number.isFinite(char) && char > 0 && char >= minDomain && char <= maxDomain) {
    return { kind: "characteristic", value: char };
  }
  if (!Number.isFinite(min) && !Number.isFinite(max)) return null;
  const rawMin = Number.isFinite(min) && min > 0 ? min : 0;
  const rawMax = Number.isFinite(max) && max > 0 ? max : Infinity;
  if (rawMax < minDomain || rawMin > maxDomain) return null;
  return {
    kind: "band",
    min: Math.max(rawMin || minDomain, minDomain),
    max: Math.min(rawMax, maxDomain),
    openLeft: !Number.isFinite(min),
    openRight: !Number.isFinite(max),
  };
}

function semanticSpectrumRecords() {
  const f = spectrumFilters();
  return state.data.phenomena.records.filter((r) => {
    const haystack = [r.name, r.family, r.id, r.physical?.what_oscillates, r.notes].join(" ").toLowerCase();
    if (f.q && !haystack.includes(f.q)) return false;
    if (f.family !== "all" && r.family !== f.family) return false;
    if (f.energy !== "all" && !(r.energy_accounting?.roles || []).includes(f.energy)) return false;
    return true;
  });
}

function plottableSpectrumRecords() {
  const f = spectrumFilters();
  return semanticSpectrumRecords().filter((r) => numericInterval(r, f.minExp, f.maxExp) !== null);
}

function svgEl(name, attrs = {}, text = null) {
  const el = document.createElementNS(SVG_NS, name);
  for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, String(value));
  if (text !== null) el.textContent = text;
  return el;
}

function bindAccessibleActivation(el, fn) {
  el.addEventListener("click", fn);
  el.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      fn();
    }
  });
}

function visualFamily(record) {
  const family = String(record.family || "").toLowerCase();
  if (family.includes("gravitational")) return { key: "gravitational", label: "Gravitational", sub: "SPACETIME · COSMIC EVENTS", icon: "◎", order: 7 };
  if (family.includes("nuclear") || family.includes("particle")) return { key: "nuclear", label: "Nuclear / Particle", sub: "NUCLEI · FUNDAMENTAL PARTICLES", icon: "⊙", order: 6 };
  if (family.includes("electromagnetic") || family.includes("plasma")) return { key: "electromagnetic", label: "Electromagnetic / Plasma", sub: "FIELDS · LIGHT · RADIATION", icon: "✦", order: 4 };
  if (family.includes("atomic") || family.includes("molecular") || family.includes("condensed") || family.includes("quantum") || family.includes("spin")) {
    return { key: "atomic", label: "Atomic / Molecular", sub: "ATOMS · MOLECULES · SOLID STATE", icon: "◌", order: 5 };
  }
  if (family.includes("biological") || family.includes("neural")) return { key: "biological", label: "Biological / Neural", sub: "LIFE · BRAINS · BODIES", icon: "⌁", order: 3 };
  if (family.includes("acoustic") || family.includes("mechanical")) return { key: "mechanical", label: "Mechanical / Acoustic", sub: "MOTION · PRESSURE WAVES", icon: "∿", order: 2 };
  if (family.includes("ocean") || family.includes("geophysical") || family.includes("atmospheric") || family.includes("seismic")) {
    return { key: "geophysical", label: "Geophysical / Orbital", sub: "PLANET · OCEAN · ATMOSPHERE", icon: "◉", order: 1 };
  }
  return { key: "other", label: "Other Physical Systems", sub: "CANONICAL PHENOMENA", icon: "◇", order: 8 };
}

function shortenLabel(value, max = 28) {
  const text = titleCase(value);
  return text.length > max ? text.slice(0, max - 1) + "…" : text;
}

function renderSpectrumChart(records) {
  const svg = $("#spectrum-chart");
  svg.replaceChildren();
  const empty = $("#chart-empty");
  empty.hidden = records.length > 0;

  if (!records.length) {
    svg.setAttribute("viewBox", "0 0 1240 520");
    svg.setAttribute("height", "520");
    return;
  }

  const { minExp, maxExp } = spectrumFilters();
  const width = 1440;
  const left = 245;
  const right = 34;
  const top = 72;
  const bottom = 26;
  const plotW = width - left - right;
  const x = (hz) => left + ((Math.log10(hz) - minExp) / (maxExp - minExp)) * plotW;

  const grouped = new Map();
  for (const record of records) {
    const family = visualFamily(record);
    const bucket = grouped.get(family.key) || { family, records: [] };
    bucket.records.push(record);
    grouped.set(family.key, bucket);
  }

  const groups = [...grouped.values()].sort((a, b) => a.family.order - b.family.order);

  function layoutGroup(group) {
    const candidates = group.records.map((record) => {
      const interval = numericInterval(record, minExp, maxExp);
      if (!interval) return null;
      let x1;
      let x2;
      if (interval.kind === "characteristic") {
        const cx = x(interval.value);
        x1 = cx - 42;
        x2 = cx + 100;
      } else {
        const raw1 = x(interval.min);
        const raw2 = x(interval.max);
        const center = (raw1 + raw2) / 2;
        const visualWidth = Math.max(34, raw2 - raw1);
        x1 = center - Math.max(visualWidth / 2, 42);
        x2 = center + Math.max(visualWidth / 2, 42);
      }
      return { record, interval, x1, x2 };
    }).filter(Boolean).sort((a, b) => a.x1 - b.x1);

    const laneEnds = [];
    for (const item of candidates) {
      let lane = laneEnds.findIndex((endX) => item.x1 > endX + 10);
      if (lane < 0) {
        lane = laneEnds.length;
        laneEnds.push(item.x2);
      } else {
        laneEnds[lane] = item.x2;
      }
      item.lane = lane;
    }
    return { items: candidates, lanes: Math.max(1, laneEnds.length) };
  }

  const layouts = groups.map((group) => ({ ...group, layout: layoutGroup(group) }));
  let cursorY = top;
  for (const group of layouts) {
    group.y = cursorY;
    group.height = 38 + group.layout.lanes * 34;
    cursorY += group.height;
  }
  const height = cursorY + bottom;

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("height", String(height));
  svg.append(
    svgEl("title", { id: "spectrum-chart-title" }, "Universal Frequency Map"),
    svgEl("desc", { id: "spectrum-chart-desc" }, "Canonical phenomena grouped by physical family on a logarithmic hertz axis. Equal frequency does not imply equal physical identity."),
  );

  const defs = svgEl("defs");

  const openPattern = svgEl("pattern", { id: "openBandPattern", width: 8, height: 8, patternUnits: "userSpaceOnUse" });
  openPattern.append(
    svgEl("rect", { width: 8, height: 8, fill: "#103c54" }),
    svgEl("path", { d: "M0 8 L8 0", stroke: "#71dcff", "stroke-width": 2 }),
  );
  defs.append(openPattern);

  const bandGlow = svgEl("filter", { id: "bandGlow", x: "-40%", y: "-100%", width: "180%", height: "300%" });
  bandGlow.append(svgEl("feGaussianBlur", { stdDeviation: "3.2", result: "blur" }));
  const merge = svgEl("feMerge");
  merge.append(svgEl("feMergeNode", { in: "blur" }), svgEl("feMergeNode", { in: "SourceGraphic" }));
  bandGlow.append(merge);
  defs.append(bandGlow);

  const pointGlow = svgEl("filter", { id: "pointGlow", x: "-200%", y: "-200%", width: "500%", height: "500%" });
  pointGlow.append(svgEl("feGaussianBlur", { stdDeviation: "2.7", result: "blur" }));
  const pointMerge = svgEl("feMerge");
  pointMerge.append(svgEl("feMergeNode", { in: "blur" }), svgEl("feMergeNode", { in: "SourceGraphic" }));
  pointGlow.append(pointMerge);
  defs.append(pointGlow);

  const visibleGradient = svgEl("linearGradient", { id: "visibleGradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%" });
  [
    ["0%", "#7b2cff"],
    ["18%", "#275dff"],
    ["38%", "#18d7ff"],
    ["55%", "#35e86e"],
    ["72%", "#ffe250"],
    ["86%", "#ff8a38"],
    ["100%", "#ff355d"],
  ].forEach(([offset, color]) => visibleGradient.append(svgEl("stop", { offset, "stop-color": color })));
  defs.append(visibleGradient);

  svg.append(defs);

  const span = maxExp - minExp;
  const tickStep = span > 25 ? 3 : span > 15 ? 2 : 1;
  for (let exp = Math.ceil(minExp / tickStep) * tickStep; exp <= maxExp; exp += tickStep) {
    const tx = left + ((exp - minExp) / span) * plotW;
    svg.append(svgEl("line", { x1: tx, y1: top - 30, x2: tx, y2: height - bottom, class: "axis-grid" }));
    svg.append(svgEl("text", { x: tx, y: 27, "text-anchor": "middle", class: "axis-text" }, `10^${exp}`));
  }
  svg.append(svgEl("line", { x1: left, y1: top - 30, x2: width - right, y2: top - 30, class: "axis-line" }));
  svg.append(svgEl("text", { x: left, y: 49, class: "axis-text", "text-anchor": "start" }, "LOWER FREQUENCY · LONGER PERIOD"));
  svg.append(svgEl("text", { x: width - right, y: 49, class: "axis-text", "text-anchor": "end" }, "HIGHER FREQUENCY · SHORTER PERIOD"));

  for (const group of layouts) {
    const y = group.y;
    const rowBottom = y + group.height - 5;
    svg.append(svgEl("rect", { x: 8, y: y - 3, width: width - 16, height: group.height - 4, rx: 14, class: "family-row-bg" }));
    svg.append(svgEl("line", { x1: left - 12, y1: y - 3, x2: left - 12, y2: rowBottom, class: "family-row-rule" }));

    const iconY = y + Math.min(37, group.height / 2);
    svg.append(svgEl("circle", { cx: 36, cy: iconY, r: 18, class: "family-icon-ring" }));
    svg.append(svgEl("text", { x: 36, y: iconY + 5, class: "family-icon" }, group.family.icon));
    svg.append(svgEl("text", { x: 64, y: y + 24, class: "family-label" }, group.family.label));
    svg.append(svgEl("text", { x: 64, y: y + 39, class: "family-sub" }, group.family.sub));

    for (const item of group.layout.items) {
      const { record, interval, lane } = item;
      const laneY = y + 48 + lane * 34;
      const g = svgEl("g", {
        class: "band-hit",
        tabindex: 0,
        role: "button",
        "aria-label": `${record.name}, ${formatFrequency(record)}`,
        "data-id": record.id,
      });
      g.append(svgEl("title", {}, `${record.name} — ${formatFrequency(record)} — ${record.physical?.what_oscillates || ""}`));

      if (interval.kind === "characteristic") {
        const cx = x(interval.value);
        g.append(svgEl("circle", { cx, cy: laneY, r: 6, class: "characteristic-dot" }));
        g.append(svgEl("line", { x1: cx, y1: laneY - 11, x2: cx, y2: laneY + 11, stroke: "#ffe99a", "stroke-width": 1, opacity: .34 }));
        g.append(svgEl("text", { x: Math.min(cx + 11, width - 185), y: laneY + 3, class: "point-label" }, shortenLabel(record.name, 31)));
      } else {
        const rawX1 = x(interval.min);
        const rawX2 = x(interval.max);
        const barX = Math.min(rawX1, rawX2);
        const barW = Math.max(5, Math.abs(rawX2 - rawX1));
        const kind = String(record.spectral?.range_kind || "").toLowerCase();
        const cls = [
          "band-rect",
          kind.includes("detector") ? "detector" : "",
          kind.includes("biological") ? "biological" : "",
          interval.openLeft || interval.openRight ? "open-band" : "",
        ].filter(Boolean).join(" ");
        const attrs = { x: barX, y: laneY - 10, width: barW, height: 20, class: cls };
        if (record.family === "electromagnetic" && String(record.name).toLowerCase().includes("visible")) attrs.style = "fill:url(#visibleGradient)";
        g.append(svgEl("rect", attrs));

        if (interval.openLeft) g.append(svgEl("path", { d: `M${barX + 1},${laneY} l9,-5 v10 z`, class: "open-arrow" }));
        if (interval.openRight) g.append(svgEl("path", { d: `M${barX + barW - 1},${laneY} l-9,-5 v10 z`, class: "open-arrow" }));

        const centerX = Math.max(left + 34, Math.min(width - right - 34, barX + barW / 2));
        if (barW >= 86) {
          g.append(svgEl("text", { x: centerX, y: laneY - 1, class: "band-label" }, shortenLabel(record.name, barW > 175 ? 32 : 20)));
          if (barW >= 135) g.append(svgEl("text", { x: centerX, y: laneY + 8, class: "band-sublabel" }, formatFrequency(record)));
        } else {
          const labelX = Math.min(width - right - 4, barX + barW + 8);
          g.append(svgEl("text", { x: labelX, y: laneY + 3, class: "point-label" }, shortenLabel(record.name, 23)));
        }
      }

      bindAccessibleActivation(g, () => renderSpectrumInspector(record.id));
      svg.append(g);
    }
  }
}

function renderSpectrumFrontierStrip() {
  const host = $("#spectrum-frontier-strip");
  if (!host) return;

  const chosen = [];
  const domains = new Set();
  for (const record of state.data.frontier.records) {
    if (record.evidence?.class === "established") continue;
    const domain = record.domain || "frontier";
    if (domains.has(domain)) continue;
    domains.add(domain);
    chosen.push(record);
    if (chosen.length === 6) break;
  }

  host.innerHTML = chosen.map((r) => `
    <button class="frontier-chip" type="button" data-frontier-id="${escapeHtml(r.id)}">
      <strong>${escapeHtml(titleCase(r.name))}</strong>
      <span>${escapeHtml(titleCase(r.evidence?.class || r.status || "open question"))}</span>
    </button>`).join("");

  $$("#spectrum-frontier-strip .frontier-chip").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.frontierId;
      document.querySelector('.nav-tab[data-view="frontier"]')?.click();
      renderFrontierInspector(id);
      $("#frontier-inspector")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderSpectrumTable(records) {
  const body = $("#spectrum-table-body");
  body.innerHTML = records.map((r) => `
    <tr data-id="${escapeHtml(r.id)}" tabindex="0">
      <td><strong>${escapeHtml(r.name)}</strong><br><code>${escapeHtml(r.id)}</code></td>
      <td>${escapeHtml(r.family)}</td>
      <td>${escapeHtml(formatFrequency(r))}<br><span class="muted">${escapeHtml(r.spectral?.range_kind || "")}</span></td>
      <td>${escapeHtml(r.physical?.what_oscillates || "—")}</td>
      <td>${(r.energy_accounting?.roles || []).map((role) => `<span class="badge">${escapeHtml(role)}</span>`).join(" ")}</td>
      <td>${evidenceBadge(r.evidence)}</td>
    </tr>`).join("");
  [...body.querySelectorAll("tr")].forEach((tr) => bindAccessibleActivation(tr, () => renderSpectrumInspector(tr.dataset.id)));
}

function renderSpectrum() {
  const f = spectrumFilters();
  if (f.minExp >= f.maxExp) {
    if (document.activeElement === $("#exp-min")) $("#exp-max").value = String(Math.min(Number($("#exp-max").max), f.minExp + 1));
    else $("#exp-min").value = String(Math.max(Number($("#exp-min").min), f.maxExp - 1));
  }
  $("#exp-min-label").textContent = String($("#exp-min").value).replace("-", "−");
  $("#exp-max-label").textContent = String($("#exp-max").value).replace("-", "−");
  const semanticRecords = semanticSpectrumRecords();
  const plottedRecords = plottableSpectrumRecords();
  renderSpectrumChart(plottedRecords);
  renderSpectrumTable(semanticRecords);
  renderSpectrumFrontierStrip();
  const intrinsicallyNonnumeric = semanticRecords.filter((r) => {
    const s = r.spectral || {};
    return !Number.isFinite(s.min_hz) && !Number.isFinite(s.max_hz) && !Number.isFinite(s.characteristic_hz);
  }).length;
  const outsideViewport = semanticRecords.length - plottedRecords.length - intrinsicallyNonnumeric;
  $("#spectrum-metrics").innerHTML =
    metric(String(plottedRecords.length), "plotted records") +
    metric(String(intrinsicallyNonnumeric), "not a simple Hz axis") +
    metric(String(Math.max(0, outsideViewport)), "outside viewport") +
    metric(String(new Set(semanticRecords.map((r) => r.family)).size), "physical families");
  if (state.selectedSpectrum && semanticRecords.some((r) => r.id === state.selectedSpectrum)) renderSpectrumInspector(state.selectedSpectrum);
}

function interactionSearchMatch(record, q) {
  if (!q) return true;
  const source = state.maps.entity.get(record.source_entity_id);
  const target = state.maps.entity.get(record.target_entity_id);
  return [record.id, record.interaction_type, record.source, record.target, source?.display_name, target?.display_name, record.mediator, record.caveat]
    .join(" ").toLowerCase().includes(q);
}

function filteredInteractions() {
  const q = $("#connection-search").value.trim().toLowerCase();
  const type = $("#interaction-filter").value;
  const direction = $("#direction-filter").value;
  return state.data.interactions.records.filter((r) =>
    interactionSearchMatch(r, q) &&
    (type === "all" || r.interaction_type === type) &&
    (direction === "all" || r.directionality === direction));
}

function renderInteractionInspector(id) {
  const r = state.maps.interaction.get(id);
  if (!r) return;
  state.selectedInteraction = id;
  const source = state.maps.entity.get(r.source_entity_id);
  const target = state.maps.entity.get(r.target_entity_id);
  const html = `
    <p class="eyebrow">Interaction inspector · ${escapeHtml(r.id)}</p>
    <h3>${escapeHtml(source?.display_name || r.source)} → ${escapeHtml(target?.display_name || r.target)}</h3>
    <div class="pill-row">${evidenceBadge(r.evidence)}<span class="badge">${escapeHtml(r.interaction_type)}</span><span class="badge">${escapeHtml(r.directionality)}</span></div>
    <dl>
      ${field("Mediator", escapeHtml(r.mediator || "—"))}
      ${field("Frequency condition", escapeHtml(r.frequency_condition || "—"))}
      ${field("Energy transfer", escapeHtml(r.energy_transfer || "—"))}
      ${field("Source energy role", (r.energy_accounting?.source_roles || []).map((x) => `<span class="badge">${escapeHtml(x)}</span>`).join(" ") || "—")}
      ${field("Target energy role", (r.energy_accounting?.target_roles || []).map((x) => `<span class="badge">${escapeHtml(x)}</span>`).join(" ") || "—")}
      ${field("Energy fate", escapeHtml(r.energy_accounting?.fate || "—"))}
      ${field("System boundary", escapeHtml(r.energy_accounting?.system_boundary || "—"))}
      ${field("Caveat", escapeHtml(r.caveat || "—"))}
      ${field("Claim", relatedClaimHtml(r.claim_id))}
      ${field("Sources", renderSourceList(r.source_ids))}
    </dl>`;
  setInspector($("#connection-inspector"), html);
  $$("#interaction-list .record-card").forEach((el) => el.classList.toggle("selected", el.dataset.id === id));
  renderConnectionGraph(filteredInteractions());
}

function renderConnectionGraph(records) {
  const svg = $("#connection-graph");
  svg.replaceChildren();
  const width = 1050;
  const height = 700;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("height", String(height));
  const defs = svgEl("defs");
  const marker = svgEl("marker", { id: "graph-arrow", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 5, markerHeight: 5, orient: "auto-start-reverse" });
  marker.append(svgEl("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "#52718a" }));
  defs.append(marker);
  svg.append(defs);

  const entityIds = [...new Set(records.flatMap((r) => [r.source_entity_id, r.target_entity_id]))].sort();
  if (!entityIds.length) return;
  const center = { x: width / 2, y: height / 2 };
  const radiusX = 390;
  const radiusY = 285;
  const pos = new Map();
  entityIds.forEach((id, i) => {
    const angle = -Math.PI / 2 + (i / entityIds.length) * Math.PI * 2;
    pos.set(id, { x: center.x + Math.cos(angle) * radiusX, y: center.y + Math.sin(angle) * radiusY });
  });

  for (const r of records) {
    const a = pos.get(r.source_entity_id);
    const b = pos.get(r.target_entity_id);
    if (!a || !b) continue;
    const selected = r.id === state.selectedInteraction;
    const line = svgEl("line", {
      x1: a.x, y1: a.y, x2: b.x, y2: b.y,
      class: `graph-edge${selected ? " active" : ""}`,
      "marker-end": "url(#graph-arrow)",
      ...(r.directionality === "bidirectional" ? { "marker-start": "url(#graph-arrow)" } : {}),
    });
    svg.append(line);
    const hit = svgEl("line", { x1: a.x, y1: a.y, x2: b.x, y2: b.y, stroke: "transparent", "stroke-width": 10, tabindex: 0, role: "button", "aria-label": `${r.interaction_type}: ${r.source} to ${r.target}`, style: "cursor:pointer" });
    bindAccessibleActivation(hit, () => renderInteractionInspector(r.id));
    svg.append(hit);
  }

  for (const id of entityIds) {
    const p = pos.get(id);
    const entity = state.maps.entity.get(id);
    const active = records.some((r) => r.id === state.selectedInteraction && (r.source_entity_id === id || r.target_entity_id === id));
    svg.append(svgEl("circle", { cx: p.x, cy: p.y, r: 8, class: `graph-node${active ? " active" : ""}` }));
    const anchor = p.x < center.x ? "end" : "start";
    const dx = p.x < center.x ? -13 : 13;
    svg.append(svgEl("text", { x: p.x + dx, y: p.y + 3, "text-anchor": anchor, class: "graph-label" }, (entity?.display_name || id).slice(0, 30)));
  }
}

function renderConnections() {
  const records = filteredInteractions();
  $("#connection-metrics").innerHTML =
    metric(String(records.length), "visible edges") +
    metric(String(new Set(records.flatMap((r) => [r.source_entity_id, r.target_entity_id])).size), "connected entities") +
    metric(String(new Set(records.map((r) => r.interaction_type)).size), "interaction types") +
    metric(String(records.filter((r) => r.energy_transfer === "yes").length), "energy-transfer edges");
  renderConnectionGraph(records);
  $("#interaction-list").innerHTML = records.map((r) => {
    const source = state.maps.entity.get(r.source_entity_id)?.display_name || r.source;
    const target = state.maps.entity.get(r.target_entity_id)?.display_name || r.target;
    return `<article class="record-card" data-id="${escapeHtml(r.id)}" tabindex="0">
      <p class="eyebrow">${escapeHtml(r.id)}</p>
      <h3>${escapeHtml(source)} → ${escapeHtml(target)}</h3>
      <p>${escapeHtml(r.interaction_type)} · mediated by ${escapeHtml(r.mediator || "—")}</p>
      <div class="card-meta">${evidenceBadge(r.evidence)}<span class="badge">${escapeHtml(r.directionality)}</span></div>
    </article>`;
  }).join("");
  $$("#interaction-list .record-card").forEach((el) => bindAccessibleActivation(el, () => renderInteractionInspector(el.dataset.id)));
}

function filteredFrontier() {
  const q = $("#frontier-search").value.trim().toLowerCase();
  const domain = $("#frontier-domain").value;
  const evidence = $("#frontier-evidence").value;
  return state.data.frontier.records.filter((r) => {
    const hay = [r.id, r.name, r.domain, r.status, r.physical_candidate_or_question, r.predicted_or_observed_signal, r.required_bridge, r.caution].join(" ").toLowerCase();
    return (!q || hay.includes(q)) &&
      (domain === "all" || r.domain === domain) &&
      (evidence === "all" || r.evidence?.class === evidence);
  });
}

function validationHtml(recordId) {
  const validations = state.maps.validationByTarget.get(recordId) || [];
  if (!validations.length) return '<p class="muted">No reviewed external validation results are registered yet.</p>';
  return validations.map((v) => `<div class="record-card"><strong>${escapeHtml(v.provider)}</strong> · ${escapeHtml(v.verdict)}<br><span class="muted">run ${escapeHtml(v.run_id)} · canonical ingest reviewed: ${v.reviewed_for_canonical_ingest ? "yes" : "no"}</span></div>`).join("");
}

function renderFrontierInspector(id) {
  const r = state.maps.frontier.get(id);
  if (!r) return;
  state.selectedFrontier = id;
  const html = `
    <p class="eyebrow">Frontier inspector · ${escapeHtml(r.id)}</p>
    <h3>${escapeHtml(r.name)}</h3>
    <div class="pill-row">${evidenceBadge(r.evidence)}<span class="badge">${escapeHtml(r.domain)}</span></div>
    <dl>
      ${field("Canonical status", escapeHtml(r.status))}
      ${field("Candidate / question", escapeHtml(r.physical_candidate_or_question || "—"))}
      ${field("Frequency status", escapeHtml(r.spectral?.status || "No universal frequency assigned"))}
      ${field("Predicted / observed signal", escapeHtml(r.predicted_or_observed_signal || "—"))}
      ${field("Required physical bridge", escapeHtml(r.required_bridge || "—"))}
      ${field("Energy accounting", escapeHtml(r.energy_accounting?.status || "—"))}
      ${field("Project caution", escapeHtml(r.caution || "—"))}
      ${field("Claim", relatedClaimHtml(r.claim_id))}
      ${field("Sources", renderSourceList(r.source_ids))}
      ${field("Reviewed external validation", validationHtml(r.id))}
    </dl>`;
  setInspector($("#frontier-inspector"), html);
  $$("#frontier-list .record-card").forEach((el) => el.classList.toggle("selected", el.dataset.id === id));
}

function renderFrontier() {
  const records = filteredFrontier();
  const counts = groupBy(records, (r) => r.evidence?.class || "other");
  $("#frontier-metrics").innerHTML =
    metric(String(records.length), "visible frontier nodes") +
    metric(String(new Set(records.map((r) => r.domain)).size), "domains") +
    metric(String(counts.get("open")?.length || 0), "open") +
    metric(String((counts.get("speculative")?.length || 0) + (counts.get("contested")?.length || 0)), "speculative / contested");
  $("#frontier-list").innerHTML = records.map((r) => `
    <article class="record-card" data-id="${escapeHtml(r.id)}" tabindex="0">
      <p class="eyebrow">${escapeHtml(r.domain)} · ${escapeHtml(r.id)}</p>
      <h3>${escapeHtml(r.name)}</h3>
      <p>${escapeHtml(r.physical_candidate_or_question || r.caution || "Question node")}</p>
      <div class="card-meta">${evidenceBadge(r.evidence)}<span class="badge">${escapeHtml(r.status)}</span></div>
    </article>`).join("");
  $$("#frontier-list .record-card").forEach((el) => bindAccessibleActivation(el, () => renderFrontierInspector(el.dataset.id)));
}

function filteredGaps() {
  const q = $("#gap-search").value.trim().toLowerCase();
  const type = $("#gap-filter").value;
  return state.data.gaps.records.filter((r) => {
    const hay = [r.id, r.type, r.name, r.status, r.scope, r.meaning].join(" ").toLowerCase();
    return (!q || hay.includes(q)) && (type === "all" || r.type === type);
  });
}

function relatedRecordName(id) {
  return state.maps.phenomenon.get(id)?.name ||
    state.maps.interaction.get(id)?.interaction_type ||
    state.maps.frontier.get(id)?.name ||
    id;
}

function renderGapInspector(id) {
  const r = state.maps.gap.get(id);
  if (!r) return;
  state.selectedGap = id;
  const related = (r.related_ids || []).length
    ? `<ul class="source-list">${r.related_ids.map((rid) => `<li><code>${escapeHtml(rid)}</code> · ${escapeHtml(relatedRecordName(rid))}</li>`).join("")}</ul>`
    : '<p class="muted">No specific canonical record required for this general gap rule.</p>';
  const html = `
    <p class="eyebrow">Gap inspector · ${escapeHtml(r.id)}</p>
    <h3>${escapeHtml(r.name)}</h3>
    <div class="pill-row"><span class="badge">${escapeHtml(titleCase(r.type))}</span><span class="badge open">${escapeHtml(r.status)}</span></div>
    <dl>
      ${field("Scope", escapeHtml(r.scope))}
      ${field("What the gap means", escapeHtml(r.meaning))}
      ${field("Related canonical records", related)}
      ${field("Sources", r.source_ids?.length ? renderSourceList(r.source_ids) : '<span class="muted">General catalog/visual rule; no empirical source group required.</span>')}
      ${field("Reviewed external validation", validationHtml(r.id))}
    </dl>`;
  setInspector($("#gap-inspector"), html);
  $$("#gap-list .record-card").forEach((el) => el.classList.toggle("selected", el.dataset.id === id));
}

function renderGaps() {
  const records = filteredGaps();
  $("#gap-metrics").innerHTML =
    metric(String(records.length), "visible gaps") +
    metric(String(new Set(records.map((r) => r.type)).size), "gap types") +
    metric(String(records.filter((r) => r.type === "instrument_gap").length), "instrument") +
    metric(String(records.filter((r) => r.type === "theory_gap").length), "theory");
  $("#gap-list").innerHTML = records.map((r) => `
    <article class="record-card" data-id="${escapeHtml(r.id)}" tabindex="0">
      <p class="eyebrow">${escapeHtml(titleCase(r.type))} · ${escapeHtml(r.id)}</p>
      <h3>${escapeHtml(r.name)}</h3>
      <p>${escapeHtml(r.meaning)}</p>
      <div class="card-meta"><span class="badge open">${escapeHtml(r.status)}</span><span class="badge">${escapeHtml(r.scope)}</span></div>
    </article>`).join("");
  $$("#gap-list .record-card").forEach((el) => bindAccessibleActivation(el, () => renderGapInspector(el.dataset.id)));
}

function renderMethod() {
  const counts = state.data.manifest.counts;
  $("#method-metrics").innerHTML =
    metric(String(counts.claims), "canonical claims") +
    metric(String(counts.sources), "source groups") +
    metric(String(counts.energy_roles), "energy roles") +
    metric(String(counts.validations), "reviewed validations");
  $("#canonical-file-list").innerHTML = Object.entries(state.data.manifest.files)
    .map(([kind, file]) => `<div class="file-row"><span>${escapeHtml(kind)}</span><code>data/canonical/${escapeHtml(file)}</code></div>`).join("");
  $("#validation-summary").innerHTML = state.data.validations.records.length
    ? `<p><strong>${state.data.validations.records.length}</strong> reviewed external validations are registered.</p>`
    : '<p class="muted">No external validation result has yet been reviewed into the canonical UFS registry.</p>';
}

function populateSelect(select, values, formatter = (x) => x) {
  for (const value of [...new Set(values)].sort()) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = formatter(value);
    select.append(option);
  }
}

function setupControls() {
  populateSelect($("#family-filter"), state.data.phenomena.records.map((r) => r.family));
  populateSelect($("#energy-filter"), state.data.energy_roles.records.map((r) => r.code), titleCase);
  populateSelect($("#interaction-filter"), state.data.interactions.records.map((r) => r.interaction_type), titleCase);
  populateSelect($("#direction-filter"), state.data.interactions.records.map((r) => r.directionality), titleCase);
  populateSelect($("#frontier-domain"), state.data.frontier.records.map((r) => r.domain), titleCase);
  populateSelect($("#frontier-evidence"), state.data.frontier.records.map((r) => r.evidence?.class).filter(Boolean), titleCase);
  populateSelect($("#gap-filter"), state.data.gaps.records.map((r) => r.type), titleCase);

  ["spectrum-search", "family-filter", "energy-filter", "exp-min", "exp-max"].forEach((id) => {
    $("#" + id).addEventListener(id.startsWith("exp-") ? "input" : "input", renderSpectrum);
    if (id.includes("filter")) $("#" + id).addEventListener("change", renderSpectrum);
  });
  $("#reset-spectrum").addEventListener("click", () => {
    $("#spectrum-search").value = "";
    $("#family-filter").value = "all";
    $("#energy-filter").value = "all";
    $("#exp-min").value = "-9";
    $("#exp-max").value = "21";
    renderSpectrum();
  });

  ["connection-search"].forEach((id) => $("#" + id).addEventListener("input", renderConnections));
  ["interaction-filter", "direction-filter"].forEach((id) => $("#" + id).addEventListener("change", renderConnections));
  $("#frontier-search").addEventListener("input", renderFrontier);
  ["frontier-domain", "frontier-evidence"].forEach((id) => $("#" + id).addEventListener("change", renderFrontier));
  $("#gap-search").addEventListener("input", renderGaps);
  $("#gap-filter").addEventListener("change", renderGaps);

  $$(".nav-tab").forEach((button) => button.addEventListener("click", () => {
    const view = button.dataset.view;
    $$(".nav-tab").forEach((el) => el.classList.toggle("active", el === button));
    $$(".view").forEach((el) => el.classList.toggle("active", el.id === `view-${view}`));
    history.replaceState(null, "", `#${view}`);
    if (view === "connections") renderConnections();
  }));

  $("[data-jump-view]").forEach((button) => button.addEventListener("click", () => {
    const target = button.dataset.jumpView;
    document.querySelector(`.nav-tab[data-view="${target}"]`)?.click();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }));

  $("#print-button").addEventListener("click", () => window.print());
}

function activateHashView() {
  const view = location.hash.replace("#", "");
  if (!["spectrum", "connections", "frontier", "gaps", "method"].includes(view)) return;
  const button = document.querySelector(`.nav-tab[data-view="${view}"]`);
  button?.click();
}

function renderAll() {
  renderSpectrum();
  renderConnections();
  renderFrontier();
  renderGaps();
  renderMethod();
}

async function init() {
  try {
    state.data = await loadCanonicalData();
    state.maps = makeMaps(state.data);
    setupControls();
    renderAll();
    activateHashView();

    const counts = state.data.manifest.counts;
    $("#data-status").textContent = `Canonical v${state.data.manifest.schema_version} · ${counts.phenomena} phenomena · ${counts.interactions} interactions`;
    $("#data-status").classList.add("ok");
    $("#schema-version").textContent = state.data.manifest.schema_version;
  } catch (error) {
    console.error(error);
    $("#data-status").textContent = "Canonical data failed to load";
    document.querySelector("main").innerHTML = `
      <section class="view active">
        <div class="method-card">
          <p class="eyebrow">Load failure</p>
          <h2>The atlas cannot verify its canonical data.</h2>
          <p>${escapeHtml(error.message)}</p>
          <p>Serve the built site from a web server rather than opening <code>index.html</code> directly from the filesystem.</p>
        </div>
      </section>`;
  }
}

init();
