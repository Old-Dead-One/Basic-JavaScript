let string = "Hello world!";
let stringReversed = "";

for (let i = string.length - 1; i >= 0; i--) {
  stringReversed += string[i];
}
console.log(stringReversed);

// string = "Hello World!"
// revstring = original_string[::-1]
// print(reversed_string)
