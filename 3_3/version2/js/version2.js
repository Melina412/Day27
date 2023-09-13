const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const colorSection = document.getElementById("colorSection");

function changeBackground() {
  const redValue = red.value;
  const greenValue = green.value;
  const blueValue = blue.value;

  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
  colorSection.style.backgroundColor = rgbColor;
  console.log(rgbColor);
}
red.addEventListener("input", changeBackground);
green.addEventListener("input", changeBackground);
blue.addEventListener("input", changeBackground);

changeBackground();
