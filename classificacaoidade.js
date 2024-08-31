function classificaidade (numeroDaIdade) {
    let idade = numeroDaIdade;

    if (idade >= 0 && idade <= 11) {
        console.log(idade + " é uma criança.");

    } else if (idade >= 12 && idade <=18) {
        console.log(idade + " é um adolescente");
    }
        else if (idade >=19 && idade <=59) {
            console.log(idade + " é um adulto.");

        }

        else if (idade >=60) {
            console.log(idade + " é um idoso.");
        }
        else {
            console.log("Idade inválida");
        }

}

// Testando a função
classificaidade(9);
classificaidade(34);
classificaidade(2);
classificaidade(85);
classificaidade(-1);