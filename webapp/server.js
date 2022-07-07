/* All backend http requests go here */
const express = require('express');
const path = require('path');
const ejs = require("ejs");
const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static("./public"));

/* Set views for all the pages */

app.get("/", function(req, res) {
    res.render("index", {
        title: "Fixlah! select role"
    });
});

app.get("/login", function(req, res) {
    res.render("login", {
        title: "Login to Fixlah!"
    });
});

app.get("/register", function(req, res) {
    res.render("register", {
        title: "Create an account"
    });
});

app.get("/reset", function(req, res) {
    res.render("reset", {
        title: "Reset password"
    });
});

app.get("/home", function(req, res) {
    res.render("home", {
        title: "Homepage"
    });
});

/* Check if node server is running on port 8080 */

app.listen(8080, function(error){
    if(error) throw error;
    console.log("Server created Successfully");
});