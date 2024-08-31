const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número de 1 a 7 para o dia da semana: ', (numero) => {
  numero = parseInt(numero);

  switch (numero) {
    case 1:
      console.log('Domingo');
      break;
    case 2:
      console.log('Segunda-feira');
      break;
    case 3:
      console.log('Terça-feira');
      break;
    case 4:
      console.log('Quarta-feira');
      break;
    case 5:
      console.log('Quinta-feira');
      break;
    case 6:
      console.log('Sexta-feira');
      break;
    case 7:
      console.log('Sábado');
      break;
    default:
      console.log('Número inválido. Digite um número entre 1 e 7.');
  }

  rl.close();
});