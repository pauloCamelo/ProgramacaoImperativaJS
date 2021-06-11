var nomeJogador = `Robertinho`;
var golsJogador = 5;
var precoEmDolares = 10;
var valorização = 10000

   let fazerGol = function() {
        golsJogador ++;
        precoEmDolares = precoEmDolares + valorização;
        console.log(`GOL!!!!!, Total de ${golsJogador} Gols e agora o jogar está valendo ${precoEmDolares} doláres`);
    }
    fazerGol();

    function hatTrick(){
        fazerGol();
        fazerGol();
        fazerGol();
        precoEmDolares = (precoEmDolares * (0.1)) + precoEmDolares
        console.log(precoEmDolares);
    }
    hatTrick();