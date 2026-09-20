/* UFS premium exploration behavior.
   Presentation/interaction enhancement only. Scientific authority stays in data/canonical/. */

const UFS_DATASETS = ["phenomena", "interactions", "entities", "frontier"];
const UFS_MIN_EXP = -18;
const UFS_MAX_EXP = 24;

const uxState = {
  data: null,
  maps: null,
  activePreset: "all",
  activeSearchIndex: -1,
  suppressPresetReset: false,
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function titleCase(value) {
  return String(value ?? "").replaceAll("_", " ").replaceAll("-", " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

function compactHz(record) {
  const s = record?.spectral || {};
  const value = Number.isFinite(s.characteristic_hz)
    ? s.characteristic_hz
    : Number.isFinite(s.min_hz) && Number.isFinite(s.max_hz) && s.min_hz > 0 && s.max_hz > 0
      ? Math.sqrt(s.min_hz * s.max_hz)
      : Number.isFinite(s.min_hz) ? s.min_hz : s.max_hz;
  if (!Number.isFinite(value) || value <= 0) return "unmapped";
  const units = [[1e18,"EHz"],[1e15,"PHz"],[1e12,"THz"],[1e9,"GHz"],[1e6,"MHz"],[1e3,"kHz"]];
  for (const [scale, unit] of units) if (value >= scale) return `${Number((value / scale).toPrecision(3))} ${unit}`;
  if (value >= .01) return `${Number(value.toPrecision(3))} Hz`;
  return `${value.toExponential(2).replace("+", "")} Hz`;
}

async function fetchCanonical(name) {
  let lastError;
  for (const url of [`./data/${name}.json`, `../data/canonical/${name}.json`]) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return await response.json();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error(`Could not load ${name}.json`);
}

async function loadUxData() {
  const pairs = await Promise.all(UFS_DATASETS.map(async (name) => [name, await fetchCanonical(name)]));
  uxState.data = Object.fromEntries(pairs);
  uxState.maps = {
    phenomenon: new Map(uxState.data.phenomena.records.map((r) => [r.id, r])),
    entity: new Map(uxState.data.entities.records.map((r) => [r.id, r])),
    interactions: uxState.data.interactions.records,
    frontier: uxState.data.frontier.records,
  };
}

function waitForBaseApp(timeoutMs = 12000) {
  return new Promise((resolve) => {
    const started = performance.now();
    const check = () => {
      const ready = $("#data-status")?.classList.contains("ok") && $("#family-filter")?.options.length > 1 && $("#spectrum-chart")?.children.length > 0;
      if (ready || performance.now() - started > timeoutMs) resolve(ready);
      else requestAnimationFrame(check);
    };
    check();
  });
}

function triggerSpectrumRender() {
  $("#spectrum-search")?.dispatchEvent(new Event("input", { bubbles: true }));
}

function currentRange() {
  return { min: Number($("#exp-min")?.value ?? UFS_MIN_EXP), max: Number($("#exp-max")?.value ?? UFS_MAX_EXP) };
}

function setRange(min, max) {
  const minEl = $("#exp-min");
  const maxEl = $("#exp-max");
  if (!minEl || !maxEl) return;
  let low = clamp(Math.round(min), Number(minEl.min), Number(minEl.max));
  let high = clamp(Math.round(max), Number(maxEl.min), Number(maxEl.max));
  if (high <= low) high = Math.min(Number(maxEl.max), low + 1);
  if (high <= low) low = Math.max(Number(minEl.min), high - 1);
  minEl.value = String(low);
  maxEl.value = String(high);
}

function setFilters({ query = "", family = "all", min = UFS_MIN_EXP, max = UFS_MAX_EXP }) {
  uxState.suppressPresetReset = true;
  const search = $("#spectrum-search");
  const familyFilter = $("#family-filter");
  if (search) search.value = query;
  if (familyFilter) familyFilter.value = [...familyFilter.options].some((o) => o.value === family) ? family : "all";
  if ($("#energy-filter")) $("#energy-filter").value = "all";
  setRange(min, max);
  triggerSpectrumRender();
  requestAnimationFrame(() => {
    uxState.suppressPresetReset = false;
    updateViewContext();
  });
}

const presets = [
  { id: "all", label: "All", min: -18, max: 24, family: "all", query: "" },
  { id: "human", label: "Human Scale", min: -4, max: 6, family: "all", query: "" },
  { id: "earth-space", label: "Earth & Space", min: -18, max: 2, family: "all", query: "" },
  { id: "em", label: "EM Spectrum", min: 0, max: 24, family: "electromagnetic", query: "" },
  { id: "biological", label: "Biological", min: -6, max: 4, family: "all", query: "biological" },
  { id: "quantum", label: "Quantum", min: 8, max: 24, family: "all", query: "quantum" },
];

function activatePreset(id) {
  const preset = presets.find((item) => item.id === id);
  if (!preset) return;
  uxState.activePreset = id;
  $$(".preset-button").forEach((button) => {
    const active = button.dataset.preset === id;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  setFilters(preset);
  updateViewContext(preset.label);
}

function clearPresetSelection() {
  if (uxState.suppressPresetReset) return;
  uxState.activePreset = "";
  $$(".preset-button").forEach((button) => {
    button.classList.remove("active");
    button.setAttribute("aria-pressed", "false");
  });
  updateViewContext();
}

function buildDock() {
  const panel = $(".explore-panel");
  const controls = panel?.querySelector(".control-panel");
  if (!panel || !controls || controls.dataset.ufsEnhanced) return;
  controls.dataset.ufsEnhanced = "true";

  const searchLabel = controls.querySelector(".search-control");
  const search = $("#spectrum-search");
  const familyLabel = $("#family-filter")?.closest("label");
  const energyLabel = $("#energy-filter")?.closest("label");
  const minLabel = $("#exp-min")?.closest("label");
  const maxLabel = $("#exp-max")?.closest("label");
  const reset = $("#reset-spectrum");

  const presetBar = document.createElement("div");
  presetBar.className = "preset-bar";
  presetBar.setAttribute("aria-label", "Quick spectrum views");
  for (const preset of presets) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "preset-button" + (preset.id === "all" ? " active" : "");
    button.dataset.preset = preset.id;
    button.textContent = preset.label;
    button.setAttribute("aria-pressed", preset.id === "all" ? "true" : "false");
    button.addEventListener("click", () => activatePreset(preset.id));
    presetBar.append(button);
  }

  const refine = document.createElement("details");
  refine.className = "dock-refine";
  refine.innerHTML = '<summary>Refine <span aria-hidden="true">⌄</span></summary>';
  const refineGrid = document.createElement("div");
  refineGrid.className = "dock-refine-grid";
  [familyLabel, energyLabel, minLabel, maxLabel, reset].filter(Boolean).forEach((el) => refineGrid.append(el));
  refine.append(refineGrid);

  controls.replaceChildren();
  if (searchLabel) controls.append(searchLabel);
  controls.append(presetBar, refine);

  if (search && searchLabel) {
    const results = document.createElement("div");
    results.className = "search-results";
    results.id = "ufs-search-results";
    results.setAttribute("role", "listbox");
    searchLabel.append(results);
    setupSearch(search, results);
  }

  ["family-filter", "energy-filter", "exp-min", "exp-max"].forEach((id) => {
    const el = $("#" + id);
    for (const type of ["input", "change"]) el?.addEventListener(type, (event) => {
      if (event.isTrusted) clearPresetSelection();
      updateViewContext();
    });
  });
  search?.addEventListener("input", (event) => { if (event.isTrusted) clearPresetSelection(); });
  reset?.addEventListener("click", () => requestAnimationFrame(() => activatePreset("all")));
}

function matchingPhenomena(query) {
  const q = query.trim().toLowerCase();
  if (!q || !uxState.data) return [];
  return uxState.data.phenomena.records
    .map((record) => {
      const name = record.name.toLowerCase();
      const family = String(record.family || "").toLowerCase();
      const what = String(record.physical?.what_oscillates || "").toLowerCase();
      const id = record.id.toLowerCase();
      let score = 0;
      if (name.startsWith(q)) score += 8;
      if (name.includes(q)) score += 5;
      if (id.includes(q)) score += 4;
      if (family.includes(q)) score += 3;
      if (what.includes(q)) score += 1;
      return { record, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.record.name.localeCompare(b.record.name))
    .slice(0, 8)
    .map((item) => item.record);
}

function setupSearch(input, results) {
  const renderResults = () => {
    uxState.activeSearchIndex = -1;
    const matches = matchingPhenomena(input.value);
    if (!matches.length) {
      results.classList.remove("open");
      results.replaceChildren();
      return;
    }
    results.replaceChildren(...matches.map((record) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "search-result";
      button.setAttribute("role", "option");
      button.dataset.id = record.id;
      button.setAttribute("aria-selected", "false");
      const copy = document.createElement("span");
      const strong = document.createElement("strong");
      strong.textContent = record.name;
      const small = document.createElement("small");
      small.textContent = `${record.family} · ${record.physical?.what_oscillates || "canonical phenomenon"}`;
      copy.append(strong, small);
      const hz = document.createElement("span");
      hz.className = "search-hz";
      hz.textContent = compactHz(record);
      button.append(copy, hz);
      button.addEventListener("mousedown", (event) => event.preventDefault());
      button.addEventListener("click", () => focusRecord(record.id));
      return button;
    }));
    results.classList.add("open");
  };

  input.addEventListener("input", renderResults);
  input.addEventListener("keydown", (event) => {
    const options = $$(".search-result", results);
    if (!results.classList.contains("open") || !options.length) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      uxState.activeSearchIndex = (uxState.activeSearchIndex + delta + options.length) % options.length;
      options.forEach((option, index) => option.setAttribute("aria-selected", index === uxState.activeSearchIndex ? "true" : "false"));
      options[uxState.activeSearchIndex]?.scrollIntoView({ block: "nearest" });
    } else if (event.key === "Enter") {
      const option = options[uxState.activeSearchIndex >= 0 ? uxState.activeSearchIndex : 0];
      if (option) {
        event.preventDefault();
        focusRecord(option.dataset.id);
      }
    } else if (event.key === "Escape") {
      results.classList.remove("open");
    }
  });
  input.addEventListener("blur", () => setTimeout(() => results.classList.remove("open"), 120));
}

function recordWindow(record) {
  const s = record?.spectral || {};
  const values = [s.min_hz, s.max_hz, s.characteristic_hz].filter((value) => Number.isFinite(value) && value > 0);
  if (!values.length) return { min: UFS_MIN_EXP, max: UFS_MAX_EXP };
  const logs = values.map(Math.log10);
  let min = Math.floor(Math.min(...logs) - 1.35);
  let max = Math.ceil(Math.max(...logs) + 1.35);
  if (max - min < 6) {
    const mid = (min + max) / 2;
    min = Math.floor(mid - 3);
    max = Math.ceil(mid + 3);
  }
  return { min: clamp(min, UFS_MIN_EXP, 23), max: clamp(max, -17, UFS_MAX_EXP) };
}

function getMarkById(id) {
  return $$("#spectrum-chart .band-hit").find((el) => el.dataset.id === id) || null;
}

function focusRecord(id) {
  const record = uxState.maps?.phenomenon.get(id);
  if (!record) return;
  $("#ufs-search-results")?.classList.remove("open");
  clearPresetSelection();
  const range = recordWindow(record);
  setFilters({ query: "", family: "all", min: range.min, max: range.max });
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const mark = getMarkById(id);
    if (!mark) return;
    mark.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    centerMark(mark);
  }));
}

function centerMark(mark) {
  const shell = $(".chart-shell");
  if (!shell || !mark) return;
  const shellRect = shell.getBoundingClientRect();
  const markRect = mark.getBoundingClientRect();
  shell.scrollTo({
    top: Math.max(0, shell.scrollTop + markRect.top - shellRect.top - shell.clientHeight / 2 + markRect.height / 2),
    left: Math.max(0, shell.scrollLeft + markRect.left - shellRect.left - shell.clientWidth / 2 + markRect.width / 2),
    behavior: "smooth",
  });
}

function buildHowTo() {
  const panel = $(".explore-panel");
  if (!panel || $(".how-to-read")) return;
  const details = document.createElement("details");
  details.className = "how-to-read";
  details.innerHTML = '<summary><span>How to read this map</span><span>60-second orientation</span></summary>' +
    '<div class="how-to-grid">' +
    '<div class="read-step"><strong>← Slow to fast →</strong><span>Horizontal position is frequency in hertz on a logarithmic axis.</span></div>' +
    '<div class="read-step"><strong>Rows are physical families</strong><span>Shared position does not mean two phenomena are physically identical.</span></div>' +
    '<div class="read-step"><strong>Dots, bars & bands</strong><span>Marks preserve whether canonical data describes a characteristic frequency or a range.</span></div>' +
    '<div class="read-step"><strong>Evidence stays visible</strong><span>Select a mark for evidence, energy roles, relationships, and sources.</span></div>' +
    '</div>';
  panel.after(details);
}

function buildLegendToggle() {
  const legend = $(".legend");
  if (!legend || $(".legend-toggle", legend)) return;
  legend.classList.add("is-collapsed");
  const button = document.createElement("button");
  button.type = "button";
  button.className = "legend-toggle";
  button.textContent = "More legend";
  button.setAttribute("aria-expanded", "false");
  button.addEventListener("click", () => {
    const collapsed = legend.classList.toggle("is-collapsed");
    button.textContent = collapsed ? "More legend" : "Less legend";
    button.setAttribute("aria-expanded", collapsed ? "false" : "true");
  });
  legend.append(button);
}

function buildMapHud() {
  const shell = $(".chart-shell");
  if (!shell || $(".map-hud", shell)) return;
  const hud = document.createElement("div");
  hud.className = "map-hud";
  hud.setAttribute("aria-label", "Current frequency viewport");
  hud.innerHTML = '<div class="map-hud-copy"><small>Current view</small><strong id="ufs-view-context">10^-18 → 10^24 Hz</strong></div>' +
    '<div class="map-hud-actions">' +
    '<button class="dock-icon-button" type="button" data-map-zoom="in" aria-label="Zoom in">+</button>' +
    '<button class="dock-icon-button" type="button" data-map-zoom="out" aria-label="Zoom out">−</button>' +
    '<button class="dock-icon-button" type="button" data-map-zoom="all" aria-label="Show full spectrum">↺</button>' +
    '</div>';
  shell.prepend(hud);
  $$(".dock-icon-button", hud).forEach((button) => button.addEventListener("click", () => adjustZoom(button.dataset.mapZoom)));
  updateViewContext();
}

function updateViewContext(label = "") {
  const target = $("#ufs-view-context");
  if (!target) return;
  const { min, max } = currentRange();
  const preset = label || presets.find((item) => item.id === uxState.activePreset)?.label || "";
  target.textContent = `${preset ? preset + " · " : ""}10^${min} → 10^${max} Hz`;
}

function adjustZoom(action) {
  if (action === "all") return activatePreset("all");
  clearPresetSelection();
  const { min, max } = currentRange();
  const center = (min + max) / 2;
  const span = max - min;
  const nextSpan = action === "in" ? Math.max(3, span * .62) : Math.min(UFS_MAX_EXP - UFS_MIN_EXP, span * 1.55);
  setRange(center - nextSpan / 2, center + nextSpan / 2);
  triggerSpectrumRender();
  updateViewContext();
}

function boxesOverlap(a, b, pad = 5) {
  return !(a.x + a.width + pad < b.x || b.x + b.width + pad < a.x || a.y + a.height + 2 < b.y || b.y + b.height + 2 < a.y);
}

function resolveLabelCollisions() {
  const svg = $("#spectrum-chart");
  if (!svg) return;
  $$(".ufs-label-suppressed", svg).forEach((el) => el.classList.remove("ufs-label-suppressed"));
  const labels = $$(".band-hit .band-label, .band-hit .point-label", svg);
  const kept = [];
  for (const label of labels) {
    const group = label.closest(".band-hit");
    let box;
    try { box = label.getBBox(); } catch { continue; }
    if (!box.width || !box.height) continue;
    if (group?.classList.contains("selected-mark")) {
      kept.push(box);
      continue;
    }
    if (kept.some((other) => boxesOverlap(box, other))) label.classList.add("ufs-label-suppressed");
    else kept.push(box);
  }
}

function decorateSelection(id) {
  const selectedRecord = uxState.maps?.phenomenon.get(id);
  if (!selectedRecord) return;
  $$("#spectrum-chart .band-hit").forEach((mark) => {
    const record = uxState.maps.phenomenon.get(mark.dataset.id);
    mark.classList.toggle("ufs-row-context", Boolean(record && record.family === selectedRecord.family));
  });
  if (matchMedia("(max-width: 760px)").matches) $("#inspector")?.classList.add("is-mobile-sheet-open");
}

function setupChartEnhancement() {
  const chart = $("#spectrum-chart");
  if (!chart || chart.dataset.ufsEnhanced) return;
  chart.dataset.ufsEnhanced = "true";
  const enhance = () => requestAnimationFrame(() => {
    resolveLabelCollisions();
    const selected = $(".selected-mark", chart)?.dataset.id;
    if (selected) decorateSelection(selected);
    updateViewContext();
  });
  new MutationObserver(enhance).observe(chart, { childList: true });
  for (const type of ["click", "keydown"]) chart.addEventListener(type, (event) => {
    if (type === "keydown" && event.key !== "Enter" && event.key !== " ") return;
    const mark = event.target.closest?.(".band-hit");
    if (!mark) return;
    requestAnimationFrame(() => {
      decorateSelection(mark.dataset.id);
      enhanceInspectorFromCurrentState();
    });
  });
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resolveLabelCollisions, 100);
  });
  enhance();
}

function relatedInteractions(id) {
  const entityIds = new Set(uxState.data.entities.records.filter((entity) => (entity.related_phenomenon_ids || []).includes(id)).map((entity) => entity.id));
  if (!entityIds.size) return [];
  return uxState.maps.interactions.filter((interaction) => entityIds.has(interaction.source_entity_id || interaction.source) || entityIds.has(interaction.target_entity_id || interaction.target));
}

function explicitFrontierLinks(id) {
  return uxState.maps.frontier.filter((record) => (record.related_phenomenon_ids || []).includes(id) || (record.related_ids || []).includes(id));
}

function entityName(id) {
  return uxState.maps.entity.get(id)?.display_name || id;
}

function relationButton(interaction) {
  const source = interaction.source_entity_id || interaction.source;
  const target = interaction.target_entity_id || interaction.target;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "relation-button";
  const strong = document.createElement("strong");
  strong.textContent = titleCase(interaction.interaction_type);
  const span = document.createElement("span");
  span.textContent = `${entityName(source)} → ${entityName(target)} · ${interaction.evidence?.label || interaction.evidence?.class || "evidence recorded"}`;
  button.append(strong, span);
  button.addEventListener("click", () => openInteraction(interaction.id));
  return button;
}

function openInteraction(id) {
  $('.nav-tab[data-view="connections"]')?.click();
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const card = $$("#interaction-list .record-card").find((el) => el.dataset.id === id);
    card?.click();
    card?.scrollIntoView({ behavior: "smooth", block: "center" });
  }));
}

function currentInspectorId() {
  const text = $("#inspector .eyebrow")?.textContent || "";
  return text.toLowerCase().includes("spectrum inspector") ? text.split("·").pop()?.trim() || null : null;
}

function enhanceInspector(id) {
  const inspector = $("#inspector");
  if (!inspector || !id || !uxState.maps.phenomenon.has(id)) return;
  if (inspector.dataset.ufsEnhancedId === id && $(".inspector-related", inspector)) return;
  inspector.dataset.ufsEnhancedId = id;

  const close = document.createElement("button");
  close.type = "button";
  close.className = "inspector-close";
  close.setAttribute("aria-label", "Close inspector");
  close.textContent = "×";
  close.addEventListener("click", () => inspector.classList.remove("is-mobile-sheet-open"));
  inspector.prepend(close);

  const interactions = relatedInteractions(id).slice(0, 5);
  const related = document.createElement("section");
  related.className = "inspector-related";
  const heading = document.createElement("h4");
  heading.textContent = "Related interactions";
  const list = document.createElement("div");
  list.className = "relation-list";
  if (interactions.length) interactions.forEach((item) => list.append(relationButton(item)));
  else {
    const empty = document.createElement("p");
    empty.className = "relation-empty";
    empty.textContent = "No explicit interaction endpoint is registered for this phenomenon.";
    list.append(empty);
  }
  related.append(heading, list);
  inspector.append(related);

  const frontierItems = explicitFrontierLinks(id).slice(0, 4);
  const frontierSection = document.createElement("section");
  frontierSection.className = "inspector-related";
  const frontierHeading = document.createElement("h4");
  frontierHeading.textContent = "Related frontier items";
  frontierSection.append(frontierHeading);
  if (frontierItems.length) {
    const frontierList = document.createElement("div");
    frontierList.className = "relation-list";
    for (const item of frontierItems) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "relation-button";
      const strong = document.createElement("strong");
      strong.textContent = item.name;
      const span = document.createElement("span");
      span.textContent = item.evidence?.label || item.evidence?.class || item.status;
      button.append(strong, span);
      button.addEventListener("click", () => {
        $('.nav-tab[data-view="frontier"]')?.click();
        requestAnimationFrame(() => {
          const card = $$("#frontier-list .record-card").find((el) => el.dataset.id === item.id);
          card?.click();
          card?.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      });
      frontierList.append(button);
    }
    frontierSection.append(frontierList);
  } else {
    const empty = document.createElement("p");
    empty.className = "relation-empty";
    empty.textContent = "No explicit canonical frontier relationship is registered.";
    frontierSection.append(empty);
  }
  inspector.append(frontierSection);
}

function enhanceInspectorFromCurrentState() {
  const id = currentInspectorId() || $(".selected-mark", $("#spectrum-chart"))?.dataset.id;
  if (id) enhanceInspector(id);
}

function setupInspectorObserver() {
  const inspector = $("#inspector");
  if (!inspector || inspector.dataset.ufsObserved) return;
  inspector.dataset.ufsObserved = "true";
  let scheduled = false;
  new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      enhanceInspectorFromCurrentState();
    });
  }).observe(inspector, { childList: true });
  enhanceInspectorFromCurrentState();
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") inspector.classList.remove("is-mobile-sheet-open");
  });
}

function polishFrontier() {
  const strip = $(".frontier-strip");
  if (!strip || $(".frontier-boundary-note", strip)) return;
  const eyebrow = $(".frontier-strip-copy .eyebrow", strip);
  if (eyebrow) eyebrow.textContent = "Beyond the measured map";
  const note = document.createElement("p");
  note.className = "frontier-boundary-note";
  note.textContent = "These canonical frontier records remain visible without being assigned a fabricated position on the frequency axis.";
  $(".frontier-strip-copy", strip)?.after(note);
}

async function initUx() {
  try {
    const [, ready] = await Promise.all([loadUxData(), waitForBaseApp()]);
    if (!ready) throw new Error("Base atlas did not finish loading in time");
    buildDock();
    buildHowTo();
    buildLegendToggle();
    buildMapHud();
    setupChartEnhancement();
    setupInspectorObserver();
    polishFrontier();
  } catch (error) {
    console.warn("UFS premium UX enhancement could not initialize:", error);
  }
}

initUx();
