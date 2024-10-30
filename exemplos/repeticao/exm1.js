function ConfiraNumero() {
    let idade = document.frmidade.txtnumerointeiro.value.trim();

    if (idade === '') {
        alert("Confira o campo e insira o número inteiro!");
        document.frmidade.txtnumerointeiro.focus();
        return false;
    }

    // Convertendo idade para número inteiro
    idade = parseInt(idade);

    switch (true) {
        case (idade >= 1 && idade <= 3):
            alert("Você tem apenas " + idade + " anos, ainda é um BEBÊ!");
            console.log("Você tem apenas " + idade + " anos, ainda é um BEBÊ!");
            break;
        case (idade >= 4 && idade <= 10):
            alert("Você tem apenas " + idade + " anos, ainda é uma CRIANÇA!");
            console.log("Você tem apenas " + idade + " anos, ainda é uma CRIANÇA!");
            break;
        case (idade >= 11 && idade <= 18):
            alert("Você tem apenas " + idade + " anos, ainda é um ADOLESCENTE!");
            console.log("Você tem apenas " + idade + " anos, ainda é um ADOLESCENTE!");
            break;
        default:
            alert("Você tem " + idade + " anos, já é um ADULTO!");
            console.log("Você tem " + idade + " anos, já é um ADULTO!");
            break;
    }

    return false;
}