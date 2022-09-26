import PromptSync = require('prompt-sync')
const prompt = require ('prompt-sync')();


function Armazenar (Itens) {
    const posicao = Itens.length;
    const item = prompt('Digite o  novo item da lista: ');
    Itens[posicao] = item ;
    console.log(`\n${item} foi adicionado!`)
}
    module.exports = Armazenar