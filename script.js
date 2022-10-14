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

function Choose4() {
  SelecionarBebida1 = 1;
  SelecionarBebida2 = 0;
  SelecionarBebida3 = 0;
  SelecionarBebida();
}

function Choose5() {
  SelecionarBebida1 = 0;
  SelecionarBebida2 = 1;
  SelecionarBebida3 = 0;
  SelecionarBebida();
}

function Choose6() {
  SelecionarBebida1 = 0;
  SelecionarBebida2 = 0;
  SelecionarBebida3 = 1;
  SelecionarBebida();
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

function SelecionarBebida() {
  if (SelecionarBebida1 == 1) {
    document.getElementById("iten4").style.borderColor = "#67B930";
    document.getElementById("iten4").style.borderRadius = "9px";
    document.getElementById("check4").style.visibility = "visible";
    document.getElementById("iten5").style.borderColor = "white";
    document.getElementById("check5").style.visibility = "hidden";
    document.getElementById("iten6").style.borderColor = "white";
    document.getElementById("check6").style.visibility = "hidden";
  } else if (SelecionarBebida2 == 1) {
    document.getElementById("iten4").style.borderColor = "white";
    document.getElementById("check4").style.visibility = "hidden";
    document.getElementById("iten5").style.borderColor = "#67B930";
    document.getElementById("iten5").style.borderRadius = "9px";
    document.getElementById("check5").style.visibility = "visible";
    document.getElementById("iten6").style.borderColor = "white";
    document.getElementById("check6").style.visibility = "hidden";
  } else if (SelecionarBebida3 == 1) {
    document.getElementById("iten4").style.borderColor = "white";
    document.getElementById("check4").style.visibility = "hidden";
    document.getElementById("iten5").style.borderColor = "white";
    document.getElementById("check5").style.visibility = "hidden";
    document.getElementById("iten6").style.borderColor = "#67B930";
    document.getElementById("iten6").style.borderRadius = "9px";
    document.getElementById("check6").style.visibility = "visible";
  }
}

function SelecionarSugar() {
  let selecitem1 = document.querySelector("#iten7");
  selecitem1.classList.add("item-selecionado");
  let selecitem2 = document.querySelector("#iten8");
  selecitem2.classList.remove("item-selecionado");
  let selecitem3 = document.querySelector("#iten9");
  selecitem3.classList.remove("item-selecionado");
  document.getElementById("check7").style.visibility = "visible";
  document.getElementById("check8").style.visibility = "hidden";
  document.getElementById("check9").style.visibility = "hidden";
}

function SelecionarSugarD() {
  let selecitem1 = document.querySelector("#iten7");
  selecitem1.classList.remove("item-selecionado");
  let selecitem2 = document.querySelector("#iten8");
  selecitem2.classList.add("item-selecionado");
  let selecitem3 = document.querySelector("#iten9");
  selecitem3.classList.remove("item-selecionado");
  document.getElementById("check7").style.visibility = "hidden";
  document.getElementById("check8").style.visibility = "visible";
  document.getElementById("check9").style.visibility = "hidden";
}

function SelecionarSugarT() {
  let selecitem1 = document.querySelector("#iten7");
  selecitem1.classList.remove("item-selecionado");
  let selecitem2 = document.querySelector("#iten8");
  selecitem2.classList.remove("item-selecionado");
  let selecitem3 = document.querySelector("#iten9");
  selecitem3.classList.add("item-selecionado");
  document.getElementById("check7").style.visibility = "hidden";
  document.getElementById("check8").style.visibility = "hidden";
  document.getElementById("check9").style.visibility = "visible";
}
