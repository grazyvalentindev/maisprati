const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function classificarNadador() {
  let continuar = true;

  while (continuar) {
    let idade = await new Promise(resolve => { // Alterado para let
      rl.question('Digite a idade do nadador (ou "sair" para encerrar): ', (idade) => {
        resolve(idade);
      });
    });

    if (idade.toLowerCase() === 'sair') {
      continuar = false;
      console.log('Encerrando o programa.');
      rl.close();
      return;
    }

    idade = parseInt(idade);

    if (idade >= 5 && idade <= 7) {
      console.log('Categoria: Infantil A');
    } else if (idade >= 8 && idade <= 10) {
      console.log('Categoria: Infantil B');
    } else if (idade >= 11 && idade <= 13) {
      console.log('Categoria: Juvenil A');
    } else if (idade >= 14 && idade <= 17) {
      console.log('Categoria: Juvenil B');
    } else if (idade >= 18) {
      console.log('Categoria: Adulto');
    } else {
      console.log('Idade inválida. O nadador deve ter 5 anos ou mais.');
    }
  }
}

classificarNadador();