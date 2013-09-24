var http = require("http");

var url;

// grab the URL from the command line
url = process.argv[2];

// perform an HTTP GET request to the URL
http.get(url, function(res) {
    var responseString = "";

    // set the encoding to UTF-8 to force the data to strings, rather than buffer
    res.setEncoding("utf8");

    // on each data event, add to our response string
    res.on("data", function(chunk) {
        responseString += chunk;
    });

    // when done, output the response string length, and contents
    res.on("end", function() {
        console.log(responseString.length);
        console.log(responseString);
    });

});
