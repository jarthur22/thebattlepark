const express = require('express');

const router = express.Router();

const CLIENT_ID = '562770948764205077';
const CLIENT_SECRET = '-eQrhkMMZS-aEvuzpCJuoQ9z6BMNZdSk';
const redirect = encodeURIComponent('http://localhost:4000/api/discord/callback');

router.get('/login', (req, res) => {
  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
});

module.exports = router;