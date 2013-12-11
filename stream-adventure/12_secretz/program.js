var crypto = require("crypto"),
    zlib = require("zlib"),
    tar = require("tar"),
    decipher, gunzipStream, parser, hashStream;

decipher = crypto.createDecipher(process.argv[2], process.argv[3]);
gunzipStream = zlib.createGunzip();
parser = tar.Parse();

parser.on("entry", function(entry) {
    var md5Hash;

    if (entry.type === "File") {
        // create an md5 hash and set hex encoding
        md5Hash = crypto.createHash("md5");
        md5Hash.setEncoding("hex");

        // send the entry to the md5 hash, hashing it, and send the hash to stdout
        entry.pipe(md5Hash).pipe(process.stdout);
        md5Hash.on("end", function() {
            // once it's been sent, include the entry path on the line
            console.log(" " + entry.path);
        });
    }
});

// unencrypt, then gunzip, then tar expand
decipher.pipe(gunzipStream).pipe(parser);


process.stdin.pipe(decipher);
