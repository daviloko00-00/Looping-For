const numeros = [];// Array para armazenar os números
// Loop para solicitar 10 números ao usuário
for (let i = 1; i <= 10; i++){
const meupaunasuabunda = parseInt(prompt(`digite o número ${i}`))
if (isNaN(meupaunasuabunda) || meupaunasuabunda < 0) {
alert("Por favor, digite um número válido.");// Verifica se o número é válido
} else {
    numeros.push(numeros);// Adiciona o número ao array

}
alert(`Os números digitados foram: ${numeros}`);// Exibe os números digitados

}


