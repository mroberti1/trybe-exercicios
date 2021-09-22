//Pedidos de Pizza

//Var Pizzas que vai receber um objeto

let pizzas = {
  sabor: "palmito",
  preco: 39.90,
  bordaCatupiry: true,
};

// => vai pegar as chaves dos objetos
// no objeto pizzas, varre todos os obj e executa algo 

//For In dentro de Objetos

for (let key in pizzas) {
  //console.log(key) // Mostra as 3 chaves => sabor, preco, bordaCatupiry
  
  //console.log(pizzas) // Mostra 3 vezes o objeto completo, pq têm 3 chaves no objeto pizzas

  //console.log(pizzas.sabor);// chamar por dot notation (pizzas.preco ou .sabor ou . bordaCatupiry)
  
  //console.log(pizzas['bordaCatupiry']);//Objeto pizzas e nos colchetes ['sabor'] e com 'aspas' passar o nome da propriedade

  //console.log(pizzas[key]); //passa em todas as propriedades e printa o valor delas, for in dentro de objetos
}

//For In dentro de Arrays

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
  //console.log(key); // mostra as três chaves, que são a posiçnao do Array

  //console.log(pizzasDoces);//var pizzasDoces, mostra 3 vezes os valores

  //console.log(pizzasDoces[key]);//Exibe um indice especîfivo do array
  
  console.log(key, pizzasDoces[key]);// Exibe a posição do index + as chaves
}