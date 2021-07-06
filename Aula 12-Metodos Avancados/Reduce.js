// .reduce() é um método que percorre o array e
//retorna um único valor. Ele acumula o resultado.

const numeros = [1,2,-3,4,-5,0,7,8,9,19,50,250];

let resultado = numeros.reduce(
    function(acumulador,elemento){
        return acumulador+elemento;
    }
);
console.log(resultado);