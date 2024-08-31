const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarTriangulo(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      return 'Equilátero'; // Todos os lados iguais
    } else if (a === b || a === c || b === c) {
      return 'Isósceles'; // Dois lados iguais
    } else {
      return 'Escaleno'; // Todos os lados diferentes
    }
  } else {
    return 'Não forma um triângulo';
  }
}

rl.question('Digite o valor do lado A: ', (aStr) => {
  const a = parseFloat(aStr);
  if (isNaN(a)) {
    console.log('Digite um valor válido para o lado A.');
    rl.close();
    return;
  }

  rl.question('Digite o valor do lado B: ', (bStr) => {
    const b = parseFloat(bStr);
    if (isNaN(b)) {
      console.log('Digite um valor válido para o lado B.');
      rl.close();
      return;
    }

    rl.question('Digite o valor do lado C: ', (cStr) => {
      const c = parseFloat(cStr);
      if (isNaN(c)) {
        console.log('Digite um valor válido para o lado C.');
        rl.close();
        return;
      }

      const tipoTriangulo = verificarTriangulo(a, b, c);
      console.log(`Tipo de triângulo: ${tipoTriangulo}`);
      rl.close();
    });
  });
});
