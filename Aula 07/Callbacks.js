/*callbacks, cria uma posso usar uma função pai dentro de outra função quando necessário.*/
// function funcaopai (funcion(){
// });

/*exemplo01*/

const somar = (numA, numB) => numA + numB;

const calculadora = (numA, numB, operacao) => operacao (numA, numB);

console.log(calculadora(10,20, (numA, numB)=>numA-numB));

/*exercicio01*/

function acaoCarro(callbacks){
    return callbacks;
};
function andar(){
    return `o carro está andando`;
};
function parar(){
    return `o carro parou`;
};

console.log(acaoCarro(parar()));

