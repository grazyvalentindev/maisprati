function isBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      console.log(`${ano} é um ano bissexto.`);
    } else {
      console.log(`${ano} não é um ano bissexto.`);
    }
  }
  
  // Solicita o ano ao usuário
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite um ano: ', (answer) => {
    const ano = parseInt(answer);
    isBissexto(ano);
    rl.close();
  });