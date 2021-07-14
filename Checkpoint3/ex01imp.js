const Estudante = require("./ex01exp");

let aluno = {
    nome: 'Paulo',
    faltas: 0,
    notas: [10, 9, 10, 10]
};

let aluno2 = new aluno('Abne', 1, [9, 10, 7, 10]);
let aluno3 = new aluno('Helena',2, [6, 7, 8, 5]);

console.log(aluno2.Estudante.media);