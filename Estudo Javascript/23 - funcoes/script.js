/*

Esse é só um teste

let nome = "Matheus"

function saudacao(nome){
    return console.log(`Olá, ${nome}`)
}

saudacao(nome);

*/


iniciarPrograma()

function iniciarPrograma(){
    let nome = "Matheus"
    let idade = 18

    funcaoParabens(nome, idade) // argumentos (Argumentos são os valores reais passados para a função ao chamá-la.)
}

function funcaoParabens(nome, idade){ // parâmetros nome e idade (Parâmetros são "variáveis de entrada" na definição da função.)
    console.log(`Parabéns para você ${nome}`)
    console.log(`Nesta data tão querida você está fazendo ${idade} anos de idade`)
}
