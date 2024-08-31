const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para converter número em texto
function numeroParaTexto(numero) {
  const unidades = [
    'zero', 'um', 'dois', 'três', 'quatro', 'cinco',
    'seis', 'sete', 'oito', 'nove'
  ];

  if (numero >= 0 && numero <= 9) {
    return unidades[numero];
  } else {
    return numero.toString(); // Se for maior que 9, retorna o próprio número como texto
  }
}

rl.question('Digite um número inteiro: ', (numeroStr) => {
  const numero = parseInt(numeroStr);
  if (isNaN(numero)) {
    console.log('Digite um número inteiro válido.');
    rl.close();
    return;
  }

  const vezes = 10;
  for (let i = 1; i <= vezes; i++) {
    const texto = numeroParaTexto(numero);
    console.log(`${i}: ${texto}`);
  }

  rl.close();
});
