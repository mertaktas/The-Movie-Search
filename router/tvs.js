const express = require("express"),
    router = express.Router(),
    request = require("request"),
    data = require("../data/key");

const people = data.movie_url + data.tv_popular_key + '?' + data.api_key;

router.get("/populartv", (req, res) => {
    request(people, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const source = JSON.parse(body);
            res.render("tvs/popular_tv", {
                source: source,
                img: data.img
            });
        }
    });
});

router.get("/topratedtv", (req, res) => {
    request(people, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const source = JSON.parse(body);
            res.render("tvs/toprated_tv", {
                source: source,
                img: data.img
            });
        }
    });
});

router.get("/nowplayingtv", (req, res) => {
    request(people, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const source = JSON.parse(body);
            res.render("tvs/nowplaying_tv", {
                source: source,
                img: data.img
            });
        }
    });
});

module.exports = router;