var trumpet = require("trumpet"),
    through = require("through"),
    tr, stream;

// create a trumpet
tr = trumpet();

// state the output of this trumpet will go to stdout
tr.pipe(process.stdout);

// create a read/write stream from the .loud selector
stream = tr.select(".loud").createStream();
// pipe the selector to through
stream.pipe(through(function(buf) {
    // in through's write, uppercase everything
    this.queue(buf.toString().toUpperCase());
// pipe the output to the same stream
})).pipe(stream);

// now set all stdin to our trumpet
process.stdin.pipe(tr);
