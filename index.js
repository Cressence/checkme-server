const express = require('express');
const app = express();

const PORT = 3000;

const home_en = require('./src/home_en.json');
const help_en = require('./src/help_en.json');
const statistics_en = require('./src/statistics_en.json');

// serve home screen data
app.get("/home", (req, res) => {
    res.send(home_en);
});

// serve help screen data
app.get("/help", (req, res) => {
    res.send(help_en);
});

// serve statistics data
app.get("/statistics", (req, res) => {
    res.send(statistics_en);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));