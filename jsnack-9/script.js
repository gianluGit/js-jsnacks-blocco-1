// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var nomi = ["Giulio", "Domenico", "Gino", "Giacomo", "Giuseppe"];

var i = 0;
var nonTrovato = true;
var nomeUtente = prompt("Come ti chiami?");


while ((nonTrovato) && (i < nomi.length)) {
  i++;
  if (nomeUtente == nomi[i]) {
    nonTrovato = false;
  }
}

if (nonTrovato == false) {
  console.log("Ok puoi passare");
} else {
  console.log("Tornatene a casa");
}
