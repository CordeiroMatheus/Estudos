let primeiroNome = 'Matheus'
let idade = 17
let estudante = true
console.log("Olá", primeiroNome) // string
console.log("Você tem", idade, "anos de idade") // number
console.log("Estudante:", estudante) // boolean

document.getElementById('p1').innerHTML = "Olá " + primeiroNome
document.getElementsByTagName('p')[0].style.color = 'dodgerblue'

document.getElementById('p2').innerHTML = "Sua idade é: " + idade
document.getElementsByTagName('p')[1].style.color = 'red'

document.getElementById('p3').innerHTML = "Status de Estudante: " + estudante
document.getElementsByTagName('p')[2].style.color = 'green'
