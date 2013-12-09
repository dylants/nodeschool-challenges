var through = require('through');
var split = require('split');

var count = 1;
var throughSplit = through(function(line) {
    if (count % 2 === 0) {
        console.log(line.toString().toUpperCase());
    } else {
        console.log(line.toString().toLowerCase());
    }
    count++;
}, function() {});

process.stdin.pipe(split()).pipe(throughSplit);
