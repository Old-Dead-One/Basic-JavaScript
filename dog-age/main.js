document.addEventListener("DOMContentLoaded", () => {
  function calculateHumanAge(dogAge) {
    if (dogAge > 0) {
      const humanAge = 16 * Math.log(dogAge) + 31;
      return humanAge.toFixed(0);
    } else {
      return "Please enter a valid dog age.";
    }
  }

  const button = document.getElementById("calculate-human-age");
  button.addEventListener("click", () => {
    const dogAge = document.getElementById("dog-age").value;
    const humanAge = calculateHumanAge(dogAge);
    alert("Your dog is " + humanAge + " years old in human years.");
  });
});
