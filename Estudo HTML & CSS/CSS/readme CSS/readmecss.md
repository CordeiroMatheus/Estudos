# CSS 

CSS, ou Cascading Style Sheets (Folhas de Estilo em Cascata), é uma linguagem usada para definir a apresentação visual de documentos escritos em HTML ou XML12. Ele permite que você estilize elementos da sua página web, como cores, fontes, espaçamentos, e layouts, separando o conteúdo da apresentação visual. Ela seria como se fosso a pele de uma página web.

# Sumário 

1. - [CSS Básico](#css-básico)
2. - [Cores](#cores)
3. - [](#)
4. - [](#)
5. - [](#) 


## CSS básico

### Seletores

Os seletores são usados para selecionar os elementos HTML que você deseja estilizar. Existem vários tipos de seletores:

- **Seletor de Elemento:** Aplica estilos a todas as instâncias de um elemento (tag) específico. 

>p {<br>
>    color: blue;<br>
>}

Isso altera a cor do texto de todos os parágrafos (< p>) para azul.

- **Seletor de Classe:** Aplica estilos a todos os elementos que possuem uma classe específica. No HTML, uma classe é atribuída com o atributo class.

> .minhaClasse { <br>
>     font-size: 20px; <br>
> }

Isso define o tamanho da fonte para 20px em todos os elementos que têm a classe minhaClasse.

- **Seletor de ID:** Aplica estilos a um elemento único com um ID específico. No HTML, um ID é atribuído com o atributo id.

>#meuID {<br>
>    background-color: yellow;<br>
>}

Isso define o fundo amarelo para o elemento que possui o ID meuID.

### Propriedades e Valores

As propriedades definem o que você deseja estilizar, e os valores definem como você deseja estilizar.

1. - Cor do texto (color) - Define a cor do texto

>h1 {<br>
>    color: red;<br>
>}

Isso altera a cor do texto em todos os < h1> para vermelho.

2. - Cor do fundo (background-color) - Define a cor de fundo de um elemento.

>div {<br>
>    background-color: lightgray;<br>
>}

Isso define a cor de fundo de todas as < div> para cinza claro.

3. - Tamanho da Fonte (font-size) - Define o tamanho da fonte do texto.

>p {<br>
>    font-size: 16px;<br>
>}

Isso define o tamanho da fonte para 16px em todos os parágrafos (< p>).


4. - Margem (margin) - Define o espaço ao redor de um elemento.

>.box {
>    margin: 10px;
>}

Isso adiciona uma margem de 10px ao redor de todos os elementos com a classe box.

5. - Preenchimento (padding) - Define o espaço dentro de um elemento, entre o conteúdo e a borda.

>.box {<br>
>    padding: 20px;<br>
>}

Isso adiciona um preenchimento de 20px dentro de todos os elementos com a classe box.

6. - Borda (border) - Define a borda ao redor de um elemento.

>img {<br>
>    border: 2px solid black;<br>
>}

Isso adiciona uma borda preta de 2px ao redor de todas as imagens (< img>).

### Comentários

Os comentários em CSS são usados para inserir notas que não são processadas pelo navegador. Eles são úteis para explicar o código ou deixá-lo mais legível.

<code>/* Comentário em CSS */</code>

### Incorporação do CSS

Existem três formas principais de incorporar CSS em um documento HTML: in-line, interno (ou embutido) e externo. Cada uma tem suas vantagens e desvantagens, dependendo do contexto de uso.

### 1. - CSS In-line: 
O CSS in-line é aplicado diretamente em elementos HTML usando o atributo style. Cada elemento que requer estilização tem seus próprios estilos definidos diretamente dentro da tag HTML.

Exemplo:

> < p style="color: blue; font-size: 20px;">Este é um parágrafo estilizado in-line.< /p>

> <p style="color: blue; font-size: 20px;">Este é um parágrafo estilizado in-line.</p>

Vantagens: 

- Fácil de aplicar
- Não requer a criação de arquivos adicionais

Desvantagens: 

- Dificulta a manutenção, pois o estilo fica misturado com o conteúdo.
- Difícil de reutilizar estilos em múltiplos elementos.
- Pode aumentar o tamanho do código HTML.

### CSS Interno (ou Embutido):
O CSS interno é inserido dentro de uma tag < style> na seção < head> de um documento HTML. Todos os estilos definidos nesse bloco se aplicam apenas àquele documento específico.

Exemplo: 

< head><br>
    < style><br>
        p {<br>
            color: blue;<br>
            font-size: 20px;<br>
        }<br>
    < /style><br>
< /head><br>
< body><br>
    < p>Este é um parágrafo estilizado com CSS interno.< /p><br>
< /body><br>

Vantagens: 

- Útil para páginas únicas ou quando os estilos são exclusivos de uma página específica. 
- Mantém o código HTML mais limpo em comparação com o uso de estilos in-line.

Desvantagens: 

- Não é reutilizável em outras páginas.
- Pode tornar o código mais díficil de gerenciar em projetos maiores.

### CSS Externo:

O CSS externo é armazenado em um arquivo separado com extensão .css, que é vinculado ao documento HTML usando a tag < link> no < head>. Esse arquivo pode ser reutilizado em múltiplas páginas.

Exemplo:

< head><br>
    < link rel="stylesheet" href="styles.css"><br>
< /head><br>
< body><br>
    < p>Este é um parágrafo estilizado com CSS externo.< /p><br>
< /body><br>

Vantagens: 

- Melhora a manutenção e organização do código.
- Estilos podem ser reutilizados em várias páginas, garantindo consistência.
- Reduz o tamanho dos arquivos HTML, já que o CSS fica separado.

Desvantagens:

- Requer a criação e o gerenciamento de arquivos adicionais.
- Pode haver um pequeno atraso no carregamento inicial da página devido ao download do arquivo CSS.

### Escolhendo o Tipo de CSS

- In-line: Ideal para pequenas alterações ou quando você precisa de um estilo único para um elemento específico.
- Interno: Útil para documentos únicos ou páginas com estilos que não serão compartilhados com outras páginas.
- Externo: A melhor escolha para a maioria dos projetos, especialmente quando há necessidade de reutilização e manutenção de estilos em várias páginas.

## Cores