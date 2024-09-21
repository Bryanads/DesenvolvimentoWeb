
##1.  
Além do controle de versões, que gerencia as mudanças do código ao longo do tempo, podendo verificar ou até mesmo voltar a versões anteriores, os sistemas de versionamento facilitaram a colaboração das equipes, permitindo o trabalho simultâneo de diferentes usuários no mesmo código de maneira eficiente.

##2.  
**Git** é uma ferramenta de versionamento, enquanto **GitHub** é um serviço de hospedagem para repositórios baseados em Git.

##3.   
   - **HTML**: Marcação de texto para criar a "base" do documento.
   - **CSS**: Linguagem para estilizar o documento.
   - **JavaScript**: Linguagem de programação para adicionar interatividade e funcionalidades aos documentos Web.

##4.  
   - **Tag**: Um marcador que serve para o navegador interpretar o conteúdo contido dentro dessa tag.
   - **Elemento**: O conjunto que inclui tag(s) e o conteúdo.
   - **Atributo**: Informações adicionais sobre um elemento, como identificadores (ex.: class, ID).

##5. 
   ```html
   <!DOCTYPE html>
   <html lang="pt-BR">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Minha Página</title>
   </head>
   <body>
       <p>Estou por aqui</p>
   </body>
   </html>
   ```

##6.
É um conjunto de protocolos que, juntos, permitem a troca de dados entre dispositivos na rede, viabilizando aplicações de rede.

##7.
**TCP** e **UDP**. O TCP é usado em aplicações que exigem alta confiabilidade, como serviços de HTTP/HTTPS ou envio de e-mails; já o UDP é utilizado para aplicações onde a velocidade é mais importante que a confiabilidade, como jogos online ou serviços de streaming.

##8.
O modelo **cliente-servidor** tem uma clara distinção entre cliente e servidor, com uma característica "centralizada", onde os clientes se comunicam diretamente com o servidor, que possui um endereço IP fixo. O **peer-to-peer** é um modelo descentralizado, onde os usuários (peers) requisitam serviços de outros usuários, enquanto também fornecem serviços.

##9.
Um **processo** é uma instância em execução de algum programa, identificado por um endereço IP e uma porta.

##10.
É um protocolo de segurança que permite a comunicação segura através da internet, utilizando criptografia para conexões TCP, garantindo a integridade dos dados.

##11.
O nó raiz tem os filhos `<head>` e `<body>`. Não há um limite estrito, mas como padrão, os filhos do nó raiz são somente `<head>` e `<body>`. Qualquer desvio pode causar problemas de desempenho e compatibilidade em diferentes navegadores.

##12.
**Marcação**:
    - `div`: elemento genérico usado para controlar o fluxo do conteúdo;
    - `span`: um contêiner genérico inline;
    - `ul`: representa uma lista não ordenada;
    - `ol`: representa uma lista ordenada;
    - `h1`, `h2`, `h3`: representam títulos da página.

**Semântica**:
    - `menu`: alternativa semântica para `<ul>`;
    - `strong`: indica que o texto é de grande importância;
    - `header`: representa o cabeçalho de uma seção ou documento;
    - `article`: representa um conteúdo independente que pode ser reutilizado;
    - `footer`: representa o rodapé de uma seção ou documento.

##13.
`<input>`

##14.
`<a href="link para um outro documento html">link para um outro documento html</a>`

##15. 
   - `input`: pega dados do usuário;
   - `textarea`: utilizado para capturar texto em múltiplas linhas;
   - `select`: menu suspenso que permite escolher uma opção;
   - `button`: um botão para enviar um formulário ou executar ações;
   - `label`: associa um texto descritivo a um campo de entrada.

##16. 
   a) Um atributo que facilita a aplicação de estilos CSS e a seleção de elementos JavaScript;  
   b) Um identificador único para um elemento;  
   c) Um atributo para identificar dados enviados ao servidor em um input;  
   d) Indica que um elemento não deve ser exibido;  
   e) Permite a aplicação de estilos CSS diretamente a um elemento HTML;  
   f) Fornece informações adicionais quando o usuário passa o mouse sobre o elemento.

##17.
É uma abordagem para garantir a usabilidade de todos os usuários, independentemente de suas capacidades ou dispositivos, promovendo uma web acessível e inclusiva.

##18.
Uma **regra** é a combinação de um seletor e um bloco de declarações, onde o seletor determina os elementos afetados pela declaração, que define o estilo.

##19.
Um **seletor de classe** aplica estilos a elementos com uma ou mais classes específicas. Um **seletor de ID** é usado para um único elemento que possui um ID específico.

   ```css
   .titulo {
       background-color: red;
   }
   ```

   Com isso, todos os títulos terão background da cor vermelha.

   ```css
   #tituloprincipal {
       color: black;
   }
   ```

   Com isso, somente o título principal terá a cor preta.

##20. 
   - **Margin**: espaço externo ao redor de um elemento, criando distância entre ele e elementos adjacentes.
   - **Border**: linha que envolve o conteúdo e o padding de um elemento.
   - **Padding**: espaço interno entre o conteúdo de um elemento e sua borda.

##21.
O **posicionamento**:
   - **static**: padrão, posicionado de acordo com o fluxo normal do documento;
   - **relative**: posicionado em relação à sua posição original;
   - **absolute**: removido do fluxo normal, posicionado em relação ao ancestral mais próximo que não seja estático;
   - **fixed**: removido do fluxo normal, posicionado em relação ao viewport, permanecendo no mesmo lugar ao rolar a página.

   Exemplo de uma página HTML com as 4 propriedades:

   ```html
   <!DOCTYPE html>
   <html lang="pt-BR">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
       <style>
           .container {
               position: relative;
               width: 300px;
               height: 300px;
               background-color: red;
               margin: 20px auto;
               padding: 10px;
           }
           .static {
               width: 100%;
               height: 50px;
               background-color: blue;
               margin-bottom: 10px;
           }
           .relative {
               position: relative;
               width: 100%;
               height: 50px;
               background-color: green;
               top: 20px;
           }
           .absolute {
               position: absolute;
               width: 100px;
               height: 50px;
               background-color: yellow;
               top: 10px;
               right: 10px;
           }
           .fixed {
               position: fixed;
               width: 200px;
               height: 50px;
               background-color: gray;
               bottom: 20px;
               right: 20px;
           }
       </style>
   </head>
   <body>

       <div class="container">
           <div class="static">Eu sou estático</div>
           <div class="relative">Eu sou relativo</div>
           <div class="absolute">Eu sou absoluto</div>
       </div>

       <div class="fixed">Eu sou fixo</div>

   </body>
   </html>
   ```
