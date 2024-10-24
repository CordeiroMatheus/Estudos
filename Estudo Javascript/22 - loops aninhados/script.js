/*

Executa o for dentro do for três vezes a saída é

1
2
3
1
2
3
1
2
3

for(let i = 1;i <= 3; i++){
    for (let j = 1; j <= 3; j++) {
        console.log(j)
    }
}
*/

let simbolo = window.prompt("Digite um simbolo")
let linhas = window.prompt("Digite o número de linhas")
let colunas = window.prompt("Digite o número de colunas")

for(let i = 1;i <= linhas; i++){
    for (let j = 1; j <= colunas; j++) {
        document.getElementById("retangulo").innerHTML += simbolo
    }
    document.getElementById("retangulo").innerHTML += "<br>"
}
