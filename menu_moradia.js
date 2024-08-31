const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log("Onde você mora?");
  console.log("1 - Área Urbana Central");
  console.log("2 - Área Urbana Periférica");
  console.log("3 - Área Rural");

  rl.question('Digite o número da opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        console.log("Você escolheu: Área Urbana Central");
        break;
      case '2':
        console.log("Você escolheu: Área Urbana Periférica");
        break;
      case '3':
        console.log("Você escolheu: Área Rural");
        break;
      default:
        console.log("Opção inválida. Por favor, escolha entre 1, 2 ou 3.");
    }

    // Chamar a função menu novamente para permitir novas escolhas
    menu();
  });
}

menu();
