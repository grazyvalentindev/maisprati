function gerarFibonacci(n) {
    const fibonacci = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(nextNumber);
    }
  
    return fibonacci;
  }
  
  const primeiroDezFibonacci = gerarFibonacci(10);
  
  console.log('Os primeiros 10 números da sequência de Fibonacci:');
  console.log(primeiroDezFibonacci.join(', '));
  