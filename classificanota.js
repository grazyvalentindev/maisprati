function classificaNota(nota) {
    if (nota >= 6) {
      console.log("Aprovado");
    } else if (nota >= 4) {
      console.log("Recuperação");
    } else {
      console.log("Reprovado");
    }
  }
  
  // Testando:
  classificaNota(8);
  classificaNota(2); 
  classificaNota(10); 
  classificaNota(0);
  classificaNota(7); 
  classificaNota(4); 
