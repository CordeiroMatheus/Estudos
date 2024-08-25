let contador = 0
let txtcontador = document.getElementById('contador')
document.getElementById('btnaumentar').onclick = function(){
    contador++
    txtcontador.innerHTML = contador
    atualizarCor()
}
document.getElementById('btnreset').onclick = function(){
    contador = 0
    txtcontador.innerHTML = contador
    atualizarCor()
}
document.getElementById('btndiminuir').onclick = function(){
    contador--
    txtcontador.innerHTML = contador
    atualizarCor()
}

function atualizarCor(){
if(contador > 0){
    txtcontador.style.color = 'green'
}
else if(contador < 0){
    txtcontador.style.color = 'red'
}
else{
    txtcontador.style.color = 'gray'
}
}