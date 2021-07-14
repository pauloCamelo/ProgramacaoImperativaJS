function Estudante(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.media=()=>this.notas.reduce((acc,e)=>acc+e,0)/this.notas.length;
    this.faltaTotal=()=>this.faltas++;
};


module.exports = Estudante;