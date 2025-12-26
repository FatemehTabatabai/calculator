const inputone = document.getElementById("label1");
const inputtwo = document.getElementById("label2");
const buttom1 = document.getElementById("btnone");
const sum = document.getElementById("spanbtn");
console.log(inputone);
console.log(inputtwo);
console.log(buttom1);
console.log(sum);
buttom1.addEventListener("click", () => {
  const inputOneValue = Number(inputone.value);
  const inputTwoValue = Number(inputtwo.value);
  console.log(inputOneValue);
  console.log(inputTwoValue);
  sum.textContent = inputOneValue + inputTwoValue;
});
