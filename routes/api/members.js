const express = require('express');
const Member = require('../../models/Member');
const app = express();

// @route GET /api/members/:id
// @desc Get all elite 4 members/champions
// @access Public
app.get('/:id', (req, res) => {
    Member.findOne({id: req.params.id}).then(results => {
        res.json(results);
    }).catch(err => res.json(err));
});

module.exports = app;