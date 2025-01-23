let listaDeNumeroSorteados = [];
mudancaDeTitulo("h1", 'Jogo do numero Secretos');
let numeroAleatorio ;
RetornarChute();
console.log(numeroAleatorio);
mudancaDeTitulo("p", "escolha o seu palpite");
let tentativas = 1

function mudancaDeTitulo(campo, texto) {
    let texts = document.querySelector(campo);
    texts.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}


function VerificarChute() {
    let palavra = tentativas > 1 ? "tentativas": "tentativa";
    let chute = document.querySelector("input").value;
    let mensagemTentativa = `você acertou o chute com ${tentativas} ${palavra}`;
    if (numeroAleatorio == chute) {
        mudancaDeTitulo("p", mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroAleatorio){ mudancaDeTitulo("p", "Você Errou o chute, o numero secreto é menor do que o chutado "); 

    }else if (chute < numeroAleatorio){mudancaDeTitulo("p", "Você Errou o chute, o numero secreto é maior do que o chutado "); }
tentativas++;
limparCampo(); 

}



function RetornarChute() {    
   let numeroSorteado =  Math.round(Math.random() * 10);

   if(listaDeNumeroSorteados == 10 ){
        listaDeNumeroSorteados = [];
   }
    if(listaDeNumeroSorteados.includes(numeroSorteado)){
        return RetornarChute(); 
    }else{
        listaDeNumeroSorteados.push(numeroSorteado);
        console.log(listaDeNumeroSorteados)
        numeroAleatorio = numeroSorteado; 
    }


}
function limparCampo(){
    let chute = document.querySelector('input'); 
    chute.value = ''; 


}

function reniciarjogo(){

    let numeroAleatorio = RetornarChute();

    mudancaDeTitulo("h1", 'Jogo do numero Secreto');

    mudancaDeTitulo("p", "escolha o seu palpite");

    limparCampo(); 

    document.getElementById('reiniciar').setAttribute('disabled',true);





}