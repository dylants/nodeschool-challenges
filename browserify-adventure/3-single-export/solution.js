"use strict";

var uniquely = require("./uniquely.js");

var input;

// using the browser's "prompt", pull in a string
input = prompt("enter a string");

// split the input into an array
input = input.split(",");

// grab only the unique elements from the array
input = uniquely(input);

console.log(input);
