var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

var indexRoute = require("./router/index");
app.use("/", indexRoute);

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Server Has Started!");
});