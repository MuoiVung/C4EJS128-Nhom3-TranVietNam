'use strict';

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (isNaN(number)) {
    alert('The number is invalid!');
    isPrime = false;
}
else if (number < 2) {
    isPrime = false;
}
else if (number === 2) {
    isPrime = true;
}
else {
    if (number % 2 === 0) {
        isPrime = false;
    }
    else {
        for (let i = 3; i < (number / 2); i += 2) {
            if (number % i === 0) {
                isPrime = false;
            }
        }
    }
}

if (isPrime) {
    alert(`${number} is a prime number!`);
}
else {
    alert(`${number} is not a prime number!`);
}