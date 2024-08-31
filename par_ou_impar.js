function verificarParouImpar (numerodadopelousuario) {
    let resto = numerodadopelousuario % 2;

    if (resto === 0) {
        console.log(numerodadopelousuario + " é par.");

    } else {
        console.log(numerodadopelousuario + " é ímpar.")
    }

}

// Testando:
verificarParouImpar(9);
verificarParouImpar(34);
verificarParouImpar(77);
verificarParouImpar(1008);
verificarParouImpar(347);