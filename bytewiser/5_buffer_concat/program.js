var allBuffers;

process.stdin.on("data", function(chunk) {
    var buffers, size;

    if (allBuffers) {
        buffers = [allBuffers, chunk];
        size = allBuffers.length + chunk.length;
        allBuffers = Buffer.concat(buffers, size);
    } else {
        allBuffers = chunk;
    }
});

process.stdin.on("end", function() {
    console.log(allBuffers);
});
