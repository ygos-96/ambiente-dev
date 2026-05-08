import"./index-DPlvyXvB.js";import{S as qa}from"./Sidebar-38HLq7tH.js";import{P as Va}from"./PersonalDataService-CClDzJ6y.js";import{G as _a}from"./GoogleAppsScriptService-Du0S4SrP.js";import{i as te,e as Mt,d as Rt}from"./investmentQtyHelpers-BFbFxCZp.js";const za="/ambiente-dev/",nt=["Alimentação","Transporte","Moradia","Assinaturas","Lazer","Saúde","Educação","Roupas","Contas pessoais","Cartão de crédito","Freelance","Salário","Bônus","Investimento","Outros"],it=["Cartão de crédito","Cartão de débito","Pix","Dinheiro","Boleto","Transferência"],ke="Cartão de crédito",ot=["Caixinhas","Reserva de emergência","Reserva de vida","Ações","FIIs","ETFs","BDRs","Tesouro Direto","CDB","LCI/LCA","Fundos","Criptomoedas","Dólar","Previdência","Outros"],Oa="Dólar";function T(xe){return xe===Oa}const Ha=new Set(["Tesouro Direto","CDB","LCI/LCA","Caixinhas","Reserva de emergência","Reserva de vida","Fundos","Previdência"]),Pt=10.75,Nt="financas:assumed-cdi-nominal-aa";function Fe(xe){return Ha.has(xe)}const st=[{pct:55,label:"Reserva e segurança",instrument:"CDB",describe:"Prioridade é liquidez e segurança do principal — caixa para emergências e objetivos de curto prazo."},{pct:20,label:"Proteção contra inflação",instrument:"Dólar",describe:"Exposição em moeda forte pode ajudar a diversificar riscos cambiais — avalie objetivo e prazo antes de posicionar."},{pct:25,label:"Crescimento de longo prazo",instrument:"Tesouro Direto 2029",describe:"Títulos públicos prefixados ou indexados com vencimento alinhado ao horizonte; IR decresce com o tempo até o resgate."}],At="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a]/90 px-3 py-2.5 text-sm leading-relaxed",Qa=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];document.addEventListener("DOMContentLoaded",async()=>{if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${za}index.html`;return}const jt=sessionStorage.getItem("username")||"Usuário",Me=new qa(jt,"financas"),l=new Va;await l.initialize();const Ut="https://script.google.com/macros/s/AKfycbxn4DLzXz1k7mb1baejzbRvevbPS2Vti81uVly-pcntUWvZBFa6x57hRNwSLCckFMRSaw/exec";let E=null;try{E=new _a({scriptUrl:Ut}),await E.initialize()}catch(e){console.warn("Planilha (Finanças) não disponível:",e)}const Re=new Date;let P=Re.getMonth()+1,ae=Re.getFullYear(),W=null,N=[];const qt=document.getElementById("app");qt.innerHTML=`
    ${Me.render()}
    <div class="main-content">
      ${Me.renderTopBar("Finanças","Controle seus gastos e receitas")}
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
                  ${nt.map(e=>`<option value="${e}">${e}</option>`).join("")}
                </select>
                <select id="txn-method" class="px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500">
                  ${it.map(e=>`<option value="${e}">${e}</option>`).join("")}
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
                        ${ot.map(e=>`<option value="${e}">${e}</option>`).join("")}
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

                <div id="inv-live-preview" class="${At} text-sm leading-relaxed text-gray-400">
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
  `,Me.init();const Vt=document.getElementById("month-label"),_t=document.getElementById("prev-month"),zt=document.getElementById("next-month"),ne=document.getElementById("toggle-sensitive-values"),ie=document.getElementById("txn-date"),oe=document.getElementById("txn-type"),Pe=document.getElementById("txn-category"),se=document.getElementById("txn-method"),G=document.getElementById("txn-value"),re=document.getElementById("txn-save"),Ne=document.getElementById("txn-cancel"),de=document.getElementById("txn-list"),rt=document.getElementById("form-title"),R=document.getElementById("delete-modal"),Ot=document.getElementById("delete-cancel"),Ht=document.getElementById("delete-confirm"),Qt=document.getElementById("toast-container"),Wt=document.getElementById("summary-income-card"),Gt=document.getElementById("summary-expense-card"),Yt=document.getElementById("credit-card-summary-card"),dt=document.getElementById("cc-widget-name"),Ae=document.getElementById("cc-widget-usage"),q=document.getElementById("cc-widget-bar"),V=document.getElementById("credit-cards-modal"),Jt=document.getElementById("credit-cards-modal-close"),Kt=document.getElementById("cc-add-form"),lt=document.getElementById("cc-form-title"),ve=document.getElementById("cc-new-name"),Y=document.getElementById("cc-new-limit"),ct=document.getElementById("cc-submit-btn"),je=document.getElementById("cc-cancel-edit"),j=document.getElementById("cc-list"),ut=document.getElementById("cc-list-empty"),Xt=document.getElementById("txn-credit-card-wrap"),le=document.getElementById("txn-credit-card"),mt=document.getElementById("txn-credit-card-hint"),_=document.getElementById("summary-modal"),Zt=document.getElementById("summary-modal-title"),pt=document.getElementById("summary-modal-list"),ea=document.getElementById("summary-modal-close"),ge=document.getElementById("inv-name"),b=document.getElementById("inv-type"),y=document.getElementById("inv-invested"),J=document.getElementById("inv-invested-wrap"),Ue=document.getElementById("inv-invested-label"),qe=document.getElementById("inv-values-heading"),S=document.getElementById("inv-quantity"),ta=document.getElementById("inv-quantity-wrap"),L=document.getElementById("inv-current-price"),aa=document.getElementById("inv-current-price-wrap"),fe=document.getElementById("inv-quantity-label"),be=document.getElementById("inv-current-price-label"),Ve=document.getElementById("inv-save"),_e=document.getElementById("inv-cancel"),ye=document.getElementById("inv-list"),na=document.getElementById("inv-live-preview"),xt=document.getElementById("inv-live-main"),h=document.getElementById("inv-live-yield"),ze=document.getElementById("inv-yield-wrap"),w=document.getElementById("inv-yield-basis"),C=document.getElementById("inv-yield-quote"),he=document.getElementById("inv-yield-quote-label"),Oe=document.getElementById("inv-assumed-cdi-row"),I=document.getElementById("inv-assumed-cdi-aa"),D=document.getElementById("inv-yield-months"),vt=document.getElementById("inv-total-invested"),K=document.getElementById("inv-total-invested-usd"),gt=document.getElementById("inv-total-current"),X=document.getElementById("inv-total-current-usd"),we=document.getElementById("inv-total-profit"),Ce=document.getElementById("inv-total-profit-pct"),Ie=document.getElementById("inv-tab-txn"),He=document.getElementById("inv-tab-inv"),ia=document.getElementById("inv-panel-txn"),oa=document.getElementById("inv-panel-inv"),sa=document.getElementById("inv-summary-section"),ft=document.getElementById("ledger-list-icon"),bt=document.getElementById("ledger-list-title"),Qe=document.getElementById("txn-count"),We=document.getElementById("inv-count"),ra=document.getElementById("inv-list-shell"),ce=document.getElementById("inv-alloc-total"),da=document.getElementById("inv-alloc-calc"),yt=document.getElementById("inv-alloc-results-wrap"),la=document.getElementById("inv-alloc-results"),ca=document.getElementById("inv-alloc-sum-check"),ht="inv-form-tab px-4 py-2.5 text-sm font-medium rounded-t-lg border border-transparent border-b-0 -mb-px transition-colors text-white bg-[#222222] border-[#2a2a2a] border-b-[#222222] z-10",wt="inv-form-tab px-4 py-2.5 text-sm font-medium rounded-t-lg border border-transparent border-b-0 -mb-px transition-colors text-gray-400 hover:text-white border-b-[#2a2a2a]";function Ee(e){const t=e==="txn";Ie.setAttribute("aria-selected",String(t)),He.setAttribute("aria-selected",String(!t)),Ie.className=t?ht:wt,He.className=t?wt:ht,ia.toggleAttribute("hidden",!t),oa.toggleAttribute("hidden",t),sa.toggleAttribute("hidden",t),de.toggleAttribute("hidden",!t),ra.toggleAttribute("hidden",t),t?(ft.className="fas fa-list text-blue-400 shrink-0",bt.textContent="Lançamentos",Qe.toggleAttribute("hidden",!1),We.toggleAttribute("hidden",!0)):(ft.className="fas fa-chart-line text-emerald-400 shrink-0",bt.textContent="Investimentos",Qe.toggleAttribute("hidden",!0),We.toggleAttribute("hidden",!1))}Ie.addEventListener("click",()=>Ee("txn")),He.addEventListener("click",()=>Ee("inv"));let Z=null,z=null,ee=null,x=localStorage.getItem("financas:show-sensitive-values")!=="false";ie.value=Re.toISOString().split("T")[0];function u(e,t="success"){const a=document.createElement("div"),n={success:{bg:"bg-green-600",border:"border-green-500",icon:"fa-check-circle"},error:{bg:"bg-red-700",border:"border-red-500",icon:"fa-exclamation-triangle"},info:{bg:"bg-blue-600",border:"border-blue-500",icon:"fa-info-circle"}}[t]||{bg:"bg-blue-600",border:"border-blue-500",icon:"fa-info-circle"};a.className=`${n.bg} border-2 ${n.border} text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-slide-in-right font-medium z-[200] min-w-[300px] max-w-md`,a.innerHTML=`<i class="fas ${n.icon} text-lg"></i><span class="flex-1">${g(e)}</span>`,Qt.appendChild(a),setTimeout(()=>{a.classList.add("animate-slide-out-right"),setTimeout(()=>a.remove(),300)},t==="error"?5e3:3e3)}function g(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}function $(e){return parseFloat(e||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}function v(e){return x?$(e):"R$ ••••"}function Ge(e){return x?`${e.toFixed(2).replace(".",",")}%`:"•••%"}function Ct(){const e=ne.querySelector("i"),t=ne.querySelector("span");if(x){e.className="fas fa-eye-slash text-xs",t.textContent="Ocultar valores",ne.setAttribute("aria-label","Ocultar valores");return}e.className="fas fa-eye text-xs",t.textContent="Mostrar valores",ne.setAttribute("aria-label","Mostrar valores")}function f(e){if(e==null)return 0;const t=String(e).replace(/\D/g,"");return t?Number(t)/100:0}function F(e){if(e==null)return 0;const t=String(e).replace(/\s/g,"").replace(",","."),a=parseFloat(t);return Number.isFinite(a)?a:0}function M(e){return typeof e=="number"&&Number.isFinite(e)?e.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}):f(e).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function ua(e){const t=st.length,a=[];let n=0;for(let i=0;i<t-1;i++){const o=Math.floor(e*st[i].pct/100);a.push(o),n+=o}return a.push(e-n),a}function It(){const e=f(ce.value),t=Math.round(e*100);if(!t||t<=0){u("Informe um valor maior que zero.","error"),yt.classList.add("hidden");return}const a=ua(t);la.innerHTML=st.map((i,o)=>{const s=a[o]/100;return`
        <div class="rounded-lg border border-[#2a2a2a] bg-[#141414] px-3 py-3 min-w-0 flex flex-col gap-2">
          <p class="text-[10px] text-gray-500 uppercase tracking-wider">${i.pct}%</p>
          <p class="text-sm font-medium text-white leading-snug">${g(i.label)}</p>
          <p class="text-xs font-semibold text-emerald-400/90 tabular-nums">${g(i.instrument)}</p>
          <p class="text-xs text-gray-500 leading-relaxed">${g(i.describe)}</p>
          <p class="text-base font-bold text-emerald-400 tabular-nums mt-auto pt-1 border-t border-[#2a2a2a]">${$(s)}</p>
        </div>`}).join("");const n=a.reduce((i,o)=>i+o,0)/100;ca.textContent=`Total alocado: ${$(n)}.`,yt.classList.remove("hidden")}ce.addEventListener("input",()=>{ce.value=M(ce.value)}),da.addEventListener("click",It),ce.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),It())});function ma(){Vt.textContent=`${Qa[P-1]} ${ae}`}_t.addEventListener("click",()=>{P--,P<1&&(P=12,ae--),A()}),zt.addEventListener("click",()=>{P++,P>12&&(P=1,ae++),A()});function Se(){return l.getTransactionsByMonth(ae,P)}function pa(e){let t=0,a=0;const n={};e.forEach(o=>{const s=Math.abs(parseFloat(o.value)||0);if(o.type==="receita"){t+=s;return}(o.method||"")===ke||(a+=s);const m=o.category||"Outros";n[m]=(n[m]||0)+s});const i=Object.entries(n).sort((o,s)=>s[1]-o[1]);return{income:t,expense:a,balance:t-a,byCategory:i}}function xa(e){document.getElementById("total-income").textContent=v(e.income),document.getElementById("total-expense").textContent=v(e.expense);const t=document.getElementById("total-balance");t.textContent=v(e.balance),t.className=`text-xl md:text-2xl font-bold ${e.balance>=0?"text-green-400":"text-red-400"}`}function va(e){return new Set(e.cards.map(t=>t.id))}function ga(e,t,a){const n=e.creditCardId;return n&&a.has(String(n))?String(n):t}function Et(e,t,a,n){const i=va(n);return a.reduce((o,s)=>s.type!=="despesa"||(s.method||"")!==ke?o:ga(s,t,i)===e?o+Math.abs(parseFloat(s.value)||0):o,0)}function fa(e){const t=l.getCreditCardsState(),a=t.activeId,n=t.cards.find(d=>d.id===a);if(!n){dt.textContent=t.cards.length?"Escolha um cartão ativo":"Cadastrar cartão",Ae.textContent=t.cards.length?"Abra o modal e toque em Ativar":"Toque para adicionar",q.style.width="0%",q.className="h-full bg-sky-500 rounded-full transition-all duration-300";return}const i=Et(n.id,a,e,t),o=Math.max(0,parseFloat(n.limit)||0);if(dt.textContent=n.name,!x){Ae.textContent="Valores ocultos",q.style.width="0%",q.className="h-full bg-gray-600 rounded-full transition-all duration-300";return}Ae.textContent=o>0?`${$(i)} / ${$(o)} · ${$(Math.max(0,o-i))} disponível`:`${$(i)} no crédito neste mês`;let s=0;o>0?(s=Math.min(100,Math.round(i/o*100)),q.className=i>o?"h-full bg-red-500 rounded-full transition-all duration-300":"h-full bg-sky-500 rounded-full transition-all duration-300"):(q.className="h-full bg-amber-500/80 rounded-full transition-all duration-300",s=i>0?100:0),q.style.width=`${s}%`}function O(e,t=null){var o;const a=e.cards;le.innerHTML=a.map(s=>`<option value="${g(s.id)}">${g(s.name)}</option>`).join("");const n=e.activeId||((o=a[0])==null?void 0:o.id)||"",i=t&&a.some(s=>s.id===t)?t:n;le.value=i||""}function H(){const e=oe.value==="despesa",t=se.value===ke,a=e&&t;if(Xt.classList.toggle("hidden",!a),!a)return;const n=l.getCreditCardsState();O(n),n.cards.length===0?(mt.classList.remove("hidden"),le.disabled=!0):(mt.classList.add("hidden"),le.disabled=!1)}function Le(){const e=l.getCreditCardsState(),t=Se();if(e.cards.length===0){j.innerHTML="",ut.classList.remove("hidden");return}ut.classList.add("hidden"),j.innerHTML=e.cards.map(n=>{const i=Et(n.id,e.activeId,t,e),o=Math.max(0,parseFloat(n.limit)||0),s=n.id===e.activeId,d=o>0?`${v(i)} / ${v(o)}`:`${v(i)} neste mês (sem limite cadastrado)`,m=g(n.id);return`
        <div class="rounded-xl border ${s?"border-emerald-600/60 bg-emerald-950/20":"border-[#2a2a2a] bg-[#141414]"} p-3 flex flex-col gap-2">
          <div class="flex justify-between gap-2 items-start">
            <div class="min-w-0">
              <p class="font-medium text-white truncate">${g(n.name)}</p>
              <p class="text-xs text-gray-500 tabular-nums mt-0.5">${d}</p>
            </div>
            <div class="relative shrink-0">
              <button type="button" class="cc-menu-toggle h-8 w-8 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] text-gray-300 hover:text-white hover:bg-[#222222] transition-colors" data-id="${m}" title="Ações do cartão">
                <i class="fas fa-ellipsis-v text-xs"></i>
              </button>
              <div class="cc-menu-dropdown hidden absolute right-0 top-9 z-20 min-w-[9.5rem] rounded-lg border border-[#2a2a2a] bg-[#111111] p-1.5 shadow-xl" data-id="${m}">
                ${s?'<p class="px-2.5 py-1.5 text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">Ativo</p>':`<button type="button" class="cc-action-activate w-full text-left px-2.5 py-1.5 text-sm rounded-md text-gray-200 hover:bg-[#222222]" data-id="${m}">Ativar</button>`}
                <button type="button" class="cc-action-edit w-full text-left px-2.5 py-1.5 text-sm rounded-md text-sky-300 hover:bg-[#222222]" data-id="${m}">Editar</button>
                <button type="button" class="cc-action-delete w-full text-left px-2.5 py-1.5 text-sm rounded-md text-red-300 hover:bg-[#222222]" data-id="${m}">Excluir</button>
              </div>
            </div>
          </div>
        </div>`}).join("");const a=()=>{j.querySelectorAll(".cc-menu-dropdown").forEach(n=>{n.classList.add("hidden")})};j.querySelectorAll(".cc-menu-toggle").forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation();const o=n.dataset.id,s=j.querySelector(`.cc-menu-dropdown[data-id="${o}"]`);if(!s)return;const d=s.classList.contains("hidden");a(),d&&s.classList.remove("hidden")})}),j.querySelectorAll(".cc-action-activate").forEach(n=>{n.addEventListener("click",()=>{a();const i=n.dataset.id,o=l.getCreditCardsState();o.activeId=i,l.saveCreditCardsState(o),Le(),O(l.getCreditCardsState()),A()})}),j.querySelectorAll(".cc-action-delete").forEach(n=>{n.addEventListener("click",()=>{var s;a();const i=n.dataset.id,o=l.getCreditCardsState();o.cards=o.cards.filter(d=>d.id!==i),ee===i&&ue(),o.activeId===i&&(o.activeId=((s=o.cards[0])==null?void 0:s.id)??null),l.saveCreditCardsState(o),Le(),O(l.getCreditCardsState()),H(),A()})}),j.querySelectorAll(".cc-action-edit").forEach(n=>{n.addEventListener("click",()=>{a();const i=n.dataset.id,s=l.getCreditCardsState().cards.find(d=>d.id===i);s&&(ee=i,ve.value=s.name||"",Y.value=M(s.limit||0),lt.textContent="Editar cartão",ct.textContent="Salvar alterações",je.classList.remove("hidden"),ve.focus())})})}function ue(){ee=null,ve.value="",Y.value="",lt.textContent="Novo cartão",ct.textContent="Adicionar cartão",je.classList.add("hidden")}function ba(){Le(),ue(),V.classList.remove("hidden"),V.classList.add("flex")}function Ye(){ue(),V.classList.add("hidden"),V.classList.remove("flex")}function ya(e){const t=document.getElementById("category-bars");if(e.byCategory.length===0){t.innerHTML='<p class="text-gray-500 text-sm">Sem despesas neste mês.</p>';return}const a=e.byCategory[0][1];t.innerHTML=e.byCategory.map(([n,i])=>{const o=a>0?Math.round(i/a*100):0,s=ha(n);return`
        <div>
          <div class="flex justify-between text-sm mb-1">
            <span class="text-gray-300">${g(n)}</span>
            <span class="text-gray-400">${v(i)}</span>
          </div>
          <div class="w-full bg-[#222222] rounded-full h-2.5">
            <div class="h-2.5 rounded-full ${s}" style="width:${o}%"></div>
          </div>
        </div>
      `}).join("")}function ha(e){return{Alimentação:"bg-orange-500",Transporte:"bg-blue-500",Moradia:"bg-purple-500",Assinaturas:"bg-pink-500",Lazer:"bg-cyan-500",Saúde:"bg-red-500",Educação:"bg-indigo-500",Roupas:"bg-yellow-500","Contas pessoais":"bg-fuchsia-500","Cartão de crédito":"bg-sky-500",Bônus:"bg-lime-500",Investimento:"bg-emerald-500"}[e]||"bg-gray-500"}function wa(e){return{"Cartão de crédito":"fa-credit-card","Cartão de débito":"fa-credit-card",Pix:"fa-bolt",Dinheiro:"fa-money-bill-wave",Boleto:"fa-barcode",Transferência:"fa-exchange-alt"}[e]||"fa-receipt"}function Ca(e){const t=[...e].sort((a,n)=>(n.date||"").localeCompare(a.date||""));if(Qe.textContent=`${t.length} lançamento${t.length!==1?"s":""}`,t.length===0){de.innerHTML='<p class="text-gray-500 text-sm p-4">Nenhum lançamento neste mês.</p>';return}de.innerHTML=t.map(a=>{const n=a.type==="receita",i=n?"text-green-400":"text-red-400",o=n?"+":"-",s=wa(a.method);return`
        <div class="flex items-center gap-3 p-3 md:p-4 hover:bg-[#222222] transition-colors group" data-id="${a.id}">
          <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${n?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}">
            <i class="fas ${n?"fa-arrow-down":"fa-arrow-up"} text-sm"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <span class="text-white font-medium text-sm truncate">${g(a.category||"Sem categoria")}</span>
              <span class="text-xs text-gray-500 flex items-center gap-1"><i class="fas ${s} text-[10px]"></i>${g(a.method||"")}</span>
            </div>
            <span class="text-xs text-gray-500">${St(a.date)}</span>
          </div>
          <span class="${i} font-semibold text-sm whitespace-nowrap">${o} ${$(Math.abs(a.value))}</span>
          <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button type="button" class="txn-edit p-1.5 text-gray-400 hover:text-blue-400 transition-colors" data-id="${a.id}" title="Editar"><i class="fas fa-pen text-xs"></i></button>
            <button type="button" class="txn-delete p-1.5 text-gray-400 hover:text-red-400 transition-colors" data-id="${a.id}" title="Excluir"><i class="fas fa-trash text-xs"></i></button>
          </div>
        </div>
      `}).join(""),de.querySelectorAll(".txn-edit").forEach(a=>{a.addEventListener("click",n=>{n.stopPropagation(),Ia(a.dataset.id)})}),de.querySelectorAll(".txn-delete").forEach(a=>{a.addEventListener("click",n=>{n.stopPropagation(),Z=a.dataset.id,R.classList.remove("hidden"),R.classList.add("flex")})})}function St(e){if(!e)return"";const t=e.split("-");return t.length===3?`${t[2]}/${t[1]}/${t[0]}`:e}function Ia(e){const a=l.getTransactions().find(o=>o.id===e);if(!a)return;W=e,ie.value=a.date||"",oe.value=a.type||"despesa",Pe.value=a.category||nt[0],se.value=a.method||it[0],G.value=M(a.value||""),rt.textContent="Editar lançamento",Ne.classList.remove("hidden");const n=l.getCreditCardsState(),i=a.creditCardId&&n.cards.some(o=>o.id===a.creditCardId)?a.creditCardId:n.activeId;O(n,i||null),H(),Ee("txn"),Ie.scrollIntoView({behavior:"smooth",block:"center"})}function Lt(){W=null,ie.value=new Date().toISOString().split("T")[0],oe.value="despesa",Pe.value=nt[0],se.value=it[0],G.value="",rt.textContent="Lançamento",Ne.classList.add("hidden");const e=l.getCreditCardsState();O(e),H()}Ne.addEventListener("click",Lt),G.addEventListener("input",()=>{G.value=M(G.value)});function $e(){const e=localStorage.getItem(Nt);if(e==null||e==="")return Pt;const t=F(String(e).trim());return!Number.isFinite(t)||t<=0||t>50?Pt:t}function Ea(){if(!I)return;const e=F(I.value.trim());!Number.isFinite(e)||e<=0||e>50||localStorage.setItem(Nt,e.toFixed(2).replace(".",","))}function Sa(){return f(y.value)}function Be(){const e=(w==null?void 0:w.value)??"none",t=e!=="none";C&&(C.disabled=!t),D&&(D.disabled=!t),Oe==null||Oe.classList.toggle("hidden",e!=="pct_cdi"),he&&(e==="pct_cdi"?(he.textContent="% do CDI (ex.: 110 = 110% do CDI)",C&&(C.placeholder="Ex.: 100 ou 110")):e==="fixed_aa"?(he.textContent="Taxa nominal anual declarada (% a.a.)",C&&(C.placeholder="Ex.: 13,65")):he.textContent="Taxa declarada (%)")}function La(){const e=Fe(b.value);ze==null||ze.classList.toggle("hidden",!e),!e&&w&&(w.value="none",C&&(C.value=""),D&&(D.value="12")),Be()}function Q(e,t={}){const{tone:a="muted"}=t,n=a==="profit"?"font-medium text-green-400":a==="loss"?"font-medium text-red-400":a==="amber"?"text-amber-400":"text-gray-400";na.className=`${At}`,xt.className=`leading-relaxed ${n}`,xt.textContent=e,Ba()}function $a(e,t,a){if(!e||e<=0||!Number.isFinite(t)||a<=0)return null;const n=Math.max(1e-4,a/12),i=Math.pow(1+t/100,n),o=e*i;return{fv:o,gain:o-e,factor:i}}function Ba(){if(!h)return;if(!Fe(b.value)||w&&w.value==="none"){h.classList.add("hidden"),h.textContent="";return}const e=w.value,t=F(C.value);let a=Math.round(parseFloat(String(D.value)));(!Number.isFinite(a)||a<1)&&(a=12),a=Math.min(600,a);let n=NaN,i="";if(e==="pct_cdi"){if(!(t>0)){h.classList.add("hidden"),h.textContent="";return}const c=F(I.value.trim()),U=Number.isFinite(c)&&c>0?c:$e();n=U*(t/100),i=`${t.toLocaleString("pt-BR",{maximumFractionDigits:4})}% do CDI (CDI nominal ~${U.toFixed(2).replace(".",",")}% a.a.)`}else if(e==="fixed_aa"){if(!(t>0)){h.classList.add("hidden"),h.textContent="";return}n=t,i=`Prefixado nominal ~${t.toLocaleString("pt-BR",{minimumFractionDigits:0,maximumFractionDigits:4})}% a.a.`}else{h.classList.add("hidden"),h.textContent="";return}const o=Sa();if(!o||o<=0){h.classList.remove("hidden"),h.className="mt-2 pt-2 border-t border-[#2a2a2a]/80 text-[12px] text-amber-400/95 leading-snug";const c=e==="fixed_aa"?"Prefixado nominal: modelo VF ≈ VP·(1+i)^t; não inclui IR, PU ou marcação a mercado.":"IR e cenário de CDI real não entram aqui.";h.textContent=`Defina um saldo/valor aplicado para ver a estimativa (${i}, ${a} meses). ${c}`;return}const s=$a(o,n,a);if(!s){h.classList.add("hidden"),h.textContent="";return}h.classList.remove("hidden"),h.className="mt-2 pt-2 border-t border-[#2a2a2a]/80 text-[12px] text-emerald-400/95 leading-snug";const d=x?$(s.gain):"R$ ••••",m=x?$(s.fv):"R$ ••••",r=e==="fixed_aa"?"VF ≈ VP·(1+i)^t nominal (anos = meses÷12). Não modela IR regressivo nem marcação a mercado; no Tesouro o PU pode variar até o vencimento — só orientação rápida.":"Não inclui IR regressivo nem IOF; “% do CDI” usa apenas um CDI nominal assumido na tela.";h.textContent=`Projeção nominal ~${a} m: +${d} (principal ${v(o)} → ${m}). ${i}. ${r}`}function Te(){const e=te(b.value),t=T(b.value);ta.toggleAttribute("hidden",!e),aa.toggleAttribute("hidden",!e),e?t?(Ue.textContent="Valor investido (R$) — USD × cotação",y.placeholder="Calculado ou edite para ajustar USD",qe.textContent="Dólar (USD → R$)",fe&&(fe.textContent="Saldo em USD (US$)"),be&&(be.textContent="Cotação USD hoje (R$ por US$)"),S.placeholder="Ex.: 100",L.placeholder="Ex.: 5,45",J.classList.remove("lg:col-span-12"),J.classList.add("lg:col-span-4")):(Ue.textContent="Valor investido (R$)",y.placeholder="0,00",qe.textContent="Valores da posição",fe&&(fe.textContent="Cotas ou unidades"),be&&(be.textContent="Preço atual (R$)"),S.placeholder="Ex.: 10,5",L.placeholder="0,00",J.classList.remove("lg:col-span-12"),J.classList.add("lg:col-span-4")):(S.value="",L.value="",Ue.textContent="Saldo (R$)",y.placeholder="0,00",qe.textContent="Saldo",J.classList.remove("lg:col-span-4"),J.classList.add("lg:col-span-12")),La(),Be()}function Ta(){const e=F(S.value),t=f(L.value),a=f(y.value);!(t>0)||!Number.isFinite(t)||(e>0?y.value=M(e*t):a>0&&(S.value=De(a/t)))}function Je(){const e=F(S.value),t=f(L.value);!(e>0)||!(t>0)||(y.value=M(e*t))}function $t(){const e=f(y.value),t=f(L.value);!e||!(t>0)||(S.value=De(e/t))}function Da(){if(!T(b.value))return;const e=F(S.value),t=f(L.value),a=f(y.value);e>0&&t>0?Je():a>0&&t>0&&$t()}function De(e){const t=Math.round(e);return t>0&&Math.abs(e-t)<1e-9?String(t):e.toLocaleString("pt-BR",{minimumFractionDigits:0,maximumFractionDigits:2}).replace(/\u00a0/g,"")}function Ke(e){return!Number.isFinite(e)||e<=0?String(e??""):e.toLocaleString("pt-BR",{minimumFractionDigits:0,maximumFractionDigits:2}).replace(/\u00a0/g,"")}function Xe(){if(!te(b.value)||T(b.value))return;const e=f(y.value),t=f(L.value);if(!e||!t)return;const a=e/t;!Number.isFinite(a)||a<=0||(S.value=De(a))}function ka(e){if(!w)return;const t=(e==null?void 0:e.yieldBasis)||"none";w.value=["none","pct_cdi","fixed_aa"].includes(t)?t:"none";const a=parseFloat(e==null?void 0:e.yieldQuote);if(C&&(C.value=Number.isFinite(a)&&a>0?a.toLocaleString("pt-BR",{maximumFractionDigits:6}):""),D){let n=Math.round(parseFloat(e==null?void 0:e.yieldMonths));(!Number.isFinite(n)||n<1)&&(n=12),D.value=String(Math.min(600,n))}I&&(I.value=$e().toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})),Be()}function Fa(e){if(!(e!=null&&e.type)||!Fe(e.type))return"";const t=e.yieldBasis,a=parseFloat(e.yieldQuote),n=Number.isFinite(parseInt(e.yieldMonths,10))&&parseInt(e.yieldMonths,10)>0?parseInt(e.yieldMonths,10):12;return t==="pct_cdi"&&Number.isFinite(a)&&a>0?`Taxa declarada: ${a.toLocaleString("pt-BR",{maximumFractionDigits:4})}% do CDI · horizonte: ${n} meses`:t==="fixed_aa"&&Number.isFinite(a)&&a>0?`Taxa declarada: ${a.toLocaleString("pt-BR",{maximumFractionDigits:4})}% a.a. · horizonte: ${n} meses`:""}function Ze(){z=null,ge.value="",b.value=ot[0],y.value="",S.value="",L.value="",w&&(w.value="none"),C&&(C.value=""),D&&(D.value="12"),I&&(I.value=$e().toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})),_e.classList.add("hidden"),Ve.textContent="Salvar",Q("Preencha os campos para ver o rendimento em tempo real."),Te()}function Ma(e){const t=parseFloat(e.amountInvested)||0,a=parseFloat(e.quantity)||0,n=Mt({...e,amountInvested:t,quantity:a,currentPrice:e.currentPrice}),i=parseFloat(e.currentPrice)||0;let o=n*i;T(e.type||"")&&(o=Rt(t,n,i));const s=o-t,d=t>0?s/t*100:0;return{invested:t,quantity:n,quantityStored:a,currentPrice:i,currentValue:o,profit:s,profitPct:d}}function Ra(e){const t=e.filter(a=>T(a.type||"")&&Number(a.currentPrice)>0).map(a=>Number(a.currentPrice));return t.length?t.reduce((a,n)=>a+n,0)/t.length:null}function Bt(e,t){return t==null||!(t>0)||!Number.isFinite(e)?"≈ US$ —":`≈ US$ ${(e/t).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function k(){const e=f(y.value);if(!te(b.value)){if(!e){Q("Preencha o saldo para visualizar o resumo.",{tone:"muted"});return}Q(`Saldo: ${v(e)}`,{tone:"muted"});return}const a=F(S.value),n=f(L.value);if(!e||!n){Q("Preencha os campos para ver o rendimento em tempo real.",{tone:"muted"});return}if(!a||a<=0){Q("Preencha os campos para ver o rendimento em tempo real.",{tone:"muted"});return}let i=a*n;T(b.value)&&(i=Rt(e,a,n));const o=i-e,s=e>0?o/e*100:0,d=o>=0?"profit":"loss";Q(x?`Valor atual: ${$(i)} | Rendimento: ${o>=0?"+":"-"} ${$(Math.abs(o))} (${s.toFixed(2).replace(".",",")}%)`:"Valor atual: R$ •••• | Rendimento: R$ •••• (•••%)",{tone:d})}function et(){const e=N,t=`${e.length} investimento${e.length!==1?"s":""}`;if(We.textContent=t,e.length===0){ye.innerHTML='<p class="text-gray-500 text-sm">Nenhum investimento cadastrado.</p>',vt.textContent=v(0),gt.textContent=v(0),K&&(K.textContent=x?"≈ US$ —":"≈ US$ ••••"),X&&(X.textContent=x?"≈ US$ —":"≈ US$ ••••"),we.textContent=v(0),Ce.textContent=Ge(0),we.className="text-lg font-bold text-green-400",Ce.className="text-lg font-bold text-green-400";return}let a=0,n=0;ye.innerHTML=e.map(p=>{const{invested:r,quantity:c,currentPrice:U,currentValue:me,profit:pe,profitPct:Aa}=Ma(p);a+=r,n+=me;const at=pe>=0,Dt=te(p.type||""),kt=T(p.type||""),ja=Dt?kt?`${g(p.type||"Tipo não informado")} · ${x?`${Ke(c)} USD · cotação R$ ${U.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:4})}`:"••• USD · cotação R$ ••••"}`:`${g(p.type||"Tipo não informado")} · ${x?`${Ke(c)} cotas · R$ ${U.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"••• cotas · R$ ••••"}`:`${g(p.type||"Tipo não informado")}`,Ua=Dt?kt&&x&&U>0?`Patrimônio em R$: investido ${v(r)} | atual ${v(me)} · saldo ${Ke(c)} USD`:`Investido: ${v(r)} | Atual: ${v(me)}`:`Saldo: ${v(r)}`,Ft=Fa(p);return`
        <div class="rounded-xl border border-[#2a2a2a] bg-[#222222] p-4 hover:border-[#333333] transition-colors">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between">
            <div class="min-w-0 flex-1 space-y-1">
              <p class="text-base font-semibold text-white tracking-tight">${g(p.name||"Ativo")}</p>
              <p class="text-sm text-gray-400">${ja}</p>
              <p class="text-xs text-gray-500 pt-1">${Ua}</p>
              ${Ft?`<p class="text-[11px] text-emerald-500/85 pt-0.5">${g(Ft)}</p>`:""}
            </div>
            <div class="flex sm:flex-col items-center sm:items-end justify-between gap-3 sm:gap-2 shrink-0 sm:min-w-[7.5rem]">
              <div class="flex gap-1 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-1">
                <button type="button" class="inv-edit flex h-9 w-9 items-center justify-center rounded-md text-gray-400 hover:bg-[#2a2a2a] hover:text-blue-400 transition-colors" data-id="${p.id}" title="Editar"><i class="fas fa-pen text-xs"></i></button>
                <button type="button" class="inv-delete flex h-9 w-9 items-center justify-center rounded-md text-gray-400 hover:bg-[#2a2a2a] hover:text-red-400 transition-colors" data-id="${p.id}" title="Excluir"><i class="fas fa-trash text-xs"></i></button>
              </div>
              <div class="text-right tabular-nums">
                <p class="text-sm font-bold ${at?"text-green-400":"text-red-400"}">${x?`${at?"+":"-"} ${$(Math.abs(pe))}`:"R$ ••••"}</p>
                <p class="text-xs ${at?"text-green-300":"text-red-300"}">${Ge(Aa)}</p>
              </div>
            </div>
          </div>
        </div>
      `}).join("");const i=n-a,o=a>0?i/a*100:0,s=Ge(o),d=i>=0?"text-lg font-bold text-green-400":"text-lg font-bold text-red-400",m=Ra(e);vt.textContent=v(a),gt.textContent=v(n),K&&(K.textContent=x?Bt(a,m):"≈ US$ ••••"),X&&(X.textContent=x?Bt(n,m):"≈ US$ ••••");const B=m!=null&&m>0?`Estimativa: total em R$ ÷ média da cotação dos ativos em Dólar (R$ ${m.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:4})} por US$).`:"Para ver o patrimônio estimado em US$, cadastre pelo menos um investimento na categoria Dólar com a cotação do dia.";K&&(K.title=B),X&&(X.title=B),we.textContent=x?`${i>=0?"+":"-"} ${$(Math.abs(i))}`:"R$ ••••",Ce.textContent=s,we.className=d,Ce.className=d,ye.querySelectorAll(".inv-edit").forEach(p=>{p.addEventListener("click",()=>{const r=e.find(c=>c.id===p.dataset.id);if(r){if(Ee("inv"),z=r.id,ge.value=r.name||"",b.value=ot.includes(r.type)?r.type:"Outros",y.value=M(r.amountInvested||0),te(r.type)){const c=Mt(r);S.value=c>0?De(c):String(r.quantity||"")}else S.value="";L.value=M(r.currentPrice||0),_e.classList.remove("hidden"),Ve.textContent="Atualizar",Te(),ka(r),T(r.type)&&Je(),k()}})}),ye.querySelectorAll(".inv-delete").forEach(p=>{p.addEventListener("click",async()=>{if(!E){u("Conecte a planilha para excluir investimentos","error");return}const r=p.dataset.id;try{await E.deleteInvestment(r),N=N.filter(c=>c.id!==r),u("Investimento excluído!","success"),Ze(),et()}catch(c){console.error("Erro ao excluir investimento:",c),u("Erro ao excluir investimento na planilha","error")}})})}y.addEventListener("input",()=>{y.value=M(y.value),T(b.value)?$t():Xe(),k()}),L.addEventListener("input",()=>{L.value=M(L.value),T(b.value)?Ta():Xe(),k()}),S.addEventListener("input",()=>{T(b.value)&&Je(),k()}),ge.addEventListener("input",k),b.addEventListener("change",()=>{Te(),T(b.value)?Da():Xe(),k()}),w==null||w.addEventListener("change",()=>{Be(),k()}),C==null||C.addEventListener("input",k),D==null||D.addEventListener("input",k),I==null||I.addEventListener("input",k),I==null||I.addEventListener("blur",()=>{Ea();const e=F(I.value.trim());Number.isFinite(e)&&e>0&&e<=50&&(I.value=e.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})),k()}),_e.addEventListener("click",Ze),Ve.addEventListener("click",async()=>{if(!E){u("Planilha indisponível: investimentos sem localStorage exigem conexão com Sheets","error");return}const e=ge.value.trim(),t=b.value.trim(),a=f(y.value),n=te(t);let i=n?F(S.value):1;const o=n?f(L.value):a;if(!e){u("Informe o nome do ativo","error");return}if(!a||a<=0){u(n?"Informe um valor investido válido":"Informe um saldo válido","error");return}if(n&&(!i||i<=0)){u(T(t)?"Informe o saldo em USD (US$)":"Informe uma quantidade válida de cotas/unidades","error");return}if(n&&(!o||o<=0)){u(T(t)?"Informe a cotação USD de hoje (R$ por US$)":"Informe um preço atual válido","error");return}if(n&&i>0&&o>0&&a>0){const r=a/o,c=Math.round(i),U=Math.abs(i-c)<1e-9,me=Math.max(2,a*.02),pe=c*o-a;(U&&Number.isFinite(r)&&r>0&&pe<0&&pe>-me&&Math.round(r)===c&&Math.abs(r-c)>1e-4||Number.isFinite(r)&&r>0&&Math.abs(i*o-a)>.015&&Math.abs(i-r)<=.03)&&(i=r)}let s="none",d=0,m=12;if(Fe(t)&&w&&(s=w.value||"none",s!=="none")){if(d=F(C.value),!(d>0)){u("Informe a taxa declarada ou escolha «Sem taxa» em rentabilidade.","error");return}let r=Math.round(parseFloat(D.value));(!Number.isFinite(r)||r<1)&&(r=12),m=Math.min(600,r)}const B={id:z||void 0,name:e,type:t,amountInvested:a,quantity:i,currentPrice:o,yieldBasis:s,yieldQuote:s==="none"?0:d,yieldMonths:s==="none"?12:m},p=B.id||`inv-${Date.now()}`;try{z?(await E.updateInvestment(B),N=N.map(r=>r.id===z?{...r,...B,id:z}:r)):(await E.saveInvestment({...B,id:p}),N.push({...B,id:p})),u(z?"Investimento atualizado!":"Investimento cadastrado!","success"),Ze(),et()}catch(r){console.error("Erro ao salvar investimento:",r),u("Erro ao salvar investimento na planilha","error")}}),I&&(I.value=$e().toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})),Te();function Tt(e,t,a={}){const{showRanking:n=!1}=a;Zt.textContent=e,!t||t.length===0?pt.innerHTML='<p class="text-gray-500 text-sm">Nenhum lançamento encontrado.</p>':pt.innerHTML=t.map((i,o)=>{const s=i.type==="receita",d=s?"text-green-400":"text-red-400",m=s?"+":"-",B=o+1;return`
          <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-gradient-to-br from-[#222222] to-[#1c1c1c] border border-[#2a2a2a] shadow-sm shadow-black/25">
            <div class="min-w-0 flex items-center gap-3">
              ${n?`
                <div class="w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 ${B===1?"bg-yellow-500/20 text-yellow-300 border-yellow-400/35":B===2?"bg-slate-400/20 text-slate-200 border-slate-300/35":B===3?"bg-amber-700/20 text-amber-300 border-amber-500/35":"bg-blue-500/15 text-blue-200 border-blue-400/30"}">
                  ${B}º
                </div>
              `:""}
              <div class="min-w-0">
                <p class="text-sm font-semibold text-white truncate">${g(i.category||"Sem categoria")}</p>
                ${n?`<p class="text-[11px] text-gray-500 uppercase tracking-wider mt-0.5">#${B} no ranking</p>`:""}
              </div>
            </div>
            <div class="text-right shrink-0">
              <p class="text-sm font-bold whitespace-nowrap ${d}">${m} ${$(Math.abs(i.value||0))}</p>
              <p class="text-xs text-gray-400">${St(i.date)} · ${g(i.method||"Sem método")}</p>
            </div>
          </div>
        `}).join(""),_.classList.remove("hidden"),_.classList.add("flex")}function tt(){_.classList.add("hidden"),_.classList.remove("flex")}ea.addEventListener("click",tt),_.addEventListener("click",e=>{e.target===_&&tt()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(_.classList.contains("hidden")||tt(),V.classList.contains("hidden")||Ye())}),Wt.addEventListener("click",()=>{const e=Se().filter(t=>t.type==="receita").sort((t,a)=>(a.date||"").localeCompare(t.date||""));Tt("Receitas cadastradas",e)}),Gt.addEventListener("click",()=>{const e=Se().filter(t=>t.type==="despesa").sort((t,a)=>(a.date||"").localeCompare(t.date||""));Tt("Despesas cadastradas",e)}),Yt.addEventListener("click",ba),Jt.addEventListener("click",Ye),V.addEventListener("click",e=>{e.target===V&&Ye()}),Y.addEventListener("input",()=>{Y.value=M(Y.value)}),Kt.addEventListener("submit",e=>{e.preventDefault();const t=ve.value.trim(),a=f(Y.value);if(!t){u("Informe o nome do cartão.","error");return}let n=l.getCreditCardsState();if(ee)n.cards=n.cards.map(o=>o.id===ee?{...o,name:t,limit:a}:o);else{const o=`cc-${Date.now()}`;n.cards.push({id:o,name:t,limit:a}),n.activeId||(n.activeId=o)}n=l.saveCreditCardsState(n);const i=!!ee;ue(),Le(),O(n),H(),A(),u(i?"Cartão atualizado.":"Cartão adicionado.","success")}),je.addEventListener("click",()=>{ue()}),se.addEventListener("change",H),oe.addEventListener("change",H),ne.addEventListener("click",()=>{x=!x,localStorage.setItem("financas:show-sensitive-values",String(x)),Ct(),k(),A()}),re.addEventListener("click",async()=>{const e=f(G.value);if(!e||e<=0){u("Informe um valor válido","error");return}if(!ie.value){u("Informe uma data","error");return}const t=re.querySelector(".save-text"),a=re.querySelector(".save-spinner");re.disabled=!0,t.classList.add("hidden"),a.classList.remove("hidden");try{const n={id:W||`txn-${Date.now()}`,date:ie.value,type:oe.value,category:Pe.value,method:se.value,value:e};if(n.type==="despesa"&&n.method===ke){const i=l.getCreditCardsState();n.creditCardId=le.value||i.activeId||""}if(l.saveTransaction(n),E)try{W?await E.updateTransaction(n):await E.saveTransaction(n),u(W?"Lançamento atualizado!":"Lançamento salvo!","success")}catch(i){console.warn("Falha ao enviar para planilha:",i),u("Salvo localmente (planilha indisponível)","info")}else u(W?"Lançamento atualizado!":"Lançamento salvo!","success");Lt(),A()}finally{re.disabled=!1,t.classList.remove("hidden"),a.classList.add("hidden")}}),Ot.addEventListener("click",()=>{R.classList.add("hidden"),R.classList.remove("flex"),Z=null}),R.addEventListener("click",e=>{e.target===R&&(R.classList.add("hidden"),R.classList.remove("flex"),Z=null)}),Ht.addEventListener("click",async()=>{if(!Z)return;const e=Z;if(E)try{await E.deleteTransaction(e)}catch(t){console.warn(t)}l.deleteTransaction(e),u("Lançamento excluído!","success"),R.classList.add("hidden"),R.classList.remove("flex"),Z=null,A()});async function Pa(){if(E)try{const e=await E.loadTransactions({month:String(P).padStart(2,"0"),year:String(ae)});if(!e||e.length===0)return;const t=l.getTransactions(),a=new Map(t.map(n=>[n.id,n]));e.forEach(n=>{if(!n.id)return;a.get(n.id)||l.saveTransaction({id:n.id,date:n.date||"",type:n.type||"despesa",category:n.category||"",method:n.method||"",value:parseFloat(n.value)||0})})}catch(e){console.error("Erro ao sincronizar transações:",e)}}async function Na(){if(!E){N=[],Q("Planilha indisponível. Para investimentos sem localStorage, conecte o Google Sheets.",{tone:"amber"});return}try{N=await E.loadInvestments()}catch(e){console.error("Erro ao carregar investimentos da planilha:",e),N=[],u("Erro ao carregar investimentos da planilha","error")}}function A(){ma();const e=Se(),t=pa(e);xa(t),ya(t),fa(e),Ca(e),et()}await Pa(),await Na(),Ct(),O(l.getCreditCardsState()),H(),A()});
