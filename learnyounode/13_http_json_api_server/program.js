var http = require("http"),
    url = require("url"),
    server, buildDateHMS, buildDateUnix;

/**
 * Builds the Date hour/minute/second object required for the exercise
 * 
 * @param  {String} dateISOString The Date as an ISO String
 * @return {String}               The Date hour/minute/second format as a String
 */
var buildDateHMS = function(dateISOString) {
    var dateHMS, date;

    // create a new Date
    date = new Date(dateISOString);

    // build the hour/minute/second object
    dateHMS = {};
    dateHMS.hour = date.getHours();
    dateHMS.minute = date.getMinutes();
    dateHMS.second = date.getSeconds();

    // return as String
    return JSON.stringify(dateHMS);
};

/**
 * Builds the Date unix epoch time as required for the exercise
 * 
 * @param  {String} dateISOString The Date as an ISO String
 * @return {String}               The Date in unix epoch format
 */
var buildDateUnix = function(dateISOString) {
    var date, dateUnix;

    // build a new Date
    date = new Date(dateISOString);

    // return in unix epoch format, as a String
    dateUnix = {};
    dateUnix.unixtime = date.getTime();
    return JSON.stringify(dateUnix);
};

// create the HTTP server
server = http.createServer(function(req, res) {
    var urlObj;

    // parse the URL
    urlObj = url.parse(req.url, true);

    // if the URL matches /api/parsetime
    if (urlObj.pathname === "/api/parsetime") {
        res.writeHead(200, { "Content-Type": "application/json" });
        // write the date to the response
        res.end(buildDateHMS(urlObj.query.iso));
    // else if the URL matches /api/unixtime
    } else if (urlObj.pathname === "/api/unixtime") {
        res.writeHead(200, { "Content-Type": "application/json" });
        // write the date to the response
        res.end(buildDateUnix(urlObj.query.iso));
    } else {
        res.writeHead(404);
        res.end();
    }
});

// start the server
server.listen(8000);