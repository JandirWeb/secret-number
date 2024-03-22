function valueIsValid(chute){
    const numero = +chute;

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div class="invalido">Valor inválido!</div>';
    }

    if(numeroInvalido(numero)){
        elementoChute.innerHTML += `<div class="invalido">Número Inválido: fale um numero entre ${menorValor} e ${maiorValor} !</div>`;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `;
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroInvalido(numero) {
    return numero > maiorValor || numero < menorValor
}
