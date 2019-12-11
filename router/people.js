const express = require("express"),
    router = express.Router(),
    request = require("request"),
    data = require("../data/key");

router.get("/", (req, res) => {
    const people = data.movie_url + data.person_popular_key + '?' + data.api_key;
    request(people, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const source = JSON.parse(body);
            res.render("people", {
                source: source,
                img: data.img
            });
        }
    });
});

module.exports = router;