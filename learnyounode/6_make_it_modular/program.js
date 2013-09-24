var findMatchingFiles = require("./findMatchingFiles");

var path, filter;

// grab the path and filter
path = process.argv[2];
filter = process.argv[3];

// use the module to find matching files
findMatchingFiles(path, filter, function(error, filteredArray) {
    if (error) {
        console.log("error was found: " + error);
    } else {
        filteredArray.forEach(function(file) {
            console.log(file);
        });
    }
});
