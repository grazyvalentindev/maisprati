const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite um número para ver a tabuada: ', (numeroStr) => {
  const numero = parseInt(numeroStr);
  if (isNaN(numero)) {
    console.log('Digite um número válido.');
    rl.close();
    return;
  }

  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }

  rl.close();
});
