var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

var indexRoute = require("./router/index");
app.use("/", indexRoute);

var discoverRoute = require("./router/discover");
app.use("/discover", discoverRoute);

var moviesRoute = require("./router/movies");
app.use("/movies", moviesRoute);

var tvsRoute = require("./router/tvs");
app.use("/tvs", tvsRoute);

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Server Has Started!");
});