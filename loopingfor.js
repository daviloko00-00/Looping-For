let soma = 0;// Variável para armazenar os números
// Loop para solicitar 10 números ao usuário
for (let i = 1; i <= 5; i++){
const número = parseFloat(prompt(`digite a nota ${i}`))
if (isNaN(número) || número < 0) {
alert("Por favor, digite uma nota válido.");// Verifica se o número é válido
} else {
    soma += número;// Adiciona o número à soma
    
    

} 
}
media = soma /5;// Calcula a média
alert(`a média das notas digitadas foram: ${media}`);// Exibe a média
alert(`a soma das notas digitadas foram: ${soma}`);// Exibe os números digitados





