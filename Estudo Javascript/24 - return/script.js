let area
let largura 
let altura

largura = window.prompt("Digite a largura")
altura = window.prompt("Digite a altura")

area = calcArea(largura, altura)

console.log(`A área é ${area}`)

function calcArea(largura, altura){
    return largura * altura   
}