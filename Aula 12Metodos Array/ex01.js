/*ex01 - Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array
com apenas números ímpares */

let pares = [2,4,6,8,10];

let impares = pares.map(function(numPar) { //fazendo com Function
    return numPar-=1;
});
console.log(impares);

let impares1 = pares.map(numPar => numPar-=1); //fazendo com Arrow Function
console.log(impares1);



/*ex02 - Crie um array de nomes, que possua dois índices com o nome Maria.
Utilize o .filter() para obter apenas esses dois índices com o nome Maria. */

let nomes = ["Maria","Paulo","Maria","Julio","Jurubeba",];

let filtrarMaria1 = nomes.filter( nome1 => nome1 == "Maria"); //fazendo com Arrow Function

let filtrarMaria = nomes.filter(function(nomes){ //fazendo com Function
    return nomes == "Maria"
});

console.log(filtrarMaria1);// alterar variável com ou sem 1

/*ex03 - Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7” */

let numero = [1,5,9,3,7];

let string = numero.reduce(function(acc,elem,idx){
    return idx == 0 ? elem : acc + '-' + elem;
});

console.log(string);

/*ex04 - Crie um array de animais, após isso passe por cada índice utilizando o .forEach()
e imprima a frase “O animal é NOME_DO_ANIMAL”. */

let animais = [`leão`, `leoa`, `ganço`, `urubu`];

animais.forEach(function(animal){
    console.log(`O animal é ${animal}`);
});