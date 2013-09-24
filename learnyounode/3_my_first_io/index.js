var fs = require("fs");

var file, fileContentsAsBuffer, fileContents, numLines;

// grab the input file
file = process.argv[2];

// read the file to a buffer
fileContentsAsBuffer = fs.readFileSync(file);

// convert to string
fileContents = fileContentsAsBuffer.toString();

// split the contents by \n to an array,
// count the elements to determine number of lines
numLines = fileContents.split("\n").length - 1;

console.log(numLines);