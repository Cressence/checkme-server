const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const home_en = require('./src/home_en.json');
const home_fr = require('./src/home_fr.json');
const help_en = require('./src/help_en.json');
const help_fr = require('./src/help_fr.json');
const statistics_en = require('./src/statistics_en.json');
const statistics_fr = require('./src/statistics_fr.json');
const deseases = require('./src/diseases.json');

// serve home screen data
app.get("/home", (req, res) => {
    if (req.query.lng == "fr") {
        res.send(home_fr);
    } else {
        res.send(home_en);
    }
});

// serve help screen data
app.get("/help", (req, res) => {
    if (req.query.lng == "fr") {
        res.send(help_fr);
    } else {
        res.send(help_en);
    }
});

// serve statistics data
app.get("/statistics", (req, res) => {
    if (req.query.lng == "fr") {
        res.send(statistics_fr);
    } else {
        res.send(statistics_en);
    }
});

// serve deseases data
app.get("/deseases", (req, res) => {
    if (req.query.lng == "en") {
        res.send(deseases);
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));