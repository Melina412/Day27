const startValue = (document.querySelector("#result").innerHTML = 0);

function addOne() {
  const showResult = parseInt(document.querySelector("#result").innerHTML);
  document.querySelector("#result").innerHTML = showResult + 1;
}

function subtractOne() {
  const showResult = parseInt(document.querySelector("#result").innerHTML);
  document.querySelector("#result").innerHTML = showResult - 1;
}

function addTen() {
  const showResult = parseInt(document.querySelector("#result").innerHTML);
  document.querySelector("#result").innerHTML = showResult + 10;
}

function subtractTen() {
  const showResult = parseInt(document.querySelector("#result").innerHTML);
  document.querySelector("#result").innerHTML = showResult - 10;
}

function addHundred() {
  const showResult = parseInt(document.querySelector("#result").innerHTML);
  document.querySelector("#result").innerHTML = showResult + 100;
}

function subtractHundred() {
  const showResult = parseInt(document.querySelector("#result").innerHTML);
  document.querySelector("#result").innerHTML = showResult - 100;
}

function resetAll() {
  // man kann den namen "reset" NICHT für eine function benutzen 😡😭
  document.querySelector("#result").innerHTML = 0;
}

function multiplyTwo() {
  const showResult = parseInt(document.querySelector("#result").innerHTML);
  document.querySelector("#result").innerHTML = showResult * 2;
}
