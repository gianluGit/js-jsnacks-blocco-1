var primoNumero = parseInt(prompt("Scegli il primo numero"), 10);

var secondoNumero = parseInt(prompt("Scegli il secondo numero"), 10);

var maggiore;

if (primoNumero > secondoNumero) {
    maggiore = primoNumero;   
} else if (secondoNumero > primoNumero) {
    maggiore = secondoNumero;
} else {
    maggiore = "i due numeri sono uguali";
}


console.log(primoNumero);
console.log(secondoNumero);
console.log(maggiore);




