const express = require('express');
const Tournament = require('../../models/Tournament');
const app = express();

// @route /api/tournaments/:bracket
// @desc Get all tournaments for a bracket
// @access Public
app.get('/:bracket', (req, res) => {
    Tournament.find({bracket_no: req.params.bracket}).then(results => {
        res.json(results);
    }).catch(err => res.json(err));
});

module.exports = app;