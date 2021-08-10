// .sort() nos ajuda a ordenar os elementos de uma array em ordem numérica


const numeros = [3,90,50,55,69,5,1,-4,-8,0];

//crescente
numeros.sort(
    function(a,b) {
        return a-b;
    }
);
console.log(numeros);

//decrescente
numeros.sort(
    function(a,b) {
        return b-a;
    }
);
console.log(numeros)