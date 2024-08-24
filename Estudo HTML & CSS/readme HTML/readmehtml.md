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


