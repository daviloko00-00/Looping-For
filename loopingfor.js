

function Numeropar() {
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
            alert(`Números pares no intervalo de ${inicio} até ${fim} : ${NumPares}`); // se houver números pares, eles serão exibidos em uma caixa de alerta.
        }
    }// código finalizado
}
function menu() {

    let opcao = prompt("bem vindo ao menu de opções para intervalos de pares!!!\nEscolha uma opção:\n1. Calcular números pares num intervalo\n2. Sair");
    if (opcao == isNaN || opcao > 2 || opcao < 1) {
        alert("Opção inválida. Tente novamente.");
        menu(); // Chama a função menu novamente para permitir nova escolha
    }
    switch (opcao) {
        case "1":


            Numeropar(); // Chama a função para calculo de números pares
            menu(); // Chama a função menu novamente para permitir nova escolha
            break;
        case "2":
            alert("Saindo do programa..."); // Mensagem de saída
            break;
    }
}
menu();
