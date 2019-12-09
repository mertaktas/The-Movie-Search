var express = require("express");
var router = express.Router();
var request = require("request");

// the movie url
var movie_url = "https://api.themoviedb.org/3";
// img url
var img = "https://image.tmdb.org/t/p/w300";
// api key
var api_key = "api_key=75019398caf1e5d87c0e4198fc9f17e2";

// tv keys
var tv_popular_key = "/tv/popular";
var tv_toprated_key = "/tv/top_rated";
var tv_nowplaying_key = "/tv/on_the_air";

router.get("/populartv", function (req, res) {

    var people = movie_url + tv_popular_key + '?' + api_key;



    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("tvs/popular_tv", {
                source: source,
                img: img
            });
        }
    });
});

router.get("/topratedtv", function (req, res) {

    var people = movie_url + tv_toprated_key + '?' + api_key;


    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("tvs/toprated_tv", {
                source: source,
                img: img
            });
        }
    });
});

router.get("/nowplayingtv", function (req, res) {

    var people = movie_url + tv_nowplaying_key + '?' + api_key;


    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("tvs/nowplaying_tv", {
                source: source,
                img: img
            });
        }
    });
});

module.exports = router;