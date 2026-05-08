import"./index-DPlvyXvB.js";import{e as u,d as m}from"./investmentQtyHelpers-BFbFxCZp.js";import{G as v}from"./GoogleAppsScriptService-CQm_j4Wp.js";import{L as b}from"./LocalStorageService-C84leZPf.js";import{P as g}from"./PersonalDataService-CClDzJ6y.js";import{S as f}from"./Sidebar-38HLq7tH.js";function x(i){return!Number.isFinite(i)||i<=0?String(i??""):i.toLocaleString("pt-BR",{minimumFractionDigits:0,maximumFractionDigits:2}).replace(/\u00a0/g,"")}function d(i){const t=Number(i.amountInvested)||0,r=u(i),a=Number(i.currentPrice)||0;return(i.type||"")==="Dólar"?m(t,r,a):r*a}class y{constructor(t={}){if(this.container=typeof t.container=="string"?document.querySelector(t.container):t.container,!this.container)throw new Error("Container não encontrado");this.storageService=t.storageService||null,this.personalDataService=t.personalDataService||null,this.charts={},this.currentTypeFilter="all",this.investments=[]}async init(){this.render(),this.setupEventListeners(),await this.loadData()}render(){this.container.innerHTML=`
      <div class="w-full max-w-7xl mx-auto space-y-6">
        <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 md:p-6">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 class="text-xl font-semibold text-white">Dashboard de Investimentos</h2>
              <p class="text-sm text-gray-400">Visão consolidada da sua carteira, rendimentos e distribuição.</p>
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-300" for="investment-type-filter">Tipo</label>
              <select id="investment-type-filter" class="px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
                <option value="all">Todos</option>
              </select>
              <button id="refresh-dashboard" class="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
                <i class="fas fa-rotate mr-1"></i>Atualizar
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div class="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
            <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Ativos</p>
            <p id="inv-total-assets" class="text-2xl font-bold text-white">0</p>
          </div>
          <div class="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
            <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Valor investido</p>
            <p id="inv-total-invested" class="text-2xl font-bold text-white">R$ 0,00</p>
          </div>
          <div class="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
            <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Valor atual</p>
            <p id="inv-total-current" class="text-2xl font-bold text-blue-300">R$ 0,00</p>
          </div>
          <div class="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
            <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Rendimento R$</p>
            <p id="inv-total-profit" class="text-2xl font-bold text-green-400">R$ 0,00</p>
          </div>
          <div class="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
            <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Rendimento %</p>
            <p id="inv-total-profit-pct" class="text-2xl font-bold text-green-400">0,00%</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4 md:p-6">
            <h3 class="text-lg font-semibold text-white mb-3">Distribuição por tipo</h3>
            <div class="h-72"><canvas id="allocation-chart"></canvas></div>
          </div>
          <div class="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4 md:p-6">
            <h3 class="text-lg font-semibold text-white mb-3">Rendimento por ativo (%)</h3>
            <div class="h-72"><canvas id="profitability-chart"></canvas></div>
          </div>
        </div>

        <div class="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4 md:p-6">
          <h3 class="text-lg font-semibold text-white mb-3">Detalhes da carteira</h3>
          <div id="investment-details" class="overflow-x-auto">
            <p class="text-sm text-gray-400">Carregando...</p>
          </div>
        </div>

        <div id="error-state" class="hidden text-center py-12">
          <i class="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
          <p class="text-red-400 font-medium">Erro ao carregar investimentos</p>
          <p id="error-message" class="text-gray-400 mt-2 text-sm"></p>
        </div>
      </div>
    `}setupEventListeners(){var t,r;(t=this.container.querySelector("#refresh-dashboard"))==null||t.addEventListener("click",()=>this.loadData()),(r=this.container.querySelector("#investment-type-filter"))==null||r.addEventListener("change",a=>{this.currentTypeFilter=a.target.value,this.updateUI()})}async loadData(){var r;const t=this.container.querySelector("#error-state");t&&t.classList.add("hidden");try{if(!this.storageService||typeof this.storageService.loadInvestments!="function")throw new Error("Serviço de investimentos indisponível. Verifique conexão com Google Sheets.");let a=await this.storageService.loadInvestments();(!a||a.length===0)&&((r=this.personalDataService)!=null&&r.getInvestments)&&(a=this.personalDataService.getInvestments()||[]),this.investments=Array.isArray(a)?a:[],this.investments.length===0&&console.warn("[Dashboard] Nenhum investimento retornado pelo script; confira se a aba se chama «investimento» ou «Investimento» e publique o Code.gs atualizado."),this.populateTypeFilter(),this.updateUI()}catch(a){console.error(a);const e=this.container.querySelector("#error-message");e&&(e.textContent=a.message||"Erro desconhecido"),t&&t.classList.remove("hidden")}}populateTypeFilter(){const t=this.container.querySelector("#investment-type-filter");if(!t)return;const r=[...new Set(this.investments.map(a=>a.type||"Sem tipo"))].sort();t.innerHTML=`<option value="all">Todos</option>${r.map(a=>`<option value="${this.escapeHtml(a)}">${this.escapeHtml(a)}</option>`).join("")}`,t.value=this.currentTypeFilter}getFilteredInvestments(){return this.currentTypeFilter==="all"?this.investments:this.investments.filter(t=>(t.type||"Sem tipo")===this.currentTypeFilter)}getMetrics(t){const r=t.reduce((s,o)=>{const n=Number(o.amountInvested)||0,c=d(o);return s.invested+=n,s.current+=c,s},{invested:0,current:0}),a=r.current-r.invested,e=r.invested>0?a/r.invested*100:0;return{totalAssets:t.length,totalInvested:r.invested,totalCurrent:r.current,totalProfit:a,totalProfitPct:e}}updateUI(){const t=this.getFilteredInvestments(),r=this.getMetrics(t);this.updateStats(r),this.updateAllocationChart(t),this.updateProfitabilityChart(t),this.updateDetailsTable(t)}updateStats(t){this.setText("#inv-total-assets",String(t.totalAssets)),this.setText("#inv-total-invested",this.formatCurrency(t.totalInvested)),this.setText("#inv-total-current",this.formatCurrency(t.totalCurrent));const r=`${t.totalProfit>=0?"+":"-"} ${this.formatCurrency(Math.abs(t.totalProfit))}`;this.setText("#inv-total-profit",r),this.setText("#inv-total-profit-pct",`${t.totalProfitPct.toFixed(2).replace(".",",")}%`);const a=t.totalProfit>=0?"text-2xl font-bold text-green-400":"text-2xl font-bold text-red-400",e=t.totalProfit>=0?"text-2xl font-bold text-green-400":"text-2xl font-bold text-red-400";this.setClass("#inv-total-profit",a),this.setClass("#inv-total-profit-pct",e)}updateAllocationChart(t){const r=this.container.querySelector("#allocation-chart");if(!r)return;const a={};t.forEach(o=>{const n=o.type||"Sem tipo",c=d(o);a[n]=(a[n]||0)+c});const e=Object.keys(a),s=Object.values(a);this.charts.allocation&&this.charts.allocation.destroy(),this.charts.allocation=new Chart(r.getContext("2d"),{type:"doughnut",data:{labels:e.length?e:["Sem dados"],datasets:[{data:s.length?s:[1],backgroundColor:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#84cc16","#f97316"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e7eb"}}}}})}updateProfitabilityChart(t){const r=this.container.querySelector("#profitability-chart");if(!r)return;const a=[...t].map(e=>{const s=Number(e.amountInvested)||0,o=d(e),n=s>0?(o-s)/s*100:0;return{name:e.name||"Ativo",pct:n}}).sort((e,s)=>s.pct-e.pct).slice(0,10);this.charts.profitability&&this.charts.profitability.destroy(),this.charts.profitability=new Chart(r.getContext("2d"),{type:"bar",data:{labels:a.map(e=>e.name),datasets:[{label:"Rendimento %",data:a.map(e=>e.pct),backgroundColor:a.map(e=>e.pct>=0?"#10b981":"#ef4444")}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{ticks:{color:"#9ca3af"},grid:{color:"#374151"}},y:{ticks:{color:"#9ca3af"},grid:{color:"#374151"}}},plugins:{legend:{labels:{color:"#e5e7eb"}},tooltip:{callbacks:{label:e=>`${e.parsed.y.toFixed(2).replace(".",",")}%`}}}}})}updateDetailsTable(t){const r=this.container.querySelector("#investment-details");if(!r)return;if(!t.length){r.innerHTML='<p class="text-sm text-gray-400">Nenhum investimento encontrado para o filtro selecionado.</p>';return}const a=t.map(e=>{const s=Number(e.amountInvested)||0,o=u(e),n=Number(e.currentPrice)||0,c=d(e),l=c-s,h=s>0?l/s*100:0;return{...e,invested:s,qty:o,currentPrice:n,current:c,profit:l,profitPct:h}}).sort((e,s)=>s.current-e.current);r.innerHTML=`
      <table class="w-full text-sm min-w-[820px]">
        <thead>
          <tr class="text-left text-gray-400 border-b border-[#2a2a2a]">
            <th class="py-2">Ativo</th>
            <th class="py-2">Tipo</th>
            <th class="py-2">Qtd.</th>
            <th class="py-2">Preço Atual</th>
            <th class="py-2">Investido</th>
            <th class="py-2">Valor Atual</th>
            <th class="py-2">Rend. R$</th>
            <th class="py-2">Rend. %</th>
          </tr>
        </thead>
        <tbody>
          ${a.map(e=>`
            <tr class="border-b border-[#2a2a2a]/60 hover:bg-[#222222]">
              <td class="py-2 text-white font-medium">${this.escapeHtml(e.name||"-")}</td>
              <td class="py-2 text-gray-300">${this.escapeHtml(e.type||"-")}</td>
              <td class="py-2 text-gray-300">${x(e.qty)}</td>
              <td class="py-2 text-gray-300">${this.formatCurrency(e.currentPrice)}</td>
              <td class="py-2 text-gray-300">${this.formatCurrency(e.invested)}</td>
              <td class="py-2 text-blue-300">${this.formatCurrency(e.current)}</td>
              <td class="py-2 ${e.profit>=0?"text-green-400":"text-red-400"}">${e.profit>=0?"+":"-"} ${this.formatCurrency(Math.abs(e.profit))}</td>
              <td class="py-2 ${e.profitPct>=0?"text-green-400":"text-red-400"}">${e.profitPct.toFixed(2).replace(".",",")}%</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}formatCurrency(t){return(Number(t)||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}escapeHtml(t){const r=document.createElement("div");return r.textContent=t||"",r.innerHTML}setText(t,r){const a=this.container.querySelector(t);a&&(a.textContent=r)}setClass(t,r){const a=this.container.querySelector(t);a&&(a.className=r)}}const S="https://script.google.com/macros/s/AKfycbwBlZclk0FFoOwwhXKUU2xjHC7VtvCNZaJeOb7Wad_qf33AyhmzdirL4qlQR87VTHQg7Q/exec",w="/ambiente-dev/";async function p(){if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${w}index.html`;return}const t=sessionStorage.getItem("username")||"Usuário",r=new f(t,"dashboard"),a=document.getElementById("dashboard-app");if(!a){console.error("Container não encontrado");return}a.innerHTML=`
    ${r.render()}
    <div class="main-content">
      ${r.renderTopBar("Dashboard de Investimentos","Estatísticas e análises da carteira")}
      <div class="page-content p-4 md:p-6 lg:p-8">
        <div id="dashboard-container"></div>
      </div>
    </div>
  `,r.init();const e=document.getElementById("dashboard-container");if(!e){console.error("Container do dashboard não encontrado");return}const s=new b({storageKey:"calendar-events"});let o=s;try{const l=new v({scriptUrl:S});await l.initialize(),o=l,console.log("✅ Google Apps Script conectado com sucesso!")}catch(l){console.error("❌ Erro ao conectar Google Apps Script:",l),console.warn("⚠️ Usando LocalStorage como fallback."),o=s}const n=new g;await n.initialize(),await new y({container:e,storageService:o,personalDataService:n}).init()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p();
