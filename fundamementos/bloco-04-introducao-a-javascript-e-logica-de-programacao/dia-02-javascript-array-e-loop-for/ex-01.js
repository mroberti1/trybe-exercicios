/*
Aprofunde seus conhecimentos

Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 /ao 7:
*/
let numbers = [5, 9, 3, 19, 70, 8, 100,22, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos.
//Use a função console.log() ;

// for(let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let result = 0;

for(let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
console.log(result);