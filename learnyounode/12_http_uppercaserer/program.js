var http = require("http"),
    map = require("through2-map"),
    server;

// create the HTTP server
server = http.createServer(function(req, res) {
    // only allow POST method requests
    if (req.method === "POST") {
        // pipe the request to the response, but upper case it
        req.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    } else {
        return res.end("fail");
    }
});

// start the server
server.listen(8000);