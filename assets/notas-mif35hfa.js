import"./index-IWM24kaj.js";import{S as ot}from"./Sidebar-CewEtVMS.js";import{P as lt}from"./PersonalDataService-CGfDL3H2.js";import{G as dt}from"./GoogleAppsScriptService-RRDeTsMz.js";const rt="/ambiente-dev/";document.addEventListener("DOMContentLoaded",async()=>{if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${rt}index.html`;return}const _=sessionStorage.getItem("username")||"Usuário",q=new ot(_,"notas"),o=new lt;await o.initialize();const J="https://script.google.com/macros/s/AKfycbydP_poxCsy37w8Crubx-ctK2MOCri1UqHCDWgPfVFQhBp8iwaofX8V4WU-8pwFihSb/exec";let d=null;try{d=new dt({scriptUrl:J}),await d.initialize()}catch(e){console.warn("Planilha (Notas) não disponível:",e)}const K=document.getElementById("app");K.innerHTML=`
    ${q.render()}
    <div class="main-content">
      ${q.renderTopBar("Notas e Listas","Organize ideias, listas e links")}
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
  `,q.init();const G=document.getElementById("tab-notas"),V=document.getElementById("tab-listas"),Q=document.getElementById("tab-links"),D=document.querySelectorAll(".tab-btn"),H=document.getElementById("notas-list"),f=document.getElementById("listas-container"),P=document.getElementById("links-list"),W=document.getElementById("nota-titulo"),X=document.getElementById("add-nota"),g=document.getElementById("nova-lista-nome"),S=document.getElementById("criar-lista-btn"),F=document.getElementById("link-titulo"),U=document.getElementById("link-url"),Y=document.getElementById("add-link"),B=document.getElementById("nota-modal"),C=document.getElementById("nota-modal-titulo"),j=document.getElementById("nota-modal-conteudo"),Z=document.getElementById("nota-modal-close"),I=document.getElementById("nota-modal-save"),tt=document.getElementById("nota-modal-delete"),r=document.getElementById("delete-confirm-modal"),et=document.getElementById("delete-cancel-btn"),$=document.getElementById("delete-confirm-btn"),at=document.getElementById("toast-container"),c=document.getElementById("list-type-modal"),O=document.getElementById("list-type-cancel"),st=document.querySelectorAll(".list-type-btn");let y=null,v=null,L=null;function u(e,t="success"){const a=document.createElement("div");let s,i,n;t==="success"?(s="bg-green-600",i="border-green-500",n="fa-check-circle"):t==="error"?(s="bg-red-700",i="border-red-500",n="fa-exclamation-triangle"):(s="bg-blue-600",i="border-blue-500",n="fa-info-circle"),a.className=`${s} border-2 ${i} text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-slide-in-right font-medium z-[200] min-w-[300px] max-w-md`,a.style.zIndex="200",a.innerHTML=`
      <i class="fas ${n} text-lg"></i>
      <span class="flex-1">${m(e)}</span>
    `,at.appendChild(a),setTimeout(()=>{a.classList.add("animate-slide-out-right"),setTimeout(()=>a.remove(),300)},t==="error"?5e3:3e3)}function M(e,t,a,s){t?(e.disabled=!0,a.classList.add("hidden"),s.classList.remove("hidden")):(e.disabled=!1,a.classList.remove("hidden"),s.classList.add("hidden"))}function R(e){D.forEach(t=>{const a=t.dataset.tab===e;t.classList.toggle("bg-blue-600",a),t.classList.toggle("text-white",a),t.classList.toggle("text-gray-400",!a),t.classList.toggle("hover:bg-[#222222]",!a)}),G.classList.toggle("hidden",e!=="notas"),V.classList.toggle("hidden",e!=="listas"),Q.classList.toggle("hidden",e!=="links"),e==="listas"&&p(),e==="links"&&A()}D.forEach(e=>{e.addEventListener("click",()=>R(e.dataset.tab))});function m(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}function T(){const e=o.getNotes();H.innerHTML=e.length===0?'<p class="text-gray-400 text-sm">Nenhuma nota. Clique em "Nova nota" para criar.</p>':e.map(t=>`
          <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#333] transition-colors cursor-pointer" data-note-id="${t.id}">
            <h3 class="font-semibold text-white mb-1">${m(t.title||"Sem título")}</h3>
            <p class="text-gray-400 text-sm line-clamp-2">${m((t.content||"").slice(0,120))}${(t.content||"").length>120?"…":""}</p>
          </div>
        `).join("")}H.addEventListener("click",e=>{const t=e.target.closest("[data-note-id]");t&&N(t.dataset.noteId)});function N(e){y=e;let a=o.getNotes().find(s=>s.id===e);if(!a&&b){const i=o.getLists().find(n=>n.id===b);if(i){const n=i.items.find(l=>l.id===x&&l.type==="note");n&&(a=o.saveNote({id:n.id,title:n.title||"",content:n.content||""}))}}a?(C.value=a.title||"",j.value=a.content||""):(C.value="",j.value=""),B.classList.remove("hidden"),B.classList.add("flex"),C.focus()}function z(){B.classList.add("hidden"),B.classList.remove("flex"),y=null}X.addEventListener("click",()=>{const e=W.value.trim(),t=o.saveNote({title:e||"Nova nota",content:""});W.value="",T(),N(t.id),d&&d.saveNote({id:t.id,title:t.title||"",content:t.content||""}).then(()=>{u("Nota registrada na planilha!","success")}).catch(a=>{console.warn("Falha ao enviar nota para a planilha:",a)})}),Z.addEventListener("click",z),I.addEventListener("click",async()=>{if(y==null)return;const e=I.querySelector(".save-text"),t=I.querySelector(".save-spinner");M(I,!0,e,t);try{const a=o.saveNote({id:y,title:C.value.trim(),content:j.value.trim()});if(b&&x){const s=o.getLists(),i=s.find(n=>n.id===b);if(i){const n=i.items.find(l=>l.id===x);n&&n.type==="note"&&(n.title=a.title,n.content=a.content,o.saveLists(s))}}if(d)try{await d.saveNote({id:a.id,title:a.title||"",content:a.content||""}),u("Nota salva e atualizada na planilha!","success")}catch(s){console.warn("Falha ao atualizar nota na planilha:",s),u("Nota salva localmente, mas não foi possível atualizar na planilha","error")}else u("Nota salva!","success");T(),b&&p(),z(),x=null,b=null}finally{M(I,!1,e,t)}}),tt.addEventListener("click",()=>{y!=null&&(v=y,r.classList.remove("hidden"),r.classList.add("flex"))}),et.addEventListener("click",()=>{r.classList.add("hidden"),r.classList.remove("flex"),v=null}),r.addEventListener("click",e=>{e.target===r&&(r.classList.add("hidden"),r.classList.remove("flex"),v=null)}),$.addEventListener("click",async()=>{if(v==null)return;const e=$.querySelector(".delete-text"),t=$.querySelector(".delete-spinner");M($,!0,e,t);try{if(d)try{await d.deleteNote(v)}catch(a){console.warn("Falha ao remover nota da planilha:",a)}o.deleteNote(v),u("Nota excluída com sucesso!","success"),T(),z(),r.classList.add("hidden"),r.classList.remove("flex"),v=null}catch{u("Erro ao excluir nota","error")}finally{M($,!1,e,t)}});let x=null,b=null;function p(){const e=o.getLists();f.innerHTML=e.map(t=>{const a=t.items||[];return`
        <div class="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4 mb-4">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-semibold text-white flex items-center gap-2">
              <i class="fas fa-list-ul text-blue-400"></i>
              ${m(t.name)}
            </h3>
            ${t.isDefault?"":`
              <button type="button" class="delete-list-btn text-red-400 hover:text-red-300 p-1" data-list-id="${t.id}" title="Excluir lista">
                <i class="fas fa-trash text-sm"></i>
              </button>
            `}
          </div>
          <ul class="space-y-2 mb-3" data-list-id="${t.id}">
            ${a.length===0?'<li class="text-gray-500 text-sm">Nenhum item.</li>':a.map(s=>{const n=t.listType==="tasks";return s.type==="note"?`
                  <li class="flex items-start gap-2 group p-2 rounded-lg hover:bg-[#222222] transition-colors">
                    ${n?`
                      <button type="button" class="list-item-check w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${s.done?"bg-green-600 border-green-500 text-white":"border-gray-500 text-gray-400 hover:border-green-500"}" data-list-id="${t.id}" data-item-id="${s.id}" title="${s.done?"Desmarcar":"Marcar"}">
                        ${s.done?'<i class="fas fa-check text-xs"></i>':""}
                      </button>
                    `:'<div class="w-6"></div>'}
                    <div class="flex-1 min-w-0 cursor-pointer list-note-item" data-list-id="${t.id}" data-item-id="${s.id}">
                      <div class="font-medium ${n&&s.done?"text-gray-500 line-through":"text-white"}">${m(s.title||"Sem título")}</div>
                      <div class="text-sm text-gray-400 line-clamp-2">${m((s.content||"").slice(0,100))}${(s.content||"").length>100?"…":""}</div>
                    </div>
                    <button type="button" class="list-item-remove text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-300 p-1" data-list-id="${t.id}" data-item-id="${s.id}" title="Remover"><i class="fas fa-trash text-sm"></i></button>
                  </li>
                `:`
                  <li class="flex items-center gap-2 group">
                    ${n?`
                      <button type="button" class="list-item-check w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${s.done?"bg-green-600 border-green-500 text-white":"border-gray-500 text-gray-400 hover:border-green-500"}" data-list-id="${t.id}" data-item-id="${s.id}" title="${s.done?"Desmarcar":"Marcar"}">
                        ${s.done?'<i class="fas fa-check text-xs"></i>':""}
                      </button>
                    `:""}
                    <span class="flex-1 ${n&&s.done?"text-gray-500 line-through":"text-white"}">${m(s.text||"")}</span>
                    <button type="button" class="list-item-remove text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-300 p-1" data-list-id="${t.id}" data-item-id="${s.id}" title="Remover"><i class="fas fa-trash text-sm"></i></button>
                  </li>
                `}).join("")}
          </ul>
          <div class="flex gap-2">
            <input type="text" class="list-item-input flex-1 px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400" placeholder="${t.listType==="notes"?'Digite "nota:" seguido do título...':"Adicionar item ou nota..."}" data-list-id="${t.id}" />
            <button type="button" class="list-item-add px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm" data-list-id="${t.id}">Adicionar</button>
          </div>
        </div>
      `}).join(""),f.querySelectorAll(".list-item-check").forEach(t=>{t.addEventListener("click",()=>{o.toggleListItem(t.dataset.listId,t.dataset.itemId),p()})}),f.querySelectorAll(".list-item-remove").forEach(t=>{t.addEventListener("click",()=>{o.removeListItem(t.dataset.listId,t.dataset.itemId),p()})}),f.querySelectorAll(".list-item-add").forEach(t=>{t.addEventListener("click",()=>{var h;const a=f.querySelector(`.list-item-input[data-list-id="${t.dataset.listId}"]`),s=(h=a==null?void 0:a.value)==null?void 0:h.trim();if(!s)return;const i=t.dataset.listId,n=o.getLists().find(w=>w.id===i);if((n==null?void 0:n.listType)==="notes"){const w=s.startsWith("nota:")||s.startsWith("note:")?s.substring(s.indexOf(":")+1).trim()||"Nova nota":s,k=o.saveNote({title:w,content:""}),E=o.addNoteToList(i,{id:k.id,title:k.title,content:k.content});a&&(a.value=""),p(),N(k.id),x=E.id,b=i}else{const w=s.toLowerCase();if(w.startsWith("nota:")||w.startsWith("note:")){const k=s.substring(s.indexOf(":")+1).trim()||"Nova nota",E=o.saveNote({title:k,content:""}),nt=o.addNoteToList(i,{id:E.id,title:E.title,content:E.content});a&&(a.value=""),p(),N(E.id),x=nt.id,b=i}else o.addListItem(i,s),a&&(a.value=""),p()}})}),f.querySelectorAll(".list-item-input").forEach(t=>{t.addEventListener("keydown",a=>{if(a.key==="Enter"){const s=f.querySelector(`.list-item-add[data-list-id="${t.dataset.listId}"]`);s==null||s.click()}})}),f.querySelectorAll(".list-note-item").forEach(t=>{t.addEventListener("click",()=>{var l;const a=t.dataset.itemId,s=t.dataset.listId,i=o.getLists().find(h=>h.id===s),n=(l=i==null?void 0:i.items)==null?void 0:l.find(h=>h.id===a&&h.type==="note");n&&(x=n.id,b=s,N(n.id))})}),f.querySelectorAll(".delete-list-btn").forEach(t=>{t.addEventListener("click",()=>{var s;const a=t.dataset.listId;confirm(`Tem certeza que deseja excluir a lista "${(s=o.getLists().find(i=>i.id===a))==null?void 0:s.name}"?`)&&(o.deleteList(a),p(),u("Lista excluída!","success"))})})}S&&S.addEventListener("click",()=>{var t;const e=(t=g==null?void 0:g.value)==null?void 0:t.trim();if(!e){u("Digite um nome para a lista","error");return}L=e,c.classList.remove("hidden"),c.classList.add("flex")}),st.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.type;if(L)try{const a=o.createList(L,t);g&&(g.value=""),p(),u("Lista criada!","success"),c.classList.add("hidden"),c.classList.remove("flex"),L=null}catch(a){console.error("Erro ao criar lista:",a),u("Erro ao criar lista","error")}})}),O&&O.addEventListener("click",()=>{c.classList.add("hidden"),c.classList.remove("flex"),L=null}),c.addEventListener("click",e=>{e.target===c&&(c.classList.add("hidden"),c.classList.remove("flex"),L=null)}),g&&g.addEventListener("keydown",e=>{e.key==="Enter"&&S&&S.click()});function A(){const e=o.getLinks();P.innerHTML=e.length===0?'<p class="text-gray-400 text-sm">Nenhum link. Adicione acima.</p>':e.map(t=>`
          <div class="flex items-center justify-between gap-2 p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#333] group">
            <a href="${m(t.url)}" target="_blank" rel="noopener noreferrer" class="flex-1 min-w-0 text-white hover:text-blue-400 truncate" title="${m(t.url)}">
              <i class="fas fa-external-link-alt text-gray-500 mr-2"></i>${m(t.title||t.url)}
            </a>
            <button type="button" class="link-delete text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-300 p-1" data-id="${t.id}" title="Excluir"><i class="fas fa-trash text-sm"></i></button>
          </div>
        `).join(""),P.querySelectorAll(".link-delete").forEach(t=>{t.addEventListener("click",()=>{o.deleteLink(t.dataset.id),A()})})}Y.addEventListener("click",()=>{const e=F.value.trim(),t=U.value.trim();t&&(o.saveLink({title:e||t,url:t}),F.value="",U.value="",A())});async function it(){if(d)try{const e=await d.loadNotes(),t=o.getNotes(),a=new Map;e.forEach(i=>{i.id&&a.set(i.id,i)});const s=t.filter(i=>a.has(i.id)?!0:(console.log(`🗑️ Removendo nota local que não existe mais na planilha: ${i.id}`),o.deleteNote(i.id),!1));e.forEach(i=>{if(!i.id)return;const n=t.find(l=>l.id===i.id);n?(n.title!==i.title||n.content!==i.content)&&(console.log(`🔄 Atualizando nota local com dados da planilha: ${i.id}`),o.saveNote({id:i.id,title:i.title||"",content:i.content||""})):(console.log(`➕ Adicionando nota da planilha: ${i.id}`),o.saveNote({id:i.id,title:i.title||"",content:i.content||""}))}),T(),console.log("✅ Sincronização de notas concluída")}catch(e){console.error("Erro ao sincronizar notas com a planilha:",e)}}it(),T(),p(),A(),R("notas")});
