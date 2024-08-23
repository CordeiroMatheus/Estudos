let nomeUsuario = "AronnaxZ"
let nomeReal = "    Matheus Cordeiro    "
let mensagem = "Olá, mundo"
let telefone = "123-456-789-00"
console.log(`Número de caracteres do usuário ${nomeUsuario} é ${nomeUsuario.length}`)
console.log(`A primeira letra do nome do usuário ${nomeUsuario} é ${nomeUsuario.charAt(0)}`)
console.log(`A primeira aparição da letra N no nome de usuário ${nomeUsuario} é ${nomeUsuario.indexOf("n")}`)
console.log(nomeReal)
console.log(nomeReal.trim())
console.log(`O nome de usuário ${nomeUsuario} todo em maiúscula: ${nomeUsuario.toUpperCase()}`)
console.log(`O nome de usuário ${nomeUsuario} todo em minúscula: ${nomeUsuario.toLowerCase()}`)
console.log(mensagem.replace("mundo", "Javascript")) // troca a palavra mundo da string por Javascript
console.log(telefone.replaceAll("-", ".")) // troca todos os traços("-") do número por pontos(".")


