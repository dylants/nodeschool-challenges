var buf = new Buffer(6);
buf[0] = 0;
buf[1] = 15;
buf[2] = 24;
buf[3] = 3;
buf[4] = 250;
buf[5] = 83;
console.log(buf.toString("hex"));
