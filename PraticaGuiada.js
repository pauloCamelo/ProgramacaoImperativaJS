function Estudante(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    
    
    this.calcularMedia = () => { let somaNotas = this.notas.reduce(
        (acc,elem) => acc + elem);
        return somaNotas / this.notas.length;
    };


let paulo = new Estudante("Paulo Henrique", 5, [10,10,10,10]);

console.log(paulo.Estudante());