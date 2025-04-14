let soma = 0;// Variável para armazenar os números
// Loop para solicitar 10 números ao usuário
for (let i = 1; i <= 5; i++){
const número = parseInt(prompt(`digite o número ${i}`))
if (isNaN(número) || número < 0) {
alert("Por favor, digite um número válido.");// Verifica se o número é válido
} else {
    soma += número;// Adiciona o número à soma
    

}
alert(`a soma dos números digitados foram: ${soma}`);// Exibe os números digitados

}


