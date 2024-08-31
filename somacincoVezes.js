const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lerNumero() {
  return new Promise((resolve, reject) => {
    rl.question('Digite um número: ', (numeroStr) => {
      const numero = parseFloat(numeroStr);
      if (isNaN(numero)) {
        console.log('Digite um número válido.');
        reject();
      } else {
        resolve(numero);
      }
    });
  });
}

async function main() {
  let soma = 0;
  for (let i = 1; i <= 5; i++) {
    try {
      const numero = await lerNumero();
      soma += numero;
    } catch (error) {
      // Tratamento de erro (caso o usuário digite algo inválido)
    }
  }

  console.log(`A soma dos números é: ${soma}`);
  rl.close();
}

main();
