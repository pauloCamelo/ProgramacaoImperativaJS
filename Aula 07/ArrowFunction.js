/*ArrowFunction, sempre são anonima, não possuem nome,
para nomear precisamos atribuir a uma variável com a seta => */

let soma = (a,b) => a+b;
let dobro = a => a * 2; //não precisa de parenteses quando tem apenas 1 parametro//
console.log(dobro(5));


/* exemplos, precisamos de chaves quando temos mais de 1 linha de código em nossa função*/

const somar = (numA,numB) => {
    console.log(`colocando 2 linhas no código + ${numB}`);
    return numA+numB;
}
console.log(somar(5,6));

/*exercicios*/
/*
Micro desafios
1 - Transforme as seguintes funções em arrow functions:
function print(mensagem){
  console.log(mensagem)
}
print("Olá, bom dia")
*/
let print = () => `Olá, bom dia`;
console.log(print());

/*2 - Simplifique usando ArrowFunction
function soma2(n1, n2){
  return n1 + n2
}
console.log(soma2(10, 10))
*/

let ex2 = (n1,n2) => n1 + n2;
    console.log(ex2(10,2869));

let ex4 = ([n4,n5] = [10,50]) => n4 + n5;
    console.log(ex4());