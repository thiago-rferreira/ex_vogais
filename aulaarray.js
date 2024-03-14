let cestaDeFrutas = ['banana', 'maçã', 'manga', 'uva'];

let listaDeCor = ['azul', 'vermelho', 'amarelo', 'preto'];

//Exibe a lista completa de arrays, por nome deles né
//console.log(cestaDeFrutas);
//console.log(listaDeCor);

//Exibir por posicao ou manipular por posicao.

//console.log(cestaDeFrutas[2]); //saida: manga

//manipular um textinho falando que minha fruta
//favorita é: tal fruta.

let mensagem = 'Minha fruta favorita é: ' + cestaDeFrutas[2];
let mensagemPlural = 'Minhas frutas favoritas são: ' + cestaDeFrutas;
//console.log(cestaDeFrutas[3]);
//console.log(mensagem);
//console.log(mensagemPlural);

//manipulando arrays, inserir e remover.

let listaAnimais = ['gato', 'capivara'];
console.log("----------Lista Inicial---------");
console.log(listaAnimais);
console.log(listaAnimais.length);

//adicionar itens no array. 
//metodo =  push.
listaAnimais.push('cachorro');
//quando o push é dado, o item entra na ultima posicao do array
listaAnimais.push('sapo');
listaAnimais.push('coelho');
listaAnimais.push('joaninha');
listaAnimais.push('rato');
listaAnimais.push('jabuti');



//Exibir lista atualizada com todos os itens novos
console.log('----------Lista atualizada---------');
console.log(listaAnimais);

//Exibir o tamanho/comprimento
//metodo chamado length
let tamanhoDaListaDeAnimais = listaAnimais.length;
console.log(tamanhoDaListaDeAnimais);


//Como remover um item do array.
listaAnimais.pop(); //remove o ultimo elemento do array.

console.log(listaAnimais);




