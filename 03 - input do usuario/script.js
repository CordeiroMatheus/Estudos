/*let nomeUsuario = window.prompt("Digite o nome de usuário")
console.log(`Seu nome de usuário usando window.prompt: ${nomeUsuario}`)
*/

let nomeUsuario
document.getElementById('btnnome').onclick = function(){
    nomeUsuario = document.getElementById('txtnome').value
    console.log(nomeUsuario)
    document.getElementsByTagName('p')[0].innerHTML = `Seu nome é: ${nomeUsuario}`
}