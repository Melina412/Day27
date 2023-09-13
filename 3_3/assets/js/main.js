const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const colorSection = document.getElementById("colorSection");

function changeBackground() {
  const redValue = red.value;
  const greenValue = green.value;
  const blueValue = blue.value;

  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
  // template-literals für string interpolation
  colorSection.style.backgroundColor = rgbColor;
}

// die variante mit onchange ist eigentlich nicht gut für die funktion
// einer farbänderung geeignet, weil die farbänderung erst nach loslassen
// des reglers erfolgt und nicht bereits beim schieben. es geht besser,
// wenn man die function über einen event-listener aufruft, weil sich so
// die farbe kontinuierlich ändert (siehe version2 😉)
