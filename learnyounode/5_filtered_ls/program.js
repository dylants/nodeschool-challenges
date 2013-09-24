var fs = require("fs");

var path, filter;

// grab the path and filter
path = process.argv[2];
filter = process.argv[3];

// read the contents of the directory asynchronously
fs.readdir(path, function(error, files) {
    var regex, count;

    // our regular expression to match files which end with this extension
    regex = new RegExp("\\w*\\." + filter + "$");
    // loop through the files
    for (count = 0; count < files.length; count++) {
        // if the regex matches
        if (regex.test(files[count])) {
            // log the file to standard out
            console.log(files[count]);
        }
    }
});
