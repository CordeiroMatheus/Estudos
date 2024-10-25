<!--
# - Título de nível 1: Usado para criar títulos de nível 1. Quanto mais # você adicionar, menor será o nível do título (até 6 níveis).

**texto** - Negrito: Usado para destacar um texto em negrito.

*texto* - Itálico: Usado para destacar um texto em itálico.

texto - Link: Usado para criar um link clicável.

!texto - Imagem: Usado para inserir uma imagem.

> texto - Citação: Usado para criar uma citação em bloco.

- item - Lista não ordenada: Usado para criar uma lista com marcadores.

1. item - Lista ordenada: Usado para criar uma lista numerada.

`código` - Código inline: Usado para destacar um trecho de código dentro de um texto.

```código``` - Bloco de código: Usado para inserir um bloco de código.

--- - Linha horizontal: Usado para inserir uma linha horizontal para separação visual de conteúdo.

-->

# Javascript

## Sumário

1. - [Variáveis](#variáveis)
2. - [Var, let e const](#var-let-e-const)
3. - [Tipos de Dados](#tipos-de-dados)
4. - [Operações Aritméticas](#operações-aritméticas)
5. - [Input do Usuário](#input-do-usuário)
6. - [Constante](#constantes)
7. - [Funções matemáticas](#funções-matemáticas)
8. - [Números Aleatórios](#gerar-números-aleatórios)
9. - [Métodos de String](#métodos-de-strings)
10. - [Slice String](#slice-string)
11. - [Método Chaining](#método-chaining)
12. - [Condicional If](#condicional-if)
13. - [Propriedade Checked](#propriedade-checked)
14. - [Switch Case](#switch-case)

### Variáveis

Uma varíavel é como um 'container' que armazena dados.

a variável ser torna o valor que nela contém.

no Javascript temos 3 palavras para declaração de variáveis:

---
### var, let e const

declarando uma variável com var ela tem um escopo global e é içada para topo do código antes de ser inicializada.

já o let e o const tem escopo de bloco ou seja só podem ser acessadas a partir do bloco em que foram definidas.

nas versões mais atuais do javascript se recomenda declarar uma variável com let ao invés de usar var

**Importante!**

independente da maneira em que você declarar uma variável dentro de uma função ela só será possível de ser acessada dentro dessa função.

e para atribuir um valor utilizamos o operador de atribuição.


---
#### = (operador de atribuição)

quando declaramos uma variável precisamos dar um nome significativo para que seja possível identificar sua função, no caso de uma idade de um estudante poderia fazer como:

> let idade = 16

Se quisermos exibir essa mensagem no console:

> console.log(idade) // saída: 16

### Tipos de dados

Os tipos de dados em programação são fundamentais para definir o tipo de informação que uma variável pode armazenar e manipular. Eles ajudam a garantir que os dados sejam tratados corretamente pelo programa.

Exemplo:

> let primeiroNome = "Matheus" // String <br>
> let idade = 16 // number <br>
> let estudante = true // boolean

### Operações Aritméticas

No JavaScript expressões aritméticas são usadas para realizar cálculos matemáticos.

Os operandos incluem variáveis, valores, etc

Os operadores são (+, -, *, /, %)

Adição(+): Soma dois ou mais valores 

> let soma = 5 + 3 // saída: 8

Subtração(-): Subtrai um valor do outro

> let subtração = 10 - 5 // saída: 5

Multiplicação(*): Multiplica dois valores 

> let multiplicação = 7 * 3 // saída: 21

Divisão(/): Divide um valor por outro

> let divisão = 20 / 4 // saída: 5

Módulo(%): Retorna o resto da divisão =

> let modulo = 10 % 4 // saída: 2

Exponenciação(**): Eleva um valor à potência do outro

> let exponenciação = 2 ** 3 // saída: 8

#### Operador de Incremento e Decremento

Os operadores de incremento e decremento em JavaScript são usados para aumentar ou diminuir o valor de uma variável em 1. Eles podem ser usados tanto em forma prefixada quanto sufixada.

Prefixada: incrementa ou decrementa o valor da variável antes de usá-la em uma expressão.

Incremento:
>let a = 5 <br>
>let b = ++a // a será 6, b será 6

Decremento:
> let a = 5 <br>
> let b = --a // a será 4, b será 4

Sufixada: Incrementa o valor da variável depois de usá-la na expressão.

Incremento:
> let a = 5 <br>
> let b = a++ // a será 6, b será 5

Decremento:
> let a = 5 <br>
> let b = a-- // a será 4, b será 5

#### Atribuição Ampliada

A atribuição ampliada em JavaScript permite que você realize operações aritméticas e atribua o resultado à mesma variável.

Soma:
>let soma = 10; <br>
>soma += 5; // Agora soma é 15

Subtração:
>let diferenca = 20; <br>
>diferenca -= 5; // Agora diferenca é 15

Multiplicação:
>let produto = 5; <br>
>produto *= 3; // Agora produto é 15

Divisão:
>let divisao = 15;
>divisao /= 3; // Agora divisao é 5

Módulo:
>let resto = 10;
>resto %= 3; // Agora resto é 1

Exponenciação:
>let potencia = 2;
>potencia **= 3; // Agora potencia é 8

#### A ordem das operações 

1. Parênteses ()
2. Expoentes
3. Multiplicação e Divisão
4. Adição e Subtração

### Input do Usuário

Para aceitar um input de usuário podemos usar o window.prompt(método mais fácil), ou usar elementos html para que o usuário consiga inserir dados, para que, por meio do Javascript, possamos pegar o input feito pelo usuário.

Método "fácil" (window.prompt):

> let nomeUsuario = window.prompt("Digite o nome de usuário")<br>
> console.log(nomeUsuario)

Método "difícil" (document.getElementById):

>let nomeUsuario<br>
>document.getElementById('btnnome').onclick = function(){<br>
>    nomeUsuario = document.getElementById('txtnome').value<br>
>    console.log(nomeUsuario)<br>
>    document.getElementsByTagName('p')[0].innerHTML = >`Seu nome é: ${nomeUsuario}`<br>
>}<br>

### Conversão de Tipos

Conversão de tipos é a mudança de um tipo de dado para outro(strings, numbers, booleans)

A conversão de tipos ocorre de duas maneiras no Javascript: 

Conversão
--
É o processo explícito de conversão de tipos e se dá pelo próprio desenvolvedor

Ex:

> Number(valor) // converte para um número <br>
> String(valor) // converte para uma string <br>
> Boolean(valor) // converte para um boolean

Coerção
--
É o processo  implícito, onde o JavaScript automaticamente converte valores de um tipo para outro. Isso acontece quando desenvolvedores aplicam operadores a certos valores de diferentes tipos

> "5" * 2 // resulta em 10 (coerção implícita para números).

### Constantes

Tem a mesma função de uma variável, porém após um valor ser atribuído ele não poderá ser modificado.

É importante saber que:

- Constantes tem escopo de bloco igual ao let. Isso significa que elas são visíveis apenas dentro do bloco onde foram declaradas.

- Como já citado anteriormente o valor de uma constante é fixo. Uma vez atribuído ele sempre permanecerá o mesmo.

Declaramos com a palavra chave const:

> const ChavedeAcesso = 9310@8905 // chave de acesso sempre será esse número

*É sempre bom declarar o nome de uma constante em letras maiúsculas*

Exemplo:

> const **PI** = 3.14159

### Funções Matemáticas

O JavaScript oferece várias funções matemáticas integradas **através do objeto Math**. Algumas das principais funções matemáticas são:

- Math.round(x): arredonda o valor da variável para o número mais próximo

> let x = 3.14 <br>
> x = Math.round(x) // x seria arredondado para 3

- Math.floor(x): Também arredonda o valor da variável só que para baixo

> let x = 4.75 <br>
> x = Math.floor(x) // x seria arrendondado para 4

- Math.ceil(x): Também arredonda o valor da variável só que pra cima

> let x = 4.3 <br>
> x = Math.ceil(x) // x seria arredondado para 5

- Math.pow(x, y): Eleva o x por y. É uma potenciação

> let x = 2 <br>
> x = Math.pow(x, 3) // 8

- Math.sqrt(x): Retorna a raiz quadrada de x

> let x = 9 <br>
> x = Math.sqrt(x) // 3

- Math.abs(x): Retorna o valor absoluto de x ***basicamente abs serve para calcular a distância entre zero***, a função Math.abs() é frequentemente usada em situações onde você precisa garantir que o resultado de um cálculo seja não negativo

> let x = -5 <br>
> x = Math.abs(x) // 5

- Math.max(x, y, z): Encontra o maior valor dentre vários fornecidos

> let maximo = Math.max(4, 5 ,9)
> console.log(maximo) // 9

- Math.min(x, y, z): Encontra o menor valor dentre vários fornecidos

> let minimo = Math.min(4, 5 ,9)
> console.log(minimo) // 4

- Math.PI: Mostra os números de PI

>console.log(Os números de PI são ${Math.PI}) // 3.141592653589793

Existem muitos mais outros métodos matemáticos do Javascript, porém esses são alguns dos que são mais utilizados


### Gerar Números Aleatórios

Usamos uma função matemática para gerar números aleatórios

> Math.random()

Math.random() normalmente gera um número decimal aleatório entre 0 e 1 porém podemos mudar isso fazendo isso:

> Math.random() * 6

No exemplo acima agora ele irá gerar um número entre 0 e 6, porém esse número terá uma dizima decimal muito grande, então podemos arredondar para que os números gerados sejam inteiros entre 0 e 6.

> Math.round(Math.random() * 6)

Agora temos um código que gera um número aleatório entre 0 e 6.

E se quisessemos que este código fosse um de lados de um dado não poderia ter o valor zero(0). Para isso fazemos:

> Math.floor(Math.random() * 6 + 1)

***É recomendado o uso do floor neste caso***

### Métodos de Strings

Os métodos de strings em JavaScript são funções que podem ser chamadas em strings para realizar operações específicas. Esses métodos permitem manipular e transformar strings de várias maneiras. Alguns exemplos incluem:

- Length(): Retorna o comprimento de uma string.

> let texto = "Olá mundo" <br>
> console.log("O número de caracteres é " + texto.length) // 9

- CharAt(): Descrição: Retorna o caractere na posição especificada pelo índice (índice começa em zero).

> let texto = "Olá mundo" <br>
> console.log("a primeira letra é " + texto.charAt(0)) // O

- IndexOf(): Retorna o índice da **primeira ocorrência** de uma substring especificada. Se não for encontrada, retorna -1 (índice começa em zero).

> let texto = "Olá, mundo!"; <br>
> console.log(texto.indexOf("mundo")); // Saída: 5

- lastIndexOf(): Retorna o índice da **última ocorrência** de uma substring especificada. Se não encontrada, retorna -1 (índice começa em zero).

> let nickname = "AronnaxZ" <br>
> console.log(nickname.lastIndexOf("n")) // 4

- trim(): Remove espaços em branco do início e do final de uma string. 

> let texto = "    Olá, mundo!    " <br>
> console.log(texto.trim()) // "Olá, mundo!"

- toUpperCase(): Converte todos os caracteres da string para maiúsculas.

> let texto = "Olá, mundo!"; <br>
> console.log(texto.toUpperCase()); // "OLÁ, MUNDO!"

- toLowerCase(): Converte todos os caracteres da string para minúsculas.

> let texto = "OLÁ MUNDO" <br>
> console.log(texto.toLowerCase()) // olá mundo

- replace(searchValue, newValue): Substitui uma substring na string por uma nova substring.

> let texto = "Olá, mundo!";<br>
> let novoTexto = texto.replace("mundo", "JavaScript");<br>
> console.log(novoTexto); // Saída: "Olá, JavaScript!"

- replaceAll(searchValue, newValue) : permite substituir todas as ocorrências de uma substring ou expressão regular em uma string.

>let texto = "A maçã é a fruta favorita. A maçã é saudável."; <br>
>let novoTexto = texto.replaceAll("maçã", "banana"); <br>
>console.log(novoTexto); // Saída: "A banana é a fruta favorita. A banana é saudável." <br>

### Slice String

A função slice em JavaScript é usada para extrair uma parte de uma string sem modificar a string original. Ela retorna uma nova string que contém os caracteres extraídos da string original. A sintaxe é:

> string.slice(início, fim)

- início: A posição inicial da extração. O índice começa em 0.

- fim (opcional): A posição final da extração. O índice é exclusivo, ou seja, o caractere na posição fim não será incluído na nova string. Se não for especificado, slice extrai até o final da string.

**Pontos importantes:**

- Se início for maior que fim, slice retornará uma string vazia.

- Se início for negativo, ele é tratado como um índice a partir do final da string. Por exemplo, -1 se refere ao último caractere.

- Se fim for negativo, ele também é tratado como um índice a partir do final da string.

### Método Chaining

O método chaining em JavaScript é uma técnica que permite encadear várias chamadas de métodos em uma única linha de código. Isso é possível porque muitos métodos retornam o próprio objeto ou outro objeto que permite a continuação do encadeamento.

Exemplo:

> let texto = "   JavaScript é incrível!   ";<br>
>// Usando method chaining:<br>
>let resultado = texto.trim().toUpperCase().replace("INCRÍVEL", "PODEROSO");<br>
>console.log(resultado); // "JAVASCRIPT É PODEROSO!"

Aqui está o que acontece em cada passo:

trim(): Remove os espaços em branco no início e no final da string.

toUpperCase(): Converte a string para letras maiúsculas.

replace("INCRÍVEL", "PODEROSO"): Substitui a palavra "INCRÍVEL" por "PODEROSO".

Todos esses métodos retornam uma string, permitindo que o próximo método seja chamado imediatamente na string retornada. Essa técnica melhora a legibilidade e a concisão do código.

### Condicional If

A condicional if em JavaScript é usada para executar um bloco de código apenas se uma condição específica for verdadeira. É uma das estruturas de controle mais fundamentais em programação, permitindo que seu código tome decisões com base em diferentes condições.

**Sintaxe:**

>if (condição) {<br>
>  // bloco de código a ser executado se a condição for verdadeira<br>
>}<br>

Condição: Este é um valor ou uma expressão que será avaliada como true ou false. Se a condição for avaliada como true, o bloco de código dentro do if será executado. Se for avaliada como false, o bloco de código será ignorado.

**If-Else**:

Você também pode adicionar uma cláusula else para executar um bloco de código alternativo se a condição for false:


>let idade = 16;<br>
>if (idade >= 18) {<br>
>  console.log("Você é maior de idade.");<br>
>} else {<br>
>  console.log("Você é menor de idade.");<br>
>}

Aqui, como a condição idade >= 18 é false, o código dentro do bloco else será executado, exibindo "Você é menor de idade."

**If-Else If-Else**:

Para verificar múltiplas condições, você pode usar else if:

>let hora = 10;<br>
>if (hora < 12) {<br>
>  console.log("Bom dia!");<br>
>} else if (hora < 18) {<br>
>  console.log("Boa tarde!");<br>
>} else {<br>
>  console.log("Boa noite!");<br>
>}

**Importante:**

Condições podem ser expressões complexas que envolvem operadores lógicos (&&, ||, etc.).
O JavaScript trata alguns valores como "falsy" (como 0, "", null, undefined, e false), e eles serão avaliados como false dentro de uma condicional if.

### Propriedade Checked

A propriedade checked é usada para verificar ou definir o estado de uma caixa de seleção (< input type="checkbox">) ou de um botão de opção (< input type="radio">). Se a propriedade checked é true, o elemento está selecionado; se for false, não está. Você pode acessar ou modificar essa propriedade em JavaScript para manipular a seleção desses elementos em um formulário.

Esse trecho vai ficar sem um código demonstrativo.

### Switch Case

O switch é uma estrutura de controle de fluxo em JavaScript que permite executar diferentes blocos de código com base no valor de uma expressão. É uma alternativa ao uso de múltiplos if...else quando se quer comparar a mesma expressão com diferentes valores.

<code>
switch (expressão) {<br>
  case valor1:<br>
    // Código a ser executado se a expressão for igual a valor1<br>
    break;<br>
  case valor2:<br>
    // Código a ser executado se a expressão for igual a valor2<br>
    break;<br>
  // Mais casos podem ser adicionados
  default:<br>
    // Código a ser executado se a expressão não corresponder a nenhum caso<br>
}
</code>

Como funciona: 

1. - Expressão: A expressão dentro do parênteses após a palavra-chave switch é avaliada.

2. - Casos: O valor da expressão é comparado com cada valor após a palavra-chave case. Se houver uma correspondência, o código associado a esse case é executado.

3. - break: A palavra-chave break é usada para sair do switch após a execução de um caso correspondente. Sem o break, o JavaScript continuará executando os casos subsequentes, mesmo se eles não corresponderem à expressão (comportamento conhecido como "fall-through").

4. - default: A cláusula default é opcional e é executada se nenhum dos casos corresponder ao valor da expressão. Funciona como um else em uma estrutura if...else.

Exemplo: 

<code>
let dia = 3;<br>
let diaDaSemana;<br>

switch (dia) {<br>
  case 1:<br>
    diaDaSemana = 'Domingo';<br>
    break;<br>
  case 2:<br>
    diaDaSemana = 'Segunda-feira';<br>
    break;<br>
  case 3:<br>
    diaDaSemana = 'Terça-feira';<br>
    break;<br>
  case 4:<br>
    diaDaSemana = 'Quarta-feira';<br>
    break;<br>
  case 5:<br>
    diaDaSemana = 'Quinta-feira';<br>
    break;<br>
  case 6:<br>
    diaDaSemana = 'Sexta-feira';<br>
    break;<br>
  case 7:<br>
    diaDaSemana = 'Sábado';<br>
    break;<br>
  default:<br>
    diaDaSemana = 'Valor inválido';<br>
}

console.log(diaDaSemana); // Saída: "Terça-feira"
</code>

Neste exemplo, a variável dia é comparada com os valores definidos em cada case. Como dia é igual a 3, o código associado ao case 3 é executado, e a variável diaDaSemana recebe o valor "Terça-feira". A cláusula break impede que os outros casos sejam executados após a correspondência ser encontrada.

Se a variável dia tivesse um valor que não correspondesse a nenhum dos casos, o código dentro da cláusula default seria executado.

### Operadores lógicos (AND, NOT e OR)

**Operador Lógico And (&&):** Retorna true se as duas expressões forem verdadeiras.

Descrição: Retorna true se ambas as expressões forem verdadeiras; caso contrário, retorna false.

<code>

let a = true<br>
let b = false<br>

console.log(a && b) // false<br>
console.log(a && true) // true

</code>


**Operador Lógico Or (||):** Retorna true se pelo menos uma das expressões for verdadeira; retorna false apenas se ambas as expressões forem falsas.

<code>

let a = true;<br>
let b = false;<br>

console.log(a || b); // true<br>
console.log(b || false); // false

</code>



**Operador Lógico Not (!):** Inverte o valor lógico de uma expressão. Se a expressão for true, retorna false, e vice-versa.

<code>

let a = true;<br>

console.log(!a); // false<br>
console.log(!false); // true

</code>

### Loops (While, Do-While, For)

Em JavaScript, loops são estruturas de controle que permitem repetir um bloco de código várias vezes.

#### While 

O loop while executa um bloco de código enquanto uma condição for verdadeira. A condição é avaliada antes de cada iteração. Se a condição for falsa logo na primeira verificação, o bloco não é executado.

**Sintaxe:**

<code>
while (condição) { <br>
  // Código a ser executado enquanto a condição for verdadeira <br>
}
</code>

**Exemplo:**

<code>
let contador = 0;<br>
while (contador < 5) <br>
{<br>
  console.log(contador);<br>
  contador++;<br>
}
</code>

Neste exemplo, o valor de contador será exibido de 0 a 4. Quando contador atingir 5, a condição contador < 5 será falsa, e o loop terminará.

#### Do-While

O loop do-while é semelhante ao while, mas a diferença principal é que o bloco de código sempre será executado pelo menos uma vez, pois a condição é verificada depois da execução.

**Sintaxe:**

<code>
do {<br>
  // Código a ser executado<br>
} while (condição);

</code>

**Exemplo:**

<code>
let contador = 0;<br>
do {<br>
  console.log(contador);<br>
  contador++;<br>
} while (contador < 5);

</code>

Aqui, o loop também irá imprimir os números de 0 a 4, mas o código dentro do do será executado ao menos uma vez, independentemente da condição.


#### For

O loop for é mais compacto e usado principalmente quando você sabe quantas vezes quer que o código seja executado. Ele inclui três partes principais: a inicialização, a condição e o incremento, tudo na mesma linha.

**Sintaxe:**

<code>
for (inicialização; condição; incremento) { <br>
  // Código a ser executado <br>
}
</code>

**Exemplo:**

<code>
for (let i = 0; i < 5; i++) { <br>
  console.log(i); <br>
}
</code>

Neste exemplo, o valor de i será impresso de 0 a 4. A inicialização (let i = 0) ocorre uma vez no início, a condição (i < 5) é verificada antes de cada iteração, e o incremento (i++) é executado no final de cada ciclo.


### Break e Continue

Em JavaScript, as declarações break e continue são usadas para controlar o fluxo de loops, como for, while e do...while.

**Break**

A instrução break é usada para sair completamente do loop quando uma determinada condição é atendida. Isso interrompe a execução do loop e passa para a próxima linha de código após o loop.

Exemplo com break:

<code>
for (let i = 0; i < 10; i++) { <br>
  if (i === 5) { <br>
    break; // Sai do loop quando i for 5 <br>
  } <br>
  console.log(i); // Vai imprimir de 0 até 4 <br>
}
</code>

Neste exemplo, o loop for vai de 0 até 9, mas quando o valor de i é igual a 5, a declaração break faz o loop terminar, então só são impressos os números de 0 a 4.

**Continue**

A instrução continue é usada para pular a iteração atual do loop e passar para a próxima, sem interromper o loop inteiro. Ou seja, ele ignora o restante do código naquela iteração e volta para o topo do loop.

Exemplo com continue:

<code>
for (let i = 0; i < 10; i++) { <br>
  if (i === 5) { <br>
    continue; // Pula a iteração quando i for 5 <br>
  } <br>
  console.log(i); // Vai imprimir todos os números de 0 a 9, exceto o 5 <br>
}
</code>

Aqui, o loop continua normalmente, mas quando i é 5, o continue faz com que o loop pule essa iteração, então o número 5 não é impresso.

Resumo:
- break: Sai do loop completamente.
- continue: Pula a iteração atual e continua o loop.

### Loops Aninhados

Loops aninhados em JavaScript são estruturas onde um loop é inserido dentro de outro loop. Eles são utilizados quando precisamos realizar operações repetitivas que envolvem múltiplas camadas de iteração, como ao trabalhar com matrizes bidimensionais (arrays de arrays) ou ao processar estruturas complexas.

Aqui está um exemplo básico de loops aninhados:

<code>
for (let i = 0; i < 3; i++) {   // Loop externo <br>
  console.log(`Loop externo: ${i}`); <br>
   <br>
  for (let j = 0; j < 2; j++) { // Loop interno <br>
    console.log(`  Loop interno: ${j}`); <br>
  } <br>
}
</code>

Neste exemplo:

O loop externo (variável i) itera 3 vezes.
Dentro de cada iteração do loop externo, o loop interno (variável j) itera 2 vezes.

### Funções

Funções em JavaScript são blocos de código que realizam tarefas específicas ou calculam valores. Elas são fundamentais na linguagem, permitindo modularizar e reutilizar código de maneira eficiente.

**Definindo funções**

Existem diferentes formas de definir uma função em JavaScript:

Declaração de Função (Function Declaration):

<code>
function saudacao(nome) { <br>
  return `Olá, ${nome}!`; <br>
}
</code>

Expressão de Função (Function Expression):

<code>
const saudacao = function(nome) { <br>
  return `Olá, ${nome}!`; <br>
};
</code>

Arrow Functions (Funções de Seta): Introduzidas no ES6, são mais concisas e geralmente usadas em funções curtas.

<code>
const saudacao = (nome) => `Olá, ${nome}!`;
</code>

 ---
#### Parâmetros e Argumentos

Parâmetros são variáveis usadas na definição de uma função, enquanto argumentos são os valores passados para esses parâmetros ao chamar a função. No exemplo saudacao(nome), nome é o parâmetro e "Matheus" seria o argumento ao chamá-la como saudacao("Matheus").

#### Return

O return em JavaScript é uma instrução usada dentro de funções para devolver um valor e encerrar a execução da função. Ao ser chamada, a função irá parar de rodar no ponto onde o return está, e o valor especificado após o return será "retornado" para onde a função foi chamada.

Um exemplo básico:

<code>
function soma(a, b) { <br>
    return a + b; <br>
} <br>
let resultado = soma(5, 3); // resultado vai ser 8 <br>
console.log(resultado); // Saída: 8
</code>

<br>
Neste exemplo, return a + b; encerra a função soma e devolve o resultado da soma de a e b.

Alguns pontos importantes sobre return:

Interrompe a execução da função: Qualquer código após return dentro de uma função não será executado.

<code>
function teste() { <br>
    return "Olá!"; <br>
    console.log("Isso nunca será executado."); <br>
}
</code>

<br>

Pode retornar qualquer tipo de valor: return pode devolver números, strings, arrays, objetos ou mesmo outras funções.

Pode não retornar nada (undefined): Se return for usado sem valor, ou se não for usado, a função retornará undefined por padrão.

### Operador Ternário

