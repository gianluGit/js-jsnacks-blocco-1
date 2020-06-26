// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

// versione for
// var somma = 0;
//
// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt("Dammi un numero"));
//   console.log(numero);
//   somma += numero;
// }
// console.log("la somma dei numeri è " + somma);

// versione while

var k = 0;
var sum = 0;

while (k < 5) {
  var numeroUtente = parseInt(prompt("Dammi un numero"));
  console.log(numeroUtente);
  k++;
  sum += numeroUtente;
}

console.log("la somme dei numeri inseriti è " + sum);
