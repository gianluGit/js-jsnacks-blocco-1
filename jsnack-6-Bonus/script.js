var btn = document.getElementById('lanciaMoneta');

btn.addEventListener("click", function (){
  var numero = Math.floor(Math.random() * 10);
  var testa = document.getElementById('testa');
  var croce = document.getElementById('croce');
  console.log(numero);

  testa.className = "hidden";
  croce.className = "hidden";

  if ((numero % 2)==0) {
    testa.className = "show";
  } else {
    croce.className = "show";
  }
});
