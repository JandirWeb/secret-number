function valueIsValid(chute){
    const numero = +chute;

    if(chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
        return
    }

    if(numeroInvalido(numero)){
        elementoChute.innerHTML += `<div class="invalido">Número Inválido: fale um numero entre ${menorValor} e ${maiorValor} !</div>`;
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente!</button>
        `;
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-chevron-down"></i></div>
        `;
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-chevron-up"></i></div>
        `;
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroInvalido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id = "jogar-novamente"){
        window.location.reload();
    }
})
