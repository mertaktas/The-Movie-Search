var express = require("express");
var router = express.Router();
var request = require("request");
var data = require("../data/key");

router.get("/", function (req, res) {

    var people = data.movie_url + data.person_popular_key + '?' + data.api_key;

    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("people", {
                source: source,
                img: data.img
            });
        }
    });
});

module.exports = router;