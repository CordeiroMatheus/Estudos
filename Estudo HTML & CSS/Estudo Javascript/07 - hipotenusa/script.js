let primeirocateto;
let segundocateto;
let hipotenusa;
const resposta = document.getElementsByTagName('p')[3];
resposta.innerHTML = ``;

document.getElementById('reset').onclick = function(){
    document.location.reload();
}

document.getElementById('calcular').onclick = function() {
    primeirocateto = Number(document.getElementById('cateto1').value);
    segundocateto = Number(document.getElementById('cateto2').value);
    primeirocateto = Math.pow(primeirocateto, 2);
    segundocateto = Math.pow(segundocateto, 2);
    
    hipotenusa = Math.sqrt(primeirocateto + segundocateto);
    
    resposta.innerHTML = `A hipotenusa dos números digitados é ${hipotenusa.toFixed(3)}`;
}
