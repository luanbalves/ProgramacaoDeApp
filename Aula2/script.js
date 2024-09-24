// var lista = ['Victor', 'Thaius', 'Sabrina', 'Matheus', 150];
// push('Elemento a colocar') Coloca um elemento no fim do array
// unshift('Elemento a colocar') Coloca um elemento no inicio do array
// shift() Retira o primeiro elemento do array
// pop() Retira o ultimo elemento do array
// join('Elemento a colocar') Coloca um elemento entre os cada item do array
// toString() Fornece o array em string separando cada elemento por virgula

// var homens = ['homem1', 'homem2', 'homem3', 'homem4'];
// var mulheres = ['mulher1', 'mulher2', 'mulher3', 'mulher4'];

// concat(variavel a concatenar) concatena arrays

// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
// var i = 0;

// while (i < months.length) {
//   document.write('<p>${months[i]}</p>');
//   i++;
// }

// for (var i = 0; i < months.length; i++) {
//     document.write('<p>${months[i]}</p>');
// }

// function escolher() {
//   let options = Number(prompt('Digite a opção desejada!'));
//   console.log(typeof options);

//   switch (options) {
//     case 1:
//       alert('Você escolheu a opção 1');
//       break;
//     case 2:
//       alert('Você escolheu a opção 2');
//       break;
//     case 3:
//       alert('Você escolheu a opção 3');
//       break;
//     case 4:
//       alert('Você escolheu a opção 4');
//       break;
//     default:
//         alert('Opção inválida');
//         break;
//   }
// }

// Crie um programa que calcula o imc do usuario e mostra o resultado para o usuario no final, o usuario deve entrar com os dados e depois deve ser mostrado os dados, usar if

// var peso = Number(prompt('Digite o seu peso'))
// var altura = Number(prompt('Digite sua altura'))

// var imc = peso / (altura * altura)

// if (imc >= 18.5 && imc <= 24.9) {
//     console.log('Peso normal')
// } else if (imc >= 25 && imc <= 29.9) {
//     console.log('Excesso de peso')
// } else if (imc >= 30 && imc <= 34.9) {
//     console.log('Obesidade classe 1')
// } else if (imc >= 35 && imc <= 39.9) {
//     console.log('Obesidade classe 2')
// } else {
//     console.log('Obesidade classe 3')
// }

// crie uma funcao que leia uma temperatura do usuario, qualquer unidade, deixar escolher a conversao

// let tipoDeConversao = Number(
//   prompt(
//     'Digite o tipo de conversão/n 1-Celsius para Kelvin/n 2-Celsius para Farenheit/n 3- Kelvin para Celsius/n 4- Kelvin para Fairenheit/n 5- Farenheit para Kelvin/n 6- Farenheit para Celsius'
//   )
// );
// let valor1 = Number(prompt('Digite o valor da primeira temperatura'));

// switch (tipoDeConversao) {
//   case 1:
//     console.log(
//       `O resultado para a conversão de celsius para kelvin é: ${valor1 + 273}`
//     );
//     break;
//   case 2:
//     console.log(
//       `O resultado para a conversão de celsius para farenheit é: ${
//         valor1 * 1.8 + 32
//       }`
//     );
//     break;
//   case 3:
//     console.log(
//       `O resultado para a conversão de kelvin para celsius é: ${valor1 - 273}`
//     );
//     break;
//   case 4:
//     console.log(
//       `O resultado para a conversão de kelvin para farenheit é: ${
//         (valor1 - 273) * 1.8 + 32
//       }`
//     );
//     break;
//   case 5:
//     console.log(
//       `O resultado para a conversão de farenheit para celsius é: ${
//         (valor1 - 32) / 1.8
//       }`
//     );
//     break;
//   case 6:
//     console.log(
//       `O resultado para a conversão de farenheit para kelvin é: ${
//         (valor1 - 32) * 0.55 + 273
//       }`
//     );
//     break;
//   default:
//     console.log('Valor inválido');
//     break;
// }

// um programa que gere quantos numeros da loteria o usuario quiser

let quantidadeNumeros = prompt(
  'Digite a quantidade de números que você deseja receber'
);
let arrayNumeros = [];
let numeroMaximo = prompt('Digite o número máximo');
let numerosGerados = new Set();

while (numerosGerados.size < quantidadeNumeros) {
  let numeroAleatorio = Math.floor(Math.random() * numeroMaximo);
  numerosGerados.add(numeroAleatorio);
}

arrayNumeros = Array.from(numerosGerados);
console.log(arrayNumeros);
