// programa que solicita ao usuário a soma de um até o número digitado

//solicita que o usuário digite um número inteiro maior que 1
const numero = parseInt(prompt("Digite um número:"));

// inicializa a variável soma com 0, pois não somamos nada ainda
contagem = 0;
if (isNaN(numero) || numero <= 1) {
    alert("Erro:\nPor favor, digite um número válido maior que 1.");
} else {
    // loop que soma os números de 1 até o número digitado

    for (let i = 1; i <= numero; i++){
        soma = soma + i;
    }
    
    alert(`A soma dos números de 1 até ${numero} é: ${soma}`);
}



