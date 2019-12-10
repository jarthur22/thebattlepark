const express = require('express');
const axios = require('axios');

const app = express();

const CLIENT_ID = '562770948764205077';
const CLIENT_SECRET = '-eQrhkMMZS-aEvuzpCJuoQ9z6BMNZdSk';
const redirect = encodeURIComponent('http://localhost:4000/api/discord/callback');

app.get('/login', (req, res) => {
    console.log("here");
  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
});

module.exports = router;