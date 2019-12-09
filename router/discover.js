var express = require("express");
var router = express.Router();
var request = require("request");

// the movie url
var movie_url = "https://api.themoviedb.org/3";
// img url
var img = "https://image.tmdb.org/t/p/w300";
// api key
var api_key = "api_key=75019398caf1e5d87c0e4198fc9f17e2";


// sort_By_key
var sort_by_key = "&sort_by=";
// year_key
var year_key = "&year=";

// discover keys
var discover_movie_key = "/discover/movie";
var discover_tv_key = "/discover/tv";

router.get("/movies", function (req, res) {

    // seçilen sort_By'dan gelen değer
    var selectsira = req.query.selectedsira;
    var siralama = sort_by_key + selectsira;

    // Seçilen years'dan gelen değer
    var selectyear = req.query.selectyears;
    var years = year_key + selectyear;

    var movie = movie_url + discover_movie_key + '?' + api_key + siralama + years;

    request(movie, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var movi = JSON.parse(body);
            res.render("discover/movies", {
                movi: movi,
                img: img
            });
        }
    });
});

router.get("/tv", function (req, res) {
    // seçilen sort_By'dan gelen değer
    var selectsira = req.query.selectedsira;
    var siralama = sort_by_key + selectsira;

    // Seçilen years'dan gelen değer
    var selectyear = req.query.selectyears;
    var years = year_key + selectyear;

    var movie = movie_url + discover_tv_key + '?' + api_key + siralama + years;

    request(movie, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var movi = JSON.parse(body);
            res.render("discover/tv", {
                movi: movi,
                img: img
            });
        }
    });
});

module.exports = router;