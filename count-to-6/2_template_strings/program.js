"use strict";

var name, output;

name = process.argv[2];

output = `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;

console.log(output);
