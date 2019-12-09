var express = require("express");
var router = express.Router();
var request = require("request");

// the movie url
var movie_url = "https://api.themoviedb.org/3";
// img url
var img = "https://image.tmdb.org/t/p/w300";
// api key
var api_key = "api_key=75019398caf1e5d87c0e4198fc9f17e2";

// search movie key
var search_movie_key = "/search/movie?query=";

router.get("/", function (req, res) {
    res.render('home');
});

router.get("/search", function (req, res) {

    //Sorgudan gelen değer
    var query = req.query.search;

    //search baglantı tamamı
    var url = movie_url + search_movie_key + query + '&' + api_key;

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("search", {
                source: source,
                img: img
            });
        }
    });
});

module.exports = router;