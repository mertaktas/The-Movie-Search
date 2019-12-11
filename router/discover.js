const express = require("express"),
    router = express.Router(),
    request = require("request"),
    data = require("../data/key");

router.get("/movies", function (req, res) {

    // seçilen sort_By'dan gelen değer
    var selectsira = req.query.selectedsira;
    var siralama = data.sort_by_key + selectsira;

    // Seçilen years'dan gelen değer
    var selectyear = req.query.selectyears;
    var years = data.year_key + selectyear;

    var movie = data.movie_url + data.discover_movie_key + '?' + data.api_key + siralama + years;

    request(movie, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var movi = JSON.parse(body);
            res.render("discover/movies", {
                movi: movi,
                img: data.img
            });
        }
    });
});

router.get("/tv", function (req, res) {
    // seçilen sort_By'dan gelen değer
    var selectsira = req.query.selectedsira;
    var siralama = data.sort_by_key + selectsira;

    // Seçilen years'dan gelen değer
    var selectyear = req.query.selectyears;
    var years = data.year_key + selectyear;

    var movie = data.movie_url + data.discover_tv_key + '?' + data.api_key + siralama + years;

    request(movie, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var movi = JSON.parse(body);
            res.render("discover/tv", {
                movi: movi,
                img: data.img
            });
        }
    });
});

module.exports = router;