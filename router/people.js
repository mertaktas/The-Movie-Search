var express = require("express");
var router = express.Router();
var request = require("request");

// the movie url
var movie_url = "https://api.themoviedb.org/3";
// img url
var img = "https://image.tmdb.org/t/p/w300";
// api key
var api_key = "api_key=75019398caf1e5d87c0e4198fc9f17e2";

// person popular key
var person_popular_key = "/person/popular";

router.get("/", function (req, res) {

    var people = movie_url + person_popular_key + '?' + api_key;

    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("people", {
                source: source,
                img: img
            });
        }
    });
});
module.exports = router;