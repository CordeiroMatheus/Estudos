let idade = window.prompt("Qual é a sua idade:")

console.log(typeof idade)
idade = Number(idade)
console.log(typeof idade)
idade += 1

console.log('Feliz Aniversário, você está fazendo ', idade, 'anos de idade')

let x = '3.14' // string que vai virar número
let y = 3.14 // número que vai virar string
let z = "Batata" // string que vai virar boolean

x = Number(x) 
console.log(x, typeof x) // tipo = number

y = String(y)
console.log(y, typeof y) // tipo = string

z = Boolean(z)
console.log(z, typeof z) // tipo = boolean