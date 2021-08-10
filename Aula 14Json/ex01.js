// Json
// criação e consumo utilizando API`s
// persistência de dados em navegadores e servidores
// formato de dados - padrão da web atualmente
// json - não suporta comentários

let dadosJson = '{"nome":"Paulo Henrique", "sobrenome":"Camelo", "idade":24}';
// console.log(dadosJson);
// JSON é um objeto nativo
// desserialização = parsing

let dadosConvertidosJS = JSON.parse(dadosJson); //objeto literal
// console.log(dadosConvertidosJS);
console.log(dadosConvertidosJS.sobrenome);
console.log(dadosConvertidosJS.sobrenome.toUpperCase());

//serialização cria um objeto JSON
let objetoConvertidoJson = JSON.stringify(dadosConvertidosJS);
console.log(objetoConvertidoJson);