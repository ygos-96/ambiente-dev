import"./index-IWM24kaj.js";import{G as C}from"./GoogleAppsScriptService-RRDeTsMz.js";import{L as $}from"./LocalStorageService-C84leZPf.js";import{P as T}from"./PersonalDataService-CGfDL3H2.js";import{S as P}from"./Sidebar-CewEtVMS.js";class F{constructor(e={}){if(this.container=typeof e.container=="string"?document.querySelector(e.container):e.container,!this.container)throw new Error("Container não encontrado");this.storageService=e.storageService||null,this.personalDataService=e.personalDataService||null,this.charts={},this.currentFilters={startDate:null,endDate:null}}async init(){this.render(),this.setupEventListeners();const e=new Date,r=new Date;r.setDate(r.getDate()-30),this.currentFilters={startDate:this.formatDate(r),endDate:this.formatDate(e)};const a=this.container.querySelector('[data-filter="30"]');a&&(a.classList.add("bg-blue-600","text-white"),a.classList.remove("bg-[#222222]","hover:bg-[#2a2a2a]")),await this.loadData()}render(){this.container.innerHTML=`
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

            <!-- Porcentagem de Ações Feitas -->
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 sm:p-5 md:p-6">
              <div class="flex items-center justify-between">
                <div class="flex-1 min-w-0">
                  <p class="text-xs sm:text-sm font-medium text-gray-400 mb-2">Ações Feitas</p>
                  <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 truncate" id="completion-percent">0%</p>
                </div>
                <div class="p-2 sm:p-3 bg-purple-900/50 rounded-full flex-shrink-0 ml-3">
                  <i class="fas fa-percentage text-purple-400 text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </div>
            </div>

            <!-- Rotina esta semana -->
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 sm:p-5 md:p-6 col-span-2 lg:col-span-1">
              <div class="flex items-center justify-between">
                <div class="flex-1 min-w-0">
                  <p class="text-xs sm:text-sm font-medium text-gray-400 mb-2">Rotina esta semana</p>
                  <p class="text-lg sm:text-xl md:text-2xl font-bold text-teal-400 truncate" id="rotina-week-count">0/7</p>
                </div>
                <div class="p-2 sm:p-3 bg-teal-900/50 rounded-full flex-shrink-0 ml-3">
                  <i class="fas fa-tasks text-teal-400 text-lg sm:text-xl md:text-2xl"></i>
                </div>
              </div>
              <p class="text-xs text-gray-500 mt-1">Dias com rotina completa</p>
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

            <!-- Gráfico de Linha - Progresso Semanal -->
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-3 sm:p-4 md:p-6">
              <h3 class="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Progresso Semanal
                <span id="week-label" class="text-sm text-gray-400 font-normal ml-2"></span>
              </h3>
              <div class="h-64 sm:h-72 md:h-80 flex items-center justify-center relative">
                <canvas id="weekly-chart"></canvas>
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

          <!-- Sistema de Recompensas -->
          <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 sm:p-5 md:p-6">
            <h3 class="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <i class="fas fa-trophy text-yellow-400"></i>
              Sistema de Recompensas
            </h3>
            <div id="rewards-container" class="space-y-4">
              <!-- Recompensas serão inseridas aqui -->
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
    `}setupEventListeners(){this.container.querySelectorAll(".filter-btn").forEach(r=>{r.addEventListener("click",a=>{const t=a.currentTarget.dataset.filter;if(this.container.querySelectorAll(".filter-btn").forEach(s=>{s.classList.remove("bg-blue-600","text-white"),s.classList.add("bg-[#222222]","hover:bg-[#2a2a2a]","text-white")}),t==="custom")this.container.querySelector("#custom-date-inputs").classList.remove("hidden"),this.container.querySelectorAll(".filter-btn").forEach(m=>{m!==a.currentTarget&&(m.classList.remove("bg-blue-600","text-white"),m.classList.add("bg-[#222222]","hover:bg-[#2a2a2a]","text-white"))}),a.currentTarget.classList.add("bg-blue-600","text-white"),a.currentTarget.classList.remove("bg-[#222222]","hover:bg-[#2a2a2a]");else{this.container.querySelector("#custom-date-inputs").classList.add("hidden"),this.container.querySelectorAll(".filter-btn").forEach(n=>{n!==a.currentTarget&&(n.classList.remove("bg-blue-600","text-white"),n.classList.add("bg-[#222222]","hover:bg-[#2a2a2a]","text-white"))});const m=parseInt(t);this.applyQuickFilter(m),a.currentTarget.classList.add("bg-blue-600","text-white"),a.currentTarget.classList.remove("bg-[#222222]","hover:bg-[#2a2a2a]")}})});const e=this.container.querySelector("#apply-custom-filter");e&&e.addEventListener("click",()=>{this.applyCustomFilter()})}applyQuickFilter(e){const r=new Date,a=new Date;a.setDate(a.getDate()-e),this.currentFilters={startDate:this.formatDate(a),endDate:this.formatDate(r)},this.loadData()}applyCustomFilter(){const e=this.container.querySelector("#start-date"),r=this.container.querySelector("#end-date");if(!e.value||!r.value){alert("Por favor, selecione ambas as datas");return}const a=e.value.trim(),t=r.value.trim();if(!a.match(/^\d{4}-\d{2}-\d{2}$/)||!t.match(/^\d{4}-\d{2}-\d{2}$/)){alert("Formato de data inválido");return}if(t<a){alert("A data final não pode ser anterior à data inicial");return}this.currentFilters={startDate:a,endDate:t},this.container.querySelectorAll(".filter-btn").forEach(m=>{m.dataset.filter!=="custom"&&(m.classList.remove("bg-blue-600","text-white"),m.classList.add("bg-[#222222]","hover:bg-[#2a2a2a]","text-white"))});const s=this.container.querySelector('[data-filter="custom"]');s&&(s.classList.add("bg-blue-600","text-white"),s.classList.remove("bg-[#222222]","hover:bg-[#2a2a2a]")),this.loadData()}formatDate(e){const r=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0");return`${r}-${a}-${t}`}showLoading(e="Carregando dados..."){const r=this.container.querySelector("#loading-overlay"),a=this.container.querySelector("#loading-message");r&&r.classList.remove("hidden"),a&&(a.textContent=e)}hideLoading(){const e=this.container.querySelector("#loading-overlay");e&&e.classList.add("hidden")}async loadData(){const e=this.container.querySelector("#loading-state"),r=this.container.querySelector("#error-state");this.showLoading("Carregando dados..."),r&&r.classList.add("hidden");try{if(!this.storageService)throw new Error("Serviço de armazenamento não disponível");if(typeof this.storageService.getActions!="function")throw new Error("Serviço de armazenamento não suporta buscar ações. Use Google Apps Script.");const a=await this.storageService.getActions(this.currentFilters),t=this.calculateStats(a);this.updateStats(t),this.updateCharts(a,t),this.updatePeriodText(),this.updateRewards(t,a),this.updateRoutineCard(),await new Promise(s=>setTimeout(s,300)),this.hideLoading(),e&&e.classList.add("hidden")}catch(a){if(console.error("Erro ao carregar dados:",a),this.hideLoading(),e&&e.classList.add("hidden"),r){r.classList.remove("hidden");const t=this.container.querySelector("#error-message");t&&(t.textContent=a.message||"Erro desconhecido")}}}calculateStats(e){const r=e.length,a=e.filter(d=>d.finishedDate&&d.finishedTime).length,t=r-a;console.log("📊 Calculando estatísticas:",{total:r,finished:a,pending:t,totalActions:e.length});const s=e.filter(d=>{const o=d.finishedDate&&d.finishedTime&&d.createdDate&&d.createdTime&&d.finishedDate.trim()!==""&&d.finishedTime.trim()!==""&&d.createdDate.trim()!==""&&d.createdTime.trim()!=="";return o||console.log("⚠️ Ação sem todos os campos necessários:",{id:d.id,title:d.title,hasFinishedDate:!!d.finishedDate,hasFinishedTime:!!d.finishedTime,hasCreatedDate:!!d.createdDate,hasCreatedTime:!!d.createdTime}),o});console.log(`✅ ${s.length} ações finalizadas com todos os dados necessários`);let m=null;if(s.length>0){const d=[];if(s.forEach((o,l)=>{try{let i=String(o.createdDate||"").trim(),f=String(o.createdTime||"").trim(),u=String(o.finishedDate||"").trim(),p=String(o.finishedTime||"").trim();if(i=i.replace(/[\/\.]/g,"-"),u=u.replace(/[\/\.]/g,"-"),f.includes(":")){const y=f.split(":");f=`${y[0].padStart(2,"0")}:${y[1].padStart(2,"0")}`}if(p.includes(":")){const y=p.split(":");p=`${y[0].padStart(2,"0")}:${y[1].padStart(2,"0")}`}if(!i.match(/^\d{4}-\d{2}-\d{2}$/)){console.warn(`❌ Ação ${l+1}: Data de criação inválida:`,i,o);return}if(!u.match(/^\d{4}-\d{2}-\d{2}$/)){console.warn(`❌ Ação ${l+1}: Data de finalização inválida:`,u,o);return}if(!f.match(/^\d{2}:\d{2}$/)){console.warn(`❌ Ação ${l+1}: Hora de criação inválida:`,f,o);return}if(!p.match(/^\d{2}:\d{2}$/)){console.warn(`❌ Ação ${l+1}: Hora de finalização inválida:`,p,o);return}const h=new Date(`${i}T${f}:00`),b=new Date(`${u}T${p}:00`);if(isNaN(h.getTime())||isNaN(b.getTime())){console.warn(`❌ Ação ${l+1}: Data inválida ao criar objeto Date:`,{created:`${i}T${f}:00`,finished:`${u}T${p}:00`,action:o});return}const g=b.getTime()-h.getTime();if(g<0){console.warn(`❌ Ação ${l+1}: Finalizada antes de ser criada (diferença negativa):`,{diff:g,created:h.toISOString(),finished:b.toISOString(),action:o});return}const w=365*24*60*60*1e3;g>w&&console.warn(`⚠️ Ação ${l+1}: Diferença muito grande (mais de 1 ano):`,{diff:g,days:Math.floor(g/(1e3*60*60*24)),action:o}),d.push(g);const x=Math.floor(g/(1e3*60*60*24)),v=Math.floor(g%(1e3*60*60*24)/(1e3*60*60)),D=Math.floor(g%(1e3*60*60)/(1e3*60));console.log(`✅ Ação ${l+1} processada:`,{id:o.id,title:o.title,created:`${i} às ${f}`,finished:`${u} às ${p}`,duration:{totalMs:g,days:x,hours:v,minutes:D,formatted:this.formatDuration(g)}})}catch(i){console.error(`❌ Erro ao calcular duração da ação ${l+1}:`,i,o)}}),console.log(`📈 Total de durações válidas: ${d.length} de ${s.length}`),d.length>0){const o=d.reduce((p,h)=>p+h,0),l=o/d.length,i=Math.floor(l/(1e3*60*60*24)),f=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(l%(1e3*60*60)/(1e3*60));console.log("📊 Cálculo da média:",{totalAcoes:d.length,somaTotal:`${Math.floor(o/(1e3*60*60*24))} dias, ${Math.floor(o%(1e3*60*60*24)/(1e3*60*60))} horas, ${Math.floor(o%(1e3*60*60)/(1e3*60))} minutos`,mediaMs:l,mediaDetalhada:{dias:i,horas:f,minutos:u},mediaFormatada:this.formatDuration(l)}),!isNaN(l)&&isFinite(l)&&l>=0?(m=this.formatDuration(l),console.log(`✅ Tempo médio calculado: ${m} (${i}d ${f}h ${u}m)`)):console.warn("❌ Tempo médio calculado é inválido:",l)}else console.warn("⚠️ Nenhuma duração válida encontrada para calcular média")}else console.log("ℹ️ Nenhuma ação finalizada com todos os dados necessários para calcular tempo médio");const n=r>0?(a/r*100).toFixed(1):0,c=r>0?(t/r*100).toFixed(1):0;return{total:r,finished:a,pending:t,completionPercent:n,finishedPercent:n,pendingPercent:c}}formatDuration(e){if(!e||isNaN(e)||!isFinite(e)||e<0)return"-";const r=Math.floor(e/(1e3*60*60*24)),a=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),t=Math.floor(e%(1e3*60*60)/(1e3*60));return r>0?`${r}d ${a}h`:a>0?`${a}h ${t}m`:`${t}m`}updateStats(e){const r=this.container.querySelector("#total-actions"),a=this.container.querySelector("#finished-actions"),t=this.container.querySelector("#pending-actions"),s=this.container.querySelector("#completion-percent");r&&(r.textContent=e.total),a&&(a.textContent=e.finished),t&&(t.textContent=e.pending),s&&(s.textContent=`${e.completionPercent}%`)}updateCharts(e,r){this.updateStatusChart(r),this.updateWeeklyChart(e),this.updateTrendChart(e)}updateStatusChart(e){const r=this.container.querySelector("#status-chart");if(!r)return;const a=r.getContext("2d");this.charts.status&&this.charts.status.destroy(),this.charts.status=new Chart(a,{type:"doughnut",data:{labels:["Finalizadas","Pendentes"],datasets:[{data:[e.finished,e.pending],backgroundColor:["#10b981","#f97316"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:10,bottom:10,left:10,right:10}},plugins:{legend:{position:"bottom",labels:{color:"#e5e7eb",font:{size:window.innerWidth<640?11:13},padding:window.innerWidth<640?10:15,usePointStyle:!0}},tooltip:{backgroundColor:"rgba(31, 41, 55, 0.95)",titleColor:"#e5e7eb",bodyColor:"#e5e7eb",borderColor:"#4b5563",borderWidth:1,padding:12,callbacks:{label:t=>{const s=t.label||"",m=t.parsed||0,n=e.total,c=n>0?(m/n*100).toFixed(1):0;return`${s}: ${m} (${c}%)`}}}}}})}getWeekNumber(e){const r=new Date(e);r.setHours(0,0,0,0);const a=new Date(r.getFullYear(),0,1),t=new Date(a),s=t.getDay(),m=s<=2?2-s:9-s;if(t.setDate(t.getDate()+m),r<t)return 1;const n=r-t,c=Math.floor(n/(1e3*60*60*24));return Math.floor(c/7)+1}getCurrentWeekStart(){const e=new Date;e.setHours(0,0,0,0);const r=e.getDay();let a;r===0?a=-5:r===1?a=-6:r===2?a=0:r===3?a=-1:r===4?a=-2:r===5?a=-3:a=-4;const t=new Date(e);return t.setDate(e.getDate()+a),t}isInCurrentWeek(e){const r=this.getCurrentWeekStart(),a=new Date(r);a.setDate(r.getDate()+4);let t=String(e||"").trim();if(t=t.replace(/[\/\.]/g,"-"),t.match(/^\d{2}-\d{2}-\d{4}$/)){const[i,f,u]=t.split("-");t=`${u}-${f}-${i}`}const s=t.split("-");if(s.length!==3)return!1;const[m,n,c]=s.map(Number),d=new Date(m,n-1,c);d.setHours(0,0,0,0);const o=new Date(r);o.setHours(0,0,0,0);const l=new Date(a);return l.setHours(0,0,0,0),d>=o&&d<=l}formatWeekLabel(e){const r=new Date(e);r.setDate(e.getDate()+4);const a=e.getDate(),t=e.getMonth()+1,s=r.getDate(),m=r.getMonth()+1,n=this.getWeekNumber(e);return t===m?`Sem ${n} - ${a}/${t} a ${s}/${t}`:`Sem ${n} - ${a}/${t} a ${s}/${m}`}updateWeeklyChart(e){const r=this.container.querySelector("#weekly-chart");if(!r)return;const a=r.getContext("2d"),t=this.getCurrentWeekStart(),s=new Date(t);s.setDate(t.getDate()+4),console.log("📅 Semana atual:",{start:t.toISOString().split("T")[0],end:s.toISOString().split("T")[0]});const m=e.filter(i=>{if(!i.finishedDate||!i.finishedTime||i.finishedDate.trim()===""||i.finishedTime.trim()==="")return!1;try{const f=this.isInCurrentWeek(i.finishedDate);return f&&console.log("✅ Ação finalizada na semana atual:",{id:i.id,title:i.title,createdDate:i.createdDate,finishedDate:i.finishedDate,finishedTime:i.finishedTime}),f}catch(f){return console.warn("Erro ao verificar semana da ação:",f,i),!1}});console.log(`📊 Total de ações na semana atual: ${m.length}`);const n={tuesday:{finished:0,pending:0,total:0},wednesday:{finished:0,pending:0,total:0},thursday:{finished:0,pending:0,total:0},friday:{finished:0,pending:0,total:0},saturday:{finished:0,pending:0,total:0}},c=["tuesday","wednesday","thursday","friday","saturday"];m.forEach(i=>{try{let f=String(i.finishedDate||"").trim();if(f=f.replace(/[\/\.]/g,"-"),f.match(/^\d{2}-\d{2}-\d{4}$/)){const[v,D,y]=f.split("-");f=`${y}-${D}-${v}`}const u=f.split("-");if(u.length!==3){console.warn("⚠️ Data de finalização em formato inválido:",i.finishedDate);return}const[p,h,b]=u.map(Number),g=new Date(p,h-1,b);g.setHours(0,0,0,0);const w=new Date(t);w.setHours(0,0,0,0);const x=Math.floor((g-w)/(1e3*60*60*24));if(console.log("📆 Processando ação:",{id:i.id,title:i.title,createdDate:i.createdDate,finishedDate:g.toISOString().split("T")[0],weekStart:w.toISOString().split("T")[0],dayIndex:x,finishedTime:i.finishedTime}),x>=0&&x<5){const v=c[x];n[v].total++;const D=i.finishedDate&&String(i.finishedDate).trim()!=="",y=i.finishedTime&&String(i.finishedTime).trim()!=="";console.log(`  → Dia: ${v}, Finalizada: ${D&&y}`,{hasFinishedDate:D,hasFinishedTime:y,finishedDate:i.finishedDate,finishedTime:i.finishedTime}),n[v].finished++}else console.warn(`⚠️ dayIndex fora do range: ${x}`,{finishedDate:g.toISOString().split("T")[0],weekStart:w.toISOString().split("T")[0]})}catch(f){console.error("❌ Erro ao processar ação para gráfico semanal:",f,i)}}),e.forEach(i=>{if(i.createdDate)try{if(this.isInCurrentWeek(i.createdDate)){const f=new Date(i.createdDate+"T00:00:00");if(isNaN(f.getTime()))return;const u=new Date(t);u.setHours(0,0,0,0);const p=new Date(f);p.setHours(0,0,0,0);const h=Math.floor((p-u)/(1e3*60*60*24));if(h>=0&&h<5){const b=c[h];i.finishedDate&&i.finishedTime&&i.finishedDate.trim()!==""&&i.finishedTime.trim()!==""||(n[b].pending++,n[b].total++)}}}catch{}}),console.log("📈 Dados diários finais:",n);const d=["Terça","Quarta","Quinta","Sexta","Sábado"],o=c.map(i=>n[i].finished),l=this.container.querySelector("#week-label");l&&(l.textContent=this.formatWeekLabel(t)),this.charts.weekly&&this.charts.weekly.destroy(),this.charts.weekly=new Chart(a,{type:"line",data:{labels:d,datasets:[{label:"Ações Feitas",data:o,borderColor:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",fill:!0,tension:.4,pointRadius:window.innerWidth<640?3:4,pointBackgroundColor:"#10b981",pointBorderColor:"#10b981",pointHoverRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e7eb",font:{size:window.innerWidth<640?11:13},padding:window.innerWidth<640?10:15,usePointStyle:!0}},tooltip:{backgroundColor:"rgba(31, 41, 55, 0.95)",titleColor:"#e5e7eb",bodyColor:"#e5e7eb",borderColor:"#4b5563",borderWidth:1,padding:12,callbacks:{title:i=>{const f=i[0].dataIndex,u=d[f],p=new Date(t);p.setDate(t.getDate()+f);const h=p.getDate(),b=p.getMonth()+1;return`${u} - ${h}/${b}`},label:i=>`Ações Feitas: ${i.parsed.y||0}`}}},scales:{x:{ticks:{color:"#9ca3af",font:{size:window.innerWidth<640?9:11}},grid:{color:"#374151"}},y:{beginAtZero:!0,ticks:{stepSize:1,color:"#9ca3af",font:{size:window.innerWidth<640?10:12}},grid:{color:"#374151"}}}}})}updateTrendChart(e){const r=this.container.querySelector("#trend-chart");if(!r)return;const a=r.getContext("2d"),t={};e.filter(c=>c.finishedDate).forEach(c=>{let d=String(c.finishedDate||"").trim();if(d=d.replace(/[\/\.]/g,"-"),d.match(/^\d{2}-\d{2}-\d{4}$/)){const[o,l,i]=d.split("-");d=`${i}-${l}-${o}`}t[d]=(t[d]||0)+1});const s=Object.keys(t).sort(),m=s.map(c=>{const[d,o,l]=c.split("-").map(Number);return`${l}/${o}`}),n=s.map(c=>t[c]);this.charts.trend&&this.charts.trend.destroy(),this.charts.trend=new Chart(a,{type:"line",data:{labels:m,datasets:[{label:"Ações Finalizadas",data:n,borderColor:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",fill:!0,tension:.4,pointRadius:window.innerWidth<640?3:4,pointBackgroundColor:"#10b981",pointBorderColor:"#10b981"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(31, 41, 55, 0.95)",titleColor:"#e5e7eb",bodyColor:"#e5e7eb",borderColor:"#4b5563",borderWidth:1}},scales:{x:{ticks:{color:"#9ca3af",font:{size:window.innerWidth<640?10:12}},grid:{color:"#374151"}},y:{beginAtZero:!0,ticks:{stepSize:1,color:"#9ca3af",font:{size:window.innerWidth<640?10:12}},grid:{color:"#374151"}}}}})}updateRoutineCard(){const e=this.container.querySelector("#rotina-week-count");if(!e)return;if(!this.personalDataService){e.textContent="0/7";return}const r=this.personalDataService.getRoutineItems();if(r.length===0){e.textContent="0/7";return}const a=this.personalDataService.getRoutineCheckmarks();let t=0;for(let s=0;s<7;s++){const m=new Date;m.setDate(m.getDate()-s);const n=m.getFullYear(),c=String(m.getMonth()+1).padStart(2,"0"),d=String(m.getDate()).padStart(2,"0"),o=`${n}-${c}-${d}`,l=a[o]||{};r.every(f=>!!l[f.id])&&t++}e.textContent=`${t}/7`}updatePeriodText(){const e=this.container.querySelector("#period-text");if(e)if(this.currentFilters.startDate&&this.currentFilters.endDate){const[r,a,t]=this.currentFilters.startDate.split("-").map(Number),[s,m,n]=this.currentFilters.endDate.split("-").map(Number),c=`${t}/${a}/${r}`,d=`${n}/${m}/${s}`;e.textContent=`Período: ${c} até ${d}`}else e.textContent="Todos os períodos"}getRewards(){return[{id:"starter",name:"Iniciante",description:"Complete 25% das suas ações",targetPercent:25,icon:"fa-seedling",color:"from-green-500 to-green-600",reward:"🎬 30min de série/filme que você ama",type:"percentage"},{id:"productive",name:"Produtivo",description:"Complete 50% das suas ações",targetPercent:50,icon:"fa-rocket",color:"from-blue-500 to-blue-600",reward:"☕ Pausa relaxante com sua bebida favorita",type:"percentage"},{id:"focused",name:"Focado",description:"Complete 75% das suas ações",targetPercent:75,icon:"fa-fire",color:"from-orange-500 to-orange-600",reward:"🎵 1h ouvindo sua playlist favorita",type:"percentage"},{id:"master",name:"Mestre",description:"Complete 100% das suas ações",targetPercent:100,icon:"fa-crown",color:"from-yellow-500 to-yellow-600",reward:"🏆 Dia de descanso total - você merece!",type:"percentage"},{id:"first-steps",name:"Primeiros Passos",description:"Complete 10 ações",targetCount:10,icon:"fa-footsteps",color:"from-cyan-500 to-cyan-600",reward:"📚 20min lendo algo que você gosta",type:"count"},{id:"getting-serious",name:"Leva a Sério",description:"Complete 25 ações",targetCount:25,icon:"fa-star",color:"from-indigo-500 to-indigo-600",reward:"🎮 1h de jogo/hobby favorito",type:"count"},{id:"veteran",name:"Veterano",description:"Complete 50 ações",targetCount:50,icon:"fa-medal",color:"from-teal-500 to-teal-600",reward:"🍕 Comida especial que você ama (que já tem)",type:"count"},{id:"expert",name:"Expert",description:"Complete 100 ações",targetCount:100,icon:"fa-trophy",color:"from-amber-500 to-amber-600",reward:"🎨 Tempo criativo - desenhar, escrever, criar",type:"count"},{id:"legend",name:"Lenda",description:"Complete 250 ações",targetCount:250,icon:"fa-gem",color:"from-violet-500 to-violet-600",reward:"🌟 Noite especial - fazer algo que sempre quis",type:"count"},{id:"mythic",name:"Mítico",description:"Complete 500 ações",targetCount:500,icon:"fa-infinity",color:"from-rose-500 to-rose-600",reward:"🎉 Celebre você mesmo - você é incrível!",type:"count"},{id:"streak-3",name:"Sequência de 3",description:"Finalize ações em 3 dias consecutivos",icon:"fa-calendar-check",color:"from-purple-500 to-purple-600",reward:"🎬 Episódio completo da sua série favorita",type:"streak",targetDays:3},{id:"streak-7",name:"Semana Perfeita",description:"Finalize ações em 7 dias consecutivos",icon:"fa-calendar-week",color:"from-pink-500 to-pink-600",reward:"🛋️ Dia de preguiça total - sem culpa!",type:"streak",targetDays:7},{id:"streak-14",name:"Duas Semanas",description:"Finalize ações em 14 dias consecutivos",icon:"fa-calendar-alt",color:"from-red-500 to-red-600",reward:"🎁 Presenteie-se com algo que você já tem guardado",type:"streak",targetDays:14},{id:"streak-30",name:"Mês Completo",description:"Finalize ações em 30 dias consecutivos",icon:"fa-calendar",color:"from-emerald-500 to-emerald-600",reward:"🏖️ Fim de semana de descanso total",type:"streak",targetDays:30},{id:"perfect-week",name:"Semana Perfeita",description:"100% de conclusão em uma semana",icon:"fa-check-double",color:"from-lime-500 to-lime-600",reward:"🎊 Fim de semana especial - faça o que quiser!",type:"special",specialType:"perfect-week"},{id:"perfect-month",name:"Mês Perfeito",description:"100% de conclusão em um mês",icon:"fa-calendar-star",color:"from-sky-500 to-sky-600",reward:"🎈 Celebre seu sucesso - você é demais!",type:"special",specialType:"perfect-month"},{id:"fire-week",name:"Semana de Fogo",description:"7 dias seguidos com 5+ ações finalizadas",icon:"fa-fire-flame",color:"from-orange-600 to-red-600",reward:"🔥 Você está no fogo! Aproveite sua energia!",type:"special",specialType:"fire-week"},{id:"bronze",name:"Bronze",description:"Nível Bronze - 25% geral",targetPercent:25,icon:"fa-certificate",color:"from-amber-700 to-amber-800",reward:"🥉 Rank Bronze conquistado!",type:"rank"},{id:"silver",name:"Prata",description:"Nível Prata - 50% geral",targetPercent:50,icon:"fa-award",color:"from-gray-400 to-gray-500",reward:"🥈 Rank Prata conquistado!",type:"rank"},{id:"gold",name:"Ouro",description:"Nível Ouro - 75% geral",targetPercent:75,icon:"fa-star",color:"from-yellow-400 to-yellow-500",reward:"🥇 Rank Ouro conquistado!",type:"rank"},{id:"platinum",name:"Platina",description:"Nível Platina - 90% geral",targetPercent:90,icon:"fa-gem",color:"from-cyan-400 to-cyan-500",reward:"💎 Rank Platina conquistado!",type:"rank"},{id:"diamond",name:"Diamante",description:"Nível Diamante - 100% geral",targetPercent:100,icon:"fa-diamond",color:"from-blue-400 to-blue-500",reward:"💠 Rank Diamante - Você é uma lenda!",type:"rank"},{id:"growth-10",name:"Aprendiz",description:"Complete 10 ações - Começando a crescer",targetCount:10,icon:"fa-book",color:"from-green-600 to-green-700",reward:"📖 30min estudando algo novo que te interessa",type:"growth"},{id:"growth-25",name:"Estudante",description:"Complete 25 ações - Construindo conhecimento",targetCount:25,icon:"fa-graduation-cap",color:"from-blue-600 to-blue-700",reward:"🎓 1h em curso/tutorial gratuito online",type:"growth"},{id:"growth-50",name:"Desenvolvedor",description:"Complete 50 ações - Expandindo habilidades",targetCount:50,icon:"fa-code",color:"from-purple-600 to-purple-700",reward:"💻 Projeto pessoal - 2h trabalhando no que você ama",type:"growth"},{id:"growth-100",name:"Especialista",description:"Complete 100 ações - Dominando sua área",targetCount:100,icon:"fa-lightbulb",color:"from-yellow-600 to-yellow-700",reward:"💡 Criar conteúdo - escrever, gravar, compartilhar conhecimento",type:"growth"},{id:"growth-250",name:"Mentor",description:"Complete 250 ações - Pronto para ensinar",targetCount:250,icon:"fa-chalkboard-teacher",color:"from-indigo-600 to-indigo-700",reward:"👨‍🏫 Ensinar alguém - compartilhar o que você sabe",type:"growth"},{id:"growth-streak-5",name:"Consistência",description:"5 dias seguidos finalizando ações",icon:"fa-calendar-day",color:"from-teal-600 to-teal-700",reward:"🧘 20min de meditação ou reflexão pessoal",type:"growth-streak",targetDays:5},{id:"growth-streak-10",name:"Disciplina",description:"10 dias seguidos finalizando ações",icon:"fa-calendar-week",color:"from-cyan-600 to-cyan-700",reward:"📝 Revisar e planejar objetivos pessoais",type:"growth-streak",targetDays:10},{id:"growth-perfect-week",name:"Semana de Excelência",description:"100% de conclusão em uma semana",icon:"fa-star",color:"from-amber-600 to-amber-700",reward:"🎯 Definir novos desafios e metas maiores",type:"growth-special",specialType:"perfect-week"},{id:"growth-perfect-month",name:"Mês de Transformação",description:"100% de conclusão em um mês",icon:"fa-rocket",color:"from-pink-600 to-pink-700",reward:"🚀 Planejar próximo nível - você está evoluindo!",type:"growth-special",specialType:"perfect-month"},{id:"growth-reflection",name:"Autorreflexão",description:"Complete 30 ações - Tempo de olhar para dentro",targetCount:30,icon:"fa-brain",color:"from-violet-600 to-violet-700",reward:"🧠 30min refletindo sobre seu progresso e aprendizados",type:"growth"},{id:"growth-network",name:"Networking",description:"Complete 75 ações - Expandindo conexões",targetCount:75,icon:"fa-users",color:"from-emerald-600 to-emerald-700",reward:"🤝 Conectar com alguém da sua área - trocar ideias",type:"growth"},{id:"growth-portfolio",name:"Portfólio",description:"Complete 150 ações - Construindo legado",targetCount:150,icon:"fa-briefcase",color:"from-slate-600 to-slate-700",reward:"💼 Atualizar portfólio/LinkedIn com suas conquistas",type:"growth"},{id:"growth-habit",name:"Hábito Formado",description:"21 dias seguidos - Novo hábito consolidado",icon:"fa-check-circle",color:"from-green-700 to-green-800",reward:"✅ Você formou um hábito! Continue assim!",type:"growth-streak",targetDays:21},{id:"growth-mastery",name:"Maestria",description:"Complete 500 ações - Nível de maestria",targetCount:500,icon:"fa-trophy",color:"from-gold-600 to-gold-700",reward:"🏅 Você alcançou maestria! Ensine outros a chegar aqui",type:"growth"}]}calculateSpecialRewards(e,r){const a={perfectWeek:!1,perfectMonth:!1,fireWeek:!1};if(!e||e.length===0)return a;const t=e.filter(s=>s.finishedDate&&s.finishedTime&&s.finishedDate.trim()!==""&&s.finishedTime.trim()!=="");try{const s=this.getCurrentWeekStart(),m=t.filter(c=>{try{return this.isInCurrentWeek(c.finishedDate)}catch{return!1}}),n=e.filter(c=>{try{return c.createdDate?this.isInCurrentWeek(c.createdDate):!1}catch{return!1}}).length;if(n>0){const c=m.length/n*100;a.perfectWeek=c>=100}}catch(s){console.warn("Erro ao calcular semana perfeita:",s)}try{const s=new Date,m=s.getMonth(),n=s.getFullYear(),c=t.filter(o=>{try{const l=new Date(o.finishedDate+"T00:00:00");return l.getMonth()===m&&l.getFullYear()===n}catch{return!1}}),d=e.filter(o=>{try{if(!o.createdDate)return!1;const l=new Date(o.createdDate+"T00:00:00");return l.getMonth()===m&&l.getFullYear()===n}catch{return!1}}).length;if(d>0){const o=c.length/d*100;a.perfectMonth=o>=100}}catch(s){console.warn("Erro ao calcular mês perfeito:",s)}try{const s={};t.forEach(c=>{c.finishedDate&&(s[c.finishedDate]=(s[c.finishedDate]||0)+1)});let m=0;const n=Object.keys(s).sort().reverse();for(let c=0;c<Math.min(7,n.length);c++)s[n[c]]>=5&&m++;a.fireWeek=m>=7}catch(s){console.warn("Erro ao calcular semana de fogo:",s)}return a}calculateStreak(e){if(!e||e.length===0)return 0;const r=e.filter(n=>n.finishedDate&&n.finishedTime&&n.finishedDate.trim()!==""&&n.finishedTime.trim()!=="");if(r.length===0)return 0;const a=new Set;r.forEach(n=>{n.finishedDate&&a.add(n.finishedDate)});const t=Array.from(a).sort().reverse();if(t.length===0)return 0;let s=0;const m=new Date;m.setHours(0,0,0,0);for(let n=0;n<t.length;n++){const c=new Date(t[n]+"T00:00:00");c.setHours(0,0,0,0);const d=new Date(m);if(d.setDate(m.getDate()-n),c.toISOString().split("T")[0]===d.toISOString().split("T")[0])s++;else break}return s}updateRewards(e,r=[]){const a=this.container.querySelector("#rewards-container");if(!a)return;const t=parseFloat(e.completionPercent)||0,s=e.finished||0,m=this.getRewards(),n=this.calculateStreak(r),c=this.calculateSpecialRewards(r,e);let d='<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">';m.forEach(o=>{let l=!1,i=0,f="";o.type==="streak"?(l=n>=o.targetDays,i=n>0?Math.min(n/o.targetDays*100,100):0,f=`Streak: ${n} / ${o.targetDays} dias`):o.type==="count"?(l=s>=o.targetCount,i=s>0?Math.min(s/o.targetCount*100,100):0,f=`${s} / ${o.targetCount} ações`):o.type==="special"?(o.specialType==="perfect-week"?(l=c.perfectWeek,f=c.perfectWeek?"Semana perfeita!":"Continue assim!"):o.specialType==="perfect-month"?(l=c.perfectMonth,f=c.perfectMonth?"Mês perfeito!":"Continue assim!"):o.specialType==="fire-week"&&(l=c.fireWeek,f=c.fireWeek?"Semana de fogo!":"Continue assim!"),i=l?100:0):o.type==="growth"?(l=s>=o.targetCount,i=s>0?Math.min(s/o.targetCount*100,100):0,f=`${s} / ${o.targetCount} ações`):o.type==="growth-streak"?(l=n>=o.targetDays,i=n>0?Math.min(n/o.targetDays*100,100):0,f=`Streak: ${n} / ${o.targetDays} dias`):o.type==="growth-special"?(o.specialType==="perfect-week"?(l=c.perfectWeek,f=c.perfectWeek?"Semana perfeita!":"Continue assim!"):o.specialType==="perfect-month"&&(l=c.perfectMonth,f=c.perfectMonth?"Mês perfeito!":"Continue assim!"),i=l?100:0):o.type==="rank"?(l=t>=o.targetPercent,i=Math.min(t/o.targetPercent*100,100),f=`${t.toFixed(1)}% / ${o.targetPercent}%`):(l=t>=o.targetPercent,i=Math.min(t/o.targetPercent*100,100),f=`${t.toFixed(1)}% / ${o.targetPercent}%`);const u=l?"border-yellow-400 bg-gradient-to-br "+o.color:"border-gray-600 bg-[#222222]",p=l?"text-yellow-300":"text-gray-400",h=l?"text-white":"text-gray-400";d+=`
        <div class="reward-card ${u} border-2 rounded-lg p-4 transition-all transform hover:scale-105 ${l?"shadow-lg shadow-yellow-500/20":""}">
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-white/10 rounded-lg">
                <i class="fas ${o.icon} ${p} text-xl"></i>
              </div>
              <div>
                <h4 class="font-bold ${h} text-sm sm:text-base">${o.name}</h4>
                <p class="text-xs ${h} opacity-80">${o.description}</p>
              </div>
            </div>
            ${l?'<i class="fas fa-check-circle text-yellow-300 text-xl"></i>':""}
          </div>
          
          ${l?"":`
            <div class="mb-2">
              <div class="flex justify-between text-xs ${h} mb-1">
                <span>Progresso</span>
                <span>${f}</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r ${o.color} h-2 rounded-full transition-all duration-500" style="width: ${i}%"></div>
              </div>
            </div>
          `}
          
          <div class="mt-2 pt-2 border-t border-white/10">
            <p class="text-xs ${h} font-medium">${o.reward}</p>
          </div>
        </div>
      `}),d+="</div>",a.innerHTML=d}}const M="https://script.google.com/macros/s/AKfycbydP_poxCsy37w8Crubx-ctK2MOCri1UqHCDWgPfVFQhBp8iwaofX8V4WU-8pwFihSb/exec",A="/ambiente-dev/";async function S(){if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${A}index.html`;return}const e=sessionStorage.getItem("username")||"Usuário",r=new P(e,"dashboard"),a=document.getElementById("dashboard-app");if(!a){console.error("Container não encontrado");return}a.innerHTML=`
    ${r.render()}
    <div class="main-content">
      ${r.renderTopBar("Dashboard de Ações","Estatísticas e análises")}
      <div class="page-content p-4 md:p-6 lg:p-8">
        <div id="dashboard-container"></div>
      </div>
    </div>
  `,r.init();const t=document.getElementById("dashboard-container");if(!t){console.error("Container do dashboard não encontrado");return}const s=new $({storageKey:"calendar-events"});let m=s;try{const d=new C({scriptUrl:M});await d.initialize(),m=d,console.log("✅ Google Apps Script conectado com sucesso!")}catch(d){console.error("❌ Erro ao conectar Google Apps Script:",d),console.warn("⚠️ Usando LocalStorage como fallback."),m=s}const n=new T;await n.initialize(),await new F({container:t,storageService:m,personalDataService:n}).init()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",S):S();
