let SelecionarPrato1 = 0;
let SelecionarPrato2 = 0;
let SelecionarPrato3 = 0;

let SelecionarBebida1 = 0;
let SelecionarBebida2 = 0;
let SelecionarBebida3 = 0;

let SelecionarSugar1 = 0;
let SelecionarSugar2 = 0;
let SelecionarSugar3 = 0;

let option1 = 0;
let option2 = 0;
let option3 = 0;

let item = 0;
function Choose1() {
  SelecionarPrato1 = 1;
  SelecionarPrato2 = 0;
  SelecionarPrato3 = 0;
  option1 = 1;
  item = 1;
  Selecionar();
  Decided();
  wone();
}

function Choose2() {
  SelecionarPrato1 = 0;
  SelecionarPrato2 = 1;
  SelecionarPrato3 = 0;
  option1 = 1;
  item = 2;
  Selecionar();
  Decided();
  wone();
}

function Choose3() {
  SelecionarPrato1 = 0;
  SelecionarPrato2 = 0;
  SelecionarPrato3 = 1;
  option1 = 1;
  item = 3;
  Selecionar();
  Decided();
  wone();
}

function Choose4() {
  SelecionarBebida1 = 1;
  SelecionarBebida2 = 0;
  SelecionarBebida3 = 0;
  option2 = 1;
  item = 4;
  SelecionarBebida();
  Decided();
  wone();
}

function Choose5() {
  SelecionarBebida1 = 0;
  SelecionarBebida2 = 1;
  SelecionarBebida3 = 0;
  option2 = 1;
  item = 5;
  SelecionarBebida();
  Decided();
  wone();
}

function Choose6() {
  SelecionarBebida1 = 0;
  SelecionarBebida2 = 0;
  SelecionarBebida3 = 1;
  option2 = 1;
  item = 6;
  SelecionarBebida();
  Decided();
  wone();
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
    Decided();
  } else if (SelecionarPrato2 == 1) {
    document.getElementById("iten1").style.borderColor = "white";
    document.getElementById("check1").style.visibility = "hidden";
    document.getElementById("iten2").style.borderColor = "#67B930";
    document.getElementById("check2").style.visibility = "visible";
    document.getElementById("iten2").style.borderRadius = "9px";
    document.getElementById("iten3").style.borderColor = "white";
    document.getElementById("check3").style.visibility = "hidden";
    Decided();
  } else if (SelecionarPrato3 == 1) {
    document.getElementById("iten1").style.borderColor = "white";
    document.getElementById("check1").style.visibility = "hidden";
    document.getElementById("iten2").style.borderColor = "white";
    document.getElementById("check2").style.visibility = "hidden";
    document.getElementById("iten3").style.borderColor = "#67B930";
    document.getElementById("iten3").style.borderRadius = "9px";
    document.getElementById("check3").style.visibility = "visible";
    Decided();
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
    Decided();
  } else if (SelecionarBebida2 == 1) {
    document.getElementById("iten4").style.borderColor = "white";
    document.getElementById("check4").style.visibility = "hidden";
    document.getElementById("iten5").style.borderColor = "#67B930";
    document.getElementById("iten5").style.borderRadius = "9px";
    document.getElementById("check5").style.visibility = "visible";
    document.getElementById("iten6").style.borderColor = "white";
    document.getElementById("check6").style.visibility = "hidden";
    Decided();
  } else if (SelecionarBebida3 == 1) {
    document.getElementById("iten4").style.borderColor = "white";
    document.getElementById("check4").style.visibility = "hidden";
    document.getElementById("iten5").style.borderColor = "white";
    document.getElementById("check5").style.visibility = "hidden";
    document.getElementById("iten6").style.borderColor = "#67B930";
    document.getElementById("iten6").style.borderRadius = "9px";
    document.getElementById("check6").style.visibility = "visible";
    Decided();
  }
}

function SelecionarSugar() {
  option3 = 1;
  item = 7;
  Decided();
  let selecitem1 = document.querySelector("#iten7");
  selecitem1.classList.add("item-selecionado");
  let selecitem2 = document.querySelector("#iten8");
  selecitem2.classList.remove("item-selecionado");
  let selecitem3 = document.querySelector("#iten9");
  selecitem3.classList.remove("item-selecionado");
  document.getElementById("check7").style.visibility = "visible";
  document.getElementById("check8").style.visibility = "hidden";
  document.getElementById("check9").style.visibility = "hidden";
  wone();
}

function SelecionarSugarD() {
  option3 = 1;
  item = 8;
  Decided();
  let selecitem1 = document.querySelector("#iten7");
  selecitem1.classList.remove("item-selecionado");
  let selecitem2 = document.querySelector("#iten8");
  selecitem2.classList.add("item-selecionado");
  let selecitem3 = document.querySelector("#iten9");
  selecitem3.classList.remove("item-selecionado");
  document.getElementById("check7").style.visibility = "hidden";
  document.getElementById("check8").style.visibility = "visible";
  document.getElementById("check9").style.visibility = "hidden";
  wone();
}

function SelecionarSugarT() {
  option3 = 1;
  item = 9;
  Decided();
  let selecitem1 = document.querySelector("#iten7");
  selecitem1.classList.remove("item-selecionado");
  let selecitem2 = document.querySelector("#iten8");
  selecitem2.classList.remove("item-selecionado");
  let selecitem3 = document.querySelector("#iten9");
  selecitem3.classList.add("item-selecionado");
  document.getElementById("check7").style.visibility = "hidden";
  document.getElementById("check8").style.visibility = "hidden";
  document.getElementById("check9").style.visibility = "visible";
  wone();
}

console.log(option1 + option2 + option3 === 3);

function Decided() {
  if (option1 + option2 + option3 === 3) {
    let confirmated = document.querySelector(".confirm");
    confirmated.classList.add("all-selected");
    document.getElementById("confirm").style.backgroundColor = "#32b72f";
    const elemento = document.querySelector("#confirm");
    elemento.style.color = "white";
    elemento.innerHTML = "Fechar pedido";
    elemento.style.fontWeight = "bold";
  }
}

let valorPrato1 = document.getElementById("valor1");
let valorPrato2 = document.getElementById("valor2");
let valorPrato3 = document.getElementById("valor3");
let valorBebida1 = document.getElementById("valor4");
let valorBebida2 = document.getElementById("valor5");
let valorBebida3 = document.getElementById("valor6");
let valorSugar1 = document.getElementById("valor7");
let valorSugar2 = document.getElementById("valor8");
let valorSugar3 = document.getElementById("valor9");

let result1 = valorPrato1.innerText;
let result2 = valorPrato2.innerText;
let result3 = valorPrato3.innerText;
let result4 = valorBebida1.innerText;
let result5 = valorBebida2.innerText;
let result6 = valorBebida3.innerText;
let result7 = valorSugar1.innerText;
let result8 = valorSugar2.innerText;
let result9 = valorSugar3.innerText;

//Olá, gostaria de fazer o pedido:
//- Prato: Frango Yin Yang
//- Bebida: Coquinha Gelada
//- Sobremesa: Pudim
//Total: R$ 27.70
let total1 = "";
let total2 = "";
let total3 = "";

result1 = result1.replace("R$", "");
console.log(typeof result1);
result1 = result1.replace(" ", "");
console.log(typeof result1);
result1 = result1.replace("'", "");
console.log(typeof result1);
result1 = result1.replace(",", ".");
console.log(typeof result1);
result1 = Number(result1);
console.log(typeof result1);

result2 = result2.replace("R$", "");
result2 = result2.replace(" ", "");
result2 = result2.replace("'", "");
result2 = result2.replace(",", ".");
result2 = Number(result2);

result3 = result3.replace("R$", "");
result3 = result3.replace(" ", "");
result3 = result3.replace("'", "");
result3 = result3.replace(",", ".");
result3 = Number(result3);

result4 = result4.replace("R$", "");
result4 = result4.replace(" ", "");
result4 = result4.replace("'", "");
result4 = result4.replace(",", ".");
result4 = Number(result4);

result5 = result5.replace("R$", "");
result5 = result5.replace(" ", "");
result5 = result5.replace("'", "");
result5 = result5.replace(",", ".");
result5 = Number(result5);

result6 = result6.replace("R$", "");
result6 = result6.replace(" ", "");
result6 = result6.replace("'", "");
result6 = result6.replace(",", ".");
result6 = Number(result6);

result7 = result7.replace("R$", "");
result7 = result7.replace(" ", "");
result7 = result7.replace("'", "");
result7 = result7.replace(",", ".");
result7 = Number(result7);

result8 = result8.replace("R$", "");
result8 = result8.replace(" ", "");
result8 = result8.replace("'", "");
result8 = result8.replace(",", ".");
result8 = Number(result8);

result9 = result9.replace("R$", "");
result9 = result9.replace(" ", "");
result9 = result9.replace("'", "");
result9 = result9.replace(",", ".");
result9 = Number(result9);

//result1 = result1.toFixed();
//console.log(typeof result1);
total1 = Number(total1);
total2 = Number(total2);
total3 = Number(total3);

function wone() {
  if (item === 1) {
    total1 = 0;
    total1 = total1 + Number(result1);
    console.log(total1);
  }
  if (item === 2) {
    total1 = 0;
    total1 = total1 + Number(result2);
    console.log(total1);
  }
  if (item === 3) {
    total1 = 0;
    total1 = total1 + Number(result3);
    console.log(total1);
  }
  if (item === 4) {
    total2 = 0;
    total2 = total2 + Number(result4);
    console.log(total2);
  }
  if (item === 5) {
    total2 = 0;
    total2 = total2 + Number(result5);
    console.log(total2);
  }
  if (item === 6) {
    total2 = 0;
    total2 = total2 + Number(result6);
    console.log(total2);
  }
  if (item === 7) {
    total3 = 0;
    total3 = total3 + Number(result7);
    console.log(total3);
  }
  if (item === 8) {
    total3 = 0;
    total3 = total3 + Number(result8);
    console.log(total3);
  }
  if (item === 9) {
    total3 = 0;
    total3 = total3 + Number(result9);
    console.log(total3);
  }
}

let totalall = 0;

//https://wa.me/+5548999709825?text=urlencodedtext

function totalAll() {
  if (total1 + total2 + total3 > 23) {
    totalall = total1 + total2 + total3;
    totalall = totalall.toFixed(2);
    const msg = `
    Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang 
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: ${totalall}`;
    let encoded = encodeURIComponent(msg);
    const url = `https://wa.me/+5548999709825?text=${msg}`;
    document.getElementById("anchor-confirm").href = url;
    console.log(msg);
  }
}

//passar para função verificar a todo moment
//that you choose an element if the funciton is true
// if true add all-selected

//em resumo. teu if tá sendo executado desde oi inicio
// coloca dentro de uma funcao e verifica em todo momento
//se é true
