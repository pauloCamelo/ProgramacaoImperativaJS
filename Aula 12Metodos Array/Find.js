// retorna o primeiro valor que cumprir a condição especificada na callback
// A callback irá retornar true ou false, e receberá 3 parâmetros.
/*
Elemento: elemento atual do array
Índice: Opcional - posição atual do elemento
Array: array que está sendo percorrido
*/

let idade = [
    {idades: '15'},
    {idades: '96'},
    {idades: '58'},
];

idade.find(
    function(idadeQueEuEscolher) {
        console.log(idadeQueEuEscolher.idades === '15');   
    }
);

