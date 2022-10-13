let SelecionarPrato1 = 0;
let SelecionarPrato2 = 0;
let SelecionarPrato3 = 0;

let SelecionarBebida1 = 0;
let SelecionarBebida2 = 0;
let SelecionarBebida3 = 0;

let SelecionarSugar1 = 0;
let SelecionarSugar2 = 0;
let SelecionarSugar3 = 0;

function Choose1() {
  SelecionarPrato1 = 1;
  SelecionarPrato2 = 0;
  SelecionarPrato3 = 0;
  Selecionar();
}

function Choose2() {
  SelecionarPrato1 = 0;
  SelecionarPrato2 = 1;
  SelecionarPrato3 = 0;
  Selecionar();
}

function Choose3() {
  SelecionarPrato1 = 0;
  SelecionarPrato2 = 0;
  SelecionarPrato3 = 1;
  Selecionar();
}

function Selecionar() {
  if (SelecionarPrato1 == 1) {
    document.getElementById("iten1").style.borderColor = "#67B930";
    document.getElementById("iten1").style.borderRadius = "9px";
    document.getElementById("check1").style.visibility = "visible";
    document.getElementById("iten2").style.borderColor = "white";
    document.getElementById("check2").style.visibility = "hidden";
    document.getElementById("iten3").style.borderColor = "white";
    document.getElementById("check3").style.visibility = "hidden";
  } else if (SelecionarPrato2 == 1) {
    document.getElementById("iten1").style.borderColor = "white";
    document.getElementById("check1").style.visibility = "hidden";
    document.getElementById("iten2").style.borderColor = "#67B930";
    document.getElementById("check2").style.visibility = "visible";
    document.getElementById("iten2").style.borderRadius = "9px";
    document.getElementById("iten3").style.borderColor = "white";
    document.getElementById("check3").style.visibility = "hidden";
  } else if (SelecionarPrato3 == 1) {
    document.getElementById("iten1").style.borderColor = "white";
    document.getElementById("check1").style.visibility = "hidden";
    document.getElementById("iten2").style.borderColor = "white";
    document.getElementById("check2").style.visibility = "hidden";
    document.getElementById("iten3").style.borderColor = "#67B930";
    document.getElementById("iten3").style.borderRadius = "9px";
    document.getElementById("check3").style.visibility = "visible";
  }
}
