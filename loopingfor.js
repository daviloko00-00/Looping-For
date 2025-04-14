// programa que solicita ao usuário a soma de um até o número digitado

//solicita que o usuário digite um número inteiro maior que 1
const numero = parseInt(prompt("Digite um número:"));

// inicializa a variável soma com 0, pois não contamos nada ainda
contagem = 0;
if (isNaN(numero) || numero <= 1) {
    alert("Erro:\nPor favor, digite um número válido maior que 1.");
} else {
    // loop que conta os números de 1 até o número digitado
    let frase = "";
    for (let i = 1; i <= numero; i++){
        contagem = contagem + i;
        // mostra a soma parcial a cada iteração
        frase += `${i}. `; // transforma o número em string e adiciona ao resultado
    }
    alert(frase);// mostra a contagem de 1 até o número digitado
}
        



