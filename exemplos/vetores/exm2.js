function Matriz() {
    // Número de clientes e meses;
    const numClientes = 3;
    const numMeses = 3;
    
    // Matriz de compras;
    let matrizCompras = [];
    
    // Coleta os nomes dos clientes e suas compras;
    let nomesClientes = [];
    
    for (let i = 0; i < numClientes; i++) {
        let nome = prompt("Informe o nome do cliente " + (i + 1) + ": ");
        nomesClientes.push(nome);
        
        matrizCompras[i] = [];
        for (let j = 0; j < numMeses; j++) {
            let valor = parseFloat(prompt("Informe o valor da compra do cliente " + nome + " no mês " + (j + 1) + ":")) || 0;
            matrizCompras[i][j] = valor;
        }
    }

    // Calcula a soma de cada linha e a soma total dos elementos;
    let somasLinhas = [];
    let somaTotal = 0;
    let totalCompras = 0; // Para contar a quantidade total de compras realizadas;
    let comprasPorCliente = []; // Para armazenar a quantidade de compras de cada cliente;

    for (let i = 0; i < numClientes; i++) {
        let somaLinha = 0;
        let comprasCliente = 0; // Contador de compras para o cliente atual;
        for (let j = 0; j < numMeses; j++) {
            somaLinha += matrizCompras[i][j];
            if (matrizCompras[i][j] > 0) {
                comprasCliente++;
                totalCompras++;
            }
            somaTotal += matrizCompras[i][j];
        }
        somasLinhas.push(somaLinha);
        comprasPorCliente.push(comprasCliente); // Armazena a quantidade de compras do cliente;
    }

    // Exibe a matriz e os resultados;
    document.write("<div style='text-align: center; font-size: 20px; font-family: Arial; background-color: white; padding: 20px;'>");
    document.write("<h1>MATRIZ DE COMPRAS DOS CLIENTES:</h1><br>");
    document.write("<table border='1' style='border-collapse: collapse; margin: auto; width: 80%; background-color: white;'>");
    document.write("<tr><th style='padding: 10px;'>Cliente</th>");
    for (let j = 0; j < numMeses; j++) {
        document.write("<th style='padding: 10px;'>Mês " + (j + 1) + "</th>");
    }
    document.write("<th style='padding: 10px;'>Médias compras</th>");
    document.write("<th style='padding: 10px;'>Qtde. Compras</th></tr>");
    
    for (let i = 0; i < numClientes; i++) {
        document.write("<tr>");
        document.write("<td style='padding: 10px; text-align: left;'>" + nomesClientes[i] + "</td>");
        for (let j = 0; j < numMeses; j++) {
            document.write("<td style='padding: 10px; text-align: right;'>R$ " + matrizCompras[i][j].toFixed(2) + "</td>");
        }
        document.write("<td style='padding: 10px; text-align: right;'>R$ " + somasLinhas[i].toFixed(2) + "</td>");
        document.write("<td style='padding: 10px; text-align: right;'>" + comprasPorCliente[i] + "</td>");
        document.write("</tr>");
    }
    document.write("</table><br>");
    document.write("<p style='font-size: 18px; font-weight: bold;'>Soma total das compras de todos os clientes: R$ " + somaTotal.toFixed(2) + "</p>");
    document.write("<p style='font-size: 18px; font-weight: bold;'>Quantidade total de compras realizadas no total: " + totalCompras + "</p>");
    document.write("</div>");
}
