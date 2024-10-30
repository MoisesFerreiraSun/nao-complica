function ConfiraNumero() {
    let mes = document.frmmes.txtmes1.value.trim();
    
    if (mes === '') {
        alert("Confira o campo do mês 1 ao 12!");
        document.frmmes.txtmes1.focus();
        return false;
    }

    switch (mes) {
        case '1':
            alert("O mês número " + mes + " é o mês de Janeiro!");
            console.log("O mês número " + mes + " é o mês de Janeiro!");
            break;
        case '2':
            alert("O mês número " + mes + " é o mês de Fevereiro!");
            console.log("O mês número " + mes + " é o mês de Fevereiro!");
            break;
        case '3':
            alert("O mês número " + mes + " é o mês de Março!");
            console.log("O mês número " + mes + " é o mês de Março!");
            break;
        case '4':
            alert("O mês número " + mes + " é o mês de Abril!");
            console.log("O mês número " + mes + " é o mês de Abril!");
            break;
        case '5':
            alert("O mês número " + mes + " é o mês de Maio!");
            console.log("O mês número " + mes + " é o mês de Maio!");
            break;
        case '6':
            alert("O mês número " + mes + " é o mês de Junho!");
            console.log("O mês número " + mes + " é o mês de Maio!");
            break;
        case '7':
            alert("O mês número " + mes + " é o mês de Julho!");
            console.log("O mês número " + mes + " é o mês de Julho!");
            break;
        case '8':
            alert("O mês número " + mes + " é o mês de Agosto!");
            console.log("O mês número " + mes + " é o mês de Agosto!");
            break;
        case '9':
            alert("O mês número " + mes + " é o mês de Setembro!");
            console.log("O mês número " + mes + " é o mês de Setembro!");
            break;
        case '10':
            alert("O mês número " + mes + " é o mês de Outubro!");
            console.log("O mês número " + mes + " é o mês de Outubro!");
            break;
        case '11':
            alert("O mês número " + mes + " é o mês de Novembro!");
            console.log("O mês número " + mes + " é o mês de Novembro!");
            break;
        case '12':
            alert("O mês número " + mes + " é o mês de Dezembro!");
            console.log("O mês número " + mes + " é o mês de Dezembro!");
            break;
        default:
            alert("Confira o campo do mês 1 ao 12!");
            document.frmmes.txtmes1.focus();
            return false;
    }
    return false;
}
