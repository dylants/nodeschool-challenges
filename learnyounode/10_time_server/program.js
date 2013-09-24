var net = require("net"),
    moment = require("moment");

// create the server
var server = net.createServer(function(socket) {
    // on a connection, send the current date formatted using momentjs
    socket.end(moment().format("YYYY-MM-DD HH:mm") + "\n");
});

// listen on port 8000
server.listen(8000);
