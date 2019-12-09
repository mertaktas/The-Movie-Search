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


// search movie key
var search_movie_key = "/search/movie?query=";

// discover keys
var discover_movie_key = "/discover/movie";
var discover_tv_key = "/discover/tv";

// person popular key
var person_popular_key = "/person/popular";

// movie keys
var movie_popular_key = "/movie/popular";
var movie_toprated_key = "/movie/top_rated";
var movie_upcoming_key = "/movie/upcoming";
var movie_nowplaying_key = "/movie/now_playing";

// tv keys
var tv_popular_key = "/tv/popular";
var tv_toprated_key = "/tv/top_rated";
var tv_nowplaying_key = "/tv/on_the_air";

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