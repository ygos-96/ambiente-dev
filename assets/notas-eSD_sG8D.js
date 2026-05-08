import"./index-DPlvyXvB.js";import{S as ge}from"./Sidebar-38HLq7tH.js";import{P as be}from"./PersonalDataService-CClDzJ6y.js";import{G as ve}from"./GoogleAppsScriptService-Du0S4SrP.js";const xe="/ambiente-dev/";document.addEventListener("DOMContentLoaded",async()=>{if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${xe}index.html`;return}const Y=sessionStorage.getItem("username")||"Usuário",H=new ge(Y,"notas"),o=new be;await o.initialize();const ee="https://script.google.com/macros/s/AKfycbxn4DLzXz1k7mb1baejzbRvevbPS2Vti81uVly-pcntUWvZBFa6x57hRNwSLCckFMRSaw/exec";let u=null;try{u=new ve({scriptUrl:ee}),await u.initialize()}catch(a){console.warn("Planilha (Notas) não disponível:",a)}const te=document.getElementById("app");te.innerHTML=`
    ${H.render()}
    <div class="main-content">
      ${H.renderTopBar("Notas e Listas","Organize ideias, listas e links")}
      <div class="page-content p-4 md:p-8">
        <div class="max-w-4xl mx-auto">
          <!-- Tabs -->
          <div class="flex gap-2 mb-6 border-b border-[#2a2a2a]">
            <button type="button" class="tab-btn px-4 py-2 rounded-t-lg font-medium transition-colors bg-blue-600 text-white" data-tab="notas">
              <i class="fas fa-sticky-note mr-2"></i>Notas
            </button>
            <button type="button" class="tab-btn px-4 py-2 rounded-t-lg font-medium transition-colors text-gray-400 hover:text-white hover:bg-[#222222]" data-tab="listas">
              <i class="fas fa-list mr-2"></i>Listas
            </button>
            <button type="button" class="tab-btn px-4 py-2 rounded-t-lg font-medium transition-colors text-gray-400 hover:text-white hover:bg-[#222222]" data-tab="links">
              <i class="fas fa-link mr-2"></i>Links
            </button>
          </div>

          <!-- Tab: Notas -->
          <div id="tab-notas" class="tab-panel space-y-4">
            <div class="flex gap-2 mb-4">
              <input type="text" id="nota-titulo" placeholder="Título da nota" class="flex-1 px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />
              <button type="button" id="add-nota" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                <i class="fas fa-plus mr-2"></i>Nova nota
              </button>
            </div>
            <div id="notas-list" class="space-y-3">
              <!-- preenchido por JS -->
            </div>
          </div>

          <!-- Tab: Listas -->
          <div id="tab-listas" class="tab-panel hidden space-y-6">
            <div class="flex gap-2 mb-4">
              <input type="text" id="nova-lista-nome" placeholder="Nome da nova lista" class="flex-1 px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />
              <button type="button" id="criar-lista-btn" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                <i class="fas fa-plus mr-2"></i>Criar Lista
              </button>
            </div>
            <div id="listas-container">
              <!-- preenchido por JS -->
            </div>
          </div>

          <!-- Tab: Links -->
          <div id="tab-links" class="tab-panel hidden space-y-4">
            <div class="flex gap-2 mb-4">
              <input type="text" id="link-titulo" placeholder="Título" class="flex-1 px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />
              <input type="url" id="link-url" placeholder="https://..." class="flex-1 px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />
              <button type="button" id="add-link" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors whitespace-nowrap">
                <i class="fas fa-plus mr-2"></i>Adicionar
              </button>
            </div>
            <div id="links-list" class="space-y-2">
              <!-- preenchido por JS -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal nota (editar/conteúdo) -->
    <div id="nota-modal" class="fixed inset-0 bg-black/70 hidden items-center justify-center z-[90] p-4">
      <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col">
        <div class="p-4 border-b border-[#2a2a2a] flex justify-between items-center">
          <input type="text" id="nota-modal-titulo" class="flex-1 bg-transparent text-white font-semibold text-lg border-none focus:ring-0" placeholder="Título" />
          <button type="button" id="nota-modal-close" class="text-gray-400 hover:text-white p-2"><i class="fas fa-times"></i></button>
        </div>
        <div class="p-4 flex-1 overflow-auto">
          <textarea id="nota-modal-conteudo" rows="8" class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400" placeholder="Conteúdo da nota..."></textarea>
        </div>
        <div class="p-4 border-t border-[#2a2a2a] flex justify-end gap-2">
          <button type="button" id="nota-modal-delete" class="px-4 py-2 text-red-400 hover:bg-red-900/30 rounded-lg transition-colors">Excluir</button>
          <button type="button" id="nota-modal-save" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 min-w-[100px] justify-center">
            <span class="save-text">Salvar</span>
            <span class="save-spinner hidden"><i class="fas fa-spinner fa-spin"></i></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de confirmação de exclusão -->
    <div id="delete-confirm-modal" class="fixed inset-0 bg-black/70 hidden items-center justify-center z-[100] p-4">
      <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-2xl w-full max-w-md">
        <div class="p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
              <i class="fas fa-exclamation-triangle text-red-400 text-xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-white">Confirmar exclusão</h3>
          </div>
          <p class="text-gray-400 mb-6">Tem certeza que deseja excluir esta nota? Esta ação não pode ser desfeita.</p>
          <div class="flex gap-3 justify-end">
            <button type="button" id="delete-cancel-btn" class="px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg transition-colors">Cancelar</button>
            <button type="button" id="delete-confirm-btn" class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium flex items-center gap-2 min-w-[100px] justify-center">
              <span class="delete-text">Excluir</span>
              <span class="delete-spinner hidden"><i class="fas fa-spinner fa-spin"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de seleção de tipo de lista -->
    <div id="list-type-modal" class="fixed inset-0 bg-black/70 hidden items-center justify-center z-[100] p-4">
      <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-2xl w-full max-w-md">
        <div class="p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Escolha o tipo de lista</h3>
          <div class="space-y-3 mb-6">
            <button type="button" class="list-type-btn w-full p-4 bg-[#222222] hover:bg-[#2a2a2a] border-2 border-[#2a2a2a] hover:border-blue-500 rounded-lg transition-colors text-left" data-type="tasks">
              <div class="flex items-center gap-3">
                <i class="fas fa-tasks text-blue-400 text-xl"></i>
                <div>
                  <div class="font-semibold text-white">Lista de Tarefas</div>
                  <div class="text-sm text-gray-400">Com opção de marcar como concluída</div>
                </div>
              </div>
            </button>
            <button type="button" class="list-type-btn w-full p-4 bg-[#222222] hover:bg-[#2a2a2a] border-2 border-[#2a2a2a] hover:border-green-500 rounded-lg transition-colors text-left" data-type="notes">
              <div class="flex items-center gap-3">
                <i class="fas fa-sticky-note text-green-400 text-xl"></i>
                <div>
                  <div class="font-semibold text-white">Lista de Notas</div>
                  <div class="text-sm text-gray-400">Apenas notas, sem opção de marcar</div>
                </div>
              </div>
            </button>
          </div>
          <button type="button" id="list-type-cancel" class="w-full px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg transition-colors">Cancelar</button>
        </div>
      </div>
    </div>

    <!-- Toast Container -->
    <div id="toast-container" class="fixed top-4 right-4 z-[200] space-y-2 max-w-md" style="z-index: 200;"></div>
  `,H.init();const ae=document.getElementById("tab-notas"),ie=document.getElementById("tab-listas"),se=document.getElementById("tab-links"),W=document.querySelectorAll(".tab-btn"),U=document.getElementById("notas-list"),x=document.getElementById("listas-container"),O=document.getElementById("links-list"),V=document.getElementById("nota-titulo"),ne=document.getElementById("add-nota"),w=document.getElementById("nova-lista-nome"),A=document.getElementById("criar-lista-btn"),_=document.getElementById("link-titulo"),J=document.getElementById("link-url"),oe=document.getElementById("add-link"),j=document.getElementById("nota-modal"),q=document.getElementById("nota-modal-titulo"),P=document.getElementById("nota-modal-conteudo"),le=document.getElementById("nota-modal-close"),N=document.getElementById("nota-modal-save"),de=document.getElementById("nota-modal-delete"),m=document.getElementById("delete-confirm-modal"),re=document.getElementById("delete-cancel-btn"),S=document.getElementById("delete-confirm-btn"),ce=document.getElementById("toast-container"),f=document.getElementById("list-type-modal"),G=document.getElementById("list-type-cancel"),ue=document.querySelectorAll(".list-type-btn");let $=null,k=null,T=null;function p(a,e="success"){const t=document.createElement("div");let i,s,n;e==="success"?(i="bg-green-600",s="border-green-500",n="fa-check-circle"):e==="error"?(i="bg-red-700",s="border-red-500",n="fa-exclamation-triangle"):(i="bg-blue-600",s="border-blue-500",n="fa-info-circle"),t.className=`${i} border-2 ${s} text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-slide-in-right font-medium z-[200] min-w-[300px] max-w-md`,t.style.zIndex="200",t.innerHTML=`
      <i class="fas ${n} text-lg"></i>
      <span class="flex-1">${r(a)}</span>
    `,ce.appendChild(t),setTimeout(()=>{t.classList.add("animate-slide-out-right"),setTimeout(()=>t.remove(),300)},e==="error"?5e3:3e3)}function z(a,e,t,i){e?(a.disabled=!0,t.classList.add("hidden"),i.classList.remove("hidden")):(a.disabled=!1,t.classList.remove("hidden"),i.classList.add("hidden"))}function Q(a){W.forEach(e=>{const t=e.dataset.tab===a;e.classList.toggle("bg-blue-600",t),e.classList.toggle("text-white",t),e.classList.toggle("text-gray-400",!t),e.classList.toggle("hover:bg-[#222222]",!t)}),ae.classList.toggle("hidden",a!=="notas"),ie.classList.toggle("hidden",a!=="listas"),se.classList.toggle("hidden",a!=="links"),a==="listas"&&g(),a==="links"&&D()}W.forEach(a=>{a.addEventListener("click",()=>Q(a.dataset.tab))});function r(a){const e=document.createElement("div");return e.textContent=a||"",e.innerHTML}function X(a){const e=(a||"").toLowerCase().trim();if(!e)return{difficulty:"Fácil",estimatedTimeMinutes:5,estimatedTimeLabel:"5 min"};const t=e.split(/\s+/).filter(Boolean),i=["oi","ok","confirmar","avisar","responder","dar retorno","mandar mensagem"],s=["ligar","enviar","pagar","comprar","agendar","checar","verificar","postar","publicar","organizar"],n=["revisar","ajustar","montar","escrever","planejar"],l=["editar vídeo","editar video","edição de vídeo","edicao de video","refatorar","implementar","corrigir bug","pesquisar","documentar","integrar","configurar","deploy","estudar","aprender"],c=i.some(I=>e.includes(I)),b=s.filter(I=>e.includes(I)).length,d=n.filter(I=>e.includes(I)).length,L=l.filter(I=>e.includes(I)).length,F=(e.includes("editar")||e.includes("edição")||e.includes("edicao"))&&(e.includes("vídeo")||e.includes("video"));let v=0;t.length<=3?v+=0:t.length<=7?v+=1:t.length<=12?v+=2:v+=3,v+=d,v+=L*2,v-=b;let C="Médio",y=30;c&&t.length<=4&&!F?(C="Fácil",y=3):v<=0?(C="Fácil",y=8):v>=4&&(C="Difícil",y=60),F?(C=t.length>5?"Difícil":"Médio",y=t.length>5?90:45):v>=6&&(y=90);const K=Math.floor(y/60),Z=y%60,pe=K>0?Z>0?`${K}h ${Z}min`:`${K}h`:`${y} min`;return{difficulty:C,estimatedTimeMinutes:y,estimatedTimeLabel:pe}}function me(a){return a==="Difícil"?{label:"Difícil",className:"bg-red-900/40 text-red-300 border border-red-700/50"}:a==="Fácil"?{label:"Fácil",className:"bg-green-900/40 text-green-300 border border-green-700/50"}:{label:"Médio",className:"bg-yellow-900/40 text-yellow-300 border border-yellow-700/50"}}function B(){const a=o.getNotes();U.innerHTML=a.length===0?'<p class="text-gray-400 text-sm">Nenhuma nota. Clique em "Nova nota" para criar.</p>':a.map(e=>`
          <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#333] transition-colors cursor-pointer" data-note-id="${e.id}">
            <h3 class="font-semibold text-white mb-1">${r(e.title||"Sem título")}</h3>
            <p class="text-gray-400 text-sm line-clamp-2">${r((e.content||"").slice(0,120))}${(e.content||"").length>120?"…":""}</p>
          </div>
        `).join("")}U.addEventListener("click",a=>{const e=a.target.closest("[data-note-id]");e&&M(e.dataset.noteId)});function M(a){$=a;let t=o.getNotes().find(i=>i.id===a);if(!t&&h){const s=o.getLists().find(n=>n.id===h);if(s){const n=s.items.find(l=>l.id===E&&l.type==="note");n&&(t=o.saveNote({id:n.id,title:n.title||"",content:n.content||""}))}}t?(q.value=t.title||"",P.value=t.content||""):(q.value="",P.value=""),j.classList.remove("hidden"),j.classList.add("flex"),q.focus()}function R(){j.classList.add("hidden"),j.classList.remove("flex"),$=null}ne.addEventListener("click",()=>{const a=V.value.trim(),e=o.saveNote({title:a||"Nova nota",content:""});V.value="",B(),M(e.id),u&&u.saveNote({id:e.id,title:e.title||"",content:e.content||""}).then(()=>{p("Nota registrada na planilha!","success")}).catch(t=>{console.warn("Falha ao enviar nota para a planilha:",t)})}),le.addEventListener("click",R),N.addEventListener("click",async()=>{if($==null)return;const a=N.querySelector(".save-text"),e=N.querySelector(".save-spinner");z(N,!0,a,e);try{const t=o.saveNote({id:$,title:q.value.trim(),content:P.value.trim()});if(h&&E){const i=o.getLists(),s=i.find(n=>n.id===h);if(s){const n=s.items.find(l=>l.id===E);n&&n.type==="note"&&(n.title=t.title,n.content=t.content,o.saveLists(i))}}if(u)try{await u.saveNote({id:t.id,title:t.title||"",content:t.content||""}),p("Nota salva e atualizada na planilha!","success")}catch(i){console.warn("Falha ao atualizar nota na planilha:",i),p("Nota salva localmente, mas não foi possível atualizar na planilha","error")}else p("Nota salva!","success");B(),h&&g(),R(),E=null,h=null}finally{z(N,!1,a,e)}}),de.addEventListener("click",()=>{$!=null&&(k=$,m.classList.remove("hidden"),m.classList.add("flex"))}),re.addEventListener("click",()=>{m.classList.add("hidden"),m.classList.remove("flex"),k=null}),m.addEventListener("click",a=>{a.target===m&&(m.classList.add("hidden"),m.classList.remove("flex"),k=null)}),S.addEventListener("click",async()=>{if(k==null)return;const a=S.querySelector(".delete-text"),e=S.querySelector(".delete-spinner");z(S,!0,a,e);try{if(u)try{await u.deleteNote(k)}catch(t){console.warn("Falha ao remover nota da planilha:",t)}o.deleteNote(k),p("Nota excluída com sucesso!","success"),B(),R(),m.classList.add("hidden"),m.classList.remove("flex"),k=null}catch{p("Erro ao excluir nota","error")}finally{z(S,!1,a,e)}});let E=null,h=null;function g(){const a=o.getLists();x.innerHTML=a.map(e=>{const t=e.items||[];return`
        <div class="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4 mb-4">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-semibold text-white flex items-center gap-2">
              <i class="fas fa-list-ul text-blue-400"></i>
              ${r(e.name)}
            </h3>
            ${e.isDefault?"":`
              <button type="button" class="delete-list-btn text-red-400 hover:text-red-300 p-1" data-list-id="${e.id}" title="Excluir lista">
                <i class="fas fa-trash text-sm"></i>
              </button>
            `}
          </div>
          <ul class="space-y-2 mb-3" data-list-id="${e.id}">
            ${t.length===0?'<li class="text-gray-500 text-sm">Nenhum item.</li>':t.map(i=>{const n=e.listType==="tasks";if(i.type==="note")return`
                  <li class="flex items-start gap-2 group p-2 rounded-lg hover:bg-[#222222] transition-colors">
                    ${n?`
                      <button type="button" class="list-item-check w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${i.done?"bg-green-600 border-green-500 text-white":"border-gray-500 text-gray-400 hover:border-green-500"}" data-list-id="${e.id}" data-item-id="${i.id}" title="${i.done?"Desmarcar":"Marcar"}">
                        ${i.done?'<i class="fas fa-check text-xs"></i>':""}
                      </button>
                    `:'<div class="w-6"></div>'}
                    <div class="flex-1 min-w-0 cursor-pointer list-note-item" data-list-id="${e.id}" data-item-id="${i.id}">
                      <div class="font-medium ${n&&i.done?"text-gray-500 line-through":"text-white"}">${r(i.title||"Sem título")}</div>
                      <div class="text-sm text-gray-400 line-clamp-2">${r((i.content||"").slice(0,100))}${(i.content||"").length>100?"…":""}</div>
                    </div>
                    <button type="button" class="list-item-remove text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-300 p-1" data-list-id="${e.id}" data-item-id="${i.id}" title="Remover"><i class="fas fa-trash text-sm"></i></button>
                  </li>
                `;{const l=X(i.text||""),c=l.difficulty,b=l.estimatedTimeLabel,d=me(c);return`
                  <li class="flex items-center gap-2 group">
                    ${n?`
                      <button type="button" class="list-item-check w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${i.done?"bg-green-600 border-green-500 text-white":"border-gray-500 text-gray-400 hover:border-green-500"}" data-list-id="${e.id}" data-item-id="${i.id}" title="${i.done?"Desmarcar":"Marcar"}">
                        ${i.done?'<i class="fas fa-check text-xs"></i>':""}
                      </button>
                    `:""}
                    <div class="flex-1 min-w-0">
                      <span class="${n&&i.done?"text-gray-500 line-through":"text-white"}">${r(i.text||"")}</span>
                      <div class="mt-1 flex items-center gap-2">
                        <span class="text-xs px-2 py-0.5 rounded-full ${d.className}">${d.label}</span>
                        <span class="text-xs text-gray-400"><i class="far fa-clock mr-1"></i>${r(b)}</span>
                      </div>
                    </div>
                    <button type="button" class="list-item-remove text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-300 p-1" data-list-id="${e.id}" data-item-id="${i.id}" title="Remover"><i class="fas fa-trash text-sm"></i></button>
                  </li>
                `}}).join("")}
          </ul>
          <div class="flex gap-2">
            <input type="text" class="list-item-input flex-1 px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400" placeholder="${e.listType==="notes"?'Digite "nota:" seguido do título...':"Adicionar item ou nota..."}" data-list-id="${e.id}" />
            <button type="button" class="list-item-add px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm" data-list-id="${e.id}">Adicionar</button>
          </div>
        </div>
      `}).join(""),x.querySelectorAll(".list-item-check").forEach(e=>{e.addEventListener("click",()=>{o.toggleListItem(e.dataset.listId,e.dataset.itemId),g()})}),x.querySelectorAll(".list-item-remove").forEach(e=>{e.addEventListener("click",()=>{o.removeListItem(e.dataset.listId,e.dataset.itemId),g()})}),x.querySelectorAll(".list-item-add").forEach(e=>{e.addEventListener("click",()=>{var c;const t=x.querySelector(`.list-item-input[data-list-id="${e.dataset.listId}"]`),i=(c=t==null?void 0:t.value)==null?void 0:c.trim();if(!i)return;const s=e.dataset.listId,n=o.getLists().find(b=>b.id===s);if((n==null?void 0:n.listType)==="notes"){const b=i.startsWith("nota:")||i.startsWith("note:")?i.substring(i.indexOf(":")+1).trim()||"Nova nota":i,d=o.saveNote({title:b,content:""}),L=o.addNoteToList(s,{id:d.id,title:d.title,content:d.content});t&&(t.value=""),g(),M(d.id),E=L.id,h=s}else{const b=i.toLowerCase();if(b.startsWith("nota:")||b.startsWith("note:")){const d=i.substring(i.indexOf(":")+1).trim()||"Nova nota",L=o.saveNote({title:d,content:""}),F=o.addNoteToList(s,{id:L.id,title:L.title,content:L.content});t&&(t.value=""),g(),M(L.id),E=F.id,h=s}else{const d=X(i);o.addListItem(s,{text:i,difficulty:d.difficulty,estimatedTimeMinutes:d.estimatedTimeMinutes,estimatedTimeLabel:d.estimatedTimeLabel}),t&&(t.value=""),g()}}})}),x.querySelectorAll(".list-item-input").forEach(e=>{e.addEventListener("keydown",t=>{if(t.key==="Enter"){const i=x.querySelector(`.list-item-add[data-list-id="${e.dataset.listId}"]`);i==null||i.click()}})}),x.querySelectorAll(".list-note-item").forEach(e=>{e.addEventListener("click",()=>{var l;const t=e.dataset.itemId,i=e.dataset.listId,s=o.getLists().find(c=>c.id===i),n=(l=s==null?void 0:s.items)==null?void 0:l.find(c=>c.id===t&&c.type==="note");n&&(E=n.id,h=i,M(n.id))})}),x.querySelectorAll(".delete-list-btn").forEach(e=>{e.addEventListener("click",()=>{var i;const t=e.dataset.listId;confirm(`Tem certeza que deseja excluir a lista "${(i=o.getLists().find(s=>s.id===t))==null?void 0:i.name}"?`)&&(o.deleteList(t),g(),p("Lista excluída!","success"))})})}A&&A.addEventListener("click",()=>{var e;const a=(e=w==null?void 0:w.value)==null?void 0:e.trim();if(!a){p("Digite um nome para a lista","error");return}T=a,f.classList.remove("hidden"),f.classList.add("flex")}),ue.forEach(a=>{a.addEventListener("click",()=>{const e=a.dataset.type;if(T)try{const t=o.createList(T,e);w&&(w.value=""),g(),p("Lista criada!","success"),f.classList.add("hidden"),f.classList.remove("flex"),T=null}catch(t){console.error("Erro ao criar lista:",t),p("Erro ao criar lista","error")}})}),G&&G.addEventListener("click",()=>{f.classList.add("hidden"),f.classList.remove("flex"),T=null}),f.addEventListener("click",a=>{a.target===f&&(f.classList.add("hidden"),f.classList.remove("flex"),T=null)}),w&&w.addEventListener("keydown",a=>{a.key==="Enter"&&A&&A.click()});function D(){const a=o.getLinks();O.innerHTML=a.length===0?'<p class="text-gray-400 text-sm">Nenhum link. Adicione acima.</p>':a.map(e=>`
          <div class="flex items-center justify-between gap-2 p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#333] group">
            <a href="${r(e.url)}" target="_blank" rel="noopener noreferrer" class="flex-1 min-w-0 text-white hover:text-blue-400 truncate" title="${r(e.url)}">
              <i class="fas fa-external-link-alt text-gray-500 mr-2"></i>${r(e.title||e.url)}
            </a>
            <button type="button" class="link-delete text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-300 p-1" data-id="${e.id}" title="Excluir"><i class="fas fa-trash text-sm"></i></button>
          </div>
        `).join(""),O.querySelectorAll(".link-delete").forEach(e=>{e.addEventListener("click",()=>{o.deleteLink(e.dataset.id),D()})})}oe.addEventListener("click",()=>{const a=_.value.trim(),e=J.value.trim();e&&(o.saveLink({title:a||e,url:e}),_.value="",J.value="",D())});async function fe(){if(u)try{const a=await u.loadNotes(),e=o.getNotes(),t=new Map;a.forEach(s=>{s.id&&t.set(s.id,s)});const i=e.filter(s=>t.has(s.id)?!0:(console.log(`🗑️ Removendo nota local que não existe mais na planilha: ${s.id}`),o.deleteNote(s.id),!1));a.forEach(s=>{if(!s.id)return;const n=e.find(l=>l.id===s.id);n?(n.title!==s.title||n.content!==s.content)&&(console.log(`🔄 Atualizando nota local com dados da planilha: ${s.id}`),o.saveNote({id:s.id,title:s.title||"",content:s.content||""})):(console.log(`➕ Adicionando nota da planilha: ${s.id}`),o.saveNote({id:s.id,title:s.title||"",content:s.content||""}))}),B(),console.log("✅ Sincronização de notas concluída")}catch(a){console.error("Erro ao sincronizar notas com a planilha:",a)}}fe(),B(),g(),D(),Q("notas")});
