document.addEventListener("DOMContentLoaded", () => {
  function addition(num1, num2) {
    return num1 + num2;
  }
  //   function multiply(num1, num2) {
  //     return num1 * num2;
  //   }
  //   function square(num) {
  //     return num ** 2;
  //   }
  //   function addSquares(num1, num2) {
  //     return square(num1) + square(num2);
  //   }

  const button = document.getElementById("addition");
  button.addEventListener("click", () => {
    const resultAddition = addition(num1, num2);
    alert(`${num1} + ${num2} = ${resultAddition}`);
  });
});
