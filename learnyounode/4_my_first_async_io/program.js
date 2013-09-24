var fs = require("fs");

var file;

// get the file from the input arguments
file = process.argv[2];

// read the file asynchronously
fs.readFile(file, function(error, data) {
    var contents, numLines;

    if (error) {
        throw error;
    }

    // read the contents as a string
    contents = data.toString();
    
    // split the contents by \n to an array
    // count the elements to determine the number of lines
    numLines = contents.split("\n").length - 1;
    console.log(numLines);
});