// .filter() é um metodo que retorna um novo array,
// com os elementos que atendem uma condição

const numeros = [1,2,-3,4,-5,0,7,8,9,19,50,250,];

const numerosMaiores = numeros.filter(elemento=>elemento>=0);

console.log(numerosMaiores);


//ex02

let idade = [-100, -50, 50, 17, 358, 25, -15];

let maior18 = idade.filter(function(idade){
    return idade >= 18;
});
console.log(maior18);