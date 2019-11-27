const express = require('express');
const E4 = require('../../models/E4');
const app = express();

// @route GET /api/e4/:type
// @desc Get all elite 4 members/champions
// @access Public
app.get('/:type', (req, res) => {
    E4.find({type: req.params.type})
    .then(results => 
        results.length > 0 ? res.json(results): res.sendStatus(400))
    .catch(err => res.json(err));
});

module.exports = app;