const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite o primeiro valor: ', (valor1Str) => {
  const valor1 = parseFloat(valor1Str);
  if (isNaN(valor1)) {
    console.log('Digite um valor válido.');
    rl.close();
    return;
  }

  rl.question('Digite o segundo valor (diferente do primeiro): ', (valor2Str) => {
    const valor2 = parseFloat(valor2Str);
    if (isNaN(valor2) || valor2 === valor1) {
      console.log('Digite um valor válido e diferente do primeiro.');
      rl.close();
      return;
    }

    // Ordenando os valores
    const menor = Math.min(valor1, valor2);
    const maior = Math.max(valor1, valor2);

    console.log(`Valores em ordem crescente: ${menor}, ${maior}`);
    rl.close();
  });
});
