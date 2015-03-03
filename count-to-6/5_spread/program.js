"use strict";

var input, result;

input = process.argv.slice(2);

result = Math.min(...input);

console.log(`The minimum of [${input}] is ${result}`);
