/* Closures são funcoes que residem em outras funcoes para otimizar desempenho, sempre dentro de containers
depois de executada ela deixa de existir, deixando a memoria disponível para outras execuções,
sempre fica dentro de uma função PAI*/

//exemplo01
function saudacao(nome){
    let mensagem = `Olá, seja bem vindo`;

    function juntarNome(){
        return `${mensagem} ${nome}`;
    }

    return juntarNome();
}
console.log(saudacao(`Paulo Henrique`));