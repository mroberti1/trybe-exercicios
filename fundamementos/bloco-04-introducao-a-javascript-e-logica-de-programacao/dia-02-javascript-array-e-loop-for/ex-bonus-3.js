/*
Bônus
Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:

http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/
*/
/*
Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .
O resultado deve ser :
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
