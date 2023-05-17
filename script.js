var tempointervalo;
var horas = 0;
var minutos = 0;
var segundos = 0;

function começar() {
  document.getElementById("btnComecar").disabled = true;
  document.getElementById("btnParar").disabled = false;
  document.getElementById("btnResetar").disabled = false;

  tempointervalo = setInterval(novotempo, 1000);
}

function parar() {
  document.getElementById("btnComecar").disabled = false;
  document.getElementById("btnParar").disabled = true;
  document.getElementById("btnResetar").disabled = false;

  clearInterval(tempointervalo);
}

function resetar() {
  document.getElementById("btnComecar").disabled = false;
  document.getElementById("btnParar").disabled = true;
  document.getElementById("btnResetar").disabled = true;

  clearInterval(tempointervalo);
  horas = 0;
  minutos = 0;
  segundos = 0;
  novotempo();
}

function novotempo() {
  segundos++;
  if (segundos >= 60) {
    segundos = 0;
    minutos++;
    if (minutos >= 60) {
      minutos = 0;
      horas++;
    }
  }

  var timeString = padZero(horas) + ":" + padZero(minutos) + ":" + padZero(segundos);
  document.getElementById("tempo").textContent = timeString;
}

function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}