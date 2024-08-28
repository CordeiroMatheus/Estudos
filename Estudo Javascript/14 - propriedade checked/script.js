document.getElementById('botao').onclick = function(){
    
    const Checkbox = document.getElementById('checkbox')
    const Visa = document.getElementById('visa')
    const Mastercard = document.getElementById('mastercard')
    const Pix = document.getElementById('pix')
    const p1 = document.getElementsByTagName('p')[0]
    const p2 = document.getElementsByTagName('p')[1]

    if(Checkbox.checked){ // o == true aqui é opcional
        p1.innerHTML = 'Legal que você se inscreveu :)'
    }

    else{
        let desculpas = window.prompt('Porque você não se inscreveu? :( ')
        if(desculpas == ""){
            p1.innerHTML = `DA PRÓXIMA VEZ DÊ EXPLICAÇÕES`
        }
        else{
        p1.innerHTML = `Essa é sua desculpa?: "${desculpas}"`
        }
    }


    
    if(Visa.checked){
        p2.innerHTML = `Método de pagamento escolhido: Visa`
    }
    else if(Mastercard.checked){
        p2.innerHTML = `Método de pagamento escolhido: Mastercard`
    }
    else if(Pix.checked){
        p2.innerHTML = `Método de pagamento escolhido: Pix`
    }
    else{
        p2.innerHTML = `Ué você vai pagar como?`
    }
}