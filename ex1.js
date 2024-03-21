// Definindo a string de entrada
let texto = "O rato roeu a roupa do rei de Roma.";

// Definindo um array com as vogais
let vogais = ['a', 'e', 'i', 'o', 'u'];

// Criando um array para armazenar as vogais encontradas
let vogaisEncontradas = [];

// Convertendo o texto para minúsculas para garantir
// a contagem correta, independentemente se é maiúscula ou minúscula
let textoMinusculo = texto.toLowerCase().split('');

// Iterando sobre cada caractere do texto
// O texto.length retorna o tamanho do texto, 
// ou seja, a quantidade de caracteres que ele possui.
// O for é usado para iterar sobre cada caractere do texto
// O i é a variável de controle do for, que começa em 0 e vai até o tamanho do texto.
for (let i = 0; i < textoMinusculo.length; i++) {
    // Obtendo o caractere/letra atual
    let letra = textoMinusculo[i];
    // Verificando se o caractere/letra atual é uma vogal
    if (vogais.includes(letra)) {
        // Se for uma vogal, adiciona ela ao array de vogais encontradas
        vogaisEncontradas.push(letra);
    }
}

// Exibindo o texto original
console.log("Texto original:", texto);

// Exibindo as vogais encontradas e usando o método 
// toString para exibir o array como uma string.
console.log("Vogais encontradas:", vogaisEncontradas.toString());

// Exibindo o total de vogais encontradas usando a propriedade length do array
console.log(`Total de vogais: ` + vogaisEncontradas.length);
