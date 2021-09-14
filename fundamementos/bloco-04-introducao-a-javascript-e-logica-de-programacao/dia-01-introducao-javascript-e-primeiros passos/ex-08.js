/*
8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

const a = 3;
const b = 7;
const c = 9;

let isEven = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  isEven = true;
};
console.log(isEven);
