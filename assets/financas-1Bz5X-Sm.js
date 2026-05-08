import"./index-DPlvyXvB.js";import{S as Ha}from"./Sidebar-38HLq7tH.js";import{P as Qa}from"./PersonalDataService-CClDzJ6y.js";import{G as Wa}from"./GoogleAppsScriptService-CQm_j4Wp.js";import{i as ae,e as At,d as Nt}from"./investmentQtyHelpers-BFbFxCZp.js";const Ga="/ambiente-dev/",it=["Alimentação","Transporte","Moradia","Assinaturas","Lazer","Saúde","Educação","Roupas","Contas pessoais","Cartão de crédito","Freelance","Salário","Bônus","Investimento","Outros"],ot=["Cartão de crédito","Cartão de débito","Pix","Dinheiro","Boleto","Transferência"],ke="Cartão de crédito",st=["Caixinhas","Reserva de emergência","Reserva de vida","Ações","FIIs","ETFs","BDRs","Tesouro Direto","CDB","LCI/LCA","Fundos","Criptomoedas","Dólar","Previdência","Outros"],Ya="Dólar";function T(xe){return xe===Ya}const Ja=new Set(["Tesouro Direto","CDB","LCI/LCA","Caixinhas","Reserva de emergência","Reserva de vida","Fundos","Previdência"]),jt=10.75,Ut="financas:assumed-cdi-nominal-aa";function Me(xe){return Ja.has(xe)}const rt=[{pct:55,label:"Reserva e segurança",instrument:"CDB",describe:"Prioridade é liquidez e segurança do principal — caixa para emergências e objetivos de curto prazo."},{pct:20,label:"Proteção contra inflação",instrument:"Dólar",describe:"Exposição em moeda forte pode ajudar a diversificar riscos cambiais — avalie objetivo e prazo antes de posicionar."},{pct:25,label:"Crescimento de longo prazo",instrument:"Tesouro Direto 2029",describe:"Títulos públicos prefixados ou indexados com vencimento alinhado ao horizonte; IR decresce com o tempo até o resgate."}],qt="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a]/90 px-3 py-2.5 text-sm leading-relaxed",Ka=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];document.addEventListener("DOMContentLoaded",async()=>{if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${Ga}index.html`;return}const _t=sessionStorage.getItem("username")||"Usuário",Re=new Ha(_t,"financas"),l=new Qa;await l.initialize();const Vt="https://script.google.com/macros/s/AKfycbwBlZclk0FFoOwwhXKUU2xjHC7VtvCNZaJeOb7Wad_qf33AyhmzdirL4qlQR87VTHQg7Q/exec";let u=null;try{u=new Wa({scriptUrl:Vt}),await u.initialize()}catch(e){console.warn("Planilha (Finanças) não disponível:",e)}async function ve(e){const t=l.saveCreditCardsState(e);if(u)try{await u.syncCreditCards(t)}catch(a){console.warn("Cartões não sincronizados com a planilha:",a)}return t}async function dt(e){if(!e||!Array.isArray(e.cards))return;const t=l.getCreditCardsState();e.cards.length>0?l.saveCreditCardsState({cards:e.cards,activeId:e.activeId??null}):t.cards.length>0&&await ve(t)}async function zt(){if(u)try{const e=await u.loadCreditCards();await dt(e)}catch(e){console.warn("Erro ao carregar cartões da planilha:",e)}}function lt(e){if(!e||e.length===0)return;const t=l.getTransactions(),a=new Map(t.map(n=>[n.id,n]));e.forEach(n=>{if(!n.id)return;a.get(n.id)||l.saveTransaction({id:n.id,date:n.date||"",type:n.type||"despesa",category:n.category||"",method:n.method||"",value:parseFloat(n.value)||0})})}const Pe=new Date;let P=Pe.getMonth()+1,W=Pe.getFullYear(),G=null,k=[];const Ot=document.getElementById("app");Ot.innerHTML=`
    ${Re.render()}
    <div class="main-content">
      ${Re.renderTopBar("Finanças","Controle seus gastos e receitas")}
      <div class="page-content p-4 md:p-8">
        <div class="max-w-5xl mx-auto space-y-6">

          <!-- Navegação do mês -->
          <div class="flex items-center justify-between gap-3">
            <button type="button" id="prev-month" class="p-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white hover:bg-[#222222] transition-colors">
              <i class="fas fa-chevron-left"></i>
            </button>
            <h2 id="month-label" class="text-lg md:text-xl font-bold text-white"></h2>
            <div class="flex items-center gap-2">
              <button type="button" id="toggle-sensitive-values" class="px-3 py-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-gray-300 hover:text-white hover:bg-[#222222] transition-colors text-sm flex items-center gap-2">
                <i class="fas fa-eye-slash text-xs"></i>
                <span class="hidden sm:inline">Ocultar valores</span>
              </button>
              <button type="button" id="next-month" class="p-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white hover:bg-[#222222] transition-colors">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <!-- Cards resumo (mesma altura mínima e alinhamento vertical) -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-stretch">
            <button type="button" id="summary-income-card" class="text-left bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 hover:bg-[#222222] transition-colors h-full min-h-[6.25rem] flex flex-col justify-center">
              <p class="text-xs text-gray-400 mb-1 uppercase tracking-wider">Receitas</p>
              <p id="total-income" class="text-xl md:text-2xl font-bold text-green-400">R$ 0,00</p>
            </button>
            <button type="button" id="summary-expense-card" title="Soma das despesas que reduzem o caixa no mês (compras no cartão não entram aqui nem no saldo)." class="text-left bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 hover:bg-[#222222] transition-colors h-full min-h-[6.25rem] flex flex-col justify-center">
              <p class="text-xs text-gray-400 mb-1 uppercase tracking-wider">Despesas</p>
              <p id="total-expense" class="text-xl md:text-2xl font-bold text-red-400">R$ 0,00</p>
            </button>
            <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 h-full min-h-[6.25rem] flex flex-col justify-center">
              <p class="text-xs text-gray-400 mb-1 uppercase tracking-wider">Saldo</p>
              <p id="total-balance" class="text-xl md:text-2xl font-bold text-white">R$ 0,00</p>
            </div>
            <button type="button" id="credit-card-summary-card" class="text-left bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 hover:bg-[#222222] transition-colors h-full min-h-[6.25rem] flex flex-col justify-between gap-2">
              <div class="min-w-0">
                <p class="text-xs text-gray-400 mb-1 uppercase tracking-wider flex items-center gap-2">
                  <i class="fas fa-credit-card text-sky-400 text-[11px]"></i> Cartão ativo
                </p>
                <p id="cc-widget-name" class="text-sm md:text-base font-semibold text-sky-300 truncate">—</p>
                <p id="cc-widget-usage" class="text-xs text-gray-500 mt-1 tabular-nums">Toque para gerenciar</p>
              </div>
              <div class="w-full bg-[#222222] rounded-full h-2 overflow-hidden shrink-0">
                <div id="cc-widget-bar" class="h-full bg-sky-500 rounded-full transition-all duration-300" style="width:0%"></div>
              </div>
            </button>
          </div>

          <!-- Gastos por categoria -->
          <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 md:p-6">
            <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
              <i class="fas fa-chart-pie text-blue-400"></i> Por categoria
            </h3>
            <div id="category-bars" class="space-y-3">
              <p class="text-gray-500 text-sm">Sem dados neste mês.</p>
            </div>
          </div>

          <!-- Investimentos -->
          <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 md:p-6">
            <div class="flex gap-1 mb-4 border-b border-[#2a2a2a]" role="tablist" aria-label="Cadastro">
              <button type="button" role="tab" id="inv-tab-txn" aria-selected="true" aria-controls="inv-panel-txn"
                class="inv-form-tab px-4 py-2.5 text-sm font-medium rounded-t-lg border border-transparent border-b-0 -mb-px transition-colors text-white bg-[#222222] border-[#2a2a2a] border-b-[#222222] z-10">
                Lançamento
              </button>
              <button type="button" role="tab" id="inv-tab-inv" aria-selected="false" aria-controls="inv-panel-inv"
                class="inv-form-tab px-4 py-2.5 text-sm font-medium rounded-t-lg border border-transparent border-b-0 -mb-px transition-colors text-gray-400 hover:text-white border-b-[#2a2a2a]">
                Investimento
              </button>
            </div>

            <div id="inv-summary-section" hidden>
              <h3 class="text-white font-semibold mb-4 flex items-center gap-2">
                <i class="fas fa-chart-line text-emerald-400"></i> Investimentos
              </h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
                <div class="bg-[#222222] border border-[#2a2a2a] rounded-xl p-3 md:p-4 min-h-[4.5rem] flex flex-col justify-center">
                  <p class="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mb-1">Total investido</p>
                  <p id="inv-total-invested" class="text-base md:text-lg font-bold text-white tabular-nums">R$ 0,00</p>
                  <p id="inv-total-invested-usd" class="text-xs md:text-sm font-semibold text-slate-400 tabular-nums mt-1" title="Estimativa em US$ (cotação média dos ativos em Dólar)">≈ US$ —</p>
                </div>
                <div class="bg-[#222222] border border-[#2a2a2a] rounded-xl p-3 md:p-4 min-h-[4.5rem] flex flex-col justify-center">
                  <p class="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mb-1">Valor atual (patrimônio)</p>
                  <p id="inv-total-current" class="text-base md:text-lg font-bold text-blue-300 tabular-nums">R$ 0,00</p>
                  <p id="inv-total-current-usd" class="text-xs md:text-sm font-semibold text-blue-400/80 tabular-nums mt-1" title="Estimativa em US$ (cotação média dos ativos em Dólar)">≈ US$ —</p>
                </div>
                <div class="bg-[#222222] border border-[#2a2a2a] rounded-xl p-3 md:p-4 min-h-[4.5rem] flex flex-col justify-center">
                  <p class="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mb-1">Rendimento (R$)</p>
                  <p id="inv-total-profit" class="text-base md:text-lg font-bold text-green-400 tabular-nums">R$ 0,00</p>
                </div>
                <div class="bg-[#222222] border border-[#2a2a2a] rounded-xl p-3 md:p-4 min-h-[4.5rem] flex flex-col justify-center">
                  <p class="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mb-1">Rendimento (%)</p>
                  <p id="inv-total-profit-pct" class="text-base md:text-lg font-bold text-green-400 tabular-nums">0,00%</p>
                </div>
              </div>
            </div>

            <div id="inv-panel-txn" role="tabpanel" aria-labelledby="inv-tab-txn" class="mb-4">
              <div class="flex items-center gap-2 mb-3">
                <i class="fas fa-plus-circle text-green-400"></i>
                <span id="form-title" class="text-white font-semibold">Lançamento</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <input type="date" id="txn-date" class="px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500" />
                <select id="txn-type" class="px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="despesa">Despesa</option>
                  <option value="receita">Receita</option>
                </select>
                <select id="txn-category" class="px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500">
                  ${it.map(e=>`<option value="${e}">${e}</option>`).join("")}
                </select>
                <select id="txn-method" class="px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500">
                  ${ot.map(e=>`<option value="${e}">${e}</option>`).join("")}
                </select>
                <div id="txn-credit-card-wrap" class="sm:col-span-2 lg:col-span-3 hidden space-y-1.5">
                  <label for="txn-credit-card" class="block text-xs font-medium text-gray-400">Cartão utilizado neste lançamento</label>
                  <select id="txn-credit-card" class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500"></select>
                  <p id="txn-credit-card-hint" class="text-xs text-amber-400/90 hidden">Cadastre cartões no card “Cartão ativo” acima e escolha um como ativo.</p>
                </div>
                <input type="text" id="txn-value" inputmode="decimal" placeholder="Valor (ex: 45,90)" class="px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500" />
                <div class="flex gap-2">
                  <button type="button" id="txn-save" class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <span class="save-text">Salvar</span>
                    <span class="save-spinner hidden"><i class="fas fa-spinner fa-spin"></i></span>
                  </button>
                  <button type="button" id="txn-cancel" class="px-4 py-2 bg-[#222222] border border-[#2a2a2a] hover:bg-[#2a2a2a] text-gray-400 rounded-lg transition-colors hidden">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>

            <div id="inv-panel-inv" role="tabpanel" aria-labelledby="inv-tab-inv" class="mb-4 space-y-6" hidden>
              <div class="rounded-xl border border-[#2a2a2a] bg-[#141414] p-4 md:p-6 space-y-4">
                <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
                  <div class="flex-1 min-w-0 space-y-1.5">
                    <label for="inv-alloc-total" class="block text-xs font-medium text-gray-400">Valor total a alocar (R$)</label>
                    <input type="text" id="inv-alloc-total" inputmode="decimal" placeholder="0,00" autocomplete="off"
                      class="w-full min-w-0 px-3 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/60" />
                  </div>
                  <button type="button" id="inv-alloc-calc"
                    class="shrink-0 px-5 py-2.5 text-sm font-semibold bg-emerald-600/90 hover:bg-emerald-500 text-white rounded-lg transition-colors border border-emerald-500/30">
                    Calcular
                  </button>
                </div>
                <div id="inv-alloc-results-wrap" class="hidden rounded-lg border border-[#2a2a2a] bg-[#1a1a1a]/80 p-3 md:p-4 space-y-3">
                  <p class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Divisão por área</p>
                  <div id="inv-alloc-results" class="grid grid-cols-1 sm:grid-cols-2 gap-3"></div>
                  <p id="inv-alloc-sum-check" class="text-xs text-gray-500 tabular-nums"></p>
                </div>
              </div>

              <div class="rounded-xl border border-[#2a2a2a] bg-[#141414] p-4 md:p-6 space-y-6">
                <div class="space-y-3">
                  <p class="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Identificação</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="min-w-0 space-y-1.5">
                      <label for="inv-name" class="block text-xs font-medium text-gray-400">Nome do ativo</label>
                      <input type="text" id="inv-name" placeholder="Ex.: Reserva, Bitcoin, PETR4…" autocomplete="off"
                        class="w-full min-w-0 px-3 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-600/40" />
                    </div>
                    <div class="min-w-0 space-y-1.5">
                      <label for="inv-type" class="block text-xs font-medium text-gray-400">Categoria</label>
                      <select id="inv-type" class="w-full min-w-0 px-3 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/60">
                        ${st.map(e=>`<option value="${e}">${e}</option>`).join("")}
                      </select>
                    </div>
                  </div>
                </div>

                <div class="space-y-3 pt-2 border-t border-[#2a2a2a]">
                  <p id="inv-values-heading" class="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Saldo</p>
                  <div id="inv-values-grid" class="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <div id="inv-invested-wrap" class="min-w-0 space-y-1.5 lg:col-span-12">
                      <label for="inv-invested" id="inv-invested-label" class="block text-xs font-medium text-gray-400">Saldo (R$)</label>
                      <input type="text" id="inv-invested" inputmode="decimal" placeholder="0,00"
                        class="w-full min-w-0 px-3 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/60" />
                    </div>
                    <div id="inv-quantity-wrap" class="min-w-0 space-y-1.5 lg:col-span-4" hidden>
                      <label for="inv-quantity" id="inv-quantity-label" class="block text-xs font-medium text-gray-400">Cotas ou unidades</label>
                      <input type="text" id="inv-quantity" inputmode="decimal" placeholder="Ex.: 10,5"
                        class="w-full px-3 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/60" />
                    </div>
                    <div id="inv-current-price-wrap" class="min-w-0 space-y-1.5 lg:col-span-4" hidden>
                      <label for="inv-current-price" id="inv-current-price-label" class="block text-xs font-medium text-gray-400">Preço atual (R$)</label>
                      <input type="text" id="inv-current-price" inputmode="decimal" placeholder="0,00"
                        class="w-full px-3 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/60" />
                    </div>
                  </div>
                </div>

                <div id="inv-yield-wrap" class="hidden space-y-3 pt-1 border-t border-[#2a2a2a]">
                  <div class="flex items-center gap-2">
                    <p class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Rentabilidade (referência)</p>
                    <span class="text-[10px] text-amber-500/90" title="Projeções são simplificadas">estimativa</span>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="min-w-0 space-y-1.5">
                      <label for="inv-yield-basis" class="block text-xs font-medium text-gray-400">Tipo de taxa informada</label>
                      <select id="inv-yield-basis" class="w-full min-w-0 px-3 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/60">
                        <option value="none">Sem taxa declarada — não projetar</option>
                        <option value="pct_cdi">% do CDI (ex.: 110 = 110% do CDI)</option>
                        <option value="fixed_aa">Taxa prefixada nominal (a.a.)</option>
                      </select>
                    </div>
                    <div class="min-w-0 space-y-1.5">
                      <label for="inv-yield-quote" id="inv-yield-quote-label" class="block text-xs font-medium text-gray-400">Taxa declarada (%)</label>
                      <input type="text" id="inv-yield-quote" inputmode="decimal" placeholder="Ex.: 110 ou 12,75" autocomplete="off" disabled
                        class="w-full min-w-0 px-3 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/60 disabled:opacity-40 disabled:cursor-not-allowed" />
                    </div>
                  </div>
                  <div id="inv-assumed-cdi-row" class="grid grid-cols-1 sm:grid-cols-2 gap-4 hidden">
                    <div class="min-w-0 space-y-1.5 sm:col-span-2">
                      <label for="inv-assumed-cdi-aa" class="block text-xs font-medium text-gray-400">CDI nominal assumido (% a.a.) — só para a conta na tela</label>
                      <input type="text" id="inv-assumed-cdi-aa" inputmode="decimal" placeholder="Ex.: 10,75" autocomplete="off"
                        class="w-full max-w-xs px-3 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/60" />
                      <p class="text-[10px] text-gray-500 leading-snug">Use o mesmo CDI hipotético para comparar cenários entre ativos.</p>
                    </div>
                  </div>
                  <div class="min-w-0 space-y-1.5">
                    <label for="inv-yield-months" class="block text-xs font-medium text-gray-400">Meses para projeção simplificada</label>
                    <input type="number" id="inv-yield-months" min="1" max="600" step="1" value="12"
                      class="w-full max-w-xs px-3 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/60 disabled:opacity-40" disabled />
                  </div>
                </div>

                <div id="inv-live-preview" class="${qt} text-sm leading-relaxed text-gray-400">
                  <p id="inv-live-main">Preencha os campos para ver o rendimento em tempo real.</p>
                  <p id="inv-live-yield" class="hidden mt-2 pt-2 border-t border-[#2a2a2a]/80 text-[12px] text-emerald-400/95 leading-snug"></p>
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:items-center gap-2 pt-1">
                  <button type="button" id="inv-cancel" class="px-4 py-2.5 text-sm bg-transparent border border-[#2a2a2a] hover:bg-[#222222] text-gray-300 rounded-lg transition-colors hidden">Cancelar</button>
                  <button type="button" id="inv-save" class="w-full sm:w-auto min-w-[168px] px-5 py-2.5 text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors shadow-sm shadow-emerald-900/20">Salvar</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Lista: lançamentos do mês ou investimentos (conforme aba) -->
          <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden">
            <div class="p-4 md:p-6 border-b border-[#2a2a2a] flex items-center justify-between gap-3">
              <h3 class="text-white font-semibold flex items-center gap-2 min-w-0">
                <i id="ledger-list-icon" class="fas fa-list text-blue-400 shrink-0"></i>
                <span id="ledger-list-title">Lançamentos</span>
              </h3>
              <div class="flex items-center gap-2 shrink-0 text-xs text-gray-500">
                <span id="txn-count"></span>
                <span id="inv-count" hidden></span>
              </div>
            </div>
            <div id="txn-list" class="divide-y divide-[#2a2a2a] max-h-[500px] overflow-y-auto">
              <p class="text-gray-500 text-sm p-4">Nenhum lançamento neste mês.</p>
            </div>
            <div id="inv-list-shell" class="max-h-[500px] overflow-y-auto px-4 md:px-6 py-4" hidden>
              <div id="inv-list" class="space-y-3">
                <p class="text-gray-500 text-sm">Nenhum investimento cadastrado.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Modal de confirmação de exclusão -->
    <div id="delete-modal" class="fixed inset-0 bg-black/70 hidden items-center justify-center z-[100] p-4">
      <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-2xl w-full max-w-md">
        <div class="p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
              <i class="fas fa-exclamation-triangle text-red-400 text-xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-white">Confirmar exclusão</h3>
          </div>
          <p class="text-gray-400 mb-6">Tem certeza que deseja excluir este lançamento?</p>
          <div class="flex gap-3 justify-end">
            <button type="button" id="delete-cancel" class="px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg transition-colors">Cancelar</button>
            <button type="button" id="delete-confirm" class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium">Excluir</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <div id="toast-container" class="fixed top-4 right-4 z-[200] space-y-2 max-w-md"></div>

    <!-- Modal de resumo -->
    <div id="summary-modal" class="fixed inset-0 bg-black/70 hidden items-center justify-center z-[110] p-4">
      <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div class="p-4 md:p-6 border-b border-[#2a2a2a] flex items-center justify-between gap-3">
          <h3 id="summary-modal-title" class="text-lg font-semibold text-white">Detalhes</h3>
          <button type="button" id="summary-modal-close" class="px-3 py-1.5 bg-[#222222] hover:bg-[#2a2a2a] text-gray-300 rounded-lg transition-colors">
            Fechar
          </button>
        </div>
        <div id="summary-modal-list" class="p-4 md:p-6 overflow-y-auto space-y-2">
          <p class="text-gray-500 text-sm">Sem dados.</p>
        </div>
      </div>
    </div>

    <!-- Cartões de crédito -->
    <div id="credit-cards-modal" class="fixed inset-0 bg-black/70 hidden items-center justify-center z-[115] p-4">
      <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-2xl w-full max-w-lg max-h-[88vh] flex flex-col">
        <div class="p-4 md:p-6 border-b border-[#2a2a2a] flex items-center justify-between gap-3 shrink-0">
          <h3 class="text-lg font-semibold text-white flex items-center gap-2 min-w-0">
            <i class="fas fa-credit-card text-sky-400 shrink-0"></i>
            <span>Cartões de crédito</span>
          </h3>
          <button type="button" id="credit-cards-modal-close" class="px-3 py-1.5 bg-[#222222] hover:bg-[#2a2a2a] text-gray-300 rounded-lg transition-colors shrink-0">Fechar</button>
        </div>
        <div class="p-4 md:p-6 overflow-y-auto space-y-5 flex-1 min-h-0">
          <p class="text-sm text-gray-400 leading-relaxed">
            Cadastre nome e limite de cada cartão. O <strong class="text-gray-300">cartão ativo</strong> aparece no painel ao lado de Receitas e Despesas; lançamentos em “Cartão de crédito” consomem o limite do cartão escolhido no formulário (ou do ativo, se não houver cartões cadastrados ainda).
          </p>
          <form id="cc-add-form" class="rounded-xl border border-[#2a2a2a] bg-[#141414] p-4 space-y-3">
            <p id="cc-form-title" class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Novo cartão</p>
            <div class="space-y-1.5">
              <label for="cc-new-name" class="block text-xs font-medium text-gray-400">Nome</label>
              <input type="text" id="cc-new-name" autocomplete="off" placeholder="Ex.: Nubank Gold"
                class="w-full px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg text-sm focus:ring-2 focus:ring-sky-500/50" />
            </div>
            <div class="space-y-1.5">
              <label for="cc-new-limit" class="block text-xs font-medium text-gray-400">Limite (R$)</label>
              <input type="text" id="cc-new-limit" inputmode="decimal" placeholder="0,00" autocomplete="off"
                class="w-full px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg text-sm focus:ring-2 focus:ring-sky-500/50" />
            </div>
            <div class="flex gap-2">
              <button type="submit" id="cc-submit-btn" class="flex-1 px-4 py-2.5 text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors">
                Adicionar cartão
              </button>
              <button type="button" id="cc-cancel-edit" class="px-4 py-2.5 text-sm bg-[#1a1a1a] border border-[#2a2a2a] hover:bg-[#222222] text-gray-300 rounded-lg transition-colors hidden">
                Cancelar
              </button>
            </div>
          </form>
          <div>
            <p class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3">Seus cartões</p>
            <div id="cc-list" class="space-y-2"></div>
            <p id="cc-list-empty" class="text-sm text-gray-500 py-4 text-center border border-dashed border-[#2a2a2a] rounded-xl">Nenhum cartão cadastrado.</p>
          </div>
        </div>
      </div>
    </div>
  `,Re.init();const Ht=document.getElementById("month-label"),Qt=document.getElementById("prev-month"),Wt=document.getElementById("next-month"),ne=document.getElementById("toggle-sensitive-values"),ie=document.getElementById("txn-date"),oe=document.getElementById("txn-type"),Ae=document.getElementById("txn-category"),se=document.getElementById("txn-method"),Y=document.getElementById("txn-value"),re=document.getElementById("txn-save"),Ne=document.getElementById("txn-cancel"),de=document.getElementById("txn-list"),ct=document.getElementById("form-title"),A=document.getElementById("delete-modal"),Gt=document.getElementById("delete-cancel"),Yt=document.getElementById("delete-confirm"),Jt=document.getElementById("toast-container"),Kt=document.getElementById("summary-income-card"),Zt=document.getElementById("summary-expense-card"),Xt=document.getElementById("credit-card-summary-card"),ut=document.getElementById("cc-widget-name"),je=document.getElementById("cc-widget-usage"),_=document.getElementById("cc-widget-bar"),V=document.getElementById("credit-cards-modal"),ea=document.getElementById("credit-cards-modal-close"),ta=document.getElementById("cc-add-form"),mt=document.getElementById("cc-form-title"),ge=document.getElementById("cc-new-name"),J=document.getElementById("cc-new-limit"),pt=document.getElementById("cc-submit-btn"),Ue=document.getElementById("cc-cancel-edit"),j=document.getElementById("cc-list"),xt=document.getElementById("cc-list-empty"),aa=document.getElementById("txn-credit-card-wrap"),le=document.getElementById("txn-credit-card"),vt=document.getElementById("txn-credit-card-hint"),z=document.getElementById("summary-modal"),na=document.getElementById("summary-modal-title"),gt=document.getElementById("summary-modal-list"),ia=document.getElementById("summary-modal-close"),fe=document.getElementById("inv-name"),y=document.getElementById("inv-type"),h=document.getElementById("inv-invested"),K=document.getElementById("inv-invested-wrap"),qe=document.getElementById("inv-invested-label"),_e=document.getElementById("inv-values-heading"),S=document.getElementById("inv-quantity"),oa=document.getElementById("inv-quantity-wrap"),L=document.getElementById("inv-current-price"),sa=document.getElementById("inv-current-price-wrap"),be=document.getElementById("inv-quantity-label"),ye=document.getElementById("inv-current-price-label"),Ve=document.getElementById("inv-save"),ze=document.getElementById("inv-cancel"),he=document.getElementById("inv-list"),ra=document.getElementById("inv-live-preview"),ft=document.getElementById("inv-live-main"),w=document.getElementById("inv-live-yield"),Oe=document.getElementById("inv-yield-wrap"),C=document.getElementById("inv-yield-basis"),I=document.getElementById("inv-yield-quote"),we=document.getElementById("inv-yield-quote-label"),He=document.getElementById("inv-assumed-cdi-row"),E=document.getElementById("inv-assumed-cdi-aa"),D=document.getElementById("inv-yield-months"),bt=document.getElementById("inv-total-invested"),Z=document.getElementById("inv-total-invested-usd"),yt=document.getElementById("inv-total-current"),X=document.getElementById("inv-total-current-usd"),Ce=document.getElementById("inv-total-profit"),Ie=document.getElementById("inv-total-profit-pct"),Ee=document.getElementById("inv-tab-txn"),Qe=document.getElementById("inv-tab-inv"),da=document.getElementById("inv-panel-txn"),la=document.getElementById("inv-panel-inv"),ca=document.getElementById("inv-summary-section"),ht=document.getElementById("ledger-list-icon"),wt=document.getElementById("ledger-list-title"),We=document.getElementById("txn-count"),Ge=document.getElementById("inv-count"),ua=document.getElementById("inv-list-shell"),ce=document.getElementById("inv-alloc-total"),ma=document.getElementById("inv-alloc-calc"),Ct=document.getElementById("inv-alloc-results-wrap"),pa=document.getElementById("inv-alloc-results"),xa=document.getElementById("inv-alloc-sum-check"),It="inv-form-tab px-4 py-2.5 text-sm font-medium rounded-t-lg border border-transparent border-b-0 -mb-px transition-colors text-white bg-[#222222] border-[#2a2a2a] border-b-[#222222] z-10",Et="inv-form-tab px-4 py-2.5 text-sm font-medium rounded-t-lg border border-transparent border-b-0 -mb-px transition-colors text-gray-400 hover:text-white border-b-[#2a2a2a]";function Se(e){const t=e==="txn";Ee.setAttribute("aria-selected",String(t)),Qe.setAttribute("aria-selected",String(!t)),Ee.className=t?It:Et,Qe.className=t?Et:It,da.toggleAttribute("hidden",!t),la.toggleAttribute("hidden",t),ca.toggleAttribute("hidden",t),de.toggleAttribute("hidden",!t),ua.toggleAttribute("hidden",t),t?(ht.className="fas fa-list text-blue-400 shrink-0",wt.textContent="Lançamentos",We.toggleAttribute("hidden",!1),Ge.toggleAttribute("hidden",!0)):(ht.className="fas fa-chart-line text-emerald-400 shrink-0",wt.textContent="Investimentos",We.toggleAttribute("hidden",!0),Ge.toggleAttribute("hidden",!1))}Ee.addEventListener("click",()=>Se("txn")),Qe.addEventListener("click",()=>Se("inv"));let ee=null,O=null,te=null,v=localStorage.getItem("financas:show-sensitive-values")!=="false";ie.value=Pe.toISOString().split("T")[0];function m(e,t="success"){const a=document.createElement("div"),n={success:{bg:"bg-green-600",border:"border-green-500",icon:"fa-check-circle"},error:{bg:"bg-red-700",border:"border-red-500",icon:"fa-exclamation-triangle"},info:{bg:"bg-blue-600",border:"border-blue-500",icon:"fa-info-circle"}}[t]||{bg:"bg-blue-600",border:"border-blue-500",icon:"fa-info-circle"};a.className=`${n.bg} border-2 ${n.border} text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-slide-in-right font-medium z-[200] min-w-[300px] max-w-md`,a.innerHTML=`<i class="fas ${n.icon} text-lg"></i><span class="flex-1">${f(e)}</span>`,Jt.appendChild(a),setTimeout(()=>{a.classList.add("animate-slide-out-right"),setTimeout(()=>a.remove(),300)},t==="error"?5e3:3e3)}function f(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}function $(e){return parseFloat(e||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}function g(e){return v?$(e):"R$ ••••"}function Ye(e){return v?`${e.toFixed(2).replace(".",",")}%`:"•••%"}function St(){const e=ne.querySelector("i"),t=ne.querySelector("span");if(v){e.className="fas fa-eye-slash text-xs",t.textContent="Ocultar valores",ne.setAttribute("aria-label","Ocultar valores");return}e.className="fas fa-eye text-xs",t.textContent="Mostrar valores",ne.setAttribute("aria-label","Mostrar valores")}function b(e){if(e==null)return 0;const t=String(e).replace(/\D/g,"");return t?Number(t)/100:0}function M(e){if(e==null)return 0;const t=String(e).replace(/\s/g,"").replace(",","."),a=parseFloat(t);return Number.isFinite(a)?a:0}function R(e){return typeof e=="number"&&Number.isFinite(e)?e.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):b(e).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function va(e){const t=rt.length,a=[];let n=0;for(let i=0;i<t-1;i++){const o=Math.floor(e*rt[i].pct/100);a.push(o),n+=o}return a.push(e-n),a}function Lt(){const e=b(ce.value),t=Math.round(e*100);if(!t||t<=0){m("Informe um valor maior que zero.","error"),Ct.classList.add("hidden");return}const a=va(t);pa.innerHTML=rt.map((i,o)=>{const s=a[o]/100;return`
        <div class="rounded-lg border border-[#2a2a2a] bg-[#141414] px-3 py-3 min-w-0 flex flex-col gap-2">
          <p class="text-[10px] text-gray-500 uppercase tracking-wider">${i.pct}%</p>
          <p class="text-sm font-medium text-white leading-snug">${f(i.label)}</p>
          <p class="text-xs font-semibold text-emerald-400/90 tabular-nums">${f(i.instrument)}</p>
          <p class="text-xs text-gray-500 leading-relaxed">${f(i.describe)}</p>
          <p class="text-base font-bold text-emerald-400 tabular-nums mt-auto pt-1 border-t border-[#2a2a2a]">${$(s)}</p>
        </div>`}).join("");const n=a.reduce((i,o)=>i+o,0)/100;xa.textContent=`Total alocado: ${$(n)}.`,Ct.classList.remove("hidden")}ce.addEventListener("input",()=>{ce.value=R(ce.value)}),ma.addEventListener("click",Lt),ce.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),Lt())});function ga(){Ht.textContent=`${Ka[P-1]} ${W}`}Qt.addEventListener("click",()=>{P--,P<1&&(P=12,W--),N()}),Wt.addEventListener("click",()=>{P++,P>12&&(P=1,W++),N()});function Le(){return l.getTransactionsByMonth(W,P)}function fa(e){let t=0,a=0;const n={};e.forEach(o=>{const s=Math.abs(parseFloat(o.value)||0);if(o.type==="receita"){t+=s;return}(o.method||"")===ke||(a+=s);const p=o.category||"Outros";n[p]=(n[p]||0)+s});const i=Object.entries(n).sort((o,s)=>s[1]-o[1]);return{income:t,expense:a,balance:t-a,byCategory:i}}function ba(e){document.getElementById("total-income").textContent=g(e.income),document.getElementById("total-expense").textContent=g(e.expense);const t=document.getElementById("total-balance");t.textContent=g(e.balance),t.className=`text-xl md:text-2xl font-bold ${e.balance>=0?"text-green-400":"text-red-400"}`}function ya(e){return new Set(e.cards.map(t=>t.id))}function ha(e,t,a){const n=e.creditCardId;return n&&a.has(String(n))?String(n):t}function $t(e,t,a,n){const i=ya(n);return a.reduce((o,s)=>s.type!=="despesa"||(s.method||"")!==ke?o:ha(s,t,i)===e?o+Math.abs(parseFloat(s.value)||0):o,0)}function wa(e){const t=l.getCreditCardsState(),a=t.activeId,n=t.cards.find(d=>d.id===a);if(!n){ut.textContent=t.cards.length?"Escolha um cartão ativo":"Cadastrar cartão",je.textContent=t.cards.length?"Abra o modal e toque em Ativar":"Toque para adicionar",_.style.width="0%",_.className="h-full bg-sky-500 rounded-full transition-all duration-300";return}const i=$t(n.id,a,e,t),o=Math.max(0,parseFloat(n.limit)||0);if(ut.textContent=n.name,!v){je.textContent="Valores ocultos",_.style.width="0%",_.className="h-full bg-gray-600 rounded-full transition-all duration-300";return}je.textContent=o>0?`${$(i)} / ${$(o)} · ${$(Math.max(0,o-i))} disponível`:`${$(i)} no crédito neste mês`;let s=0;o>0?(s=Math.min(100,Math.round(i/o*100)),_.className=i>o?"h-full bg-red-500 rounded-full transition-all duration-300":"h-full bg-sky-500 rounded-full transition-all duration-300"):(_.className="h-full bg-amber-500/80 rounded-full transition-all duration-300",s=i>0?100:0),_.style.width=`${s}%`}function H(e,t=null){var o;const a=e.cards;le.innerHTML=a.map(s=>`<option value="${f(s.id)}">${f(s.name)}</option>`).join("");const n=e.activeId||((o=a[0])==null?void 0:o.id)||"",i=t&&a.some(s=>s.id===t)?t:n;le.value=i||""}function Q(){const e=oe.value==="despesa",t=se.value===ke,a=e&&t;if(aa.classList.toggle("hidden",!a),!a)return;const n=l.getCreditCardsState();H(n),n.cards.length===0?(vt.classList.remove("hidden"),le.disabled=!0):(vt.classList.add("hidden"),le.disabled=!1)}function $e(){const e=l.getCreditCardsState(),t=Le();if(e.cards.length===0){j.innerHTML="",xt.classList.remove("hidden");return}xt.classList.add("hidden"),j.innerHTML=e.cards.map(n=>{const i=$t(n.id,e.activeId,t,e),o=Math.max(0,parseFloat(n.limit)||0),s=n.id===e.activeId,d=o>0?`${g(i)} / ${g(o)}`:`${g(i)} neste mês (sem limite cadastrado)`,p=f(n.id);return`
        <div class="rounded-xl border ${s?"border-emerald-600/60 bg-emerald-950/20":"border-[#2a2a2a] bg-[#141414]"} p-3 flex flex-col gap-2">
          <div class="flex justify-between gap-2 items-start">
            <div class="min-w-0">
              <p class="font-medium text-white truncate">${f(n.name)}</p>
              <p class="text-xs text-gray-500 tabular-nums mt-0.5">${d}</p>
            </div>
            <div class="relative shrink-0">
              <button type="button" class="cc-menu-toggle h-8 w-8 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] text-gray-300 hover:text-white hover:bg-[#222222] transition-colors" data-id="${p}" title="Ações do cartão">
                <i class="fas fa-ellipsis-v text-xs"></i>
              </button>
              <div class="cc-menu-dropdown hidden absolute right-0 top-9 z-20 min-w-[9.5rem] rounded-lg border border-[#2a2a2a] bg-[#111111] p-1.5 shadow-xl" data-id="${p}">
                ${s?'<p class="px-2.5 py-1.5 text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">Ativo</p>':`<button type="button" class="cc-action-activate w-full text-left px-2.5 py-1.5 text-sm rounded-md text-gray-200 hover:bg-[#222222]" data-id="${p}">Ativar</button>`}
                <button type="button" class="cc-action-edit w-full text-left px-2.5 py-1.5 text-sm rounded-md text-sky-300 hover:bg-[#222222]" data-id="${p}">Editar</button>
                <button type="button" class="cc-action-delete w-full text-left px-2.5 py-1.5 text-sm rounded-md text-red-300 hover:bg-[#222222]" data-id="${p}">Excluir</button>
              </div>
            </div>
          </div>
        </div>`}).join("");const a=()=>{j.querySelectorAll(".cc-menu-dropdown").forEach(n=>{n.classList.add("hidden")})};j.querySelectorAll(".cc-menu-toggle").forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation();const o=n.dataset.id,s=j.querySelector(`.cc-menu-dropdown[data-id="${o}"]`);if(!s)return;const d=s.classList.contains("hidden");a(),d&&s.classList.remove("hidden")})}),j.querySelectorAll(".cc-action-activate").forEach(n=>{n.addEventListener("click",async()=>{a();const i=n.dataset.id,o=l.getCreditCardsState();o.activeId=i,await ve(o),$e(),H(l.getCreditCardsState()),N()})}),j.querySelectorAll(".cc-action-delete").forEach(n=>{n.addEventListener("click",async()=>{var s;a();const i=n.dataset.id,o=l.getCreditCardsState();o.cards=o.cards.filter(d=>d.id!==i),te===i&&ue(),o.activeId===i&&(o.activeId=((s=o.cards[0])==null?void 0:s.id)??null),await ve(o),$e(),H(l.getCreditCardsState()),Q(),N()})}),j.querySelectorAll(".cc-action-edit").forEach(n=>{n.addEventListener("click",()=>{a();const i=n.dataset.id,s=l.getCreditCardsState().cards.find(d=>d.id===i);s&&(te=i,ge.value=s.name||"",J.value=R(s.limit||0),mt.textContent="Editar cartão",pt.textContent="Salvar alterações",Ue.classList.remove("hidden"),ge.focus())})})}function ue(){te=null,ge.value="",J.value="",mt.textContent="Novo cartão",pt.textContent="Adicionar cartão",Ue.classList.add("hidden")}function Ca(){$e(),ue(),V.classList.remove("hidden"),V.classList.add("flex")}function Je(){ue(),V.classList.add("hidden"),V.classList.remove("flex")}function Ia(e){const t=document.getElementById("category-bars");if(e.byCategory.length===0){t.innerHTML='<p class="text-gray-500 text-sm">Sem despesas neste mês.</p>';return}const a=e.byCategory[0][1];t.innerHTML=e.byCategory.map(([n,i])=>{const o=a>0?Math.round(i/a*100):0,s=Ea(n);return`
        <div>
          <div class="flex justify-between text-sm mb-1">
            <span class="text-gray-300">${f(n)}</span>
            <span class="text-gray-400">${g(i)}</span>
          </div>
          <div class="w-full bg-[#222222] rounded-full h-2.5">
            <div class="h-2.5 rounded-full ${s}" style="width:${o}%"></div>
          </div>
        </div>
      `}).join("")}function Ea(e){return{Alimentação:"bg-orange-500",Transporte:"bg-blue-500",Moradia:"bg-purple-500",Assinaturas:"bg-pink-500",Lazer:"bg-cyan-500",Saúde:"bg-red-500",Educação:"bg-indigo-500",Roupas:"bg-yellow-500","Contas pessoais":"bg-fuchsia-500","Cartão de crédito":"bg-sky-500",Bônus:"bg-lime-500",Investimento:"bg-emerald-500"}[e]||"bg-gray-500"}function Sa(e){return{"Cartão de crédito":"fa-credit-card","Cartão de débito":"fa-credit-card",Pix:"fa-bolt",Dinheiro:"fa-money-bill-wave",Boleto:"fa-barcode",Transferência:"fa-exchange-alt"}[e]||"fa-receipt"}function La(e){const t=[...e].sort((a,n)=>(n.date||"").localeCompare(a.date||""));if(We.textContent=`${t.length} lançamento${t.length!==1?"s":""}`,t.length===0){de.innerHTML='<p class="text-gray-500 text-sm p-4">Nenhum lançamento neste mês.</p>';return}de.innerHTML=t.map(a=>{const n=a.type==="receita",i=n?"text-green-400":"text-red-400",o=n?"+":"-",s=Sa(a.method);return`
        <div class="flex items-center gap-3 p-3 md:p-4 hover:bg-[#222222] transition-colors group" data-id="${a.id}">
          <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${n?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}">
            <i class="fas ${n?"fa-arrow-down":"fa-arrow-up"} text-sm"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <span class="text-white font-medium text-sm truncate">${f(a.category||"Sem categoria")}</span>
              <span class="text-xs text-gray-500 flex items-center gap-1"><i class="fas ${s} text-[10px]"></i>${f(a.method||"")}</span>
            </div>
            <span class="text-xs text-gray-500">${Bt(a.date)}</span>
          </div>
          <span class="${i} font-semibold text-sm whitespace-nowrap">${o} ${$(Math.abs(a.value))}</span>
          <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button type="button" class="txn-edit p-1.5 text-gray-400 hover:text-blue-400 transition-colors" data-id="${a.id}" title="Editar"><i class="fas fa-pen text-xs"></i></button>
            <button type="button" class="txn-delete p-1.5 text-gray-400 hover:text-red-400 transition-colors" data-id="${a.id}" title="Excluir"><i class="fas fa-trash text-xs"></i></button>
          </div>
        </div>
      `}).join(""),de.querySelectorAll(".txn-edit").forEach(a=>{a.addEventListener("click",n=>{n.stopPropagation(),$a(a.dataset.id)})}),de.querySelectorAll(".txn-delete").forEach(a=>{a.addEventListener("click",n=>{n.stopPropagation(),ee=a.dataset.id,A.classList.remove("hidden"),A.classList.add("flex")})})}function Bt(e){if(!e)return"";const t=e.split("-");return t.length===3?`${t[2]}/${t[1]}/${t[0]}`:e}function $a(e){const a=l.getTransactions().find(o=>o.id===e);if(!a)return;G=e,ie.value=a.date||"",oe.value=a.type||"despesa",Ae.value=a.category||it[0],se.value=a.method||ot[0],Y.value=R(a.value||""),ct.textContent="Editar lançamento",Ne.classList.remove("hidden");const n=l.getCreditCardsState(),i=a.creditCardId&&n.cards.some(o=>o.id===a.creditCardId)?a.creditCardId:n.activeId;H(n,i||null),Q(),Se("txn"),Ee.scrollIntoView({behavior:"smooth",block:"center"})}function Tt(){G=null,ie.value=new Date().toISOString().split("T")[0],oe.value="despesa",Ae.value=it[0],se.value=ot[0],Y.value="",ct.textContent="Lançamento",Ne.classList.add("hidden");const e=l.getCreditCardsState();H(e),Q()}Ne.addEventListener("click",Tt),Y.addEventListener("input",()=>{Y.value=R(Y.value)});function Be(){const e=localStorage.getItem(Ut);if(e==null||e==="")return jt;const t=M(String(e).trim());return!Number.isFinite(t)||t<=0||t>50?jt:t}function Ba(){if(!E)return;const e=M(E.value.trim());!Number.isFinite(e)||e<=0||e>50||localStorage.setItem(Ut,e.toFixed(2).replace(".",","))}function Ta(){return b(h.value)}function Te(){const e=(C==null?void 0:C.value)??"none",t=e!=="none";I&&(I.disabled=!t),D&&(D.disabled=!t),He==null||He.classList.toggle("hidden",e!=="pct_cdi"),we&&(e==="pct_cdi"?(we.textContent="% do CDI (ex.: 110 = 110% do CDI)",I&&(I.placeholder="Ex.: 100 ou 110")):e==="fixed_aa"?(we.textContent="Taxa nominal anual declarada (% a.a.)",I&&(I.placeholder="Ex.: 13,65")):we.textContent="Taxa declarada (%)")}function Da(){const e=Me(y.value);Oe==null||Oe.classList.toggle("hidden",!e),!e&&C&&(C.value="none",I&&(I.value=""),D&&(D.value="12")),Te()}function U(e,t={}){const{tone:a="muted"}=t,n=a==="profit"?"font-medium text-green-400":a==="loss"?"font-medium text-red-400":a==="amber"?"text-amber-400":"text-gray-400";ra.className=`${qt}`,ft.className=`leading-relaxed ${n}`,ft.textContent=e,ka()}function Fa(e,t,a){if(!e||e<=0||!Number.isFinite(t)||a<=0)return null;const n=Math.max(1e-4,a/12),i=Math.pow(1+t/100,n),o=e*i;return{fv:o,gain:o-e,factor:i}}function ka(){if(!w)return;if(!Me(y.value)||C&&C.value==="none"){w.classList.add("hidden"),w.textContent="";return}const e=C.value,t=M(I.value);let a=Math.round(parseFloat(String(D.value)));(!Number.isFinite(a)||a<1)&&(a=12),a=Math.min(600,a);let n=NaN,i="";if(e==="pct_cdi"){if(!(t>0)){w.classList.add("hidden"),w.textContent="";return}const c=M(E.value.trim()),q=Number.isFinite(c)&&c>0?c:Be();n=q*(t/100),i=`${t.toLocaleString("pt-BR",{maximumFractionDigits:4})}% do CDI (CDI nominal ~${q.toFixed(2).replace(".",",")}% a.a.)`}else if(e==="fixed_aa"){if(!(t>0)){w.classList.add("hidden"),w.textContent="";return}n=t,i=`Prefixado nominal ~${t.toLocaleString("pt-BR",{minimumFractionDigits:0,maximumFractionDigits:4})}% a.a.`}else{w.classList.add("hidden"),w.textContent="";return}const o=Ta();if(!o||o<=0){w.classList.remove("hidden"),w.className="mt-2 pt-2 border-t border-[#2a2a2a]/80 text-[12px] text-amber-400/95 leading-snug";const c=e==="fixed_aa"?"Prefixado nominal: modelo VF ≈ VP·(1+i)^t; não inclui IR, PU ou marcação a mercado.":"IR e cenário de CDI real não entram aqui.";w.textContent=`Defina um saldo/valor aplicado para ver a estimativa (${i}, ${a} meses). ${c}`;return}const s=Fa(o,n,a);if(!s){w.classList.add("hidden"),w.textContent="";return}w.classList.remove("hidden"),w.className="mt-2 pt-2 border-t border-[#2a2a2a]/80 text-[12px] text-emerald-400/95 leading-snug";const d=v?$(s.gain):"R$ ••••",p=v?$(s.fv):"R$ ••••",r=e==="fixed_aa"?"VF ≈ VP·(1+i)^t nominal (anos = meses÷12). Não modela IR regressivo nem marcação a mercado; no Tesouro o PU pode variar até o vencimento — só orientação rápida.":"Não inclui IR regressivo nem IOF; “% do CDI” usa apenas um CDI nominal assumido na tela.";w.textContent=`Projeção nominal ~${a} m: +${d} (principal ${g(o)} → ${p}). ${i}. ${r}`}function De(){const e=ae(y.value),t=T(y.value);oa.toggleAttribute("hidden",!e),sa.toggleAttribute("hidden",!e),e?t?(qe.textContent="Valor investido (R$) — USD × cotação",h.placeholder="Calculado ou edite para ajustar USD",_e.textContent="Dólar (USD → R$)",be&&(be.textContent="Saldo em USD (US$)"),ye&&(ye.textContent="Cotação USD hoje (R$ por US$)"),S.placeholder="Ex.: 100",L.placeholder="Ex.: 5,45",K.classList.remove("lg:col-span-12"),K.classList.add("lg:col-span-4")):(qe.textContent="Valor investido (R$)",h.placeholder="0,00",_e.textContent="Valores da posição",be&&(be.textContent="Cotas ou unidades"),ye&&(ye.textContent="Preço atual (R$)"),S.placeholder="Ex.: 10,5",L.placeholder="0,00",K.classList.remove("lg:col-span-12"),K.classList.add("lg:col-span-4")):(S.value="",L.value="",qe.textContent="Saldo (R$)",h.placeholder="0,00",_e.textContent="Saldo",K.classList.remove("lg:col-span-4"),K.classList.add("lg:col-span-12")),Da(),Te()}function Ma(){const e=M(S.value),t=b(L.value),a=b(h.value);!(t>0)||!Number.isFinite(t)||(e>0?h.value=R(e*t):a>0&&(S.value=Fe(a/t)))}function Ke(){const e=M(S.value),t=b(L.value);!(e>0)||!(t>0)||(h.value=R(e*t))}function Dt(){const e=b(h.value),t=b(L.value);!e||!(t>0)||(S.value=Fe(e/t))}function Ra(){if(!T(y.value))return;const e=M(S.value),t=b(L.value),a=b(h.value);e>0&&t>0?Ke():a>0&&t>0&&Dt()}function Fe(e){const t=Math.round(e);return t>0&&Math.abs(e-t)<1e-9?String(t):e.toLocaleString("pt-BR",{minimumFractionDigits:0,maximumFractionDigits:2}).replace(/\u00a0/g,"")}function Ze(e){return!Number.isFinite(e)||e<=0?String(e??""):e.toLocaleString("pt-BR",{minimumFractionDigits:0,maximumFractionDigits:2}).replace(/\u00a0/g,"")}function Xe(){if(!ae(y.value)||T(y.value))return;const e=b(h.value),t=b(L.value);if(!e||!t)return;const a=e/t;!Number.isFinite(a)||a<=0||(S.value=Fe(a))}function Pa(e){if(!C)return;const t=(e==null?void 0:e.yieldBasis)||"none";C.value=["none","pct_cdi","fixed_aa"].includes(t)?t:"none";const a=parseFloat(e==null?void 0:e.yieldQuote);if(I&&(I.value=Number.isFinite(a)&&a>0?a.toLocaleString("pt-BR",{maximumFractionDigits:6}):""),D){let n=Math.round(parseFloat(e==null?void 0:e.yieldMonths));(!Number.isFinite(n)||n<1)&&(n=12),D.value=String(Math.min(600,n))}E&&(E.value=Be().toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})),Te()}function Aa(e){if(!(e!=null&&e.type)||!Me(e.type))return"";const t=e.yieldBasis,a=parseFloat(e.yieldQuote),n=Number.isFinite(parseInt(e.yieldMonths,10))&&parseInt(e.yieldMonths,10)>0?parseInt(e.yieldMonths,10):12;return t==="pct_cdi"&&Number.isFinite(a)&&a>0?`Taxa declarada: ${a.toLocaleString("pt-BR",{maximumFractionDigits:4})}% do CDI · horizonte: ${n} meses`:t==="fixed_aa"&&Number.isFinite(a)&&a>0?`Taxa declarada: ${a.toLocaleString("pt-BR",{maximumFractionDigits:4})}% a.a. · horizonte: ${n} meses`:""}function et(){O=null,fe.value="",y.value=st[0],h.value="",S.value="",L.value="",C&&(C.value="none"),I&&(I.value=""),D&&(D.value="12"),E&&(E.value=Be().toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})),ze.classList.add("hidden"),Ve.textContent="Salvar",U("Preencha os campos para ver o rendimento em tempo real."),De()}function Na(e){const t=parseFloat(e.amountInvested)||0,a=parseFloat(e.quantity)||0,n=At({...e,amountInvested:t,quantity:a,currentPrice:e.currentPrice}),i=parseFloat(e.currentPrice)||0;let o=n*i;T(e.type||"")&&(o=Nt(t,n,i));const s=o-t,d=t>0?s/t*100:0;return{invested:t,quantity:n,quantityStored:a,currentPrice:i,currentValue:o,profit:s,profitPct:d}}function ja(e){const t=e.filter(a=>T(a.type||"")&&Number(a.currentPrice)>0).map(a=>Number(a.currentPrice));return t.length?t.reduce((a,n)=>a+n,0)/t.length:null}function Ft(e,t){return t==null||!(t>0)||!Number.isFinite(e)?"≈ US$ —":`≈ US$ ${(e/t).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function F(){const e=b(h.value);if(!ae(y.value)){if(!e){U("Preencha o saldo para visualizar o resumo.",{tone:"muted"});return}U(`Saldo: ${g(e)}`,{tone:"muted"});return}const a=M(S.value),n=b(L.value);if(!e||!n){U("Preencha os campos para ver o rendimento em tempo real.",{tone:"muted"});return}if(!a||a<=0){U("Preencha os campos para ver o rendimento em tempo real.",{tone:"muted"});return}let i=a*n;T(y.value)&&(i=Nt(e,a,n));const o=i-e,s=e>0?o/e*100:0,d=o>=0?"profit":"loss";U(v?`Valor atual: ${$(i)} | Rendimento: ${o>=0?"+":"-"} ${$(Math.abs(o))} (${s.toFixed(2).replace(".",",")}%)`:"Valor atual: R$ •••• | Rendimento: R$ •••• (•••%)",{tone:d})}function tt(){const e=k,t=`${e.length} investimento${e.length!==1?"s":""}`;if(Ge.textContent=t,e.length===0){he.innerHTML='<p class="text-gray-500 text-sm">Nenhum investimento cadastrado.</p>',bt.textContent=g(0),yt.textContent=g(0),Z&&(Z.textContent=v?"≈ US$ —":"≈ US$ ••••"),X&&(X.textContent=v?"≈ US$ —":"≈ US$ ••••"),Ce.textContent=g(0),Ie.textContent=Ye(0),Ce.className="text-lg font-bold text-green-400",Ie.className="text-lg font-bold text-green-400";return}let a=0,n=0;he.innerHTML=e.map(x=>{const{invested:r,quantity:c,currentPrice:q,currentValue:me,profit:pe,profitPct:Va}=Na(x);a+=r,n+=me;const nt=pe>=0,Mt=ae(x.type||""),Rt=T(x.type||""),za=Mt?Rt?`${f(x.type||"Tipo não informado")} · ${v?`${Ze(c)} USD · cotação R$ ${q.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:4})}`:"••• USD · cotação R$ ••••"}`:`${f(x.type||"Tipo não informado")} · ${v?`${Ze(c)} cotas · R$ ${q.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"••• cotas · R$ ••••"}`:`${f(x.type||"Tipo não informado")}`,Oa=Mt?Rt&&v&&q>0?`Patrimônio em R$: investido ${g(r)} | atual ${g(me)} · saldo ${Ze(c)} USD`:`Investido: ${g(r)} | Atual: ${g(me)}`:`Saldo: ${g(r)}`,Pt=Aa(x);return`
        <div class="rounded-xl border border-[#2a2a2a] bg-[#222222] p-4 hover:border-[#333333] transition-colors">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between">
            <div class="min-w-0 flex-1 space-y-1">
              <p class="text-base font-semibold text-white tracking-tight">${f(x.name||"Ativo")}</p>
              <p class="text-sm text-gray-400">${za}</p>
              <p class="text-xs text-gray-500 pt-1">${Oa}</p>
              ${Pt?`<p class="text-[11px] text-emerald-500/85 pt-0.5">${f(Pt)}</p>`:""}
            </div>
            <div class="flex sm:flex-col items-center sm:items-end justify-between gap-3 sm:gap-2 shrink-0 sm:min-w-[7.5rem]">
              <div class="flex gap-1 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-1">
                <button type="button" class="inv-edit flex h-9 w-9 items-center justify-center rounded-md text-gray-400 hover:bg-[#2a2a2a] hover:text-blue-400 transition-colors" data-id="${x.id}" title="Editar"><i class="fas fa-pen text-xs"></i></button>
                <button type="button" class="inv-delete flex h-9 w-9 items-center justify-center rounded-md text-gray-400 hover:bg-[#2a2a2a] hover:text-red-400 transition-colors" data-id="${x.id}" title="Excluir"><i class="fas fa-trash text-xs"></i></button>
              </div>
              <div class="text-right tabular-nums">
                <p class="text-sm font-bold ${nt?"text-green-400":"text-red-400"}">${v?`${nt?"+":"-"} ${$(Math.abs(pe))}`:"R$ ••••"}</p>
                <p class="text-xs ${nt?"text-green-300":"text-red-300"}">${Ye(Va)}</p>
              </div>
            </div>
          </div>
        </div>
      `}).join("");const i=n-a,o=a>0?i/a*100:0,s=Ye(o),d=i>=0?"text-lg font-bold text-green-400":"text-lg font-bold text-red-400",p=ja(e);bt.textContent=g(a),yt.textContent=g(n),Z&&(Z.textContent=v?Ft(a,p):"≈ US$ ••••"),X&&(X.textContent=v?Ft(n,p):"≈ US$ ••••");const B=p!=null&&p>0?`Estimativa: total em R$ ÷ média da cotação dos ativos em Dólar (R$ ${p.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:4})} por US$).`:"Para ver o patrimônio estimado em US$, cadastre pelo menos um investimento na categoria Dólar com a cotação do dia.";Z&&(Z.title=B),X&&(X.title=B),Ce.textContent=v?`${i>=0?"+":"-"} ${$(Math.abs(i))}`:"R$ ••••",Ie.textContent=s,Ce.className=d,Ie.className=d,he.querySelectorAll(".inv-edit").forEach(x=>{x.addEventListener("click",()=>{const r=e.find(c=>c.id===x.dataset.id);if(r){if(Se("inv"),O=r.id,fe.value=r.name||"",y.value=st.includes(r.type)?r.type:"Outros",h.value=R(r.amountInvested||0),ae(r.type)){const c=At(r);S.value=c>0?Fe(c):String(r.quantity||"")}else S.value="";L.value=R(r.currentPrice||0),ze.classList.remove("hidden"),Ve.textContent="Atualizar",De(),Pa(r),T(r.type)&&Ke(),F()}})}),he.querySelectorAll(".inv-delete").forEach(x=>{x.addEventListener("click",async()=>{if(!u){m("Conecte a planilha para excluir investimentos","error");return}const r=x.dataset.id;try{await u.deleteInvestment(r),k=k.filter(c=>c.id!==r),m("Investimento excluído!","success"),et(),tt()}catch(c){console.error("Erro ao excluir investimento:",c),m("Erro ao excluir investimento na planilha","error")}})})}h.addEventListener("input",()=>{h.value=R(h.value),T(y.value)?Dt():Xe(),F()}),L.addEventListener("input",()=>{L.value=R(L.value),T(y.value)?Ma():Xe(),F()}),S.addEventListener("input",()=>{T(y.value)&&Ke(),F()}),fe.addEventListener("input",F),y.addEventListener("change",()=>{De(),T(y.value)?Ra():Xe(),F()}),C==null||C.addEventListener("change",()=>{Te(),F()}),I==null||I.addEventListener("input",F),D==null||D.addEventListener("input",F),E==null||E.addEventListener("input",F),E==null||E.addEventListener("blur",()=>{Ba();const e=M(E.value.trim());Number.isFinite(e)&&e>0&&e<=50&&(E.value=e.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})),F()}),ze.addEventListener("click",et),Ve.addEventListener("click",async()=>{if(!u){m("Planilha indisponível: investimentos sem localStorage exigem conexão com Sheets","error");return}const e=fe.value.trim(),t=y.value.trim(),a=b(h.value),n=ae(t);let i=n?M(S.value):1;const o=n?b(L.value):a;if(!e){m("Informe o nome do ativo","error");return}if(!a||a<=0){m(n?"Informe um valor investido válido":"Informe um saldo válido","error");return}if(n&&(!i||i<=0)){m(T(t)?"Informe o saldo em USD (US$)":"Informe uma quantidade válida de cotas/unidades","error");return}if(n&&(!o||o<=0)){m(T(t)?"Informe a cotação USD de hoje (R$ por US$)":"Informe um preço atual válido","error");return}if(n&&i>0&&o>0&&a>0){const r=a/o,c=Math.round(i),q=Math.abs(i-c)<1e-9,me=Math.max(2,a*.02),pe=c*o-a;(q&&Number.isFinite(r)&&r>0&&pe<0&&pe>-me&&Math.round(r)===c&&Math.abs(r-c)>1e-4||Number.isFinite(r)&&r>0&&Math.abs(i*o-a)>.015&&Math.abs(i-r)<=.03)&&(i=r)}let s="none",d=0,p=12;if(Me(t)&&C&&(s=C.value||"none",s!=="none")){if(d=M(I.value),!(d>0)){m("Informe a taxa declarada ou escolha «Sem taxa» em rentabilidade.","error");return}let r=Math.round(parseFloat(D.value));(!Number.isFinite(r)||r<1)&&(r=12),p=Math.min(600,r)}const B={id:O||void 0,name:e,type:t,amountInvested:a,quantity:i,currentPrice:o,yieldBasis:s,yieldQuote:s==="none"?0:d,yieldMonths:s==="none"?12:p},x=B.id||`inv-${Date.now()}`;try{O?(await u.updateInvestment(B),k=k.map(r=>r.id===O?{...r,...B,id:O}:r)):(await u.saveInvestment({...B,id:x}),k.push({...B,id:x})),m(O?"Investimento atualizado!":"Investimento cadastrado!","success"),et(),tt()}catch(r){console.error("Erro ao salvar investimento:",r),m("Erro ao salvar investimento na planilha","error")}}),E&&(E.value=Be().toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})),De();function kt(e,t,a={}){const{showRanking:n=!1}=a;na.textContent=e,!t||t.length===0?gt.innerHTML='<p class="text-gray-500 text-sm">Nenhum lançamento encontrado.</p>':gt.innerHTML=t.map((i,o)=>{const s=i.type==="receita",d=s?"text-green-400":"text-red-400",p=s?"+":"-",B=o+1;return`
          <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-br from-[#222222] to-[#1c1c1c] border border-[#2a2a2a] shadow-sm shadow-black/25">
            <div class="min-w-0 flex items-center gap-3">
              ${n?`
                <div class="w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 ${B===1?"bg-yellow-500/20 text-yellow-300 border-yellow-400/35":B===2?"bg-slate-400/20 text-slate-200 border-slate-300/35":B===3?"bg-amber-700/20 text-amber-300 border-amber-500/35":"bg-blue-500/15 text-blue-200 border-blue-400/30"}">
                  ${B}º
                </div>
              `:""}
              <div class="min-w-0">
                <p class="text-sm font-semibold text-white truncate">${f(i.category||"Sem categoria")}</p>
                ${n?`<p class="text-[11px] text-gray-500 uppercase tracking-wider mt-0.5">#${B} no ranking</p>`:""}
              </div>
            </div>
            <div class="text-right shrink-0">
              <p class="text-sm font-bold whitespace-nowrap ${d}">${p} ${$(Math.abs(i.value||0))}</p>
              <p class="text-xs text-gray-400">${Bt(i.date)} · ${f(i.method||"Sem método")}</p>
            </div>
          </div>
        `}).join(""),z.classList.remove("hidden"),z.classList.add("flex")}function at(){z.classList.add("hidden"),z.classList.remove("flex")}ia.addEventListener("click",at),z.addEventListener("click",e=>{e.target===z&&at()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(z.classList.contains("hidden")||at(),V.classList.contains("hidden")||Je())}),Kt.addEventListener("click",()=>{const e=Le().filter(t=>t.type==="receita").sort((t,a)=>(a.date||"").localeCompare(t.date||""));kt("Receitas cadastradas",e)}),Zt.addEventListener("click",()=>{const e=Le().filter(t=>t.type==="despesa").sort((t,a)=>(a.date||"").localeCompare(t.date||""));kt("Despesas cadastradas",e)}),Xt.addEventListener("click",Ca),ea.addEventListener("click",Je),V.addEventListener("click",e=>{e.target===V&&Je()}),J.addEventListener("input",()=>{J.value=R(J.value)}),ta.addEventListener("submit",async e=>{e.preventDefault();const t=ge.value.trim(),a=b(J.value);if(!t){m("Informe o nome do cartão.","error");return}let n=l.getCreditCardsState();if(te)n.cards=n.cards.map(o=>o.id===te?{...o,name:t,limit:a}:o);else{const o=`cc-${Date.now()}`;n.cards.push({id:o,name:t,limit:a}),n.activeId||(n.activeId=o)}n=await ve(n);const i=!!te;ue(),$e(),H(n),Q(),N(),m(i?"Cartão atualizado.":"Cartão adicionado.","success")}),Ue.addEventListener("click",()=>{ue()}),se.addEventListener("change",Q),oe.addEventListener("change",Q),ne.addEventListener("click",()=>{v=!v,localStorage.setItem("financas:show-sensitive-values",String(v)),St(),F(),N()}),re.addEventListener("click",async()=>{const e=b(Y.value);if(!e||e<=0){m("Informe um valor válido","error");return}if(!ie.value){m("Informe uma data","error");return}const t=re.querySelector(".save-text"),a=re.querySelector(".save-spinner");re.disabled=!0,t.classList.add("hidden"),a.classList.remove("hidden");try{const n={id:G||`txn-${Date.now()}`,date:ie.value,type:oe.value,category:Ae.value,method:se.value,value:e};if(n.type==="despesa"&&n.method===ke){const i=l.getCreditCardsState();n.creditCardId=le.value||i.activeId||""}if(l.saveTransaction(n),u)try{G?await u.updateTransaction(n):await u.saveTransaction(n),m(G?"Lançamento atualizado!":"Lançamento salvo!","success")}catch(i){console.warn("Falha ao enviar para planilha:",i),m("Salvo localmente (planilha indisponível)","info")}else m(G?"Lançamento atualizado!":"Lançamento salvo!","success");Tt(),N()}finally{re.disabled=!1,t.classList.remove("hidden"),a.classList.add("hidden")}}),Gt.addEventListener("click",()=>{A.classList.add("hidden"),A.classList.remove("flex"),ee=null}),A.addEventListener("click",e=>{e.target===A&&(A.classList.add("hidden"),A.classList.remove("flex"),ee=null)}),Yt.addEventListener("click",async()=>{if(!ee)return;const e=ee;if(u)try{await u.deleteTransaction(e)}catch(t){console.warn(t)}l.deleteTransaction(e),m("Lançamento excluído!","success"),A.classList.add("hidden"),A.classList.remove("flex"),ee=null,N()});async function Ua(){if(u)try{const e=await u.loadTransactions({month:String(P).padStart(2,"0"),year:String(W)});lt(e)}catch(e){console.error("Erro ao sincronizar transações:",e)}}async function qa(){if(!u){k=[],U("Planilha indisponível. Para investimentos sem localStorage, conecte o Google Sheets.",{tone:"amber"});return}try{k=await u.loadInvestments()}catch(e){console.error("Erro ao carregar investimentos da planilha:",e),k=[],m("Erro ao carregar investimentos da planilha","error")}}async function _a(){if(!u){k=[],U("Planilha indisponível. Para investimentos sem localStorage, conecte o Google Sheets.",{tone:"amber"});return}try{const e=await u.loadFinancasBootstrap({month:String(P).padStart(2,"0"),year:String(W)});await dt(e.creditCards),lt(e.transactions),k=Array.isArray(e.investments)?e.investments:[]}catch(e){console.warn("Carregamento unificado indisponível — usando 3 requisições em paralelo. Publique o Apps Script com readFinancasBootstrap.",e),await Promise.all([zt(),Ua(),qa()])}}function N(){ga();const e=Le(),t=fa(e);ba(t),Ia(t),wa(e),La(e),tt()}await _a(),St(),H(l.getCreditCardsState()),Q(),N()});
