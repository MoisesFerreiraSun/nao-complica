function vetorunidimensional() {
    // Preencher o vetor com 10 valores inteiros
    let vetor = [];
    for (let i = 0; i < 10; i++) {
        let valor = parseInt(prompt(`Digite o valor inteiro para a posição ${i + 1}:`), 10);
        vetor.push(valor);
    }

    // Encontrar o maior valor no vetor
    let maiorValor = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maiorValor) {
            maiorValor = vetor[i];
        }
    }

    // Imprimir o maior valor
    console.log(`O maior valor armazenado no vetor é: ${maiorValor}.`);
}