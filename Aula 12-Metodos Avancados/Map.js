// .map() é um metodo que cria uma nova matriz com os resultados
//da chamada de uma funcao para cada elemento da matriz

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