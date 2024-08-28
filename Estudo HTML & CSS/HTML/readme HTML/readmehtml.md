# HTML 

HTML, ou HyperText Markup Language (Linguagem de Marcação de Hipertexto), é a linguagem padrão usada para criar e estruturar páginas na web. Ele permite que você organize e formate o conteúdo de um site, como textos, imagens, vídeos e links, através de elementos chamados tags. Ela seria como se fosse o esqueleto de uma página web.

# CSS 

CSS, ou Cascading Style Sheets (Folhas de Estilo em Cascata), é uma linguagem usada para definir a apresentação visual de documentos escritos em HTML ou XML12. Ele permite que você estilize elementos da sua página web, como cores, fontes, espaçamentos, e layouts, separando o conteúdo da apresentação visual. Ela seria como se fosso a pele de uma página web.

# Sumário 

1. - [HTML Básico](#html-básico)
2. - [Hyperlinks](#hyperlinks)
3. - [](#)
4. - [](#)
5. - [](#) 


## HTML Básico

< !DOCTYPE html> - essa tag  informa ao navegador que tipo de documento ele está prestes a processar. Neste caso, o HTML5. 

< html> -  Indica ao navegador que o conteúdo dentro dela é um documento HTML. Tudo dentro das tags < html> e < /html> é considerado parte do documento HTML.

< head> - Inclui informações como o título da página (< title>), links para arquivos CSS, scripts, e outros metadados que não são exibidos diretamente na página.

< body> -  Esta tag contém todo o conteúdo visível de um documento HTML.

< h1>, < h2>, < h3>, < h4> - Essas tags são usadas para definir cabeçalhos/títulos. 

< h1> É o cabeçalho de nível mais alto, geralmente usado para o título principal da página. 

< h2> Subtítulo, usado para seções principais dentro da página.

< h3> Sub-subtítulo, usado para subseções dentro de uma seção.

< h4> Título de nível inferior, usado para subdivisões menores.

< p> - Esta tag é usada para definir um parágrafo de texto.

< br> -  A tag < br> em HTML é usada para inserir uma quebra de linha, ou seja, ela força o texto a continuar na linha seguinte.

< hr> - A tag < hr> representa uma quebra temática entre elementos de nível de parágrafo. É usada para separar seções de conteúdo, criando uma linha horizontal na página.

< pre> - A tag < pre> exibe o texto exatamente como ele é escrito no código HTML, preservando espaços em branco e quebras de linha. É útil para exibir código-fonte, poesia, letra de música ou qualquer outro texto onde a formatação precisa ser mantida.

comentários em HTML - Comentários em HTML são usados para inserir notas que não são exibidas no navegador. É útil para deixar notas explicando o seu código para si próprio, ou para outro desenvolvedor.

> < !--Isso é um comentário-->

## Hyperlinks

Hyperlinks são um dos elementos mais importantes da web, pois permitem a navegação entre diferentes páginas e recursos. Hyperlinks permite que os usuários cliquem em um link e sejam direcionados para outro documento ou recurso.

Para fazer isso usamos a tag < a> e o atributo href

> < a href="https://www.example.com">Visite o Example.com < /a> 

Podemos usar alguns outros atributos 

Atributo TARGET:
--
O atributo target especifica onde abrir o documento vinculado.

-  _self: Abre o link na mesma janela/aba **(padrão)**.
-  _blank: Abre o link em uma nova janela/aba.
-  _parent: Abre o link na janela pai.
-  _top: Abre o link na janela inteira do navegador.

Exemplo com target:

> < a href="https://www.example.com" target="_blank">Abrir em nova aba< /a>

Também podemos usar link que redireciona para um endereço de email

Redirecionar para email
--
> < a href="mailto:exemplo@dominio.com">Enviar Email< /a>

Utiliza mailto: no atributo href para criar um link que abre o programa de email do usuário

Link com Imagem
--
Coloca uma tag < img> dentro da tag < a> para criar um link clicável com uma imagem.

> < a href="https://www.example.com">
>    <img src="imagem.jpg" alt="Descrição da Imagem">
> < /a>

Atributo title
--

Quando o mouse ficar posicionado em cima do texto ele exibe uma caixinha com o texto nesse caso seria : "te leva para o site 'example'"

> < a href="https://www.example.com" target="_blank" title="te leva para o site 'example'"> Clique aqui < /a>

## Imagens 

A tag < img> é usada para incorporar imagens em uma página HTML.

As imagens não são tecnicamente inseridas em uma página web; elas são vinculadas a páginas web. A tag < img> cria um espaço reservado para a imagem referenciada.

>  < img src="caminho/para/imagem.jpg" alt="Descrição da Imagem">

### - Atributo alt:

"alt" (alternative text) fornece um texto alternativo que será exibido caso a imagem não possa ser carregada. Esse texto também é importante para acessibilidade, pois descreve a imagem para usuários que usam leitores de tela.

> < img src="imagem.jpg" alt="Descrição da imagem">

### - Title:

Adiciona um texto que aparece como uma dica quando o usuário passa o mouse sobre a imagem.

> < img src="imagem.jpg" alt="Uma bela paisagem" title="Paisagem do pôr do sol">

### - Loading:

Pode ser usado para adiar o carregamento de uma imagem fora da tela até que o usuário role até ela. Os valores possíveis são lazy (adiado), eager (imediato), ou auto (comportamento padrão do navegador).


> < img src="imagem.jpg" alt="Uma bela paisagem" loading="lazy">

### - Width & Height:

Especificam a largura e a altura da imagem. Esses valores podem ser definidos em pixels ou em porcentagens.

> < img src="imagem.jpg" alt="Uma bela paisagem" width="500" height="300">

## Áudio

A tag de áudio em HTML é usada para incorporar arquivos de áudio em uma página web. Ela foi introduzida no HTML5 e permite que os desenvolvedores adicionem som sem depender de plugins externos, como o Flash. A tag < audio> suporta vários formatos de áudio, como MP3, Ogg e WAV.

>   < audio controls> <br>
>   < source src="audio.mp3" type="audio/mpeg"> <br>
>   < source src="audio.ogg" type="audio/ogg"> <br>
>   Your browser does not support the audio element. <br>
>   < /audio> <br>

### Atributos Comuns

- controls: Mostra controles como play, pause, volume, etc., permitindo ao usuário interagir com o áudio.

- autoplay: Faz com que o áudio seja reproduzido automaticamente ao carregar a página.

- loop: Faz com que o áudio seja reproduzido em loop contínuo.

- muted: Inicialmente silencia o áudio.

- preload: Sugere ao navegador o que fazer com o áudio antes que o usuário interaja. Pode ter valores como none, metadata, ou auto.

### Elementos Filhos 

- source: Define diferentes arquivos de áudio para diferentes formatos, garantindo que o áudio funcione em todos os navegadores.

- Texto alternativo: O texto entre a abertura e o fechamento da tag < audio> é exibido caso o navegador não suporte o elemento de áudio.

### Atributo type

O atributo type especifica o formato do arquivo de áudio que está sendo fornecido. Ele informa ao navegador o tipo de arquivo (por exemplo, audio/mpeg para MP3, audio/ogg para Ogg Vorbis) que está disponível na URL fornecida pela tag < source>.

### Múltiplas Tags Source

O uso de múltiplas tags < source> dentro da tag < audio> permite que o desenvolvedor forneça diferentes formatos de áudio. Isso garante que o áudio seja reproduzido corretamente, independentemente do navegador ou dispositivo que o usuário esteja utilizando.

## Vídeo

A tag < video> em HTML é usada para incorporar vídeos em páginas da web. Essa tag permite que desenvolvedores adicionem vídeos diretamente no conteúdo de um site sem a necessidade de plugins externos, como o Flash.

>   < video controls><br>
>   < source src="caminho_do_video.mp4" type="video/mp4"><br>
>   Seu navegador não suporta o elemento de vídeo.<br>
>   < /video><br>

### Atributos Comuns

- src: Especifica o caminho do arquivo de vídeo. Geralmente, é usado dentro da tag < source>.

- controls: Adiciona controles ao vídeo (play, pause, volume, etc.).

- autoplay: Faz com que o vídeo comece a ser reproduzido automaticamente quando a página é carregada.

- loop: Faz o vídeo reiniciar automaticamente quando terminar.

- muted: Inicia o vídeo sem som.

- width e height: Especificam as dimensões do vídeo em pixels.

- poster: Define uma imagem a ser exibida antes do início da reprodução do vídeo.


>   < video width="600" height="400" controls poster="imagem_poster.jpg"><br>
>   < source src="video.mp4" type="video/mp4"><br>
>   < source src="video.ogv" type="video/ogg"><br>
>   < source src="video.webm" type="video/webm"><br>
>   Seu navegador não suporta o elemento de vídeo.<br>
>   < /video><br>

## Favicons

Os favicons (favorite icons) são pequenos ícones gráficos associados a uma página da web ou site. Eles são exibidos em locais como:

- Guia do Navegador: Na aba do navegador ao lado do título da página.

- Barra de Favoritos: Ao salvar a página nos favoritos.

- Histórico de Navegação: Ao visualizar o histórico do navegador.

- Tela de Início em Dispositivos Móveis: Quando uma página da web é adicionada à tela inicial de um dispositivo.

### Como adicionar um favicon no site

Para adicionar um favicon ao seu site, você deve incluir uma linha no < head> do seu documento HTML, especificando o caminho para o arquivo de ícone. O formato mais comum é o .ico, mas você também pode usar .png, .svg, .gif, entre outros.

>< head><br>
>    < link rel="icon" href="caminho/do/seu/favicon.ico" type="image/x-icon"><br>
>< /head><br>

### Tipos e formatos de favicons

- .ico: Formato tradicional e amplamente suportado por todos os navegadores.

- .png: Formato de imagem popular, especialmente para favicons de alta resolução.

- .svg: Formato vetorial, ideal para ícones que precisam ser escalados para diferentes tamanhos.

- .gif: Suporta animações, mas é menos comum para favicons.

### Especificando Diferentes Tamanhos

>< head><br>
>    < link rel="icon" href="favicon-16x16.png" sizes="16x16" type="image/png"><br>
>    < link rel="icon" href="favicon-32x32.png" sizes="32x32" type="image/png"><br>
>    < link rel="icon" href="favicon-96x96.png" sizes="96x96" type="image/png"><br>
>< /head><br>


## Formatando Textos

A formatação de texto em HTML (Hypertext Markup Language) é feita usando uma variedade de elementos, conhecidos como tags, que definem como o texto deve ser exibido em um navegador.

### **Cabeçalhos**

Usados para títulos e subtítulos. Vão de < h1> (mais importante) a < h6> (menos importante).

> < h1>Título Principal< /h1><br>  
> < h2>Subtítulo< /h2><br>

### **Parágrafos**

Representam um bloco de texto.

>< p>Este é um parágrafo< /p>

### **Negrito e Itálico**

Em negrito:

> < b>Texto em negrito< /b>

Em itálico:

> < i>Texto em itálico< /i>

### **Linhas**

Usadas para dividir seções de conteúdo.

> < hr> // cria uma linha

Existem diversas outras maneiras de formatar texto com HTML.

## Span & Div

### Diferença entre Div e Span

#### < Div>(division): 

O < div> é um elemento de bloco (block-level element) usado para agrupar outros elementos HTML e criar seções em uma página. Ele ocupa toda a largura disponível do seu contêiner pai, começando em uma nova linha. 
É amplamente utilizado para criar layouts de página, caixas, contêineres e para agrupar outros elementos HTML que precisam de um tratamento comum em termos de estilo ou comportamento.

#### < Span>:

O < span> é um elemento inline (inline-level element) usado para estilizar partes específicas do conteúdo dentro de um bloco de texto ou outro conteúdo inline. Diferente do < div>, ele não quebra a linha e só ocupa a largura necessária para o conteúdo que envolve.
É ideal para aplicar estilos específicos a partes de um texto ou para aplicar scripts a trechos específicos do conteúdo sem afetar o layout ao redor.

---
Resumidamente O < div> cria um bloco que se estende por toda a largura disponível, enquanto o < span> apenas se estende pelo conteúdo que ele envolve.

Use < div> para criar seções ou contêineres em uma página e < span> para estilizar partes do conteúdo dentro dessas seções.

## Listas
 
As listas em HTML são usadas para organizar e exibir informações em um formato de lista. Existem três tipos principais de listas em HTML.

### Listas ordenadas (< ol>)

Uma lista que exibe itens em uma sequência numerada.

<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

#### Atributo type

type: Define o tipo de numeração (por exemplo, números, letras).

<ol type="a">
  <li>Item 1</li>
  <li>Item 2</li>
</ol>


### Listas não ordenadas < ul>

Uma lista não ordenada exibe itens com marcadores (bullets) e não segue uma sequência específica.

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

#### Atributo type

type: Define o tipo de marcador (por exemplo, disco, círculo, quadrado).

<ul style="list-style-type: square;">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

### Listas de definição

Uma lista de definição é usada para pares de termos e descrições, como em dicionários ou glossários.

<dl>
  <dt>Termo 1</dt>
  <dd>Descrição do Termo 1</dd>
  <dt>Termo 2</dt>
  <dd>Descrição do Termo 2</dd>
</dl>

## Tabelas

As tabelas no HTML são usadas para organizar e exibir dados em formato de grade, com linhas e colunas. Elas são criadas usando uma combinação de elementos HTML específicos.

1. - < table>: Este é o elemento que define a tabela. Todos os outros elementos relacionados à tabela são filhos do < table>. 


> < table> <br>
>  <-- Outros elementos da tabela vão aqui --> <br>
> < /table>

2. - < tr>: Cada linha da tabela é definida com um elemento < tr>. Dentro de cada < tr>, você coloca células de dados ou de cabeçalho. 

>< table> <br>
>  < tr><br>
>    <-- Células vão aqui --><br>
>  < /tr><br>
>< /table>

3. - < th>: O elemento < th> define uma célula de cabeçalho em uma tabela. Essas células são normalmente exibidas em negrito e são centradas por padrão. Elas são usadas para descrever o conteúdo das colunas ou linhas.

>< table><br>
>  < tr><br>
>    < th>Cabeçalho 1< /th><br>
>    < th>Cabeçalho 2< /th><br>
>  < /tr><br>
>< /table>


4. - < td>: O elemento < td> define uma célula de dados em uma tabela. Essas células contêm os dados da tabela.

> < table><br>
>  < tr><br>
>    < td>Dado 1< /td><br>
>    < td>Dado 2< /td><br>
>  < /tr><br>
> < /table>

#### Exemplo "Completo"

<table border="1">
  <tr>
    <th>Nome</th>
    <th>Idade</th>
  </tr>
  <tr>
    <td>João</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>30</td>
  </tr>
</table>

## Botões

Botões em HTML são criados principalmente usando a tag < button> ou a tag < input> com o atributo type="button". Eles são usados em formulários, páginas da web e aplicativos para permitir que os usuários realizem ações, como enviar um formulário, iniciar um processo ou ativar um script.

### < Button>

> < button type="button">Clique aqui< /button>

O botão criado com a tag < button> pode conter não apenas texto, mas também imagens e outros elementos HTML.
O atributo type pode ter diferentes valores:

button: Um botão genérico que não realiza nenhuma ação até que seja programado com JavaScript.

submit: Envia o formulário que o contém.

reset: Reseta os campos do formulário para seus valores iniciais.

### < input>

< input type="button" value="Clique aqui">

O botão criado com a tag < input> é mais limitado do que a tag < button>, pois só pode conter texto, definido pelo atributo value.
Também há outros tipos:

submit: Envia o formulário. 

#### Tipo Submit
Este botão é usado para enviar dados de um formulário para um servidor. Quando clicado, o formulário é enviado ao servidor especificado no atributo action da tag < form>.

>< input type="submit" value="Enviar">

Reset: Reseta o formulário.

#### Tipo Reset
Este botão redefine todos os campos do formulário para seus valores iniciais.

>< input type="reset" value="Redefinir">


#### Tipo Checkbox e Radio

Botões de rádio (< input type="radio">) permitem que o usuário selecione uma única opção em um grupo de opções.

Checkbox (< input type="checkbox">) permite múltiplas seleções.

<input type="radio" name="group" value="option1"> Opção 1

<input type="checkbox" name="option" value="option2"> Opção 2


## Formulários

Formulários em HTML (HyperText Markup Language) são uma maneira fundamental de coletar dados do usuário em uma página da web. Eles permitem que os usuários insiram informações, como texto, opções, arquivos, entre outros, e enviem esses dados para um servidor para processamento.

### Componentes de um formulário

#### < form>:

Atributos comuns:

1. - action: Especifica a URL para a qual os dados do formulário serão enviados.

2. - method: Define o método HTTP usado para enviar os dados (GET ou POST).

#### Elementos de entrada (< input>)

type="text": Campo de entrada de texto.

type="email": Campo de entrada para emails (validações básicas de formato).

type="password": Campo para senhas, onde o texto é oculto.

type="submit": Botão que envia o formulário.

type="radio": Botões de opção, permitindo escolher apenas uma entre várias opções.

type="checkbox": Caixas de seleção, permitindo escolher várias opções.

type="file": Permite o upload de arquivos.

#### Rótulos (< label>)

Associam textos descritivos aos campos de entrada. Melhoram a acessibilidade.

#### Textarea (< textarea>)

Usada para entradas de texto maiores, como comentários.

#### Botões (< button>)

Pode ser usado para enviar ou redefinir formulários. Pode conter HTML dentro dele, ao contrário de < input type="submit">.

### Validação de Formulários

Os formulários HTML podem incluir validação básica através de atributos como **required**, **minlength**, **maxlength**, **pattern**, etc. Isso ajuda a garantir que os dados enviados estejam no formato esperado.

### Exemplo

> < form action="/enviar_dados" method="post"><br>
>  < label for="nome">Nome:< /label><br>
>  < input type="text" id="nome" name="nome"><br>
>  < label for="email">Email:< /label><br>
>  < input type="email" id="email" name="email"><br>
>  < input type="submit" value="Enviar"><br>
> < /form>

## Headers e Footers

As tags < header> e < footer> são elementos estruturais usados no HTML para definir as seções de cabeçalho e rodapé dentro de um documento ou uma seção específica do conteúdo.

### Header (< header>)

A tag < header> é utilizada para agrupar introduções ou conteúdo de navegação. Ela pode conter elementos como:

Logotipos

Títulos (< h1>, < h2>, etc.)

Menus de navegação (< nav>)

Imagens de cabeçalho

Botões ou links de chamada para ação (Call to Action - CTA)

#### Exemplo de Header

>< header><br>
>    < img src="logo.png" alt="Logo da Empresa"><br>
>    < h1>Bem-vindo ao Nosso Site< /h1><br>
>    < nav><br>
>        < ul><br>
>            < li>< a href="#home">Home< /a>< /li><br>
>            < li>< a href="#sobre">Sobre< /a>< /li><br>
>            < li>< a href="#contato">Contato< /a>< /li><br>
>        < /ul><br>
>    < /nav><br>
>< /header><br>


### Footer (< footer>)

A tag < footer> define o rodapé de uma página ou de uma seção. É comum encontrar dentro dela:

Informações de contato

Direitos autorais

Links para políticas de privacidade ou termos de uso

Links de redes sociais

Informações de crédito (autores, etc.)

#### Exemplo de Footer

< footer><br>
    < p>&copy; 2024 Minha Empresa. Todos os direitos reservados.< /p><br>
    < nav><br>
        < ul><br>
            < li>< a href="#politica">Política de Privacidade< /a>< /li><br>
            < li>< a href="#termos">Termos de Uso< /a>< /li><br>
            < li>< a href="#contato">Contato< /a>< /li><br>
        < /ul><br>
    < /nav><br>
    < p>Siga-nos nas redes sociais:< /p><br>
    < a href="https://twitter.com/empresa">Twitter< /a><br> | 
    < a href="https://facebook.com/empresa">Facebook< /a><br>
< /footer><br>

