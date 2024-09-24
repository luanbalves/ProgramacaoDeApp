// function imprimir() {
//   document.write('<p>counter<p>');
// }

// setInterval(imprimir, 1000);

// setInterval(() => {
//   document.write('<p>counter<p>')
// }, 1000);

// let counter = document.getElementById('contador')

// var myTimer = setInterval(() => {
//   counter.innerHTML += 'Hello <br/>'
// }, 1000);

// function stopTimer() {
//   clearInterval(myTimer)
// }

// setTimeout(imprimir, 4000);

// var nome = 'Luan'

// if (nome === 'Luan') { // Acessível globalmente, mesmo em escopo
//   var profissao = 'desenvolvedor'
//   console.log(profissao)
// }

// if (nome === 'Luan') { // Não é acessível globalmente
//   let cargo = 'CEO'
//   console.log(cargo)
// }

// if (nome === 'Luan') { // Não acessível globalmente, não pode ser mudado e deve ser inicializado
//   const cargos = 'CEOs'
//   cargo += 'Professor'
//   console.log(cargos)
// }

// const sobrenome = 'Sobrenome'

// let pessoa = {
//   nome: 'Luan',
//   idade: 22,
//   cargo: 'Desenvolvedor',
// };

// let usuarios = [
//   {
//     nome: 'Victor',
//     idade: 23,
//     cargo: 'Dev',
//   },
//   {
//     nome: 'Manuel',
//     idade: 13,
//     cargo: 'CEO',
//   },
//   {
//     nome: 'Zerefos',
//     idade: 43,
//     cargo: 'Web Dev',
//   },
// ];

// for (let i = 0; i < usuarios.length; i++) {
//   console.log(usuarios[i].nome)
// }

// let pessoa = {
//   nome: 'Luan',
//   idade: 22,
//   cargo: 'Desenvolvedor',
// };

// let { nome, idade, cargo } = pessoa;

// console.log(nome);
// console.log(idade);
// console.log(cargo);

// let pares = [2, 4, 6, 8, 10];
// let impares = [...pares, 3, 5, 7, 9]; // spread operator, pega os itens do array e nao o array em si

// let pessoa = {
//   name: 'Luan',
//   age: 23,
//   status: 'Single',
// };

// let pessoaProf = {
//   ...pessoa,
//   profession: 'CEO',
//   salary: 15000,
// }

// function user(info) {
//   let newUser = {
//     ...info,
//     profession: 'CEO',
//   };

//   console.log(newUser);

// }

// user({ nome: 'Bob', age: 34 });

// function alunos(...nomes) {
//   // Rest operator, nesse caso imprime todos os nomes
//   console.log(nomes);
// }

// alunos('Vicotr', 'Sabrina', 'Matheus');

// let nomes = ['Victor', 'Sabrina', 'Matheus', 'Eduardo'];

// nomes.map((item, index) => {
//   console.log(`${index} - ${item}`);
// });

// Crie um programa pra gerar numeros da sorte, recebendo um array de numeros, sorteando apenas um numero

function sortearNumero(...numeros) {
  let numeroRandom = Math.floor(Math.random() * 3);
  console.log(numeroRandom);
  console.log(numeros[numeroRandom]);
}

sortearNumero(25, 32, 33, 1, 2, 3);
