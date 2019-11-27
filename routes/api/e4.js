const express = require('express');
const E4 = require('../../models/E4');
const app = express();

// @route GET /api/e4/e4
//@desc Get all elite four members
// @access Public
app.get('/e4', (req, res) => {
    E4.find({type: "e4"})
    .then(results => 
        results.length > 0 ? res.json(results[0]): res.sendStatus(400))
    .catch(err => res.json(err));
});

// @route GET /api/e4/champs
// @desc GET all elite four champions
// @access Public
app.get('/champs', (req, res) => {
    E4.find({type: "champ"})
    .then(results => 
        results.length > 0 ? res.json(results[0]): res.sendStatus(400))
    .catch(err => res.json(err));
});