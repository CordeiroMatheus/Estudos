let usuario;

do{
    usuario = window.prompt("Digite seu Nome")
}
while(usuario == "" || usuario == null)

console.log(`Olá ${usuario}`)