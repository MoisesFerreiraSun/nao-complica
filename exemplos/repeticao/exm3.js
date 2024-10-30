function ConfiraNumero() {
 let numero= parseInt(document.getElementById('tabuada').value);
 let i=1;
 let vezes=1;

do {
      console.log(numero+ " X " +i+ " = " +vezes);
      i++;
	  vezes = numero * i;
 }
  while(i<=10);
    console.log("A tabuada é esta!");
    return false;
}