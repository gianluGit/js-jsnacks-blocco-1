var btn = document.getElementById('send');
var paragrafo = document.getElementById('colore');

btn.addEventListener("click", function(){
  var numero = parseInt(prompt("inserisci un numero"));

  if (numero > 0) {
    paragrafo.className = "green";
  } else if (numero < 0) {
    paragrafo.className = "red";
  } else {
    paragrafo.className = "blue";
  }

  console.log(numero);
  console.log(paragrafo);
});
