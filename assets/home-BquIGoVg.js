import"./index-DPlvyXvB.js";import{G as tt}from"./GoogleAppsScriptService-Du0S4SrP.js";import{L as ot}from"./LocalStorageService-C84leZPf.js";import{P as st}from"./PersonalDataService-CClDzJ6y.js";import{S as at}from"./Sidebar-38HLq7tH.js";const nt="/ambiente-dev/assets/iPhone%20Radar%20Alarm_Ringtone%20(Apple%20Sound)%20-%20Sound%20Effect%20for%20Editing%20-%20Sound%20Library%20(youtube)-dpORg-HX.mp3",I="/ambiente-dev/";function rt(q){const z=q.getFullYear(),A=String(q.getMonth()+1).padStart(2,"0"),J=String(q.getDate()).padStart(2,"0");return`${z}-${A}-${J}`}document.addEventListener("DOMContentLoaded",async()=>{if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${I}index.html`;return}const z=sessionStorage.getItem("username")||"Usuário",A=new at(z,"home"),J=document.getElementById("app");J.innerHTML=`
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
              <a href="${I}rotina.html" class="px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm font-medium border border-[#2a2a2a] transition-colors"><i class="fas fa-tasks mr-2"></i>Rotina</a>
              <a href="${I}notas.html" class="px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm font-medium border border-[#2a2a2a] transition-colors"><i class="fas fa-sticky-note mr-2"></i>Notas</a>
              <a href="${I}dashboard.html" class="px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm font-medium border border-[#2a2a2a] transition-colors"><i class="fas fa-chart-bar mr-2"></i>Dashboard</a>
              <a href="${I}agenda.html" class="px-4 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm font-medium border border-[#2a2a2a] transition-colors"><i class="fas fa-calendar mr-2"></i>Agenda</a>
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
                <a href="${I}rotina.html" class="px-3 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm border border-[#2a2a2a] transition-colors"><i class="fas fa-tasks mr-1"></i>Rotina</a>
                <a href="${I}notas.html" class="px-3 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm border border-[#2a2a2a] transition-colors"><i class="fas fa-sticky-note mr-1"></i>Notas</a>
                <a href="${I}dashboard.html" class="px-3 py-2 bg-[#222222] hover:bg-[#2a2a2a] text-white rounded-lg text-sm border border-[#2a2a2a] transition-colors"><i class="fas fa-chart-bar mr-1"></i>Dashboard</a>
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
  `;const se=document.getElementById("loading-state"),Ae=document.getElementById("error-state"),je=document.getElementById("content"),Fe=document.getElementById("next-events-carousel"),W=document.getElementById("all-events-carousel");document.getElementById("logout-btn");const j=document.getElementById("event-view-modal"),F=document.getElementById("all-events-modal"),ae=document.getElementById("all-events-modal-list"),Pe=document.getElementById("carousel-track"),ne=document.getElementById("carousel-prev"),re=document.getElementById("carousel-next"),He=document.querySelectorAll(".carousel-dot"),L=document.getElementById("create-event-modal"),ie=document.getElementById("open-create-event-modal"),de=document.getElementById("close-create-event-modal"),le=document.getElementById("cancel-create-event-btn"),O=document.getElementById("create-event-form"),ce=document.getElementById("create-event-date"),me="https://script.google.com/macros/s/AKfycbxn4DLzXz1k7mb1baejzbRvevbPS2Vti81uVly-pcntUWvZBFa6x57hRNwSLCckFMRSaw/exec";let k;try{const e=new ot({storageKey:"calendar-events"});if(me)try{const t=new tt({scriptUrl:me});await t.initialize(),k=t}catch(t){console.error("❌ Erro ao conectar Google Apps Script:",t),k=e}await k.initialize()}catch(e){console.error("❌ Erro ao inicializar armazenamento:",e),Ee("Erro ao conectar com o armazenamento de dados");return}const E=new st;await E.initialize();const X=e=>{const t=new Date(e+"T00:00:00"),o=new Date,a=new Date(o);a.setDate(a.getDate()+1);const s=t.toDateString()===o.toDateString(),n=t.toDateString()===a.toDateString(),i=String(t.getDate()).padStart(2,"0"),m=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return s?`Hoje (${i}/${m}/${r})`:n?`Amanhã (${i}/${m}/${r})`:`${i}/${m}/${r}`},S=e=>{if(!e)return"";const[t,o]=e.split(":");return`${t}:${o}`},U=e=>{const t=e.color||"#ff8e4d",o=S(e.startTime),a=S(e.endTime),s=o&&a?`${o} - ${a}`:o||"Sem horário";return`
      <div class="event-item-row" data-event-id="${e.id}" style="border-left-color: ${t}">
        <div class="event-item-color" style="background-color: ${t}"></div>
        <div class="event-item-content">
          <span class="event-item-title">${e.title||"Sem título"}</span>
          <span class="event-item-time">
            <i class="fas fa-clock"></i>
            ${s}
          </span>
        </div>
      </div>
    `},P=e=>{const t=j,o=document.getElementById("view-event-title"),a=document.getElementById("view-event-description"),s=document.getElementById("view-event-start-time"),n=document.getElementById("view-event-end-time"),i=document.getElementById("view-event-date"),m=document.getElementById("view-event-id"),r=document.getElementById("view-event-color");o&&(o.textContent=e.title||"Sem título"),a&&(a.textContent=e.description||"-"),s&&(s.textContent=S(e.startTime)||"-"),n&&(n.textContent=S(e.endTime)||"-"),i&&(i.textContent=X(e.date)),m&&(m.value=e.id||""),r&&(r.value=e.color||"#ff8e4d"),t.classList.remove("hidden")},V=()=>{j.classList.add("hidden")};let ue=!1;const D=rt(new Date),Re=()=>{const e=E.getRoutinePlanForDate(D);return e&&Array.isArray(e.blocks)?e.blocks.filter(t=>t.showInRoutine!==!1).sort((t,o)=>(t.order??0)-(o.order??0)).flatMap(t=>(t.tasks||[]).sort((o,a)=>(o.order??0)-(a.order??0)).map(o=>({id:o.id,label:o.label,order:(t.order??0)*1e3+(o.order??0)}))):E.getRoutineItems().sort((t,o)=>t.order-o.order)},ve=()=>{const e=Re(),t=E.getRoutineCheckmarksForDate(D),o=(a,s=!1)=>{const n=document.getElementById(a);n&&(n.innerHTML=e.length===0?'<li class="text-gray-400 text-sm">Nenhum item. <a href="'+I+'rotina.html" class="text-blue-400 hover:underline">Configurar rotina</a></li>':e.map(i=>{const m=!!t[i.id];return`
              <li class="flex items-center gap-2 p-1.5 rounded hover:bg-[#222222] transition-colors ${s?"text-xs":""}">
                <button type="button" class="rotina-check flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${m?"bg-green-600 border-green-500 text-white":"border-gray-500 text-gray-400 hover:border-green-500"}" data-id="${i.id}">
                  ${m?'<i class="fas fa-check text-xs"></i>':""}
                </button>
                <span class="${m?"text-gray-500 line-through":"text-white"}">${(i.label||"").replace(/</g,"&lt;")}</span>
              </li>
            `}).join(""))};o("rotina-hoje-essencial-list"),o("rotina-hoje-full-list",!0),document.querySelectorAll(".rotina-check").forEach(a=>{a.onclick=()=>{const s=a.dataset.id,n=E.getRoutineCheckmarksForDate(D);E.setRoutineCheckmark(D,s,!n[s]),ve()}})},Q=()=>{const t=E.getFocusOfDay(D).items||[],o=E.getFocusCheckmarks(D),a=(s,n,i,m=!1)=>{const r=document.getElementById(s);r&&(r.innerHTML=t.map((f,u)=>{const l=!!o[String(u)];return`
          <li class="flex items-center gap-2 p-1.5 rounded hover:bg-[#222222] transition-colors ${m?"text-xs":""}">
            <button type="button" class="foco-check flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${l?"bg-green-600 border-green-500 text-white":"border-gray-500 text-gray-400"}" data-idx="${u}">
              ${l?'<i class="fas fa-check text-xs"></i>':""}
            </button>
            <span class="${l?"text-gray-500 line-through":"text-white"}">${(f||"").replace(/</g,"&lt;")}</span>
          </li>
        `}).join(""),r.querySelectorAll(".foco-check").forEach(f=>{f.onclick=()=>{const u=f.dataset.idx,l=E.getFocusCheckmarks(D);E.setFocusCheckmark(D,u,!l[u]),Q()}}))};a("foco-essencial-list"),a("foco-full-list","foco-input-full","foco-add-full",!0)},Y=(e,t)=>{var i;const o=document.getElementById(e),a=(i=o==null?void 0:o.value)==null?void 0:i.trim();if(!a)return;const n=[...E.getFocusOfDay(D).items||[],a].slice(0,3);E.setFocusOfDay(D,n),o&&(o.value=""),Q()},Ne=e=>{const t=document.getElementById("proximos-essencial-list");t&&(t.innerHTML=e.length>0?e.map(U).join(""):'<p class="text-gray-400 text-sm">Nenhum evento próximo</p>',t.querySelectorAll(".event-item-row").forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-event-id"),s=e.find(n=>n.id===a);s&&P(s)})}))},qe=()=>{const e=document.getElementById("modo-foco-toggle"),t=document.getElementById("content-essencial"),o=document.getElementById("content-full");if(!e||!t||!o)return;const a=localStorage.getItem("modo-foco")==="true";e.checked=a,a?(t.classList.remove("hidden"),o.classList.add("hidden")):(t.classList.add("hidden"),o.classList.remove("hidden")),e.addEventListener("change",()=>{const s=e.checked;localStorage.setItem("modo-foco",s?"true":"false"),t.classList.toggle("hidden",!s),o.classList.toggle("hidden",s)})},ze=()=>{const e=document.getElementById("pomodoro-display"),t=document.getElementById("pomodoro-start"),o=document.getElementById("pomodoro-pause"),a=document.getElementById("pomodoro-reset");if(!e||!t)return;const s=25*60*1e3,n=5*60*1e3,i="ambiente-dev-pomodoro";let m=null,r=null;const f=()=>{try{const d=localStorage.getItem(i);return d?JSON.parse(d):null}catch{return null}},u=d=>{r=d,d?localStorage.setItem(i,JSON.stringify(d)):localStorage.removeItem(i)},l=d=>{const h=Math.max(0,Math.round(d/1e3)),g=Math.floor(h/60),y=h%60;e.textContent=`${String(g).padStart(2,"0")}:${String(y).padStart(2,"0")}`},v=()=>{try{const d=new Audio(nt);d.volume=.7,d.play().catch(h=>{console.warn("Erro ao tocar áudio do pomodoro:",h)})}catch(d){console.warn("Erro ao criar áudio do pomodoro:",d)}},p=()=>{if(!r)return s;if(r.status==="paused"||r.status==="idle")return typeof r.remainingMs=="number"?r.remainingMs:r.durationMs;if(r.status==="running"){const d=Date.now()-r.startTime;return r.durationMs-d}return s},b=()=>{m&&(clearInterval(m),m=null)},w=d=>{b(),v();const h=d==="break"?"focus":"break",g=h==="focus"?s:n;u({mode:h,status:"idle",durationMs:g,remainingMs:g}),l(g),t.classList.remove("hidden"),o.classList.add("hidden")},c=()=>{b(),m=setInterval(()=>{if(!r||r.status!=="running"){b();return}const d=p();d<=0?w(r.mode||"focus"):l(d)},1e3)},x=()=>{if(r=f(),!r){u({mode:"focus",status:"idle",durationMs:s,remainingMs:s}),l(s),t.classList.remove("hidden"),o.classList.add("hidden");return}const d=p();r.status==="running"?(l(d),t.classList.add("hidden"),o.classList.remove("hidden"),d<=0?w(r.mode||"focus"):c()):(l(d),t.classList.remove("hidden"),o.classList.add("hidden"))};t.addEventListener("click",()=>{const d=r||{mode:"focus",status:"idle"};if(d.status==="running")return;const h=p(),g=h>0?h:d.mode==="break"?n:s;u({mode:d.mode||"focus",status:"running",startTime:Date.now(),durationMs:g}),l(g),t.classList.add("hidden"),o.classList.remove("hidden"),c()}),o.addEventListener("click",()=>{if(!r||r.status!=="running")return;const d=p();u({mode:r.mode||"focus",status:"paused",durationMs:r.durationMs,remainingMs:Math.max(0,d)}),l(d),b(),t.classList.remove("hidden"),o.classList.add("hidden")}),a.addEventListener("click",()=>{b(),u({mode:"focus",status:"idle",durationMs:s,remainingMs:s}),l(s),t.classList.remove("hidden"),o.classList.add("hidden")}),x()},Oe=e=>{var o,a,s,n;ve(),Q();const t=e&&e.length?Z(e,3):[];Ne(t),ue||(ue=!0,qe(),ze(),(o=document.getElementById("foco-add-essencial"))==null||o.addEventListener("click",()=>Y("foco-input-essencial")),(a=document.getElementById("foco-add-full"))==null||a.addEventListener("click",()=>Y("foco-input-full")),(s=document.getElementById("foco-input-essencial"))==null||s.addEventListener("keydown",i=>{i.key==="Enter"&&Y("foco-input-essencial")}),(n=document.getElementById("foco-input-full"))==null||n.addEventListener("keydown",i=>{i.key==="Enter"&&Y("foco-input-full")}))},Ue=(e,t)=>{if(e.length===0)return;const o=[...e].sort((c,x)=>{const d=c.startTime||"00:00",h=x.startTime||"00:00";return d.localeCompare(h)}),a=X(t),[s,n,i]=a.split("-").map(Number),m=new Date(s,n-1,i),r=m.toLocaleDateString("pt-BR",{weekday:"long"}),f=m.toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"}),u=`
      <div id="events-list-modal" class="event-modal fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div class="event-modal-content bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-white">Eventos - ${r}, ${f}</h3>
            <button class="modal-close text-gray-400 hover:text-white cursor-pointer" id="close-events-list-modal">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="space-y-2">
            ${o.map(c=>{const x=c.startTime&&c.endTime?`${S(c.startTime)} - ${S(c.endTime)}`:c.startTime?`${S(c.startTime)}`:"Horário não definido";return c.color,`
                <div 
                  class="event-list-item p-3 rounded-lg transition-colors hover:bg-[#222222] border-l-4"
                  style="border-left-color: ${c.color}; background-color: ${c.color}15;"
                  data-event-id="${c.id}"
                >
                  <div class="flex items-start justify-between gap-2">
                    <div 
                      class="flex-1 cursor-pointer"
                      data-action="view-event"
                      data-event-id="${c.id}"
                    >
                      <div class="flex items-center gap-2 mb-1">
                        <span class="text-xs font-medium text-gray-400">${x}</span>
                      </div>
                      <h4 class="text-sm font-semibold text-white mb-1">${c.title||"Sem título"}</h4>
                      ${c.description?`<p class="text-xs text-gray-400 line-clamp-2">${c.description}</p>`:""}
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
    `,l=document.getElementById("events-list-modal");l&&l.remove(),document.body.insertAdjacentHTML("beforeend",u);const v=document.getElementById("events-list-modal"),p=document.getElementById("close-events-list-modal"),b=document.getElementById("close-events-list-modal-btn"),w=()=>{v&&v.remove()};p&&p.addEventListener("click",w),b&&b.addEventListener("click",w),v&&v.addEventListener("click",c=>{c.target===v&&w()}),v.querySelectorAll('[data-action="view-event"]').forEach(c=>{c.addEventListener("click",()=>{const x=c.getAttribute("data-event-id"),d=o.find(h=>h.id===x);d&&(w(),P(d))})})},Ve=e=>{ae.innerHTML=e.length>0?e.map(U).join(""):'<p class="text-gray-400 text-center py-4">Nenhum evento encontrado</p>',F.classList.remove("hidden"),ae.querySelectorAll(".event-item-row").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-event-id"),a=e.find(s=>s.id===o);a&&(H(),P(a))})})},H=()=>{F.classList.add("hidden")},fe=document.getElementById("close-view-modal"),ge=document.getElementById("close-view-modal-btn");fe&&fe.addEventListener("click",V),ge&&ge.addEventListener("click",V);const pe=document.getElementById("close-all-events-modal"),be=document.getElementById("close-all-events-modal-btn");pe&&pe.addEventListener("click",H),be&&be.addEventListener("click",H),j.addEventListener("click",e=>{e.target===j&&V()}),F.addEventListener("click",e=>{e.target===F&&H()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(j.classList.contains("hidden")||V(),F.classList.contains("hidden")||H(),L&&!L.classList.contains("hidden")&&G())});const Ye=()=>{if(L){const e=new Date,t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),s=`${t}-${o}-${a}`;ce&&(ce.value=s);const n=document.querySelector('#create-event-modal .color-option[data-color="#ff8e4d"]');n&&(document.querySelectorAll("#create-event-modal .color-option").forEach(i=>{i.classList.remove("border-primary-500","border-4"),i.classList.add("border-gray-300","border-2")}),n.classList.remove("border-gray-300","border-2"),n.classList.add("border-primary-500","border-4")),L.classList.remove("hidden")}},G=()=>{if(L&&(L.classList.add("hidden"),O)){O.reset();const e=document.getElementById("create-event-color");e&&(e.value="#ff8e4d"),document.querySelectorAll("#create-event-modal .color-option").forEach(o=>{o.classList.remove("border-primary-500","border-4"),o.classList.add("border-gray-300","border-2")});const t=document.getElementById("create-custom-color-container");t&&t.classList.add("hidden")}},Ge=()=>{const e=document.getElementById("create-event-start-time"),t=document.getElementById("create-event-end-time");e&&(e.addEventListener("click",function(){if(this.showPicker&&typeof this.showPicker=="function")try{this.showPicker()}catch{this.focus()}}),e.style.cursor="pointer"),t&&(t.addEventListener("click",function(){if(this.showPicker&&typeof this.showPicker=="function")try{this.showPicker()}catch{this.focus()}}),t.style.cursor="pointer")};ie&&ie.addEventListener("click",()=>{Ye(),setTimeout(()=>{Ge()},100)}),de&&de.addEventListener("click",G),le&&le.addEventListener("click",G),L&&L.addEventListener("click",e=>{e.target===L&&G()}),document.querySelectorAll("#create-event-modal .color-option").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-color"),o=document.getElementById("create-event-color");o&&(o.value=t),document.querySelectorAll("#create-event-modal .color-option").forEach(s=>{s.classList.remove("border-primary-500","border-4"),s.classList.add("border-gray-300","border-2")}),e.classList.remove("border-gray-300","border-2"),e.classList.add("border-primary-500","border-4");const a=document.getElementById("create-custom-color-container");a&&a.classList.add("hidden")})});const xe=document.querySelector('#create-event-modal [data-action="open-custom-color"]'),he=document.getElementById("create-event-color-custom"),ye=document.getElementById("create-custom-color-container");xe&&xe.addEventListener("click",()=>{ye&&ye.classList.toggle("hidden")}),he&&he.addEventListener("change",e=>{const t=document.getElementById("create-event-color");t&&(t.value=e.target.value),document.querySelectorAll("#create-event-modal .color-option").forEach(o=>{o.classList.remove("border-primary-500","border-4"),o.classList.add("border-gray-300","border-2")})});const _e=()=>Date.now().toString(36)+Math.random().toString(36).substr(2);O&&O.addEventListener("submit",async e=>{var n;e.preventDefault();const t=document.getElementById("submit-create-event-btn"),o=document.getElementById("submit-create-btn-text"),a=document.getElementById("submit-create-btn-spinner"),s=document.getElementById("create-save-status");t&&(t.disabled=!0,o&&o.classList.add("hidden"),a&&a.classList.remove("hidden")),s&&(s.classList.remove("hidden"),s.textContent="💾 Salvando evento...",s.className="mt-2 text-sm text-center text-blue-600 font-medium");try{const i=document.getElementById("create-event-title").value,m=document.getElementById("create-event-description").value,r=document.getElementById("create-event-date").value,f=document.getElementById("create-event-start-time").value,u=document.getElementById("create-event-end-time").value,l=document.getElementById("create-event-color").value,v=r,p=(l||"#3b82f6").toLowerCase()==="#3b82f6",b=_e();if(p)if(console.log("🔵 Evento azul detectado - salvando na aba Ações"),k&&typeof k.saveAction=="function"){const c=v,x=f||"";try{await k.saveAction({id:b,title:i.trim()||"",description:m.trim()||"",createdAt:new Date().toISOString(),createdDate:c,createdTime:x,finishedDate:"",finishedTime:""}),console.log("✅ Ação salva com sucesso na aba Ações")}catch(d){throw console.error("❌ Erro ao salvar ação:",d),new Error(`Erro ao salvar ação: ${d.message}`)}}else{const c=k?`Serviço de armazenamento (${((n=k.constructor)==null?void 0:n.name)||"desconhecido"}) não suporta salvar ações. Use GoogleAppsScriptService.`:"Serviço de armazenamento não disponível";throw console.error("❌",c),new Error(c)}const w={id:b,title:i.trim(),description:m.trim(),date:v,startTime:f||"",endTime:u||"",color:l||"#ff8e4d",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};await k.saveEvent(w),s&&(s.textContent="✅ Evento criado com sucesso!",s.className="mt-2 text-sm text-center text-green-600 font-medium"),setTimeout(()=>{window.location.reload()},1e3)}catch(i){console.error("Erro ao salvar evento:",i),s&&(s.textContent="❌ Erro ao salvar evento. Tente novamente.",s.className="mt-2 text-sm text-center text-red-600 font-medium"),t&&(t.disabled=!1,o&&o.classList.remove("hidden"),a&&a.classList.add("hidden"))}});const we=e=>e.sort((t,o)=>{const a=new Date(t.date+"T"+(t.startTime||"00:00")),s=new Date(o.date+"T"+(o.startTime||"00:00"));return a-s}),Ke=(e,t)=>{const o=new Date;o.setHours(0,0,0,0);const a=new Date;switch(t){case"today":return e.filter(f=>new Date(f.date+"T00:00:00").toDateString()===o.toDateString());case"week":const s=o.getDay();let n,i;if(s===0||s===6){const f=s===0?1:2;n=new Date(o),n.setDate(o.getDate()+f),n.setHours(0,0,0,0),i=new Date(n),i.setDate(n.getDate()+4),i.setHours(23,59,59,999)}else{n=new Date(o),n.setHours(0,0,0,0);const f=5-s;i=new Date(o),i.setDate(o.getDate()+f),i.setHours(23,59,59,999)}return e.filter(f=>{const u=new Date(f.date+"T00:00:00"),l=u.getDay(),v=l>=1&&l<=5;return u>=n&&u<=i&&v});case"month":const m=new Date(o.getFullYear(),o.getMonth(),1),r=new Date(o.getFullYear(),o.getMonth()+1,0);return r.setHours(23,59,59,999),e.filter(f=>{const u=new Date(f.date+"T00:00:00");return u>=m&&u<=r});case"upcoming":return e.filter(f=>new Date(f.date+"T"+(f.startTime||"00:00"))>=a);case"all":default:return e}},Z=(e,t=null)=>{const o=new Date,a=e.filter(n=>new Date(n.date+"T"+(n.startTime||"00:00"))>=o),s=we(a);return t?s.slice(0,t):s},Je=e=>{const t=new Date;t.setHours(0,0,0,0);const o=e.filter(g=>new Date(g.date+"T00:00:00").toDateString()===t.toDateString()),a=document.getElementById("stats-today");a&&(a.textContent=o.length);const s=Z(e),n=s.length>0?s[0]:null,i=document.getElementById("stats-next-title"),m=document.getElementById("stats-next-time"),r=document.getElementById("stats-next-title-mobile"),f=document.getElementById("stats-next-time-mobile"),u=(g,y)=>{if(n&&g&&y){g.textContent=n.title||"Sem título";const T=X(n.date),$=S(n.startTime),$e=S(n.endTime);$&&$e?y.textContent=`${T} • ${$} - ${$e}`:$?y.textContent=`${T} • ${$}`:y.textContent=T}else g&&y&&(g.textContent="Nenhum",y.textContent="-")};u(i,m),u(r,f);const l=t.getDay();let v,p;if(l===0||l===6){const g=l===0?1:2;v=new Date(t),v.setDate(t.getDate()+g),v.setHours(0,0,0,0),p=new Date(v),p.setDate(v.getDate()+4),p.setHours(23,59,59,999)}else{v=new Date(t),v.setHours(0,0,0,0);const g=5-l;p=new Date(t),p.setDate(t.getDate()+g),p.setHours(23,59,59,999)}const b=e.filter(g=>{const y=new Date(g.date+"T00:00:00"),T=y.getDay(),$=T>=1&&T<=5;return y>=v&&y<=p&&$}),w=document.getElementById("stats-week");w&&(w.textContent=b.length);const c=new Date(t.getFullYear(),t.getMonth(),1),x=new Date(t.getFullYear(),t.getMonth()+1,0);x.setHours(23,59,59,999);const d=e.filter(g=>{const y=new Date(g.date+"T00:00:00");return y>=c&&y<=x}),h=document.getElementById("stats-month");h&&(h.textContent=d.length)},Ee=e=>{se.classList.add("hidden"),Ae.classList.remove("hidden"),document.getElementById("error-message").textContent=e};let R="all",N="";const We=(e,t)=>{if(!t||t.trim()==="")return e;const o=t.toLowerCase().trim();return e.filter(a=>{const s=(a.title||"").toLowerCase(),n=(a.description||"").toLowerCase();return s.includes(o)||n.includes(o)})},ke=async(e=R,t=N)=>{try{const o=await k.loadEvents(),a=we([...o]);let s=Ke(a,e);t&&t.trim()!==""&&(s=We(s,t)),De=s;const n=Z(a,3);Fe.innerHTML=n.length>0?n.map(U).join(""):'<p class="text-gray-400 text-center py-4">Nenhum evento próximo</p>';const i=s.slice(0,3);W.innerHTML=i.length>0?i.map(U).join(""):'<p class="text-gray-400 text-center py-4">Nenhum evento encontrado</p>';const m=document.getElementById("view-all-events-btn");if(m)if(s.length>3){m.classList.remove("hidden");const r=document.getElementById("view-all-text");r&&(r.textContent=`Ver todos os ${s.length} eventos`)}else m.classList.add("hidden");document.querySelectorAll(".event-item-row").forEach(r=>{r.addEventListener("click",()=>{const f=r.getAttribute("data-event-id"),u=a.find(l=>l.id===f);u&&P(u)})}),Je(a),Ze(a),se.classList.add("hidden"),je.classList.remove("hidden"),Oe(a)}catch(o){console.error("Erro ao carregar eventos:",o),Ee(o.message||"Erro desconhecido ao carregar eventos")}};A.init();let De=[],C=new Date,Le=[];const Xe=e=>{const t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${t}-${o}-${a}`},Qe=e=>Le.filter(t=>t.date===e),ee=()=>{const e=document.getElementById("mini-calendar-grid"),t=document.getElementById("mini-calendar-month-year");if(!e||!t)return;const o=C.getFullYear(),a=C.getMonth(),s=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];t.textContent=`${s[a]} ${o}`;const n=new Date(o,a,1),i=new Date(o,a+1,0),m=new Date;m.setHours(0,0,0,0);const r=n.getDay(),f=i.getDate();e.querySelectorAll(".mini-cal-day, .mini-cal-day-empty").forEach(l=>l.remove());for(let l=0;l<r;l++){const v=document.createElement("div");v.className="mini-cal-day-empty",e.appendChild(v)}for(let l=1;l<=f;l++){const v=new Date(o,a,l),p=Xe(v),b=Qe(p),w=v.toDateString()===m.toDateString(),c=v.getMonth()===a,x=document.createElement("div");if(x.className=`mini-cal-day relative p-2 text-center rounded-lg cursor-pointer transition-all ${c?"":"opacity-30"} ${w?"bg-transparent border-2 border-red-500 text-red-400 font-bold":b.length>0?"bg-[#222222] hover:bg-[#2a2a2a] text-white":"bg-[#1a1a1a] hover:bg-[#222222] text-gray-300"}`,x.textContent=l,x.setAttribute("data-date",p),x.setAttribute("data-day",l),b.length>0&&c){const d=document.createElement("div");d.className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white",x.appendChild(d)}x.addEventListener("click",()=>{c&&b.length>0&&(b.length===1?P(b[0]):Ue(b,v))}),e.appendChild(x)}},Ze=e=>{Le=e,ee()},te=async(e=R,t=N)=>{W&&(W.innerHTML=`
        <div class="flex flex-col items-center justify-center py-8">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500 mb-3"></div>
          <p class="text-gray-400 text-sm">Carregando eventos...</p>
        </div>
      `),await ke(e,t)},_=document.getElementById("search-events-input"),M=document.getElementById("clear-search-btn");if(_){let e;_.addEventListener("input",t=>{const o=t.target.value;N=o,M&&(o.trim()!==""?M.classList.remove("hidden"):M.classList.add("hidden")),clearTimeout(e),e=setTimeout(()=>{te(R,o)},300)})}M&&M.addEventListener("click",()=>{_&&(_.value="",N="",M.classList.add("hidden"),te(R,""))});const Se=document.querySelectorAll(".filter-quick-btn");Se.forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-filter");Se.forEach(o=>o.classList.remove("active")),e.classList.add("active"),R=t,await te(t,N)})});const Ie=document.getElementById("view-all-events-btn");Ie&&Ie.addEventListener("click",()=>{Ve(De)});let B=0;const K=2,oe=()=>{const e=document.querySelectorAll(".carousel-slide"),t=document.querySelectorAll(".carousel-dot");e.forEach((o,a)=>{a===B?o.classList.add("active"):o.classList.remove("active")}),t.forEach((o,a)=>{a===B?o.classList.add("active"):o.classList.remove("active")}),Pe.style.transform=`translateX(-${B*100}%)`},et=e=>{e>=0&&e<K&&(B=e,oe())},Be=()=>{B=(B+1)%K,oe()},Ce=()=>{B=(B-1+K)%K,oe()};re&&re.addEventListener("click",Be),ne&&ne.addEventListener("click",Ce),He.forEach((e,t)=>{e.addEventListener("click",()=>et(t))}),document.addEventListener("keydown",e=>{e.key==="ArrowLeft"&&Ce(),e.key==="ArrowRight"&&Be()});const Me=document.getElementById("mini-calendar-prev"),Te=document.getElementById("mini-calendar-next");Me&&Me.addEventListener("click",()=>{C.setMonth(C.getMonth()-1),ee()}),Te&&Te.addEventListener("click",()=>{C.setMonth(C.getMonth()+1),ee()}),await ke()});
