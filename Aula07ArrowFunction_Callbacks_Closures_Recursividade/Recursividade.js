/* Recursividade é quando uma função invoca a ela mesma, parecido com um Loop */

function dinheiro(saldo){
    console.log(`Seu salário depois de pagar os impostos ${saldo}`);
    saldo--;
    if(saldo >= 0){
        dinheiro(saldo);
    }
}
dinheiro(2500);