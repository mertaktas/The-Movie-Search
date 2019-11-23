var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

var img = "https://image.tmdb.org/t/p/w300";

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
                source: source,
                img: img
            });
        }
    });
});

app.get("/movies", function (req, res) {
    var selectsira = req.query.selectedsira;
    var siralama = "&sort_by=" + selectsira;
    //Sorgulama
    var selectyear = req.query.selectyears;
    var years = "&year=" + selectyear;


    var page = "&page=1"

    var movies = "https://api.themoviedb.org/3/discover/movie?api_key=75019398caf1e5d87c0e4198fc9f17e2&language=en-US&sort_by=popularity.desc";

    var movie = movies + siralama + page + years;
    request(movie, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var movi = JSON.parse(body);
            res.render("movies", {
                movi: movi,
                img: img
            });
        }
    });
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Server Has Started!");
});