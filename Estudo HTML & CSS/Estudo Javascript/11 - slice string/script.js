let nomeCompleto = "Matheus Cordeiro"
let primeiroNome 
let sobrenome

primeiroNome = nomeCompleto.slice(0, 7)
console.log(primeiroNome)

sobrenome = nomeCompleto.slice(8, 16) // aqui poderia ser só 8, porque ele pegaria do 8 até o fim da string
console.log(sobrenome)

/*

Podemos fazer de um outro jeito utilizando o indexOf dentro da função slice, é uma maneira melhor 
de separar um nome completo

primeiroNome = nomeCompleto.slice(0, nomeCompleto.indexOf(" ")) // pega o primeiro nome começando pelo índice
zero e para quando tiver um espaço 


sobrenome = nomeCompleto.slice(nomeCompleto.indexOf(" ") + 1) // pega o sobrenome começando pela primeira 
letra depois do espaço, isso só acontece por causa do + 1, senão ele pegaria o espaço vazio e colocaria
na string também

*/