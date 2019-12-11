const express = require("express"),
    router = express.Router(),
    request = require("request"),
    data = require("../data/key");

router.get("/", function (req, res) {
    res.render('home');
});

router.get("/search", function (req, res) {

    //Sorgudan gelen değer
    var query = req.query.search;

    //search baglantı tamamı
    var url = data.movie_url + data.search_movie_key + query + '&' + data.api_key;

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("search", {
                source: source,
                img: data.img
            });
        }
    });
});

module.exports = router;