const express = require("express"),
    router = express.Router(),
    request = require("request"),
    data = require("../data/key");

router.get("/populermovie", (req, res) => {
    const people = data.movie_url + data.movie_popular_key + '?' + data.api_key;
    request(people, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const source = JSON.parse(body);
            res.render("movies/populer_movie", {
                source: source,
                img: data.img
            });
        }
    });
});

router.get("/toprated", (req, res) => {
    const people = data.movie_url + data.movie_toprated_key + '?' + data.api_key;
    request(people, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const source = JSON.parse(body);
            res.render("movies/top_rated", {
                source: source,
                img: data.img
            });
        }
    });
});

router.get("/upcoming", (req, res) => {
    const people = data.movie_url + data.movie_upcoming_key + '?' + data.api_key;
    request(people, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const source = JSON.parse(body);
            res.render("movies/upcoming", {
                source: source,
                img: data.img
            });
        }
    });
});

router.get("/nowplaying", (req, res) => {
    const people = data.movie_url + data.movie_nowplaying_key + '?' + data.api_key;
    request(people, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const source = JSON.parse(body);
            res.render("movies/now_playing", {
                source: source,
                img: data.img
            });
        }
    });
});

module.exports = router;