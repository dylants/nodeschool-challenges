var concat = require('concat-stream');

process.stdin.pipe(concat(function(stuff) {
    console.log(stuff.toString().split("").reverse().join(""));
}));
