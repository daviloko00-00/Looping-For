const número = parseInt(prompt(`digite o número ${i}`));
if (isNaN(número) || número < 0) {
    alert("Por favor, digite um número válido."); // Verifica se o número é válido
} else {
    let tabuada = ""; // Variável para armazenar os números
    // Loop para solicitar 10 números ao usuário
    for (let i = 1; i <= 10; i++) {
        const resultado = número * i; // Calcula o resultado
        tabuada += `${número} x ${i} = ${resultado}\n`; // Concatena o resultado na string
    }
    alert(`Tabuada do ${número}:\n${tabuada}`);
}

