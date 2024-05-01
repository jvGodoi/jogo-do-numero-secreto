let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Função para exibir os dados na tela
function exibirDadosNaTela(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirDadosNaTela('h1', 'Jogo do Número Secreto');
    exibirDadosNaTela('p', 'Insira um número entre 1 e 10');
}


// Função para verificar o chute
function verificarChute() {
    let chute = document.querySelector('input').value // Pegando o valor que foi colocando dentro do input, e armazenando na variavel chute
    if (document.querySelector('input').value.length == 0) {
        exibirDadosNaTela('p', 'Por favor, Insira algum número!');
    }
    else {
        if (chute == numeroSecreto) {
            exibirDadosNaTela('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
            exibirDadosNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto) {
                exibirDadosNaTela('p', 'O número secreto é menor')
            }
            else {
                exibirDadosNaTela('p', 'O número secreto é maior')
            }
            /* tentativas = tentativas + 1; */
            tentativas++;
            limparCampo();
        }
    }
}
// Função para gerar o número aleatório
// Criando uma lista para armazenar os números secretos que já foram sorteados
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1); // Função para gerar um número inteiro entre 1 e 10
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;


    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();   
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

exibirDadosNaTela('h1', 'Jogo do Número Secreto');
exibirDadosNaTela('p', 'Insira um número entre 1 e 10');

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}


