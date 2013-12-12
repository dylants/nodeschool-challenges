process.stdin.on("data", function(chunk) {
    var array;

    array = new Uint8Array(chunk);
    console.log(JSON.stringify(array));
});
