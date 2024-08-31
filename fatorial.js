const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularFatorial(numero) {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

rl.question('Digite um número inteiro para calcular o fatorial: ', (numeroStr) => {
  const numero = parseInt(numeroStr);
  if (isNaN(numero) || numero < 0) {
    console.log('Digite um número inteiro positivo.');
    rl.close();
    return;
  }

  const resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}.`);
  rl.close();
});
