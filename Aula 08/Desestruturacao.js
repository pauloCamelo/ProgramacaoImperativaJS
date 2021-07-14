/*desestruturação, podemos escolher qual variável escolher dentro de um Array */
let cores = ['Branco','Celeste','Amarelo','Vermelho','Roxo']

// let [cor0, cor1, cor2, cor3, cor4] = cores; //vai seguir a ordem do Array
let [cor0, ,cor2] = cores; //se não não quiser atribuir um valor a uma variável, pode deixar somente com espaço

// console.log(cor2,cor4);
console.log(cores[2], cores[4]);


let pessoa = {
    nome: 'Paulo',
    idade: 28,
    profissao: 'Carpinteiro',
    seriesFavoritas:'LOTR',
}

const {nome,idade} = pessoa
console.log(nome,idade);
console.log(pessoa.nome,pessoa.idade);


let cadastro = {nome: 'Pazulo', idade: 18, cpf: 75144566486};//podemos desestruturar mesmo quando já declaramos uma variável
let {nome, idade, cpf} = cadastro;
console.log(nome,idade,cpf);