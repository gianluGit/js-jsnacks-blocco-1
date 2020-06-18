var btn = document.getElementById('button');

btn.addEventListener("click", function (){
var numero = Math.floor(Math.random() * 10) +1;
var paragrafo = document.getElementById('paragrafo');


  if ((numero % 2)==0) {
    paragrafo.className = "dispari";
  } else {
    paragrafo.className = "pari";
  }

});
