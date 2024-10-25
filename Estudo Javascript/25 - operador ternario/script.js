/*


Usando if else


let adulto = checarIdade(18)
console.log(adulto)

function checarIdade(idade){

    if(idade >= 18){
        return true
    }
    else{
        return false
    }
}
*/


/*
Usando operador ternário
*/

let adulto = checarIdade(18)
console.log(adulto)

function checarIdade(idade){

    return idade >= 18 ?  true : false;

}

checarVencedor(false)

function checarVencedor(win){
    win ? console.log("Você ganhou!") : console.log("Você perdeu!")
}