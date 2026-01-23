import"./index-DB0L8H9H.js";import{S as H,L as N,G as Y}from"./Sidebar-89pMJdAp.js";class V{constructor(e={}){this.currentDate=e.currentDate||new Date,this.activeWeeks=new Set(e.activeWeeks||[]),this.inactiveWeeks=new Set(e.inactiveWeeks||[]),this.locale=e.locale||"pt-BR",this.firstDayOfWeek=e.firstDayOfWeek||0}isWeekActive(e){return this.activeWeeks.size>0?this.activeWeeks.has(e):this.inactiveWeeks.size>0?!this.inactiveWeeks.has(e):!0}getWeekNumber(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),o=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-o);const a=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t-a)/864e5+1)/7)}getFirstDayOfMonth(e,t){const o=new Date(e,t,1),r=o.getDay()-this.firstDayOfWeek,n=r<0?r+7:r;return o.setDate(o.getDate()-n),o}getDaysInMonth(e,t){const o=[],a=this.getFirstDayOfMonth(e,t),r=new Date(a);r.setDate(a.getDate()+41);let n=new Date(a);for(;n<=r;){const v=this.getWeekNumber(n),s=n.getMonth()===t,c=this.isWeekActive(v);o.push({date:new Date(n),weekNumber:v,isCurrentMonth:s,isActive:c,isToday:this.isToday(n),isWeekend:n.getDay()===0||n.getDay()===6}),n.setDate(n.getDate()+1)}return o}isToday(e){const t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}formatDate(e,t="yyyy-MM-dd"){const o=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return t.replace("yyyy",o).replace("MM",a).replace("dd",r)}previousMonth(){return this.currentDate=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()-1,1),this.getDaysInMonth(this.currentDate.getFullYear(),this.currentDate.getMonth())}nextMonth(){return this.currentDate=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1,1),this.getDaysInMonth(this.currentDate.getFullYear(),this.currentDate.getMonth())}goToMonth(e,t){return this.currentDate=new Date(e,t,1),this.getDaysInMonth(e,t)}setActiveWeeks(e){this.activeWeeks=new Set(e)}setInactiveWeeks(e){this.inactiveWeeks=new Set(e)}}class U{constructor(e){this.storageService=e,this.events=new Map,this.listeners={create:[],update:[],delete:[],load:[]}}on(e,t){this.listeners[e]&&this.listeners[e].push(t)}off(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(o=>o!==t))}emit(e,t){this.listeners[e]&&this.listeners[e].forEach(o=>o(t))}async createEvent(e){console.log("➕ EventManager.createEvent - Dados recebidos:",{title:e.title,date:e.date,startTime:e.startTime,endTime:e.endTime,color:e.color});const t={id:e.id||this.generateId(),title:e.title||"",description:e.description||"",date:e.date,startTime:e.startTime||"",endTime:e.endTime||"",color:e.color||"#3b82f6",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};if(console.log("🆔 Novo evento criado com ID:",t.id),console.log("📝 Evento completo:",t),console.log("⏰ Horários salvos - Início:",t.startTime,"Fim:",t.endTime),this.events.has(t.id))throw console.error("❌ ERRO: Já existe um evento com o ID:",t.id),new Error(`Conflito de ID: já existe um evento com o ID ${t.id}`);this.events.set(t.id,t),console.log("✅ Evento adicionado ao mapa. Total de eventos:",this.events.size);const o=this.events.get(t.id);if(o?console.log("✅ Verificação: Evento no mapa tem horários - Início:",o.startTime,"Fim:",o.endTime):console.error("❌ ERRO: Evento não foi adicionado ao mapa corretamente!"),this.storageService)try{console.log("💾 Salvando evento no storage service..."),await this.storageService.saveEvent(t),console.log("✅ Evento salvo no storage service com sucesso")}catch(a){throw console.error("❌ Erro ao salvar evento no storage service:",a),this.events.delete(t.id),a}return this.emit("create",t),console.log('📢 Evento "create" emitido'),t}async updateEvent(e,t){const o=this.events.get(e);if(!o)throw new Error("Evento não encontrado");const a={...t,startTime:t.startTime!==void 0?t.startTime||"":o.startTime,endTime:t.endTime!==void 0?t.endTime||"":o.endTime},r={...o,...a,updatedAt:new Date().toISOString()};if(console.log("🔄 EventManager.updateEvent - ID:",e,"Updates:",a),this.events.set(e,r),this.storageService)try{await this.storageService.updateEvent(r)}catch(n){throw console.error("Erro ao atualizar evento:",n),this.events.set(e,o),n}return this.emit("update",r),r}async deleteEvent(e){const t=this.events.get(e);if(!t)throw new Error("Evento não encontrado");if(this.events.delete(e),this.storageService)try{await this.storageService.deleteEvent(e)}catch(o){throw console.error("Erro ao excluir evento:",o),this.events.set(e,t),o}return this.emit("delete",t),t}getEventsForDate(e){const t=this.formatDate(e);return Array.from(this.events.values()).filter(o=>{let a;if(typeof o.date=="string"){const[n,v,s]=o.date.split("-").map(Number);a=new Date(n,v-1,s)}else a=new Date(o.date);return this.formatDate(a)===t})}getEventsForRange(e,t){return Array.from(this.events.values()).filter(o=>{const a=new Date(o.date);return a>=e&&a<=t})}async loadEvents(){if(this.storageService)try{console.log("📥 Carregando eventos do storage...");const e=await this.storageService.loadEvents();console.log(`📥 ${e.length} evento(s) carregado(s) do storage`);const t=new Map(this.events),o=new Map;e.forEach(r=>{o.set(r.id,r);const n=t.get(r.id);if(n&&n.updatedAt){const v=new Date(n.updatedAt).getTime(),c=Date.now()-v;if(c<2e3){console.log(`⚠️ Preservando evento local (atualizado há ${c}ms):`,n.id),this.events.set(r.id,n);return}}this.events.set(r.id,r)});const a=[];return this.events.forEach((r,n)=>{if(!o.has(n))if(r.createdAt){const v=new Date(r.createdAt).getTime();Date.now()-v>5e3&&a.push(n)}else a.push(n)}),a.forEach(r=>{console.log("🗑️ Removendo evento que não existe mais no storage:",r),this.events.delete(r)}),console.log(`✅ Total de eventos após merge: ${this.events.size}`),this.emit("load",Array.from(this.events.values())),Array.from(this.events.values())}catch(e){throw console.error("Erro ao carregar eventos:",e),e}return[]}getAllEvents(){return Array.from(this.events.values())}getEventById(e){return this.events.get(e)}generateId(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}formatDate(e){const t=new Date(e),o=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${o}-${a}-${r}`}parseLocalDate(e){const[t,o,a]=e.split("-").map(Number);return new Date(t,o-1,a)}}class G{constructor(){this.filters={dateRange:null,search:"",colors:[],showInactiveWeeks:!1}}setDateRange(e,t){this.filters.dateRange=e&&t?{startDate:e,endDate:t}:null}setSearch(e){this.filters.search=e||""}setColors(e){this.filters.colors=Array.isArray(e)?e:[]}setShowInactiveWeeks(e){this.filters.showInactiveWeeks=e}filterEvents(e){let t=[...e];if(this.filters.dateRange){const{startDate:o,endDate:a}=this.filters.dateRange;t=t.filter(r=>{const n=new Date(r.date);return n>=o&&n<=a})}if(this.filters.search){const o=this.filters.search.toLowerCase();t=t.filter(a=>a.title.toLowerCase().includes(o)||a.description&&a.description.toLowerCase().includes(o))}return this.filters.colors.length>0&&(t=t.filter(o=>this.filters.colors.includes(o.color))),t}filterDays(e){return this.filters.showInactiveWeeks?e:e.filter(t=>t.isActive)}clear(){this.filters={dateRange:null,search:"",colors:[],showInactiveWeeks:!1}}getFilters(){return{...this.filters}}}class Q{constructor(e,t={}){if(this.container=typeof e=="string"?document.querySelector(e):e,!this.container)throw new Error("Container não encontrado");this.options={storageService:t.storageService||null,activeWeeks:t.activeWeeks||[],inactiveWeeks:t.inactiveWeeks||[],locale:t.locale||"pt-BR",firstDayOfWeek:t.firstDayOfWeek||0,...t},this.core=new V({activeWeeks:this.options.activeWeeks,inactiveWeeks:this.options.inactiveWeeks,locale:this.options.locale,firstDayOfWeek:this.options.firstDayOfWeek}),this.storageService=this.options.storageService,this.eventManager=new U(this.options.storageService),this.filters=new G,this.currentDays=[],this.selectedDate=null,this.selectedEvent=null,this.init()}async init(){if(this.options.storageService)try{await this.eventManager.loadEvents()}catch(e){console.error("Erro ao carregar eventos:",e)}this.render(),this.setupEventListeners()}render(){const e=this.core.getDaysInMonth(this.core.currentDate.getFullYear(),this.core.currentDate.getMonth());this.currentDays=this.filters.filterDays(e);const t=this.getMonthName(this.core.currentDate.getMonth()),o=this.core.currentDate.getFullYear();this.container.innerHTML=`
      <div class="calendar-wrapper bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden border border-[#2a2a2a]">
        <!-- Header com filtros -->
        <div class="calendar-header bg-[#1a1a1a] border-b border-[#2a2a2a] text-white p-3 sm:p-4 md:p-6">
          <div class="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
            <h2 class="text-lg sm:text-xl md:text-2xl font-display font-bold text-white">${t} ${o}</h2>
            <div class="flex items-center gap-2 sm:gap-3">
              <div class="flex gap-1 sm:gap-2">
                <button class="calendar-nav-btn px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-[#222222] hover:bg-[#2a2a2a] rounded-lg transition-colors text-white cursor-pointer text-xs sm:text-sm" data-action="prev-month">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button class="calendar-nav-btn px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-[#222222] hover:bg-[#2a2a2a] rounded-lg transition-colors text-white cursor-pointer text-xs sm:text-sm" data-action="today">
                  Hoje
                </button>
                <button class="calendar-nav-btn px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-[#222222] hover:bg-[#2a2a2a] rounded-lg transition-colors text-white cursor-pointer text-xs sm:text-sm" data-action="next-month">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Filtros -->
          <div class="filters-container">
            <!-- Mobile: Busca e botão de filtro -->
            <div class="md:hidden space-y-2">
              <div class="filter-group">
                <label class="block text-xs sm:text-sm font-medium mb-1 text-gray-300">Buscar</label>
                <input 
                  type="text" 
                  class="calendar-search-input w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-[#222222] text-white text-sm placeholder-gray-400 border border-[#2a2a2a] focus:border-primary-500 focus:ring-2 focus:ring-primary-500" 
                  placeholder="Buscar eventos..."
                  data-filter="search"
                />
              </div>
              <button 
                type="button"
                class="w-full px-3 py-2 bg-[#222222] hover:bg-[#2a2a2a] rounded-lg transition-colors text-white cursor-pointer flex items-center justify-center gap-2 text-sm"
                data-action="toggle-filters"
                id="toggle-filters-btn"
              >
                <i class="fas fa-filter"></i>
                <span>Filtros</span>
                <i class="fas fa-chevron-down" id="filters-chevron"></i>
              </button>
              <!-- Filtros de data (ocultos por padrão no mobile) -->
              <div class="hidden" id="mobile-date-filters">
                <div class="filter-group">
                  <label class="block text-xs sm:text-sm font-medium mb-1 text-gray-300">Data Inicial</label>
                  <input 
                    type="date" 
                    class="calendar-date-input w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-[#222222] text-white text-sm border border-[#2a2a2a] focus:border-primary-500 focus:ring-2 focus:ring-primary-500" 
                    data-filter="start-date"
                  />
                </div>
                <div class="filter-group">
                  <label class="block text-xs sm:text-sm font-medium mb-1 text-gray-300">Data Final</label>
                  <input 
                    type="date" 
                    class="calendar-date-input w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-[#222222] text-white text-sm border border-[#2a2a2a] focus:border-primary-500 focus:ring-2 focus:ring-primary-500" 
                    data-filter="end-date"
                  />
                </div>
              </div>
            </div>
            
            <!-- Desktop/Tablet: Todos os filtros visíveis -->
            <div class="hidden md:grid md:grid-cols-3 gap-4">
              <div class="filter-group">
                <label class="block text-sm font-medium mb-1 text-gray-300">Buscar</label>
                <input 
                  type="text" 
                  class="calendar-search-input w-full px-3 py-2 rounded-lg bg-[#222222] text-white placeholder-gray-400 border border-[#2a2a2a] focus:border-primary-500 focus:ring-2 focus:ring-primary-500" 
                  placeholder="Buscar eventos..."
                  data-filter="search"
                />
              </div>
              <div class="filter-group">
                <label class="block text-sm font-medium mb-1 text-gray-300">Data Inicial</label>
                <input 
                  type="date" 
                  class="calendar-date-input w-full px-3 py-2 rounded-lg bg-[#222222] text-white border border-[#2a2a2a] focus:border-primary-500 focus:ring-2 focus:ring-primary-500" 
                  data-filter="start-date"
                />
              </div>
              <div class="filter-group">
                <label class="block text-sm font-medium mb-1 text-gray-300">Data Final</label>
                <input 
                  type="date" 
                  class="calendar-date-input w-full px-3 py-2 rounded-lg bg-[#222222] text-white border border-[#2a2a2a] focus:border-primary-500 focus:ring-2 focus:ring-primary-500" 
                  data-filter="end-date"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Calendário -->
        <div class="calendar-body p-2 sm:p-3 md:p-6 bg-[#121212]">
          <!-- Dias da semana -->
          <div class="calendar-weekdays grid grid-cols-7 gap-0.5 sm:gap-1 md:gap-2 mb-1 sm:mb-2">
            ${this.getWeekdayNames().map(a=>`
              <div class="text-center text-xs sm:text-sm font-semibold text-gray-400 py-1 sm:py-2">
                ${a}
              </div>
            `).join("")}
          </div>

          <!-- Dias do mês -->
          <div class="calendar-days grid grid-cols-7 gap-0.5 sm:gap-1 md:gap-2">
            ${this.currentDays.map(a=>this.renderDay(a)).join("")}
          </div>
        </div>
      </div>

      <!-- Modal de Confirmação/Alerta -->
      <div id="confirm-modal" class="event-modal hidden fixed inset-0 bg-black/70 flex items-center justify-center z-[60]">
        <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-display font-bold text-white" id="confirm-modal-title">
              Confirmação
            </h3>
            <button class="text-gray-400 hover:text-white cursor-pointer" data-action="close-confirm-modal">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <p class="text-gray-300 mb-6" id="confirm-modal-message">
            Tem certeza que deseja continuar?
          </p>
          <div class="flex gap-3 justify-end">
            <button 
              type="button" 
              class="bg-[#222222] hover:bg-[#2a2a2a] text-gray-200 font-semibold py-2 px-6 rounded-lg transition-colors cursor-pointer"
              data-action="confirm-cancel"
              id="confirm-cancel-btn"
            >
              Cancelar
            </button>
            <button 
              type="button" 
              class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors cursor-pointer"
              data-action="confirm-ok"
              id="confirm-ok-btn"
            >
              OK
            </button>
          </div>
        </div>
      </div>

      <!-- Modal de Listagem de Eventos -->
      <div id="events-list-modal" class="event-modal hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div class="event-modal-content bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl p-4 sm:p-5 md:p-6 max-w-md w-full mx-4">
          <div class="flex items-center justify-between mb-3 sm:mb-4">
            <h3 class="text-base sm:text-lg md:text-xl font-display font-bold text-white break-words" id="events-list-title">
              Eventos do Dia
            </h3>
              <button class="modal-close text-gray-400 hover:text-white cursor-pointer" data-action="close-events-list">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div id="events-list-content" class="space-y-2 max-h-[60vh] overflow-y-auto">
            <!-- Eventos serão inseridos aqui -->
          </div>
          <div class="mt-4 flex justify-between gap-2">
            <button 
              type="button" 
              class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer"
              data-action="new-event-from-list"
              id="new-event-from-list-btn"
            >
              Novo Evento
            </button>
            <button 
              type="button" 
              class="bg-[#222222] hover:bg-[#2a2a2a] text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer"
              data-action="close-events-list"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>

      <!-- Modal de Visualização de Evento -->
      <div id="event-view-modal" class="event-modal hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div class="event-modal-content bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-display font-bold text-white">Detalhes do Evento</h3>
            <button class="modal-close text-gray-400 hover:text-white cursor-pointer" data-action="close-view-modal">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-1">Título</label>
              <p class="text-white text-lg font-semibold" id="view-event-title"></p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-1">Descrição</label>
              <p class="text-white whitespace-pre-wrap" id="view-event-description"></p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-1">Hora Início</label>
                <p class="text-white font-medium" id="view-event-start-time">-</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-1">Hora Fim</label>
                <p class="text-white font-medium" id="view-event-end-time">-</p>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-1">Data</label>
              <p class="text-white font-medium" id="view-event-date"></p>
            </div>
            <input type="hidden" id="view-event-id" />
            <input type="hidden" id="view-event-color" />
          </div>
          <!-- Botão Marcar como Feito (apenas para eventos azuis) -->
          <div id="mark-as-done-container" class="mt-4 hidden">
            <button 
              type="button"
              class="w-full border-2 border-green-600 bg-transparent hover:bg-green-600/10 text-green-600 font-semibold py-2 px-4 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              data-action="mark-as-done"
              id="mark-as-done-btn"
            >
              <span id="mark-as-done-icon" class="flex items-center">
                <i class="fas fa-check-circle"></i>
              </span>
              <span id="mark-as-done-spinner" class="hidden flex items-center">
                <svg class="animate-spin h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              <span id="mark-as-done-text">Marcar como Feito</span>
            </button>
          </div>
          <div class="mt-6 flex gap-3">
            <button 
              type="button"
              class="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
              data-action="delete-event-from-view"
              id="delete-event-from-view-btn"
            >
              <i class="fas fa-trash"></i>
              Excluir
            </button>
            <button 
              type="button"
              class="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer"
              data-action="edit-event-from-view"
              id="edit-event-from-view-btn"
            >
              Editar
            </button>
          </div>
        </div>
      </div>

      <!-- Modal de Evento -->
      <div id="event-modal" class="event-modal hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div class="event-modal-content bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-display font-bold text-white" id="modal-title">
              ${this.selectedEvent?"Editar Evento":"Novo Evento"}
            </h3>
            <div class="flex items-center gap-2">
              <button class="modal-close text-gray-400 hover:text-white cursor-pointer" data-action="close-modal">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          <form id="event-form" class="space-y-4">
            <input type="hidden" id="event-id" />
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-1">Título</label>
              <input 
                type="text" 
                id="event-title" 
                required
                class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-1">Descrição</label>
              <textarea 
                id="event-description" 
                rows="3"
                class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400"
              ></textarea>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-1">Hora Início</label>
                <input 
                  type="time" 
                  id="event-start-time" 
                  class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-1">Hora Fim</label>
                <input 
                  type="time" 
                  id="event-end-time" 
                  class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Cor</label>
              <div class="color-picker-container">
                <div class="grid grid-cols-6 gap-2 mb-2">
                  <button 
                    type="button"
                    class="color-option w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all cursor-pointer"
                    data-color="#ef4444"
                    style="background-color: #ef4444;"
                    title="Vermelho"
                  ></button>
                  <button 
                    type="button"
                    class="color-option w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all cursor-pointer"
                    data-color="#ff8e4d"
                    style="background-color: #ff8e4d;"
                    title="Laranja"
                  ></button>
                  <button 
                    type="button"
                    class="color-option w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all cursor-pointer"
                    data-color="#eab308"
                    style="background-color: #eab308;"
                    title="Amarelo"
                  ></button>
                  <button 
                    type="button"
                    class="color-option w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all cursor-pointer"
                    data-color="#10b981"
                    style="background-color: #10b981;"
                    title="Verde"
                  ></button>
                  <button 
                    type="button"
                    class="color-option w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all cursor-pointer"
                    data-color="#3b82f6"
                    style="background-color: #3b82f6;"
                    title="Azul"
                  ></button>
                  <button 
                    type="button"
                    class="color-option-custom w-10 h-10 rounded-lg border-2 border-dashed border-gray-400 hover:border-gray-500 transition-all cursor-pointer flex items-center justify-center"
                    style="background: linear-gradient(135deg, #ef4444 0%, #f59e0b 25%, #10b981 50%, #3b82f6 75%, #a855f7 100%);"
                    data-action="open-custom-color"
                    title="Cor Personalizada"
                  >
                    <svg class="w-5 h-5 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                    </svg>
                  </button>
                </div>
                <div id="custom-color-container" class="hidden">
                  <label class="block text-sm font-medium text-gray-300 mb-1">Cor Personalizada</label>
                  <input 
                    type="color" 
                    id="event-color-custom" 
                    value="#ff8e4d"
                    class="w-full h-10 rounded-lg cursor-pointer bg-[#222222] border border-[#2a2a2a]"
                  />
                </div>
                <input 
                  type="hidden" 
                  id="event-color" 
                  value="#ff8e4d"
                />
              </div>
            </div>
            <div class="flex gap-2 pt-4">
              <button 
                type="button" 
                id="submit-event-btn"
                data-action="save-event"
                class="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
              >
                <span id="submit-btn-text">${this.selectedEvent?"Atualizar":"Criar"}</span>
                <span id="submit-btn-spinner" class="hidden">
                  <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
              </button>
              <button 
                type="button" 
                class="bg-[#222222] hover:bg-[#2a2a2a] text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                data-action="close-modal"
                id="cancel-event-btn"
              >
                Cancelar
              </button>
            </div>
            <div id="save-status" class="mt-2 text-sm text-center hidden"></div>
          </form>
        </div>
      </div>
    `}renderDay(e){new Date(Date.UTC(e.date.getFullYear(),e.date.getMonth(),e.date.getDate()));const t=new Date(e.date.getFullYear(),e.date.getMonth(),e.date.getDate()),o=this.eventManager.getEventsForDate(t),a=this.filters.filterEvents(o),r=this.core.formatDate(e.date),n=this.selectedDate&&this.core.formatDate(this.selectedDate)===r;let v="calendar-day p-0.5 sm:p-1 md:p-2 lg:p-3 rounded sm:rounded-lg border border-[#2a2a2a] sm:border-2 transition-all cursor-pointer min-h-[70px] sm:min-h-[85px] md:min-h-[100px] lg:min-h-[120px] xl:min-h-[140px] sm:aspect-square flex flex-col overflow-hidden ";return e.isCurrentMonth||(v+="opacity-30 "),e.isActive?n?v+="bg-primary-900/30 border-primary-500 ":e.isToday?v+="bg-transparent border-red-500 border-2 sm:border-3 ":v+="bg-[#1a1a1a] border-[#2a2a2a] hover:border-primary-500 hover:bg-gray-750 ":v+="bg-[#1a1a1a] border-[#2a2a2a] cursor-not-allowed ",e.isWeekend&&e.isActive&&(v+="bg-[#1a1a1a]/50 "),`
      <div 
        class="${v} flex flex-col overflow-hidden"
        data-date="${r}"
        data-active="${e.isActive}"
        data-action="select-day"
      >
        <div class="flex items-center justify-between mb-0.5 sm:mb-1 md:mb-2 relative flex-shrink-0">
          <span class="text-[10px] sm:text-xs md:text-sm font-medium ${e.isToday?"text-red-400 font-bold":"text-gray-300"}">
            ${e.date.getDate()}
          </span>
          ${a.length>2?`
            <div 
              class="hidden md:flex absolute top-0 right-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#222222] text-gray-200 text-[10px] lg:text-xs font-bold items-center justify-center cursor-pointer hover:bg-[#2a2a2a] transition-colors"
              data-date="${r}"
              data-action="select-day"
              title="Ver todos os ${a.length} eventos"
            >
              +${a.length-2}
            </div>
          `:""}
          ${e.isActive?"":'<span class="text-[10px] sm:text-xs text-gray-600">Inativo</span>'}
        </div>
        ${a.length>0?`
          <!-- Mobile: mostra apenas bolinha com quantidade -->
          <div class="md:hidden flex items-center justify-center">
            <div 
              class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#222222] text-gray-200 text-[10px] sm:text-xs font-bold flex items-center justify-center cursor-pointer hover:bg-[#2a2a2a] transition-colors"
              data-date="${r}"
              data-action="select-day"
              title="Ver todos os ${a.length} evento(s)"
            >
              ${a.length}
            </div>
          </div>
          
          <!-- Desktop/Tablet: mostra eventos -->
          <div class="hidden md:flex flex-col flex-1 min-h-0 overflow-hidden">
            <div class="event-list space-y-0.5 sm:space-y-1 md:space-y-1.5 overflow-y-auto flex-1">
            ${a.map((s,c)=>{if(c<2){let g="";if(s.startTime){const l=String(s.startTime).trim().match(/(\d{1,2}):(\d{2})(?::\d{2})?/);if(l){const i=l[1].padStart(2,"0"),p=l[2];g=`${i}:${p}`}}const m=(s.title||"Sem título").trim(),u=g?`<span class="hidden lg:inline">${g} </span>${m}`:m;return`
                  <div 
                    class="event-item text-[9px] sm:text-[10px] md:text-xs px-0.5 sm:px-1 md:px-2 py-0.5 sm:py-1 md:py-1.5 rounded cursor-pointer truncate leading-tight"
                    style="background-color: ${s.color}30; color: ${s.color}; border-left: 2px solid ${s.color};"
                    data-event-id="${s.id}"
                    data-action="view-event"
                  >
                    ${u}
                  </div>
                `}return null}).filter(Boolean).join("")}
            </div>
          </div>
        `:""}
      </div>
    `}getWeekdayNames(){const e=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];return this.core.firstDayOfWeek===1?[...e.slice(1),e[0]]:e}getMonthName(e){return["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][e]}setupEventListeners(){this.container.addEventListener("click",async s=>{var u,d,l;const c=(u=s.target.closest("[data-action]"))==null?void 0:u.dataset.action,g=(d=s.target.closest("[data-date]"))==null?void 0:d.dataset.date;let m=(l=s.target.closest("[data-event-id]"))==null?void 0:l.dataset.eventId;if(!m&&(c==="edit-event-from-view"||c==="delete-event-from-view")){const i=this.container.querySelector("#view-event-id");i&&i.value&&(m=i.value)}if(c==="prev-month")this.core.previousMonth(),this.render();else if(c==="next-month")this.core.nextMonth(),this.render();else if(c==="today")this.core.currentDate=new Date,this.render();else if(c==="select-day"&&g){const[i,p,h]=g.split("-").map(Number),b=new Date(i,p-1,h);this.selectedDate=b;const S=this.eventManager.getEventsForDate(b),y=this.filters.filterEvents(S);y.length>1?await this.openEventsListModal(b,y):await this.openEventModal(null,b)}else if(c==="view-event"&&m){const i=this.eventManager.getEventById(m);i&&(this.closeEventsListModal(),await this.openEventViewModal(i))}else if(c==="edit-event-from-view"){if(!m){const i=this.container.querySelector("#view-event-id");i&&i.value&&(m=i.value)}if(m){const i=this.eventManager.getEventById(m);i?(console.log("✏️ Editando evento:",i),this.closeEventViewModal(),await new Promise(p=>setTimeout(p,150)),await this.openEventModal(i)):(console.error("❌ Evento não encontrado para edição:",m),await this.showAlert("Erro","Evento não encontrado"))}else console.error("❌ ID do evento não encontrado"),await this.showAlert("Erro","ID do evento não encontrado")}else if(c==="delete-event-from-view"&&m){if(this.eventManager.getEventById(m)&&(this.closeEventViewModal(),await new Promise(h=>setTimeout(h,200)),await this.showConfirm("Excluir Evento","Tem certeza que deseja excluir este evento?")))try{await this.eventManager.deleteEvent(m)}catch(h){await this.showAlert("Erro ao excluir evento",h.message)}}else if(c==="mark-as-done"){const i=this.container.querySelector("#view-event-id");if(!i||!i.value){await this.showAlert("Erro","ID do evento não encontrado");return}const p=i.value,h=this.eventManager.getEventById(p);if(!h){await this.showAlert("Erro","Evento não encontrado");return}if(!((h.color||"#3b82f6").toLowerCase()==="#3b82f6")){await this.showAlert("Aviso","Apenas eventos azuis podem ser marcados como feitos");return}const S=this.container.querySelector("#mark-as-done-btn"),y=this.container.querySelector("#mark-as-done-icon"),L=this.container.querySelector("#mark-as-done-spinner"),k=this.container.querySelector("#mark-as-done-text");S&&(S.disabled=!0,y&&y.classList.add("hidden"),L&&L.classList.remove("hidden"),k&&(k.textContent="Processando..."));try{let D="",w="";if(h.createdAt)try{const x=new Date(h.createdAt),A=x.getFullYear(),$=String(x.getMonth()+1).padStart(2,"0"),I=String(x.getDate()).padStart(2,"0");D=`${A}-${$}-${I}`;const q=String(x.getHours()).padStart(2,"0"),F=String(x.getMinutes()).padStart(2,"0");w=`${q}:${F}`}catch{const A=new Date,$=A.getFullYear(),I=String(A.getMonth()+1).padStart(2,"0"),q=String(A.getDate()).padStart(2,"0");D=`${$}-${I}-${q}`;const F=String(A.getHours()).padStart(2,"0"),W=String(A.getMinutes()).padStart(2,"0");w=`${F}:${W}`}else{const x=new Date,A=x.getFullYear(),$=String(x.getMonth()+1).padStart(2,"0"),I=String(x.getDate()).padStart(2,"0");D=`${A}-${$}-${I}`;const q=String(x.getHours()).padStart(2,"0"),F=String(x.getMinutes()).padStart(2,"0");w=`${q}:${F}`}const E=new Date,M=E.getFullYear(),C=String(E.getMonth()+1).padStart(2,"0"),B=String(E.getDate()).padStart(2,"0"),j=`${M}-${C}-${B}`,P=String(E.getHours()).padStart(2,"0"),z=String(E.getMinutes()).padStart(2,"0"),T=`${P}:${z}`;if(this.storageService){if(typeof this.storageService.updateAction=="function")await this.storageService.updateAction({id:h.id,title:h.title||"",description:h.description||"",createdDate:D,createdTime:w,finishedDate:j,finishedTime:T});else if(typeof this.storageService.saveAction=="function")await this.storageService.saveAction({title:h.title||"",description:h.description||"",createdDate:D,createdTime:w,finishedDate:j,finishedTime:T});else{await this.showAlert("Erro","Serviço de armazenamento não suporta salvar ações");return}await this.showAlert("Sucesso","Ação marcada como feita e atualizada na planilha!"),await this.updateMarkAsDoneButtonState(h.id),await new Promise(x=>setTimeout(x,500)),await this.eventManager.loadEvents(),this.render()}else await this.showAlert("Erro","Serviço de armazenamento não disponível")}catch(D){console.error("Erro ao marcar como feito:",D);const w=this.container.querySelector("#mark-as-done-btn"),E=this.container.querySelector("#mark-as-done-icon"),M=this.container.querySelector("#mark-as-done-spinner"),C=this.container.querySelector("#mark-as-done-text");w&&(w.disabled=!1,E&&E.classList.remove("hidden"),M&&M.classList.add("hidden"),C&&(C.textContent="Marcar como Feito"),w.classList.remove("bg-green-600","text-white"),w.classList.add("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10")),await this.showAlert("Erro",`Erro ao salvar ação: ${D.message}`)}}else if(c==="mark-as-done-from-list"&&m){const i=this.eventManager.getEventById(m);if(!i){await this.showAlert("Erro","Evento não encontrado");return}if(!((i.color||"#3b82f6").toLowerCase()==="#3b82f6")){await this.showAlert("Aviso","Apenas eventos azuis podem ser marcados como feitos");return}const h=this.container.querySelector("#events-list-content"),b=h==null?void 0:h.querySelector(`[data-event-id="${m}"]`),S=b==null?void 0:b.querySelector(".mark-as-done-list-btn"),y=b==null?void 0:b.querySelector(".mark-as-done-list-icon"),L=b==null?void 0:b.querySelector(".mark-as-done-list-spinner");if(!b){console.error("ListItem não encontrado para o evento:",m),await this.showAlert("Erro","Não foi possível encontrar o evento na lista");return}S&&(S.disabled=!0,y&&y.classList.add("hidden"),L&&L.classList.remove("hidden"));try{let k="",D="";if(i.createdAt)try{const T=new Date(i.createdAt),x=T.getFullYear(),A=String(T.getMonth()+1).padStart(2,"0"),$=String(T.getDate()).padStart(2,"0");k=`${x}-${A}-${$}`;const I=String(T.getHours()).padStart(2,"0"),q=String(T.getMinutes()).padStart(2,"0");D=`${I}:${q}`}catch{const x=new Date,A=x.getFullYear(),$=String(x.getMonth()+1).padStart(2,"0"),I=String(x.getDate()).padStart(2,"0");k=`${A}-${$}-${I}`;const q=String(x.getHours()).padStart(2,"0"),F=String(x.getMinutes()).padStart(2,"0");D=`${q}:${F}`}else{const T=new Date,x=T.getFullYear(),A=String(T.getMonth()+1).padStart(2,"0"),$=String(T.getDate()).padStart(2,"0");k=`${x}-${A}-${$}`;const I=String(T.getHours()).padStart(2,"0"),q=String(T.getMinutes()).padStart(2,"0");D=`${I}:${q}`}const w=new Date,E=w.getFullYear(),M=String(w.getMonth()+1).padStart(2,"0"),C=String(w.getDate()).padStart(2,"0"),B=`${E}-${M}-${C}`,j=String(w.getHours()).padStart(2,"0"),P=String(w.getMinutes()).padStart(2,"0"),z=`${j}:${P}`;if(this.storageService){if(typeof this.storageService.updateAction=="function")await this.storageService.updateAction({id:i.id,title:i.title||"",description:i.description||"",createdDate:k,createdTime:D,finishedDate:B,finishedTime:z});else if(typeof this.storageService.saveAction=="function")await this.storageService.saveAction({title:i.title||"",description:i.description||"",createdDate:k,createdTime:D,finishedDate:B,finishedTime:z});else{await this.showAlert("Erro","Serviço de armazenamento não suporta salvar ações");return}S&&(S.disabled=!0,y&&(y.classList.remove("hidden"),y.innerHTML='<i class="fas fa-check-circle text-sm"></i>'),L&&L.classList.add("hidden"),S.classList.remove("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),S.classList.add("bg-green-600","border-green-600","text-white")),await this.showAlert("Sucesso","Ação marcada como feita e atualizada na planilha!"),await this.updateMarkAsDoneListButtonState(m,b),await this.eventManager.loadEvents(),this.render()}else await this.showAlert("Erro","Serviço de armazenamento não disponível")}catch(k){console.error("Erro ao marcar como feito:",k),S&&(S.disabled=!1,y&&y.classList.remove("hidden"),L&&L.classList.add("hidden")),await this.showAlert("Erro",`Erro ao salvar ação: ${k.message}`)}}else if(c==="edit-event-from-list"&&m){const i=this.eventManager.getEventById(m);i&&(this.closeEventsListModal(),await this.openEventModal(i))}else if(c==="delete-event-from-list"&&m){const i=this.eventManager.getEventById(m);if(i&&(this.closeEventsListModal(),await this.showConfirm("Excluir Evento",`Tem certeza que deseja excluir o evento "${i.title||"Sem título"}"?`)))try{if(await this.eventManager.deleteEvent(m),(i.color||"#3b82f6").toLowerCase()==="#3b82f6"&&this.storageService&&typeof this.storageService.updateAction=="function")try{console.log("🔵 Evento azul excluído - ação também será removida")}catch(b){console.error("❌ Erro ao atualizar ação:",b)}await this.render(),await this.showAlert("Sucesso","Evento excluído com sucesso!")}catch(h){console.error("Erro ao excluir evento:",h),await this.showAlert("Erro",`Erro ao excluir evento: ${h.message}`)}}else if(c==="new-event-from-list"){const i=this.container.querySelector("#events-list-modal");i&&!i.classList.contains("hidden")&&this.selectedDate&&(this.closeEventsListModal(),await this.openEventModal(null,this.selectedDate))}else if(c==="close-modal")this.closeEventModal();else if(c==="close-view-modal")this.closeEventViewModal();else if(c==="close-events-list")this.closeEventsListModal();else if(c==="close-confirm-modal")if(this.confirmReject){const i=this.confirmReject;this.confirmReject=null,this.confirmResolve=null,this.closeConfirmModal(),i()}else this.closeConfirmModal();else if(c==="confirm-cancel")if(this.confirmReject){const i=this.confirmReject;this.confirmReject=null,this.confirmResolve=null,this.closeConfirmModal(),i()}else this.closeConfirmModal();else if(c==="confirm-ok")if(this.confirmResolve){const i=this.confirmResolve;this.confirmResolve=null,this.confirmReject=null,this.closeConfirmModal(),i()}else this.closeConfirmModal();else if(c==="delete-event")await this.deleteEvent();else if(c==="save-event")s.preventDefault(),s.stopPropagation(),await this.saveEvent();else if(c==="toggle-filters"){const i=this.container.querySelector("#mobile-date-filters"),p=this.container.querySelector("#filters-chevron");i&&(i.classList.toggle("hidden"),p&&(p.classList.toggle("fa-chevron-down"),p.classList.toggle("fa-chevron-up")))}});const e=this.container.querySelector("#submit-event-btn");e&&e.addEventListener("click",async s=>{s.preventDefault(),s.stopPropagation(),await this.saveEvent()});const t=this.container.querySelector("#event-form");t&&t.addEventListener("submit",async s=>{s.preventDefault(),s.stopPropagation(),await this.saveEvent()});const o=this.container.querySelector('[data-filter="search"]'),a=this.container.querySelector('[data-filter="start-date"]'),r=this.container.querySelector('[data-filter="end-date"]');if(o&&o.addEventListener("input",s=>{this.filters.setSearch(s.target.value),this.render()}),a&&r){const s=()=>{const c=a.value?new Date(a.value):null,g=r.value?new Date(r.value):null;c&&g&&(this.filters.setDateRange(c,g),this.render())};a.addEventListener("change",s),r.addEventListener("change",s)}this.eventManager.on("create",()=>this.render()),this.eventManager.on("update",()=>this.render()),this.eventManager.on("delete",()=>this.render()),this.container.addEventListener("click",s=>{const c=s.target.closest(".color-option"),g=s.target.closest(".color-option-custom"),m=this.container.querySelector("#custom-color-container"),u=this.container.querySelector("#event-color"),d=this.container.querySelector("#event-color-custom");if(c){const l=c.dataset.color;u&&(u.value=l),d&&(d.value=l),this.container.querySelectorAll(".color-option").forEach(i=>{i.classList.remove("ring-2","ring-offset-2","ring-primary-500"),i.classList.add("border-gray-300")}),c.classList.add("ring-2","ring-offset-2","ring-primary-500"),c.classList.remove("border-gray-300"),m&&m.classList.add("hidden")}else g&&(m&&(m.classList.remove("hidden"),d&&d.focus()),this.container.querySelectorAll(".color-option").forEach(l=>{l.classList.remove("ring-2","ring-offset-2","ring-primary-500"),l.classList.add("border-gray-300")}))});const n=this.container.querySelector("#event-color-custom");n&&n.addEventListener("input",s=>{const c=this.container.querySelector("#event-color");c&&(c.value=s.target.value)}),this.container.addEventListener("click",s=>{if(s.target.type==="time")if(s.target.showPicker&&typeof s.target.showPicker=="function"&&s.isTrusted)try{s.target.showPicker()}catch{s.target.focus()}else s.target.focus()}),this.timeInputBuffers=new WeakMap,this.timeInputTimeouts=new WeakMap;const v=s=>{s._quickEntryHandler&&s.removeEventListener("keydown",s._quickEntryHandler);const c=g=>{if(g.key>="0"&&g.key<="9"){g.preventDefault(),g.stopPropagation();let m=this.timeInputBuffers.get(s)||"";m+=g.key;const u=this.timeInputTimeouts.get(s);if(u&&clearTimeout(u),m.length===2){const d=parseInt(m);if(d>=0&&d<=23){const l=s.value||"00:00",[i,p]=l.split(":");s.value=`${String(d).padStart(2,"0")}:${p||"00"}`,s.dispatchEvent(new Event("input",{bubbles:!0})),s.dispatchEvent(new Event("change",{bubbles:!0})),this.timeInputBuffers.delete(s)}else m="",this.timeInputBuffers.delete(s)}else if(m.length===4){const d=parseInt(m.substring(0,2)),l=parseInt(m.substring(2,4));d>=0&&d<=23&&l>=0&&l<=59?(s.value=`${String(d).padStart(2,"0")}:${String(l).padStart(2,"0")}`,s.dispatchEvent(new Event("input",{bubbles:!0})),s.dispatchEvent(new Event("change",{bubbles:!0})),this.timeInputBuffers.delete(s),setTimeout(()=>s.blur(),100)):(m="",this.timeInputBuffers.delete(s))}else m.length>4&&(m=m.slice(-2));if(m){this.timeInputBuffers.set(s,m);const d=setTimeout(()=>{this.timeInputBuffers.delete(s),this.timeInputTimeouts.delete(s)},1500);this.timeInputTimeouts.set(s,d)}}else if(g.key==="Backspace"||g.key==="Delete"){this.timeInputBuffers.delete(s);const m=this.timeInputTimeouts.get(s);m&&(clearTimeout(m),this.timeInputTimeouts.delete(s))}};s._quickEntryHandler=c,s.addEventListener("keydown",c,!0)};this.setupTimeInputQuickEntry=v}async openEventModal(e=null,t=null){if(this.selectedEvent=e,t)if(typeof t=="string"){const[u,d,l]=t.split("-").map(Number);this.selectedDate=new Date(u,d-1,l)}else this.selectedDate=new Date(t.getFullYear(),t.getMonth(),t.getDate());else if(e&&e.date)if(typeof e.date=="string"){const[u,d,l]=e.date.split("-").map(Number);this.selectedDate=new Date(u,d-1,l)}else this.selectedDate=new Date(e.date);else this.selectedDate=new Date;const o=this.container.querySelector("#event-modal");this.container.querySelector("#event-form");const a=this.container.querySelector("#event-title"),r=this.container.querySelector("#event-description"),n=this.container.querySelector("#event-start-time"),v=this.container.querySelector("#event-end-time"),s=this.container.querySelector("#event-color"),c=this.container.querySelector("#event-id"),g=this.container.querySelector("#modal-title"),m=this.container.querySelector("#submit-btn-text");if(e){c.value=e.id,a.value=e.title||"",r.value=e.description||"",n.value=e.startTime||"",v.value=e.endTime||"";const u=e.color||"#ff8e4d";s.value=u;const d=this.container.querySelector("#event-color-custom");d&&(d.value=u),setTimeout(()=>this.selectColorOption(u),0),g.textContent="Editar Evento",m&&(m.textContent="Atualizar")}else{console.log("🧹 Limpando modal para novo evento"),c.value="",a.value="",r.value="",n.value="",v.value="";const u="#ff8e4d";s.value=u;const d=this.container.querySelector("#event-color-custom");d&&(d.value=u),setTimeout(()=>{this.selectColorOption(u);const l=this.container.querySelector("#custom-color-container");l&&l.classList.add("hidden");const i=this.container.querySelector("#event-id");i&&(i.value="",console.log("✅ Campo event-id limpo:",i.value))},0),g.textContent="Novo Evento",m&&(m.textContent="Criar")}o.classList.remove("hidden"),this.setupTimeInputQuickEntry&&(n&&this.setupTimeInputQuickEntry(n),v&&this.setupTimeInputQuickEntry(v))}async openEventViewModal(e){if(!e)return;const t=this.container.querySelector("#event-view-modal"),o=this.container.querySelector("#view-event-title"),a=this.container.querySelector("#view-event-description"),r=this.container.querySelector("#view-event-start-time"),n=this.container.querySelector("#view-event-end-time"),v=this.container.querySelector("#view-event-date"),s=this.container.querySelector("#view-event-id"),c=this.container.querySelector("#view-event-color"),g=this.container.querySelector("#mark-as-done-container");o&&(o.textContent=e.title||"Sem título"),a&&(a.textContent=e.description||"Sem descrição"),r&&(r.textContent=e.startTime||"-"),n&&(n.textContent=e.endTime||"-"),s&&(s.value=e.id),c&&(c.value=e.color||"#3b82f6");const m=(e.color||"#3b82f6").toLowerCase()==="#3b82f6";if(g)if(m){g.classList.remove("hidden");const u=this.container.querySelector("#mark-as-done-btn"),d=this.container.querySelector("#mark-as-done-text");u&&d&&(u.disabled=!1,u.classList.remove("bg-green-600","text-white"),u.classList.add("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),d.textContent="Verificando...")}else g.classList.add("hidden");if(t&&t.classList.remove("hidden"),m&&g&&this.updateMarkAsDoneButtonState(e.id).catch(u=>{console.error("Erro ao verificar estado da ação:",u);const d=this.container.querySelector("#mark-as-done-btn"),l=this.container.querySelector("#mark-as-done-text");d&&l&&(d.disabled=!1,d.classList.remove("bg-green-600","text-white"),d.classList.add("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),l.textContent="Marcar como Feito")}),v&&e.date){let u,d,l;if(typeof e.date=="string")if(e.date.match(/^\d{4}-\d{2}-\d{2}$/)){const[i,p,h]=e.date.split("-").map(Number);u=String(h).padStart(2,"0"),d=String(p).padStart(2,"0"),l=i}else{const i=e.date.split("T")[0],[p,h,b]=i.split("-").map(Number);u=String(b).padStart(2,"0"),d=String(h).padStart(2,"0"),l=p}else{const i=new Date(e.date);u=String(i.getDate()).padStart(2,"0"),d=String(i.getMonth()+1).padStart(2,"0"),l=i.getFullYear()}v.textContent=`${u}/${d}/${l}`}}closeEventViewModal(){const e=this.container.querySelector("#event-view-modal");e&&e.classList.add("hidden")}async updateMarkAsDoneListButtonState(e,t){if(!t||!this.storageService)return;const o=t.querySelector(".mark-as-done-list-btn"),a=t.querySelector(".mark-as-done-list-icon"),r=t.querySelector(".mark-as-done-list-spinner");if(o)try{if(a&&a.classList.add("hidden"),r&&r.classList.remove("hidden"),typeof this.storageService.getActionByEventId=="function"){const n=await this.storageService.getActionByEventId(e);r&&r.classList.add("hidden"),a&&a.classList.remove("hidden"),n&&n.finishedDate&&n.finishedTime?(o.disabled=!0,o.classList.remove("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),o.classList.add("bg-green-600","border-green-600","text-white"),a&&(a.innerHTML='<i class="fas fa-check-circle text-sm"></i>')):(o.disabled=!1,o.classList.remove("bg-green-600","text-white"),o.classList.add("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),a&&(a.innerHTML='<i class="fas fa-hourglass-half text-sm" style="color: white;"></i>'))}else r&&r.classList.add("hidden"),a&&a.classList.remove("hidden"),o.disabled=!1,o.classList.remove("bg-green-600","text-white"),o.classList.add("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),a&&(a.innerHTML='<i class="fas fa-hourglass-half text-sm text-white"></i>')}catch(n){console.error("Erro ao verificar estado da ação na lista:",n),r&&r.classList.add("hidden"),a&&a.classList.remove("hidden"),o.disabled=!1,o.classList.remove("bg-green-600","text-white"),o.classList.add("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),a&&(a.innerHTML='<i class="fas fa-hourglass-half text-sm text-white"></i>')}}async updateMarkAsDoneListButtonState(e,t){if(!t||!this.storageService)return;const o=t.querySelector(".mark-as-done-list-btn"),a=t.querySelector(".mark-as-done-list-icon"),r=t.querySelector(".mark-as-done-list-spinner");if(o)try{if(a&&a.classList.add("hidden"),r&&r.classList.remove("hidden"),typeof this.storageService.getActionByEventId=="function"){const n=await this.storageService.getActionByEventId(e);r&&r.classList.add("hidden"),a&&a.classList.remove("hidden"),n&&n.finishedDate&&n.finishedTime?(o.disabled=!0,o.classList.remove("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),o.classList.add("bg-green-600","border-green-600","text-white"),a&&(a.innerHTML='<i class="fas fa-check-circle text-sm"></i>')):(o.disabled=!1,o.classList.remove("bg-green-600","text-white"),o.classList.add("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),a&&(a.innerHTML='<i class="fas fa-hourglass-half text-sm" style="color: white;"></i>'))}else r&&r.classList.add("hidden"),a&&a.classList.remove("hidden"),o.disabled=!1,o.classList.remove("bg-green-600","text-white"),o.classList.add("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),a&&(a.innerHTML='<i class="fas fa-hourglass-half text-sm text-white"></i>')}catch(n){console.error("Erro ao verificar estado da ação na lista:",n),r&&r.classList.add("hidden"),a&&a.classList.remove("hidden"),o.disabled=!1,o.classList.remove("bg-green-600","text-white"),o.classList.add("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),a&&(a.innerHTML='<i class="fas fa-hourglass-half text-sm text-white"></i>')}}async updateMarkAsDoneButtonState(e){const t=this.container.querySelector("#mark-as-done-btn"),o=this.container.querySelector("#mark-as-done-icon"),a=this.container.querySelector("#mark-as-done-spinner"),r=this.container.querySelector("#mark-as-done-text");if(!(!t||!this.storageService))try{if(o&&o.classList.add("hidden"),a&&a.classList.remove("hidden"),r&&(r.textContent="Verificando..."),typeof this.storageService.getActionByEventId=="function"){const n=await this.storageService.getActionByEventId(e);console.log("🔍 Verificando estado da ação:",{eventId:e,action:n,hasFinishedDate:!!(n&&n.finishedDate),hasFinishedTime:!!(n&&n.finishedTime),isFinished:!!(n&&n.finishedDate&&n.finishedTime)}),a&&a.classList.add("hidden"),o&&o.classList.remove("hidden"),n&&n.finishedDate&&n.finishedTime?(console.log("✅ Evento já está finalizado na planilha"),t.disabled=!0,t.classList.remove("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),t.classList.add("bg-green-600","border-green-600","text-white"),r&&(r.textContent="Finalizado"),o&&(o.innerHTML='<i class="fas fa-check-circle"></i>')):(console.log("ℹ️ Evento não está finalizado na planilha"),t.disabled=!1,t.classList.remove("bg-green-600","text-white"),t.classList.add("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),r&&(r.textContent="Marcar como Feito"),o&&(o.innerHTML='<i class="fas fa-check-circle"></i>'))}else console.warn("⚠️ Serviço de armazenamento não suporta getActionByEventId"),a&&a.classList.add("hidden"),o&&o.classList.remove("hidden"),t.disabled=!1,t.classList.remove("bg-green-600","text-white"),t.classList.add("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),r&&(r.textContent="Marcar como Feito")}catch(n){console.error("❌ Erro ao verificar estado da ação:",n),a&&a.classList.add("hidden"),o&&o.classList.remove("hidden"),t.disabled=!1,t.classList.remove("bg-green-600","text-white"),t.classList.add("bg-transparent","border-green-600","text-green-600","hover:bg-green-600/10"),r&&(r.textContent="Marcar como Feito")}}closeEventModal(){this.container.querySelector("#event-modal").classList.add("hidden"),this.selectedEvent=null,this.selectedDate=null}async openEventsListModal(e,t){const o=this.container.querySelector("#events-list-modal"),a=this.container.querySelector("#events-list-title"),r=this.container.querySelector("#events-list-content");if(!o||!r)return;this.selectedDate=e;const n=this.core.formatDate(e),[v,s,c]=n.split("-").map(Number),g=new Date(v,s-1,c),m=g.toLocaleDateString("pt-BR",{weekday:"long"}),u=g.toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"});a.textContent=`Eventos - ${m}, ${u}`;const d=[...t].sort((l,i)=>{const p=l.startTime||"00:00",h=i.startTime||"00:00";return p.localeCompare(h)});if(d.length===0)r.innerHTML='<p class="text-gray-400 text-center py-4">Nenhum evento neste dia.</p>';else if(r.innerHTML=d.map(l=>{let i="";if(l.startTime){const y=String(l.startTime).trim().match(/(\d{1,2}):(\d{2})(?::\d{2})?/);if(y){const L=y[1].padStart(2,"0"),k=y[2];i=`${L}:${k}`}}const p=l.endTime?this.formatTime(l.endTime):"",h=i&&p?`${i} - ${p}`:i||"",b=(l.color||"#3b82f6").toLowerCase()==="#3b82f6";return`
          <div 
            class="event-list-item p-3 rounded-lg transition-colors hover:bg-[#222222] border-l-4"
            style="border-left-color: ${l.color}; background-color: ${l.color}15;"
            data-event-id="${l.id}"
          >
            <div class="flex items-start justify-between gap-2">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xs font-medium text-gray-400">${h}</span>
                </div>
                <h4 class="text-sm font-semibold text-white mb-1">${l.title||"Sem título"}</h4>
                ${l.description?`<p class="text-xs text-gray-400 line-clamp-2">${l.description}</p>`:""}
              </div>
              <div class="flex items-center gap-2 flex-shrink-0">
                ${b?`
                  <!-- Botão Marcar como Feito (apenas mobile) -->
                  <button
                    type="button"
                    class="mark-as-done-list-btn md:hidden w-10 h-10 rounded-lg border-2 border-green-600 bg-transparent hover:bg-green-600/10 text-green-600 transition-all cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    data-action="mark-as-done-from-list"
                    data-event-id="${l.id}"
                    title="Marcar como Feito"
                  >
                    <span class="mark-as-done-list-icon flex items-center">
                      <i class="fas fa-hourglass-half text-sm"></i>
                    </span>
                    <span class="mark-as-done-list-spinner hidden flex items-center">
                      <svg class="animate-spin h-4 w-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  </button>
                `:""}
                <!-- Botão Editar -->
                <button
                  type="button"
                  class="w-10 h-10 rounded-lg border-2 border-blue-400 bg-transparent hover:bg-blue-400/10 text-blue-400 transition-all cursor-pointer flex items-center justify-center"
                  data-action="edit-event-from-list"
                  data-event-id="${l.id}"
                  title="Editar evento"
                >
                  <i class="fas fa-edit text-sm"></i>
                </button>
                <!-- Botão Apagar -->
                <button
                  type="button"
                  class="w-10 h-10 rounded-lg border-2 border-red-500 bg-transparent hover:bg-red-500/10 text-red-500 transition-all cursor-pointer flex items-center justify-center"
                  data-action="delete-event-from-list"
                  data-event-id="${l.id}"
                  title="Excluir evento"
                >
                  <i class="fas fa-trash text-sm"></i>
                </button>
              </div>
            </div>
          </div>
        `}).join(""),window.innerWidth<768){const l=d.filter(i=>(i.color||"#3b82f6").toLowerCase()==="#3b82f6").map(async i=>{const p=r.querySelector(`[data-event-id="${i.id}"]`);if(p)try{await this.updateMarkAsDoneListButtonState(i.id,p)}catch(h){console.error("Erro ao verificar estado da ação na lista:",h)}});Promise.all(l).catch(i=>{console.error("Erro ao verificar estados das ações:",i)})}o.classList.remove("hidden")}closeEventsListModal(){const e=this.container.querySelector("#events-list-modal");e&&e.classList.add("hidden")}formatTime(e){if(!e)return"";const t=String(e).trim().match(/(\d{1,2}):(\d{2})(?::\d{2})?/);if(t){const o=t[1].padStart(2,"0"),a=t[2];return`${o}:${a}`}return e}async saveEvent(){var e,t,o,a;try{console.log("💾 Iniciando saveEvent...");const r=this.container.querySelector("#submit-event-btn"),n=this.container.querySelector("#submit-btn-text"),v=this.container.querySelector("#submit-btn-spinner"),s=this.container.querySelector("#cancel-event-btn"),c=this.container.querySelector("#save-status");if(!r){console.error("❌ Botão submit não encontrado!");return}r&&(r.disabled=!0,n&&n.classList.add("hidden"),v&&v.classList.remove("hidden")),s&&(s.disabled=!0),c&&(c.classList.remove("hidden"),c.textContent="💾 Salvando evento...",c.className="mt-2 text-sm text-center text-blue-600 font-medium");const g=this.container.querySelector("#event-form"),m=this.container.querySelector("#event-id");let u=m?m.value:"";u=u?u.trim():"";const d=this.container.querySelector("#event-title").value,l=this.container.querySelector("#event-description").value,i=this.container.querySelector("#event-start-time"),p=this.container.querySelector("#event-end-time"),h=i?i.value.trim():"",b=p?p.value.trim():"",S=this.container.querySelector("#event-color").value;console.log("📝 Salvando evento"),console.log("  - eventId:",u||"(VAZIO - será criado novo evento)"),console.log("  - title:",d),console.log("  - date:",this.selectedDate),console.log("  - startTime:",h||"(vazio)"),console.log("  - endTime:",b||"(vazio)"),console.log("  - color:",S);let y=this.selectedDate;if(!y){const E=new Date;y=new Date(E.getFullYear(),E.getMonth(),E.getDate())}y instanceof Date&&(y=new Date(y.getFullYear(),y.getMonth(),y.getDate()));const L=y.getFullYear(),k=String(y.getMonth()+1).padStart(2,"0"),D=String(y.getDate()).padStart(2,"0"),w=`${L}-${k}-${D}`;if(console.log("📅 Data selecionada:",y),console.log("📅 Data formatada:",w),console.log("🆔 Event ID:",u||"NOVO EVENTO"),console.log("⏰ Horários - Início:",h,"Fim:",b),u&&u.trim()!=="")if(this.eventManager.getEventById(u))console.log("🔄 Atualizando evento existente:",u),await this.eventManager.updateEvent(u,{title:d,description:l,date:w,startTime:h||"",endTime:b||"",color:S}),c&&(c.textContent="✅ Evento atualizado com sucesso!",c.className="mt-2 text-sm text-center text-green-600 font-medium");else{console.warn("⚠️ Evento não encontrado localmente, criando novo evento");const M=await this.eventManager.createEvent({title:d,description:l,date:w,startTime:h||"",endTime:b||"",color:S});console.log("✅ Novo evento criado (era update mas evento não existia):",M),c&&(c.textContent="✅ Evento criado com sucesso!",c.className="mt-2 text-sm text-center text-green-600 font-medium")}else{if(console.log("➕ Criando novo evento"),(S||"#3b82f6").toLowerCase()==="#3b82f6"){console.log("🔵 Evento azul detectado - salvando na aba Ações"),console.log("🔍 Verificando storageService:",{hasStorageService:!!this.storageService,storageServiceType:(t=(e=this.storageService)==null?void 0:e.constructor)==null?void 0:t.name,hasSaveAction:typeof((o=this.storageService)==null?void 0:o.saveAction)=="function",methods:Object.getOwnPropertyNames(Object.getPrototypeOf(this.storageService||{}))});let M=null;if(this.storageService&&typeof this.storageService.saveAction=="function"){const C=y,B=h||"";try{const j=this.eventManager.generateId();await this.storageService.saveAction({id:j,title:d||"",description:l||"",createdAt:new Date().toISOString(),createdDate:C,createdTime:B,finishedDate:"",finishedTime:""}),M=await this.eventManager.createEvent({id:j,title:d||"",description:l||"",date:w,startTime:h||"",endTime:b||"",color:S}),console.log("✅ Ação salva com sucesso na aba Ações")}catch(j){throw console.error("❌ Erro ao salvar ação:",j),new Error(`Erro ao salvar ação: ${j.message}`)}}else{const C=this.storageService?`Serviço de armazenamento (${((a=this.storageService.constructor)==null?void 0:a.name)||"desconhecido"}) não suporta salvar ações. Use GoogleAppsScriptService.`:"Serviço de armazenamento não disponível";throw console.error("❌",C),new Error(C)}M&&console.log("✅ Evento azul salvo na aba Ações e no calendário:",M),c&&(c.textContent="✅ Evento criado com sucesso!",c.className="mt-2 text-sm text-center text-green-600 font-medium")}else{const M=await this.eventManager.createEvent({title:d,description:l,date:w,startTime:h||"",endTime:b||"",color:S});console.log("✅ Evento criado:",M),c&&(c.textContent="✅ Evento criado com sucesso!",c.className="mt-2 text-sm text-center text-green-600 font-medium")}await new Promise(M=>setTimeout(M,500)),window.location.reload();return}await new Promise(E=>setTimeout(E,500)),this.closeEventModal()}catch(r){console.error("❌ Erro ao salvar evento:",r);const n=this.container.querySelector("#submit-event-btn"),v=this.container.querySelector("#submit-btn-text"),s=this.container.querySelector("#submit-btn-spinner"),c=this.container.querySelector("#cancel-event-btn"),g=this.container.querySelector("#save-status");n&&(n.disabled=!1,v&&v.classList.remove("hidden"),s&&s.classList.add("hidden")),c&&(c.disabled=!1),g?(g.textContent="❌ Erro: "+r.message,g.className="mt-2 text-sm text-center text-red-600 font-medium"):await this.showAlert("Erro ao salvar evento",r.message)}}selectColorOption(e){const t=this.container.querySelectorAll(".color-option"),o=this.container.querySelector("#custom-color-container");t.forEach(r=>{r.classList.remove("ring-2","ring-offset-2","ring-primary-500"),r.classList.add("border-gray-300")});const a=Array.from(t).find(r=>r.dataset.color===e);a?(a.classList.add("ring-2","ring-offset-2","ring-primary-500"),a.classList.remove("border-gray-300"),o&&o.classList.add("hidden")):o&&o.classList.remove("hidden")}selectColorOption(e){const t=this.container.querySelectorAll(".color-option"),o=this.container.querySelector("#custom-color-container");t.forEach(r=>{r.classList.remove("ring-2","ring-offset-2","ring-primary-500"),r.classList.add("border-gray-300")});const a=Array.from(t).find(r=>r.dataset.color===e);a?(a.classList.add("ring-2","ring-offset-2","ring-primary-500"),a.classList.remove("border-gray-300"),o&&o.classList.add("hidden")):o&&o.classList.remove("hidden")}async deleteEvent(){if(!this.selectedEvent)return;const e=this.selectedEvent;if(this.closeEventModal(),await new Promise(o=>setTimeout(o,200)),await this.showConfirm("Excluir Evento","Tem certeza que deseja excluir este evento?"))try{await this.eventManager.deleteEvent(e.id)}catch(o){await this.showAlert("Erro ao excluir evento",o.message)}}showConfirm(e,t){return new Promise((o,a)=>{const r=this.container.querySelector("#confirm-modal"),n=this.container.querySelector("#confirm-modal-title"),v=this.container.querySelector("#confirm-modal-message"),s=this.container.querySelector("#confirm-ok-btn"),c=this.container.querySelector("#confirm-cancel-btn");if(!r||!n||!v){o(!1);return}this.closeEventViewModal(),this.closeEventModal(),this.closeEventsListModal(),n.textContent=e,v.textContent=t,c.classList.remove("hidden"),s.textContent="Confirmar",this.confirmResolve=()=>o(!0),this.confirmReject=()=>o(!1),r.classList.remove("hidden")})}async showAlert(e,t){return new Promise(o=>{const a=this.container.querySelector("#confirm-modal"),r=this.container.querySelector("#confirm-modal-title"),n=this.container.querySelector("#confirm-modal-message"),v=this.container.querySelector("#confirm-ok-btn"),s=this.container.querySelector("#confirm-cancel-btn");if(!a||!r||!n){o();return}this.closeEventViewModal(),this.closeEventModal(),this.closeEventsListModal(),r.textContent=e,n.textContent=t,s.classList.add("hidden"),v.textContent="OK",this.confirmResolve=()=>{s.classList.remove("hidden"),v.textContent="OK",o()},this.confirmReject=null,a.classList.remove("hidden")})}closeConfirmModal(){const e=this.container.querySelector("#confirm-modal");e&&e.classList.add("hidden")}setActiveWeeks(e){this.core.setActiveWeeks(e),this.render()}setInactiveWeeks(e){this.core.setInactiveWeeks(e),this.render()}}const O={semanas:[{numero:1,tipo:"ativa",tema:"Organização de Vida",objetivo:"Criar clareza mental e estrutural",tarefas:["Definir rotina semanal realista","Organizar arquivos digitais","Escolher ferramenta única de tarefas"],resultado:"Mente organizada e menos ansiedade",bloco:1},{numero:2,tipo:"ativa",tema:"Finanças Básicas",objetivo:"Entender para onde o dinheiro vai",tarefas:["Mapear gastos fixos","Mapear gastos variáveis","Definir valor mínimo para poupar"],resultado:"Controle financeiro inicial",bloco:1},{numero:3,tipo:"livre"},{numero:4,tipo:"ativa",tema:"Primeiros Socorros",objetivo:"Saber agir em emergências comuns",tarefas:["Aprender procedimentos básicos","Anotar contatos de emergência"],resultado:"Segurança pessoal",bloco:1},{numero:5,tipo:"ativa",tema:"Autonomia Doméstica",objetivo:"Resolver problemas simples sozinho",tarefas:["Trocar chuveiro","Identificar disjuntores"],resultado:"Independência prática",bloco:1},{numero:6,tipo:"livre"},{numero:7,tipo:"ativa",tema:"Comunicação Clara",objetivo:"Falar com objetividade",tarefas:["Treinar explicação simples","Reduzir vícios de linguagem"],resultado:"Comunicação mais confiante",bloco:1},{numero:8,tipo:"livre"},{numero:9,tipo:"ativa",tema:"Lógica de Programação",objetivo:"Pensar antes de codar",tarefas:["Resolver problemas no papel","Criar fluxogramas simples"],resultado:"Menos travamento mental",bloco:2},{numero:10,tipo:"ativa",tema:"JavaScript Essencial",objetivo:"Consolidar base da linguagem",tarefas:["Treinar funções","Manipular arrays e objetos"],resultado:"Confiança com JS",bloco:2},{numero:11,tipo:"livre"},{numero:12,tipo:"ativa",tema:"Consumo de APIs",objetivo:"Integrar dados externos",tarefas:["Usar fetch","Consumir API pública"],resultado:"Mini projeto funcional",bloco:2},{numero:13,tipo:"ativa",tema:"HTML e CSS Profissional",objetivo:"Layouts sólidos e acessíveis",tarefas:["Usar HTML semântico","Criar layout responsivo"],resultado:"Interface profissional",bloco:2},{numero:14,tipo:"livre"},{numero:15,tipo:"ativa",tema:"Rotina de Reuniões",objetivo:"Se posicionar como dev júnior",tarefas:["Simular daily stand-up","Treinar explicar o que fez","Aprender a pedir ajuda"],resultado:"Postura profissional em reuniões",bloco:2},{numero:16,tipo:"ativa",tema:"Feedback e Código",objetivo:"Lidar bem com críticas",tarefas:["Revisar código antigo","Simular feedback técnico"],resultado:"Evolução sem ego",bloco:2},{numero:17,tipo:"livre"},{numero:18,tipo:"ativa",tema:"Git e Versionamento",objetivo:"Trabalhar como time",tarefas:["Commits claros","Branches simples"],resultado:"Fluxo profissional de código",bloco:2},{numero:19,tipo:"ativa",tema:"Portfólio Profissional",objetivo:"Mostrar valor real",tarefas:["Escolher 3 projetos","Descrever problemas resolvidos"],resultado:"Portfólio que comunica senioridade",bloco:2},{numero:20,tipo:"livre"},{numero:21,tipo:"ativa",tema:"Renda Extra Dev",objetivo:"Ganhar fora do salário",tarefas:["Pesquisar freelas simples","Mapear serviços possíveis"],resultado:"Clareza de oportunidades",bloco:3},{numero:22,tipo:"ativa",tema:"Educação Financeira",objetivo:"Evitar erros comuns",tarefas:["Entender juros","Entender cartão de crédito"],resultado:"Menos decisões ruins",bloco:3},{numero:23,tipo:"livre"},{numero:24,tipo:"ativa",tema:"Investimentos Básicos",objetivo:"Construir reserva",tarefas:["Estudar CDB","Estudar Tesouro"],resultado:"Base de segurança financeira",bloco:3},{numero:25,tipo:"ativa",tema:"Negociação",objetivo:"Valorizar seu trabalho",tarefas:["Simular pedido de aumento","Simular negociação com cliente"],resultado:"Postura profissional madura",bloco:3},{numero:26,tipo:"livre"},{numero:27,tipo:"ativa",tema:"Inglês Técnico",objetivo:"Comunicar-se no trabalho",tarefas:["Aprender termos técnicos","Simular reunião em inglês"],resultado:"Menos bloqueio com inglês",bloco:3},{numero:28,tipo:"ativa",tema:"Inglês Cotidiano",objetivo:"Entender situações comuns",tarefas:["Frases do dia a dia","Praticar escuta"],resultado:"Comunicação funcional",bloco:3},{numero:29,tipo:"livre"},{numero:30,tipo:"ativa",tema:"Mentalidade de Crescimento",objetivo:"Aprender continuamente",tarefas:["Revisar crenças limitantes","Criar plano de evolução"],resultado:"Postura de longo prazo",bloco:3},{numero:31,tipo:"ativa",tema:"Gestão Emocional",objetivo:"Lidar com pressão",tarefas:["Identificar gatilhos de estresse","Criar rotina de desaceleração"],resultado:"Mais equilíbrio",bloco:3},{numero:32,tipo:"livre"},{numero:33,tipo:"ativa",tema:"Saúde Básica",objetivo:"Cuidar do corpo",tarefas:["Mapear exames básicos","Criar hábitos simples"],resultado:"Mais energia",bloco:4},{numero:34,tipo:"ativa",tema:"Alimentação Sustentável",objetivo:"Comer melhor sem radicalismo",tarefas:["Ajustar refeições","Reduzir excessos"],resultado:"Melhor disposição",bloco:4},{numero:35,tipo:"livre"},{numero:36,tipo:"ativa",tema:"Exercício Básico",objetivo:"Manter o corpo funcional",tarefas:["Alongamentos","Calistenia leve"],resultado:"Consistência física",bloco:4},{numero:37,tipo:"ativa",tema:"Relacionamentos",objetivo:"Comunicar emoções",tarefas:["Praticar escuta ativa","Conversas honestas"],resultado:"Relações mais saudáveis",bloco:4},{numero:38,tipo:"livre"},{numero:39,tipo:"ativa",tema:"Direitos e Deveres",objetivo:"Não ser passado para trás",tarefas:["Entender CLT","Ler contratos básicos"],resultado:"Consciência cidadã",bloco:4},{numero:40,tipo:"ativa",tema:"Planejamento de Viagem",objetivo:"Autonomia em deslocamentos",tarefas:["Planejar viagem simples","Aprender noções de segurança"],resultado:"Independência logística",bloco:4},{numero:41,tipo:"livre"},{numero:42,tipo:"ativa",tema:"Pensamento Crítico",objetivo:"Avaliar informações",tarefas:["Analisar notícias","Identificar golpes"],resultado:"Mais lucidez",bloco:4},{numero:43,tipo:"ativa",tema:"Tomada de Decisão",objetivo:"Escolher melhor",tarefas:["Analisar decisões passadas","Criar critérios"],resultado:"Decisões mais maduras",bloco:4},{numero:44,tipo:"livre"},{numero:45,tipo:"ativa",tema:"Revisão Anual",objetivo:"Consolidar aprendizados",tarefas:["Revisar todas as semanas ativas","Anotar ganhos reais"],resultado:"Consciência da evolução",bloco:5},{numero:46,tipo:"livre"},{numero:47,tipo:"ativa",tema:"Planejamento do Próximo Ano",objetivo:"Dar continuidade",tarefas:["Definir novos focos","Ajustar rotinas"],resultado:"Clareza para o futuro",bloco:5},{numero:48,tipo:"livre"},{numero:49,tipo:"livre"},{numero:50,tipo:"livre"},{numero:51,tipo:"livre"},{numero:52,tipo:"livre"}],corBase:"#ff8e4d"};function _(f){const e=new Date(2026,0,12),t=(f-1)*7,o=new Date(e);return o.setDate(e.getDate()+t),o}function R(f){const e=f.getFullYear(),t=String(f.getMonth()+1).padStart(2,"0"),o=String(f.getDate()).padStart(2,"0");return`${e}-${t}-${o}`}function J(f,e=20){const t=parseInt(f.replace("#",""),16),o=Math.min(255,(t>>16)+Math.round((255-(t>>16))*e/100)),a=Math.min(255,(t>>8&255)+Math.round((255-(t>>8&255))*e/100)),r=Math.min(255,(t&255)+Math.round((255-(t&255))*e/100));return"#"+(o<<16|a<<8|r).toString(16).padStart(6,"0")}function K(f,e){const t=[],o=Math.min(f.length,5);let a=[];return o===1?a=[0]:o===2?a=[0,2]:o===3?a=[0,2,4]:o===4?a=[0,1,3,4]:a=[0,1,2,3,4],f.slice(0,o).forEach((r,n)=>{const v=a[n],s=new Date(e);s.setDate(e.getDate()+v),t.push({data:R(s),tarefa:r,indice:n})}),t}async function Z(f){if(!f||!f.eventManager)throw new Error("Calendário não encontrado.");console.log("🗑️ Limpando eventos existentes..."),await f.eventManager.loadEvents();const e=f.eventManager.getAllEvents();console.log(`📋 Encontrados ${e.length} eventos para deletar`);for(const t of e)try{await f.eventManager.deleteEvent(t.id)}catch(o){console.warn(`⚠️ Erro ao deletar evento ${t.id}:`,o)}console.log(`✅ ${e.length} eventos deletados`)}async function X(f){if(!f||!f.eventManager)throw new Error("Calendário não encontrado. Certifique-se de que o calendário foi inicializado.");await Z(f);const e=O.semanas.filter(o=>o.tipo==="ativa"),t=[];console.log(`📅 Iniciando importação de ${e.length} semanas ativas...`);for(const o of e)try{const a=_(o.numero),r=O.corBase,n=o.tema.length>30?o.tema.substring(0,30)+"...":o.tema,v={title:`${o.numero}. ${n}`,description:`Objetivo: ${o.objetivo}

Tarefas:
${o.tarefas.map((d,l)=>`${l+1}. ${d}`).join(`
`)}

Resultado esperado: ${o.resultado}`,date:R(a),startTime:"10:00",endTime:"10:30",color:r},s=await f.eventManager.createEvent(v);t.push(s),console.log(`✅ Criado: ${v.title}`);const c=K(o.tarefas,a),g=c.length,u=Math.floor(90/g);for(let d=0;d<c.length;d++){const l=c[d],i=30+d*u,p=10+Math.floor(i/60),h=i%60,b=i+u,S=10+Math.floor(b/60),y=b%60,L=Math.min(S,12),k=L===12?0:y,D=`${String(p).padStart(2,"0")}:${String(h).padStart(2,"0")}`,w=`${String(L).padStart(2,"0")}:${String(k).padStart(2,"0")}`,E=l.tarefa.length>25?l.tarefa.substring(0,25)+"...":l.tarefa,M=(d+1)*10,C=J(r,M),B={title:E,description:`${o.tema}

${v.description}`,date:l.data,startTime:D,endTime:w,color:C};await f.eventManager.createEvent(B),t.push(B)}await new Promise(d=>setTimeout(d,100))}catch(a){console.error(`❌ Erro ao criar eventos da semana ${o.numero}:`,a)}return console.log(`
🎉 Importação concluída! ${t.length} eventos criados.`),t}async function ee(f){if(!f||!f.eventManager)throw new Error("Calendário não encontrado. Certifique-se de que o calendário foi inicializado.");console.log("🗑️ Limpando todos os eventos..."),await f.eventManager.loadEvents();const e=f.eventManager.getAllEvents();if(console.log(`📋 Encontrados ${e.length} eventos para deletar`),e.length===0)return console.log("ℹ️ Nenhum evento encontrado para deletar."),{deleted:0,message:"Nenhum evento encontrado"};let t=0,o=0;for(const a of e)try{await f.eventManager.deleteEvent(a.id),t++}catch(r){console.warn(`⚠️ Erro ao deletar evento ${a.id}:`,r),o++}return console.log(`✅ ${t} eventos deletados${o>0?` (${o} erros)`:""}`),{deleted:t,errors:o}}typeof window<"u"&&(window.importarPlanoAnual=async function(){if(!window.calendar){console.error("❌ Calendário não encontrado. Aguarde a inicialização...");return}if(!await window.calendar.showConfirm("Importar Plano Anual 2026",`Deseja importar o Plano Anual 2026?

Isso criará eventos para todas as ${O.semanas.filter(e=>e.tipo==="ativa").length} semanas ativas.

Os eventos serão distribuídos de segunda a sexta-feira ao longo do ano.`)){console.log("Importação cancelada.");return}try{const e=await X(window.calendar);await window.calendar.showAlert("Importação Concluída",`✅ Importação concluída!

${e.length} eventos criados com sucesso.`),window.calendar.render()}catch(e){console.error("Erro na importação:",e),await window.calendar.showAlert("Erro na Importação",`❌ Erro na importação: ${e.message}`)}},window.limparTodosEventos=async function(){if(!window.calendar){console.error("❌ Calendário não encontrado. Aguarde a inicialização...");return}await window.calendar.eventManager.loadEvents();const f=window.calendar.eventManager.getAllEvents().length;if(f===0){await window.calendar.showAlert("Limpeza de Eventos","ℹ️ Nenhum evento encontrado para deletar.");return}if(!await window.calendar.showConfirm("Limpar Todos os Eventos",`⚠️ ATENÇÃO: Esta ação não pode ser desfeita!

Deseja apagar TODOS os ${f} eventos do calendário?

Isso removerá os eventos do sistema e da planilha.`)){console.log("Limpeza cancelada.");return}try{const t=await ee(window.calendar);await window.calendar.showAlert("Limpeza Concluída",`✅ Limpeza concluída!

${t.deleted} eventos deletados com sucesso.`+(t.errors>0?`

⚠️ ${t.errors} eventos tiveram erros ao deletar.`:"")),window.location.reload()}catch(t){console.error("Erro na limpeza:",t),await window.calendar.showAlert("Erro na Limpeza",`❌ Erro na limpeza: ${t.message}`)}},console.log("💡 Para importar o Plano Anual, execute: importarPlanoAnual()"),console.log("💡 Para apagar todos os eventos, execute: limparTodosEventos()"));const te="/ambiente-dev/";document.addEventListener("DOMContentLoaded",async()=>{if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${te}index.html`;return}const e=sessionStorage.getItem("username")||"Usuário",t=new H(e,"agenda"),o=document.getElementById("app");o.innerHTML=`
    ${t.render()}
    <div class="main-content">
      ${t.renderTopBar("Agenda","Gerencie seus eventos")}
      <div class="page-content p-4 md:p-8">
        <div class="max-w-7xl mx-auto w-full">
          <!-- Container do calendário -->
          <div id="calendar-container"></div>
        </div>
      </div>
    </div>
  `,t.init();const a="https://script.google.com/macros/s/AKfycbw4G3MjAMTUDGG_plout6pQ5DqVa8kCu1EGy38XfYYxYpMRSmsvzOB9Z1HxzZEcVPzGSQ/exec",r=new N({storageKey:"calendar-events"});let n=r;try{const s=new Y({scriptUrl:a});await s.initialize(),n=s,console.log("✅ Google Apps Script conectado com sucesso!"),console.log("📋 Serviço de armazenamento:",n.constructor.name),console.log("🔍 Métodos disponíveis:",Object.getOwnPropertyNames(Object.getPrototypeOf(n)))}catch(s){console.error("❌ Erro ao conectar Google Apps Script:",s),console.warn("⚠️ Usando LocalStorage como fallback. Eventos azuis não poderão ser salvos na aba Ações."),n=r}try{await n.initialize()}catch(s){console.error("❌ Erro ao inicializar armazenamento:",s)}const v=new Q("#calendar-container",{storageService:n,activeWeeks:[],inactiveWeeks:[],locale:"pt-BR",firstDayOfWeek:0});window.calendar=v,window.storageService=n});
