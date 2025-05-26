#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

// Update the value property
myObject.value = 89; // Using dot notation
// Alternatively:
// myObject['value'] = 89; // Using bracket notation

console.log(myObject);
