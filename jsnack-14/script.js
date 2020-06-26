var somma = 0;

for (var i = 0; i < 10; i++) {
  var numero = parseInt(prompt("Dammi un numero"));
  console.log(numero);
  somma += numero;
}
console.log("la somma dei numeri è " + somma);

var media = somma / 10;
console.log("La media dei mnumeri è " + media);
