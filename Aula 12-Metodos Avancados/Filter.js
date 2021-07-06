// .filter() é um metodo que retorna um novo array,
// com os elementos que atendem uma condição

const numeros = [1,2,-3,4,-5,0,7,8,9,19,50,250,];

const numerosMaiores = numeros.filter(elemento=>elemento>=0);

console.log(numerosMaiores);