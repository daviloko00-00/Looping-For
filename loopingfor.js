const n1 = parseInt(prompt("Digite o primeiro número:"));
const n2 = parseInt(prompt("Digite o segundo número:"));

if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor, digite números válidos.");
} else {let NumPares = ""; // Variável para armazenar os números pares
    let inicio = n1 < n2 ? n1 : n2;// o ponto de interrogação é o operador ternário, que é uma forma de simplificar um if-else
    //Se n1 for menor que n2, o valor de inicio será n1. Se não, será n2.
    let fim = n1 > n2 ? n1 : n2;
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            NumPares += i + " ";
        }
    }

    if (NumPares === "") {
        alert("Não há números pares no intervalo.");
    } else {
        alert("Números pares no intervalo: " + NumPares);
    }
}
    
    