// .splice(inicio, quantidade(q vai aparecer quando imprimir), item1, item2, ...);
//qtd: opcional - numeros inteiros a eliminar do array.
//Itens:

const frutas = ['Banana', 'Laranja','Limão','Maçã','Manga','Uva'];
console.log(frutas);

frutas.splice(2,0,'Mamão','Kiwi');

console.log(`Lista com adição.....: ${frutas}`);