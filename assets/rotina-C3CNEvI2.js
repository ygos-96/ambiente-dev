import"./index-IWM24kaj.js";import{S as E}from"./Sidebar-CewEtVMS.js";import{P as R}from"./PersonalDataService-CGfDL3H2.js";const j="/ambiente-dev/";function k(l){const p=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),o=String(l.getDate()).padStart(2,"0");return`${p}-${d}-${o}`}function $(l){const[p,d,o]=l.split("-").map(Number);return`${o}/${d}/${p}`}document.addEventListener("DOMContentLoaded",async()=>{if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${j}index.html`;return}const p=sessionStorage.getItem("username")||"Usuário",d=new E(p,"rotina"),o=new R;await o.initialize();const m=k(new Date),w=document.getElementById("app");w.innerHTML=`
    ${d.render()}
    <div class="main-content">
      ${d.renderTopBar("Rotina","Controle sua rotina diária por blocos de tempo")}
      <div class="page-content p-4 md:p-8">
        <div class="max-w-5xl mx-auto space-y-6">
          <!-- Rotina de hoje (checklist por blocos) -->
          <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 md:p-6">
            <h2 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <i class="fas fa-calendar-day text-blue-400"></i>
              Rotina de hoje — ${$(m)}
            </h2>
            <div id="rotina-blocos-hoje" class="space-y-4">
              <!-- preenchido por JS -->
            </div>
          </div>

          <!-- Editar blocos e tarefas da rotina -->
          <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 md:p-6">
            <h2 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <i class="fas fa-edit text-green-400"></i>
              Editar rotina diária
            </h2>
            <p class="text-gray-400 text-sm mb-4">Organize seus blocos de tempo e tarefas.</p>
            <div id="rotina-blocos-edit" class="space-y-4 mb-4">
              <!-- preenchido por JS -->
            </div>
          </div>

          <!-- Histórico da semana -->
          <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 md:p-6">
            <h2 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <i class="fas fa-history text-purple-400"></i>
              Esta semana
            </h2>
            <div id="rotina-histórico" class="overflow-x-auto">
              <!-- preenchido por JS -->
            </div>
          </div>
        </div>
      </div>
    </div>
  `,d.init();const h=document.getElementById("rotina-blocos-hoje"),x=document.getElementById("rotina-blocos-edit"),v=document.getElementById("rotina-histórico");function b(){const n=o.getRoutineBlocks().sort((a,s)=>a.order-s.order),t=o.getRoutineCheckmarksForDate(m);if(n.length===0){h.innerHTML='<p class="text-gray-400 text-sm">Nenhum bloco na rotina. Adicione blocos abaixo.</p>';return}h.innerHTML=n.map(a=>{const s=(a.tasks||[]).sort((c,u)=>c.order-u.order);if(s.length===0)return"";const e=s.filter(c=>t[c.id]).length,r=s.length,y=r>0?e/r*100:0;return`
        <div class="bg-[#222222] rounded-lg border border-[#2a2a2a] p-4">
          <div class="flex items-center justify-between mb-3">
            <div>
              <h3 class="text-base font-semibold text-white">${i(a.title)}</h3>
              <p class="text-sm text-gray-400">${i(a.timeRange)}</p>
            </div>
            <div class="text-right">
              <span class="text-sm text-gray-400">${e}/${r}</span>
              <div class="w-24 h-2 bg-[#1a1a1a] rounded-full mt-1">
                <div class="h-2 bg-green-500 rounded-full transition-all" style="width: ${y}%"></div>
              </div>
            </div>
          </div>
          <ul class="space-y-2">
            ${s.map(c=>{const u=!!t[c.id];return`
                <li class="flex items-center gap-3 p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
                  <button type="button" class="rotina-check flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${u?"bg-green-600 border-green-500 text-white":"border-gray-500 text-gray-400 hover:border-green-500"}" data-id="${c.id}" title="${u?"Desmarcar":"Marcar"}">
                    ${u?'<i class="fas fa-check text-xs"></i>':""}
                  </button>
                  <span class="${u?"text-gray-500 line-through":"text-white"} text-sm">${i(c.label)}</span>
                </li>
              `}).join("")}
          </ul>
        </div>
      `}).join("")}function f(){const n=o.getRoutineBlocks().sort((t,a)=>t.order-a.order);if(n.length===0){x.innerHTML='<p class="text-gray-400 text-sm">Nenhum bloco. Adicione blocos acima.</p>';return}x.innerHTML=n.map(t=>{const a=(t.tasks||[]).sort((s,e)=>s.order-e.order);return`
        <div class="bg-[#222222] rounded-lg border border-[#2a2a2a] p-4">
          <div class="flex items-center justify-between mb-3">
            <div>
              <h3 class="text-base font-semibold text-white">${i(t.title)}</h3>
              <p class="text-sm text-gray-400">${i(t.timeRange)}</p>
            </div>
          </div>
          <ul class="space-y-2 mb-3">
            ${a.length===0?'<li class="text-gray-400 text-sm">Nenhuma tarefa neste bloco.</li>':a.map(s=>`
                  <li class="flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-[#1a1a1a] group">
                    <span class="text-white text-sm">${i(s.label)}</span>
                    <button type="button" class="remove-rotina-task opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 p-1" data-block-id="${t.id}" data-task-id="${s.id}" title="Remover">
                      <i class="fas fa-trash text-xs"></i>
                    </button>
                  </li>
                `).join("")}
          </ul>
          <div class="flex gap-2">
            <input
              type="text"
              class="novo-task-input flex-1 px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm"
              placeholder="Nova tarefa..."
              data-block-id="${t.id}"
            />
            <button type="button" class="add-task-btn px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm" data-block-id="${t.id}">
              <i class="fas fa-plus mr-1"></i>Adicionar
            </button>
          </div>
        </div>
      `}).join(""),document.querySelectorAll(".add-task-btn").forEach(t=>{t.addEventListener("click",()=>{const a=t.dataset.blockId,s=document.querySelector(`.novo-task-input[data-block-id="${a}"]`),e=s.value.trim();e&&(o.addRoutineTask(a,e),s.value="",f(),b(),g())})}),document.querySelectorAll(".novo-task-input").forEach(t=>{t.addEventListener("keydown",a=>{a.key==="Enter"&&document.querySelector(`.add-task-btn[data-block-id="${t.dataset.blockId}"]`).click()})})}function g(){const n=o.getRoutineBlocks().sort((e,r)=>e.order-r.order),t=o.getRoutineCheckmarks(),a=[];for(let e=6;e>=0;e--){const r=new Date;r.setDate(r.getDate()-e),a.push(k(r))}const s=[];if(n.forEach(e=>{e.tasks&&e.tasks.forEach(r=>{s.push({...r,blockTitle:e.title,timeRange:e.timeRange})})}),s.length===0){v.innerHTML='<p class="text-gray-400 text-sm">Adicione tarefas na rotina para ver o histórico.</p>';return}v.innerHTML=`
      <table class="w-full text-sm">
        <thead>
          <tr class="text-left text-gray-400 border-b border-[#2a2a2a]">
            <th class="pb-2 pr-2">Tarefa</th>
            ${a.map(e=>`<th class="pb-2 px-1 text-center">${$(e).split("/").slice(0,2).join("/")}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${s.map(e=>`
            <tr class="border-b border-[#2a2a2a]">
              <td class="py-2 pr-2 text-white">
                <div class="text-xs text-gray-400">${i(e.blockTitle)} - ${i(e.timeRange)}</div>
                <div>${i(e.label)}</div>
              </td>
              ${a.map(r=>`<td class="py-2 px-1 text-center">${!!(t[r]&&t[r][e.id])?'<i class="fas fa-check text-green-400"></i>':'<span class="text-gray-600">—</span>'}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}function i(n){const t=document.createElement("div");return t.textContent=n,t.innerHTML}h.addEventListener("click",n=>{const t=n.target.closest(".rotina-check");if(!t)return;const a=t.dataset.id,e=!o.getRoutineCheckmarksForDate(m)[a];o.setRoutineCheckmark(m,a,e),b(),g()}),x.addEventListener("click",n=>{const t=n.target.closest(".remove-rotina-task");if(!t)return;const a=t.dataset.blockId,s=t.dataset.taskId;o.removeRoutineTask(a,s),f(),b(),g()}),b(),f(),g()});
