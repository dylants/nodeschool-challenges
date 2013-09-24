var fs = require("fs");

/**
 * Finds and returns an Array of file names which end in the extension passed
 * in as the filter
 * @param  {String}   dirName  The path to the directory to scan
 * @param  {String}   filter   The file extension to filter (without the dot)
 * @param  {Function} callback Function to call with first argument any error,
 *                             second the filtered array
 */
var findMatchingFiles = function(dirName, filter, callback) {
    fs.readdir(dirName, function(error, files) {
        var filteredArray = [];

        if (error) {
            // if there's an error, call the callback with it
            callback(error);
        } else {
            // else loop through the files
            files.forEach(function(file) {
                var regex;

                regex = new RegExp("\\w*\\." + filter + "$");
                // check if the file ends in our file extension
                if (regex.test(file)) {
                    // if so, add it to our list
                    filteredArray.push(file);
                }
            });
            // call the callback without error, and with filtered list
            callback(null, filteredArray);
        }
    });
};

module.exports = findMatchingFiles;
