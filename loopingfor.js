// programa que solicita ao usuário a soma de um até o número digitado

//solicita que o usuário digite um número inteiro maior que 1
const numero = parseInt(prompt("Digite um número:"));

// inicializa a variável soma com 0, pois não somamos nada ainda
soma = 0;
if (isNaN(numero) || numero <= 1) {
    alert("Erro:\nPor favor, digite um número válido maior que 1.");
} else {
    // loop que soma os números de 1 até o número digitado

    /*
    Estrutura do loop for:
    - inicialização: let i = 1 -> começamos com o contador i em 1
    - condição: i <= num -> o loop continua enquanto i for menor ou igual a numero (variável digitada pelo usuário)
    - atualização: i++ -> a cada repetição do loop i é aumentado em 1
    */
    for (let i = 1; i <= numero; i++){
        soma = soma + i;
    }
    
    alert(`A soma dos números de 1 até ${numero} é: ${soma}`);
}



