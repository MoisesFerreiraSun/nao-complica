function vetorDesafio() {
    let temp = [];
    let menor = Infinity;
    let maior = -Infinity;
    let diaMenor = 0;
    let mesMenor = 0;
    let diaMaior = 0;
    let mesMaior = 0;
    let somaAbril = 0;
    let contAbril = 0;
    let somaAno = 0;

    for (let mes = 1; mes <= 12; mes++) {
        console.log("MÊS " + mes);

        for (let dia = 1; dia <= 3; dia++) {
            console.log("DIA " + dia);
            temp[dia] = parseFloat(prompt("Digite a temperatura do dia 0" + dia + "/" + mes));

            // Verifica a menor temperatura
            if (temp[dia] < menor) {
                menor = temp[dia];
                diaMenor = dia;
                mesMenor = mes;
            }

            // Verifica a maior temperatura
            if (temp[dia] > maior) {
                maior = temp[dia];
                diaMaior = dia;
                mesMaior = mes;
            }

            // Calcula média do mês de abril
            if (mes === 4) {
                somaAbril += temp[dia];
                contAbril++;
            }

            // Soma para média do ano
            somaAno += temp[dia];
        }
    }

    // Calcula média do mês de abril
    let mediaAbril = somaAbril / contAbril;

    // Calcula média do ano inteiro
    let mediaAnual = somaAno / (12 * 30); // Média das temperaturas diárias

    console.log("A maior temperatura foi registrada em 0" + diaMaior + "/" + mesMaior + " (" + maior + "°C)");
    console.log("A menor temperatura foi registrada em 0" + diaMenor + "/" + mesMenor + " (" + menor + "°C)");
    console.log("A temperatura média do mês de Abril foi " + mediaAbril.toFixed(2) + "°C");
    console.log("A temperatura média no ano foi " + mediaAnual.toFixed(2) + "°C");

    return false;
}