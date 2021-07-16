const exp = require('constants');
const express = require('express');
const app = express();
const requests = require('requests');
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 7500;

const Statpath = path.join(__dirname, "../public");
const viewspath = path.join(__dirname, "../template/views");
const Partialpath = path.join(__dirname, "../template/Partials");


app.set('view engine', 'hbs');
app.set("views", viewspath);
hbs.registerPartials(Partialpath);
app.use(express.static(Statpath));




app.get("", (req, res) => {
    res.render("index");
});

app.get("/Home", (req, res) => {
    res.render("index");
});

app.get("/weather", (req, res) => {
    res.render("weather");
})
app.get("/about", (req, res) => {
    res.render("about");
})


app.get("*", (req, res) => {
    res.render("404er", {
        errmsg: "Oops Page not found, Click here to go back😇",
    });

})

app.listen(port, () => {
    console.log("Listening.....");
})