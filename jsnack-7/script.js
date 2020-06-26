var parola1 = prompt("Dammi la prima parola");

var parola2 = prompt("Dammi la seconda parola");

if (parola1 > parola2) {
  console.log(parola2, parola1);
} else if (parola2 > parola1) {
  console.log(parola1, parola2);
} else {
  console.log("le due parole sono uguali");
}
