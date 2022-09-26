import PromptSync = require ('prompt-sync')
const prompt = require ('prompt-sync') ()
const apresentar = require ('./apresentar')

function removeLista (Itens){
    apresentar(Itens);
    const posicaoText = prompt('Qual elemento você deseja remover? ');
    const posicao = Number (posicaoText) -1;
    Itens.splice( posicao, 1);
}

    module.exports = removeLista
