const inputOne = document.getElementById("label1");
const inputTwo = document.getElementById("label2");
const button = document.getElementById("btnone");
const result = document.getElementById("spanbtn");

button.addEventListener("click", () => {
  const valueOne = Number(inputOne.value);
  const valueTwo = Number(inputTwo.value);

  result.textContent = valueOne + valueTwo;
});
