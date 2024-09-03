let nota 
nota = "b"
nota = nota.toUpperCase()

switch(nota){
case "MB": 
console.log("Parabéns, nota máxima")
break

case "B":
console.log("Parabéns, boa nota")
break

case "R":
console.log("Desempenho regular, melhore!")
break

case "I":
console.log("Desempenho insatisfatório, melhore!")
break

default:
console.log("Nota inválida, são aceitos apenas os valores: 'MB', 'B', 'R' e 'I'")
}