/*- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

Ex01 - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado
for maior que 2x o necessário, exibir mensagem que a comida queimou.
Ex02 - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
Ex03 - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
Ex04 - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
Ex05 - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/


function microondas(nomePrato, tempoSegundos) {
    switch (nomePrato){
        case "nomePrato":
        case "pipoca":
            if (tempoSegundos == null || tempoSegundos >= 10 && tempoSegundos < 20 ) {
                tempoSegundos = 10;
                return "Prato pronto, bom apetite!!!"
            }
            else if  (tempoSegundos >= 20 && tempoSegundos < 30) {
                return "Sua Comida foi pro brejo"
            } 
            else if (tempoSegundos >= 30) {
                return "F* seu prato"
            } 
            else if (tempoSegundos < 10) {
            return "tempo insuficiente"
            }
            break;

        case "macarrao":
            if (tempoSegundos == null || tempoSegundos >= 8 && tempoSegundos < 16) {
                tempoSegundos = 8;
                return "Prato pronto, bom apetite!!!"
            } 
            else if (tempoSegundos >= 16 && tempoSegundos < 24) {
                return "Sua Comida foi pro brejo"
            } 
            else if (tempoSegundos >= 24) {
                return "F* seu prato"
            } 
            else if (tempoSegundos < 8) {
                return "tempo insuficiente"
            }
            break;

        case "carne":
            if (tempoSegundos == null || tempoSegundos >= 15 && tempoSegundos < 30) {
                tempoSegundos = 15;
                return "Prato pronto, bom apetite!!!"
            } 
            else if (tempoSegundos >= 30 && tempoSegundos < 45) {
                return "Sua Comida foi pro brejo"
            } 
            else if (tempoSegundos >= 45) {
                return "F* seu prato"
            } 
            else if (tempoSegundos < 15) {
                return "tempo insuficiente"
            }
            break;

        case "feijao":
            if (tempoSegundos == null || tempoSegundos >= 12 && tempoSegundos < 24) {
                tempoSegundos = 12;
                return "Prato pronto, bom apetite!!!"
            } 
            else if (tempoSegundos >= 24 && tempoSegundos < 36) {
                return "Sua Comida foi pro brejo"
            } 
            else if (tempoSegundos >= 36) {
                return "F* seu prato, diminua o tempo"
            } 
            else if (tempoSegundos < 12) {
                return "tempo insuficiente"
            }
            break;
    
        case "brigadeiro":
            if (tempoSegundos == null || tempoSegundos >= 8 && tempoSegundos < 16) {
                tempoSegundos = 8;
                return "Prato pronto, bom apetite!!!"
            } 
            else if (tempoSegundos >= 16 && tempoSegundos < 24) {
                return "Sua Comida foi pro brejo"
            } 
            else if (tempoSegundos >= 24) {
                return "F* seu prato"
            } 
            else if (tempoSegundos < 8) {
                return "tempo insuficiente"
            }
            break;

        default:
            return "Pressione o botão de um prato válido"
    }
}

console.log(microondas("pipoca",8)); // Ex02 - menor que o tempo padrão
console.log(microondas("pipoca",15)); // entre o tempo padrão e o tempo máximo, vamos ter um prato pronto tudo OK!
console.log(microondas("pipoca",25)); // Ex01 - quando o tempo é de 2x maior e 3x menor que o tempo padrão, vamos retornar que queimou.
console.log(microondas("pipoca",35)); // Ex04 - quando o tempo é superior a 3x do tempo padrão, vamos mostrar que acabou com o prato
console.log(microondas("pipoca")); // Ex05 - se chegar somente a comida e não chegar o tempo, vamos usar o padrão de tempo do prato.


console.log(microondas("macarrao",4));// Ex02
console.log(microondas("macarrao",11));
console.log(microondas("macarrao",21));// Ex01
console.log(microondas("macarrao",31)); // Ex04
console.log(microondas("macarrao")); // Ex05


console.log(microondas("carne",4));// Ex02
console.log(microondas("carne",16));
console.log(microondas("carne",32));// Ex01
console.log(microondas("carne",46)); // Ex04
console.log(microondas("carne")); // Ex05


console.log(microondas("feijao",4));// Ex02
console.log(microondas("feijao",12));
console.log(microondas("feijao",25));// Ex01
console.log(microondas("feijao",37)); // Ex04
console.log(microondas("feijao")); // Ex05


console.log(microondas("brigadeiro",4));// Ex02
console.log(microondas("brigadeiro",11));
console.log(microondas("brigadeiro",21));// Ex01
console.log(microondas("brigadeiro",31)); // Ex04
console.log(microondas("brigadeiro")); // Ex05

console.log(microondas(15)); //Ex03 declarando somente o tempo
console.log(microondas()); //Ex03 quando não tem nada declarado ele pede para digitar algo válido
console.log(microondas("asdffsda")); //Ex03 nome inválido