// objetos literais, estrutura básica

let carro = {
//nome da PROPRIEDADE  //valor do objeto, podemos usar qualquer tipo de dado
        placa:             'HHG3438'
};

let tenista = {
    nome: 'Paulo Henrique', //adicionar virgula para mais objetos
    sobreNome: 'Camelo'
};

console.log(tenista.nome);
console.log(tenista.sobreNome);

//uma PROPRIEDADE pode tmb armazenar uma função, isso se chama MÉTODO do objeto
let tenista2 = {
    nome: 'Paulo Henrique', //adicionar virgula para mais objetos
    sobreNome: 'Camelo',
    idade: 18,
    ativo: true,
    //MÉTODO do OBJETO => funcao dentro do objeto
    saudacao: function(){
        return `Olá, me chamo ${this.nome} ${this.sobreNome} e tenho ${this.idade} anos de idade.`
    }
};

console.log(tenista2.saudacao());

/*carro = nome da funcao
marca, modelo = parametros
this.marca = propriedades */
/*function Carro(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
} */
//funcoes contrutoras nos permite criar parametro para cada propriedade que queremos atribuir ao objeto.
//Nome do contrutor, normalmente inicia com letra maiúscula, para diferenciar das funcoes normais.
function Carro(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
};


/*Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o
cardápio (que será um array de strings).
Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas,
informando o nome do restaurante, e o cardápio. */

let restaurante = {
    nome: 'Le Camel',
    cardapio: ['Peixe','Abobora','Pão','Queijo','Nada'],
    entrada: function(){
        return `Olá, seja bem vindo ao restaurant ${this.nome}, confira nosso cardápio: ${this.cardapio}`
    }
};
console.log(restaurante.entrada());