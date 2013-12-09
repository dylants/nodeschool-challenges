var http = require('http'),
    fs = require('fs'),
    through = require('through');

process.stdin.pipe(through(write, end)).pipe(process.stdout);

function write(buf) {
    this.queue(buf.toString().toUpperCase());
}

function end() {
    this.queue(null);
}


var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        req.pipe(through(write, end)).pipe(res);
    }
});

server.listen(process.argv[2]);
