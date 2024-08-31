const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

function determinarCategoria(imc) {
  if (imc < 18.5) {
    return 'Baixo peso';
  } else if (imc < 24.9) {
    return 'Peso normal';
  } else if (imc < 29.9) {
    return 'Sobrepeso';
  } else {
    return 'Obesidade';
  }
}

rl.question('Digite o seu peso (em kg): ', (pesoStr) => {
  const peso = parseFloat(pesoStr);
  if (isNaN(peso)) {
    console.log('Digite um peso válido.');
    rl.close();
    return;
  }

  rl.question('Digite a sua altura (em metros): ', (alturaStr) => {
    // Substituímos a vírgula por ponto para garantir que a entrada seja correta
    const altura = parseFloat(alturaStr.replace(',', '.'));
    if (isNaN(altura)) {
      console.log('Digite uma altura válida.');
      rl.close();
      return;
    }

    const imc = calcularIMC(peso, altura);
    const categoria = determinarCategoria(imc);

    console.log(`Seu IMC é ${imc.toFixed(2)}. Categoria de peso: ${categoria}.`);
    rl.close();
  });
});
