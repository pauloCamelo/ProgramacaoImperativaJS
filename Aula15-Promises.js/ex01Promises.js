// Promises é um objeto Javascript que vincula a produção / consumo do código.
// ele executa o código enquanto vai avisando o usuário se foi ou não executado

function meuVerificador(resposta) {
  console.log(resposta);
}

let minhaPromessa = new Promise(function (Resolve, Reject) {
  let x = 0;
  if (x == 0) {
    Resolve("Tudo OK");
  } else {
    Reject("Tudo Errado");
  }
});

minhaPromessa
  .then(function (Resolve) {
    meuVerificador(Resolve);
  })
  .catch((Reject) => {
    console.log(Reject);
  });



  