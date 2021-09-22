//Se percorrermos um objeto, também teremos o mesmo resultado. 
//O For/in irá percorrer a propriedade declarada, e não o seu valor em si.

//Já o For/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o For/in .

//1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge'
// };

// //Verificar os Padrões, neste caso é o console.log, se repete 3 vezes
// // console.log('Olá ' + names.person1);
// // console.log('Olá ' + names.person2);
// // console.log('Olá ' + names.person3);

// for (let key in names) {
//   console.log('Olá ' + names[key] + '!'); //Passa por todas as propriedades e printa o valor delas, for in dentro de objetos
// }

//2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(key + ': ' + car[key]);
}