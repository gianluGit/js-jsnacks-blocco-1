var numeroUtente = prompt("Dammi un numero a 4 cifre");

var somma = 0;

for (var i = 0; i < numeroUtente.length; i++) {
  somma += parseInt(numeroUtente[i]);
}
console.log(somma);
