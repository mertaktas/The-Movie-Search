var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    //Sorgulama
    var query = req.query.search;

    // api key
    var api = "&api_key=75019398caf1e5d87c0e4198fc9f17e2";

    // arama url base
    var searchmovie = "https://api.themoviedb.org/3/search/movie?query=";

    // search baglantı tamamı
    var url = searchmovie + query + api;

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("results", {
                source: source
            });
        }
    });


});

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Server Has Started!");
});