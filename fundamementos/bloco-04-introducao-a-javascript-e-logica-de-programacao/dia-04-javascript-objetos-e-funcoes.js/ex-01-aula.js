/* Forma sem ser como Objetos

let name = 'Milton';
let lastName = 'Nascimento';
let nickName = 'Bituca';
let age = 77;
let bestAlbuns = ['Travessia', 'Clube da Esquina', 'Minas'];
*/

// console.log(name);
// console.log(lastName);
// console.log(nickName);
// console.log(age);
// console.log(bestAlbuns);

// Declaração => chave: valor => Declaração como Objetos

let singer = {
  name: 'Milton',
  lastName: 'Nascimento',
  nickName: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
  
  //O valor pode até ser um outro objeto
  bornInfo: {
    city: 'Rio de Janeiro',
    state: 'Rio de Janeiro'
  }
};

//Para acessar as propriedades dentro do Objeto
console.log('O cantor, ' + singer.name + ' ' + singer.lastName + ', possui ' + singer.age + ' anos.');

//Usa chaves quando se quer criar propriedades dinâmicas, neste caso viram strings
console.log('O cantor, ' + singer['name'] + ' ' + singer['lastName'] + ', possui ' + singer['age'] + ' anos.');

singer['fullName'] = singer.name + ' ' + singer.lastName;

console.table(singer);

console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);
