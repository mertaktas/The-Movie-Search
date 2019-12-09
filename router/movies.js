var express = require("express");
var router = express.Router();
var request = require("request");
var data = require("../data/key");

// the movie url
var movie_url = "https://api.themoviedb.org/3";
// img url
var img = "https://image.tmdb.org/t/p/w300";
// api key
var api_key = "api_key=75019398caf1e5d87c0e4198fc9f17e2";

// movie keys
var movie_popular_key = "/movie/popular";
var movie_toprated_key = "/movie/top_rated";
var movie_upcoming_key = "/movie/upcoming";
var movie_nowplaying_key = "/movie/now_playing";

router.get("/populermovie", function (req, res) {

    var people = movie_url + movie_popular_key + '?' + api_key;

    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("movies/populer_movie", {
                source: source,
                img: img
            });
        }
    });
});

router.get("/toprated", function (req, res) {



    var people = movie_url + movie_toprated_key + '?' + api_key;


    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("movies/top_rated", {
                source: source,
                img: img
            });
        }
    });
});

router.get("/upcoming", function (req, res) {

    var people = movie_url + movie_upcoming_key + '?' + api_key;

    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("movies/upcoming", {
                source: source,
                img: img
            });
        }
    });
});

router.get("/nowplaying", function (req, res) {

    var people = movie_url + movie_nowplaying_key + '?' + api_key;

    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("movies/now_playing", {
                source: source,
                img: img
            });
        }
    });
});

module.exports = router;