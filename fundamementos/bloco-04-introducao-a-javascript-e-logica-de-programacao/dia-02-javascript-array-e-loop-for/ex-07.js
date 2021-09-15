// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//menorNumero
let smallestNumber = numbers[0];

for(let index = 1; index < numbers.length; index += 1) {
  if(numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}
console.log('O menor número encontrado no array é: ' + smallestNumber + '!');
