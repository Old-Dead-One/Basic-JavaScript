function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// def fizz_buzz(n):
//     for i in range (1, n+1):
//         if i % 3 == 0 and i % 5 == 0:
//             print("FizzBuzz")
//         elif i % 3 == 0:
//             print("Fizz")
//         elif i % 5 == 0:
//             print("Buzz")
//         else:
//             print(i)

// fizz_buzz(100)
