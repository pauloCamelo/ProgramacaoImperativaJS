// Array

let pessoa = ["Camelão", 18, 1,89, true];
console.log(pessoa);
console.log(pessoa[0]);
console.log(pessoa.length);

/**************************************
Comprimento, Push, */
let filmesFavoritos = ['Star Trek', 'De Volta para o Futuro', 'The Passenger'];
console.log(filmesFavoritos.length);
//comprimento
filmesFavoritos.push('Lord Of The Rings');
console.log(filmesFavoritos);
console.log(filmesFavoritos.length);

let ultimaPalavra = filmesFavoritos.pop()

console.log(filmesFavoritos);
console.log(ultimaPalavra);

/**************************************
Shift(tira o primeiro elemento da Array)
unshift () */
filmesFavoritos.shift();
console.log(filmesFavoritos);
console.log(filmesFavoritos.length);

filmesFavoritos.unshift(ultimaPalavra,'Star Trek');
console.log(filmesFavoritos);
console.log(filmesFavoritos.length);

/*localizar um elemento dentro do array*/

let cores = ["roxo", "branco", "preto", "cinza"];
console.log(cores.indexOf('cinza','preto'));