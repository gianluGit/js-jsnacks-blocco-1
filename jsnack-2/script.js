
var btn = document.getElementById("send");


btn.addEventListener("click", function (){
  var nomeUtente = document.getElementById("nome").value;
  var cognomeUtente = document.getElementById("cognome").value;
  var concatenazione = nomeUtente + " " + cognomeUtente;


  console.log(nomeUtente);
  console.log(cognomeUtente);
  console.log(concatenazione);

});
