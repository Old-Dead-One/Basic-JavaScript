document.addEventListener("DOMContentLoaded", () => {
  const superHeroes = {
    Tony: 42,
    Peter: 18,
    Steve: 104,
    Bruce: 38,
    Thor: 1055,
  };

  function calcAveAge() {
    let totalAge = 0;
    let count = 0;

    for (i = 0; i < Object.keys(superHeroes).length; i++) {
      totalAge += Object.values(superHeroes)[i];
      count++;
    }

    let aveAge = totalAge / count;
    alert("Average age of superheroes: " + aveAge);
  }

  const button = document.getElementById("hero-average-age");
  button.addEventListener("click", calcAveAge);
});
