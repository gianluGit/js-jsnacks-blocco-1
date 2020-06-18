var btn = document.getElementById('calcola');


btn.addEventListener("click", function (){
  var num1 = parseInt(document.getElementById('numero1').value);
  var num2 = parseInt(document.getElementById('numero2').value);
  var calcolo = document.getElementById('operazioni').value;
  var risultato;

  console.log(num1);
  console.log(num2);

  if (calcolo == "somma") {
    risultato = num1 + num2;
  } else if (calcolo == "sottrai") {
    risultato = num1 - num2;
  } else if (calcolo == "moltiplica") {
    risultato = num1 * num2;
  } else if (calcolo == "dividi") {
    if (num2 == 0) {
      risultato = "impossibile eseguire l'operazione";
    } else {
      risultato = num1 / num2;
    }
  }

  console.log(risultato);

  document.getElementById('result').innerHTML = risultato;
});
