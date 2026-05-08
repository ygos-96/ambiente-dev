import"./index-DPlvyXvB.js";import{S as j}from"./Sidebar-38HLq7tH.js";import{P as I}from"./PersonalDataService-CClDzJ6y.js";const x=[{title:"Fase 1 — Pensar antes de codar",subtitle:"Programar é dar instruções claras. Aqui você treina isso sem sintaxe.",missions:[{id:"p1-m1",title:"O que é programar?",xp:12,body:`
          <p>Programar não é decorar código: é <strong>resolver problemas</strong> escrevendo uma sequência de passos que o computador (ou outra pessoa) consegue seguir sem interpretação ambígua.</p>
          <p><strong>Sua meta nesta fase:</strong> ganhar o hábito de descrever o que deve acontecer, <em>antes</em> de pensar em JavaScript.</p>
          <p class="text-amber-400/90 text-sm mt-2"><i class="fas fa-lightbulb mr-1"></i>Quando marcar como concluída, respire e lembre: “eu estou treinando precisão, não velocidade”.</p>
        `},{id:"p1-m2",title:"Algoritmo no dia a dia",xp:15,body:`
          <p><strong>Algoritmo</strong> = lista finita de passos que leva a um resultado.</p>
          <p>Exemplo: “Escovar os dentes” pode ser: pegar escova → colar pasta → escovar 2 min → enxaguar.</p>
          <p><strong>Exercício mental:</strong> escreva no papel (ou nas Notas do app) os passos para <strong>sair de casa e trancar a porta</strong>, sem pular nada óbvio. Depois releia: alguém que nunca fez isso conseguiria seguir?</p>
        `},{id:"p1-m3",title:"Quebrar um problema em partes",xp:18,body:`
          <p>Grandes problemas assustam; <strong>partes pequenas</strong> não.</p>
          <p>Pegue o problema: <em>“Quero saber se posso sair de casa”</em>. Divida em 3 blocos: (1) olhar a previsão do tempo, (2) ver se tenho guarda-chuva, (3) decidir sim/não.</p>
          <p><strong>Prática:</strong> escolha uma tarefa sua (estudar, cozinhar, organizar pasta). Escreva <strong>3 subpassos</strong> numerados. Isso é o mesmo raciocínio que você usará em <code class="bg-[#222] px-1 rounded">if</code>, funções e loops.</p>
        `}]},{title:"Fase 2 — Variáveis e dados (revisão + ponte)",subtitle:"Você já conhece conceitos; agora liga ao que o JS guarda na memória.",missions:[{id:"p2-m1",title:"Variável = nome + valor",xp:12,body:`
          <p>Uma <strong>variável</strong> é um <em>nome</em> que aponta para um <em>valor</em> na memória. O valor pode mudar (em parte do código).</p>
          <p>Em JS moderno usamos muito <code class="bg-[#222] px-1 rounded">let</code> (pode mudar) e <code class="bg-[#222] px-1 rounded">const</code> (referência fixa). Não precisa decorar tudo agora — precisa entender a ideia da “caixa etiquetada”.</p>
          <p><strong>Exemplo mental:</strong> <code class="bg-[#222] px-1 rounded">let idade = 25</code> → a etiqueta <code class="bg-[#222] px-1 rounded">idade</code> guarda o número 25.</p>
        `},{id:"p2-m2",title:"Tipos que você mais vai usar",xp:15,body:`
          <ul class="list-disc pl-5 space-y-1 text-gray-300">
            <li><strong>number</strong> — números (10, 3.14)</li>
            <li><strong>string</strong> — texto entre aspas (<code class="bg-[#222] px-1 rounded">'Olá'</code>)</li>
            <li><strong>boolean</strong> — <code class="bg-[#222] px-1 rounded">true</code> ou <code class="bg-[#222] px-1 rounded">false</code></li>
            <li><strong>undefined / null</strong> — “ainda não tem valor” ou “vazio intencional” (detalhe vem com o tempo)</li>
          </ul>
          <p class="mt-2"><strong>Mini-teste mental:</strong> o resultado de <code class="bg-[#222] px-1 rounded">5 === 5</code> é booleano? (Sim: <code class="bg-[#222] px-1 rounded">true</code>.)</p>
        `},{id:"p2-m3",title:"Primeiro contato: console do navegador",xp:20,body:`
          <p>O jeito mais rápido de “sentir” JS é rodar uma linha no navegador.</p>
          <ol class="list-decimal pl-5 space-y-1 text-gray-300">
            <li>Abra o Chrome/Edge e pressione <kbd class="bg-[#333] px-1 rounded">F12</kbd> (ou clique direito → Inspecionar).</li>
            <li>Vá na aba <strong>Console</strong>.</li>
            <li>Digite: <code class="bg-[#222] px-1 rounded">console.log(2 + 3)</code> e Enter.</li>
            <li>Tente: <code class="bg-[#222] px-1 rounded">let nome = "Dev"; console.log(nome)</code></li>
          </ol>
          <p class="mt-2 text-sm text-gray-400">Se der erro de sintaxe, tudo bem — copie a mensagem e pesquise. Errar no console faz parte do aprendizado.</p>
        `,link:{href:"https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript",label:"MDN: O que é JavaScript?"}}]},{title:"Fase 3 — Operadores e decisões (if)",subtitle:"O programa precisa escolher caminhos.",missions:[{id:"p3-m1",title:"Operadores aritméticos e de comparação",xp:15,body:`
          <p><strong>Aritméticos:</strong> <code class="bg-[#222] px-1 rounded">+ - * / %</code> (módulo = resto da divisão).</p>
          <p><strong>Comparação:</strong> <code class="bg-[#222] px-1 rounded">===</code> e <code class="bg-[#222] px-1 rounded">!==</code> comparam valor e tipo (prefira estes no começo). <code class="bg-[#222] px-1 rounded">&lt;</code> <code class="bg-[#222] px-1 rounded">&gt;</code> <code class="bg-[#222] px-1 rounded">&lt;=</code> <code class="bg-[#222] px-1 rounded">&gt;=</code> também.</p>
          <p><strong>Predição:</strong> no console, o que imprime <code class="bg-[#222] px-1 rounded">console.log(10 > 3)</code>? E <code class="bg-[#222] px-1 rounded">console.log("5" === 5)</code>? (Teste e veja — o segundo é <code class="bg-[#222] px-1 rounded">false</code>.)</p>
        `},{id:"p3-m2",title:"if / else em português estruturado",xp:18,body:`
          <p><strong>Se</strong> condição for verdadeira, faça A; <strong>senão</strong> faça B.</p>
          <p>Em JS:</p>
          <pre class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-3 text-sm overflow-x-auto text-green-300/90">if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}</pre>
          <p class="mt-2">O segredo é: a <strong>condição</strong> sempre vira booleano na hora de avaliar.</p>
        `},{id:"p3-m3",title:"Desafio: descrever um if sem código",xp:22,body:`
          <p>Sem abrir o editor: escreva em bullet points a lógica:</p>
          <blockquote class="border-l-4 border-blue-500 pl-3 text-gray-300 my-2">“Se a nota for maior ou igual a 7, status é aprovado; senão, status é recuperação.”</blockquote>
          <p>Use as palavras <strong>SE</strong>, <strong>SENÃO</strong>, <strong>ENTÃO</strong>. Depois compare com um <code class="bg-[#222] px-1 rounded">if/else</code> real no console quando quiser.</p>
        `}]},{title:"Fase 4 — Funções: o superpoder da organização",subtitle:"Pensar em entradas, saídas e nomes claros.",missions:[{id:"p4-m1",title:"Função = bloco nomeado com entrada e saída",xp:18,body:`
          <p>Função agrupa passos que você pode <strong>chamar</strong> várias vezes. Geralmente recebe <strong>parâmetros</strong> (entrada) e pode <strong>retornar</strong> um valor (saída).</p>
          <pre class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-3 text-sm overflow-x-auto text-cyan-300/90">function dobrar(n) {
  return n * 2;
}
console.log(dobrar(4)); // 8</pre>
          <p class="mt-2 text-sm text-gray-400">Você não precisa escrever funções perfeitas no início — precisa reconhecer: “isso aqui viraria uma função”.</p>
        `},{id:"p4-m2",title:"Por que funções pequenas?",xp:15,body:`
          <p>Funções grandes viram labirinto. Uma função ideal faz <strong>uma coisa</strong> bem nomeada: <code class="bg-[#222] px-1 rounded">calcularImposto</code>, <code class="bg-[#222] px-1 rounded">formatarData</code>, etc.</p>
          <p><strong>Exercício:</strong> pense em preparar café. Liste 3 funções hipotéticas (ex.: <em>ferverÁgua</em>, <em>moerCafé</em>) em vez de um único bloco gigante “fazerCafé”.</p>
        `},{id:"p4-m3",title:"Pseudo-código: função com retorno",xp:22,body:`
          <p>No papel ou nas Notas, escreva em português:</p>
          <pre class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-3 text-sm text-gray-300">função media(a, b):
  soma = a + b
  retorna soma / 2</pre>
          <p class="mt-2">Depois traduza mentalmente para JS: palavra-chave <code class="bg-[#222] px-1 rounded">function</code>, chaves, <code class="bg-[#222] px-1 rounded">return</code>. Quando estiver pronto, teste no console.</p>
        `}]},{title:"Fase 5 — Listas (arrays) e repetição (for)",subtitle:"Quando o mesmo raciocínio se aplica a vários itens.",missions:[{id:"p5-m1",title:"Array = lista ordenada",xp:15,body:`
          <pre class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-3 text-sm text-yellow-200/90">let notas = [7, 8.5, 6];
console.log(notas[0]); // primeiro: 7
console.log(notas.length); // quantidade</pre>
          <p class="mt-2">Índice começa em <strong>0</strong>. Erro comum: achar que o último índice é <code class="bg-[#222] px-1 rounded">length</code> — na verdade é <code class="bg-[#222] px-1 rounded">length - 1</code>.</p>
        `},{id:"p5-m2",title:"Loop for: repetir com controle",xp:20,body:`
          <p>O <code class="bg-[#222] px-1 rounded">for</code> costuma ser: começo → condição de continuar → passo.</p>
          <pre class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-3 text-sm text-purple-200/90">for (let i = 0; i &lt; notas.length; i++) {
  console.log(notas[i]);
}</pre>
          <p class="mt-2">Leia em voz alta: “para i de 0 enquanto i for menor que o tamanho, aumente i e faça o bloco”.</p>
        `},{id:"p5-m3",title:"Pensar: somar todos os números da lista",xp:25,body:`
          <p><strong>Sem olhar solução pronta:</strong> em passos numerados, descreva como somar todos os elementos de <code class="bg-[#222] px-1 rounded">[2, 4, 6]</code>.</p>
          <p class="text-sm text-gray-400">Dica: você precisa de uma variável “acumulador” que começa em 0 e vai somando cada item ao percorrer a lista.</p>
          <p class="mt-2">Quando tiver os passos, tente codar no console. Se travar, volte aos passos em português primeiro.</p>
        `}]},{title:"Fase 6 — Objetos: agrupar informações",subtitle:"Nome → valor, como uma ficha.",missions:[{id:"p6-m1",title:"Objeto literal",xp:18,body:`
          <pre class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-3 text-sm text-emerald-200/90">const user = {
  nome: "Ana",
  idade: 30,
  ativo: true
};
console.log(user.nome);
console.log(user["idade"]);</pre>
          <p class="mt-2">Chaves são strings; o ponto é atalho quando o nome é válido como identificador.</p>
        `},{id:"p6-m2",title:"Quando usar array vs objeto?",xp:15,body:`
          <p><strong>Array:</strong> ordem importa, mesma “espécie” de itens (lista de notas, IDs).</p>
          <p><strong>Objeto:</strong> várias propriedades nomeadas sobre <em>uma</em> coisa (usuário, produto, configuração).</p>
        `},{id:"p6-m3",title:"Modelar um objeto do mundo real",xp:22,body:`
          <p>Escolha algo concreto (ex.: seu notebook, um jogo, uma despesa). Liste <strong>4 propriedades</strong> com tipo (número, texto, booleano). Depois monte o objeto no console.</p>
        `}]},{title:"Fase 7 — Pensar como programador (Entrada → Processar → Saída)",subtitle:"O modelo que desbloqueia “montar código”.",missions:[{id:"p7-m1",title:"O fluxo EPS",xp:20,body:`
          <p>Quase todo programa pequeno segue:</p>
          <ol class="list-decimal pl-5 space-y-1 text-gray-300">
            <li><strong>Entrada</strong> — dados que você tem (variáveis, parâmetros)</li>
            <li><strong>Processar</strong> — regras, ifs, loops, funções</li>
            <li><strong>Saída</strong> — <code class="bg-[#222] px-1 rounded">return</code>, <code class="bg-[#222] px-1 rounded">console.log</code>, atualizar a tela</li>
          </ol>
          <p class="mt-2">Antes de codar, pergunte: “O que entra? O que faço com isso? O que devolvo?”</p>
        `},{id:"p7-m2",title:"Projeto mental: maior de três números",xp:28,body:`
          <p>Tenho três variáveis <code class="bg-[#222] px-1 rounded">a</code>, <code class="bg-[#222] px-1 rounded">b</code>, <code class="bg-[#222] px-1 rounded">c</code>. Quero o maior.</p>
          <p><strong>Primeiro</strong> escreva em português/pseudo-código usando só comparações e <code class="bg-[#222] px-1 rounded">if</code> (pode assumir “maior entre dois” como subproblema).</p>
          <p class="text-sm text-gray-400">Depois implemente no console. Se preferir, crie uma função <code class="bg-[#222] px-1 rounded">maiorDeTres(a,b,c)</code>.</p>
        `},{id:"p7-m3",title:"Projeto mental: contar pares em uma lista",xp:28,body:`
          <p>Dado um array de números, quantos são pares? (Número par: divisível por 2 — em JS: <code class="bg-[#222] px-1 rounded">n % 2 === 0</code>.)</p>
          <p>Passos sugeridos: acumulador <code class="bg-[#222] px-1 rounded">count</code>, loop, <code class="bg-[#222] px-1 rounded">if</code> dentro do loop.</p>
          <p class="mt-2">Marque concluído quando tiver escrito a lógica (mesmo que ainda não esteja elegante). Refatorar vem com repetição.</p>
        `}]},{title:"Fase 8 — Próximo nível no mundo real",subtitle:"Consolidar hábito e ir para DOM e projetos.",missions:[{id:"p8-m1",title:"let, const e hábito de leitura",xp:15,body:`
          <p><code class="bg-[#222] px-1 rounded">const</code> para valores que não devem ser reatribuídos; <code class="bg-[#222] px-1 rounded">let</code> quando precisa mudar. Evite <code class="bg-[#222] px-1 rounded">var</code> em código novo.</p>
          <p>Leia código alheio (GitHub, tutoriais) como leitura: identifique variáveis, ifs, funções — sem pressa de entender tudo.</p>
        `},{id:"p8-m2",title:"Arrow functions (só leitura)",xp:18,body:`
          <pre class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-3 text-sm text-blue-200/90">const soma = (a, b) => a + b;</pre>
          <p class="mt-2">É equivalente a uma função curta com <code class="bg-[#222] px-1 rounded">return</code> implícito. Você verá muito disso em código moderno.</p>
        `,link:{href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions",label:"MDN: Arrow functions"}},{id:"p8-m3",title:"Seu objetivo: rotina de prática",xp:30,body:`
          <p><strong>Parabéns:</strong> você percorreu a trilha base de lógica + JS essencial para começar a montar código.</p>
          <p><strong>Próximos passos sugeridos (30–60 min/dia):</strong></p>
          <ul class="list-disc pl-5 text-gray-300 space-y-1">
            <li>MDN — <em>JavaScript — Dynamic client-side scripting</em> (guia em módulos)</li>
            <li>Exercícios curtos em <strong>Exercism</strong> ou <strong>Codewars</strong> (nível 8 kyu)</li>
            <li>Um microprojeto no seu <strong>Ambiente Dev</strong>: alterar texto de um botão, depois ler o código deste app</li>
          </ul>
          <p class="mt-3 text-amber-400/90"><i class="fas fa-trophy mr-1"></i>Você desbloqueou o hábito: pensar em passos → traduzir para JS → testar no console.</p>
        `,link:{href:"https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript",label:"MDN: Aprenda JavaScript"}}]}];function T(){return x.reduce((r,c)=>r+c.missions.length,0)}function E(r,c){return r.completedIds.includes(c)}function S(r,c){return c===0?!0:x[c-1].missions.every(p=>r.completedIds.includes(p.id))}function L(r,c,u){if(!S(r,c))return!1;if(u===0)return!0;const p=x[c].missions[u-1].id;return r.completedIds.includes(p)}function z(r){return r>=400?{title:"Construtor",icon:"fa-hammer",color:"text-amber-400"}:r>=280?{title:"Desbravador",icon:"fa-compass",color:"text-cyan-400"}:r>=160?{title:"Pensador lógico",icon:"fa-brain",color:"text-purple-400"}:r>=70?{title:"Aprendiz",icon:"fa-seedling",color:"text-green-400"}:{title:"Iniciante curioso",icon:"fa-star",color:"text-gray-400"}}function O(r){return{"p1-m1":["Leia o texto da missão até o final.","Escreva em 1 frase o que é programar para você.","Diga em voz alta essa frase antes de concluir."],"p1-m2":["Abra Notas (ou papel).","Escreva os passos para sair de casa e trancar a porta.","Revise e remova ambiguidades (deixe impossível interpretar errado)."],"p1-m3":["Escolha uma tarefa real do seu dia.","Quebre em 3 subpassos numerados.","Explique por que cada subpasso é necessário."],"p2-m1":["Leia os exemplos de variável.","Crie 3 variáveis mentais: nome, idade e estudando.","Classifique os tipos de cada uma."],"p2-m2":["Revise os tipos number, string e boolean.","Crie 1 exemplo de cada no console ou no papel.","Verifique se você sabe identificar o tipo sem olhar cola."],"p2-m3":["Abra o DevTools com F12.","Rode os dois exemplos de console.log da missão.","Teste 1 linha nova criada por você."],"p3-m1":["Rode 2 operações aritméticas no console.","Rode 2 comparações com === e !==.","Explique com suas palavras a diferença entre número e string na comparação."],"p3-m2":["Copie o if/else da missão para o console.","Troque o valor de idade e execute novamente.","Anote quando cai no if e quando cai no else."],"p3-m3":["Escreva a lógica de aprovação em português (SE/SENÃO).","Transforme em if/else no console.","Teste com nota 6 e com nota 8."],"p4-m1":["Digite a função dobrar no console.","Execute com 2 valores diferentes.","Explique o que entra (parâmetro) e o que sai (return)."],"p4-m2":["Escolha uma tarefa comum (ex.: café).","Divida em 3 funções pequenas nomeadas.","Explique por que funções menores facilitam manutenção."],"p4-m3":["Escreva o pseudo-código da média.","Traduza para function media(a,b) no console.","Teste com (6,8) e confira o retorno."],"p5-m1":["Crie um array com 3 números.","Acesse índice 0 e índice 2.","Confira o .length e diga qual é o último índice."],"p5-m2":["Crie um for que percorre o array.","Imprima cada item com console.log.","Explique o papel de i na repetição."],"p5-m3":["Escreva os passos para somar uma lista (em português).","Implemente com acumulador e for.","Teste com [2,4,6] e confirme resultado 12."],"p6-m1":["Crie um objeto user no console.","Leia duas propriedades (ponto e colchetes).","Altere uma propriedade e imprima novamente."],"p6-m2":["Escreva um exemplo de array e um de objeto.","Explique quando usar cada um.","Revise se sua explicação ficou clara para um iniciante."],"p6-m3":["Escolha algo real para modelar.","Defina 4 propriedades com tipos.","Monte o objeto no console e valide os valores."],"p7-m1":["Pegue um problema simples.","Liste entrada, processamento e saída.","Confirme que cada parte está explícita."],"p7-m2":["Escreva pseudo-código para maior de três.","Converta para JS (if/else).","Teste com 2 conjuntos de valores."],"p7-m3":["Escreva a lógica de contar pares.","Implemente com loop + if + acumulador.","Teste com uma lista mista e confira o total."],"p8-m1":["Reescreva um exemplo usando const e let.","Identifique uma situação de reatribuição (let).","Leia um trecho de código e marque onde há if, função e variável."],"p8-m2":["Leia o exemplo de arrow function.","Converta uma function normal para arrow.","Teste no console e compare os resultados."],"p8-m3":["Defina sua rotina diária de 30 a 60 min.","Escolha 1 plataforma de exercícios (Exercism/Codewars).","Defina o próximo microprojeto para praticar no app."]}[r]||["Leia a missão.","Faça o exercício proposto.","Revise o que aprendeu e conclua."]}const J="/ambiente-dev/";document.addEventListener("DOMContentLoaded",async()=>{if(!(sessionStorage.getItem("authenticated")==="true")){window.location.href=`${J}index.html`;return}const c=sessionStorage.getItem("username")||"Usuário",u=new j(c,"estudo"),p=new I;await p.initialize();const v=T(),P=document.getElementById("app");P.innerHTML=`
    ${u.render()}
    <div class="main-content">
      ${u.renderTopBar("Estudo","Trilha gamificada: lógica + JavaScript")}
      <div class="page-content p-4 md:p-8">
        <div class="max-w-3xl mx-auto space-y-6">

          <!-- Hero stats -->
          <div class="bg-gradient-to-br from-indigo-900/40 to-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 md:p-6">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p class="text-sm text-gray-400 mb-1">Seu título</p>
                <p id="rank-title" class="text-2xl font-bold text-white flex items-center gap-2">
                  <i class="fas fa-star text-amber-400"></i>
                  <span>—</span>
                </p>
                <p class="text-sm text-gray-500 mt-2">XP total: <span id="xp-total" class="text-indigo-400 font-semibold">0</span></p>
              </div>
              <div class="flex gap-6 sm:gap-8">
                <div class="text-center">
                  <p class="text-3xl font-bold text-orange-400" id="streak-count">0</p>
                  <p class="text-xs text-gray-500 uppercase tracking-wide">Dias seguidos</p>
                </div>
                <div class="text-center">
                  <p class="text-3xl font-bold text-green-400" id="done-count">0</p>
                  <p class="text-xs text-gray-500 uppercase tracking-wide">Missões</p>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progresso da trilha</span>
                <span id="progress-label">0 / ${v}</span>
              </div>
              <div class="h-3 bg-[#222] rounded-full overflow-hidden border border-[#2a2a2a]">
                <div id="progress-bar" class="h-full bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full transition-all duration-500" style="width:0%"></div>
              </div>
            </div>
          </div>

          <p class="text-gray-400 text-sm leading-relaxed">
            Esta trilha foi pensada para quem já sabe <strong>variáveis e tipos</strong>, mas ainda tem dificuldade em
            <strong>montar código e pensar em passos</strong>. Complete as missões em ordem: cada fase desbloqueia a próxima.
          </p>

          <div id="phases-container" class="space-y-4"></div>

          <div class="border border-[#2a2a2a] rounded-xl p-4 bg-[#1a1a1a]/50">
            <p class="text-xs text-gray-500 mb-2">Zona avançada</p>
            <button type="button" id="reset-progress" class="text-sm text-red-400/90 hover:text-red-300 underline">
              Redefinir todo o progresso desta trilha
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="toast-container" class="fixed top-4 right-4 z-[200] space-y-2 max-w-md"></div>
  `,u.init();const m=document.getElementById("phases-container"),A=document.getElementById("toast-container");function y(i,t="success"){const e={success:{bg:"bg-green-600",border:"border-green-500",icon:"fa-check-circle"},error:{bg:"bg-red-700",border:"border-red-500",icon:"fa-exclamation-triangle"}}[t],a=document.createElement("div");a.className=`${e.bg} border-2 ${e.border} text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-slide-in-right text-sm font-medium max-w-md`,a.innerHTML=`<i class="fas ${e.icon}"></i><span class="flex-1">${l(i)}</span>`,A.appendChild(a),setTimeout(()=>{a.classList.add("animate-slide-out-right"),setTimeout(()=>a.remove(),300)},3200)}function l(i){const t=document.createElement("div");return t.textContent=i,t.innerHTML}function D(i){const t=z(i.xp),e=i.completedIds.length,a=v?Math.round(e/v*100):0;document.getElementById("rank-title").innerHTML=`
      <i class="fas ${t.icon} ${t.color}"></i>
      <span class="text-white">${l(t.title)}</span>
    `,document.getElementById("xp-total").textContent=String(i.xp),document.getElementById("streak-count").textContent=String(i.streak||0),document.getElementById("done-count").textContent=String(e),document.getElementById("progress-label").textContent=`${e} / ${v}`,document.getElementById("progress-bar").style.width=`${a}%`}function $(i){const t=i.stepChecks||{};m.innerHTML=x.map((e,a)=>{const s=S(i,a),n=e.missions.every(o=>E(i,o.id));return`
        <section class="border border-[#2a2a2a] rounded-xl overflow-hidden bg-[#1a1a1a] ${s?"":"opacity-60"}">
          <button type="button" class="phase-toggle w-full text-left px-4 py-4 flex items-start gap-3 hover:bg-[#222222] transition-colors" data-phase="${a}" ${s?"":"disabled"}>
            <span class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${n?"bg-green-600 text-white":s?"bg-indigo-600 text-white":"bg-[#333] text-gray-500"}">${a+1}</span>
            <div class="flex-1 min-w-0">
              <h2 class="text-white font-semibold text-lg">${l(e.title)}</h2>
              <p class="text-sm text-gray-500 mt-0.5">${l(e.subtitle)}</p>
              ${s?"":'<p class="text-xs text-amber-500/90 mt-2"><i class="fas fa-lock mr-1"></i>Conclua a fase anterior para desbloquear.</p>'}
            </div>
            <i class="fas fa-chevron-down phase-chevron text-gray-500 transition-transform mt-1"></i>
          </button>
          <div class="phase-body hidden border-t border-[#2a2a2a] divide-y divide-[#2a2a2a]">
            ${e.missions.map((o,d)=>{const g=E(i,o.id),b=L(i,a,d),w=O(o.id),k=Array.isArray(t[o.id])?t[o.id]:[],q=w.every((C,h)=>k[h]===!0),M=o.link?`<a href="${l(o.link.href)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm mt-3"><i class="fas fa-external-link-alt text-xs"></i>${l(o.link.label)}</a>`:"";return`
                <article class="p-4 md:p-5 ${b?"":"bg-[#121212]/80"}" data-mission="${o.id}">
                  <div class="flex items-start justify-between gap-3 mb-3">
                    <h3 class="text-white font-medium flex items-center gap-2">
                      ${g?'<i class="fas fa-check-circle text-green-500"></i>':b?'<i class="fas fa-circle-notch text-indigo-400"></i>':'<i class="fas fa-lock text-gray-600"></i>'}
                      ${l(o.title)}
                    </h3>
                    <span class="text-xs text-amber-400/90 whitespace-nowrap">+${o.xp} XP</span>
                  </div>
                  ${b?`<div class="prose-study text-gray-300 text-sm leading-relaxed space-y-2">${o.body}</div>${M}`:'<p class="text-sm text-gray-600">Complete a missão anterior nesta fase.</p>'}
                  ${b?`
                    <div class="mt-4 border border-[#2a2a2a] rounded-lg p-3 bg-[#121212]/60">
                      <p class="text-xs uppercase tracking-wide text-indigo-300 font-semibold mb-2">Passos para concluir</p>
                      <div class="space-y-2">
                        ${w.map((C,h)=>`
                          <label class="flex items-start gap-2 text-sm text-gray-300">
                            <input type="checkbox" class="mission-step mt-0.5" data-mission-id="${l(o.id)}" data-step-index="${h}" ${k[h]?"checked":""} ${g?"disabled":""} />
                            <span>${l(C)}</span>
                          </label>
                        `).join("")}
                      </div>
                    </div>
                  `:""}
                  ${b&&!g?`<button type="button" class="complete-mission mt-4 px-4 py-2.5 ${q?"bg-indigo-600 hover:bg-indigo-700":"bg-gray-700 cursor-not-allowed"} text-white rounded-lg text-sm font-medium transition-colors" data-id="${l(o.id)}" data-xp="${o.xp}" ${q?"":"disabled"}>${q?"Concluir missão":"Marque todos os passos para concluir"}</button>`:""}
                  ${g?`<div class="mt-3 flex items-center justify-between gap-3">
                    <p class="text-sm text-green-500/90"><i class="fas fa-check mr-1"></i>Missão concluída</p>
                    <button type="button" class="undo-mission text-xs text-yellow-400 hover:text-yellow-300 underline" data-id="${l(o.id)}" data-xp="${o.xp}">Desfazer conclusão</button>
                  </div>`:""}
                </article>
              `}).join("")}
          </div>
        </section>
      `}).join(""),m.querySelectorAll(".phase-toggle").forEach(e=>{e.disabled||e.addEventListener("click",()=>{const s=e.closest("section").querySelector(".phase-body"),n=e.querySelector(".phase-chevron"),o=!s.classList.contains("hidden");m.querySelectorAll(".phase-body").forEach(d=>d.classList.add("hidden")),m.querySelectorAll(".phase-chevron").forEach(d=>d.classList.remove("rotate-180")),o||(s.classList.remove("hidden"),n.classList.add("rotate-180"))})}),m.querySelectorAll(".mission-step").forEach(e=>{e.addEventListener("change",()=>{const a=e.dataset.missionId,s=parseInt(e.dataset.stepIndex,10),n=p.setStudyMissionStepChecked(a,s,e.checked);$(n)})}),m.querySelectorAll(".complete-mission").forEach(e=>{e.addEventListener("click",()=>{var g;const a=e.dataset.id,s=parseInt(e.dataset.xp,10)||0,n=p.completeStudyMission(a,s);y(`+${s} XP! Continue na próxima missão.`),f(n);const o=e.closest("section"),d=o.querySelector(".phase-body");d&&!d.classList.contains("hidden")&&(d.classList.add("hidden"),(g=o.querySelector(".phase-chevron"))==null||g.classList.remove("rotate-180"))})}),m.querySelectorAll(".undo-mission").forEach(e=>{e.addEventListener("click",()=>{const a=e.dataset.id,s=parseInt(e.dataset.xp,10)||0,n=p.uncompleteStudyMission(a,s);y(`Missão desfeita (-${s} XP).`,"error"),f(n)})})}function f(i){const t=i||p.getStudyProgress();D(t),$(t);const e=x.findIndex((a,s)=>a.missions.some((n,o)=>!E(t,n.id)&&L(t,s,o)));if(e>=0){const s=m.querySelectorAll("section")[e];if(s&&S(t,e)){s.querySelector(".phase-toggle");const n=s.querySelector(".phase-body"),o=s.querySelector(".phase-chevron");m.querySelectorAll(".phase-body").forEach(d=>d.classList.add("hidden")),m.querySelectorAll(".phase-chevron").forEach(d=>d.classList.remove("rotate-180")),n==null||n.classList.remove("hidden"),o==null||o.classList.add("rotate-180")}}}document.getElementById("reset-progress").addEventListener("click",()=>{confirm("Isso apaga XP, streak e todas as missões concluídas. Continuar?")&&(p.resetStudyProgress(),y("Progresso zerado. Boa nova jornada!","success"),f())}),f()});
