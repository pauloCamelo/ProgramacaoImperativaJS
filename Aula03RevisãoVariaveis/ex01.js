/* aula 3 - 01/06/2021
Revisão de variáveis*/
let nome = "Paulo Henrique"; //string (texto)
let sobrenome = "Camelo"
let idade = 28; //número inteiro (int)
let peso = 84.5; //número com ponto flutuante ou casas decimais (float)
let altura = 1.88; //número com ponto flutuante ou casas decimais (float)
let temPlano = true;

let imc = peso / (altura * altura);

console.log((nome + " " + sobrenome + " tem " + idade + " anos e seu índice de massa corporal é de "+ imc));