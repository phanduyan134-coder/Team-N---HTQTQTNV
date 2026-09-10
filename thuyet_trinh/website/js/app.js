/**
 * FPT Long Châu BPMS Application Logic
 */

let currentProcess = null;
let currentTab = "overview";
let currentStepIndex = 0;
let autoPlayTimer = null;
let zoomLevel = 1.0;
let currentBpmnMode = "as-is"; // "as-is" or "to-be"

document.addEventListener("DOMContentLoaded", () => {
  renderProcessGrid("all");
  initFilterButtons();
  initSearchInput();
  initModalEvents();
});

// Render cards
function renderProcessGrid(category, query = "") {
  const container = document.getElementById("process-grid");
  if (!container) return;

  container.innerHTML = "";
  const filtered = PROCESS_DATA.filter(p => {
    const matchCat = (category === "all" || p.category === category);
    const matchQuery = !query || 
      p.name.toLowerCase().includes(query.toLowerCase()) || 
      p.desc.toLowerCase().includes(query.toLowerCase()) ||
      p.code.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500">
        <i class="fa-solid fa-folder-open text-4xl mb-3 text-slate-300"></i>
        <p class="text-lg font-medium">Không tìm thấy quy trình phù hợp</p>
        <p class="text-sm">Vui lòng thử lại với từ khóa khác</p>
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col overflow-hidden group";
    card.innerHTML = `
      <div class="p-6 flex-1 flex flex-col">
        <div class="flex items-center justify-between mb-4">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${p.categoryBadge}">
            ${p.category}
          </span>
          <span class="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
            ${p.code}
          </span>
        </div>

        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300" style="background: linear-gradient(135deg, ${p.color}, #1e3a8a);">
            <i class="fa-solid ${p.icon} text-lg"></i>
          </div>
          <div>
            <h3 class="font-bold text-slate-900 text-lg leading-snug group-hover:text-blue-600 transition-colors">
              ${p.name}
            </h3>
            <p class="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
              <i class="fa-regular fa-building text-slate-400"></i> ${p.dept}
            </p>
          </div>
        </div>

        <p class="text-slate-600 text-sm mb-5 line-clamp-2 leading-relaxed">
          ${p.desc}
        </p>

        <div class="mt-auto pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-500">
          <div>
            <span class="block text-slate-400">Độ phức tạp:</span>
            <span class="font-semibold text-slate-700">${p.complexity}</span>
          </div>
          <div>
            <span class="block text-slate-400">Tần suất:</span>
            <span class="font-semibold text-slate-700 truncate block">${p.frequency}</span>
          </div>
        </div>
      </div>

      <div class="px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
        <span class="text-xs text-blue-600 font-semibold group-hover:underline">Xem mô phỏng BPMN</span>
        <button class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>
    `;

    card.addEventListener("click", () => openProcessModal(p.id));
    container.appendChild(card);
  });
}

// Filter buttons
function initFilterButtons() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => {
        b.classList.remove("bg-blue-600", "text-white", "shadow-sm");
        b.classList.add("bg-white", "text-slate-600", "hover:bg-slate-50");
      });
      btn.classList.remove("bg-white", "text-slate-600", "hover:bg-slate-50");
      btn.classList.add("bg-blue-600", "text-white", "shadow-sm");

      const cat = btn.getAttribute("data-category");
      const searchVal = document.getElementById("search-input")?.value || "";
      renderProcessGrid(cat, searchVal);
    });
  });
}

// Search input
function initSearchInput() {
  const input = document.getElementById("search-input");
  if (!input) return;
  input.addEventListener("input", (e) => {
    const activeBtn = document.querySelector(".filter-btn.bg-blue-600");
    const cat = activeBtn ? activeBtn.getAttribute("data-category") : "all";
    renderProcessGrid(cat, e.target.value);
  });
}

// Modal handling
function openProcessModal(processId) {
  const process = PROCESS_DATA.find(p => p.id === processId);
  if (!process) return;

  currentProcess = process;
  currentStepIndex = 0;
  zoomLevel = 1.0;
  currentBpmnMode = "as-is";
  stopAutoPlay();

  // Populate header
  document.getElementById("modal-code").textContent = process.code;
  document.getElementById("modal-name").textContent = process.name;
  document.getElementById("modal-category").textContent = process.category;
  document.getElementById("modal-category").className = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${process.categoryBadge}`;
  document.getElementById("modal-dept").textContent = process.dept;

  // Switch to Overview Tab by default
  switchTab("overview");

  // Show modal
  const modal = document.getElementById("process-modal");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeProcessModal() {
  const modal = document.getElementById("process-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
  stopAutoPlay();
}

function initModalEvents() {
  document.getElementById("modal-close-btn")?.addEventListener("click", closeProcessModal);
  
  // Close on backdrop click
  document.getElementById("process-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "process-modal") closeProcessModal();
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProcessModal();
  });

  // Tab buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // BPMN Viewer Controls
  document.getElementById("zoom-in-btn")?.addEventListener("click", () => {
    zoomLevel = Math.min(zoomLevel + 0.2, 2.5);
    applyZoom();
  });
  document.getElementById("zoom-out-btn")?.addEventListener("click", () => {
    zoomLevel = Math.max(zoomLevel - 0.2, 0.4);
    applyZoom();
  });
  document.getElementById("zoom-reset-btn")?.addEventListener("click", () => {
    zoomLevel = 1.0;
    applyZoom();
  });
  document.getElementById("zoom-full-btn")?.addEventListener("click", () => {
    if (currentProcess) {
      const targetSvg = (currentBpmnMode === "to-be" && currentProcess.toBeSvg) 
        ? currentProcess.toBeSvg 
        : currentProcess.bpmnSvg;
      window.open(targetSvg, "_blank");
    }
  });

  // Simulation controls
  document.getElementById("sim-prev-btn")?.addEventListener("click", () => {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      renderSimulationStep();
    }
  });
  document.getElementById("sim-next-btn")?.addEventListener("click", () => {
    if (currentProcess && currentStepIndex < currentProcess.simulation.length - 1) {
      currentStepIndex++;
      renderSimulationStep();
    }
  });
  document.getElementById("sim-play-btn")?.addEventListener("click", toggleAutoPlay);
}

function switchTab(tabId) {
  currentTab = tabId;

  // Highlight tab button
  document.querySelectorAll(".tab-btn").forEach(btn => {
    const isSelected = btn.getAttribute("data-tab") === tabId;
    if (isSelected) {
      btn.className = "tab-btn px-4 py-3 text-sm font-bold text-blue-600 border-b-2 border-blue-600 flex items-center gap-2";
    } else {
      btn.className = "tab-btn px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-800 border-b-2 border-transparent flex items-center gap-2";
    }
  });

  // Show corresponding tab content
  const tabs = ["overview", "bpmn", "simulation", "compare"];
  tabs.forEach(t => {
    const el = document.getElementById(`tab-content-${t}`);
    if (el) {
      if (t === tabId) el.classList.remove("hidden");
      else el.classList.add("hidden");
    }
  });

  if (!currentProcess) return;

  if (tabId === "overview") renderOverviewTab();
  else if (tabId === "bpmn") renderBpmnTab();
  else if (tabId === "simulation") renderSimulationTab();
  else if (tabId === "compare") renderCompareTab();
}

// Tab 1: Overview
function renderOverviewTab() {
  const p = currentProcess;
  const c = document.getElementById("tab-content-overview");
  if (!c || !p) return;

  c.innerHTML = `
    <div class="space-y-6">
      <!-- Mục tiêu & Thông tin cốt lõi -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-blue-50/60 rounded-xl border border-blue-100 md:col-span-2">
          <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-bullseye"></i> Mục tiêu quy trình
          </h4>
          <p class="text-sm text-slate-700 leading-relaxed font-medium">
            ${p.overview.objective}
          </p>
        </div>
        <div class="p-4 bg-amber-50/60 rounded-xl border border-amber-100">
          <h4 class="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1.5">
            <i class="fa-solid fa-clock"></i> Thời gian trung bình
          </h4>
          <p class="text-sm text-slate-700 leading-relaxed font-semibold">
            ${p.overview.avgTime}
          </p>
        </div>
      </div>

      <!-- Đầu vào / Đầu ra / Biểu mẫu -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span class="font-bold text-slate-800 block mb-1.5 text-xs uppercase tracking-wider text-slate-500">
            <i class="fa-solid fa-arrow-right-to-bracket text-blue-600 mr-1"></i> Đầu vào (Inputs)
          </span>
          <p class="text-slate-700 text-xs leading-relaxed">${p.overview.input}</p>
        </div>
        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span class="font-bold text-slate-800 block mb-1.5 text-xs uppercase tracking-wider text-slate-500">
            <i class="fa-solid fa-arrow-right-from-bracket text-emerald-600 mr-1"></i> Đầu ra (Outputs)
          </span>
          <p class="text-slate-700 text-xs leading-relaxed">${p.overview.output}</p>
        </div>
        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span class="font-bold text-slate-800 block mb-1.5 text-xs uppercase tracking-wider text-slate-500">
            <i class="fa-solid fa-file-lines text-purple-600 mr-1"></i> Biểu mẫu / Hệ thống
          </span>
          <p class="text-slate-700 text-xs leading-relaxed">${p.overview.forms}</p>
        </div>
      </div>

      <!-- Tác nhân tham gia (Swimlanes) -->
      <div>
        <h4 class="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
          <i class="fa-solid fa-users text-blue-600"></i> Các tác nhân tham gia quy trình
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${p.overview.actors.map(a => `
            <div class="p-3 bg-white rounded-lg border border-slate-200 flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 font-bold shrink-0 text-xs">
                ${a.name.charAt(0)}
              </div>
              <div>
                <h5 class="font-semibold text-slate-900 text-xs">${a.name}</h5>
                <p class="text-xs text-slate-500 mt-0.5">${a.role}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Bảng các bước thực hiện -->
      <div>
        <h4 class="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-blue-600"></i> Trình tự các bước thực hiện (AS-IS)
        </h4>
        <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table class="w-full text-left text-xs border-collapse">
            <thead class="bg-slate-100 text-slate-700 uppercase font-bold border-b border-slate-200">
              <tr>
                <th class="py-2.5 px-3 w-12 text-center">STT</th>
                <th class="py-2.5 px-3">Tên bước thực hiện</th>
                <th class="py-2.5 px-3">Tác nhân</th>
                <th class="py-2.5 px-3 text-center">Phân loại</th>
                <th class="py-2.5 px-3 text-center">Thời gian</th>
                <th class="py-2.5 px-3">Mô tả chi tiết</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 bg-white">
              ${p.steps.map(s => {
                let badgeClass = s.type === "VA" 
                  ? "bg-emerald-100 text-emerald-800" 
                  : (s.type === "BVA" ? "bg-amber-100 text-amber-800" : "bg-rose-100 text-rose-800");
                return `
                  <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-2.5 px-3 text-center font-bold text-slate-500">${s.num}</td>
                    <td class="py-2.5 px-3 font-semibold text-slate-900">${s.name}</td>
                    <td class="py-2.5 px-3 text-slate-600 font-medium">${s.actor}</td>
                    <td class="py-2.5 px-3 text-center">
                      <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold ${badgeClass}">
                        ${s.type}
                      </span>
                    </td>
                    <td class="py-2.5 px-3 text-center text-slate-500">${s.time}</td>
                    <td class="py-2.5 px-3 text-slate-600 leading-relaxed">${s.desc}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// Tab 2: BPMN Viewer
function renderBpmnTab() {
  const p = currentProcess;
  const c = document.getElementById("tab-content-bpmn");
  if (!c || !p) return;

  renderBpmnModeControls();

  const isToBe = currentBpmnMode === "to-be" && Boolean(p.toBeSvg);
  const activeSvg = isToBe ? p.toBeSvg : p.bpmnSvg;

  const imgEl = document.getElementById("bpmn-svg-element");
  if (imgEl) {
    imgEl.src = activeSvg;
    zoomLevel = 1.0;
    applyZoom();
  }

  // Update info bar
  const titleEl = document.getElementById("bpmn-diagram-title");
  const badgeEl = document.getElementById("bpmn-scope-badge");
  
  if (titleEl) {
    if (isToBe) {
      titleEl.innerHTML = `<span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase"><i class="fa-solid fa-sparkles text-amber-500 mr-1"></i> Mô hình TO-BE</span> <span class="font-bold text-slate-800 text-xs">${p.toBeTitle || p.name}</span>`;
    } else {
      titleEl.innerHTML = `<span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold uppercase"><i class="fa-regular fa-file-lines text-blue-600 mr-1"></i> Mô hình AS-IS</span> <span class="font-bold text-slate-800 text-xs">Sơ đồ hiện trạng – ${p.name}</span>`;
    }
  }

  if (badgeEl) {
    if (p.toBeSvg) {
      badgeEl.innerHTML = `<span class="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200"><i class="fa-solid fa-circle-check text-xs"></i> Quy trình trọng điểm có đề xuất TO-BE</span>`;
    } else {
      badgeEl.innerHTML = `<span class="inline-flex items-center gap-1 text-[11px] text-slate-500 font-medium bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200"><i class="fa-solid fa-circle-info text-xs"></i> Phạm vi nghiên cứu mô hình hóa AS-IS</span>`;
    }
  }
}

function renderBpmnModeControls() {
  const p = currentProcess;
  const modeContainer = document.getElementById("bpmn-mode-container");
  if (!modeContainer || !p) return;

  if (p.toBeSvg) {
    // 2 priority processes: Show toggle buttons
    modeContainer.innerHTML = `
      <div class="inline-flex items-center bg-white p-0.5 rounded-lg border border-slate-300 shadow-sm ml-1">
        <button id="btn-mode-asis" onclick="setBpmnMode('as-is')" class="px-2.5 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${currentBpmnMode === 'as-is' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
          <i class="fa-regular fa-file-lines"></i> <span>Sơ đồ AS-IS</span>
        </button>
        <button id="btn-mode-tobe" onclick="setBpmnMode('to-be')" class="px-2.5 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${currentBpmnMode === 'to-be' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
          <i class="fa-solid fa-wand-magic-sparkles text-amber-300"></i> <span>Sơ đồ TO-BE (Cải tiến)</span>
        </button>
      </div>
    `;
  } else {
    // 4 other processes: Show AS-IS badge
    modeContainer.innerHTML = `
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-200/80 text-slate-700 text-xs font-semibold border border-slate-300 ml-1">
        <i class="fa-solid fa-layer-group text-blue-600"></i> Sơ đồ hiện trạng AS-IS
      </span>
    `;
  }
}

window.setBpmnMode = function(mode) {
  currentBpmnMode = mode;
  renderBpmnTab();
};

function applyZoom() {
  const imgEl = document.getElementById("bpmn-svg-element");
  const zoomText = document.getElementById("zoom-level-text");
  if (imgEl) {
    imgEl.style.transform = `scale(${zoomLevel})`;
  }
  if (zoomText) {
    zoomText.textContent = `${Math.round(zoomLevel * 100)}%`;
  }
}

// Tab 3: Simulation Stepper
function renderSimulationTab() {
  currentStepIndex = 0;
  renderSimulationStep();
}

function renderSimulationStep() {
  const p = currentProcess;
  if (!p || !p.simulation || p.simulation.length === 0) return;

  const cur = p.simulation[currentStepIndex];
  const total = p.simulation.length;

  // Update progress bar
  const progressBar = document.getElementById("sim-progress-bar");
  if (progressBar) {
    progressBar.style.width = `${cur.progress}%`;
  }

  // Update step indicators
  const dotsContainer = document.getElementById("sim-dots-container");
  if (dotsContainer) {
    dotsContainer.innerHTML = p.simulation.map((s, idx) => {
      let isDone = idx < currentStepIndex;
      let isCurrent = idx === currentStepIndex;
      let dotColor = isDone 
        ? "bg-emerald-500 text-white" 
        : (isCurrent ? "bg-blue-600 text-white ring-4 ring-blue-100" : "bg-slate-200 text-slate-600");
      return `
        <button onclick="jumpToSimulationStep(${idx})" class="flex items-center gap-1.5 text-xs font-semibold">
          <span class="w-7 h-7 rounded-full flex items-center justify-center transition-all ${dotColor}">
            ${idx + 1}
          </span>
          <span class="hidden md:inline ${isCurrent ? 'text-blue-600 font-bold' : 'text-slate-500'}">
            ${s.title}
          </span>
          ${idx < total - 1 ? `<span class="w-4 h-0.5 bg-slate-200 hidden md:block"></span>` : ""}
        </button>
      `;
    }).join("");
  }

  // Update active step details
  const stepBox = document.getElementById("sim-active-box");
  if (stepBox) {
    stepBox.innerHTML = `
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-2xl border border-blue-200/80 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <span class="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">
            Bước ${currentStepIndex + 1} / ${total}: ${cur.state}
          </span>
          <span class="text-xs font-bold text-slate-500 flex items-center gap-1">
            <i class="fa-regular fa-circle-check text-emerald-600"></i> Tiến độ: ${cur.progress}%
          </span>
        </div>

        <h3 class="text-xl font-bold text-slate-900 mb-2">
          ${cur.title}
        </h3>

        <div class="flex items-center gap-2 mb-4 text-sm font-semibold text-blue-700 bg-white/80 px-3 py-1.5 rounded-lg w-fit border border-blue-100">
          <i class="fa-solid fa-user-gear"></i> Tác nhân thực thi: <span class="text-slate-900">${cur.actor}</span>
        </div>

        <p class="text-slate-700 text-sm leading-relaxed bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          ${cur.action}
        </p>
      </div>
    `;
  }

  // Update prev / next buttons disabled state
  const prevBtn = document.getElementById("sim-prev-btn");
  const nextBtn = document.getElementById("sim-next-btn");
  if (prevBtn) prevBtn.disabled = (currentStepIndex === 0);
  if (nextBtn) nextBtn.disabled = (currentStepIndex === total - 1);
}

function jumpToSimulationStep(index) {
  currentStepIndex = index;
  renderSimulationStep();
}

function toggleAutoPlay() {
  const playBtn = document.getElementById("sim-play-btn");
  if (autoPlayTimer) {
    stopAutoPlay();
  } else {
    if (currentProcess && currentStepIndex === currentProcess.simulation.length - 1) {
      currentStepIndex = 0;
    }
    if (playBtn) playBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Tạm dừng`;
    autoPlayTimer = setInterval(() => {
      if (currentProcess && currentStepIndex < currentProcess.simulation.length - 1) {
        currentStepIndex++;
        renderSimulationStep();
      } else {
        stopAutoPlay();
      }
    }, 2500);
  }
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
    const playBtn = document.getElementById("sim-play-btn");
    if (playBtn) playBtn.innerHTML = `<i class="fa-solid fa-play"></i> Tự động chạy`;
  }
}

// Tab 4: Compare AS-IS vs TO-BE
function renderCompareTab() {
  const p = currentProcess;
  const c = document.getElementById("tab-content-compare");
  if (!c || !p || !p.comparison) return;

  c.innerHTML = `
    <div class="space-y-6">
      <!-- Cột so sánh Vấn đề AS-IS vs Giải pháp TO-BE -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- AS-IS -->
        <div class="bg-rose-50/50 rounded-2xl p-5 border border-rose-200">
          <div class="flex items-center gap-2 mb-4 text-rose-800 font-bold text-sm uppercase tracking-wider">
            <i class="fa-solid fa-triangle-exclamation text-base"></i> Hiện trạng (AS-IS) còn hạn chế
          </div>
          <ul class="space-y-3 text-xs text-slate-700">
            ${p.comparison.asIsIssues.map(issue => `
              <li class="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-rose-100 shadow-sm">
                <i class="fa-solid fa-xmark text-rose-500 mt-0.5 font-bold"></i>
                <span class="leading-relaxed font-medium">${issue}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- TO-BE -->
        <div class="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-200">
          <div class="flex items-center gap-2 mb-4 text-emerald-800 font-bold text-sm uppercase tracking-wider">
            <i class="fa-solid fa-wand-magic-sparkles text-base"></i> Đề xuất cải tiến (TO-BE)
          </div>
          <ul class="space-y-3 text-xs text-slate-700">
            ${p.comparison.toBeSolutions.map(sol => `
              <li class="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-emerald-100 shadow-sm">
                <i class="fa-solid fa-check text-emerald-600 mt-0.5 font-bold"></i>
                <span class="leading-relaxed font-medium">${sol}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>

      <!-- Bảng KPI cải thiện dự kiến -->
      <div>
        <h4 class="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
          <i class="fa-solid fa-chart-line text-blue-600"></i> Lợi ích lượng hóa sau cải tiến (KPIs)
        </h4>
        <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table class="w-full text-left text-xs border-collapse">
            <thead class="bg-slate-100 text-slate-700 uppercase font-bold border-b border-slate-200">
              <tr>
                <th class="py-2.5 px-4">Chỉ số đo lường</th>
                <th class="py-2.5 px-4 text-center">Trước cải tiến (AS-IS)</th>
                <th class="py-2.5 px-4 text-center">Sau cải tiến (TO-BE)</th>
                <th class="py-2.5 px-4 text-center">Hiệu quả cải thiện</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 bg-white">
              ${p.comparison.kpis.map(k => `
                <tr class="hover:bg-slate-50 transition-colors">
                  <td class="py-3 px-4 font-semibold text-slate-900">${k.metric}</td>
                  <td class="py-3 px-4 text-center font-mono text-rose-600 font-bold bg-rose-50/40">${k.asIs}</td>
                  <td class="py-3 px-4 text-center font-mono text-emerald-700 font-bold bg-emerald-50/40">${k.toBe}</td>
                  <td class="py-3 px-4 text-center">
                    <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      ${k.imp}
                    </span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
