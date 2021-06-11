// 01. Meuy primeiro if

let status = false

if(status){
    console.log(`01. O valor é verdadeiro`);
}else{
    console.log(`01. O valor é falso`);
}


// 02. Igualdade, if e else

let linguagem = `java`

if(linguagem == `javascript`){
    console.log(`02. Estou aprendendo`);
}else{
    console.log(`02. Aprenderei mais tarde`);
}


// 03. Exercício na aula
let login = `phcamelo`;
let senha = 1234567;

if(login == `phcamelo`) {
    console.log(`03. Acesso Permitido`);
}else{
    console.log(`03. Acesso Negado`);
}

// 04. if Composto
if (login ==`phcamelo` && senha == 1234567 ){
    console.log(`04. Acesso Permitido`);
}else {
    console.log(`04. Acesso Negado`);
}

// 05. Switch
let dia = "quarta";

switch(dia){
    case `terça`:
        console.log(`Vou F1`);
        break;
    case `quarta`:
        console.log(`Vou comer e dormir`);
        break;
    default:
        console.log(`Vou decidir ainda`);
}