function exibirContagemRegressiva() {
    for (let i = 10; i >= 1; i--) {
      setTimeout(() => {
        console.log(i);
      }, (10 - i) * 2000); // Intervalo de 2 segundos
    }
  }
  
  exibirContagemRegressiva();
  