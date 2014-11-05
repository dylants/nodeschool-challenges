var express = require("express"),
    app = express(),
    bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({
    extended: false
}));

app.post("/form", function(req, res) {
    var data = req.body.str.split("").reverse().join("");
    res.send(data);
});

app.listen(process.argv[2]);
