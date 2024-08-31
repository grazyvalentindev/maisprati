const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let continuar = true;

function realizarCalculo() {
  rl.question('Digite o primeiro número: ', (num1Str) => {
    const num1 = parseFloat(num1Str);
    if (isNaN(num1)) {
      console.log('Digite um número válido.');
      realizarCalculo(); // Perguntar novamente
      return;
    }

    rl.question('Digite o operador (+, -, *, /): ', (operador) => {
      if (!['+', '-', '*', '/'].includes(operador)) {
        console.log('Operador inválido.');
        realizarCalculo(); // Perguntar novamente
        return;
      }

      rl.question('Digite o segundo número: ', (num2Str) => {
        const num2 = parseFloat(num2Str);
        if (isNaN(num2)) {
          console.log('Digite um número válido.');
          realizarCalculo(); // Perguntar novamente
          return;
        }

        switch (operador) {
          case '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
          case '-':
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
          case '*':
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
          case '/':
            if (num2 === 0) {
              console.log('Divisão por zero não é permitida.');
            } else {
              console.log(`${num1} / ${num2} = ${num1 / num2}`);
            }
            break;
          default:
            console.log('Operador inválido.');
        }

        rl.question('Deseja continuar? (s/n): ', (resposta) => {
          continuar = resposta.toLowerCase() === 's';
          if (continuar) {
            realizarCalculo(); // Perguntar novamente
          } else {
            rl.close(); // Encerrar a interface
          }
        });
      });
    });
  });
}

realizarCalculo(); // Iniciar o processo
