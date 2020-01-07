const express = require('express');
const Member = require('../../models/Member');
const app = express();

// @route GET /api/members/:id
// @desc Get member by id
// @access Public
app.get('/:id', (req, res) => {
    Member.findOne({id: req.params.id}).then(results => {
        res.json(results);
    }).catch(err => res.json(err));
});

// @route GET /api/members/bracket/:bracket
// @desc Get all the members of a specific bracket
// @access Public
app.get('/bracket/:bracket', (req, res) => {
    Member.find({brackets: {$in: req.params.bracket}}).then(results => {
        results.length > 0 ? res.json(results): res.sendStatus(400)
    }).catch(err => res.json(err));
});

module.exports = app;