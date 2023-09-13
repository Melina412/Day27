function getInputValue() {
  const age1 = parseInt(document.querySelector("#num1").value);
  const age2 = parseInt(document.querySelector("#num2").value);
  //   const und id namen können nicht identisch sein ??

  const difference = Math.abs(age1 - age2);
  //   absolute zahl

  document.querySelector("#result").innerHTML = difference;
}
