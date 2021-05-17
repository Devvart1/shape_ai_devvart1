const { response } = require("express");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(res, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {
    var n1 = Number(req.body.num1);
    console.log("")
    var n2 = Number(req.body.num2);
    var result = n1/(n2*n2);
    res.send("THE ANSWER IS :  " + result);
});

app.listen(4200, function() {
    console.log("Server has started on port")
});