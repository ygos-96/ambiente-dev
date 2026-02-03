import"./index-IWM24kaj.js";const h="/ambiente-dev/";document.addEventListener("DOMContentLoaded",()=>{const g=document.getElementById("app");g.innerHTML=`
    <div class="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <div class="w-full max-w-md">
        <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl p-8">
          <!-- Logo/Título -->
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-white mb-2">Ambiente Dev</h1>
            <p class="text-gray-400">Faça login para continuar</p>
          </div>

          <!-- Formulário de Login -->
          <form id="login-form" class="space-y-6">
            <!-- Campo de Usuário -->
            <div>
              <label for="username" class="block text-sm font-medium text-gray-300 mb-2">
                <i class="fas fa-user mr-2"></i>Usuário
              </label>
              <input 
                type="text" 
                id="username" 
                name="username"
                required
                autocomplete="username"
                class="w-full px-4 py-3 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 transition-colors"
                placeholder="Digite seu usuário"
              />
            </div>

            <!-- Campo de Senha -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
                <i class="fas fa-lock mr-2"></i>Senha
              </label>
              <div class="relative">
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  required
                  autocomplete="current-password"
                  class="w-full px-4 py-3 bg-[#222222] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 transition-colors pr-12"
                  placeholder="Digite sua senha"
                />
                <button 
                  type="button"
                  id="toggle-password"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Mostrar/Ocultar senha"
                >
                  <i class="fas fa-eye" id="eye-icon"></i>
                </button>
              </div>
            </div>

            <!-- Mensagem de Erro -->
            <div id="error-message" class="hidden bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
              <i class="fas fa-exclamation-circle mr-2"></i>
              <span id="error-text"></span>
            </div>

            <!-- Botão de Login -->
            <button 
              type="submit"
              id="login-btn"
              class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span id="login-btn-text">Entrar</span>
              <span id="login-btn-spinner" class="hidden">
                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  `;const l=document.getElementById("login-form"),c=document.getElementById("username"),o=document.getElementById("password"),y=document.getElementById("toggle-password"),a=document.getElementById("eye-icon"),n=document.getElementById("error-message"),b=document.getElementById("error-text"),m=document.getElementById("login-btn"),u=document.getElementById("login-btn-text"),p=document.getElementById("login-btn-spinner");y.addEventListener("click",()=>{const e=o.getAttribute("type")==="password"?"text":"password";o.setAttribute("type",e),e==="text"?(a.classList.remove("fa-eye"),a.classList.add("fa-eye-slash")):(a.classList.remove("fa-eye-slash"),a.classList.add("fa-eye"))});const i=e=>{b.textContent=e,n.classList.remove("hidden"),setTimeout(()=>{n.classList.add("hidden")},5e3)},d=e=>{e?(m.disabled=!0,u.textContent="Entrando...",p.classList.remove("hidden")):(m.disabled=!1,u.textContent="Entrar",p.classList.add("hidden"))},f=async(e,s)=>{await new Promise(t=>setTimeout(t,1e3));const r={ygor:"491583"};return r[e]&&r[e]===s?{success:!0}:{success:!1,message:"Usuário ou senha incorretos"}};l.addEventListener("submit",async e=>{e.preventDefault();const s=c.value.trim(),r=o.value;if(!s||!r){i("Por favor, preencha todos os campos");return}d(!0),n.classList.add("hidden");try{const t=await f(s,r);t.success?(sessionStorage.setItem("authenticated","true"),sessionStorage.setItem("username",s),window.location.href=`${h}home.html`):(i(t.message||"Usuário ou senha incorretos"),d(!1))}catch(t){console.error("Erro na autenticação:",t),i("Erro ao fazer login. Tente novamente."),d(!1)}}),c.focus(),o.addEventListener("keypress",e=>{e.key==="Enter"&&l.dispatchEvent(new Event("submit"))})});
