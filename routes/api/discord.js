const express = require('express');
const app = express();

app.get('/callback', (req, res) => {
    res.json(req.query.code);
});