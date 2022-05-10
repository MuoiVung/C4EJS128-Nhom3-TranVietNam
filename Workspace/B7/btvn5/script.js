let txt = "Welcome to the world!";
let length = txt.length;
console.log("length: " + length);

let txtPart = txt.slice(11, 14);
console.log(txtPart);

let txtPart2 = txt.substring(11, 14);
console.log(txtPart2);

let newTxt = txt.replace("world", "hell");
console.log(newTxt);

let upperTxt = txt.toUpperCase();
console.log(upperTxt);

let concatTxt = txt.concat(" ", "Go home now!");
console.log(concatTxt);

let trimTxt = ("  Hello World!    ").trim();
console.log(trimTxt);

let newArr = txt.split(" ");
console.log(newArr);