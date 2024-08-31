const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularValorTotal(macas) {
  const precoMenosDeDoze = 0.30;
  const precoDozeOuMais = 0.25;

  if (macas < 12) {
    return macas * precoMenosDeDoze;
  } else {
    return macas * precoDozeOuMais;
  }
}

rl.question('Digite o número de maçãs compradas: ', (macasStr) => {
  const macas = parseInt(macasStr);
  if (isNaN(macas) || macas < 0) {
    console.log('Digite um número válido de maçãs.');
    rl.close();
    return;
  }

  const valorTotal = calcularValorTotal(macas);
  console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`);
  rl.close();
});
