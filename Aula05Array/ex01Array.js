// Array

let pessoa = ["Camelão", 18, 1.89, true];
console.log(pessoa);
console.log(pessoa[0]); //imprime o primeiro elemento do Array Camelão
console.log(pessoa.length);

/**************************************
Comprimento, Push, */
let filmesFavoritos = ['Star Trek', 'De Volta para o Futuro', 'The Passenger'];
console.log(filmesFavoritos.length);
//comprimento
filmesFavoritos.push('Lord Of The Rings');
console.log(filmesFavoritos);
console.log(filmesFavoritos.length);

/*.pop*/
let ultimaPalavra = filmesFavoritos.pop()

console.log(filmesFavoritos);
console.log(ultimaPalavra);

/**************************************
Shift(tira o primeiro elemento da Array)
unshift (adicionar um elemento no inicio do array, posição 0) */
filmesFavoritos.shift();
console.log(filmesFavoritos);
console.log(filmesFavoritos.length);

filmesFavoritos.unshift(ultimaPalavra,'Star Trek');
console.log(filmesFavoritos);
console.log(filmesFavoritos.length);

/*localizar um elemento dentro do array*/
/*.indexOf(vai localizar em qual posição está o elemento que procuramos ***ser não encontrar, volta -1**)*/
/*.lastIndexOf retorna em qual posição, porém de trás para frente, ao contrário do .indexOf*/
let cores = ["roxo", "branco", "preto", "cinza"];
console.log(cores.indexOf('cinza'));

for (let loop = 0; loop < cores.length; loop++)
    console.log(`${cores[loop]} ${loop}`);
        console.log(`Essas são as posições das cores usando .length e loop com os dados de um array.`);