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

No CSS (Cascading Style Sheets), as cores podem ser especificadas de várias maneiras para estilizar elementos HTML. Aqui estão as formas mais comuns de definir cores:

### Nomes de Cores (Color Names): 

CSS reconhece 140 nomes de cores predefinidos, como red, blue, green, black, white, etc. São fáceis de usar, mas limitam a paleta de cores disponíveis.

Exemplo:

<code>
h1 { <br>
    color: red; <br>
}
</code>

### Hexadecimal (Hex):

As cores podem ser definidas usando códigos hexadecimais (hex). Um código de cor hexadecimal é composto de seis dígitos, representando a quantidade de vermelho (R), verde (G) e azul (B). Os dois primeiros dígitos indicam a intensidade do vermelho, os dois do meio indicam o verde, e os dois últimos indicam o azul.

Exemplo:

<code>
p { <br>
    color: #ff5733; /* Um tom de laranja */ <br>
}
</code>

### RGB (Red, Green, Blue):

O modelo RGB define as cores através de três valores numéricos: vermelho, verde e azul. Cada valor varia de 0 a 255.

Exemplo:

<code>

div {<br>
    background-color: rgb(255, 0, 0); /* Cor vermelha */<br>
}
</code>

### RGBA (Red, Green, Blue, Alpha):

A versão RGBA é similar ao RGB, mas inclui um quarto valor chamado alpha, que define a opacidade da cor (valor entre 0 e 1). Quanto menor o valor, mais transparente a cor.

Exemplo:

<code>

div { <br>
    background-color: rgba(255, 0, 0, 0.5); /* Vermelho com 50% de opacidade */ <br>
}
</code>

### HSL (Hue, Saturation, Lightness):

O modelo HSL usa três valores:

- Hue (matiz): define o tipo de cor (em graus, de 0 a 360).<br>
- Saturation (saturação): define a intensidade da cor (de 0% a 100%).<br>
- Lightness (luminosidade): controla a quantidade de luz na cor (de 0% a 100%).

Exemplo:

<code>

span { <br>
    color: hsl(120, 100%, 50%); /* Cor verde */ <br>
}
</code>

### HSLA (Hue, Saturation, Lightness, Alpha):

Como o RGBA, o modelo HSLA adiciona a opacidade ao HSL.

Exemplo:

<code>

span { <br>
    color: hsla(120, 100%, 50%, 0.3); /* Verde com 30% de opacidade */ <br>
}
</code>

## Fontes 

No CSS (Cascading Style Sheets), as fontes se referem ao estilo de texto utilizado em um documento web. Para controlar a aparência da tipografia, o CSS oferece várias propriedades relacionadas a fontes. Vamos explorar as principais:

### Font-Family:

Define a família da fonte que será usada. Você pode listar várias fontes como alternativas, separadas por vírgulas. Se a primeira fonte não estiver disponível no sistema do usuário, o navegador tentará usar a próxima da lista.

Exemplo:

<code>
p { <br>
  font-family: "Arial", "Helvetica", sans-serif; <br>
}
</code>

### Font-Size:

Especifica o tamanho da fonte. Pode ser definido em pixels (px), em (em), porcentagens (%), ou usando valores como small, large, etc.

Exemplo:

<code>
h1 { <br>
  font-size: 24px; <br>
}
</code>

### Font-Weight:

Controla a espessura (peso) da fonte. Os valores podem variar de 100 (mais fino) a 900 (mais grosso), ou você pode usar valores como normal ou bold.

Exemplo:

<code>
strong { <br>
  font-weight: bold; <br>
}
</code>

### Font-Style: 

Define o estilo da fonte, como normal, itálico ou oblíquo.

Exemplo:

<code>
em { <br>
  font-style: italic; <br>
}
</code>

### Font-Variant: 

Usado para aplicar variações à fonte, como small-caps, que transforma todas as letras em maiúsculas, mas as letras minúsculas ficam menores.

Exemplo:

<code>
h2 { <br>
  font-variant: small-caps; <br>
}
</code>

### Line-Height:

Define a altura da linha entre o texto. Pode ser útil para ajustar a legibilidade.

Exemplo:

<code>
p { <br>
  line-height: 1.5; <br>
}
</code>


### @Font-Face:

Permite importar fontes externas para o seu site, garantindo que uma fonte específica seja usada, mesmo que não esteja instalada no dispositivo do usuário.

Exemplo:

<code>
@font-face { <br>
  font-family: 'MinhaFonte'; <br>
  src: url('minhafonte.woff2') format('woff2'), <br>
       url('minhafonte.woff') format('woff'); <br>
} <br>
 <br>
h1 { <br>
  font-family: 'MinhaFonte', sans-serif; <br>
}
</code>

Aqui, uma fonte personalizada chamada "MinhaFonte" é importada e usada para os títulos < h1>.

Essas são as principais propriedades de fontes no CSS, que permitem personalizar o estilo de texto de maneira flexível e acessível.

## Bordas

No CSS, bordas (borders) são linhas que circundam o conteúdo de um elemento HTML. Elas ajudam a definir visualmente o limite do conteúdo e são personalizáveis de diversas maneiras. As bordas podem ser configuradas em termos de largura, estilo e cor. Aqui está um resumo sobre bordas no CSS:

### Propriedades das bordas:

**border-width:** Define a espessura da borda. Pode ser um valor específico (em pixels, por exemplo) ou palavras-chave como thin, medium, thick.

Exemplo: 

<code>
border-width: 2px;
</code>

<br>

**border-style:** Define o estilo da borda. Alguns exemplos de estilos são:

solid: uma linha sólida. <br>
dashed: uma linha pontilhada. <br>
dotted: uma linha de pontos. <br>
double: duas linhas sólidas. <br>
none: sem borda. <br>

Exemplo: 

<code>
border-style: solid;
</code>

<br>

**border-color:** Define a cor da borda. Você pode usar nomes de cores (red), valores hexadecimais (#ff0000), RGB, etc.

Exemplo: 

<code>
border-color: blue;
</code>

<br>

**border-radius:** Arredonda os cantos da borda, criando bordas circulares ou elípticas.


Exemplo: 

<code>
border-radius: 10px; (arredonda todos os cantos em 10 pixels).
</code>

### Propriedade Shorthand (border)

Você pode usar a propriedade border como um atalho para definir a largura, estilo e cor da borda de uma só vez:

<code>
element { <br>
  border: 2px solid black; <br>
}
</code>

### Bordas Individualmente

Também é possível aplicar estilos de borda apenas a lados específicos do elemento usando:

- border-top
- border-right
- border-bottom
- border-left

Por exemplo:

<code>
element { <br>
  border-top: 5px solid red; <br>
  border-left: 3px dashed blue; <br>
}
</code>

## Sombra



## Margem 



## Float



## Overflow



## Display



## Height e Width



## Position



## Background Images