
const fs = require('fs'); //fs significa file system
let fruta = '{"Fruta":"laranja","Preço":8.5,"Tipo":["Mexerica","Bergamota","Tangerina"], "Origem":"Brasil"}';


//escrevendo em teste.txt se já existe ou cria um novo arquivo com os dados que transformamos em string, nesse caso fruta.
fs.writeFileSync('teste.txt',fruta);


//ler o arquivo
let lerJson = fs.readFileSync('teste.txt','utf-8'); //condificação de caracteres
console.log(lerJson);

//converter de String para Objeto Literal
let converterLerJson = JSON.parse(lerJson);
console.log(converterLerJson);

fs.appendFileSync('teste.txt', ' Estado: Goiás'); // adicionando Estado Goiás, sempre vai para o final dos dados, não tem como adicionar entre.