const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMediaEConceito() {
  rl.question('Digite a primeira nota (0 a 100): ', (nota1) => {
    rl.question('Digite a segunda nota (0 a 100): ', (nota2) => {
      rl.question('Digite a terceira nota (0 a 100): ', (nota3) => {
        // Convertendo as notas para números
        nota1 = parseFloat(nota1);
        nota2 = parseFloat(nota2);
        nota3 = parseFloat(nota3);

        // Calculando a média
        const media = (nota1 + nota2 + nota3) / 3;

        // Determinando o conceito (ajustado para a escala de 0 a 100)
        let conceito;
        if (media >= 80) {
          conceito = 'A';
        } else if (media >= 70) {
          conceito = 'B';
        } else if (media >= 50) {
          conceito = 'C';
        } else if (media >= 40) {
          conceito = 'D';
        } else {
          conceito = 'E';
        }

        console.log(`A média do aluno é: ${media.toFixed(2)}`);
        console.log(`O conceito do aluno é: ${conceito}`);

        // Separando
        console.log('------------------------------------');
        console.log('Calculando nova média...');

        // Reiniciando o processo
        calcularMediaEConceito();
      });
    });
  });
}

// Iniciando o processo
calcularMediaEConceito();