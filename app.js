const express = require("express"),
    app = express();

app.set("view engine", "ejs");

// ******* ROUTES *********
const indexRoute = require("./router/index"),
    discoverRoute = require("./router/discover"),
    moviesRoute = require("./router/movies"),
    tvsRoute = require("./router/tvs"),
    peopleRoute = require("./router/people");

app.use("/", indexRoute);
app.use("/discover", discoverRoute);
app.use("/movies", moviesRoute);
app.use("/tvs", tvsRoute);
app.use("/people", peopleRoute);

const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log(`Server Has Started port: ${port}`);
});