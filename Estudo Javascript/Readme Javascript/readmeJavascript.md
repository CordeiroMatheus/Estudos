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

