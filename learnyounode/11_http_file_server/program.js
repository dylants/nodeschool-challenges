var fs = require("fs"),
    http = require("http");

// read the file location
var file = process.argv[2];

// create the HTTP server
var server = http.createServer(function(req, res) {
    // read the file as a stream
    var inputStream = fs.createReadStream(file);
    // pipe the stream to the response
    inputStream.pipe(res);
});

// start the server
server.listen(8000);
