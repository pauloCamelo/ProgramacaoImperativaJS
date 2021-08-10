// .map() é um metodo que cria uma nova matriz com os resultados
//da chamada de uma função para cada elemento da matriz
// .map faz um loop no array e retorna um array modificado

let numero = [2,4,6];

let dobro = numero.map(function(num){
    return num * 2
});
console.log(dobro);




const letrasMinusculas = ['a','b','c','d'];

// const letrasMaiusculas = letrasMinusculas.map(
//     function maiuscula(elemento){
//         return elemento.toUpperCase();
//     }
// );

// console.log(letrasMinusculas);
// console.log(letrasMaiusculas);

let letrasMaiusculas = letrasMinusculas.map(maiuscula=elemento=>elemento.toUpperCase());

console.log(letrasMinusculas);
console.log(letrasMaiusculas);