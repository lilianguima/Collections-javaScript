//armazenar, remover, atualizar, apresentar todos os dados
import PromptSync = require ('prompt-sync')
import { inflateSync } from 'zlib';

const prompt = require('prompt-sync')();
const apresentar = require ('./apresentar')
const armazenar = require ('./armazenar')
const atualiza = require ('./atualizar')
const remover = require ('./remove')

const Itens = []
let opcao = 0;

do {
    console.clear();
    apresentar ();
    console.log();
    opcao = Number(prompt('>>'));

    console.clear();

    switch (opcao){
        case 1: armazenar(Itens)
        break;
        case 2 : apresentar(Itens)
        break;
        case 3 : remover (Itens)
        break
        case 4: 
        console.log('Finalizando a aplicação!')
        break;
        default: 
        console.log('Opção inválida')
        break;
}
     prompt('Pressione enter para continuar >>')
}
while (opcao !=4);