let cores = [];

let animais = [];

let texto = '';
let numero = 0;

//console.log(cores);
//console.log(animais);

// Acessando os dados do array
let mensagem = 'A minha cor favorita é: ' + cores[3];

//console.log(mensagem);

//direto no console para testar;
//console.log("Meu animal odiado é: " + animais[0]);

let mensagemComposta = 'A cor favorita do ' 
+ animais[2] + ' é ' + cores [1];

//console.log(mensagemComposta);

//Modificar arrays

//Adicionar itens no array de cores
console.log('-------Lista Inicial de cores--------');
console.log(cores);

//metodo que adiciona itens no array, chamado push
cores.push('preto');
cores.push('gelo');
// metodo push ele adiciona os itens na ultima posicao do vetor/array
cores.push('verde');
cores.push('rosa');
cores.push('azul');


// remove um item do meu array, sendo ele o ultimo elemento do array.
cores.pop();
cores.pop();

console.log('-------Lista Final de cores--------');
console.log("A minha lista de cores é: " + cores);

//metodo que mede esse array.
let tamanho = cores.length;
console.log(tamanho);

//Como ver o tipo da variavel
console.log(typeof(cores)); //ps: js chama array de objeto.
console.log(typeof(texto)); // saida: string
console.log(typeof(numero)); // saida: number

//