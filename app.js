var express = require("express");
var app = express();
var request = require("request");


app.set("view engine", "ejs");


// the movie url
var movie_url = "https://api.themoviedb.org/3";
// img url
var img = "https://image.tmdb.org/t/p/w300";
// api key
var api_key = "api_key=75019398caf1e5d87c0e4198fc9f17e2";


// sort_By_key
var sort_by_key = "&sort_by=";
// year_key
var year_key = "&year=";


// search movie key
var search_movie_key = "/search/movie?query=";

// discover keys
var discover_movie_key = "/discover/movie";
var discover_tv_key = "/discover/tv";

// person popular key
var person_popular_key = "/person/popular";

// movie keys
var movie_popular_key = "/movie/popular";
var movie_toprated_key = "/movie/top_rated";
var movie_upcoming_key = "/movie/upcoming";
var movie_nowplaying_key = "/movie/now_playing";

// tv keys
var tv_popular_key = "/tv/popular";
var tv_toprated_key = "/tv/top_rated";
var tv_nowplaying_key = "/tv/on_the_air";


app.get("/", function (req, res) {
    res.render('home');
});

app.get("/search", function (req, res) {

    //Sorgudan gelen değer
    var query = req.query.search;

    //search baglantı tamamı
    var url = movie_url + search_movie_key + query + '&' + api_key;

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("search", {
                source: source,
                img: img
            });
        }
    });
});

app.get("/movies", function (req, res) {

    // seçilen sort_By'dan gelen değer
    var selectsira = req.query.selectedsira;
    var siralama = sort_by_key + selectsira;

    // Seçilen years'dan gelen değer
    var selectyear = req.query.selectyears;
    var years = year_key + selectyear;

    var movie = movie_url + discover_movie_key + '?' + api_key + siralama + years;

    request(movie, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var movi = JSON.parse(body);
            res.render("discover/movies", {
                movi: movi,
                img: img
            });
        }
    });
});

app.get("/tv", function (req, res) {
    // seçilen sort_By'dan gelen değer
    var selectsira = req.query.selectedsira;
    var siralama = sort_by_key + selectsira;

    // Seçilen years'dan gelen değer
    var selectyear = req.query.selectyears;
    var years = year_key + selectyear;

    var movie = movie_url + discover_tv_key + '?' + api_key + siralama + years;

    request(movie, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var movi = JSON.parse(body);
            res.render("discover/tv", {
                movi: movi,
                img: img
            });
        }
    });
});

app.get("/people", function (req, res) {

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

app.get("/populermovie", function (req, res) {

    var people = movie_url + movie_popular_key + '?' + api_key;

    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("movies/populer_movie", {
                source: source,
                img: img
            });
        }
    });
});

app.get("/toprated", function (req, res) {



    var people = movie_url + movie_toprated_key + '?' + api_key;


    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("movies/top_rated", {
                source: source,
                img: img
            });
        }
    });
});

app.get("/upcoming", function (req, res) {

    var people = movie_url + movie_upcoming_key + '?' + api_key;

    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("movies/upcoming", {
                source: source,
                img: img
            });
        }
    });
});

app.get("/nowplaying", function (req, res) {

    var people = movie_url + movie_nowplaying_key + '?' + api_key;

    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("movies/now_playing", {
                source: source,
                img: img
            });
        }
    });
});

app.get("/populartv", function (req, res) {

    var people = movie_url + tv_popular_key + '?' + api_key;



    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("tvs/popular_tv", {
                source: source,
                img: img
            });
        }
    });
});

app.get("/topratedtv", function (req, res) {

    var people = movie_url + tv_toprated_key + '?' + api_key;


    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("tvs/toprated_tv", {
                source: source,
                img: img
            });
        }
    });
});

app.get("/nowplayingtv", function (req, res) {

    var people = movie_url + tv_nowplaying_key + '?' + api_key;


    request(people, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var source = JSON.parse(body);
            res.render("tvs/nowplaying_tv", {
                source: source,
                img: img
            });
        }
    });
});


var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Server Has Started!");
});