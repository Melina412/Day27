function getInputValue() {
  const numInput = document.querySelector("#num").value;
  const numDouble = numInput * 2;
  document.querySelector("#result").innerHTML = numDouble;
}
