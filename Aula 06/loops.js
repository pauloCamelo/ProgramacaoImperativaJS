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

for (let a=0; a<=10; a++) {
    for (let b=0; b<=10; b++) {
    console.log(`${a}  + ${b} = ${soma(a,b)}`);
    }
}

//tabuada de 5, se precisar fazer com outros, temos que mudar o sinal na linha 23 segunda $//
// let a=5
//     for (let b=0; b<=10; b++) {
//     console.log(`${a} + ${b} = ${a + b}`);
//     }