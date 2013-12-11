var crypto = require("crypto"),
    decipher;

decipher = crypto.createDecipher("aes256", process.argv[2]);
decipher.pipe(process.stdout);
process.stdin.pipe(decipher);
