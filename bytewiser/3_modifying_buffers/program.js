process.stdin.on("data", function(chunk) {
    var i;

    // loop through the chunk of data (buffer)
    for (i = 0; i < chunk.length; i++) {
        // if at any point, one of these octets is "." (46),
        // we convert that to a "!"
        if (chunk[i] === 46) {
            chunk.write("!", i);
        }
    }

    // once the manipulation is done, output the chunk of data
    console.log(chunk);
});
