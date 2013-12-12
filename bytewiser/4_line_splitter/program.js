var fs = require("fs");

// read the file and process it as a buffer
fs.readFile(process.argv[2], function(err, data) {
    var i, last;

    // handle errors
    if (err) throw err;

    last = 0;
    // iterate over the elements in the buffer
    for (i = 0; i < data.length; i++) {
        // if an octet is a newline character
        if (data[i] === 10) {
            // log from the last time we found one to here
            console.log(data.slice(last, i));
            // store the new last position from this point
            last = i + 1;
        }
    }
    // don't forget the last line!
    console.log(data.slice(last, i));
});
