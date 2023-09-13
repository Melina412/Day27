function getInputValue() {
  const yearInput = document.querySelector("#year");
  const year = parseInt(yearInput.value);
  // parseInt() wandelt str in ganzzaligen int um

  const today = new Date();
  const currentYear = today.getFullYear();
  const age = currentYear - year;
  document.querySelector("#result").innerHTML = age;
}

// tests ----------------------------------------------
const today = new Date();
const currentYear = today.getFullYear();
const currentDay = today.getDate();
console.log(today);
console.log(currentYear);
console.log(currentDay);
