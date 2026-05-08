import"./index-DPlvyXvB.js";import{S as be}from"./Sidebar-38HLq7tH.js";import{P as fe}from"./PersonalDataService-CClDzJ6y.js";const ge="/ambiente-dev/";function oe(a){const l=a.getFullYear(),s=String(a.getMonth()+1).padStart(2,"0"),e=String(a.getDate()).padStart(2,"0");return`${l}-${s}-${e}`}function ie(a){const[l,s,e]=a.split("-").map(Number);return`${e}/${s}/${l}`}function Z(a){return a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function he(a){return Math.min(4,Math.floor((a.getDate()-1)/7)+1)}function xe(a){return a===1?["Entender Google Tag Manager (visão geral)","Revisar o que já está instalado no projeto","Criar 1 evento simples de clique em botão"]:a===2?["Implementar evento de page_view","Implementar evento de button_click","Entender conceito de conversão"]:a===3?["Padronizar eventos: page_view, button_click, conversion","Organizar convenção de nomes de eventos","Revisar qualidade dos dados enviados"]:["Montar mini portfólio de tracking","Documentar implementação de GTM e eventos","Preparar oferta simples para freela"]}function ve(a,l){const s=xe(l||1),e=(a.getDate()+a.getMonth())%s.length;return s[e]}function ye(a,l=""){const s=l?`${l}: `:"";return[`${s}Definir objetivo claro - 10 min`,`${s}Preparar ambiente e materiais - 10 min`,`${s}Executar parte 1 - 10 min`,`${s}Executar parte 2 - 10 min`,`${s}Revisar resultado e corrigir - 10 min`,`${s}Registrar aprendizado e próximo passo - 10 min`].map((e,i)=>({label:`${a} | ${e}`,order:i}))}function H(a,l,s,e=0){return s.map((i,T)=>({id:`auto-${a}-${l}-${Z(i)}-${e+T}`,label:i,order:e+T}))}const ke={trabalhoPadrao:"Dia de trabalho padrão",trabalhoCanal:"Dia de trabalho + canal",focoHabilidade:"Dia de foco em habilidade",consolidacao:"Dia de consolidação"};function we(a){const l=a.trim();if(!l)return[];const s=l.toLowerCase();if(s.includes("logica")||s.includes("lógica"))return[`Entender o enunciado de "${l}" - 10 min`,"Listar entradas, saídas e regras - 10 min","Escrever solução em linguagem natural - 10 min","Transformar em pseudocódigo simples - 10 min","Codar a primeira versão sem otimizar - 10 min","Testar com 3 casos diferentes - 10 min","Corrigir erros encontrados - 10 min","Anotar o que aprendeu e próxima prática - 10 min"];if(s.includes("bolo"))return[`Definir receita do bolo (${l}) e rendimento - 10 min`,"Separar ingredientes e utensílios na bancada - 10 min","Pré-aquecer forno e preparar forma (untar/enfarinhar) - 10 min","Misturar ingredientes líquidos na ordem da receita - 10 min","Adicionar secos e mexer até massa homogênea - 10 min","Colocar massa na forma e levar ao forno - 10 min","Conferir ponto do bolo com palito - 10 min","Finalizar (desenformar/cobertura) e registrar ajustes da receita - 10 min"];if(s.includes("gtm")||s.includes("tracking")||s.includes("evento"))return[`Definir objetivo de "${l}" (o que medir) - 10 min`,"Mapear evento: nome, gatilho e parâmetros - 10 min","Configurar tag no GTM - 10 min","Configurar trigger/acionador correto - 10 min","Testar no modo Preview do GTM - 10 min","Validar no navegador se evento disparou - 10 min","Documentar implementação no portfólio - 10 min"];if(s.includes("vídeo")||s.includes("video")||s.includes("canal"))return[`Definir objetivo do conteúdo "${l}" - 10 min`,"Escrever gancho de abertura (3 opções) - 10 min","Criar roteiro curto com começo, meio e fim - 10 min","Gravar material bruto principal - 10 min","Editar versão final com cortes e legenda - 10 min","Publicar e acompanhar retenção inicial - 10 min","Anotar melhorias para o próximo conteúdo - 10 min"];const e=s.startsWith("fazer ")?l.slice(6).trim():l;return[`Definir resultado final de "${l}" e critério de conclusão - 10 min`,`Listar recursos necessários para ${e} - 10 min`,`Executar etapa 1 de ${e} - 10 min`,`Executar etapa 2 de ${e} - 10 min`,`Executar etapa 3 de ${e} - 10 min`,`Validar se ${e} ficou pronto como esperado - 10 min`,`Registrar ajustes e próximo passo de ${e} - 10 min`]}function $e(a,l,s,e,i={}){const T=a.blocks||[],c=s.trim(),g=`auto-${l}-card-${Date.now()}`,A=`Microtarefas: ${c}`,z=e.map((v,y)=>({id:`auto-${l}-card-task-${Z(v)}-${Date.now()}-${y}`,label:v,order:y})),x={id:g,title:A,timeRange:"Quebra automática",order:0,tasks:z,sourceTask:c,generated:!0,showInRoutine:i.showInRoutine!==!1},j=[x,...T].map((v,y)=>({...v,order:y}));return a.blocks=j,x}function Te(a,l){const s=new Date(a,l+1,0).getDate(),e={},i={consolidacao:4,trabalhoCanal:7,focoHabilidade:5,trabalhoPadrao:15};if(!(l===4)){for(let c=1;c<=s;c+=1)e[c]="trabalhoPadrao";return e}for(let c=1;c<=s;c+=1)new Date(a,l,c).getDay()===6&&i.consolidacao>0&&(e[c]="consolidacao",i.consolidacao-=1);for(let c=1;c<=s;c+=1){if(e[c])continue;const g=new Date(a,l,c).getDay();(g===2||g===4)&&i.trabalhoCanal>0&&(e[c]="trabalhoCanal",i.trabalhoCanal-=1)}for(let c=1;c<=s;c+=1){if(e[c])continue;new Date(a,l,c).getDay()===3&&i.focoHabilidade>0&&(e[c]="focoHabilidade",i.focoHabilidade-=1)}for(let c=1;c<=s;c+=1)if(!e[c]){if(i.focoHabilidade>0){e[c]="focoHabilidade",i.focoHabilidade-=1;continue}if(i.trabalhoCanal>0){e[c]="trabalhoCanal",i.trabalhoCanal-=1;continue}e[c]="trabalhoPadrao",i.trabalhoPadrao-=1}return e}function ze(a){return a==="consolidacao"?{modeLabel:"Dia de consolidação",bodyMinutes:20,financeMinutes:15,buildMinutes:"90-120 min",buildGoal:"Canal + habilidade + organização"}:a==="trabalhoCanal"?{modeLabel:"Dia de trabalho + canal",bodyMinutes:15,financeMinutes:10,buildMinutes:"60-75 min",buildGoal:"Canal (substitui habilidade)"}:a==="focoHabilidade"?{modeLabel:"Dia de foco em habilidade",bodyMinutes:15,financeMinutes:10,buildMinutes:"60-90 min",buildGoal:"GTM / tracking profundo"}:{modeLabel:"Dia de trabalho padrão",bodyMinutes:15,financeMinutes:10,buildMinutes:"45-60 min",buildGoal:"Tracking leve e contínuo"}}function Ee(a,l=[]){const[s,e,i]=a.split("-").map(Number),T=new Date(s,e-1,i),c=e-1===4,g=he(T),z=Te(s,e-1)[i]||"trabalhoPadrao",x=ze(z),j=ve(T,g),v=i%3+1;let y=[];z==="trabalhoCanal"?y=[`Canal | Escolher tema do vídeo #${v} - 10 min`,"Canal | Criar gancho inicial (3 variações) - 10 min","Canal | Gravar ou separar cenas - 10 min","Canal | Editar versão curta - 10 min","Canal | Publicar e revisar retenção inicial - 10 min"]:z==="focoHabilidade"?y=[...ye("Tracking profundo",j).map(p=>p.label),"Tracking profundo | Validar evento no preview do GTM - 10 min","Tracking profundo | Registrar no mini portfólio - 10 min"]:z==="consolidacao"?y=["Consolidação | Corpo extra (mobilidade) - 10 min","Consolidação | Revisar gastos da semana - 10 min","Consolidação | Produzir conteúdo do canal - 20 min",`Consolidação | Habilidade GTM: ${j} - 20 min`,"Consolidação | Organização e planejamento da próxima semana - 10 min"]:y=[`Tracking leve | ${j} - 10 min`,"Tracking leve | Implementar micro-ajuste no projeto - 10 min","Tracking leve | Revisar dados e documentar aprendizado - 10 min"];const U=["Dia pesado: corpo mínimo - 10 min","Dia pesado: financeiro mínimo - 5 min","Dia pesado: habilidade mínima - 10 min"],q=c?`Semana ${g} de maio`:`Semana ${g} do mês`,N=c?["Fundação","Controle","Profissionalizar","Monetização inicial"][g-1]||"Execução":"Execução contínua",k=[{id:`auto-corpo-${a}`,title:`Bloco 1 - Corpo (${x.bodyMinutes} min)`,timeRange:"Início do dia",order:0,tasks:H(a,"corpo",["Corpo | Aquecimento curto e caminhada - 5 min",`Corpo | Exercícios básicos em ritmo sustentável - ${Math.max(5,x.bodyMinutes-5)} min`])},{id:`auto-controle-${a}`,title:`Bloco 2 - Financeiro (${x.financeMinutes} min)`,timeRange:"Após o corpo",order:1,tasks:H(a,"controle",["Financeiro | Registrar gastos do dia - 5 min",`Financeiro | Revisar contas e ajuste rápido - ${Math.max(5,x.financeMinutes-5)} min`])},{id:`auto-construcao-${a}`,title:`Bloco 3 - Construção (${x.buildMinutes})`,timeRange:"Período principal",order:2,tasks:H(a,"construcao",y)},{id:`auto-fechamento-${a}`,title:`${q} - ${N}`,timeRange:"Fechamento rápido",order:3,tasks:H(a,"fechamento",[`Meta do dia | ${x.buildGoal} - 10 min`,"Checklist final | Marcar progresso e ajustar foco de amanhã - 10 min"])},{id:`auto-plano-b-${a}`,title:"Plano B (dia pesado)",timeRange:"Use apenas se o dia travar",order:4,tasks:H(a,"planob",U)},{id:`auto-variacao-${a}`,title:`Variação do dia #${v}`,timeRange:"Micro diferença para não ficar igual",order:5,tasks:H(a,"variacao",[`Variação | Prioridade técnica #${v} - 10 min`,`Variação | Revisão curta #${v} - 10 min`])}];return l.filter(p=>p.scope==="daily"?!0:p.scope==="dayType"?p.dayType===z:!1).forEach((p,f)=>{const S=(p.tasks||[]).map((L,_)=>({id:`auto-${a}-template-${p.id}-${_}`,label:L,order:_}));k.unshift({id:`auto-${a}-template-card-${p.id}-${f}`,title:`Microtarefas: ${p.title}`,timeRange:p.scope==="dayType"?`Template fixo - ${ke[p.dayType]||"Tipo de dia"}`:"Template fixo - todos os dias",order:0,tasks:S,sourceTask:p.title,generated:!0,fromTemplate:!0,templateId:p.id,templateScope:p.scope,showInRoutine:!0})}),k.forEach((p,f)=>{p.order=f}),{date:a,week:g,dayType:z,mode:x.modeLabel,blocks:k}}document.addEventListener("DOMContentLoaded",async()=>{if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${ge}index.html`;return}const l=sessionStorage.getItem("username")||"Usuário",s=new be(l,"rotina"),e=new fe;await e.initialize();const i=oe(new Date),T=document.getElementById("app");T.innerHTML=`
    ${s.render()}
    <div class="main-content">
      ${s.renderTopBar("Rotina","Controle sua rotina diária por blocos de tempo")}
      <div class="page-content p-4 md:p-8">
        <div class="max-w-5xl mx-auto space-y-7">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div class="inline-flex p-1 rounded-2xl bg-zinc-900/90 border border-white/[0.08] shadow-lg shadow-black/40 ring-1 ring-white/[0.04]">
              <button id="tab-rotina-btn" type="button" class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-900/35 bg-gradient-to-br from-blue-600 to-indigo-600 text-white border border-white/10">
                <i class="fas fa-calendar-check text-[13px] opacity-90"></i>
                Rotina
              </button>
              <button id="tab-tarefas-btn" type="button" class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-transparent">
                <i class="fas fa-list-check text-[13px] opacity-90"></i>
                Tarefas
              </button>
            </div>
            <p class="text-xs text-zinc-500 max-w-sm leading-relaxed hidden sm:block">
              Organize o dia em blocos e use microtarefas para executar sem travar.
            </p>
          </div>

          <div id="tab-rotina-content" class="space-y-6">
            <!-- Rotina de hoje (checklist por blocos) -->
            <div class="routine-panel rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/95 via-[#16161a] to-[#121214] p-5 md:p-7 shadow-xl shadow-black/35 ring-1 ring-white/[0.04]">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h2 class="text-lg font-bold text-white tracking-tight flex items-center gap-2.5">
                    <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/20">
                      <i class="fas fa-calendar-day text-sm"></i>
                    </span>
                    Rotina de hoje
                  </h2>
                  <p class="text-sm text-zinc-500 mt-1.5 pl-[2.75rem]">${ie(i)}</p>
                </div>
                <div class="flex flex-wrap items-center gap-2 sm:justify-end">
                  <span id="rotina-mode-label" class="inline-flex items-center text-xs font-medium text-sky-300 bg-sky-950/50 border border-sky-500/25 rounded-full px-3 py-1.5 shadow-sm shadow-sky-950/30"></span>
                  <button id="regen-rotina-dia" type="button" class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-zinc-200 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] rounded-xl transition-all duration-200">
                    <i class="fas fa-arrows-rotate text-[11px] text-blue-400"></i>
                    Regenerar dia
                  </button>
                </div>
              </div>
              <div id="rotina-blocos-hoje" class="space-y-4">
                <!-- preenchido por JS -->
              </div>
            </div>

            <!-- Histórico da semana -->
            <div class="routine-panel rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/95 via-[#16161a] to-[#121214] p-5 md:p-7 shadow-xl shadow-black/35 ring-1 ring-white/[0.04]">
              <h2 class="text-lg font-bold text-white mb-1 flex items-center gap-2.5">
                <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400 border border-violet-500/20">
                  <i class="fas fa-chart-line text-sm"></i>
                </span>
                Esta semana
              </h2>
              <p class="text-sm text-zinc-500 mb-5 pl-[2.75rem]">Visão rápida do que foi concluído nos últimos dias.</p>
              <div id="rotina-histórico" class="overflow-x-auto rounded-xl border border-white/[0.06] bg-black/20">
                <!-- preenchido por JS -->
              </div>
            </div>
          </div>

          <div id="tab-tarefas-content" class="space-y-6 hidden">
            <!-- Entrada para quebra de tarefas -->
            <div class="routine-panel overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/95 via-[#16161a] to-[#121214] shadow-xl shadow-black/35 ring-1 ring-white/[0.04]">
              <div class="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 opacity-90"></div>
              <div class="p-5 md:p-7">
                <h2 class="text-lg font-bold text-white mb-2 flex items-center gap-2.5">
                  <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                    <i class="fas fa-wand-magic-sparkles text-sm"></i>
                  </span>
                  Quebrar tarefa em microtarefas
                </h2>
                <p class="text-sm text-zinc-500 mb-6 max-w-xl leading-relaxed pl-[2.75rem]">
                  Passos de ~10 min em um card novo. Escolha o <span class="text-zinc-400">alcance</span> abaixo.
                </p>
                <div class="grid gap-3 md:grid-cols-[1fr_auto] mb-4">
                  <div class="relative group">
                    <span class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                      <i class="fas fa-pen-to-square text-xs"></i>
                    </span>
                    <input
                      id="task-breakdown-input"
                      type="text"
                      class="routine-input w-full pl-10 pr-4 py-3 rounded-xl bg-black/30 border border-white/[0.08] text-zinc-100 placeholder-zinc-600 text-sm shadow-inner shadow-black/20 focus:outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/15 transition-all"
                      placeholder="Ex.: aprender lógica de if/else, configurar evento no GTM…"
                    />
                  </div>
                  <button id="task-breakdown-btn" type="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-br from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-950/50 border border-white/10 transition-all duration-200 active:scale-[0.98]">
                    <i class="fas fa-bolt text-xs opacity-90"></i>
                    Gerar microtarefas
                  </button>
                </div>
                <div class="space-y-3">
                  <div class="flex flex-wrap items-center gap-2 pl-[2.75rem] sm:pl-0 sm:ml-[2.75rem]">
                    <span class="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Alcance</span>
                    <span id="task-breakdown-scope-hint" class="text-[11px] text-zinc-500 truncate max-w-full sm:max-w-md"></span>
                  </div>
                  <input type="hidden" id="task-breakdown-scope" value="today" />
                  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pl-0 sm:pl-[2.75rem]" id="task-breakdown-scope-chips">
                    <button type="button" class="scope-chip group text-left rounded-xl border px-3 py-3 transition-all duration-200 ring-offset-2 ring-offset-[#121214] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 border-white/[0.08] bg-black/25 text-zinc-300 hover:border-white/15 hover:bg-white/[0.04]" data-scope="today" title="Microtarefas só aparecem no plano de hoje">
                      <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400 border border-blue-500/20 mb-2 text-xs">
                        <i class="fas fa-sun"></i>
                      </span>
                      <span class="block text-sm font-semibold text-zinc-100 tracking-tight">Hoje</span>
                      <span class="block text-[11px] text-zinc-500 mt-0.5 leading-snug">Só este dia</span>
                    </button>
                    <button type="button" class="scope-chip group text-left rounded-xl border px-3 py-3 transition-all duration-200 ring-offset-2 ring-offset-[#121214] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 border-white/[0.08] bg-black/25 text-zinc-300 hover:border-white/15 hover:bg-white/[0.04]" data-scope="daily" title="Todo dia o card é recriado junto ao plano">
                      <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300 border border-violet-500/20 mb-2 text-xs">
                        <i class="fas fa-infinity"></i>
                      </span>
                      <span class="block text-sm font-semibold text-zinc-100 tracking-tight">Diário</span>
                      <span class="block text-[11px] text-zinc-500 mt-0.5 leading-snug">Todo dia</span>
                    </button>
                    <button type="button" class="scope-chip group text-left rounded-xl border px-3 py-3 transition-all duration-200 ring-offset-2 ring-offset-[#121214] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 border-white/[0.08] bg-black/25 text-zinc-300 hover:border-white/15 hover:bg-white/[0.04]" data-scope="dayType:trabalhoPadrao" title="Dias de trabalho padrão (tracking leve)">
                      <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-500/15 text-zinc-300 border border-zinc-500/25 mb-2 text-xs">
                        <i class="fas fa-briefcase"></i>
                      </span>
                      <span class="block text-sm font-semibold text-zinc-100 tracking-tight">Trabalho</span>
                      <span class="block text-[11px] text-zinc-500 mt-0.5 leading-snug">Padrão</span>
                    </button>
                    <button type="button" class="scope-chip group text-left rounded-xl border px-3 py-3 transition-all duration-200 ring-offset-2 ring-offset-[#121214] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 border-white/[0.08] bg-black/25 text-zinc-300 hover:border-white/15 hover:bg-white/[0.04]" data-scope="dayType:trabalhoCanal" title="Noite com foco no canal">
                      <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/25 mb-2 text-xs">
                        <i class="fas fa-clapperboard"></i>
                      </span>
                      <span class="block text-sm font-semibold text-zinc-100 tracking-tight">+ Canal</span>
                      <span class="block text-[11px] text-zinc-500 mt-0.5 leading-snug">Conteúdo</span>
                    </button>
                    <button type="button" class="scope-chip group text-left rounded-xl border px-3 py-3 transition-all duration-200 ring-offset-2 ring-offset-[#121214] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 border-white/[0.08] bg-black/25 text-zinc-300 hover:border-white/15 hover:bg-white/[0.04]" data-scope="dayType:focoHabilidade" title="Dias de GTM / tracking profundo">
                      <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/25 mb-2 text-xs">
                        <i class="fas fa-bullseye"></i>
                      </span>
                      <span class="block text-sm font-semibold text-zinc-100 tracking-tight">Foco</span>
                      <span class="block text-[11px] text-zinc-500 mt-0.5 leading-snug">Habilidade</span>
                    </button>
                    <button type="button" class="scope-chip group text-left rounded-xl border px-3 py-3 transition-all duration-200 ring-offset-2 ring-offset-[#121214] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 border-white/[0.08] bg-black/25 text-zinc-300 hover:border-white/15 hover:bg-white/[0.04]" data-scope="dayType:consolidacao" title="Dias de consolidação (geralmente sábado)">
                      <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 mb-2 text-xs">
                        <i class="fas fa-layer-group"></i>
                      </span>
                      <span class="block text-sm font-semibold text-zinc-100 tracking-tight">Mix</span>
                      <span class="block text-[11px] text-zinc-500 mt-0.5 leading-snug">Consolida</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Ajustes do dia -->
            <div class="routine-panel rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/95 via-[#16161a] to-[#121214] p-5 md:p-7 shadow-xl shadow-black/35 ring-1 ring-white/[0.04]">
              <h2 class="text-lg font-bold text-white mb-1 flex items-center gap-2.5">
                <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                  <i class="fas fa-sliders text-sm"></i>
                </span>
                Ajustar tarefas de hoje
              </h2>
              <p class="text-sm text-zinc-500 mb-5 pl-[2.75rem] leading-relaxed">A base é automática; aqui você marca passos e adiciona ajustes finos ao dia.</p>
              <div id="rotina-blocos-edit" class="space-y-4 mb-4">
                <!-- preenchido por JS -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de confirmação (substitui alert nativo) -->
    <div id="routine-confirm-modal" class="fixed inset-0 z-[220] hidden opacity-0 pointer-events-none transition-opacity duration-200" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="routine-confirm-title">
      <div id="routine-confirm-backdrop" class="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <div class="routine-confirm-panel relative w-full max-w-md rounded-2xl border border-white/[0.1] bg-gradient-to-b from-zinc-900/98 to-zinc-950 shadow-2xl shadow-black/60 ring-1 ring-white/[0.06] overflow-hidden translate-y-2 opacity-0 transition-all duration-200 ease-out will-change-transform">
          <div class="h-0.5 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 opacity-90"></div>
          <div class="p-6 sm:p-7">
            <div class="flex gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-300">
                <i class="fas fa-triangle-exclamation text-lg"></i>
              </div>
              <div class="min-w-0 flex-1 pt-0.5">
                <h3 id="routine-confirm-title" class="text-base font-semibold text-zinc-100 tracking-tight">Concluir card</h3>
                <p id="routine-confirm-message" class="mt-2 text-sm text-zinc-400 leading-relaxed"></p>
              </div>
            </div>
            <div class="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3">
              <button type="button" id="routine-confirm-cancel" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-colors">
                Voltar
              </button>
              <button type="button" id="routine-confirm-ok" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-br from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 border border-white/10 shadow-lg shadow-orange-950/40 transition-all active:scale-[0.98]">
                <i class="fas fa-check text-xs opacity-90"></i>
                Concluir mesmo assim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,s.init();const c=document.getElementById("rotina-blocos-hoje"),g=document.getElementById("rotina-blocos-edit"),A=document.getElementById("rotina-histórico"),z=document.getElementById("rotina-mode-label"),x=document.getElementById("regen-rotina-dia"),j=document.getElementById("tab-rotina-btn"),v=document.getElementById("tab-tarefas-btn"),y=document.getElementById("tab-rotina-content"),U=document.getElementById("tab-tarefas-content"),q=document.getElementById("task-breakdown-input"),N=document.getElementById("task-breakdown-btn"),k=document.getElementById("task-breakdown-scope"),V=document.getElementById("task-breakdown-scope-chips"),p=document.getElementById("task-breakdown-scope-hint"),f=document.getElementById("routine-confirm-modal"),S=document.getElementById("routine-confirm-backdrop"),L=f==null?void 0:f.querySelector(".routine-confirm-panel"),_=document.getElementById("routine-confirm-title"),ne=document.getElementById("routine-confirm-message"),Y=document.getElementById("routine-confirm-cancel"),B=document.getElementById("routine-confirm-ok");let Q=null;function re({title:t,message:o,okText:n}){return new Promise(d=>{if(!f||!L){d(!1);return}Q=d,_.textContent=t,ne.textContent=o,B.innerHTML=`
        <i class="fas fa-check text-xs opacity-90"></i>
        ${n||"Concluir mesmo assim"}
      `,f.classList.remove("hidden"),f.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",requestAnimationFrame(()=>{f.classList.remove("opacity-0","pointer-events-none"),f.classList.add("opacity-100","pointer-events-auto"),L.classList.remove("translate-y-2","opacity-0"),L.classList.add("translate-y-0","opacity-100"),B==null||B.focus()})})}function O(t){if(!f||!L)return;f.classList.remove("opacity-100","pointer-events-auto"),f.classList.add("opacity-0","pointer-events-none"),L.classList.remove("translate-y-0","opacity-100"),L.classList.add("translate-y-2","opacity-0"),f.setAttribute("aria-hidden","true"),document.body.style.overflow="";const o=Q;Q=null,window.setTimeout(()=>{f.classList.add("hidden"),o&&o(t)},200)}Y==null||Y.addEventListener("click",()=>O(!1)),B==null||B.addEventListener("click",()=>O(!0)),S==null||S.addEventListener("click",()=>O(!1)),document.addEventListener("keydown",t=>{t.key==="Escape"&&(!f||f.classList.contains("hidden")||O(!1))});const se={today:"Microtarefas só no dia atual.",daily:"Incluído automaticamente em todo novo dia.","dayType:trabalhoPadrao":"Só quando o dia for trabalho padrão.","dayType:trabalhoCanal":"Só quando o dia for trabalho + canal.","dayType:focoHabilidade":"Só quando o dia for foco em habilidade.","dayType:consolidacao":"Só nos dias de consolidação."},de=["border-indigo-400/55","bg-indigo-500/[0.14]","ring-2","ring-indigo-400/35","shadow-lg","shadow-indigo-950/45"],ce=["border-white/[0.08]","bg-black/25"];function ee(){const t=(k==null?void 0:k.value)||"today";p&&(p.textContent=se[t]||""),document.querySelectorAll("#task-breakdown-scope-chips .scope-chip").forEach(o=>{const n=o.dataset.scope===t;de.forEach(d=>o.classList.toggle(d,n)),ce.forEach(d=>o.classList.toggle(d,!n))})}function le(t){return!t||t==="today"?"Somente hoje":t==="daily"?"Todo dia":t==="dayType:trabalhoPadrao"?"Dia de trabalho":t==="dayType:trabalhoCanal"?"Dia de trabalho + canal":t==="dayType:focoHabilidade"?"Dia de foco em habilidade":t==="dayType:consolidacao"?"Dia de consolidação":"Personalizado"}V==null||V.addEventListener("click",t=>{const o=t.target.closest(".scope-chip");!o||!k||(k.value=o.dataset.scope||"today",ee())});const W={active:"flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-900/35 bg-gradient-to-br from-blue-600 to-indigo-600 text-white border border-white/10",inactive:"flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-transparent"};function K(t){const o=t==="rotina";y.classList.toggle("hidden",!o),U.classList.toggle("hidden",o),j.className=o?W.active:W.inactive,v.className=o?W.inactive:W.active}function D(t,o=!1){const n=e.getRoutinePlanForDate(t);if(n&&!o)return n;const d=e.getRoutineBreakdownTemplates(),r=Ee(t,d);return e.setRoutinePlanForDate(t,r)}function te(t){return(D(t).blocks||[]).sort((n,d)=>n.order-d.order)}function ue(t,o,n,d){const r=(t.blocks||[]).find(u=>u.id===o);if(!r)return;r.tasks=(r.tasks||[]).sort((u,h)=>u.order-h.order);const m=r.tasks.length?Math.max(...r.tasks.map(u=>u.order)):-1;n.forEach((u,h)=>{r.tasks.push({id:`auto-${i}-${d}-${Z(u)}-${Date.now()}-${h}`,label:u,order:m+h+1})})}function C(){const t=D(i),o=(t.blocks||[]).filter(d=>d.showInRoutine!==!1).sort((d,r)=>d.order-r.order),n=e.getRoutineCheckmarksForDate(i);if(z.textContent=t.mode||"Rotina do dia",o.length===0){c.innerHTML='<p class="text-zinc-500 text-sm py-8 text-center border border-dashed border-white/[0.08] rounded-xl bg-black/15">Nenhum bloco na rotina. Gere o dia ou ajuste na aba <span class="text-zinc-300">Tarefas</span>.</p>';return}c.innerHTML=o.map(d=>{const r=(d.tasks||[]).sort((w,b)=>w.order-b.order);if(r.length===0)return"";const m=r.filter(w=>n[w.id]).length,u=r.length,h=u>0?m/u*100:0;return`
        <div class="rounded-xl border border-white/[0.07] bg-gradient-to-br from-zinc-800/40 to-black/25 p-4 md:p-5 shadow-md shadow-black/20 ring-1 ring-white/[0.03]">
          <div class="flex items-center justify-between gap-4 mb-4">
            <div class="min-w-0">
              <h3 class="text-base font-semibold text-zinc-100 tracking-tight">${E(d.title)}</h3>
              <p class="text-xs text-zinc-500 mt-1 font-medium">${E(d.timeRange)}</p>
            </div>
            <div class="text-right shrink-0">
              <span class="text-xs font-semibold text-zinc-400 tabular-nums">${m}/${u}</span>
              <div class="w-28 h-1.5 bg-black/40 rounded-full mt-2 overflow-hidden ring-1 ring-white/[0.06]">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300" style="width: ${h}%"></div>
              </div>
            </div>
          </div>
          <ul class="space-y-1.5">
            ${r.map(w=>{const b=!!n[w.id];return`
                <li class="flex items-center gap-3 p-2.5 rounded-lg border border-transparent hover:border-white/[0.06] hover:bg-white/[0.03] transition-all">
                  <button type="button" class="rotina-check shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${b?"bg-emerald-600 border-emerald-400 text-white shadow-inner":"border-zinc-500 text-zinc-500 hover:border-emerald-400/60 hover:text-emerald-300"}" data-id="${w.id}" title="${b?"Desmarcar":"Marcar"}">
                    ${b?'<i class="fas fa-check text-[11px]"></i>':""}
                  </button>
                  <span class="${b?"text-zinc-500 line-through":"text-zinc-100"} text-sm leading-snug">${E(w.label)}</span>
                </li>
              `}).join("")}
          </ul>
        </div>
      `}).join("")}function I(){const t=te(i),o=e.getRoutineCheckmarksForDate(i);if(t.length===0){g.innerHTML='<p class="text-zinc-500 text-sm py-6 text-center border border-dashed border-white/[0.08] rounded-xl bg-black/15">Nenhum bloco para hoje. Use <span class="text-zinc-300">Regenerar dia</span> na aba Rotina.</p>';return}g.innerHTML=t.map(n=>{const d=(n.tasks||[]).sort((u,h)=>u.order-h.order),r=!!n.fromTemplate&&!!n.templateId,m=r?le(n.templateScope):"";return`
        <div class="rounded-xl border border-white/[0.07] bg-gradient-to-br from-zinc-800/35 to-black/30 p-4 md:p-5 shadow-md shadow-black/25 ring-1 ring-white/[0.03]">
          <div class="flex items-center justify-between mb-3 gap-3">
            <div class="min-w-0">
              <h3 class="text-base font-semibold text-zinc-100 tracking-tight">${E(n.title)}</h3>
              <p class="text-xs text-zinc-500 mt-1 font-medium">${E(n.timeRange)}</p>
              ${r?`
                <p class="mt-1 text-[11px] text-zinc-500 flex items-center gap-1.5">
                  <span class="inline-flex items-center justify-center h-4 w-4 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                    <i class="fas fa-layer-group text-[9px]"></i>
                  </span>
                  <button type="button" class="template-scope-toggle underline-offset-2 hover:underline text-zinc-300" data-template-id="${n.templateId}">
                    ${E(m)}
                  </button>
                </p>`:""}
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <button type="button" class="complete-block-btn inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold hover:bg-emerald-500/10 transition-all" data-block-id="${n.id}">
                <i class="fas fa-circle-check text-[11px]"></i>
                Concluir card
              </button>
            </div>
          </div>
          <ul class="space-y-1.5 mb-4">
            ${d.length===0?'<li class="text-zinc-500 text-sm py-2">Nenhuma tarefa neste bloco.</li>':d.map(u=>`
                  <li class="flex items-center justify-between gap-2 p-2.5 rounded-lg border border-white/[0.04] bg-black/15 hover:border-white/[0.08] group transition-all">
                    <div class="flex items-center gap-3 min-w-0 flex-1">
                      <button type="button" class="rotina-check-edit shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${o[u.id]?"bg-emerald-600 border-emerald-400 text-white shadow-inner":"border-zinc-500 text-zinc-500 hover:border-emerald-400/60"}" data-id="${u.id}" title="${o[u.id]?"Desmarcar":"Marcar"}">
                        ${o[u.id]?'<i class="fas fa-check text-[10px]"></i>':""}
                      </button>
                      <span class="${o[u.id]?"text-zinc-500 line-through":"text-zinc-100"} text-sm leading-snug">${E(u.label)}</span>
                    </div>
                    <button type="button" class="remove-rotina-task opacity-60 sm:opacity-0 sm:group-hover:opacity-100 text-zinc-500 hover:text-red-400 p-2 rounded-lg hover:bg-red-950/40 transition-all" data-block-id="${n.id}" data-task-id="${u.id}" title="Remover">
                      <i class="fas fa-trash text-xs"></i>
                    </button>
                  </li>
                `).join("")}
          </ul>
          <div class="flex gap-2">
            <input
              type="text"
              class="novo-task-input routine-input flex-1 px-4 py-2.5 rounded-xl bg-black/30 border border-white/[0.08] text-zinc-100 placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500/35 focus:ring-4 focus:ring-blue-500/10 transition-all"
              placeholder="Nova tarefa..."
              data-block-id="${n.id}"
            />
            <button type="button" class="add-task-btn shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-950/40 border border-white/10 transition-all active:scale-[0.98]" data-block-id="${n.id}">
              <i class="fas fa-plus text-[11px]"></i>Adicionar
            </button>
          </div>
        </div>
      `}).join(""),document.querySelectorAll(".add-task-btn").forEach(n=>{n.addEventListener("click",()=>{const d=n.dataset.blockId,r=document.querySelector(`.novo-task-input[data-block-id="${d}"]`),m=r.value.trim();if(!m)return;const u=D(i);ue(u,d,[m],"extra"),e.setRoutinePlanForDate(i,u),r.value="",I(),C(),M()})}),document.querySelectorAll(".novo-task-input").forEach(n=>{n.addEventListener("keydown",d=>{d.key==="Enter"&&document.querySelector(`.add-task-btn[data-block-id="${n.dataset.blockId}"]`).click()})})}function M(){const t=e.getRoutineCheckmarks(),o=[];for(let r=6;r>=0;r--){const m=new Date;m.setDate(m.getDate()-r),o.push(oe(m))}const n=[],d=new Set;if(o.forEach(r=>{te(r).forEach(u=>{u.tasks&&u.tasks.forEach(h=>{d.has(h.id)||(d.add(h.id),n.push({...h,blockTitle:u.title,timeRange:u.timeRange}))})})}),n.length===0){A.innerHTML='<p class="text-zinc-500 text-sm p-6 text-center">Nada para exibir ainda nesta semana.</p>';return}A.innerHTML=`
      <table class="w-full text-sm min-w-[520px]">
        <thead>
          <tr class="text-left text-zinc-500 text-xs font-semibold uppercase tracking-wider bg-white/[0.03] border-b border-white/[0.06]">
            <th class="py-3 pl-4 pr-2">Tarefa</th>
            ${o.map(r=>`<th class="py-3 px-1 text-center w-10">${ie(r).split("/").slice(0,2).join("/")}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${n.map(r=>`
            <tr class="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
              <td class="py-3 pl-4 pr-2 text-zinc-100">
                <div class="text-[11px] text-zinc-500 font-medium">${E(r.blockTitle)} · ${E(r.timeRange)}</div>
                <div class="mt-0.5">${E(r.label)}</div>
              </td>
              ${o.map(m=>`<td class="py-3 px-1 text-center">${!!(t[m]&&t[m][r.id])?'<span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"><i class="fas fa-check text-[10px]"></i></span>':'<span class="text-zinc-600">—</span>'}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}function E(t){const o=document.createElement("div");return o.textContent=t,o.innerHTML}c.addEventListener("click",t=>{const o=t.target.closest(".rotina-check");if(!o)return;const n=o.dataset.id,r=!e.getRoutineCheckmarksForDate(i)[n];e.setRoutineCheckmark(i,n,r),C(),M()}),g.addEventListener("click",t=>{const o=t.target.closest(".rotina-check-edit");if(o){const b=o.dataset.id,$=!e.getRoutineCheckmarksForDate(i)[b];e.setRoutineCheckmark(i,b,$),I(),C(),M();return}const n=t.target.closest(".complete-block-btn");if(n){const b=n.dataset.blockId,P=D(i),$=(P.blocks||[]).find(R=>R.id===b);if(!$||!$.tasks)return;const F=e.getRoutineCheckmarksForDate(i),X=$.tasks.every(R=>F[R.id]),G=()=>{P.blocks=(P.blocks||[]).filter(R=>R.id!==b),e.setRoutinePlanForDate(i,P),I(),C(),M()};if(!X){re({title:"Alguns passos ainda estão em aberto",message:"Nem todos os itens deste card foram marcados. Se concluir agora, ele sai do plano de hoje. Você pode voltar e completar os passos antes, se quiser."}).then(R=>{R&&G()});return}G();return}const d=t.target.closest(".template-scope-toggle");if(d){const b=d.dataset.templateId;if(!b)return;const $=e.getRoutineBreakdownTemplates().find(pe=>pe.id===b);if(!$)return;const F=["daily","dayType:trabalhoPadrao","dayType:trabalhoCanal","dayType:focoHabilidade","dayType:consolidacao"],X=$.scope==="daily"||$.scope&&$.scope.startsWith("dayType")?$.scope:"daily",G=F.indexOf(X),R=G===-1?0:(G+1)%F.length,J=F[R],[ae,me]=J.startsWith("dayType:")?["dayType",J.split(":")[1]]:[J,null];e.updateRoutineBreakdownTemplate(b,{scope:ae==="dayType"?J:ae,dayType:me}),D(i,!0),C(),I(),M();return}const r=t.target.closest(".remove-rotina-task");if(!r)return;const m=r.dataset.blockId,u=r.dataset.taskId,h=D(i),w=(h.blocks||[]).find(b=>b.id===m);!w||!w.tasks||(w.tasks=w.tasks.filter(b=>b.id!==u),e.setRoutinePlanForDate(i,h),I(),C(),M())}),x.addEventListener("click",()=>{D(i,!0),C(),I(),M()}),N.addEventListener("click",()=>{const t=q.value.trim();if(!t)return;const o=we(t);if(o.length===0)return;const n=(k==null?void 0:k.value)||"today",[d,r]=n.startsWith("dayType:")?["dayType",n.split(":")[1]]:[n,null];if(d==="today"){const m=D(i);$e(m,i,t,o,{showInRoutine:!1}),e.setRoutinePlanForDate(i,m)}else e.saveRoutineBreakdownTemplate({title:t,scope:d,dayType:r,tasks:o}),D(i,!0);q.value="",C(),I(),M()}),q.addEventListener("keydown",t=>{t.key==="Enter"&&N.click()}),j.addEventListener("click",()=>K("rotina")),v.addEventListener("click",()=>K("tarefas")),ee(),C(),I(),M(),K("rotina")});
