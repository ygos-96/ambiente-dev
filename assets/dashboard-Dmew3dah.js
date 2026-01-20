import"./index-BI9FPup0.js";import{S as v,L as y,G as w}from"./Sidebar-B88xaBQr.js";class D{constructor(t={}){if(this.container=typeof t.container=="string"?document.querySelector(t.container):t.container,!this.container)throw new Error("Container não encontrado");this.storageService=t.storageService||null,this.charts={},this.currentFilters={startDate:null,endDate:null}}async init(){this.render(),this.setupEventListeners();const t=new Date,a=new Date;a.setDate(a.getDate()-30),this.currentFilters={startDate:this.formatDate(a),endDate:this.formatDate(t)};const e=this.container.querySelector('[data-filter="30"]');e&&(e.classList.add("bg-blue-600","text-white"),e.classList.remove("bg-[#222222]","hover:bg-[#2a2a2a]")),await this.loadData()}render(){this.container.innerHTML=`
      <div class="w-full max-w-7xl mx-auto space-y-6 md:space-y-8">
          <!-- Filtros de Data -->
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 sm:p-5 md:p-6">
              <h2 class="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 sm:mb-5">Filtros de Período</h2>
              <div class="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-3 mb-4 sm:mb-5">
                <button class="filter-btn px-3 sm:px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg transition-colors cursor-pointer text-xs sm:text-sm font-medium" data-filter="7">
                  Últimos 7 dias
                </button>
                <button class="filter-btn px-3 sm:px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg transition-colors cursor-pointer text-xs sm:text-sm font-medium" data-filter="15">
                  Últimos 15 dias
                </button>
                <button class="filter-btn px-3 sm:px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg transition-colors cursor-pointer text-xs sm:text-sm font-medium" data-filter="30">
                  Últimos 30 dias
                </button>
                <button class="filter-btn px-3 sm:px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg transition-colors cursor-pointer text-xs sm:text-sm font-medium col-span-2 sm:col-span-1 flex items-center justify-center" data-filter="custom" title="Período Personalizado">
                  <i class="fas fa-filter"></i>
                </button>
              </div>
              
              <!-- Inputs de data personalizada -->
              <div id="custom-date-inputs" class="hidden flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <div class="flex-1 min-w-0 sm:min-w-[200px]">
                  <label class="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Data Inicial</label>
                  <input type="date" id="start-date" class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                </div>
                <div class="flex-1 min-w-0 sm:min-w-[200px]">
                  <label class="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Data Final</label>
                  <input type="date" id="end-date" class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                </div>
                <div class="flex items-end">
                  <button id="apply-custom-filter" class="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-sm">
                    Aplicar
                  </button>
                </div>
              </div>
              
              <!-- Período atual -->
              <div id="current-period" class="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400">
                <i class="fas fa-calendar-alt mr-2"></i>
                <span id="period-text">Carregando...</span>
              </div>
            </div>

          <!-- Cards de Estatísticas -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6">
            <!-- Total de Ações -->
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 sm:p-5 md:p-6">
              <div class="flex items-center justify-between">
                <div class="flex-1 min-w-0">
                  <p class="text-xs sm:text-sm font-medium text-gray-400 mb-2">Total de Ações</p>
                  <p class="text-xl sm:text-2xl md:text-3xl font-bold text-white truncate" id="total-actions">0</p>
                </div>
                <div class="p-2 sm:p-3 bg-blue-900/50 rounded-full flex-shrink-0 ml-3">
                  <i class="fas fa-tasks text-blue-400 text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </div>
            </div>

            <!-- Ações Finalizadas -->
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 sm:p-5 md:p-6">
              <div class="flex items-center justify-between">
                <div class="flex-1 min-w-0">
                  <p class="text-xs sm:text-sm font-medium text-gray-400 mb-2">Ações Finalizadas</p>
                  <p class="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 truncate" id="finished-actions">0</p>
                </div>
                <div class="p-2 sm:p-3 bg-green-900/50 rounded-full flex-shrink-0 ml-3">
                  <i class="fas fa-check-circle text-green-400 text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </div>
            </div>

            <!-- Ações Pendentes -->
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 sm:p-5 md:p-6">
              <div class="flex items-center justify-between">
                <div class="flex-1 min-w-0">
                  <p class="text-xs sm:text-sm font-medium text-gray-400 mb-2">Ações Pendentes</p>
                  <p class="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 truncate" id="pending-actions">0</p>
                </div>
                <div class="p-2 sm:p-3 bg-orange-900/50 rounded-full flex-shrink-0 ml-3">
                  <i class="fas fa-clock text-orange-400 text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </div>
            </div>

            <!-- Tempo Médio -->
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 sm:p-5 md:p-6">
              <div class="flex items-center justify-between">
                <div class="flex-1 min-w-0">
                  <p class="text-xs sm:text-sm font-medium text-gray-400 mb-2">Tempo Médio</p>
                  <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 truncate" id="avg-time">-</p>
                </div>
                <div class="p-2 sm:p-3 bg-purple-900/50 rounded-full flex-shrink-0 ml-3">
                  <i class="fas fa-hourglass-half text-purple-400 text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Gráficos -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-6">
            <!-- Gráfico de Pizza - Finalizados vs Pendentes -->
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-3 sm:p-4 md:p-6">
              <h3 class="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Status das Ações</h3>
              <div class="h-64 sm:h-72 md:h-80 flex items-center justify-center relative">
                <canvas id="status-chart"></canvas>
              </div>
            </div>

            <!-- Gráfico de Barras - Ações por Dia -->
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-3 sm:p-4 md:p-6">
              <h3 class="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Ações Criadas por Dia</h3>
              <div class="h-64 sm:h-72 md:h-80 flex items-center justify-center relative">
                <canvas id="daily-chart"></canvas>
              </div>
            </div>
          </div>

          <!-- Gráfico de Linha - Tendência de Finalização -->
          <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 sm:p-5 md:p-6">
            <h3 class="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Tendência de Finalização</h3>
            <div class="h-64 sm:h-72 md:h-80 flex items-center justify-center relative">
              <canvas id="trend-chart"></canvas>
            </div>
          </div>

          <!-- Loading Overlay -->
          <div id="loading-overlay" class="hidden fixed inset-0 bg-[#121212]/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div class="bg-[#1a1a1a] rounded-lg shadow-2xl border border-[#2a2a2a] p-6 sm:p-8 text-center max-w-sm mx-4">
              <div class="inline-block animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
              <p class="text-white font-medium text-base sm:text-lg" id="loading-message">Carregando dados...</p>
            </div>
          </div>

          <!-- Loading State (fallback) -->
          <div id="loading-state" class="hidden text-center py-8 sm:py-12">
            <div class="inline-block animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p class="mt-4 text-gray-400 text-sm sm:text-base">Carregando dados...</p>
          </div>

          <!-- Error State -->
          <div id="error-state" class="hidden text-center py-8 sm:py-12">
            <i class="fas fa-exclamation-triangle text-red-500 text-3xl sm:text-4xl mb-4"></i>
            <p class="text-red-400 font-medium text-sm sm:text-base">Erro ao carregar dados</p>
            <p class="text-gray-400 mt-2 text-xs sm:text-sm" id="error-message"></p>
          </div>
        </div>
    `}setupEventListeners(){this.container.querySelectorAll(".filter-btn").forEach(a=>{a.addEventListener("click",e=>{const s=e.currentTarget.dataset.filter;if(this.container.querySelectorAll(".filter-btn").forEach(i=>{i.classList.remove("bg-blue-600","text-white"),i.classList.add("bg-[#222222]","hover:bg-[#2a2a2a]","text-white")}),s==="custom")this.container.querySelector("#custom-date-inputs").classList.remove("hidden"),this.container.querySelectorAll(".filter-btn").forEach(o=>{o!==e.currentTarget&&(o.classList.remove("bg-blue-600","text-white"),o.classList.add("bg-[#222222]","hover:bg-[#2a2a2a]","text-white"))}),e.currentTarget.classList.add("bg-blue-600","text-white"),e.currentTarget.classList.remove("bg-[#222222]","hover:bg-[#2a2a2a]");else{this.container.querySelector("#custom-date-inputs").classList.add("hidden"),this.container.querySelectorAll(".filter-btn").forEach(d=>{d!==e.currentTarget&&(d.classList.remove("bg-blue-600","text-white"),d.classList.add("bg-[#222222]","hover:bg-[#2a2a2a]","text-white"))});const o=parseInt(s);this.applyQuickFilter(o),e.currentTarget.classList.add("bg-blue-600","text-white"),e.currentTarget.classList.remove("bg-[#222222]","hover:bg-[#2a2a2a]")}})});const t=this.container.querySelector("#apply-custom-filter");t&&t.addEventListener("click",()=>{this.applyCustomFilter()})}applyQuickFilter(t){const a=new Date,e=new Date;e.setDate(e.getDate()-t),this.currentFilters={startDate:this.formatDate(e),endDate:this.formatDate(a)},this.loadData()}applyCustomFilter(){const t=this.container.querySelector("#start-date"),a=this.container.querySelector("#end-date");if(!t.value||!a.value){alert("Por favor, selecione ambas as datas");return}const e=t.value.trim(),s=a.value.trim();if(!e.match(/^\d{4}-\d{2}-\d{2}$/)||!s.match(/^\d{4}-\d{2}-\d{2}$/)){alert("Formato de data inválido");return}if(s<e){alert("A data final não pode ser anterior à data inicial");return}this.currentFilters={startDate:e,endDate:s},this.container.querySelectorAll(".filter-btn").forEach(o=>{o.dataset.filter!=="custom"&&(o.classList.remove("bg-blue-600","text-white"),o.classList.add("bg-[#222222]","hover:bg-[#2a2a2a]","text-white"))});const i=this.container.querySelector('[data-filter="custom"]');i&&(i.classList.add("bg-blue-600","text-white"),i.classList.remove("bg-[#222222]","hover:bg-[#2a2a2a]")),this.loadData()}formatDate(t){const a=t.getFullYear(),e=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${a}-${e}-${s}`}showLoading(t="Carregando dados..."){const a=this.container.querySelector("#loading-overlay"),e=this.container.querySelector("#loading-message");a&&a.classList.remove("hidden"),e&&(e.textContent=t)}hideLoading(){const t=this.container.querySelector("#loading-overlay");t&&t.classList.add("hidden")}async loadData(){const t=this.container.querySelector("#loading-state"),a=this.container.querySelector("#error-state");this.showLoading("Carregando dados..."),a&&a.classList.add("hidden");try{if(!this.storageService)throw new Error("Serviço de armazenamento não disponível");if(typeof this.storageService.getActions!="function")throw new Error("Serviço de armazenamento não suporta buscar ações. Use Google Apps Script.");const e=await this.storageService.getActions(this.currentFilters),s=this.calculateStats(e);this.updateStats(s),this.updateCharts(e,s),this.updatePeriodText(),await new Promise(i=>setTimeout(i,300)),this.hideLoading(),t&&t.classList.add("hidden")}catch(e){if(console.error("Erro ao carregar dados:",e),this.hideLoading(),t&&t.classList.add("hidden"),a){a.classList.remove("hidden");const s=this.container.querySelector("#error-message");s&&(s.textContent=e.message||"Erro desconhecido")}}}calculateStats(t){const a=t.length,e=t.filter(r=>r.finishedDate&&r.finishedTime).length,s=a-e,i=t.filter(r=>r.finishedDate&&r.finishedTime&&r.createdDate&&r.createdTime&&r.finishedDate.trim()!==""&&r.finishedTime.trim()!==""&&r.createdDate.trim()!==""&&r.createdTime.trim()!=="");let o=null;if(i.length>0){const r=[];if(i.forEach(c=>{try{const l=c.createdDate.trim(),m=c.createdTime.trim(),u=c.finishedDate.trim(),h=c.finishedTime.trim();if(!l.match(/^\d{4}-\d{2}-\d{2}$/)){console.warn("Data de criação inválida:",l);return}if(!u.match(/^\d{4}-\d{2}-\d{2}$/)){console.warn("Data de finalização inválida:",u);return}if(!m.match(/^\d{2}:\d{2}/)){console.warn("Hora de criação inválida:",m);return}if(!h.match(/^\d{2}:\d{2}/)){console.warn("Hora de finalização inválida:",h);return}const g=new Date(`${l}T${m}:00`),p=new Date(`${u}T${h}:00`);if(isNaN(g.getTime())||isNaN(p.getTime())){console.warn("Data inválida ao criar objeto Date:",{created:`${l}T${m}`,finished:`${u}T${h}`});return}const f=p.getTime()-g.getTime();if(f<0){console.warn("Ação finalizada antes de ser criada:",c.id);return}r.push(f)}catch(l){console.error("Erro ao calcular duração da ação:",l,c)}}),r.length>0){const l=r.reduce((m,u)=>m+u,0)/r.length;!isNaN(l)&&isFinite(l)?o=this.formatDuration(l):console.warn("Tempo médio calculado é inválido:",l)}}const d=a>0?(e/a*100).toFixed(1):0,n=a>0?(s/a*100).toFixed(1):0;return{total:a,finished:e,pending:s,avgTime:o||"-",finishedPercent:d,pendingPercent:n}}formatDuration(t){if(!t||isNaN(t)||!isFinite(t)||t<0)return"-";const a=Math.floor(t/(1e3*60*60*24)),e=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),s=Math.floor(t%(1e3*60*60)/(1e3*60));return a>0?`${a}d ${e}h`:e>0?`${e}h ${s}m`:`${s}m`}updateStats(t){const a=this.container.querySelector("#total-actions"),e=this.container.querySelector("#finished-actions"),s=this.container.querySelector("#pending-actions"),i=this.container.querySelector("#avg-time");a&&(a.textContent=t.total),e&&(e.textContent=t.finished),s&&(s.textContent=t.pending),i&&(i.textContent=t.avgTime||"-")}updateCharts(t,a){this.updateStatusChart(a),this.updateDailyChart(t),this.updateTrendChart(t)}updateStatusChart(t){const a=this.container.querySelector("#status-chart");if(!a)return;const e=a.getContext("2d");this.charts.status&&this.charts.status.destroy(),this.charts.status=new Chart(e,{type:"doughnut",data:{labels:["Finalizadas","Pendentes"],datasets:[{data:[t.finished,t.pending],backgroundColor:["#10b981","#f97316"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:10,bottom:10,left:10,right:10}},plugins:{legend:{position:"bottom",labels:{color:"#e5e7eb",font:{size:window.innerWidth<640?11:13},padding:window.innerWidth<640?10:15,usePointStyle:!0}},tooltip:{backgroundColor:"rgba(31, 41, 55, 0.95)",titleColor:"#e5e7eb",bodyColor:"#e5e7eb",borderColor:"#4b5563",borderWidth:1,padding:12,callbacks:{label:s=>{const i=s.label||"",o=s.parsed||0,d=t.total,n=d>0?(o/d*100).toFixed(1):0;return`${i}: ${o} (${n}%)`}}}}}})}updateDailyChart(t){const a=this.container.querySelector("#daily-chart");if(!a)return;const e=a.getContext("2d"),s={};t.forEach(n=>{if(n.createdDate){const r=n.createdDate;s[r]=(s[r]||0)+1}});const i=Object.keys(s).sort(),o=i.map(n=>{const r=new Date(n);return`${r.getDate()}/${r.getMonth()+1}`}),d=i.map(n=>s[n]);this.charts.daily&&this.charts.daily.destroy(),this.charts.daily=new Chart(e,{type:"bar",data:{labels:o,datasets:[{label:"Ações Criadas",data:d,backgroundColor:"#3b82f6",borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(31, 41, 55, 0.95)",titleColor:"#e5e7eb",bodyColor:"#e5e7eb",borderColor:"#4b5563",borderWidth:1}},scales:{x:{ticks:{color:"#9ca3af",font:{size:window.innerWidth<640?10:12}},grid:{color:"#374151"}},y:{beginAtZero:!0,ticks:{stepSize:1,color:"#9ca3af",font:{size:window.innerWidth<640?10:12}},grid:{color:"#374151"}}}}})}updateTrendChart(t){const a=this.container.querySelector("#trend-chart");if(!a)return;const e=a.getContext("2d"),s={};t.filter(n=>n.finishedDate).forEach(n=>{const r=n.finishedDate;s[r]=(s[r]||0)+1});const i=Object.keys(s).sort(),o=i.map(n=>{const r=new Date(n);return`${r.getDate()}/${r.getMonth()+1}`}),d=i.map(n=>s[n]);this.charts.trend&&this.charts.trend.destroy(),this.charts.trend=new Chart(e,{type:"line",data:{labels:o,datasets:[{label:"Ações Finalizadas",data:d,borderColor:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",fill:!0,tension:.4,pointRadius:window.innerWidth<640?3:4,pointBackgroundColor:"#10b981",pointBorderColor:"#10b981"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(31, 41, 55, 0.95)",titleColor:"#e5e7eb",bodyColor:"#e5e7eb",borderColor:"#4b5563",borderWidth:1}},scales:{x:{ticks:{color:"#9ca3af",font:{size:window.innerWidth<640?10:12}},grid:{color:"#374151"}},y:{beginAtZero:!0,ticks:{stepSize:1,color:"#9ca3af",font:{size:window.innerWidth<640?10:12}},grid:{color:"#374151"}}}}})}updatePeriodText(){const t=this.container.querySelector("#period-text");if(t)if(this.currentFilters.startDate&&this.currentFilters.endDate){const[a,e,s]=this.currentFilters.startDate.split("-").map(Number),[i,o,d]=this.currentFilters.endDate.split("-").map(Number),n=`${s}/${e}/${a}`,r=`${d}/${o}/${i}`;t.textContent=`Período: ${n} até ${r}`}else t.textContent="Todos os períodos"}}const S="https://script.google.com/macros/s/AKfycbwurPvvvkvydBx2qN4WgZKMwsvXm31w3wMl_Qx9C70PAUT0hiUz-yHfaJgez2wrb7BTlQ/exec";async function b(){if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href="/index.html";return}const t=sessionStorage.getItem("username")||"Usuário",a=new v(t,"dashboard"),e=document.getElementById("dashboard-app");if(!e){console.error("Container não encontrado");return}e.innerHTML=`
    ${a.render()}
    <div class="main-content">
      ${a.renderTopBar("Dashboard de Ações","Estatísticas e análises")}
      <div class="page-content p-4 md:p-6 lg:p-8">
        <div id="dashboard-container"></div>
      </div>
    </div>
  `,a.init();const s=document.getElementById("dashboard-container");if(!s){console.error("Container do dashboard não encontrado");return}const i=new y({storageKey:"calendar-events"});let o=i;try{const n=new w({scriptUrl:S});await n.initialize(),o=n,console.log("✅ Google Apps Script conectado com sucesso!")}catch(n){console.error("❌ Erro ao conectar Google Apps Script:",n),console.warn("⚠️ Usando LocalStorage como fallback."),o=i}await new D({container:s,storageService:o}).init()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();
