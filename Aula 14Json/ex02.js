let frutas = '{"Fruta":"laranja","Preço":8.5,"Tipo":["Mexerica","Bergamota","Tangerina"], "Origem":"Brasil"}';

console.log(frutas);
// console.log(frutas.fruta.preço.tipo.origem); //não conseguimos imprimir antes de converter para JS

let frutasJS = JSON.parse(frutas);
console.log(frutasJS.Fruta);

let frutasJson = JSON.stringify(frutasJS);
console.log(frutasJson);