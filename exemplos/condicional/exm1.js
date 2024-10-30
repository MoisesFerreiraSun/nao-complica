function validaFormulario() {
    let nota1 = (document.frmnotas.txtnota1.value);
    let nota2 = (document.frmnotas.txtnota2.value);
    let nota3 = (document.frmnotas.txtnota3.value);
    
    if (nota1 === "") {
        alert("Confira o campo da 1ª Nota!");
        document.frmnotas.txtnota1.focus();
        return false;
    }

    if (nota2 === "") {
        alert("Confira o campo da 2ª Nota!");
        document.frmnotas.txtnota2.focus();
        return false;
    }

    if (nota3 === "") {
        alert("Confira o campo da 3ª Nota!");
        document.frmnotas.txtnota3.focus();
        return false;
    }

    else{
        let nota1 = parseFloat(document.frmnotas.txtnota1.value);
        let nota2 = parseFloat(document.frmnotas.txtnota2.value);
        let nota3 = parseFloat(document.frmnotas.txtnota3.value);
        

    let media = (nota1 + nota2 + nota3) / 3;

    //APROVADO
    if (media>=7)
    {
        alert("Você foi aprovado! Sua média foi de: "  + media.toFixed(1));
        return true;
    }

    //RECUPERAÇÃO
    else if (media >= 5)
    {
        alert("Você está em recuperação! Sua média foi de: " + media.toFixed(1));
        return true;
    }
    else
    {
        alert("Você está reprovado! Sua média foi de: " + media.toFixed(1));
        return true;
    }

        }
}