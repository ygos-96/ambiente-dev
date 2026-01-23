import"./index-DB0L8H9H.js";import{S as Ye,L as Ge,G as Ve}from"./Sidebar-89pMJdAp.js";const Ue="/ambiente-dev/";document.addEventListener("DOMContentLoaded",async()=>{if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${Ue}index.html`;return}const _=sessionStorage.getItem("username")||"Usuário",R=new Ye(_,"home"),De=document.getElementById("app");De.innerHTML=`
    ${R.render()}
    <div class="main-content">
      ${R.renderTopBar(`Bem-vindo, ${_}!`,"Resumo dos seus eventos")}
      <div class="page-content p-4 md:p-8">
        <div class="max-w-7xl mx-auto">

        <!-- Loading State -->
        <div id="loading-state" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary-500"></div>
          <p class="mt-4 text-gray-400">Carregando eventos...</p>
        </div>

        <!-- Error State -->
        <div id="error-state" class="hidden text-center py-12">
          <i class="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
          <p class="text-red-400 font-medium">Erro ao carregar eventos</p>
          <p class="text-gray-400 mt-2 text-sm" id="error-message"></p>
        </div>

        <!-- Content -->
        <div id="content" class="hidden">
          <!-- Atalho de Criar Evento -->
          <div class="mb-6 md:mb-8">
            <button id="open-create-event-modal" class="create-event-btn block w-full bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3">
              <i class="fas fa-plus-circle text-xl"></i>
              <span class="text-lg">Criar Novo Evento</span>
            </button>
          </div>

          <!-- Cards de Estatísticas Rápidas -->
          <div class="mb-6 md:mb-8">
            <!-- Card: Próximo Evento (Full width no mobile) -->
            <div class="stats-card bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg border border-red-400/50 p-4 md:p-6 mb-4 md:mb-0 md:hidden">
              <div class="flex items-center justify-between mb-3">
                <div class="p-2 bg-white/20 rounded-lg">
                  <i class="fas fa-clock text-white text-xl"></i>
                </div>
                <span class="text-white/80 text-xs font-medium">Próximo</span>
              </div>
              <h3 class="text-white/80 text-sm font-medium mb-1">Próximo Evento</h3>
              <p class="text-white text-lg md:text-xl font-bold truncate" id="stats-next-title-mobile">Nenhum</p>
              <p class="text-white/70 text-xs mt-1" id="stats-next-time-mobile">-</p>
            </div>

            <!-- Grid de Cards Compactos (Mobile) e Cards Normais (Desktop) -->
            <div class="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <!-- Card: Eventos Hoje -->
              <div class="stats-card bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg border border-blue-500/50 p-3 sm:p-4 md:p-6 stats-card-compact">
                <div class="flex items-center justify-between mb-3 hidden sm:flex">
                  <div class="p-2 sm:p-3 bg-white/20 rounded-lg">
                    <i class="fas fa-calendar-day text-white text-xl md:text-2xl"></i>
                  </div>
                  <span class="text-white/80 text-xs font-medium">Hoje</span>
                </div>
                <div class="flex flex-col items-center justify-center text-center sm:block sm:text-left">
                  <div class="p-2 sm:p-3 bg-white/20 rounded-lg mb-2 sm:hidden">
                    <i class="fas fa-calendar-day text-white text-lg"></i>
                  </div>
                  <h3 class="text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2 stats-card-title">Eventos Hoje</h3>
                  <p class="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left" id="stats-today">0</p>
                </div>
              </div>

              <!-- Card: Próximo Evento (Desktop) -->
              <div class="stats-card bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg border border-red-400/50 p-3 sm:p-4 md:p-6 hidden md:flex md:flex-col">
                <div class="flex items-center justify-between mb-3 w-full">
                  <div class="p-2 bg-white/20 rounded-lg">
                    <i class="fas fa-clock text-white text-xl"></i>
                  </div>
                  <span class="text-white/80 text-xs font-medium">Próximo</span>
                </div>
                <h3 class="text-white/80 text-sm font-medium mb-1">Próximo Evento</h3>
                <p class="text-white text-lg md:text-xl font-bold truncate" id="stats-next-title">Nenhum</p>
                <p class="text-white/70 text-xs mt-1" id="stats-next-time">-</p>
              </div>

              <!-- Card: Eventos da Semana -->
              <div class="stats-card bg-gradient-to-br from-green-600 to-green-700 rounded-lg shadow-lg border border-green-500/50 p-3 sm:p-4 md:p-6 stats-card-compact">
                <div class="flex items-center justify-between mb-3 hidden sm:flex">
                  <div class="p-2 sm:p-3 bg-white/20 rounded-lg">
                    <i class="fas fa-calendar-week text-white text-xl md:text-2xl"></i>
                  </div>
                  <span class="text-white/80 text-xs font-medium">Semana</span>
                </div>
                <div class="flex flex-col items-center justify-center text-center sm:block sm:text-left">
                  <div class="p-2 sm:p-3 bg-white/20 rounded-lg mb-2 sm:hidden">
                    <i class="fas fa-calendar-week text-white text-lg"></i>
                  </div>
                  <h3 class="text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2 stats-card-title">Esta Semana</h3>
                  <p class="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left" id="stats-week">0</p>
                </div>
              </div>

              <!-- Card: Eventos do Mês -->
              <div class="stats-card bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg shadow-lg border border-purple-500/50 p-3 sm:p-4 md:p-6 stats-card-compact">
                <div class="flex items-center justify-between mb-3 hidden sm:flex">
                  <div class="p-2 sm:p-3 bg-white/20 rounded-lg">
                    <i class="fas fa-calendar-alt text-white text-xl md:text-2xl"></i>
                  </div>
                  <span class="text-white/80 text-xs font-medium">Mês</span>
                </div>
                <div class="flex flex-col items-center justify-center text-center sm:block sm:text-left">
                  <div class="p-2 sm:p-3 bg-white/20 rounded-lg mb-2 sm:hidden">
                    <i class="fas fa-calendar-alt text-white text-lg"></i>
                  </div>
                  <h3 class="text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2 stats-card-title">Este Mês</h3>
                  <p class="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left" id="stats-month">0</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Filtros Rápidos -->
          <div class="mb-6 md:mb-8">
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <i class="fas fa-filter text-blue-400"></i>
                Filtros Rápidos
              </h3>
              <div class="flex flex-wrap gap-2 md:gap-3 mb-4">
                <button 
                  class="filter-quick-btn active px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all"
                  data-filter="all"
                >
                  <i class="fas fa-list mr-2"></i>
                  Todos
                </button>
                <button 
                  class="filter-quick-btn px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all"
                  data-filter="today"
                >
                  <i class="fas fa-calendar-day mr-2"></i>
                  Hoje
                </button>
                <button 
                  class="filter-quick-btn px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all"
                  data-filter="week"
                >
                  <i class="fas fa-calendar-week mr-2"></i>
                  Esta Semana
                </button>
                <button 
                  class="filter-quick-btn px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all"
                  data-filter="month"
                >
                  <i class="fas fa-calendar-alt mr-2"></i>
                  Este Mês
                </button>
                <button 
                  class="filter-quick-btn px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all"
                  data-filter="upcoming"
                >
                  <i class="fas fa-clock mr-2"></i>
                  Próximos
                </button>
              </div>
              <!-- Busca Rápida -->
              <div class="relative">
                <input 
                  type="text" 
                  id="search-events-input"
                  placeholder="Buscar eventos por título ou descrição..."
                  class="w-full px-4 py-3 pl-12 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400"
                />
                <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <button 
                  id="clear-search-btn"
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white hidden"
                  title="Limpar busca"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Calendário e Carrossel em Duas Colunas -->
          <div class="mb-6 md:mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <!-- Calendário Mini -->
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-3 md:p-4">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-base md:text-lg font-bold text-white flex items-center gap-2">
                  <i class="fas fa-calendar text-blue-400"></i>
                  Calendário
                </h3>
                <div class="flex items-center gap-1 md:gap-2">
                  <button 
                    id="mini-calendar-prev"
                    class="p-1.5 md:p-2 text-gray-400 hover:text-white hover:bg-[#222222] rounded-lg transition-colors"
                    title="Mês anterior"
                  >
                    <i class="fas fa-chevron-left text-xs md:text-sm"></i>
                  </button>
                  <span id="mini-calendar-month-year" class="text-white font-medium text-xs md:text-sm min-w-[100px] md:min-w-[120px] text-center"></span>
                  <button 
                    id="mini-calendar-next"
                    class="p-1.5 md:p-2 text-gray-400 hover:text-white hover:bg-[#222222] rounded-lg transition-colors"
                    title="Próximo mês"
                  >
                    <i class="fas fa-chevron-right text-xs md:text-sm"></i>
                  </button>
                </div>
              </div>
              <div id="mini-calendar-grid" class="grid grid-cols-7 gap-0.5 md:gap-1">
                <!-- Dias da semana -->
                <div class="text-center text-[10px] md:text-xs font-semibold text-gray-400 py-1 md:py-2">Dom</div>
                <div class="text-center text-[10px] md:text-xs font-semibold text-gray-400 py-1 md:py-2">Seg</div>
                <div class="text-center text-[10px] md:text-xs font-semibold text-gray-400 py-1 md:py-2">Ter</div>
                <div class="text-center text-[10px] md:text-xs font-semibold text-gray-400 py-1 md:py-2">Qua</div>
                <div class="text-center text-[10px] md:text-xs font-semibold text-gray-400 py-1 md:py-2">Qui</div>
                <div class="text-center text-[10px] md:text-xs font-semibold text-gray-400 py-1 md:py-2">Sex</div>
                <div class="text-center text-[10px] md:text-xs font-semibold text-gray-400 py-1 md:py-2">Sáb</div>
                <!-- Dias serão inseridos aqui -->
              </div>
            </div>

            <!-- Carrossel de Eventos -->
            <div class="bg-[#1a1a1a] rounded-lg shadow-lg border border-[#2a2a2a] p-4 md:p-6">
            <div class="carousel-container">
              <!-- Navegação do Carrossel -->
              <div class="carousel-nav">
                <button id="carousel-prev" class="carousel-btn" aria-label="Slide anterior">
                  <i class="fas fa-chevron-left"></i>
                </button>
                <div class="carousel-dots">
                  <button class="carousel-dot active" data-slide="0" aria-label="Próximos Eventos"></button>
                  <button class="carousel-dot" data-slide="1" aria-label="Todos os Eventos"></button>
                </div>
                <button id="carousel-next" class="carousel-btn" aria-label="Próximo slide">
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>

              <!-- Slides do Carrossel -->
              <div class="carousel-wrapper">
                <div class="carousel-track" id="carousel-track">
                  <!-- Slide 1: Próximos Eventos -->
                  <div class="carousel-slide active">
                    <div class="carousel-slide-header">
                      <h2 class="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                        <i class="fas fa-clock text-blue-400"></i>
                        Próximos Eventos
                      </h2>
                    </div>
                    <div id="next-events-carousel" class="events-list-container">
                      <!-- Eventos serão inseridos aqui -->
                    </div>
                  </div>

                  <!-- Slide 2: Todos os Eventos -->
                  <div class="carousel-slide">
                    <div class="carousel-slide-header">
                      <h2 class="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                        <i class="fas fa-list text-purple-400"></i>
                        Todos os Eventos
                      </h2>
                    </div>
                    <div id="all-events-carousel" class="events-list-container">
                      <!-- Eventos serão inseridos aqui -->
                    </div>
                    <div class="carousel-slide-footer">
                      <button id="view-all-events-btn" class="view-all-btn hidden">
                        <i class="fas fa-arrow-right"></i>
                        <span id="view-all-text">Ver todos os eventos</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal de Visualização de Evento (reutilizado do calendário) -->
        <div id="event-view-modal" class="event-modal hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div class="event-modal-content bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-display font-bold text-white">Detalhes do Evento</h3>
              <button class="modal-close text-gray-400 hover:text-white cursor-pointer" id="close-view-modal">
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
            <div class="mt-6 flex gap-3">
              <button 
                type="button"
                class="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer"
                id="close-view-modal-btn"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>

        <!-- Modal de Criação de Evento -->
        <div id="create-event-modal" class="event-modal hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div class="event-modal-content bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-display font-bold text-white">Novo Evento</h3>
              <button class="modal-close text-gray-400 hover:text-white cursor-pointer" id="close-create-event-modal">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <form id="create-event-form" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-1">Título *</label>
                <input 
                  type="text" 
                  id="create-event-title" 
                  required
                  class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400"
                  placeholder="Digite o título do evento"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-1">Descrição</label>
                <textarea 
                  id="create-event-description" 
                  rows="3"
                  class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400"
                  placeholder="Digite a descrição do evento"
                ></textarea>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-1">Data *</label>
                <input 
                  type="date" 
                  id="create-event-date" 
                  required
                  class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-1">Hora Início</label>
                  <input 
                    type="time" 
                    id="create-event-start-time" 
                    class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer"
                    style="cursor: pointer;"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-1">Hora Fim</label>
                  <input 
                    type="time" 
                    id="create-event-end-time" 
                    class="w-full px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer"
                    style="cursor: pointer;"
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
                  <div id="create-custom-color-container" class="hidden">
                    <label class="block text-sm font-medium text-gray-300 mb-1">Cor Personalizada</label>
                    <input 
                      type="color" 
                      id="create-event-color-custom" 
                      value="#ff8e4d"
                      class="w-full h-10 rounded-lg cursor-pointer bg-[#222222] border border-[#2a2a2a]"
                    />
                  </div>
                  <input 
                    type="hidden" 
                    id="create-event-color" 
                    value="#ff8e4d"
                  />
                </div>
              </div>
              <div class="flex gap-2 pt-4">
                <button 
                  type="submit" 
                  id="submit-create-event-btn"
                  class="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                >
                  <span id="submit-create-btn-text">Criar</span>
                  <span id="submit-create-btn-spinner" class="hidden">
                    <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                </button>
                <button 
                  type="button" 
                  class="bg-[#222222] hover:bg-[#2a2a2a] text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer"
                  id="cancel-create-event-btn"
                >
                  Cancelar
                </button>
              </div>
              <div id="create-save-status" class="mt-2 text-sm text-center hidden"></div>
            </form>
          </div>
        </div>

        <!-- Modal de Todos os Eventos -->
        <div id="all-events-modal" class="event-modal hidden fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div class="event-modal-content bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-display font-bold text-white">Todos os Eventos</h3>
              <button class="modal-close text-gray-400 hover:text-white cursor-pointer" id="close-all-events-modal">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div id="all-events-modal-list" class="events-list-container flex-1 overflow-y-auto">
              <!-- Eventos serão inseridos aqui -->
            </div>
            <div class="mt-4 flex justify-end">
              <button 
                type="button"
                class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer"
                id="close-all-events-modal-btn"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  `;const J=document.getElementById("loading-state"),Se=document.getElementById("error-state"),Le=document.getElementById("content"),Be=document.getElementById("next-events-carousel"),Y=document.getElementById("all-events-carousel");document.getElementById("logout-btn");const T=document.getElementById("event-view-modal"),M=document.getElementById("all-events-modal"),W=document.getElementById("all-events-modal-list"),Ce=document.getElementById("carousel-track"),K=document.getElementById("carousel-prev"),X=document.getElementById("carousel-next"),Ie=document.querySelectorAll(".carousel-dot"),E=document.getElementById("create-event-modal"),Z=document.getElementById("open-create-event-modal"),ee=document.getElementById("close-create-event-modal"),te=document.getElementById("cancel-create-event-btn"),H=document.getElementById("create-event-form"),oe=document.getElementById("create-event-date"),se="https://script.google.com/macros/s/AKfycbw4G3MjAMTUDGG_plout6pQ5DqVa8kCu1EGy38XfYYxYpMRSmsvzOB9Z1HxzZEcVPzGSQ/exec";let w;try{const e=new Ge({storageKey:"calendar-events"});if(se)try{const t=new Ve({scriptUrl:se});await t.initialize(),w=t}catch(t){console.error("❌ Erro ao conectar Google Apps Script:",t),w=e}await w.initialize()}catch(e){console.error("❌ Erro ao inicializar armazenamento:",e),ve("Erro ao conectar com o armazenamento de dados");return}const G=e=>{const t=new Date(e+"T00:00:00"),o=new Date,s=new Date(o);s.setDate(s.getDate()+1);const n=t.toDateString()===o.toDateString(),a=t.toDateString()===s.toDateString(),r=String(t.getDate()).padStart(2,"0"),c=String(t.getMonth()+1).padStart(2,"0"),m=t.getFullYear();return n?`Hoje (${r}/${c}/${m})`:a?`Amanhã (${r}/${c}/${m})`:`${r}/${c}/${m}`},k=e=>{if(!e)return"";const[t,o]=e.split(":");return`${t}:${o}`},V=e=>{const t=e.color||"#ff8e4d",o=k(e.startTime),s=k(e.endTime),n=o&&s?`${o} - ${s}`:o||"Sem horário";return`
      <div class="event-item-row" data-event-id="${e.id}" style="border-left-color: ${t}">
        <div class="event-item-color" style="background-color: ${t}"></div>
        <div class="event-item-content">
          <span class="event-item-title">${e.title||"Sem título"}</span>
          <span class="event-item-time">
            <i class="fas fa-clock"></i>
            ${n}
          </span>
        </div>
      </div>
    `},q=e=>{const t=T,o=document.getElementById("view-event-title"),s=document.getElementById("view-event-description"),n=document.getElementById("view-event-start-time"),a=document.getElementById("view-event-end-time"),r=document.getElementById("view-event-date"),c=document.getElementById("view-event-id"),m=document.getElementById("view-event-color");o&&(o.textContent=e.title||"Sem título"),s&&(s.textContent=e.description||"-"),n&&(n.textContent=k(e.startTime)||"-"),a&&(a.textContent=k(e.endTime)||"-"),r&&(r.textContent=G(e.date)),c&&(c.value=e.id||""),m&&(m.value=e.color||"#ff8e4d"),t.classList.remove("hidden")},P=()=>{T.classList.add("hidden")},Te=(e,t)=>{if(e.length===0)return;const o=[...e].sort((i,p)=>{const y=i.startTime||"00:00",B=p.startTime||"00:00";return y.localeCompare(B)}),s=G(t),[n,a,r]=s.split("-").map(Number),c=new Date(n,a-1,r),m=c.toLocaleDateString("pt-BR",{weekday:"long"}),u=c.toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"}),v=`
      <div id="events-list-modal" class="event-modal fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div class="event-modal-content bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-white">Eventos - ${m}, ${u}</h3>
            <button class="modal-close text-gray-400 hover:text-white cursor-pointer" id="close-events-list-modal">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="space-y-2">
            ${o.map(i=>{const p=i.startTime&&i.endTime?`${k(i.startTime)} - ${k(i.endTime)}`:i.startTime?`${k(i.startTime)}`:"Horário não definido";return i.color,`
                <div 
                  class="event-list-item p-3 rounded-lg transition-colors hover:bg-[#222222] border-l-4"
                  style="border-left-color: ${i.color}; background-color: ${i.color}15;"
                  data-event-id="${i.id}"
                >
                  <div class="flex items-start justify-between gap-2">
                    <div 
                      class="flex-1 cursor-pointer"
                      data-action="view-event"
                      data-event-id="${i.id}"
                    >
                      <div class="flex items-center gap-2 mb-1">
                        <span class="text-xs font-medium text-gray-400">${p}</span>
                      </div>
                      <h4 class="text-sm font-semibold text-white mb-1">${i.title||"Sem título"}</h4>
                      ${i.description?`<p class="text-xs text-gray-400 line-clamp-2">${i.description}</p>`:""}
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
          <div class="mt-6">
            <button 
              type="button"
              class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer"
              id="close-events-list-modal-btn"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    `,l=document.getElementById("events-list-modal");l&&l.remove(),document.body.insertAdjacentHTML("beforeend",v);const d=document.getElementById("events-list-modal"),x=document.getElementById("close-events-list-modal"),f=document.getElementById("close-events-list-modal-btn"),h=()=>{d&&d.remove()};x&&x.addEventListener("click",h),f&&f.addEventListener("click",h),d&&d.addEventListener("click",i=>{i.target===d&&h()}),d.querySelectorAll('[data-action="view-event"]').forEach(i=>{i.addEventListener("click",()=>{const p=i.getAttribute("data-event-id"),y=o.find(B=>B.id===p);y&&(h(),q(y))})})},Me=e=>{W.innerHTML=e.length>0?e.map(V).join(""):'<p class="text-gray-400 text-center py-4">Nenhum evento encontrado</p>',M.classList.remove("hidden"),W.querySelectorAll(".event-item-row").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-event-id"),s=e.find(n=>n.id===o);s&&(A(),q(s))})})},A=()=>{M.classList.add("hidden")},ne=document.getElementById("close-view-modal"),ae=document.getElementById("close-view-modal-btn");ne&&ne.addEventListener("click",P),ae&&ae.addEventListener("click",P);const re=document.getElementById("close-all-events-modal"),ie=document.getElementById("close-all-events-modal-btn");re&&re.addEventListener("click",A),ie&&ie.addEventListener("click",A),T.addEventListener("click",e=>{e.target===T&&P()}),M.addEventListener("click",e=>{e.target===M&&A()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(T.classList.contains("hidden")||P(),M.classList.contains("hidden")||A(),E&&!E.classList.contains("hidden")&&F())});const Ae=()=>{if(E){const e=new Date,t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),n=`${t}-${o}-${s}`;oe&&(oe.value=n);const a=document.querySelector('#create-event-modal .color-option[data-color="#ff8e4d"]');a&&(document.querySelectorAll("#create-event-modal .color-option").forEach(r=>{r.classList.remove("border-primary-500","border-4"),r.classList.add("border-gray-300","border-2")}),a.classList.remove("border-gray-300","border-2"),a.classList.add("border-primary-500","border-4")),E.classList.remove("hidden")}},F=()=>{if(E&&(E.classList.add("hidden"),H)){H.reset();const e=document.getElementById("create-event-color");e&&(e.value="#ff8e4d"),document.querySelectorAll("#create-event-modal .color-option").forEach(o=>{o.classList.remove("border-primary-500","border-4"),o.classList.add("border-gray-300","border-2")});const t=document.getElementById("create-custom-color-container");t&&t.classList.add("hidden")}},$e=()=>{const e=document.getElementById("create-event-start-time"),t=document.getElementById("create-event-end-time");e&&(e.addEventListener("click",function(){if(this.showPicker&&typeof this.showPicker=="function")try{this.showPicker()}catch{this.focus()}}),e.style.cursor="pointer"),t&&(t.addEventListener("click",function(){if(this.showPicker&&typeof this.showPicker=="function")try{this.showPicker()}catch{this.focus()}}),t.style.cursor="pointer")};Z&&Z.addEventListener("click",()=>{Ae(),setTimeout(()=>{$e()},100)}),ee&&ee.addEventListener("click",F),te&&te.addEventListener("click",F),E&&E.addEventListener("click",e=>{e.target===E&&F()}),document.querySelectorAll("#create-event-modal .color-option").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-color"),o=document.getElementById("create-event-color");o&&(o.value=t),document.querySelectorAll("#create-event-modal .color-option").forEach(n=>{n.classList.remove("border-primary-500","border-4"),n.classList.add("border-gray-300","border-2")}),e.classList.remove("border-gray-300","border-2"),e.classList.add("border-primary-500","border-4");const s=document.getElementById("create-custom-color-container");s&&s.classList.add("hidden")})});const de=document.querySelector('#create-event-modal [data-action="open-custom-color"]'),le=document.getElementById("create-event-color-custom"),ce=document.getElementById("create-custom-color-container");de&&de.addEventListener("click",()=>{ce&&ce.classList.toggle("hidden")}),le&&le.addEventListener("change",e=>{const t=document.getElementById("create-event-color");t&&(t.value=e.target.value),document.querySelectorAll("#create-event-modal .color-option").forEach(o=>{o.classList.remove("border-primary-500","border-4"),o.classList.add("border-gray-300","border-2")})});const je=()=>Date.now().toString(36)+Math.random().toString(36).substr(2);H&&H.addEventListener("submit",async e=>{var a;e.preventDefault();const t=document.getElementById("submit-create-event-btn"),o=document.getElementById("submit-create-btn-text"),s=document.getElementById("submit-create-btn-spinner"),n=document.getElementById("create-save-status");t&&(t.disabled=!0,o&&o.classList.add("hidden"),s&&s.classList.remove("hidden")),n&&(n.classList.remove("hidden"),n.textContent="💾 Salvando evento...",n.className="mt-2 text-sm text-center text-blue-600 font-medium");try{const r=document.getElementById("create-event-title").value,c=document.getElementById("create-event-description").value,m=document.getElementById("create-event-date").value,u=document.getElementById("create-event-start-time").value,v=document.getElementById("create-event-end-time").value,l=document.getElementById("create-event-color").value,d=m,x=(l||"#3b82f6").toLowerCase()==="#3b82f6",f=je();if(x)if(console.log("🔵 Evento azul detectado - salvando na aba Ações"),w&&typeof w.saveAction=="function"){const i=d,p=u||"";try{await w.saveAction({id:f,title:r.trim()||"",description:c.trim()||"",createdAt:new Date().toISOString(),createdDate:i,createdTime:p,finishedDate:"",finishedTime:""}),console.log("✅ Ação salva com sucesso na aba Ações")}catch(y){throw console.error("❌ Erro ao salvar ação:",y),new Error(`Erro ao salvar ação: ${y.message}`)}}else{const i=w?`Serviço de armazenamento (${((a=w.constructor)==null?void 0:a.name)||"desconhecido"}) não suporta salvar ações. Use GoogleAppsScriptService.`:"Serviço de armazenamento não disponível";throw console.error("❌",i),new Error(i)}const h={id:f,title:r.trim(),description:c.trim(),date:d,startTime:u||"",endTime:v||"",color:l||"#ff8e4d",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};await w.saveEvent(h),n&&(n.textContent="✅ Evento criado com sucesso!",n.className="mt-2 text-sm text-center text-green-600 font-medium"),setTimeout(()=>{window.location.reload()},1e3)}catch(r){console.error("Erro ao salvar evento:",r),n&&(n.textContent="❌ Erro ao salvar evento. Tente novamente.",n.className="mt-2 text-sm text-center text-red-600 font-medium"),t&&(t.disabled=!1,o&&o.classList.remove("hidden"),s&&s.classList.add("hidden"))}});const me=e=>e.sort((t,o)=>{const s=new Date(t.date+"T"+(t.startTime||"00:00")),n=new Date(o.date+"T"+(o.startTime||"00:00"));return s-n}),He=(e,t)=>{const o=new Date;o.setHours(0,0,0,0);const s=new Date;switch(t){case"today":return e.filter(u=>new Date(u.date+"T00:00:00").toDateString()===o.toDateString());case"week":const n=o.getDay();let a,r;if(n===0||n===6){const u=n===0?1:2;a=new Date(o),a.setDate(o.getDate()+u),a.setHours(0,0,0,0),r=new Date(a),r.setDate(a.getDate()+4),r.setHours(23,59,59,999)}else{a=new Date(o),a.setHours(0,0,0,0);const u=5-n;r=new Date(o),r.setDate(o.getDate()+u),r.setHours(23,59,59,999)}return e.filter(u=>{const v=new Date(u.date+"T00:00:00"),l=v.getDay(),d=l>=1&&l<=5;return v>=a&&v<=r&&d});case"month":const c=new Date(o.getFullYear(),o.getMonth(),1),m=new Date(o.getFullYear(),o.getMonth()+1,0);return m.setHours(23,59,59,999),e.filter(u=>{const v=new Date(u.date+"T00:00:00");return v>=c&&v<=m});case"upcoming":return e.filter(u=>new Date(u.date+"T"+(u.startTime||"00:00"))>=s);case"all":default:return e}},ue=(e,t=null)=>{const o=new Date,s=e.filter(a=>new Date(a.date+"T"+(a.startTime||"00:00"))>=o),n=me(s);return t?n.slice(0,t):n},qe=e=>{const t=new Date;t.setHours(0,0,0,0);const o=e.filter(g=>new Date(g.date+"T00:00:00").toDateString()===t.toDateString()),s=document.getElementById("stats-today");s&&(s.textContent=o.length);const n=ue(e),a=n.length>0?n[0]:null,r=document.getElementById("stats-next-title"),c=document.getElementById("stats-next-time"),m=document.getElementById("stats-next-title-mobile"),u=document.getElementById("stats-next-time-mobile"),v=(g,b)=>{if(a&&g&&b){g.textContent=a.title||"Sem título";const C=G(a.date),I=k(a.startTime),ke=k(a.endTime);I&&ke?b.textContent=`${C} • ${I} - ${ke}`:I?b.textContent=`${C} • ${I}`:b.textContent=C}else g&&b&&(g.textContent="Nenhum",b.textContent="-")};v(r,c),v(m,u);const l=t.getDay();let d,x;if(l===0||l===6){const g=l===0?1:2;d=new Date(t),d.setDate(t.getDate()+g),d.setHours(0,0,0,0),x=new Date(d),x.setDate(d.getDate()+4),x.setHours(23,59,59,999)}else{d=new Date(t),d.setHours(0,0,0,0);const g=5-l;x=new Date(t),x.setDate(t.getDate()+g),x.setHours(23,59,59,999)}const f=e.filter(g=>{const b=new Date(g.date+"T00:00:00"),C=b.getDay(),I=C>=1&&C<=5;return b>=d&&b<=x&&I}),h=document.getElementById("stats-week");h&&(h.textContent=f.length);const i=new Date(t.getFullYear(),t.getMonth(),1),p=new Date(t.getFullYear(),t.getMonth()+1,0);p.setHours(23,59,59,999);const y=e.filter(g=>{const b=new Date(g.date+"T00:00:00");return b>=i&&b<=p}),B=document.getElementById("stats-month");B&&(B.textContent=y.length)},ve=e=>{J.classList.add("hidden"),Se.classList.remove("hidden"),document.getElementById("error-message").textContent=e};let $="all",j="";const Pe=(e,t)=>{if(!t||t.trim()==="")return e;const o=t.toLowerCase().trim();return e.filter(s=>{const n=(s.title||"").toLowerCase(),a=(s.description||"").toLowerCase();return n.includes(o)||a.includes(o)})},pe=async(e=$,t=j)=>{try{const o=await w.loadEvents(),s=me([...o]);let n=He(s,e);t&&t.trim()!==""&&(n=Pe(n,t)),xe=n;const a=ue(s,3);Be.innerHTML=a.length>0?a.map(V).join(""):'<p class="text-gray-400 text-center py-4">Nenhum evento próximo</p>';const r=n.slice(0,3);Y.innerHTML=r.length>0?r.map(V).join(""):'<p class="text-gray-400 text-center py-4">Nenhum evento encontrado</p>';const c=document.getElementById("view-all-events-btn");if(c)if(n.length>3){c.classList.remove("hidden");const m=document.getElementById("view-all-text");m&&(m.textContent=`Ver todos os ${n.length} eventos`)}else c.classList.add("hidden");document.querySelectorAll(".event-item-row").forEach(m=>{m.addEventListener("click",()=>{const u=m.getAttribute("data-event-id"),v=s.find(l=>l.id===u);v&&q(v)})}),qe(s),Ne(s),J.classList.add("hidden"),Le.classList.remove("hidden")}catch(o){console.error("Erro ao carregar eventos:",o),ve(o.message||"Erro desconhecido ao carregar eventos")}};R.init();let xe=[],S=new Date,fe=[];const Fe=e=>{const t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${o}-${s}`},ze=e=>fe.filter(t=>t.date===e),U=()=>{const e=document.getElementById("mini-calendar-grid"),t=document.getElementById("mini-calendar-month-year");if(!e||!t)return;const o=S.getFullYear(),s=S.getMonth(),n=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];t.textContent=`${n[s]} ${o}`;const a=new Date(o,s,1),r=new Date(o,s+1,0),c=new Date;c.setHours(0,0,0,0);const m=a.getDay(),u=r.getDate();e.querySelectorAll(".mini-cal-day, .mini-cal-day-empty").forEach(l=>l.remove());for(let l=0;l<m;l++){const d=document.createElement("div");d.className="mini-cal-day-empty",e.appendChild(d)}for(let l=1;l<=u;l++){const d=new Date(o,s,l),x=Fe(d),f=ze(x),h=d.toDateString()===c.toDateString(),i=d.getMonth()===s,p=document.createElement("div");if(p.className=`mini-cal-day relative p-2 text-center rounded-lg cursor-pointer transition-all ${i?"":"opacity-30"} ${h?"bg-transparent border-2 border-red-500 text-red-400 font-bold":f.length>0?"bg-[#222222] hover:bg-[#2a2a2a] text-white":"bg-[#1a1a1a] hover:bg-[#222222] text-gray-300"}`,p.textContent=l,p.setAttribute("data-date",x),p.setAttribute("data-day",l),f.length>0&&i){const y=document.createElement("div");y.className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white",p.appendChild(y)}p.addEventListener("click",()=>{i&&f.length>0&&(f.length===1?q(f[0]):Te(f,d))}),e.appendChild(p)}},Ne=e=>{fe=e,U()},O=async(e=$,t=j)=>{Y&&(Y.innerHTML=`
        <div class="flex flex-col items-center justify-center py-8">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500 mb-3"></div>
          <p class="text-gray-400 text-sm">Carregando eventos...</p>
        </div>
      `),await pe(e,t)},z=document.getElementById("search-events-input"),L=document.getElementById("clear-search-btn");if(z){let e;z.addEventListener("input",t=>{const o=t.target.value;j=o,L&&(o.trim()!==""?L.classList.remove("hidden"):L.classList.add("hidden")),clearTimeout(e),e=setTimeout(()=>{O($,o)},300)})}L&&L.addEventListener("click",()=>{z&&(z.value="",j="",L.classList.add("hidden"),O($,""))});const ge=document.querySelectorAll(".filter-quick-btn");ge.forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-filter");ge.forEach(o=>o.classList.remove("active")),e.classList.add("active"),$=t,await O(t,j)})});const be=document.getElementById("view-all-events-btn");be&&be.addEventListener("click",()=>{Me(xe)});let D=0;const N=2,Q=()=>{const e=document.querySelectorAll(".carousel-slide"),t=document.querySelectorAll(".carousel-dot");e.forEach((o,s)=>{s===D?o.classList.add("active"):o.classList.remove("active")}),t.forEach((o,s)=>{s===D?o.classList.add("active"):o.classList.remove("active")}),Ce.style.transform=`translateX(-${D*100}%)`},Re=e=>{e>=0&&e<N&&(D=e,Q())},ye=()=>{D=(D+1)%N,Q()},he=()=>{D=(D-1+N)%N,Q()};X&&X.addEventListener("click",ye),K&&K.addEventListener("click",he),Ie.forEach((e,t)=>{e.addEventListener("click",()=>Re(t))}),document.addEventListener("keydown",e=>{e.key==="ArrowLeft"&&he(),e.key==="ArrowRight"&&ye()});const we=document.getElementById("mini-calendar-prev"),Ee=document.getElementById("mini-calendar-next");we&&we.addEventListener("click",()=>{S.setMonth(S.getMonth()-1),U()}),Ee&&Ee.addEventListener("click",()=>{S.setMonth(S.getMonth()+1),U()}),await pe()});
