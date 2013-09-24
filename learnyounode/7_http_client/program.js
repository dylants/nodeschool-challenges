var http = require("http");

var url;

// grab the URL
url = process.argv[2];

// perform an HTTP GET request to the URL
http.get(url, function(res) {
    // set the encoding to UTF-8 to force the data to strings, rather than buffer
    res.setEncoding("utf8");
    // on each data event, log to console
    res.on("data", function(chunk) {
        console.log(chunk);
    });

    // error handling
    res.on("error", function(e) {
        console.log("problem with request: " + e.message);
    });
});
