const n1 = parseInt(prompt("Digite o primeiro número:"));
const n2 = parseInt(prompt("Digite o segundo número:"));

if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor, digite números válidos.");
} else {let NumPares = ""; // Variável para armazenar os números pares
let inicio, fim; // Variáveis para armazenar o início e o fim do intervalo
// O código solicita ao usuário dois números inteiros e exibe todos os números pares entre eles, inclusive os próprios números, se forem pares.
    if (n1 < n2) {// Verifica se o primeiro número é menor que o segundo
        inicio = n1; // Se sim, define o início como n1
        fim = n2; // e o fim como n2
    }
    else {// Caso contrário, define o início como n2 e o fim como n1
        inicio = n2;
        fim = n1;
    }
    for (let i = inicio; i <= fim; i++) {// o loop for percorre todos os números entre inicio e fim.
        // O loop começa em inicio e vai até fim, incrementando i em 1 a cada iteração.
        if (i % 2 === 0) {
            NumPares += i + " ";
        }
    }
        if (i % 2 === 0) {
            NumPares += i + " ";
        }
    }

    if (NumPares === "") {// no caso de não haver números pares no intervalo, a variável NumPares estará vazia.
        alert("Não há números pares no intervalo.");
    } else {
        alert("Números pares no intervalo: " + NumPares);// se houver números pares, eles serão exibidos em uma caixa de alerta.
    }

// O código solicita ao usuário dois números inteiros e exibe todos os números pares entre eles, inclusive os próprios números, se forem pares.
    
    