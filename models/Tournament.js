const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TournamentSchema = new Schema({
    rsvpurl: String,
    title: String,
    date: String,
    rules: String,
    rsvps: String,
    bracket_no: String,
    author: String
}, {collection: 'tournaments'});

module.exports = Tournament = mongoose.model("tournaments", TournamentSchema);