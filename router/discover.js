const express = require("express"),
    router = express.Router(),
    request = require("request"),
    data = require("../data/key");



router.get("/movies", (req, res) => {
    const selectsira = req.query.selectedsira;
    const siralama = data.sort_by_key + selectsira;
    const selectyear = req.query.selectyears;
    const years = data.year_key + selectyear;
    const movie = data.movie_url + data.discover_movie_key + '?' + data.api_key + siralama + years;
    request(movie, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const movi = JSON.parse(body);
            res.render("discover/movies", {
                movi: movi,
                img: data.img
            });
        }
    });
});

router.get("/tv", (req, res) => {
    const selectsira = req.query.selectedsira;
    const siralama = data.sort_by_key + selectsira;
    const selectyear = req.query.selectyears;
    const years = data.year_key + selectyear;
    const movie = data.movie_url + data.discover_tv_key + '?' + data.api_key + siralama + years;
    request(movie, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const movi = JSON.parse(body);
            res.render("discover/tv", {
                movi: movi,
                img: data.img
            });
        }
    });
});

module.exports = router;