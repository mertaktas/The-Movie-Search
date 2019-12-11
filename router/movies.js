const express = require("express"),
    router = express.Router(),
    request = require("request"),
    data = require("../data/key");

router.get("/populermovie", function (req, res) {
    var people = data.movie_url + data.movie_popular_key + '?' + data.api_key;
    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("movies/populer_movie", {
                source: source,
                img: data.img
            });
        }
    });
});

router.get("/toprated", function (req, res) {
    var people = data.movie_url + data.movie_toprated_key + '?' + data.api_key;
    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("movies/top_rated", {
                source: source,
                img: data.img
            });
        }
    });
});

router.get("/upcoming", function (req, res) {
    var people = data.movie_url + data.movie_upcoming_key + '?' + data.api_key;
    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("movies/upcoming", {
                source: source,
                img: data.img
            });
        }
    });
});

router.get("/nowplaying", function (req, res) {
    var people = data.movie_url + data.movie_nowplaying_key + '?' + data.api_key;
    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("movies/now_playing", {
                source: source,
                img: data.img
            });
        }
    });
});

module.exports = router;