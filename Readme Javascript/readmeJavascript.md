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

> Const ChavedeAcesso = 9310@8905 // chave de acesso sempre será esse número

Uma importante diferença em comparação a palavra let e var é que 
