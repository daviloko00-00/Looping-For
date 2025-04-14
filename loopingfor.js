// Solicita ao usuário um número para gerar a tabuada
const numero = parseInt(prompt("Digite um número para gerar a tabuada:"));

if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
} else {
    let tabuada = ""; // Variável para armazenar os resultados da tabuada

    // Loop para calcular a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        tabuada += `${numero} x ${i} = ${resultado}\n`; // Concatena o resultado na string
    }

    // Exibe a tabuada completa
    alert(`Tabuada do ${numero}:\n${tabuada}`);
}