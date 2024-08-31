const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funções para cada opção
function opcao1() {
  console.log("Você escolheu ingresso pagamento inteira!");
  // Lógica da opção 1
}

function opcao2() {
  console.log("Você escolheu ingresso pagamento meia!");
  // Lógica da opção 2
}

function opcao3() {
  console.log("Você escolheu a opção 3 (sair).");
  rl.close();
}

// Função principal para apresentar o menu e ler a escolha do usuário
function menu() {
  console.log("Escolha uma opção de ingresso:");
  console.log("1. Inteiro");
  console.log("2. Meia entrada ou Solidário");
  console.log("3. Sair");

  rl.question('Digite o número da opção: ', (escolha) => {
    escolha = parseInt(escolha);

    switch (escolha) {
      case 1:
        opcao1();
        break;
      case 2:
        opcao2();
        break;
      case 3:
        opcao3();
        break;
      default:
        console.log("Opção inválida!");
    }

    menu(); // Chama a função menu novamente para permitir novas escolhas
  });
}

menu();