function Estudante(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.media = () => this.notas.reduce((acc,e)=>acc+e,0)/this.notas.length;
    this.faltaTotal= () => this.faltas++;
};


let paulo = new Estudante("Paulo", 5, [10,5,10,10]); //testando Objeto;

console.log(paulo.media());

module.exports = Estudante;