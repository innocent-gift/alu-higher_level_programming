#!/usr/bin/node

function factorial (n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

const num = parseInt(process.argv[2]);

if (isNaN(num) || num < 0) {
  console.log(1);
} else {
  console.log(factorial(num));
}
