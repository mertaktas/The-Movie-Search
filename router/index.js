const express = require("express"),
    router = express.Router(),
    request = require("request"),
    data = require("../data/key");

router.get("/", (req, res) => {
    res.render('home');
});

router.get("/search", (req, res) => {
    const query = req.query.search;
    const url = data.movie_url + data.search_movie_key + query + '&' + data.api_key;
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const source = JSON.parse(body);
            res.render("search", {
                source: source,
                img: data.img
            });
        }
    });
});

module.exports = router;