const n1 = parseInt(prompt("Digite o primeiro número:"));
const n2 = parseInt(prompt("Digite o segundo número:"));

if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor, digite números válidos.");
} else {
    let NumPares = ""; // Variável para armazenar os números pares
    let inicio, fim;

    if (n1 < n2) {
        inicio = n1;
        fim = n2;
    } else {
        inicio = n2;
        fim = n1;
    }

    for (let i = inicio; i <= fim; i++) { // o loop for percorre todos os números entre inicio e fim.
        if (i % 2 === 0) {
            NumPares += i + " ";
        }
    }

    if (NumPares === "") { // no caso de não haver números pares no intervalo, a variável NumPares estará vazia.
        alert("Não há números pares no intervalo.");
    } else {
        alert("Números pares no intervalo: " + NumPares); // se houver números pares, eles serão exibidos em uma caixa de alerta.
    }
}
    