function ConfiraNumero() {
    let numero1 = document.frmnumero.txtnumero1.value.trim();
    let numero2 = document.frmnumero.txtnumero2.value.trim();
    
    if (numero1 === "") {
        alert("Confira o campo do 1° Número!");
        document.frmnumero.txtnumero1.focus();
        return false;
    }

    if (numero2 === "") {
        alert("Confira o campo do 2° Número!");
        document.frmnumero.txtnumero2.focus();
        return false;
    }

    numero1 = parseInt(document.getElementById("num1").value);
    numero2 = parseInt(document.getElementById("num2").value);
    
    if (numero1 > numero2) {
        alert("O número 1 é maior que o número 2.");
    } else if (numero1 < numero2) {
        alert("O número 2 é maior que o número 1.");
    } else {
        alert("Os números são iguais.");
    }

    return true;
}