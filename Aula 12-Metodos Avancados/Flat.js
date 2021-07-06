// flat = plano
// este método é feito para "desembrulhar" sub-arrays dentro de array,
// ou seja, ele não modifica o array original

let numeros = [1,2,3,4,5,6,7,-5,[-8,[80,250],-150]]
console.log(numeros);
novoArray = numeros.flat(5);
console.log(novoArray);