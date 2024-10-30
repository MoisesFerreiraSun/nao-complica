function ConfiraNumero() {
  let i = 1;
  let somaDivisiveisPor5 = 0;

  while (i <= 3) {
    let numero = parseInt(prompt("Digite o número:"));
    console.log("O " + i + "° número informado é: " + numero);
    
    if (numero % 5 === 0) {
      somaDivisiveisPor5 += numero;
    }
    i++;
  }
  
  console.log("A soma dos números divisíveis por 5 é: " + somaDivisiveisPor5);
  return false;
}