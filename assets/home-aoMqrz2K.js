import"./index-IWM24kaj.js";import{G as et}from"./GoogleAppsScriptService-RRDeTsMz.js";import{L as tt}from"./LocalStorageService-C84leZPf.js";import{P as ot}from"./PersonalDataService-CGfDL3H2.js";import{S as st}from"./Sidebar-CewEtVMS.js";const at="/ambiente-dev/assets/iPhone%20Radar%20Alarm_Ringtone%20(Apple%20Sound)%20-%20Sound%20Effect%20for%20Editing%20-%20Sound%20Library%20(youtube)-dpORg-HX.mp3",S="/ambiente-dev/";function nt(R){const z=R.getFullYear(),A=String(R.getMonth()+1).padStart(2,"0"),W=String(R.getDate()).padStart(2,"0");return`${z}-${A}-${W}`}document.addEventListener("DOMContentLoaded",async()=>{if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${S}index.html`;return}const z=sessionStorage.getItem("username")||"Usuário",A=new st(z,"home"),W=document.getElementById("app");W.innerHTML=`
    ${A.render()}
    <div class="main-content">
      ${A.renderTopBar(`Bem-vindo, ${z}!`,"Resumo dos seus eventos")}
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

          <!-- Modo Foco (só o essencial) -->
          <div class="mb-4 flex items-center justify-between">
            <label class="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors">
              <input type="checkbox" id="modo-foco-toggle" class="w-4 h-4 rounded border-gray-500 bg-[#222222] text-blue-600 focus:ring-blue-500" />
              <span class="text-sm font-medium"><i class="fas fa-bullseye mr-1"></i>Modo foco</span>
            </label>
            <span class="text-xs text-gray-500">Só rotina, foco do dia e próximos eventos</span>
          </div>

          <!-- Conteúdo Modo Foco (rotina + foco + próximos + atalhos) -->
          <div id="content-essencial" class="hidden mb-6 md:mb-8 space-y-4">
            <div class="rotina-hoje-essencial bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4 md:p-6">
              <h3 class="text-base font-bold text-white mb-3 flex items-center gap-2"><i class="fas fa-tasks text-blue-400"></i>Rotina de hoje</h3>
              <ul id="rotina-hoje-essencial-list" class="space-y-2"></ul>
            </div>
            <div class="foco-essencial bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4 md:p-6">
              <h3 class="text-base font-bold text-white mb-3 flex items-center gap-2"><i class="fas fa-bullseye text-green-400"></i>Foco do dia</h3>
              <ul id="foco-essencial-list" class="space-y-2 mb-3"></ul>
              <div class="flex gap-2 flex-wrap">
                <input type="text" id="foco-input-essencial" placeholder="Prioridade 1, 2 ou 3..." class="flex-1 min-w-[180px] px-3 py-2 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm" />
                <button type="button" id="foco-add-essencial" class="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">Adicionar</button>
              </div>
            </div>
            <div class="proximos-essencial bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4 md:p-6">
              <h3 class="text-base font-bold text-white mb-3 flex items-center gap-2"><i class="fas fa-clock text-red-400"></i>Próximos eventos</h3>
              <div id="proximos-essencial-list" class="space-y-2"></div>
            </div>
            <div class="atalhos-essencial flex flex-wrap gap-2">
              <a href="${S}rotina.html" class="px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm font-medium border border-[#2a2a2a] transition-colors"><i class="fas fa-tasks mr-2"></i>Rotina</a>
              <a href="${S}notas.html" class="px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm font-medium border border-[#2a2a2a] transition-colors"><i class="fas fa-sticky-note mr-2"></i>Notas</a>
              <a href="${S}dashboard.html" class="px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm font-medium border border-[#2a2a2a] transition-colors"><i class="fas fa-chart-bar mr-2"></i>Dashboard</a>
              <a href="${S}agenda.html" class="px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm font-medium border border-[#2a2a2a] transition-colors"><i class="fas fa-calendar mr-2"></i>Agenda</a>
            </div>
          </div>

          <!-- Conteúdo completo -->
          <div id="content-full">
            <!-- Rotina + Foco + Pomodoro + Atalhos -->
            <div class="mb-6 md:mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div class="rotina-hoje-full bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
                <h3 class="text-sm font-bold text-white mb-2 flex items-center gap-2"><i class="fas fa-tasks text-blue-400"></i>Rotina de hoje</h3>
                <ul id="rotina-hoje-full-list" class="space-y-1.5 text-sm"></ul>
              </div>
              <div class="foco-full bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4">
                <h3 class="text-sm font-bold text-white mb-2 flex items-center gap-2"><i class="fas fa-bullseye text-green-400"></i>Foco do dia</h3>
                <ul id="foco-full-list" class="space-y-1.5 text-sm mb-2"></ul>
                <div class="flex gap-2">
                  <input type="text" id="foco-input-full" placeholder="Prioridade..." class="flex-1 px-2 py-1.5 bg-[#222222] border border-[#2a2a2a] text-white rounded text-xs focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />
                  <button type="button" id="foco-add-full" class="px-2 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium">+</button>
                </div>
              </div>
            </div>
            <div class="mb-6 md:mb-8 flex flex-wrap gap-4 items-start">
              <!-- Pomodoro -->
              <div class="pomodoro-widget bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4 min-w-[200px]">
                <h3 class="text-sm font-bold text-white mb-2 flex items-center gap-2"><i class="fas fa-hourglass-half text-orange-400"></i>Pomodoro</h3>
                <div class="text-2xl font-mono font-bold text-white mb-2" id="pomodoro-display">25:00</div>
                <div class="flex gap-2">
                  <button type="button" id="pomodoro-start" class="flex-1 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-sm font-medium">Iniciar</button>
                  <button type="button" id="pomodoro-pause" class="flex-1 px-3 py-1.5 bg-gray-600 hover:bg-gray-500 text-white rounded text-sm font-medium hidden">Pausar</button>
                  <button type="button" id="pomodoro-reset" class="px-3 py-1.5 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded text-sm">Reset</button>
                </div>
                <p class="text-xs text-gray-500 mt-2">25 min foco · 5 min pausa</p>
              </div>
              <!-- Atalhos rápidos -->
              <div class="atalhos-full flex flex-wrap gap-2 items-center">
                <span class="text-gray-400 text-sm mr-1">Atalhos:</span>
                <a href="${S}rotina.html" class="px-3 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm border border-[#2a2a2a] transition-colors"><i class="fas fa-tasks mr-1"></i>Rotina</a>
                <a href="${S}notas.html" class="px-3 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm border border-[#2a2a2a] transition-colors"><i class="fas fa-sticky-note mr-1"></i>Notas</a>
                <a href="${S}dashboard.html" class="px-3 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm border border-[#2a2a2a] transition-colors"><i class="fas fa-chart-bar mr-1"></i>Dashboard</a>
              </div>
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
  `;const se=document.getElementById("loading-state"),Ae=document.getElementById("error-state"),je=document.getElementById("content"),Fe=document.getElementById("next-events-carousel"),J=document.getElementById("all-events-carousel");document.getElementById("logout-btn");const j=document.getElementById("event-view-modal"),F=document.getElementById("all-events-modal"),ae=document.getElementById("all-events-modal-list"),Pe=document.getElementById("carousel-track"),ne=document.getElementById("carousel-prev"),re=document.getElementById("carousel-next"),He=document.querySelectorAll(".carousel-dot"),k=document.getElementById("create-event-modal"),ie=document.getElementById("open-create-event-modal"),de=document.getElementById("close-create-event-modal"),le=document.getElementById("cancel-create-event-btn"),O=document.getElementById("create-event-form"),ce=document.getElementById("create-event-date"),me="https://script.google.com/macros/s/AKfycbydP_poxCsy37w8Crubx-ctK2MOCri1UqHCDWgPfVFQhBp8iwaofX8V4WU-8pwFihSb/exec";let E;try{const e=new tt({storageKey:"calendar-events"});if(me)try{const t=new et({scriptUrl:me});await t.initialize(),E=t}catch(t){console.error("❌ Erro ao conectar Google Apps Script:",t),E=e}await E.initialize()}catch(e){console.error("❌ Erro ao inicializar armazenamento:",e),Ee("Erro ao conectar com o armazenamento de dados");return}const y=new ot;await y.initialize();const Q=e=>{const t=new Date(e+"T00:00:00"),o=new Date,s=new Date(o);s.setDate(s.getDate()+1);const a=t.toDateString()===o.toDateString(),n=t.toDateString()===s.toDateString(),r=String(t.getDate()).padStart(2,"0"),l=String(t.getMonth()+1).padStart(2,"0"),i=t.getFullYear();return a?`Hoje (${r}/${l}/${i})`:n?`Amanhã (${r}/${l}/${i})`:`${r}/${l}/${i}`},D=e=>{if(!e)return"";const[t,o]=e.split(":");return`${t}:${o}`},U=e=>{const t=e.color||"#ff8e4d",o=D(e.startTime),s=D(e.endTime),a=o&&s?`${o} - ${s}`:o||"Sem horário";return`
      <div class="event-item-row" data-event-id="${e.id}" style="border-left-color: ${t}">
        <div class="event-item-color" style="background-color: ${t}"></div>
        <div class="event-item-content">
          <span class="event-item-title">${e.title||"Sem título"}</span>
          <span class="event-item-time">
            <i class="fas fa-clock"></i>
            ${a}
          </span>
        </div>
      </div>
    `},P=e=>{const t=j,o=document.getElementById("view-event-title"),s=document.getElementById("view-event-description"),a=document.getElementById("view-event-start-time"),n=document.getElementById("view-event-end-time"),r=document.getElementById("view-event-date"),l=document.getElementById("view-event-id"),i=document.getElementById("view-event-color");o&&(o.textContent=e.title||"Sem título"),s&&(s.textContent=e.description||"-"),a&&(a.textContent=D(e.startTime)||"-"),n&&(n.textContent=D(e.endTime)||"-"),r&&(r.textContent=Q(e.date)),l&&(l.value=e.id||""),i&&(i.value=e.color||"#ff8e4d"),t.classList.remove("hidden")},V=()=>{j.classList.add("hidden")};let ue=!1;const L=nt(new Date),ve=()=>{const e=y.getRoutineItems().sort((s,a)=>s.order-a.order),t=y.getRoutineCheckmarksForDate(L),o=(s,a=!1)=>{const n=document.getElementById(s);n&&(n.innerHTML=e.length===0?'<li class="text-gray-400 text-sm">Nenhum item. <a href="'+S+'rotina.html" class="text-blue-400 hover:underline">Configurar rotina</a></li>':e.map(r=>{const l=!!t[r.id];return`
              <li class="flex items-center gap-2 p-1.5 rounded hover:bg-[#222222] transition-colors ${a?"text-xs":""}">
                <button type="button" class="rotina-check flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${l?"bg-green-600 border-green-500 text-white":"border-gray-500 text-gray-400 hover:border-green-500"}" data-id="${r.id}">
                  ${l?'<i class="fas fa-check text-xs"></i>':""}
                </button>
                <span class="${l?"text-gray-500 line-through":"text-white"}">${(r.label||"").replace(/</g,"&lt;")}</span>
              </li>
            `}).join(""))};o("rotina-hoje-essencial-list"),o("rotina-hoje-full-list",!0),document.querySelectorAll(".rotina-check").forEach(s=>{s.onclick=()=>{const a=s.dataset.id,n=y.getRoutineCheckmarksForDate(L);y.setRoutineCheckmark(L,a,!n[a]),ve()}})},X=()=>{const t=y.getFocusOfDay(L).items||[],o=y.getFocusCheckmarks(L),s=(a,n,r,l=!1)=>{const i=document.getElementById(a);i&&(i.innerHTML=t.map((c,v)=>{const d=!!o[String(v)];return`
          <li class="flex items-center gap-2 p-1.5 rounded hover:bg-[#222222] transition-colors ${l?"text-xs":""}">
            <button type="button" class="foco-check flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${d?"bg-green-600 border-green-500 text-white":"border-gray-500 text-gray-400"}" data-idx="${v}">
              ${d?'<i class="fas fa-check text-xs"></i>':""}
            </button>
            <span class="${d?"text-gray-500 line-through":"text-white"}">${(c||"").replace(/</g,"&lt;")}</span>
          </li>
        `}).join(""),i.querySelectorAll(".foco-check").forEach(c=>{c.onclick=()=>{const v=c.dataset.idx,d=y.getFocusCheckmarks(L);y.setFocusCheckmark(L,v,!d[v]),X()}}))};s("foco-essencial-list"),s("foco-full-list","foco-input-full","foco-add-full",!0)},Y=(e,t)=>{var r;const o=document.getElementById(e),s=(r=o==null?void 0:o.value)==null?void 0:r.trim();if(!s)return;const n=[...y.getFocusOfDay(L).items||[],s].slice(0,3);y.setFocusOfDay(L,n),o&&(o.value=""),X()},qe=e=>{const t=document.getElementById("proximos-essencial-list");t&&(t.innerHTML=e.length>0?e.map(U).join(""):'<p class="text-gray-400 text-sm">Nenhum evento próximo</p>',t.querySelectorAll(".event-item-row").forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-event-id"),a=e.find(n=>n.id===s);a&&P(a)})}))},Ne=()=>{const e=document.getElementById("modo-foco-toggle"),t=document.getElementById("content-essencial"),o=document.getElementById("content-full");if(!e||!t||!o)return;const s=localStorage.getItem("modo-foco")==="true";e.checked=s,s?(t.classList.remove("hidden"),o.classList.add("hidden")):(t.classList.add("hidden"),o.classList.remove("hidden")),e.addEventListener("change",()=>{const a=e.checked;localStorage.setItem("modo-foco",a?"true":"false"),t.classList.toggle("hidden",!a),o.classList.toggle("hidden",a)})},Re=()=>{const e=document.getElementById("pomodoro-display"),t=document.getElementById("pomodoro-start"),o=document.getElementById("pomodoro-pause"),s=document.getElementById("pomodoro-reset");if(!e||!t)return;const a=25*60,n=5*60;let r=a,l=!1,i=null;const c=()=>{const d=Math.floor(r/60),m=r%60;e.textContent=`${String(d).padStart(2,"0")}:${String(m).padStart(2,"0")}`},v=()=>{if(r<=0){clearInterval(i),i=null,l=!l,r=l?n:a,c(),t.classList.remove("hidden"),o.classList.add("hidden");try{const d=new Audio(at);d.volume=.7,d.play().catch(m=>{console.warn("Erro ao tocar áudio do pomodoro:",m)})}catch(d){console.warn("Erro ao criar áudio do pomodoro:",d)}return}r--,c()};t.addEventListener("click",()=>{i||(i=setInterval(v,1e3),t.classList.add("hidden"),o.classList.remove("hidden"))}),o.addEventListener("click",()=>{i&&clearInterval(i),i=null,t.classList.remove("hidden"),o.classList.add("hidden")}),s.addEventListener("click",()=>{i&&clearInterval(i),i=null,r=l?n:a,c(),t.classList.remove("hidden"),o.classList.add("hidden")}),c()},ze=e=>{var o,s,a,n;ve(),X();const t=e&&e.length?Z(e,3):[];qe(t),ue||(ue=!0,Ne(),Re(),(o=document.getElementById("foco-add-essencial"))==null||o.addEventListener("click",()=>Y("foco-input-essencial")),(s=document.getElementById("foco-add-full"))==null||s.addEventListener("click",()=>Y("foco-input-full")),(a=document.getElementById("foco-input-essencial"))==null||a.addEventListener("keydown",r=>{r.key==="Enter"&&Y("foco-input-essencial")}),(n=document.getElementById("foco-input-full"))==null||n.addEventListener("keydown",r=>{r.key==="Enter"&&Y("foco-input-full")}))},Oe=(e,t)=>{if(e.length===0)return;const o=[...e].sort((u,f)=>{const h=u.startTime||"00:00",M=f.startTime||"00:00";return h.localeCompare(M)}),s=Q(t),[a,n,r]=s.split("-").map(Number),l=new Date(a,n-1,r),i=l.toLocaleDateString("pt-BR",{weekday:"long"}),c=l.toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"}),v=`
      <div id="events-list-modal" class="event-modal fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div class="event-modal-content bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-white">Eventos - ${i}, ${c}</h3>
            <button class="modal-close text-gray-400 hover:text-white cursor-pointer" id="close-events-list-modal">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="space-y-2">
            ${o.map(u=>{const f=u.startTime&&u.endTime?`${D(u.startTime)} - ${D(u.endTime)}`:u.startTime?`${D(u.startTime)}`:"Horário não definido";return u.color,`
                <div 
                  class="event-list-item p-3 rounded-lg transition-colors hover:bg-[#222222] border-l-4"
                  style="border-left-color: ${u.color}; background-color: ${u.color}15;"
                  data-event-id="${u.id}"
                >
                  <div class="flex items-start justify-between gap-2">
                    <div 
                      class="flex-1 cursor-pointer"
                      data-action="view-event"
                      data-event-id="${u.id}"
                    >
                      <div class="flex items-center gap-2 mb-1">
                        <span class="text-xs font-medium text-gray-400">${f}</span>
                      </div>
                      <h4 class="text-sm font-semibold text-white mb-1">${u.title||"Sem título"}</h4>
                      ${u.description?`<p class="text-xs text-gray-400 line-clamp-2">${u.description}</p>`:""}
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
    `,d=document.getElementById("events-list-modal");d&&d.remove(),document.body.insertAdjacentHTML("beforeend",v);const m=document.getElementById("events-list-modal"),p=document.getElementById("close-events-list-modal"),g=document.getElementById("close-events-list-modal-btn"),w=()=>{m&&m.remove()};p&&p.addEventListener("click",w),g&&g.addEventListener("click",w),m&&m.addEventListener("click",u=>{u.target===m&&w()}),m.querySelectorAll('[data-action="view-event"]').forEach(u=>{u.addEventListener("click",()=>{const f=u.getAttribute("data-event-id"),h=o.find(M=>M.id===f);h&&(w(),P(h))})})},Ue=e=>{ae.innerHTML=e.length>0?e.map(U).join(""):'<p class="text-gray-400 text-center py-4">Nenhum evento encontrado</p>',F.classList.remove("hidden"),ae.querySelectorAll(".event-item-row").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-event-id"),s=e.find(a=>a.id===o);s&&(H(),P(s))})})},H=()=>{F.classList.add("hidden")},fe=document.getElementById("close-view-modal"),pe=document.getElementById("close-view-modal-btn");fe&&fe.addEventListener("click",V),pe&&pe.addEventListener("click",V);const ge=document.getElementById("close-all-events-modal"),xe=document.getElementById("close-all-events-modal-btn");ge&&ge.addEventListener("click",H),xe&&xe.addEventListener("click",H),j.addEventListener("click",e=>{e.target===j&&V()}),F.addEventListener("click",e=>{e.target===F&&H()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(j.classList.contains("hidden")||V(),F.classList.contains("hidden")||H(),k&&!k.classList.contains("hidden")&&_())});const Ve=()=>{if(k){const e=new Date,t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),a=`${t}-${o}-${s}`;ce&&(ce.value=a);const n=document.querySelector('#create-event-modal .color-option[data-color="#ff8e4d"]');n&&(document.querySelectorAll("#create-event-modal .color-option").forEach(r=>{r.classList.remove("border-primary-500","border-4"),r.classList.add("border-gray-300","border-2")}),n.classList.remove("border-gray-300","border-2"),n.classList.add("border-primary-500","border-4")),k.classList.remove("hidden")}},_=()=>{if(k&&(k.classList.add("hidden"),O)){O.reset();const e=document.getElementById("create-event-color");e&&(e.value="#ff8e4d"),document.querySelectorAll("#create-event-modal .color-option").forEach(o=>{o.classList.remove("border-primary-500","border-4"),o.classList.add("border-gray-300","border-2")});const t=document.getElementById("create-custom-color-container");t&&t.classList.add("hidden")}},Ye=()=>{const e=document.getElementById("create-event-start-time"),t=document.getElementById("create-event-end-time");e&&(e.addEventListener("click",function(){if(this.showPicker&&typeof this.showPicker=="function")try{this.showPicker()}catch{this.focus()}}),e.style.cursor="pointer"),t&&(t.addEventListener("click",function(){if(this.showPicker&&typeof this.showPicker=="function")try{this.showPicker()}catch{this.focus()}}),t.style.cursor="pointer")};ie&&ie.addEventListener("click",()=>{Ve(),setTimeout(()=>{Ye()},100)}),de&&de.addEventListener("click",_),le&&le.addEventListener("click",_),k&&k.addEventListener("click",e=>{e.target===k&&_()}),document.querySelectorAll("#create-event-modal .color-option").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-color"),o=document.getElementById("create-event-color");o&&(o.value=t),document.querySelectorAll("#create-event-modal .color-option").forEach(a=>{a.classList.remove("border-primary-500","border-4"),a.classList.add("border-gray-300","border-2")}),e.classList.remove("border-gray-300","border-2"),e.classList.add("border-primary-500","border-4");const s=document.getElementById("create-custom-color-container");s&&s.classList.add("hidden")})});const be=document.querySelector('#create-event-modal [data-action="open-custom-color"]'),he=document.getElementById("create-event-color-custom"),ye=document.getElementById("create-custom-color-container");be&&be.addEventListener("click",()=>{ye&&ye.classList.toggle("hidden")}),he&&he.addEventListener("change",e=>{const t=document.getElementById("create-event-color");t&&(t.value=e.target.value),document.querySelectorAll("#create-event-modal .color-option").forEach(o=>{o.classList.remove("border-primary-500","border-4"),o.classList.add("border-gray-300","border-2")})});const _e=()=>Date.now().toString(36)+Math.random().toString(36).substr(2);O&&O.addEventListener("submit",async e=>{var n;e.preventDefault();const t=document.getElementById("submit-create-event-btn"),o=document.getElementById("submit-create-btn-text"),s=document.getElementById("submit-create-btn-spinner"),a=document.getElementById("create-save-status");t&&(t.disabled=!0,o&&o.classList.add("hidden"),s&&s.classList.remove("hidden")),a&&(a.classList.remove("hidden"),a.textContent="💾 Salvando evento...",a.className="mt-2 text-sm text-center text-blue-600 font-medium");try{const r=document.getElementById("create-event-title").value,l=document.getElementById("create-event-description").value,i=document.getElementById("create-event-date").value,c=document.getElementById("create-event-start-time").value,v=document.getElementById("create-event-end-time").value,d=document.getElementById("create-event-color").value,m=i,p=(d||"#3b82f6").toLowerCase()==="#3b82f6",g=_e();if(p)if(console.log("🔵 Evento azul detectado - salvando na aba Ações"),E&&typeof E.saveAction=="function"){const u=m,f=c||"";try{await E.saveAction({id:g,title:r.trim()||"",description:l.trim()||"",createdAt:new Date().toISOString(),createdDate:u,createdTime:f,finishedDate:"",finishedTime:""}),console.log("✅ Ação salva com sucesso na aba Ações")}catch(h){throw console.error("❌ Erro ao salvar ação:",h),new Error(`Erro ao salvar ação: ${h.message}`)}}else{const u=E?`Serviço de armazenamento (${((n=E.constructor)==null?void 0:n.name)||"desconhecido"}) não suporta salvar ações. Use GoogleAppsScriptService.`:"Serviço de armazenamento não disponível";throw console.error("❌",u),new Error(u)}const w={id:g,title:r.trim(),description:l.trim(),date:m,startTime:c||"",endTime:v||"",color:d||"#ff8e4d",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};await E.saveEvent(w),a&&(a.textContent="✅ Evento criado com sucesso!",a.className="mt-2 text-sm text-center text-green-600 font-medium"),setTimeout(()=>{window.location.reload()},1e3)}catch(r){console.error("Erro ao salvar evento:",r),a&&(a.textContent="❌ Erro ao salvar evento. Tente novamente.",a.className="mt-2 text-sm text-center text-red-600 font-medium"),t&&(t.disabled=!1,o&&o.classList.remove("hidden"),s&&s.classList.add("hidden"))}});const we=e=>e.sort((t,o)=>{const s=new Date(t.date+"T"+(t.startTime||"00:00")),a=new Date(o.date+"T"+(o.startTime||"00:00"));return s-a}),Ge=(e,t)=>{const o=new Date;o.setHours(0,0,0,0);const s=new Date;switch(t){case"today":return e.filter(c=>new Date(c.date+"T00:00:00").toDateString()===o.toDateString());case"week":const a=o.getDay();let n,r;if(a===0||a===6){const c=a===0?1:2;n=new Date(o),n.setDate(o.getDate()+c),n.setHours(0,0,0,0),r=new Date(n),r.setDate(n.getDate()+4),r.setHours(23,59,59,999)}else{n=new Date(o),n.setHours(0,0,0,0);const c=5-a;r=new Date(o),r.setDate(o.getDate()+c),r.setHours(23,59,59,999)}return e.filter(c=>{const v=new Date(c.date+"T00:00:00"),d=v.getDay(),m=d>=1&&d<=5;return v>=n&&v<=r&&m});case"month":const l=new Date(o.getFullYear(),o.getMonth(),1),i=new Date(o.getFullYear(),o.getMonth()+1,0);return i.setHours(23,59,59,999),e.filter(c=>{const v=new Date(c.date+"T00:00:00");return v>=l&&v<=i});case"upcoming":return e.filter(c=>new Date(c.date+"T"+(c.startTime||"00:00"))>=s);case"all":default:return e}},Z=(e,t=null)=>{const o=new Date,s=e.filter(n=>new Date(n.date+"T"+(n.startTime||"00:00"))>=o),a=we(s);return t?a.slice(0,t):a},Ke=e=>{const t=new Date;t.setHours(0,0,0,0);const o=e.filter(x=>new Date(x.date+"T00:00:00").toDateString()===t.toDateString()),s=document.getElementById("stats-today");s&&(s.textContent=o.length);const a=Z(e),n=a.length>0?a[0]:null,r=document.getElementById("stats-next-title"),l=document.getElementById("stats-next-time"),i=document.getElementById("stats-next-title-mobile"),c=document.getElementById("stats-next-time-mobile"),v=(x,b)=>{if(n&&x&&b){x.textContent=n.title||"Sem título";const T=Q(n.date),$=D(n.startTime),$e=D(n.endTime);$&&$e?b.textContent=`${T} • ${$} - ${$e}`:$?b.textContent=`${T} • ${$}`:b.textContent=T}else x&&b&&(x.textContent="Nenhum",b.textContent="-")};v(r,l),v(i,c);const d=t.getDay();let m,p;if(d===0||d===6){const x=d===0?1:2;m=new Date(t),m.setDate(t.getDate()+x),m.setHours(0,0,0,0),p=new Date(m),p.setDate(m.getDate()+4),p.setHours(23,59,59,999)}else{m=new Date(t),m.setHours(0,0,0,0);const x=5-d;p=new Date(t),p.setDate(t.getDate()+x),p.setHours(23,59,59,999)}const g=e.filter(x=>{const b=new Date(x.date+"T00:00:00"),T=b.getDay(),$=T>=1&&T<=5;return b>=m&&b<=p&&$}),w=document.getElementById("stats-week");w&&(w.textContent=g.length);const u=new Date(t.getFullYear(),t.getMonth(),1),f=new Date(t.getFullYear(),t.getMonth()+1,0);f.setHours(23,59,59,999);const h=e.filter(x=>{const b=new Date(x.date+"T00:00:00");return b>=u&&b<=f}),M=document.getElementById("stats-month");M&&(M.textContent=h.length)},Ee=e=>{se.classList.add("hidden"),Ae.classList.remove("hidden"),document.getElementById("error-message").textContent=e};let q="all",N="";const We=(e,t)=>{if(!t||t.trim()==="")return e;const o=t.toLowerCase().trim();return e.filter(s=>{const a=(s.title||"").toLowerCase(),n=(s.description||"").toLowerCase();return a.includes(o)||n.includes(o)})},ke=async(e=q,t=N)=>{try{const o=await E.loadEvents(),s=we([...o]);let a=Ge(s,e);t&&t.trim()!==""&&(a=We(a,t)),De=a;const n=Z(s,3);Fe.innerHTML=n.length>0?n.map(U).join(""):'<p class="text-gray-400 text-center py-4">Nenhum evento próximo</p>';const r=a.slice(0,3);J.innerHTML=r.length>0?r.map(U).join(""):'<p class="text-gray-400 text-center py-4">Nenhum evento encontrado</p>';const l=document.getElementById("view-all-events-btn");if(l)if(a.length>3){l.classList.remove("hidden");const i=document.getElementById("view-all-text");i&&(i.textContent=`Ver todos os ${a.length} eventos`)}else l.classList.add("hidden");document.querySelectorAll(".event-item-row").forEach(i=>{i.addEventListener("click",()=>{const c=i.getAttribute("data-event-id"),v=s.find(d=>d.id===c);v&&P(v)})}),Ke(s),Xe(s),se.classList.add("hidden"),je.classList.remove("hidden"),ze(s)}catch(o){console.error("Erro ao carregar eventos:",o),Ee(o.message||"Erro desconhecido ao carregar eventos")}};A.init();let De=[],I=new Date,Le=[];const Je=e=>{const t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${o}-${s}`},Qe=e=>Le.filter(t=>t.date===e),ee=()=>{const e=document.getElementById("mini-calendar-grid"),t=document.getElementById("mini-calendar-month-year");if(!e||!t)return;const o=I.getFullYear(),s=I.getMonth(),a=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];t.textContent=`${a[s]} ${o}`;const n=new Date(o,s,1),r=new Date(o,s+1,0),l=new Date;l.setHours(0,0,0,0);const i=n.getDay(),c=r.getDate();e.querySelectorAll(".mini-cal-day, .mini-cal-day-empty").forEach(d=>d.remove());for(let d=0;d<i;d++){const m=document.createElement("div");m.className="mini-cal-day-empty",e.appendChild(m)}for(let d=1;d<=c;d++){const m=new Date(o,s,d),p=Je(m),g=Qe(p),w=m.toDateString()===l.toDateString(),u=m.getMonth()===s,f=document.createElement("div");if(f.className=`mini-cal-day relative p-2 text-center rounded-lg cursor-pointer transition-all ${u?"":"opacity-30"} ${w?"bg-transparent border-2 border-red-500 text-red-400 font-bold":g.length>0?"bg-[#222222] hover:bg-[#2a2a2a] text-white":"bg-[#1a1a1a] hover:bg-[#222222] text-gray-300"}`,f.textContent=d,f.setAttribute("data-date",p),f.setAttribute("data-day",d),g.length>0&&u){const h=document.createElement("div");h.className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white",f.appendChild(h)}f.addEventListener("click",()=>{u&&g.length>0&&(g.length===1?P(g[0]):Oe(g,m))}),e.appendChild(f)}},Xe=e=>{Le=e,ee()},te=async(e=q,t=N)=>{J&&(J.innerHTML=`
        <div class="flex flex-col items-center justify-center py-8">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500 mb-3"></div>
          <p class="text-gray-400 text-sm">Carregando eventos...</p>
        </div>
      `),await ke(e,t)},G=document.getElementById("search-events-input"),C=document.getElementById("clear-search-btn");if(G){let e;G.addEventListener("input",t=>{const o=t.target.value;N=o,C&&(o.trim()!==""?C.classList.remove("hidden"):C.classList.add("hidden")),clearTimeout(e),e=setTimeout(()=>{te(q,o)},300)})}C&&C.addEventListener("click",()=>{G&&(G.value="",N="",C.classList.add("hidden"),te(q,""))});const Se=document.querySelectorAll(".filter-quick-btn");Se.forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-filter");Se.forEach(o=>o.classList.remove("active")),e.classList.add("active"),q=t,await te(t,N)})});const Be=document.getElementById("view-all-events-btn");Be&&Be.addEventListener("click",()=>{Ue(De)});let B=0;const K=2,oe=()=>{const e=document.querySelectorAll(".carousel-slide"),t=document.querySelectorAll(".carousel-dot");e.forEach((o,s)=>{s===B?o.classList.add("active"):o.classList.remove("active")}),t.forEach((o,s)=>{s===B?o.classList.add("active"):o.classList.remove("active")}),Pe.style.transform=`translateX(-${B*100}%)`},Ze=e=>{e>=0&&e<K&&(B=e,oe())},Ie=()=>{B=(B+1)%K,oe()},Ce=()=>{B=(B-1+K)%K,oe()};re&&re.addEventListener("click",Ie),ne&&ne.addEventListener("click",Ce),He.forEach((e,t)=>{e.addEventListener("click",()=>Ze(t))}),document.addEventListener("keydown",e=>{e.key==="ArrowLeft"&&Ce(),e.key==="ArrowRight"&&Ie()});const Me=document.getElementById("mini-calendar-prev"),Te=document.getElementById("mini-calendar-next");Me&&Me.addEventListener("click",()=>{I.setMonth(I.getMonth()-1),ee()}),Te&&Te.addEventListener("click",()=>{I.setMonth(I.getMonth()+1),ee()}),await ke()});
