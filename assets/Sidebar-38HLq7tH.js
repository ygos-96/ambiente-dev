const i="/ambiente-dev/";class L{constructor(s="Usuário",d="home"){this.username=s,this.currentPage=d}render(){return`
      <!-- Overlay para mobile -->
      <div id="sidebar-overlay" class="sidebar-overlay hidden"></div>

      <!-- Sidebar Menu -->
      <aside id="sidebar" class="sidebar">
        <div class="sidebar-header">
          <div class="flex items-center justify-between mb-6">
            <div class="sidebar-header-content">
              <h2 class="text-xl font-bold text-white">Ambiente Dev</h2>
              <p class="text-sm text-gray-400 sidebar-username">${this.username}</p>
            </div>
            <div class="flex items-center gap-2">
              <button id="sidebar-toggle-desktop" class="sidebar-close-btn hidden lg:flex" title="Fechar menu">
                <i class="fas fa-chevron-left"></i>
              </button>
              <button id="sidebar-close" class="sidebar-close-btn lg:hidden">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        
        <nav class="sidebar-nav">
          <a href="${i}home.html" class="sidebar-item ${this.currentPage==="home"?"active":""}" data-page="home">
            <i class="fas fa-home"></i>
            <span class="sidebar-item-text">Home</span>
          </a>
          <a href="${i}agenda.html" class="sidebar-item ${this.currentPage==="agenda"?"active":""}" data-page="agenda">
            <i class="fas fa-calendar"></i>
            <span class="sidebar-item-text">Agenda</span>
          </a>
          <a href="${i}rotina.html" class="sidebar-item ${this.currentPage==="rotina"?"active":""}" data-page="rotina">
            <i class="fas fa-tasks"></i>
            <span class="sidebar-item-text">Rotina</span>
          </a>
          <a href="${i}estudo.html" class="sidebar-item ${this.currentPage==="estudo"?"active":""}" data-page="estudo">
            <i class="fas fa-graduation-cap"></i>
            <span class="sidebar-item-text">Estudo</span>
          </a>
          <a href="${i}notas.html" class="sidebar-item ${this.currentPage==="notas"?"active":""}" data-page="notas">
            <i class="fas fa-sticky-note"></i>
            <span class="sidebar-item-text">Notas</span>
          </a>
          <a href="${i}financas.html" class="sidebar-item ${this.currentPage==="financas"?"active":""}" data-page="financas">
            <i class="fas fa-wallet"></i>
            <span class="sidebar-item-text">Finanças</span>
          </a>
          <a href="${i}dashboard.html" class="sidebar-item ${this.currentPage==="dashboard"?"active":""}" data-page="dashboard">
            <i class="fas fa-chart-bar"></i>
            <span class="sidebar-item-text">Dashboard</span>
          </a>
        </nav>

        <div class="sidebar-footer">
          <button id="logout-btn" class="sidebar-item sidebar-item-logout">
            <i class="fas fa-sign-out-alt"></i>
            <span class="sidebar-item-text">Sair</span>
          </button>
        </div>
      </aside>
      </aside>
    `}renderTopBar(s,d=""){return`
      <header class="top-bar">
        <button id="sidebar-toggle" class="menu-toggle-btn lg:hidden">
          <i class="fas fa-bars"></i>
        </button>
        <button id="sidebar-toggle-desktop-top" class="menu-toggle-btn hidden lg:flex" title="Abrir menu">
          <i class="fas fa-bars"></i>
        </button>
        <div>
          <h1 class="text-xl md:text-2xl font-bold text-white">${s}</h1>
          ${d?`<p class="text-sm text-gray-400">${d}</p>`:""}
        </div>
      </header>
    `}init(){const s=document.getElementById("sidebar"),d=document.getElementById("sidebar-toggle"),p=document.getElementById("sidebar-close"),t=document.getElementById("sidebar-overlay"),g=document.getElementById("logout-btn"),o=()=>{const e=document.querySelector(".main-content");e&&(window.innerWidth>=1024?s.classList.contains("collapsed")?(e.style.marginLeft="0",e.style.width="100%"):(s.classList.contains("desktop-open")||s.classList.contains("open"))&&(e.style.marginLeft="280px",e.style.width="calc(100% - 280px)"):(e.style.marginLeft="0",e.style.width="100%"))},h=()=>{s.classList.add("open"),t.classList.remove("hidden"),t.classList.add("show"),document.body.style.overflow="hidden",o()},c=()=>{s.classList.remove("open"),t.classList.remove("show"),setTimeout(()=>{t.classList.add("hidden")},300),document.body.style.overflow="",o()},u=()=>{s.classList.remove("desktop-open"),s.classList.add("collapsed"),localStorage.setItem("sidebar-collapsed","true");const e=document.getElementById("sidebar-toggle-desktop-top");e&&(e.style.display="flex"),o()},m=()=>{s.classList.remove("collapsed"),s.classList.add("desktop-open"),localStorage.setItem("sidebar-collapsed","false");const e=document.getElementById("sidebar-toggle-desktop-top");e&&(e.style.display="none"),o()},y=localStorage.getItem("sidebar-collapsed")==="true";if(window.innerWidth>=1024)if(y){s.classList.add("collapsed");const e=document.getElementById("sidebar-toggle-desktop-top");e&&(e.style.display="flex")}else{s.classList.add("desktop-open");const e=document.getElementById("sidebar-toggle-desktop-top");e&&(e.style.display="none")}o(),d&&d.addEventListener("click",()=>{window.innerWidth<1024&&h()});const a=document.getElementById("sidebar-toggle-desktop-top");a&&(window.innerWidth<1024&&(a.style.display="none"),a.addEventListener("click",()=>{if(window.innerWidth>=1024&&s.classList.contains("collapsed")){m();const e=document.getElementById("sidebar-toggle-desktop");e&&(e.innerHTML='<i class="fas fa-chevron-left"></i>',e.title="Fechar menu"),a.style.display="none"}})),p&&p.addEventListener("click",c),t&&t.addEventListener("click",c);const n=document.getElementById("sidebar-toggle-desktop");n&&n.addEventListener("click",()=>{s.classList.contains("collapsed")?(m(),n.innerHTML='<i class="fas fa-chevron-left"></i>',n.title="Fechar menu",a&&(a.style.display="none")):(u(),n.innerHTML='<i class="fas fa-chevron-right"></i>',n.title="Abrir menu",a&&(a.style.display="flex"))});const b=()=>{const e=document.getElementById("sidebar-toggle-desktop-top"),r=document.getElementById("sidebar-toggle");if(window.innerWidth>=1024){t.classList.add("hidden"),t.classList.remove("show"),document.body.style.overflow="",s.classList.remove("open"),r&&(r.style.display="none");const f=localStorage.getItem("sidebar-collapsed")==="true";f?(s.classList.add("collapsed"),s.classList.remove("desktop-open")):(s.classList.remove("collapsed"),s.classList.add("desktop-open"));const l=document.getElementById("sidebar-toggle-desktop");l&&(f?(l.innerHTML='<i class="fas fa-chevron-right"></i>',l.title="Abrir menu",e&&(e.style.display="flex")):(l.innerHTML='<i class="fas fa-chevron-left"></i>',l.title="Fechar menu",e&&(e.style.display="none")))}else s.classList.remove("collapsed","desktop-open"),r&&(r.style.display="flex"),e&&(e.style.display="none");o()};window.addEventListener("resize",b),b(),document.addEventListener("keydown",e=>{e.key==="Escape"&&s&&s.classList.contains("open")&&c()}),g&&g.addEventListener("click",()=>{sessionStorage.removeItem("authenticated"),sessionStorage.removeItem("username"),window.location.href=`${i}index.html`})}}export{L as S};
