function getInputValue() {
  const color = document.querySelector("#input").value;
  console.log(color);
  const bgColor = document.querySelector("main");
  bgColor.style.backgroundColor = color;
}
