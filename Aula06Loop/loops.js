/*Repetir 5x Olá Mundo! */
for (let i=1; i <=5; i++ ){
    console.log(`Olá Mundo!`);
}

/*Contando números ímpares */

for (let impar=1; impar<=10; impar=impar+2){
    console.log(impar)
}

/*Criando a tabuada */

//tabuada de 0 a 10//
let soma = (a,b) => a+b;
let subtrair = (a,b) => a-b;
let multiplicar = (a,b) => a*b; 
let dividir = (a,b) => a/b;
const tabuada = (a,b,operacao) => operacao(a,b);

    for (let a=0; a<=10; a++) {
    for (let b=0; b<=10; b++) {
        if(b==0){
            console.log('Impossível dividir por zero(0)');
        }
        else {
            console.log(tabuada(a,b,soma));
        }
    }
}

//tabuada de 5, se precisar fazer com outros, temos que mudar o sinal na linha 23 segunda $//
// let a=5
//     for (let b=0; b<=10; b++) {
//     console.log(`${a} + ${b} = ${a + b}`);
//     }