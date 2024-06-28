let string = "Hello world!";
let stringReversed = "";

for (let i = string.length - 1; i >= 0; i--) {
  stringReversed += string[i];
}
console.log(stringReversed);

// string = "Hello World!"
// revstring = string[::-1]
// print(revstring)
