var http = require("http");

var url1, url2, url3;

// grab the URLs from the command line
url1 = process.argv[2];
url2 = process.argv[3];
url3 = process.argv[4];

/**
 * Gets the complete response from an HTTP call, calls callback with URL
 * and response string
 * @param  {String}   url      The current URL
 * @param  {Function} callback The callback to call with URL and response string
 */
var getResponseOfHttpGet = function(url, callback) {
    // perform an HTTP GET request to the URL
    http.get(url, function(res) {
        var responseString = "";

        // set the encoding to UTF-8 to force the data to strings, rather than buffer
        res.setEncoding("utf8");

        // on each data event, add to our response string
        res.on("data", function(chunk) {
            responseString += chunk;
        });

        // when done, return the response string
        res.on("end", function() {
            callback(url, responseString);
        });

    });
};

// the responses we'll get from the HTTP requests
var responses = {};

/**
 * Combines the responses into a responses object, calls outputResponse() when
 * all combined
 * @param  {String} url            The current URL
 * @param  {String} responseString The response string
 */
var combineResponses = function(url, responseString) {
    if (url === url1) {
        responses[1] = responseString;
    } else if (url === url2) {
        responses[2] = responseString;
    } else if (url === url3) {
        responses[3] = responseString;
    }

    // if we've got all the responses, output em
    if (Object.keys(responses).length >= 3) {
        outputResponse();
    }
};

/**
 * Outputs all responses to the console
 */
var outputResponse = function() {
    var key;

    for (key in responses) {
        console.log(responses[key]);
    }
};

// perform a GET on each URL
getResponseOfHttpGet(url1, combineResponses);
getResponseOfHttpGet(url2, combineResponses);
getResponseOfHttpGet(url3, combineResponses);
