// Spread serve para unificar Arrays
// Também serve para duplicar propriedade de um objeto em outra função
// dentro de uma função com vários parametros

let frutas = ["maça","uva","abacate","abóbora","jabuticaba"];

let frutasDois = ["laranja","jilo","tomate","melancia","melão"];

let todasFrutas = [...frutas, ...frutasDois];

console.log(todasFrutas);


let pessoa = {
    nome:'Paulu',
    idade: 28
}

let infoPessoal = {
    tel: 123456789,
    rg: 6561513165,
    ...pessoa //puxamos todos os dados da variável pessoa
}

console.log(infoPessoal);

let infoPessoal2 = {
    ...infoPessoal, //se puxarmos infoPessoal, ele também puxar o pessoa que o infoPessoal tinha puxado, acumulando dados
    endereco: "Rua dos Vigários",
};
console.log(infoPessoal2);


function letras(...parametro){
    console.log(parametro);
};

letras("A", "B"); //escolhemos quais parametros vamos adicionar a variável parametro dentro da função letras

//Parametro Rest é parecido com spread, a diferença é que ele é utilizado durante a definição da função, e não durante sua execução.ex01:

function somar (...numeros) {
    return numeros.reduce((acumulador,num)=> acumulador += num);
}

console.log(  somar(10,10,10)   );//retorna o acumulado das somas '30'

//Rest deve sempre ser o último parametro, se não teremos erro de Sintax.


//Micro desafios 01

let numerosPrimos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
let outrosNumeros = [1,...numerosPrimos,4,6,8,12,15,18,20,25,30,32,38,42,44];

console.log(outrosNumeros);

let mostrarNumero = [...outrosNumeros];
console.log(Math.min(...mostrarNumero));


//Desafio Conta Bancária

let conta = {
    num: 5418,
    saldo: 100.00,
    nomeb: "Paulo Ricão"
};

let deposito = {
    mensagemDeposito: function(valorDeposito){
        return `Foi realizado um deposito no valor de ${valorDeposito}, agora seu saldo é ${conta.saldo+valorDeposito}`
    }
};

console.log(deposito.mensagemDeposito(50));