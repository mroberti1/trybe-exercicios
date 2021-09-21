//3. Agora inverta o lado do triângulo. Por exemplo:

// n = 5
//     *
//    **
//   ***
//  ****
// *****

let size = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = size;

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  for(let collunIndex = 0; collunIndex <= size; collunIndex += 1) {
    if (collunIndex < inputPosition) {
      inputLine = inputLine + ' ';

    } else { 
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}